/**
 * PV Profile Page
 * Handles the PV generation profile visualization
 */

/**
 * Get neighbourhood code from URL parameter
 * @returns {string|null} The neighbourhood code or null
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

// DBG-040, P1, 2026-08-24. renderPVScale stood here. It drew the PV GENERATION
// INTENSITY at 32px, unlabelled, at the top of the PV page, which is the metric
// CHV asked on 2026-08-24 to take out of the interface. The function is deleted
// with the bar. See the comment in layer2_pv_breakdown.html for why the bar was
// removed rather than re-pointed at another quantity.

/**
 * Render the Energy Status icon
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function renderEnergyStatus(neighbourhoodCode) {
    const container = document.getElementById('energy-status-container');
    if (!container) return;

    // Find the neighbourhood to get its energy status
    const neighbourhood = NEIGHBOURHOODS.find(n => n.code === neighbourhoodCode);
    if (!neighbourhood || !neighbourhood.energyStatus) {
        container.innerHTML = '';
        return;
    }

    const status = neighbourhood.energyStatus;
    const statusImage = ENERGY_STATUS_IMAGES[status];

    if (statusImage) {
        container.innerHTML = `
            <div class="energy-status-header-display">
                <img src="${statusImage}" alt="${status}" title="${status}" class="energy-status-header-icon">
            </div>
        `;
    }
}

// ── Hourly heatmap: removed ─────────────────────────────────────────────────
//
// STAGE-04 task 4.11, decided by Koral 2026-08-10. The wall and roof hourly
// irradiation heatmap was dead code. js/heatmap-data.js carried data for 5 of
// the 35 neighbourhoods (RC-R, RC-D, RC-T, RC-MR2, RC-MR3), the ten source CSVs
// under Content/Images_PVpage/RC/ all exist, but layer2_pv_breakdown.html has
// no canvas to draw into and renderHourlyHeatmaps() was never called. The file
// was still downloaded on every visit to the page.
//
// Removed: RDYLBU_R, heatmapColor(), drawHeatmapCanvas(), renderHourlyHeatmaps(),
// js/heatmap-data.js and its script tag. The source CSVs are untouched, so this
// is recoverable if the other 30 neighbourhoods are ever produced upstream.

// ── Image updater ────────────────────────────────────────────────────────────

/**
 * Update PV profile images for specific neighbourhoods.
 * RC-HR2 uses the legacy layout with its own images; all others use the new 3-row layout.
 * Hourly heatmaps are rendered to canvas from embedded data (no fetch).
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function updatePVImages(neighbourhoodCode) {
    // No figures/images to update or render
}

/**
 * Determine whether RoP should be shown based on the stored energy selection.
 * RoP is only applicable when Heat Pump COP 4 is selected.
 * @returns {boolean} True if cop4 demand is selected.
 */
/*
 * isCOP4Selected() was the RoP display gate. Removed from use on 2026-08-10,
 * D0.3b: the publication computes RoP at COP 1 and COP 3.5, never COP 4, so
 * the gate hid the metric in every case the paper reports. The function is
 * kept because it is cheap and may be wanted for a COP specific note later.
 */
function isCOP4Selected() {
    try {
        const raw = sessionStorage.getItem('energySelections');
        if (!raw) return false;
        const selections = JSON.parse(raw);
        return Array.isArray(selections.demand) && selections.demand.includes('cop4');
    } catch (e) {
        return false;
    }
}

/**
 * D0.3, D0.3b, DBG-018. Ratio of Performance, computed rather than stored.
 *
 * Published definition, NUs_1st_Paper.md line 309: annual on-site PV
 * generation divided by annual total building energy demand, site energy, per
 * Neighbourhood Unit. RoP > 1 is net energy positive, RoP > 0.95 is near
 * energy positive.
 *
 * The old COP 4 display gate is gone, D0.3b: the publication computes RoP at
 * COP 1 and COP 3.5, never COP 4, so gating on COP 4 hid the metric in every
 * case the paper actually reports. It is shown for every demand option except
 * the ideal thermal load, where an ideal load makes the ratio meaningless.
 *
 * @param {string} nuCode
 * @param {string} envelope - active envelope key
 * @param {string} scenario - active scenario tag
 * @param {number|undefined} pvIntensity - kWh/m²·yr, already resolved
 * @returns {string} the ratio to three decimals, or an em dash
 */
