/**
 * finish-design.js
 * Consolidated Design Summary Logic
 * Loads all choices from sessionStorage and database constants and populates the dashboard.
 */

// Helper to get query parameters
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Set text content helper
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

// -------------------------------------------------------------
// Scales Renderers (replicated from energy.js / pv.js / lpv.js)
// -------------------------------------------------------------
function renderEUIScale(euiValue) {
    const container = document.getElementById('eui-scale-container');
    if (!container) return;

    const EUI_MIN = 56;
    const EUI_MAX = 240;
    const position = Math.min(100, Math.max(0, ((euiValue - EUI_MIN) / (EUI_MAX - EUI_MIN)) * 100));

    let color;
    if (position <= 50) {
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        const ratio = (position - 50) / 50;
        const r = Math.round(234 + (239 - 234) * ratio);
        const g = Math.round(179 + (68 - 179) * ratio);
        const b = Math.round(8 + (68 - 8) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    }

    // STAGE-03 task 3.3, D6.0. Same treatment as the breakdown page, so the
    // two screens carry the same unit and the same basis in the same words.
    const unit  = LMN_CONFIG.units.euiCompact;
    const basis = LMN_CONFIG.euiBasis();
    const long  = LMN_CONFIG.units.eui;

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${euiValue.toFixed(1)}</span>
            <span class="eui-scale-unit" title="${long}">${unit}</span>
            <span class="eui-scale-basis">${basis}</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${EUI_MIN}</span>
                <span>${EUI_MAX}</span>
            </div>
        </div>
    `;
}

function renderPVScale(value) {
    const container = document.getElementById('pv-scale-container');
    if (!container) return;

    const MIN = 0;
    const MAX = 100;
    const position = Math.min(100, Math.max(0, ((value - MIN) / (MAX - MIN)) * 100));

    let color;
    if (position <= 50) {
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        const ratio = (position - 50) / 50;
        const r = Math.round(234 + (239 - 234) * ratio);
        const g = Math.round(179 + (68 - 179) * ratio);
        const b = Math.round(8 + (68 - 8) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${value.toFixed(1)}</span>
            <span class="eui-scale-unit">kWh/m²·yr</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${MIN}</span>
                <span>${MAX}</span>
            </div>
        </div>
    `;
}

function renderLPVScale(value) {
    const container = document.getElementById('lpv-scale-container');
    if (!container) return;

    const MIN = 0;
    const MAX = 100;
    const position = Math.min(100, Math.max(0, ((value - MIN) / (MAX - MIN)) * 100));

    let color;
    if (position <= 50) {
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        const ratio = (position - 50) / 50;
        const r = Math.round(234 + (239 - 234) * ratio);
        const g = Math.round(179 + (68 - 179) * ratio);
        const b = Math.round(8 + (68 - 8) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${value.toFixed(1)}</span>
            <span class="eui-scale-unit">kWh/m²·yr</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${MIN}</span>
                <span>${MAX}</span>
            </div>
        </div>
    `;
}

// Render Energy Status icon in the header
function renderEnergyStatus(neighbourhoodCode) {
    const container = document.getElementById('energy-status-container');
    if (!container) return;

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

// -------------------------------------------------------------
// Resolve active scenario & energy metrics (mirrors energy.js / pv.js)
// -------------------------------------------------------------
function resolveEnvelopeAndScenario(code) {
    const envelope = getQueryParam('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';

    const selections = JSON.parse(
        sessionStorage.getItem('energySelections') || '{"load":[], "demand":[]}'
    );
    const loadSelections = selections.load || [];
    const demandSelections = selections.demand || [];

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

    let scenario;
    if (loadSelections.includes('thermal_load')) {
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

        if (hasHP) {
            if (hasDhw && hasAppliances) scenario = 'EEM4';
            else if (hasDhw) scenario = 'EEM3';
            else scenario = 'EEM2';
        } else {
            scenario = (baseLevel === 'EEM1') ? 'EEM1' : 'DEFAULT';
        }
    }

    const energyObject = (ENVELOPE_ENERGY_DATA &&
                          ENVELOPE_ENERGY_DATA[refEnvelope] &&
                          ENVELOPE_ENERGY_DATA[refEnvelope][code])
        ? ENVELOPE_ENERGY_DATA[refEnvelope][code][scenario]
        : null;

    // STAGE-08. refEnvelope and baseLevel are returned as well, because the
    // baseline column of the comparison table is the same neighbourhood in the
    // same climate at the rung the arm starts from: DEFAULT for the standard
    // arms, EEM1 for the high performance ones, which have no DEFAULT row.
    return { envelope, refEnvelope, baseLevel, scenario, energyObject };
}

// =============================================================
// STAGE-08. The final results page. CHV Stage 8 items 1 to 10.
// =============================================================

/**
 * Item 4, D8.1. A metric that was not selected is absent, not zero.
 */
function fsRow(label, baseline, selected, change, status) {
    return '<tr><td class="label-cell">' + label + '</td>'
        + '<td class="value-cell">' + baseline + '</td>'
        + '<td class="value-cell">' + selected + '</td>'
        + '<td class="value-cell">' + change + '</td>'
        + '<td class="value-cell">' + status + '</td></tr>';
}

function fsNum(v, digits) {
    return (Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits)).toLocaleString(undefined, {
        minimumFractionDigits: digits, maximumFractionDigits: digits
    });
}

function fsSigned(v, digits, unit) {
    const s = (v > 0 ? '+' : (v < 0 ? '' : '')) + fsNum(v, digits);
    return s + (unit ? ' ' + unit : '');
}

/**
 * Items 2, 3 and 4, D8.1. Four metrics, baseline, selected and change.
 * Returns the same numbers it renders, so the export cannot disagree with the
 * screen. That is the whole reason it returns anything at all.
 */
function fsBuildComparison(code, ctx) {
    const rows = [];
    const out = { metrics: [] };
    const NOT_SELECTED = 'Not selected';

    const condArea = (typeof CONDITIONED_AREA_DATA !== 'undefined') ? CONDITIONED_AREA_DATA[code] : null;
    const baseObj = (ENVELOPE_ENERGY_DATA[ctx.refEnvelope] && ENVELOPE_ENERGY_DATA[ctx.refEnvelope][code])
        ? ENVELOPE_ENERGY_DATA[ctx.refEnvelope][code][ctx.baseLevel] : null;
    const selObj = ctx.energyObject;

    // 1. Energy use intensity. Always available, always simulation backed.
    if (baseObj && selObj && baseObj.total != null && selObj.total != null) {
        const d = selObj.total - baseObj.total;
        const pct = baseObj.total ? (d / baseObj.total) * 100 : null;
        rows.push(fsRow(
            'Energy use intensity (' + LMN_CONFIG.units.euiCompact + ')',
            fsNum(baseObj.total, 1), fsNum(selObj.total, 1),
            fsSigned(d, 1, '') + (pct === null ? '' : ' (' + fsSigned(pct, 1, '%') + ')'),
            'Simulation-backed'));
        out.metrics.push({ name: 'Energy use intensity', unit: LMN_CONFIG.units.eui,
            baseline: baseObj.total, selected: selObj.total, change: d, status: 'Simulation-backed' });
    }

    // 2. Rooftop PV. Only when the visitor asked for it. The absolute total is
    // the intensity times the heated and cooled area, DBG-029, never the gross.
    if (ctx.pvSelected && baseObj && selObj && condArea) {
        const b = (baseObj.pv || 0) * condArea / 1000;
        const s = (selObj.pv || 0) * condArea / 1000;
        rows.push(fsRow('Rooftop PV generation (MWh/yr)',
            fsNum(b, 1), fsNum(s, 1), fsSigned(s - b, 1, ''), 'Simulation-backed'));
        out.metrics.push({ name: 'Rooftop PV generation', unit: 'MWh/yr',
            baseline: b, selected: s, change: s - b, status: 'Simulation-backed' });
    } else {
        rows.push(fsRow('Rooftop PV generation (MWh/yr)', NOT_SELECTED, NOT_SELECTED, '—', '—'));
    }

    // 3. Net mobility grid demand. The baseline neighbourhood has no EV fleet,
    // so its baseline is a true zero rather than a missing value.
    if (ctx.evData) {
        const s = ctx.evData.netEnergyBalance_kWh;
        rows.push(fsRow(LMN_CONFIG.ev.netGridDemandTotalLabel + ' (' + LMN_CONFIG.ev.netGridDemandTotalUnit + ')',
            '0', fsNum(s, 0), fsSigned(s, 0, ''), 'Preliminary'));
        out.metrics.push({ name: LMN_CONFIG.ev.netGridDemandTotalLabel, unit: LMN_CONFIG.ev.netGridDemandTotalUnit,
            baseline: 0, selected: s, change: s, status: 'Preliminary' });
    } else {
        rows.push(fsRow(LMN_CONFIG.ev.netGridDemandTotalLabel, NOT_SELECTED, NOT_SELECTED, '—', '—'));
    }

    // 4. Landscape PV. Same reasoning: no array in the baseline.
    if (ctx.lpvSelected) {
        const s = LMN_CONFIG.lpvChain().generationMWhYr;
        rows.push(fsRow('Landscape PV generation (MWh/yr)',
            '0', fsNum(s, 1), fsSigned(s, 1, ''), 'Preliminary'));
        out.metrics.push({ name: 'Landscape PV generation', unit: 'MWh/yr',
            baseline: 0, selected: s, change: s, status: 'Preliminary' });
    } else {
        rows.push(fsRow('Landscape PV generation (MWh/yr)', NOT_SELECTED, NOT_SELECTED, '—', '—'));
    }

    const body = document.getElementById('fs-comparison-body');
    if (body) body.innerHTML = rows.join('');

    setText('fs-baseline-note', 'Baseline: ' + LMN_CONFIG.eemLabel(ctx.baseLevel)
        + ' in ' + LMN_CONFIG.envelopeLabel(ctx.envelope)
        + '. Intensities are ' + LMN_CONFIG.euiBasis() + '.');

    return out;
}

/**
 * Item 6, D8.3. One sentence, and every clause in it comes from a number that
 * was computed above. No clause is written when its number does not exist.
 */
function fsMeaning(cmp, ctx) {
    const parts = [];
    const eui = cmp.metrics.filter(function (m) { return m.name === 'Energy use intensity'; })[0];
    const pv = cmp.metrics.filter(function (m) { return m.name === 'Rooftop PV generation'; })[0];

    if (eui) {
        if (eui.change < 0) {
            parts.push('The selected measures lower energy use intensity from ' + fsNum(eui.baseline, 1)
                + ' to ' + fsNum(eui.selected, 1) + ' ' + LMN_CONFIG.units.euiCompact + ', a fall of '
                + fsNum(Math.abs(eui.change / eui.baseline) * 100, 1) + ' per cent.');
        } else if (eui.change > 0) {
            parts.push('The selected measures raise energy use intensity from ' + fsNum(eui.baseline, 1)
                + ' to ' + fsNum(eui.selected, 1) + ' ' + LMN_CONFIG.units.euiCompact + '.');
        } else {
            parts.push('The selected measures leave energy use intensity at ' + fsNum(eui.baseline, 1)
                + ' ' + LMN_CONFIG.units.euiCompact + '.');
        }
    }

    if (eui && pv && ctx.ropValue != null) {
        parts.push('Rooftop generation covers ' + fsNum(ctx.ropValue * 100, 0)
            + ' per cent of the selected annual demand.');
    }

    setText('fs-meaning', parts.length ? parts.join(' ') : 'No metric has been selected yet.');
    return parts.join(' ');
}

/**
 * Item 7, D8.3. The constraint line, and the rule that decides whether it may
 * appear at all.
 *
 * CHV allows this statement only when the tool can derive it from an actual
 * indicator, and otherwise asks for it to be left out. One indicator qualifies
 * today: the Ratio of Performance. Rooftop PV is modelled on the whole usable
 * roof, so when RoP is below 1 the roof is already fully committed and cannot
 * close the gap. That is a limit the tool measures, not one it assumes.
 *
 * Every other candidate constraint was rejected for the opposite reason: land
 * take, grid capacity and cost are not indicators this tool holds.
 */
function fsConstraint(ctx) {
    const el = document.getElementById('fs-constraint');
    if (!el) return null;

    if (!ctx.pvSelected || ctx.ropValue == null || ctx.ropValue >= 1) {
        el.hidden = true;
        el.textContent = '';
        return null;                      // no limit fired, so no sentence
    }

    const text = 'Main constraint: roof area. With the whole modelled roof in use, on-site rooftop '
        + 'generation reaches ' + fsNum(ctx.ropValue * 100, 0) + ' per cent of annual demand, so the '
        + 'remaining gap cannot be closed by adding more rooftop PV to this neighbourhood.';
    el.hidden = false;
    el.textContent = text;
    return text;
}

/**
 * Item 8. Every assumption behind the four metrics, on the same screen.
 */
function fsAssumptions(code, ctx) {
    const chain = LMN_CONFIG.lpvChain();
    const group = LMN_CONFIG.roofGroupFor(code);
    const items = [
        ['Climate and standard', LMN_CONFIG.envelopeLabel(ctx.envelope)],
        ['Floor area basis', LMN_CONFIG.euiBasis()],
        ['Rooftop PV', group.surface + ', module efficiency ' + group.moduleEfficiencyLabel],
        ['Facade PV', LMN_CONFIG.facadePvAllowed(code, ctx.envelope)
            ? 'Offered for this neighbourhood, indicative only, excluded from the totals'
            : LMN_CONFIG.facadePv.restrictionNote],
        ['EV and V2G', LMN_CONFIG.ev.preliminaryNote],
        ['Sign convention', LMN_CONFIG.ev.signSentence],
        ['Landscape PV', LMN_CONFIG.lpv.uniformityNote + ' Chain: ' + chain.siteAreaM2.toLocaleString()
            + ' m² site, ' + chain.allocatedM2 + ' m² allocated, ' + chain.usableM2 + ' m² usable, '
            + chain.installedKWp + ' kWp, ' + chain.generationMWhYr + ' MWh/yr.'],
        ['Data source', 'Simulation campaigns behind js/data.js. See the methodology page for the source of each result.'],
        ['Status terms used', LMN_CONFIG.statusTerms.join(', ')]
    ];

    // snowCoverNote is keyed by climate, and Montreal alone is stored under
    // four envelope keys, so the envelope has to be resolved to its climate
    // first or the note silently never fires.
    const snow = LMN_CONFIG.snowNote(LMN_CONFIG.climateOfEnvelope(ctx.envelope));
    if (snow) items.push(['Snow cover', snow]);

    const dl = document.getElementById('fs-assumptions');
    if (dl) {
        dl.innerHTML = items.map(function (pair) {
            return '<div><dt>' + pair[0] + '</dt><dd>' + pair[1] + '</dd></div>';
        }).join('');
    }
    return items;
}

/**
 * Item 9, D8.2. Print, and a file carrying the same values, the same
 * assumptions and the same status labels as the screen.
 */
function fsWireExport(code, ctx, cmp, meaning, constraint, assumptions) {
    const printBtn = document.getElementById('fs-print-btn');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

    const exportBtn = document.getElementById('fs-export-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', function () {
        const payload = {
            tool: 'LMN tool, Layered Modular Neighbourhood',
            exported: new Date().toISOString(),
            scenario: {
                neighbourhood: code,
                climateAndStandard: LMN_CONFIG.envelopeLabel(ctx.envelope),
                envelopeKey: ctx.envelope,
                measures: LMN_CONFIG.eemLabel(ctx.scenario),
                measuresDetail: LMN_CONFIG.eemDetail(ctx.scenario),
                mobility: ctx.mobilityText,
                greenInfrastructure: ctx.greenText
            },
            baselineDefinition: LMN_CONFIG.eemLabel(ctx.baseLevel) + ' in ' + LMN_CONFIG.envelopeLabel(ctx.envelope),
            metrics: cmp.metrics,
            whatThisMeans: meaning,
            mainConstraint: constraint,
            assumptions: assumptions.map(function (p) { return { name: p[0], value: p[1] }; }),
            statusTerms: LMN_CONFIG.statusTerms
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'LMN-scenario-' + code + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Determine if Heat Pump COP 4 is selected
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

// -------------------------------------------------------------
// Populate page fields
// -------------------------------------------------------------
function initSummaryPage() {
    const code = getQueryParam('neighbourhood');
    if (!code) {
        alert("No neighbourhood selected. Redirecting to start.");
        window.location.href = 'layer1_NUs_selection.html';
        return;
    }

    // Set Back button href
    const backBtn = document.getElementById('back-step-btn');
    if (backBtn) {
        backBtn.href = `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(getQueryParam('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017')}`;
    }

    // Lookup neighbourhood
    const nu = NEIGHBOURHOODS.find(n => n.code === code);
    if (!nu) {
        alert("Invalid neighbourhood selection.");
        return;
    }

    // CHV, 2026-08-13. Last gate. This page repeats every Layer 2 number, so
    // a withheld pair that reached it would be published four more times. It
    // is guarded explicitly rather than by assuming the earlier gates held:
    // four sessions running, a defect fixed on a layer page was still live
    // here. See the note in js/config.js on dataGapNotice.
    if (typeof LMN_CONFIG !== 'undefined') {
        const envelopeKey = getQueryParam('envelope') || sessionStorage.getItem('selectedEnvelope');
        const gapNotice = envelopeKey ? LMN_CONFIG.dataGapNotice(code, envelopeKey) : null;
        if (gapNotice) {
            const main = document.querySelector('main.container') || document.body;
            main.innerHTML = gapNotice +
                '<p class="info-box"><a href="layer1_output.html">Back to the neighbourhood table</a></p>';
            return;
        }
    }

    // Lookup concept
    const concept = CONCEPTS.find(c => c.id === nu.conceptId);

    // Render header indicators
    renderEnergyStatus(code);

    // -------------------------------------------------------------
    // CARD 1: LAYER 1 - Morphology
    // -------------------------------------------------------------
    const nuImage = nu.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(code);
    const imgEl = document.getElementById('l1-nu-image');
    if (imgEl) imgEl.src = nuImage;

    setText('l1-nu-code', code);
    setText('l1-nu-concept', concept ? concept.name : 'Concept');
    setText('l1-context', nu.context || '—');
    setText('l1-usage', nu.usage || '—');
    setText('l1-density', nu.density || '—');
    setText('l1-layout', nu.layout || '—');

    const gfa = GFA_DATA[code];
    setText('l1-gfa', gfa ? gfa.toLocaleString() + ' m²' : '—');
    setText('l1-buildings', nu.buildings ? nu.buildings.join(', ') : '—');

    // -------------------------------------------------------------
    // CARD 2: LAYER 2 - Energy & PV Sizing
    // -------------------------------------------------------------
    const { envelope, scenario, energyObject } = resolveEnvelopeAndScenario(code);
    const euiValue = energyObject ? energyObject.total : 0;
    renderEUIScale(euiValue);
    // Task 3.3, D6.0. A dense summary field, so the compact unit stays and the
    // long form goes in the tooltip.
    setText('l2-eui-val', euiValue ? euiValue.toFixed(1) + ' ' + LMN_CONFIG.units.euiCompact : '—');
    const euiValEl = document.getElementById('l2-eui-val');
    if (euiValEl) euiValEl.title = LMN_CONFIG.units.eui;

    // Envelope Display Label. DBG-023: the map that stood here covered only 4
    // of the 17 envelope keys, so 13 of them printed as a raw key. It now
    // reads from LMN_CONFIG, which is also where D0.1 corrected the four
    // wrong city names.
    setText('l2-envelope', LMN_CONFIG.envelopeLabel(envelope));

    // Energy selections load & demand pills
    const energySelections = JSON.parse(sessionStorage.getItem('energySelections') || '{"load":[], "demand":[], "generation":[]}');
    const l2PillsContainer = document.getElementById('l2-pills');
    if (l2PillsContainer) {
        let pillsHtml = '';
        // Task 3.1, CHV Stage 3 item 1: one name per measure on every page.
        // The three maps that stood here used a third set of names, "HP COP 4"
        // against "Heat Pump COP 4" in the sidebar, and built their icon paths
        // in a case that 404s on GitHub Pages.
        const pill = (group, val) => {
            const sel = LMN_CONFIG.selection(group, val);
            return `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
        };
        if (energySelections.load) {
            energySelections.load.forEach(val => { pillsHtml += pill('load', val); });
        }
        if (energySelections.demand) {
            energySelections.demand.forEach(val => { pillsHtml += pill('demand', val); });
        }
        if (energySelections.generation) {
            energySelections.generation.forEach(val => { pillsHtml += pill('generation', val); });
        }
        l2PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // PV details populating
    const pvIntensity = energyObject ? energyObject.pv : 0;
    renderPVScale(pvIntensity);

    const pvData = PV_GENERATION_DATA[code];
    if (pvData) {
        // STAGE-04, 2026-08-10. This summary card carried two defects that had
        // already been fixed on the PV page itself and were missed here, which
        // is exactly why they are worth naming in the code.
        //
        // DBG-013: the array parameters are a property of the roof, not of the
        // neighbourhood, and this card reported the flat-roof set for all 35.
        // On the four house neighbourhoods the panels lie flush on a pitched
        // face, so there is no rack and no ground coverage ratio at all.
        const roof = LMN_CONFIG.roofGroupFor(code);
        setText('l2-pv-surface', roof ? roof.surface : (pvData.surface || '—'));
        // D0.2, task 0.7, and D4.3: the efficiency comes from LMN_CONFIG and
        // differs by roof group, because the pitched group is quoted on
        // aperture area and the flat group on module area. Never from the per
        // NU field, which carried the unsourced 18.68 %.
        setText('l2-pv-efficiency', roof ? roof.moduleEfficiencyLabel : LMN_CONFIG.pv.moduleEfficiencyLabel);
        setText('l2-pv-mounting', roof ? roof.mounting : (pvData.mounting || '—'));
        const gcr = (roof && !roof.gcrApplies)
            ? 'Does not apply'
            : (pvData.gcr ? (parseFloat(pvData.gcr) * 100).toFixed(0) + '%' : '—');
        setText('l2-pv-gcr', gcr);
        // DBG-029: the absolute total must be multiplied by the HEATED AND
        // COOLED area, because that is the area pvIntensity is measured
        // against. Multiplying by gfa (the EnergyPlus Total Building Area)
        // mixed two bases and read about twice the truth on the houses, where
        // the attic and the unheated basement are enclosed but not
        // conditioned. Same fix as js/pv.js.
        const condArea = (typeof CONDITIONED_AREA_DATA !== 'undefined')
            ? CONDITIONED_AREA_DATA[code]
            : undefined;
        const totalMWh = (pvIntensity && condArea)
            ? (pvIntensity * condArea / 1000).toFixed(1) + ' MWh/yr'
            : '—';
        setText('l2-pv-total', totalMWh);
        // D0.3, D0.3b, DBG-018. RoP is computed from the two numbers the tool
        // already ships, never read from the stored field, which is null on
        // all 35 NUs and could not hold a per scenario value anyway. The old
        // COP 4 gate is removed: the publication computes RoP at COP 1 and
        // COP 3.5, never COP 4, so the gate hid the metric in every published
        // case. It stays hidden only for the ideal thermal load.
        const hiddenFor = LMN_CONFIG.rop.hiddenForScenarios;
        const ropShown = (hiddenFor.indexOf(scenario) === -1)
            && energyObject && energyObject.total && (pvIntensity != null);
        setText('l2-pv-rop', ropShown ? (pvIntensity / energyObject.total).toFixed(3) : '—');
    }

    // -------------------------------------------------------------
    // CARD 3: LAYER 3 - EV & Mobility summary
    // -------------------------------------------------------------
    const mobilitySelections = JSON.parse(sessionStorage.getItem('mobilitySelections') || '{"transportation":[], "mobility":[]}');
    const l3PillsContainer = document.getElementById('l3-pills');
    if (l3PillsContainer) {
        let pillsHtml = '';
        // STAGE-05 task 5.4, DBG-006. Label and image both from LMN_CONFIG, so
        // one measure carries one name on every page and no path is built from
        // a display label. The two mobility pills used to read "Bicycle Infra"
        // and "Pedestrian Design", names that exist nowhere else and that
        // pointed at files that do not exist at all.
        if (mobilitySelections.transportation) {
            mobilitySelections.transportation.forEach(val => {
                const sel = LMN_CONFIG.selection('transportation', val);
                pillsHtml += `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
            });
        }
        if (mobilitySelections.mobility) {
            mobilitySelections.mobility.forEach(val => {
                const sel = LMN_CONFIG.selection('mobility', val);
                pillsHtml += `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
            });
        }
        l3PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // EV details populating.
    //
    // STAGE-06, D6.7 and D6.13. Two corrections here, both of them defects that
    // were first found on the Layer 3 page. This file has now been corrected
    // three times for exactly that reason, so both are asserted by the check
    // script rather than trusted.
    //
    //  1. The scenario. `includes('ev') && includes('v2g')` else 'EV1' meant a
    //     visitor who selected nothing, or V2G alone, was given a full EV1
    //     summary here. The rule is the same as the results page: no EV, no
    //     scenario, no numbers.
    //  2. The wording. The two net balances were printed one inside the
    //     other's brackets with no name to tell them apart, and the values now
    //     carry their unit from LMN_CONFIG.ev rather than from a literal.
    const transportSel = (mobilitySelections && mobilitySelections.transportation) || [];
    const evScenario = !transportSel.includes('ev')
        ? null
        : (transportSel.includes('v2g_stations') ? 'EV2' : 'EV1');
    const evData = (evScenario && EV_V2G_DATA[code]) ? EV_V2G_DATA[code][evScenario] : null;
    const ev = LMN_CONFIG.ev;
    if (evData) {
        setText('l3-ev-penetration', evData.evPenetrationRate || '—');
        setText('l3-charging-efficiency', evData.chargingEfficiency || '—');
        setText('l3-daily-demand', evData.dailyEnergyDemand
            ? evData.dailyEnergyDemand + ' ' + ev.dailyChargingDemandUnit : '—');
        setText('l3-v2g-rate', evData.v2gParticipationRate || '—');
        setText('l3-total-ev-demand', evData.totalEvEnergyDemand ? evData.totalEvEnergyDemand.toLocaleString() + ' kWh/day' : '—');
        setText('l3-storage-loss', evData.storageLoss ? evData.storageLoss.toLocaleString() + ' kWh/day' : '—');
        setText('l3-v2g-power', evData.v2gPowerAvailable !== null
            ? evData.v2gPowerAvailable.toLocaleString() + ' ' + ev.dailyV2gEnergyUnit : '—');

        const netBalance = evData.netEnergyBalance_kWh
            ? evData.netEnergyBalance_kWh.toLocaleString() + ' ' + ev.netGridDemandTotalUnit
              + ', intensity ' + evData.netEnergyBalance_kWh_m2 + ' ' + ev.netGridDemandIntensityUnit
            : '—';
        setText('l3-net-balance', netBalance);
    } else {
        // No scenario. Every EV field says so, and none of them shows a number.
        ['l3-ev-penetration', 'l3-charging-efficiency', 'l3-daily-demand', 'l3-v2g-rate',
         'l3-total-ev-demand', 'l3-storage-loss', 'l3-v2g-power', 'l3-net-balance']
            .forEach(id => setText(id, 'Not selected'));
    }

    // -------------------------------------------------------------
    // CARD 4: LAYER 4 - Green Infrastructure & Land PV
    // -------------------------------------------------------------
    const greenSelections = JSON.parse(sessionStorage.getItem('greenSelections') || '{"infrastructure":[], "urban_agriculture":[], "energy_integrated":[]}');
    const l4PillsContainer = document.getElementById('l4-pills');
    if (l4PillsContainer) {
        let pillsHtml = '';
        // STAGE-05 tasks 5.4 and 5.5, DBG-006. All three groups used to build
        // their image path by interpolating a display label into the filename.
        // "Green Roofs.png" and "Roof Gardens.png" do not exist: the files are
        // lower case, and Linux is case sensitive while Windows is not, so all
        // of these resolved locally and 404ed on GitHub Pages. The VGS pill is
        // the exact case CHV flagged: the label was the abbreviation "VGS" and
        // the file is "vertical greening systems.png", so it could never match
        // whatever the case. Label and path now come from LMN_CONFIG, where
        // they are two independent fields.
        if (greenSelections.infrastructure) {
            greenSelections.infrastructure.forEach(val => {
                const sel = LMN_CONFIG.selection('infrastructure', val);
                pillsHtml += `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
            });
        }
        if (greenSelections.urban_agriculture) {
            greenSelections.urban_agriculture.forEach(val => {
                const sel = LMN_CONFIG.selection('urbanAgriculture', val);
                pillsHtml += `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
            });
        }
        if (greenSelections.energy_integrated) {
            greenSelections.energy_integrated.forEach(val => {
                const sel = LMN_CONFIG.selection('energyIntegrated', val);
                pillsHtml += `<span class="selection-pill"><img src="${sel.image}" alt="${sel.label}" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
            });
        }
        l4PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // Land PV (LPV) table populating.
    //
    // STAGE-07, D7.1. Two corrections, and both are the same lesson as the EV
    // block above: a defect fixed on the layer page is not fixed here.
    //
    //  1. The rows were read by position, configs[0] to configs[3]. Adding the
    //     site area row that CHV Stage 7 item 5 asks for would have shifted
    //     every value one cell to the left, in silence. They are read by label.
    //  2. renderLPVScale(65.2) printed a literal as "65.2 kWh/m²·yr" beside real
    //     results, identical on all 35 neighbourhoods and traceable to nothing.
    //     DBG-033, removed on both pages in the same pass.
    const lpvConfigs = LPV_DATA.rows.filter(r => r.category === 'Config.');
    const lpvResults = LPV_DATA.rows.filter(r => r.category === 'Results');
    const lpvByLabel = (label) => {
        const row = lpvConfigs.filter(r => r.label === label)[0];
        return row ? (row.values[code] || '—') : '—';
    };

    setText('l4-site-area', lpvByLabel('Land / site area'));
    setText('l4-land-allocation', lpvByLabel('Land Allocation'));
    setText('l4-usable-area', lpvByLabel('Usable Area'));
    setText('l4-module-capacity', lpvByLabel('Module Capacity'));
    setText('l4-installed-capacity', lpvByLabel('Installed Capacity (kWp)'));
    setText('l4-energy-generation', lpvResults[0] ? lpvResults[0].values[code] : '—');

    // -------------------------------------------------------------
    // STAGE-08. The final results page proper. CHV Stage 8 items 1 to 10.
    // -------------------------------------------------------------
    const { refEnvelope, baseLevel } = resolveEnvelopeAndScenario(code);

    const mobilityText = (mobilitySelections.transportation && mobilitySelections.transportation.length)
        ? mobilitySelections.transportation.map(v => LMN_CONFIG.selection('transportation', v).label).join(', ')
        : 'None selected';
    const greenText = (greenSelections.energy_integrated && greenSelections.energy_integrated.length)
        ? greenSelections.energy_integrated.map(v => LMN_CONFIG.selection('energyIntegrated', v).label).join(', ')
        : 'None selected';

    setText('fs-nu', code + (concept ? ', ' + concept.name : ''));
    setText('fs-climate', LMN_CONFIG.envelopeLabel(envelope));
    setText('fs-scenario', LMN_CONFIG.eemLabel(scenario) + (LMN_CONFIG.eemDetail(scenario)
        ? ' (' + LMN_CONFIG.eemDetail(scenario) + ')' : ''));
    setText('fs-mobility', mobilityText);
    setText('fs-green', greenText);

    const pvSelected = !!(energySelections.generation && energySelections.generation.indexOf('pv_roof') !== -1);
    const lpvSelected = !!(greenSelections.energy_integrated
        && greenSelections.energy_integrated.indexOf('pv_vgs') !== -1);

    // RoP, computed at render time exactly as the Layer 2 page does it, and
    // hidden for the ideal thermal load where the ratio means nothing. D0.3b.
    const ropHidden = LMN_CONFIG.rop.hiddenForScenarios.indexOf(scenario) !== -1;
    const ropValue = (!ropHidden && energyObject && energyObject.total && energyObject.pv != null)
        ? (energyObject.pv / energyObject.total) : null;

    const ctx = {
        envelope, refEnvelope, baseLevel, scenario, energyObject,
        pvSelected, lpvSelected, evData, ropValue, mobilityText, greenText
    };

    const cmp = fsBuildComparison(code, ctx);
    const meaning = fsMeaning(cmp, ctx);
    const constraint = fsConstraint(ctx);
    const assumptions = fsAssumptions(code, ctx);
    fsWireExport(code, ctx, cmp, meaning, constraint, assumptions);

    // -------------------------------------------------------------
    // SIDEBAR
    // -------------------------------------------------------------
    if (typeof buildSidebar === 'function') {
        buildSidebar('layer4_output', 'visuals');
    }

    // STAGE-05 task 5.6, corrected here on 2026-08-12. This loop used to hide
    // every broken image on the page, including the config driven icons that
    // session 14 had just taught to leave a visible grey plate: a second error
    // listener set display:none and undid the fix on this page alone. A missing
    // icon is a decision for LMN_CONFIG.iconMissing, which warns and leaves the
    // plate, and for nobody else.
    const mainImages = document.querySelectorAll('#visual-content img');
    mainImages.forEach(img => {
        if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
            LMN_CONFIG.iconMissing(img);
        }
        img.addEventListener('error', function () {
            LMN_CONFIG.iconMissing(this);
        });
    });
}

// Run on document load
document.addEventListener('DOMContentLoaded', initSummaryPage);