function computeRoP(nuCode, envelope, scenario, pvIntensity) {
    const hidden = (typeof LMN_CONFIG !== 'undefined') ? LMN_CONFIG.rop.hiddenForScenarios : ['IAL'];
    if (hidden.indexOf(scenario) !== -1) return '—';

    const demand = getEnergyData(envelope, nuCode, scenario);
    if (!demand || !demand.total || pvIntensity == null) return '—';

    return (pvIntensity / demand.total).toFixed(3);
}

/**
 * Resolve the active envelope and EEM scenario tag using the same logic as
 * energy.js renderTreemap(), so the PV page and the energy breakdown page
 * always read from the identical data row.
 *
 * Returns { envelope, scenario, pvIntensity } where:
 *   envelope      — the raw URL param (e.g. 'necb-2017', 'high-performance-necb')
 *   scenario      — one of DEFAULT / IAL / EEM1 / EEM2 / EEM3 / EEM4
 *   pvIntensity   — ENVELOPE_ENERGY_DATA[refEnvelope][code][scenario].pv (or undefined)
 *
 * @param {string} code - Neighbourhood code
 * @returns {{ envelope: string, scenario: string, pvIntensity: number|undefined }}
 */
function resolveEnvelopeAndScenario(code) {
    const urlParams = new URLSearchParams(window.location.search);
    let envelope = urlParams.get('envelope');
    if (envelope) {
        sessionStorage.setItem('selectedEnvelope', envelope);
    } else {
        try {
            const filtersJson = sessionStorage.getItem('activeFilters');
            if (filtersJson) {
                const filters = JSON.parse(filtersJson);
                if (filters.envelope) envelope = filters.envelope;
            }
        } catch (e) {}
        // CHV, 2026-08-17, point 2. No silent Montreal default. initPVPage
        // stops the page before this is reached with nothing.
        if (!envelope) envelope = sessionStorage.getItem('selectedEnvelope') || '';
    }

    // Read selections from sessionStorage (mirrors energy.js exactly)
    const selections = JSON.parse(
        sessionStorage.getItem('energySelections') || '{"load":[], "demand":[]}'
    );
    const loadSelections = selections.load || [];
    const demandSelections = selections.demand || [];

    // 1. Determine reference envelope and base level (mirrors energy.js)
    let refEnvelope = envelope;
    let baseLevel = 'DEFAULT';
    if (envelope.startsWith('high-performance-')) {
        baseLevel = 'EEM1';
        if (envelope === 'high-performance-necb') {
            refEnvelope = 'necb-2017';
        } else if (envelope === 'high-performance-ashrae') {
            refEnvelope = 'ashrae';
        }
    }

    // 2. Determine the active scenario tag
    let scenario;

    if (loadSelections.includes('thermal_load')) {
        // IAL path: prefer IAL, fall back to DEFAULT (mirrors energy.js)
        const hasIal = !!(ENVELOPE_ENERGY_DATA &&
                         ENVELOPE_ENERGY_DATA[refEnvelope] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code]['IAL']);
        scenario = hasIal ? 'IAL' : (baseLevel === 'EEM1' ? 'EEM1' : 'DEFAULT');
    } else {
        const hasHP = demandSelections.includes('cop4') ||
                      demandSelections.includes('cop3.5') ||
                      demandSelections.includes('cop3');
        const hasDhw = demandSelections.includes('dhw');
        const hasAppliances = demandSelections.includes('appliances');

        // Mirror energy.js: pv = startDataset.pv, where startDataset is
        // determined by hasHP only (DHW/Appliances without HP still use the
        // baseline dataset for pv — savings are applied only to the breakdown).
        if (hasHP) {
            if (hasDhw && hasAppliances) scenario = 'EEM4';
            else if (hasDhw) scenario = 'EEM3';
            else scenario = 'EEM2';
        } else {
            // No HP: baseline scenario carries the pv value
            scenario = (baseLevel === 'EEM1') ? 'EEM1' : 'DEFAULT';
        }
    }

    // 3. Look up pvIntensity from the SAME source as the energy page
    const pvIntensity = (ENVELOPE_ENERGY_DATA &&
                         ENVELOPE_ENERGY_DATA[refEnvelope] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code][scenario] !== undefined)
        ? ENVELOPE_ENERGY_DATA[refEnvelope][code][scenario].pv
        : undefined;

    return { envelope, scenario, pvIntensity };
}

/**
 * Update PV parameter values dynamically.
 * PV intensity is sourced from ENVELOPE_ENERGY_DATA (same source as energy.js),
 * so it always reflects the active envelope + EEM scenario selection.
 * RoP is only displayed when Heat Pump COP 4 is the active demand selection;
 * for all other selections (COP 3 or Thermal Load COP 1) it is shown as —.
 * @param {string} neighbourhoodCode - The neighbourhood code
 * @returns {number|undefined} pvIntensity, still used to compute the total in
 *          MWh/yr below. It is no longer displayed: DBG-040.
 */
function updatePVParameters(neighbourhoodCode) {
    if (!PV_GENERATION_DATA || !PV_GENERATION_DATA[neighbourhoodCode]) return undefined;

    const data = PV_GENERATION_DATA[neighbourhoodCode];

    // STAGE-04, DBG-013, answered by Koral 2026-08-10. The array parameters are
    // a property of the roof, not of the neighbourhood, and this page used to
    // report the flat-roof set for all 35 NUs. On the four house neighbourhoods
    // the panels lie flush on a pitched face: no rack, and ground coverage
    // ratio does not apply at all, so its row is suppressed rather than filled
    // with a number that means nothing. Both sets come from PV_methodology.md.
    const roof = (typeof LMN_CONFIG !== 'undefined')
        ? LMN_CONFIG.roofGroupFor(neighbourhoodCode)
        : null;

    const surfaceValue = roof ? roof.surface : data.surface;
    const mountingValue = roof ? roof.mounting : data.mounting;
    const gcrValue = (roof && !roof.gcrApplies)
        ? 'Does not apply'
        : (data.gcr ? (parseFloat(data.gcr) * 100).toFixed(0) + '%' : '');

    // D0.2, STAGE-00 task 0.7. The module efficiency is a single modelling
    // assumption, so it is never read from a per NU field or an HTML literal.
    // It does differ by roof group, because the pitched group is quoted on
    // aperture area and the flat group on module area.
    const efficiencyValue = roof
        ? roof.moduleEfficiencyLabel
        : LMN_CONFIG.pv.moduleEfficiencyLabel;

    // Resolve pvIntensity from envelope-aware source (same as energy.js)
    //
    // CHV, 2026-08-24: the intensity no longer appears on this page. It is
    // still read here because the total in MWh/yr below is computed from it,
    // which is the arithmetic dependency her instruction must not break.
    const { envelope, scenario, pvIntensity } = resolveEnvelopeAndScenario(neighbourhoodCode);

    // CHV, 2026-08-24: total PV array area, in square metres, in place of the
    // intensity. The value is an upstream extraction over the injected IDFs,
    // logged as X23 and DBG-038, and it is a parse rather than an EnergyPlus
    // run. WHERE IT HAS NOT PRODUCED A NUMBER, NOTHING IS SHOWN: the row is
    // hidden and no estimate is drawn. Never invent a number.
    const pvArea = (typeof PV_AREA_DATA !== 'undefined') ? PV_AREA_DATA[neighbourhoodCode] : undefined;
    const pvAreaDisplay = (pvArea != null)
        ? Math.round(pvArea).toLocaleString() + ' m²'
        : null;

    // D0.3, D0.3a, D0.3b and DBG-018. RoP is COMPUTED here, from the same two
    // numbers the rest of the tool uses, and is not read from a stored field.
    //
    // Two reasons. First, PV_GENERATION_DATA.rop is one value per NU and was
    // null on all 35, while RoP varies by envelope AND scenario, so there are
    // 2,845 of them. Second, DBG-018: storing a value derived from total and
    // pv creates a regeneration obligation every time either changes, and
    // both changed in 100 cells during the corrections of 2026-08-10.
    // Computing it at display time closes that obligation permanently.
    //
    // Floor area cancels out of the ratio, so D6.0 does not block it:
    //   RoP = (pv x area) / (total x area) = pv / total
    const ropValue = computeRoP(neighbourhoodCode, envelope, scenario, pvIntensity);

    // GFA lookup
    const gfa = (typeof GFA_DATA !== 'undefined') ? GFA_DATA[neighbourhoodCode] : undefined;
    const gfaDisplay = (gfa != null) ? gfa.toLocaleString() + ' m²' : '—';

    // Total PV Generation = intensity × conditioned area, displayed in MWh/yr
    //
    // DBG-029, fixed 2026-08-10. This used to multiply by GFA_DATA, the total
    // building area, which is the wrong denominator: pvIntensity is per HEATED
    // AND COOLED area, so the product was mixed-basis and read about twice the
    // truth on the house neighbourhoods. The upstream pipeline settles it,
    // main_BEM.py:1139 divides by conditioned_floor_area, and the CHV report
    // says the PV denominator is "the same denominator used for EUI".
    // CONDITIONED_AREA_DATA now carries that area for all 35 NUs.
    const condArea = (typeof CONDITIONED_AREA_DATA !== 'undefined')
        ? CONDITIONED_AREA_DATA[neighbourhoodCode]
        : undefined;
    const totalMWh = (pvIntensity != null && condArea != null)
        ? (pvIntensity * condArea / 1000)
        : null;
    const totalDisplay = (totalMWh != null) ? totalMWh.toFixed(1) + ' MWh/yr' : '—';

    // STAGE-04 task 4.8, decided by Koral 2026-08-10. Both areas are now on
    // screen. The page used to show the total building area alone directly
    // above a total computed against the heated and cooled area, so a reader
    // who multiplied the two numbers in front of them got twice the answer:
    // RC-D showed 21,201 m² beside 1,064.2 MWh/yr, and 100.4 x 21,201 / 1000
    // is 2,128. Naming the area the arithmetic actually uses removes that.
    const condDisplay = (condArea != null) ? condArea.toLocaleString() + ' m²' : '—';
    const totalTitle = 'Annual PV generation for the whole neighbourhood. Intensity multiplied by the heated and cooled floor area, which is the area the intensity is measured against.';

    const isLegacy = (neighbourhoodCode === 'RC-HR2');

    if (isLegacy) {
        // Populate legacy layout IDs
        const legacyMap = {
            '#pv-surface-val-legacy':    surfaceValue,
            '#pv-efficiency-val-legacy': efficiencyValue,
            '#pv-mounting-val-legacy':   mountingValue,
            '#pv-gcr-val-legacy':        gcrValue,

            '#pv-gfa-val-legacy':        gfaDisplay,
            '#pv-cond-area-val-legacy': condDisplay,
            '#pv-total-val-legacy':      totalDisplay,
            '#pv-rop-val-legacy':        ropValue
        };
        for (const [selector, value] of Object.entries(legacyMap)) {
            const el = document.querySelector(selector);
            if (el && value !== undefined) el.textContent = value;
        }
    } else {
        // Populate new layout IDs
        const newMap = {
            '#pv-surface-val':    surfaceValue,
            '#pv-efficiency-val': efficiencyValue,
            '#pv-mounting-val':   mountingValue,
            '#pv-gcr-val':        gcrValue,

            '#pv-gfa-val':        gfaDisplay,
            '#pv-cond-area-val': condDisplay,
            '#pv-total-val':      totalDisplay,
            '#pv-rop-val':        ropValue
        };
        for (const [selector, value] of Object.entries(newMap)) {
            const el = document.querySelector(selector);
            if (el && value !== undefined) el.textContent = value;
        }
    }

    // DBG-029. What the total is multiplied by, on hover, on whichever of the
    // two layouts is in use.
    const totalEl = document.querySelector(isLegacy ? '#pv-total-val-legacy' : '#pv-total-val');
    if (totalEl && totalMWh != null) totalEl.title = totalTitle;

    // CHV, 2026-08-24. The area row appears only when a number exists for this
    // neighbourhood, and the row is removed from the page otherwise.
    const areaItem = document.getElementById('pv-area-item' + (isLegacy ? '-legacy' : ''));
    const areaVal = document.getElementById('pv-area-val' + (isLegacy ? '-legacy' : ''));
    if (areaItem && areaVal) {
        if (pvAreaDisplay) {
            areaItem.hidden = false;
            areaVal.textContent = pvAreaDisplay;
            areaVal.title = 'The total area of photovoltaic array injected on this neighbourhood: the active roof face area on pitched roofs, plus the rack area on flat roofs.';
        } else {
            areaItem.hidden = true;
            areaVal.textContent = '—';
        }
    }

    // STAGE-04, answered by Koral. Two things the page never said out loud.
    //
    // 1. Which result this is. Without it a Calgary selection can display a
    //    number with nothing on screen naming the climate or the rung. The
    //    wording comes from LMN_CONFIG so it matches the energy pages, and it
    //    uses the ladder names, never the word EEM.
    const captionEl = document.querySelector(isLegacy ? '#pv-result-caption-legacy' : '#pv-result-caption');
    if (captionEl && typeof LMN_CONFIG !== 'undefined') {
        captionEl.textContent = LMN_CONFIG.resultCaption(envelope, scenario);
    }

    // 2. Why the parameters above look different on a house. Same pattern as
    //    the notes already carried by the other result pages.
    const roofNoteEl = document.querySelector(isLegacy ? '#pv-roof-note-legacy' : '#pv-roof-note');
    const roofWrap = document.querySelector(isLegacy ? '#pv-roof-wrap-legacy' : '#pv-roof-wrap');
    if (roofNoteEl) {
        const roofText = (roof && roof.note) ? roof.note : '';
        roofNoteEl.textContent = roofText;
        if (roofWrap) {
            roofWrap.hidden = !roofText;
        }
    }

    // 2b. What the Ratio of Performance means, on the page that prints it.
    //     CHV, 2026-08-13: keep RoP, and give it "a short and understandable
    //     explanation in the interface of what the value means and how it
    //     should be interpreted". The definition, the formula, the source and
    //     the worked examples stay in documentation.html section D.
    //
    //     Nothing is written when the ratio itself is not shown, on the ideal
    //     thermal load, because explaining a placeholder explains nothing. The
    //     test is that the value starts with a digit, so this line does not
    //     have to carry a copy of the placeholder character.
    const ropNoteEl = document.querySelector(isLegacy ? '#pv-rop-note-legacy' : '#pv-rop-note');
    const ropWrap = document.querySelector(isLegacy ? '#pv-rop-wrap-legacy' : '#pv-rop-wrap');
    if (ropNoteEl && typeof LMN_CONFIG !== 'undefined') {
        const ropText = /^[0-9]/.test(String(ropValue)) ? LMN_CONFIG.rop.interfaceNote : '';
        ropNoteEl.textContent = ropText;
        if (ropWrap) {
            ropWrap.hidden = !ropText;
        }
    }

    const notesRow = document.querySelector(isLegacy ? '#pv-notes-row-legacy' : '#pv-notes-row');
    if (notesRow) {
        const hasRoof = roofWrap && !roofWrap.hidden;
        const hasRop = ropWrap && !ropWrap.hidden;
        notesRow.hidden = (!hasRoof && !hasRop);
    }

    // 3. STAGE-04 tasks 4.2 and 4.3, CHV action plan Stage 4 items 2 and 3.
    //    Whether a rooftop array is installed at all, and why the rooftop
    //    figure is the same on every rung of the ladder. Wording lives in
    //    LMN_CONFIG so it cannot drift from the documentation.
    const scenNoteEl = document.querySelector(isLegacy ? '#pv-scenario-note-legacy' : '#pv-scenario-note');
    const scenWrap = document.querySelector(isLegacy ? '#pv-scenario-wrap-legacy' : '#pv-scenario-wrap');
    if (scenNoteEl && typeof LMN_CONFIG !== 'undefined') {
        const scenText = LMN_CONFIG.pvScenarioNote(scenario);
        scenNoteEl.textContent = scenText;
        if (scenWrap) {
            scenWrap.hidden = !scenText;
        }
    }

    // 4. CHV, 2026-08-17, points 1, 5 and 7. The Assumptions & Model
    //    Information block. Her point 1 lists what the public tool has to
    //    carry: "only the relevant location, weather/standard, envelope and
    //    model/data version need to appear under Assumptions & Model
    //    Information". Every value is read from LMN_CONFIG, so this page cannot
    //    name a weather file the config does not know about.
    renderPvAssumptions(isLegacy, envelope, neighbourhoodCode);

    return pvIntensity;
}

/**
 * CHV, 2026-08-17, points 1, 5 and 7. Fill the Assumptions & Model Information
 * block on whichever of the two PV layouts is in use.
 *
 * @param {boolean} isLegacy - true for the RC-HR2 layout
 * @param {string} envelope - the selected envelope key
 * @param {string} neighbourhoodCode - the active NU, needed for the PV area row
 */
function renderPvAssumptions(isLegacy, envelope, neighbourhoodCode) {
    if (typeof LMN_CONFIG === 'undefined') return;
    const s = isLegacy ? '-legacy' : '';
    const set = (id, value) => {
        const el = document.getElementById(id + s);
        if (el) el.textContent = value;
    };

    const climateKey = LMN_CONFIG.climateOfEnvelope(envelope);
    const climate = LMN_CONFIG.climates.find(c => c.key === climateKey);

    // The location is the city and the zone, not the envelope key. ASHRAE has
    // no city by decision, so it names itself and its country instead of
    // printing "null, ASHRAE".
    set('pv-location-val', climate
        ? (climate.city ? climate.city + ', ' + climate.zone : climate.zone + ' (United States reference case)')
        : '—');
    set('pv-weatherfile-val', LMN_CONFIG.weatherFileFor(envelope) || '—');

    // CHV, 2026-08-24, her section 4 item 5. Snow cover is not modelled, and
    // the PV page is where the number it makes optimistic is read.
    // LMN_CONFIG.snowNote already existed, D0.1a and DBG-019, and was printed
    // on the energy breakdown and the summary but never here. It returns an
    // empty string for a climate with no note, and the box stays hidden then.
    const snowEl = document.getElementById('pv-snow-note' + s);
    if (snowEl) {
        const snow = LMN_CONFIG.snowNote(climateKey);
        if (snow) {
            snowEl.hidden = false;
            snowEl.innerHTML = '<div class="info-box-body">' +
                '<p class="info-box-title">Snow cover is not modelled</p>' +
                '<p class="info-box-line">' + snow + '</p>' +
                '</div>';
        } else {
            snowEl.hidden = true;
            snowEl.innerHTML = '';
        }
    }
    set('pv-standard-val', LMN_CONFIG.envelopeLabel(envelope));
    set('pv-areabasis-val', LMN_CONFIG.units.floorAreaBasisNote);
    set('pv-modelversion-val',
        'Tool ' + LMN_CONFIG.version + ', data ' + LMN_CONFIG.lastUpdated +
        ', campaign ' + LMN_CONFIG.dataCampaign.climates +
        ', ' + LMN_CONFIG.dataCampaign.engine);

    // CHV, 2026-08-17 point 5, reopened 2026-08-24 point 3. DBG-037. The box
    // now states the model that produced the results, Tier 3, and then names
    // 18.65 % and 20 % as what they are, a retired convention and a literature
    // reference. She asked for "the exact original model/source for both
    // assumptions", so both are printed with their active fractions.
    const effEl = document.getElementById('pv-efficiency-explainer' + s);
    if (effEl) {
        const e = LMN_CONFIG.pv.efficiencyExplanation;
        effEl.innerHTML = '<div class="info-box-body">' +
            '<p class="info-box-title">PV model assumptions, Preliminary</p>' +
            '<p class="info-box-line">' + e.sameTechnology + '</p>' +
            '<p class="info-box-line">' + e.pitched + '</p>' +
            '<p class="info-box-line">' + e.flat + '</p>' +
            '<p class="info-box-line">' + e.shared + '</p>' +
            '<p class="info-box-line"><strong>The two other figures, and neither made these results.</strong> ' + e.retired + '</p>' +
            '<p class="info-box-line"><strong>What changed on 2026-08-24.</strong> ' + e.correction + '</p>' +
            '<p class="info-box-line">' + e.preliminary + '</p>' +
            '</div>';
    }

    // CHV, 2026-08-17, point 8: directly simulated against derived. On this
    // page the intensity is simulated and the two numbers beside it are not.
    const provEl = document.getElementById('pv-provenance-note' + s);
    if (provEl) {
        const p = LMN_CONFIG.provenance;
        // CHV, 2026-08-24. The rows follow what the page now shows: the array
        // area, the total generation and the ratio. The intensity is named last
        // and named for what it is, the internal value the total comes from.
        const hasArea = (typeof PV_AREA_DATA !== "undefined") && PV_AREA_DATA[neighbourhoodCode] != null;
        const areaLine = hasArea
            ? '<p class="info-box-line"><strong>Total PV array area, ' + p.simulatedLabel.toLowerCase() + '.</strong> ' + p.results.pvArea.note + '</p>'
            : '';
        provEl.innerHTML = '<div class="info-box-body">' +
            '<p class="info-box-title">Where these numbers come from</p>' +
            areaLine +
            '<p class="info-box-line"><strong>Total PV generation, ' + p.derivedLabel.toLowerCase() + '.</strong> ' + p.results.pvTotal.note + '</p>' +
            '<p class="info-box-line"><strong>Ratio of Performance, ' + p.derivedLabel.toLowerCase() + '.</strong> ' + p.results.rop.note + '</p>' +
            '<p class="info-box-line"><strong>PV generation intensity, ' + p.simulatedLabel.toLowerCase() + ', and no longer shown as a result.</strong> ' + p.results.pvIntensity.note + '</p>' +
            '</div>';
    }
}

/**
 * Initialize the PV page
 */
function initPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    // CHV, 2026-08-17, point 2. No climate chosen: stop, do not draw Montreal.
    // This page reads the envelope in three places and one of them, line 193,
    // used to end in "|| 'necb-2017'".
    if (typeof LMN_CONFIG !== 'undefined' && neighbourhoodCode) {
        const chosen = LMN_CONFIG.selectedEnvelopeOrEmpty(window.location.search, sessionStorage);
        if (!chosen) {
            const main = document.querySelector('main.container') || document.body;
            main.innerHTML = LMN_CONFIG.noClimateNoticeHtml();
            if (titleElement) titleElement.textContent = 'Layer 2: PV Generation';
            return;
        }
    }

    // CHV, 2026-08-13. Second gate, before any number is drawn. The PV
    // intensity, the total and the ratio of performance all come out of the
    // same withheld row. See the note in js/config.js on dataGapNotice.
    if (typeof LMN_CONFIG !== 'undefined' && neighbourhoodCode) {
        const envelopeKey = new URLSearchParams(window.location.search).get('envelope')
            || sessionStorage.getItem('selectedEnvelope');
        const gapNotice = envelopeKey
            ? LMN_CONFIG.dataGapNotice(neighbourhoodCode, envelopeKey)
            : null;
        if (gapNotice) {
            const main = document.querySelector('main.container') || document.body;
            main.innerHTML = gapNotice +
                '<p class="info-box"><a href="layer1_output.html">Back to the neighbourhood table</a></p>';
            if (titleElement) titleElement.textContent = 'Layer 2: PV Generation';
            return;
        }
    }

    // Toggle between new 3-row layout and legacy layout (RC-HR2 only)
    const isLegacy = (neighbourhoodCode === 'RC-HR2');
    const newLayout = document.getElementById('pv-new-layout');
    const legacyLayout = document.getElementById('pv-legacy-layout');
    if (newLayout) newLayout.style.display = isLegacy ? 'none' : 'block';
    if (legacyLayout) legacyLayout.style.display = isLegacy ? 'block' : 'none';

    // Render the Energy Status icon and the PV images.
    if (neighbourhoodCode) {
        renderEnergyStatus(neighbourhoodCode);
        updatePVImages(neighbourhoodCode);
        // DBG-040. updatePVParameters still returns the intensity, because the
        // total in MWh/yr is computed from it. Nothing displays it any more.
        updatePVParameters(neighbourhoodCode);
    }

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Layer 2: PV Generation of ${neighbourhoodCode}`;

        // Build sidebar
        if (typeof buildSidebar === 'function') {
            buildSidebar('pv', 'visuals');
        }

        // Set back button href to energy-selection page
        if (backStepBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            backStepBtn.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        }

        // Set next step button href
        if (nextStepBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            nextStepBtn.href = `layer3_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        }
    } else {
        titleElement.textContent = 'PV Generation Profile';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPVPage);
