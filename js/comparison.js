/**
 * comparison.js
 * Comparison Mode — side-by-side comparison of design pathways.
 *
 * Layer 1 (neighbourhood + climate) is locked from the session.
 * The user builds alternative Layer 2/3/4 selections and sees the
 * performance metrics side-by-side.
 *
 * This file reads from data.js and config.js but never writes to
 * sessionStorage, so the main design flow is unaffected.
 */

// ─── Helpers ────────────────────────────────────────────────

function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function fsNum(v, digits) {
    return (Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits))
        .toLocaleString(undefined, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        });
}

function fsSigned(v, digits) {
    return (v > 0 ? '+' : '') + fsNum(v, digits);
}

// ─── Scenario Metric Computation ────────────────────────────
// Mirrors the logic of finish-design.js resolveEnvelopeAndScenario
// and fsBuildComparison, but takes explicit selection objects instead
// of reading from sessionStorage.

function resolveScenario(code, envelope, energySel) {
    // ComparisonMode v2, P1. One resolver, shared with finish-design.js.
    //
    // The copy that used to live here promoted a design to EEM4 on the
    // appliance measure alone and to EEM3 on DHW alone, without a heat pump.
    // The ladder is nested, so those rungs contain the heat pump already: at
    // MU-HC in NECB Zone 7a that credited 45.6 kWh/m2.yr that was never
    // simulated, and Scenario A - the visitor's own design - disagreed with the
    // summary page they arrived from. The rule now lives in config.js.
    const r = LMN_CONFIG.resolveScenarioKey({
        envelopeKey: envelope,
        nuCode: code,
        load: (energySel && energySel.load) || [],
        demand: (energySel && energySel.demand) || []
    });
    return {
        refEnvelope: r.refEnvelope,
        baseLevel: r.baseLevel,
        scenario: r.scenario,
        energyObject: r.energyObject,
        measuresNotRepresented: r.measuresNotRepresented,
        ladderNote: r.ladderNote
    };
}

/**
 * Compute every metric for one set of selections.
 *
 * ComparisonMode v2, P2 and P3. Two conventions are now explicit, and they are
 * the same two the summary page follows (D8.1 item 4):
 *
 *   absent  a metric that was not selected, and that has no defined value
 *           without the selection. Rooftop PV and RoP: with no array there is
 *           no generation to report and no ratio to form. Carried as null and
 *           printed as "Not selected", never as a zero.
 *
 *   zero    a metric whose unselected state IS a measured quantity. A
 *           neighbourhood with no EV fleet draws nothing to charge one, and a
 *           neighbourhood with no landscape array generates nothing from it.
 *           finish-design.js says so in words: "a true zero rather than a
 *           missing value". Carried as 0 so the delta against a scenario that
 *           does select them is real instead of a dash.
 */
function computeMetrics(code, envelope, energySel, mobilitySel, greenSel) {
    const r = resolveScenario(code, envelope, energySel);
    const refEnvelope = r.refEnvelope, baseLevel = r.baseLevel;
    const scenario = r.scenario, energyObject = r.energyObject;
    const condArea = (typeof CONDITIONED_AREA_DATA !== 'undefined') ? CONDITIONED_AREA_DATA[code] : null;
    const metrics = {};

    metrics.scenario = scenario;
    metrics.refEnvelope = refEnvelope;
    metrics.baseLevel = baseLevel;
    metrics.ladderNote = r.ladderNote;
    metrics.caption = LMN_CONFIG.resultCaption(envelope, scenario);
    metrics.rungDetail = LMN_CONFIG.eemDetail(scenario);
    metrics.conditionedAreaM2 = condArea;

    // 1. EUI (kWh/m2.yr). Never absent: every rung is simulated.
    metrics.eui = (energyObject && energyObject.total != null) ? energyObject.total : null;

    // 1b. End-use breakdown, six uses, straight from the same run. P4.
    metrics.breakdown = (energyObject && energyObject.breakdown) ? energyObject.breakdown : null;

    // 2. Rooftop PV. D1: the baseline row carries no installed array.
    //    LMN_CONFIG.pv.scenarioNotes.baseline says what the DEFAULT pv figure
    //    actually is, "solar generation already present in the base building",
    //    and LMN_CONFIG.pvScenarioNote() switches on the EEM prefix for exactly
    //    this reason. Printing 3.9 kWh/m2.yr under the heading "Rooftop PV
    //    Intensity", with an RoP of 0.022 beside it, reads as a broken array
    //    rather than as no array at all.
    const pvSelected = !!(energySel.generation && energySel.generation.indexOf('pv_roof') !== -1);
    const arrayInstalled = (typeof scenario === 'string' && scenario.indexOf('EEM') === 0);
    metrics.pvSelected = pvSelected;
    metrics.arrayInstalled = arrayInstalled;
    metrics.pvNote = LMN_CONFIG.pvScenarioNote(scenario);

    if (pvSelected && arrayInstalled && energyObject && energyObject.pv != null) {
        metrics.pvIntensity = energyObject.pv;
        metrics.pvTotal = condArea ? (energyObject.pv * condArea / 1000) : null;
    } else {
        metrics.pvIntensity = null;
        metrics.pvTotal = null;
    }

    // The base building figure, kept apart so the page can name it correctly
    // instead of dressing it as an array.
    metrics.baseBuildingPv = (pvSelected && !arrayInstalled && energyObject && energyObject.pv != null)
        ? energyObject.pv : null;

    // 3. Ratio of Performance. Building only, LMN_CONFIG.rop, unchanged.
    const ropHidden = LMN_CONFIG.rop.hiddenForScenarios.indexOf(scenario) !== -1;
    metrics.rop = (metrics.pvIntensity != null && !ropHidden && energyObject && energyObject.total)
        ? metrics.pvIntensity / energyObject.total
        : null;

    // 4. Facade PV. D4: until now the card could be selected and nothing moved.
    //    LMN_CONFIG.facadePv.includedInTotals is false by decision D0.5, so the
    //    honest treatment is an indicative line outside every total, with the
    //    reason on screen, not a silent no-op.
    const facadeSelected = !!(energySel.generation && energySel.generation.indexOf('pv_facade') !== -1);
    metrics.facadePvSelected = facadeSelected;
    metrics.facadePvAllowed = facadeSelected && LMN_CONFIG.facadePvAllowed(code, envelope);
    metrics.facadePvNote = LMN_CONFIG.facadePv.note;

    // 5. EV net grid demand (kWh/day). Zero, not absent, when no fleet.
    const transportSel = (mobilitySel && mobilitySel.transportation) || [];
    const evSelected = transportSel.indexOf('ev') !== -1;
    const evScenario = evSelected ? (transportSel.indexOf('v2g_stations') !== -1 ? 'EV2' : 'EV1') : null;
    const evData = (evScenario && typeof EV_V2G_DATA !== 'undefined' && EV_V2G_DATA[code])
        ? EV_V2G_DATA[code][evScenario] : null;
    metrics.evScenario = evScenario;
    metrics.evSelected = evSelected;
    if (evSelected) {
        metrics.evNetDemand = (evData && evData.netEnergyBalance_kWh != null)
            ? evData.netEnergyBalance_kWh : null;
    } else {
        metrics.evNetDemand = 0;
    }

    // 6. Landscape PV (MWh/yr). Zero, not absent, when no array.
    const lpvSelected = !!(greenSel && greenSel.energy_integrated &&
                           greenSel.energy_integrated.indexOf('pv_vgs') !== -1);
    metrics.lpvSelected = lpvSelected;
    metrics.lpvGeneration = lpvSelected ? LMN_CONFIG.lpvChain().generationMWhYr : 0;

    // ---------------------------------------------------------------
    // P3. The neighbourhood balance, in one unit, MWh/yr.
    //
    // Legitimate because EV_V2G_DATA[nu].totalFloorArea and
    // CONDITIONED_AREA_DATA[nu] are the same number since DBG-032, so the
    // intensity denominator and the EV chain share a basis. Every row here is
    // arithmetic on numbers printed above it.
    // ---------------------------------------------------------------
    const bal = LMN_CONFIG.neighbourhoodBalance;
    const days = bal.evAnnualisation.daysPerYear;

    metrics.buildingDemandMWh = (metrics.eui != null && condArea != null)
        ? metrics.eui * condArea / 1000 : null;
    metrics.rooftopPvMWh = metrics.pvTotal;                 // null when no array
    metrics.lpvMWh = metrics.lpvGeneration;                 // zero when none
    metrics.evAnnualMWh = (metrics.evNetDemand != null)
        ? metrics.evNetDemand * days / 1000 : null;

    // A missing rooftop array contributes nothing rather than blocking the sum;
    // a missing EUI or a missing EV figure does block it, because the total
    // would then be silently short of a term that exists.
    metrics.totalGenerationMWh = (metrics.buildingDemandMWh != null)
        ? (metrics.rooftopPvMWh || 0) + (metrics.lpvMWh || 0) : null;
    metrics.totalDemandMWh = (metrics.buildingDemandMWh != null && metrics.evAnnualMWh != null)
        ? metrics.buildingDemandMWh + metrics.evAnnualMWh : null;
    metrics.balanceRatio = (metrics.totalGenerationMWh != null &&
                            metrics.totalDemandMWh != null && metrics.totalDemandMWh > 0)
        ? metrics.totalGenerationMWh / metrics.totalDemandMWh : null;

    return metrics;
}

// ─── Card Definitions ──────────────────────────────────────

const CARD_DEFS = {
    load: [
        { value: 'thermal_load', label: 'Thermal Load', image: 'Content/Images_Layer2_ThermalLoad/thermalload.png' }
    ],
    demand: [
        { value: 'cop4', label: 'Heat Pump (COP 4)', image: 'Content/Images_Layer2_EnergyDemand/heatpump_cop4.png' },
        { value: 'dhw', label: 'Heat Pump for DHW', image: 'Content/Images_Layer2_EnergyDemand/dhw.png' },
        { value: 'appliances', label: 'Efficient Appliances & Equipment', image: 'Content/Images_Layer2_EnergyDemand/appliancesequipment.png' },
        { value: 'ideal_air_load', label: 'Other (TBA)', image: 'Content/Images_Layer2_EnergyDemand/hvac_cop3.png', disabled: true, status: 'Not modelled yet' }
    ],
    generation: [
        { value: 'pv_roof', label: 'PV on Roof', image: 'Content/Images_Layer2_EnergyGeneration/pv on roof.png' },
        { value: 'pv_facade', label: 'PV on Facade', image: 'Content/Images_Layer2_EnergyGeneration/pv on facade.png' }
    ],
    transportation: [
        { value: 'ev', label: 'EV', image: 'Content/Images_Layer3_Transportation/ev.png' },
        { value: 'v2g_stations', label: 'V2G Stations', image: 'Content/Images_Layer3_Transportation/v2g stations.png', disabled: true, status: 'Requires EV' }
    ],
    mobility: [
        { value: 'bicycle_infrastructure', label: 'Bicycle Infrastructure', image: 'Content/Images_Layer3_Mobility/bicycle infrastructure.png', disabled: true, status: 'Not modelled yet' },
        { value: 'pedestrian_oriented_design', label: 'Pedestrian-Oriented Design', image: 'Content/Images_Layer3_Mobility/pedestrian-oriented design.png', disabled: true, status: 'Not modelled yet' }
    ],
    green: [
        { value: 'pv_vgs', label: 'Landscape PV', image: 'Content/Images_Layer4_EnergyIntegratedGI/lpv.png', status: 'Preliminary' }
    ]
};

// ─── Scenario State ─────────────────────────────────────────

const scenarios = {
    a: { energy: {}, mobility: {}, green: {} },
    b: { energy: { load: [], demand: [], generation: [] }, mobility: { transportation: [], mobility: [] }, green: { energy_integrated: [] } },
    c: null
};

let chartInstance = null;

// ─── Build Selection Pills (read-only, for Scenario A) ─────

function buildPills(containerId, selections, groupMap) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    // groupMap: { configGroupName: sessionStorageKey }
    for (const [configGroup, storageKey] of Object.entries(groupMap)) {
        const selValues = selections[storageKey] || [];
        selValues.forEach(val => {
            const sel = LMN_CONFIG.selection(configGroup, val);
            html += `<span class="selection-pill"><img src="${sel.image}" alt="" onerror="LMN_CONFIG.iconMissing(this)">${sel.label}</span>`;
        });
    }
    container.innerHTML = html || '<span style="color:var(--text-secondary);font-size:0.82rem">No selections</span>';
}

// ─── Build Interactive Cards (for Scenario B/C) ────────────

function buildMiniCards(containerId, cardDefs, selectionArray, onChange) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    cardDefs.forEach(def => {
        const isActive = selectionArray.includes(def.value);
        const isDisabled = def.disabled ? ' disabled' : '';
        const statusHtml = def.status ? `<span class="card-status${def.status === 'Preliminary' ? ' card-status--preliminary' : ''}">${def.status}</span>` : '';
        html += `<button class="comp-card comp-mini-card${isActive ? ' active' : ''}" data-value="${def.value}"${isDisabled}>`;
        html += `<img src="${def.image}" alt="" onerror="LMN_CONFIG.iconMissing(this)">`;
        html += `<span>${def.label}</span>`;
        html += statusHtml;
        html += `</button>`;
    });
    container.innerHTML = html;

    // Attach click handlers
    container.querySelectorAll('.comp-card').forEach(btn => {
        if (btn.disabled) return;
        btn.addEventListener('click', () => {
            const val = btn.dataset.value;
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                if (!selectionArray.includes(val)) selectionArray.push(val);
            } else {
                const idx = selectionArray.indexOf(val);
                if (idx !== -1) selectionArray.splice(idx, 1);
            }
            if (onChange) onChange();
        });
    });
}

function applyLoadDemandExclusion(scenarioKey) {
    const sel = scenarios[scenarioKey].energy;
    const prefix = `scen-${scenarioKey}`;

    // If load has thermal_load, disable demand cards
    const hasLoad = sel.load && sel.load.includes('thermal_load');
    const hasDemand = sel.demand && sel.demand.length > 0;

    const demandContainer = document.getElementById(`${prefix}-demand-cards`);
    const loadContainer = document.getElementById(`${prefix}-load-cards`);

    if (demandContainer) {
        demandContainer.querySelectorAll('.comp-card').forEach(btn => {
            if (btn.dataset.value === 'ideal_air_load') return; // permanently disabled
            if (hasLoad) {
                btn.disabled = true;
                btn.classList.remove('active');
            } else {
                btn.disabled = false;
            }
        });
        if (hasLoad) sel.demand = [];
    }

    if (loadContainer) {
        loadContainer.querySelectorAll('.comp-card').forEach(btn => {
            btn.disabled = hasDemand;
            if (hasDemand) btn.classList.remove('active');
        });
        if (hasDemand) sel.load = [];
    }
}

function applyEvV2gDependency(scenarioKey) {
    const sel = scenarios[scenarioKey].mobility;
    const prefix = `scen-${scenarioKey}`;
    const hasEv = sel.transportation && sel.transportation.includes('ev');
    const container = document.getElementById(`${prefix}-transportation-cards`);
    if (!container) return;

    const v2gBtn = container.querySelector('[data-value="v2g_stations"]');
    if (v2gBtn) {
        if (!hasEv) {
            v2gBtn.disabled = true;
            v2gBtn.classList.remove('active');
            const idx = sel.transportation.indexOf('v2g_stations');
            if (idx !== -1) sel.transportation.splice(idx, 1);
        } else {
            v2gBtn.disabled = false;
        }
    }
}

// ─── Build Scenario Panel Cards ─────────────────────────────

function buildScenarioCards(scenarioKey, code, envelope) {
    const sel = scenarios[scenarioKey];
    const prefix = `scen-${scenarioKey}`;

    const onEnergyChange = () => {
        applyLoadDemandExclusion(scenarioKey);
        updateResults(code, envelope);
    };

    const onGenChange = () => {
        updateResults(code, envelope);
    };

    const onMobilityChange = () => {
        applyEvV2gDependency(scenarioKey);
        updateResults(code, envelope);
    };

    const onGreenChange = () => {
        updateResults(code, envelope);
    };

    // Layer 2
    buildMiniCards(`${prefix}-load-cards`, CARD_DEFS.load, sel.energy.load, onEnergyChange);
    buildMiniCards(`${prefix}-demand-cards`, CARD_DEFS.demand, sel.energy.demand, onEnergyChange);

    // Filter facade PV based on availability
    const isFacadeAllowed = LMN_CONFIG.facadePvAllowed(code, envelope);
    const genDefs = CARD_DEFS.generation.map(def => {
        if (def.value === 'pv_facade' && !isFacadeAllowed) {
            return { ...def, disabled: true, status: 'Montreal only' };
        }
        return def;
    });
    buildMiniCards(`${prefix}-generation-cards`, genDefs, sel.energy.generation, onGenChange);

    // Layer 3
    buildMiniCards(`${prefix}-transportation-cards`, CARD_DEFS.transportation, sel.mobility.transportation, onMobilityChange);
    buildMiniCards(`${prefix}-mobility-cards`, CARD_DEFS.mobility, sel.mobility.mobility, onMobilityChange);

    // Layer 4
    buildMiniCards(`${prefix}-green-cards`, CARD_DEFS.green, sel.green.energy_integrated, onGreenChange);

    // Apply initial exclusions
    applyEvV2gDependency(scenarioKey);
}

// ─── Collapsible Panels ─────────────────────────────────────

function setupCollapsibles() {
    document.querySelectorAll('.comp-collapsible-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (!target) return;

            btn.classList.toggle('open');
            target.classList.toggle('open');
        });
    });
}

// ─── Render Results Table ───────────────────────────────────

// P5. The maturity of a number, from LMN_CONFIG.provenance.results, so the
// column and the documentation cannot drift apart. The two preliminary chains
// carry the word CHV asked for rather than the generic "Derived".
function maturityLabel(provKey) {
    const p = LMN_CONFIG.provenance.results[provKey];
    if (!p) return '';
    if (provKey === 'evV2g' || provKey === 'landscapePv') return 'Preliminary';
    return (p.kind === 'simulated')
        ? LMN_CONFIG.provenance.simulatedLabel
        : LMN_CONFIG.provenance.derivedLabel;
}
function maturityNote(provKey) {
    const p = LMN_CONFIG.provenance.results[provKey];
    return p ? p.note : '';
}

// The rows of the results table, in order.
//
// Block 1 is what the visitor selected, in the unit each figure is reported in.
// Block 2 is P3: the same quantities put on one basis, MWh per year, so the
// buildings, the two arrays and the vehicles can finally be added up. Nothing
// in block 2 is a new number - it is arithmetic on block 1 and the heated and
// cooled floor area, which is why every row of it is marked Derived.
function rowDefs() {
    const u = LMN_CONFIG.units.euiCompact;
    const bal = LMN_CONFIG.neighbourhoodBalance;
    return [
        { section: 'Per area, as selected',
          sub: 'Intensities are ' + LMN_CONFIG.euiBasis() },

        { key: 'eui', label: 'Energy Use Intensity (' + u + ')',
          digits: 1, lowerIsBetter: true, prov: 'eui' },

        { key: 'pvIntensity', label: 'Rooftop PV intensity (' + u + ')',
          digits: 1, lowerIsBetter: false, prov: 'pvIntensity' },

        { noteFor: 'basePv' },

        { key: 'rop', label: LMN_CONFIG.rop.name,
          digits: 3, lowerIsBetter: false, prov: 'rop', title: LMN_CONFIG.rop.definition },

        { key: 'evNetDemand',
          label: LMN_CONFIG.ev.netGridDemandTotalLabel + ' (' + LMN_CONFIG.ev.netGridDemandTotalUnit + ')',
          digits: 0, lowerIsBetter: true, prov: 'evV2g' },

        { noteFor: 'facade' },

        { section: bal.name.replace(' ratio', ''),
          sub: bal.derivedNote },

        { key: 'buildingDemandMWh', label: 'Building demand (MWh/yr)',
          digits: 1, lowerIsBetter: true, prov: 'eui', derived: true },

        { key: 'rooftopPvMWh', label: 'Rooftop PV generation (MWh/yr)',
          digits: 1, lowerIsBetter: false, prov: 'pvTotal', derived: true },

        { key: 'lpvMWh', label: 'Landscape PV generation (MWh/yr)',
          digits: 1, lowerIsBetter: false, prov: 'landscapePv', derived: true },

        { key: 'evAnnualMWh', label: 'EV charging demand, annualised (MWh/yr)',
          digits: 1, lowerIsBetter: true, prov: 'evV2g', derived: true },

        { noteFor: 'evAnnual' },

        { key: 'totalGenerationMWh', label: 'Total on-site generation (MWh/yr)',
          digits: 1, lowerIsBetter: false, prov: 'pvTotal', derived: true, total: true },

        { key: 'totalDemandMWh', label: 'Total neighbourhood demand (MWh/yr)',
          digits: 1, lowerIsBetter: true, prov: 'eui', derived: true, total: true },

        { key: 'balanceRatio', label: bal.name,
          digits: 3, lowerIsBetter: false, prov: 'rop', derived: true, total: true,
          title: bal.definition },

        { noteFor: 'balance' }
    ];
}

// P2. Absent and zero are different things and are printed differently.
function valueCell(v, def, extraClass) {
    if (v === null || v === undefined) {
        return '<td class="value-cell comp-absent">Not selected</td>';
    }
    return '<td class="value-cell' + (extraClass || '') + '">' + fsNum(v, def.digits) + '</td>';
}

function noteRow(text, span) {
    return '<tr class="comp-note-row"><td colspan="' + span + '">' + text + '</td></tr>';
}

function renderComparisonTable(code, envelope, activeScenarios) {
    const results = {};
    const scenarioKeys = Object.keys(activeScenarios);

    scenarioKeys.forEach(function (key) {
        const s = activeScenarios[key];
        results[key] = computeMetrics(code, envelope, s.energy, s.mobility, s.green);
    });

    // D6. The dead baseLevel is put back to work. The code baseline is the same
    // neighbourhood in the same climate at the rung the arm starts from, with
    // nothing selected: no array, no fleet, no landscape PV. It is the column
    // the summary page compares against, and the comparison page had none.
    const showBaseline = !!(document.getElementById('comp-show-baseline') || {}).checked;
    const baseline = showBaseline
        ? computeMetrics(code, envelope,
            { load: [], demand: [], generation: [] },
            { transportation: [], mobility: [] },
            { energy_integrated: [] })
        : null;

    const headerRow = document.getElementById('comp-table-header');
    if (headerRow) {
        let h = '<th>Metric</th><th>Maturity</th>';
        // CHV, 2026-08-24, terminology. The column is a NECB 2017 code minimum
        // model of the same neighbourhood, and it is off by default, so it is
        // already the explicit choice she asked for. Only its name changes.
        if (baseline) h += '<th>NECB 2017 code minimum</th>';
        scenarioKeys.forEach(function (key) { h += '<th>Scenario ' + key.toUpperCase() + '</th>'; });
        if (scenarioKeys.length === 2) {
            h += '<th>Δ (' + scenarioKeys[1].toUpperCase() + ' − ' + scenarioKeys[0].toUpperCase() + ')</th>';
        } else if (scenarioKeys.length === 3) {
            h += '<th>Δ (B − A)</th><th>Δ (C − A)</th>';
        }
        headerRow.innerHTML = h;
    }

    const tbody = document.getElementById('comp-table-body');
    if (!tbody) return results;

    const deltaCount = scenarioKeys.length >= 2 ? (scenarioKeys.length === 2 ? 1 : 2) : 0;
    const span = 2 + (baseline ? 1 : 0) + scenarioKeys.length + deltaCount;

    let rows = '';
    rowDefs().forEach(function (def) {

        // Section heading.
        if (def.section) {
            rows += '<tr class="comp-section-row"><td colspan="' + span + '">' + def.section +
                (def.sub ? '<span class="comp-section-sub">' + def.sub + '</span>' : '') +
                '</td></tr>';
            return;
        }

        // Explanatory rows, printed only when they apply to something on screen.
        if (def.noteFor === 'basePv') {
            // D1. A baseline row has no installed array. The pv figure on that
            // row is solar already present in the base building, and printing
            // it as "Rooftop PV intensity" with an RoP beside it reads as a
            // broken array rather than as no array at all.
            const anyBase = scenarioKeys.filter(function (k) { return results[k].baseBuildingPv != null; });
            if (!anyBase.length) return;
            const parts = anyBase.map(function (k) {
                return 'Scenario ' + k.toUpperCase() + ': ' + fsNum(results[k].baseBuildingPv, 1) +
                    ' ' + LMN_CONFIG.units.euiCompact;
            });
            rows += noteRow(LMN_CONFIG.pv.scenarioNotes.baseline + ' ' + parts.join('. ') +
                '. It is not counted as rooftop generation and forms no ratio.', span);
            return;
        }

        if (def.noteFor === 'facade') {
            // D4. The card used to be selectable and change nothing at all.
            const anyFacade = scenarioKeys.filter(function (k) { return results[k].facadePvSelected; });
            if (!anyFacade.length) return;
            const names = anyFacade.map(function (k) { return k.toUpperCase(); }).join(', ');
            const allowed = anyFacade.filter(function (k) { return results[k].facadePvAllowed; }).length > 0;
            rows += noteRow('Facade PV, selected in scenario ' + names + '. Indicative only, outside every total above. ' +
                (allowed ? LMN_CONFIG.facadePv.note
                         : 'It is also outside the cases it was measured on, so no figure is shown for this neighbourhood and climate.'),
                span);
            return;
        }

        if (def.noteFor === 'evAnnual') {
            const anyEv = scenarioKeys.filter(function (k) { return results[k].evSelected; });
            if (!anyEv.length) return;
            rows += noteRow(LMN_CONFIG.neighbourhoodBalance.evAnnualisation.note, span);
            return;
        }

        if (def.noteFor === 'balance') {
            rows += noteRow(LMN_CONFIG.neighbourhoodBalance.ropContrast + ' ' +
                LMN_CONFIG.neighbourhoodBalance.lpvInclusion.note + ' ' +
                LMN_CONFIG.lpv.uniformityNote, span);
            return;
        }

        // A value row.
        const values = scenarioKeys.map(function (k) { return results[k][def.key]; });
        const cls = def.total ? ' comp-total-row' : '';
        rows += '<tr class="' + cls.trim() + '">';
        rows += '<td class="label-cell"' + (def.title ? ' title="' + def.title + '"' : '') + '>' + def.label + '</td>';
        rows += '<td class="maturity-cell" title="' + maturityNote(def.prov) + '">' + maturityLabel(def.prov) + '</td>';

        if (baseline) rows += valueCell(baseline[def.key], def, ' comp-absent');

        const nonNull = values.filter(function (x) { return x !== null && x !== undefined; });
        let best = null;
        if (nonNull.length > 1) {
            const candidate = def.lowerIsBetter ? Math.min.apply(null, nonNull) : Math.max.apply(null, nonNull);
            if (nonNull.filter(function (x) { return x === candidate; }).length < nonNull.length) best = candidate;
        }
        values.forEach(function (v) {
            rows += valueCell(v, def, (best !== null && v === best) ? ' comp-best-value' : '');
        });

        if (deltaCount) {
            const pairs = deltaCount === 1 ? [[0, 1]] : [[0, 1], [0, 2]];
            pairs.forEach(function (pair) {
                const av = values[pair[0]], bv = values[pair[1]];
                if (av === null || av === undefined || bv === null || bv === undefined) {
                    // A dash here now means one side genuinely has no value, not
                    // that one side simply was not selected: the zero cases are
                    // carried as zero by computeMetrics.
                    rows += '<td class="value-cell comp-absent">—</td>';
                } else {
                    const d = bv - av;
                    let colorClass;
                    if (d === 0) colorClass = 'comp-delta-neutral';
                    else if (def.lowerIsBetter) colorClass = d < 0 ? 'comp-delta-positive' : 'comp-delta-negative';
                    else colorClass = d > 0 ? 'comp-delta-positive' : 'comp-delta-negative';
                    rows += '<td class="value-cell ' + colorClass + '">' + fsSigned(d, def.digits) + '</td>';
                }
            });
        }

        rows += '</tr>';
    });

    tbody.innerHTML = rows;

    setText('comp-baseline-note', 'All scenarios share the same neighbourhood and climate, '
        + LMN_CONFIG.envelopeLabel(envelope) + '. ' + LMN_CONFIG.units.energyBasisSentence
        + ' A metric that was not selected reads "Not selected" rather than zero, except where a zero is the measured answer: '
        + 'a neighbourhood with no fleet draws nothing to charge one, and a neighbourhood with no landscape array generates nothing from it.');

    return results;
}

// ─── Scenario captions (P5) ─────────────────────────────────

// The page never said which simulated rung a set of cards resolved to, so a
// visitor could not tell that Scenario B was HPerf + Heat Pump + DHW, nor that
// a measure they had ticked was not represented at all.
function renderScenarioCaptions(results) {
    Object.keys(results).forEach(function (key) {
        const panel = document.getElementById('scenario-' + key);
        if (!panel) return;
        const header = panel.querySelector('.comp-scenario-header');
        if (!header) return;
        const m = results[key];

        let caption = header.querySelector('.comp-rung-caption');
        if (!caption) {
            caption = document.createElement('p');
            caption.className = 'comp-rung-caption';
            header.appendChild(caption);
        }
        caption.innerHTML = 'Resolves to <strong>' + m.caption + '</strong>';
        caption.title = m.rungDetail || '';

        let note = header.querySelector('.comp-ladder-note');
        if (m.ladderNote) {
            if (!note) {
                note = document.createElement('p');
                note.className = 'comp-ladder-note';
                header.appendChild(note);
            }
            note.textContent = m.ladderNote;
        } else if (note) {
            note.parentNode.removeChild(note);
        }
    });
}

// ─── Render Charts ──────────────────────────────────────────

const SCENARIO_FILL = { a: 'rgba(245, 196, 0, 0.75)', b: 'rgba(107, 168, 184, 0.75)', c: 'rgba(138, 168, 138, 0.75)' };
const SCENARIO_LINE = { a: '#F5C400', b: '#6BA8B8', c: '#8AA88A' };

let enduseChartInstance = null;

// Chart 1: intensity only. The v1 chart put kWh/m2.yr, a percentage and MWh/yr
// on one linear axis, where a landscape PV total of 103.6 sat beside an EUI of
// 82.8 and meant nothing next to it. Ratios moved to the strip below and totals
// to the balance block of the table.
function renderComparisonChart(results, scenarioKeys) {
    const canvas = document.getElementById('comp-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

    const labels = ['EUI', 'Rooftop PV'];
    const datasets = scenarioKeys.map(function (key) {
        const m = results[key];
        return {
            label: 'Scenario ' + key.toUpperCase(),
            // P2, D2. null, not 0. Chart.js draws no bar for null, which is the
            // honest picture: an unselected array is absent, and a zero-height
            // bar reads as a measured zero.
            data: [m.eui, m.pvIntensity],
            backgroundColor: SCENARIO_FILL[key],
            borderColor: SCENARIO_LINE[key],
            borderWidth: 1.5
        };
    });

    chartInstance = new Chart(canvas, {
        type: 'bar',
        data: { labels: labels, datasets: datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top', labels: { font: { family: "'Inter', sans-serif", size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const v = ctx.parsed.y;
                            if (v === null || v === undefined) return ctx.dataset.label + ': not selected';
                            return ctx.dataset.label + ': ' +
                                v.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) +
                                ' ' + LMN_CONFIG.units.euiCompact;
                        }
                    }
                },
                title: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: LMN_CONFIG.units.euiCompact,
                             font: { family: "'Inter', sans-serif", size: 11 } },
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { font: { family: "'Inter', sans-serif", size: 11 } }
                },
                x: { grid: { display: false }, ticks: { font: { family: "'Inter', sans-serif", size: 11 } } }
            }
        }
    });

    setText('comp-chart-note', 'One axis, one unit. A bar that is missing was not selected; it is not a zero.');
}

// Chart 2: the six end uses of the same run. Already in data.js and never read
// until now. A single EUI hides a load shift - at MU-HC in NECB Zone 7a the DHW
// rung cuts water heating from 45.1 to 8.5 while heating RISES from 15.9 to
// 20.9 - and this chart is where that becomes visible.
function renderEndUseChart(results, scenarioKeys) {
    const canvas = document.getElementById('comp-chart-enduse');
    if (!canvas || typeof Chart === 'undefined') return;

    if (enduseChartInstance) { enduseChartInstance.destroy(); enduseChartInstance = null; }

    const labels = scenarioKeys.map(function (k) { return 'Scenario ' + k.toUpperCase(); });

    // The end uses in the order the simulation reports them, taken from the
    // first scenario that has a breakdown at all.
    let uses = [];
    for (let i = 0; i < scenarioKeys.length; i++) {
        const b = results[scenarioKeys[i]].breakdown;
        if (b && b.length) { uses = b.map(function (x) { return x.name; }); break; }
    }
    if (!uses.length) return;

    const datasets = uses.map(function (name) {
        return {
            label: name,
            data: scenarioKeys.map(function (k) {
                const b = results[k].breakdown;
                if (!b) return null;
                const hit = b.filter(function (x) { return x.name === name; })[0];
                return hit ? hit.value : null;
            }),
            backgroundColor: (typeof ENERGY_COLORS !== 'undefined' && ENERGY_COLORS[name]) || '#9ca3af',
            borderWidth: 0
        };
    });

    enduseChartInstance = new Chart(canvas, {
        type: 'bar',
        data: { labels: labels, datasets: datasets },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { family: "'Inter', sans-serif", size: 11 } } },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            const v = ctx.parsed.y;
                            if (v === null || v === undefined) return ctx.dataset.label + ': —';
                            return ctx.dataset.label + ': ' +
                                v.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) +
                                ' ' + LMN_CONFIG.units.euiCompact;
                        }
                    }
                }
            },
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { font: { family: "'Inter', sans-serif", size: 11 } } },
                y: {
                    stacked: true, beginAtZero: true,
                    title: { display: true, text: LMN_CONFIG.units.euiCompact,
                             font: { family: "'Inter', sans-serif", size: 11 } },
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { font: { family: "'Inter', sans-serif", size: 11 } }
                }
            }
        }
    });
}

// The two ratios, side by side, per scenario. A ratio is not a quantity, so it
// does not belong in a bar chart shared with intensities. The mark on the track
// is LMN_CONFIG.rop.nearPositiveThreshold, 0.95, the point the tool calls near
// energy positive.
function renderRatioStrip(results, scenarioKeys) {
    const strip = document.getElementById('comp-ratio-strip');
    if (!strip) return;

    const threshold = LMN_CONFIG.rop.nearPositiveThreshold;
    const bal = LMN_CONFIG.neighbourhoodBalance;

    function gauge(title, value, colour, footer, tip) {
        const shown = (value == null) ? 'Not selected' : fsNum(value, 3);
        const pct = (value == null) ? 0 : Math.max(0, Math.min(1, value)) * 100;
        return '<div class="comp-gauge" title="' + tip + '">' +
            '<div class="comp-gauge-head"><span>' + title + '</span>' +
            '<span class="comp-gauge-value">' + shown + '</span></div>' +
            '<div class="comp-gauge-track">' +
            '<div class="comp-gauge-fill" style="width:' + pct + '%;background:' + colour + '"></div>' +
            '<div class="comp-gauge-threshold" style="left:' + (threshold * 100) + '%"></div>' +
            '</div>' +
            '<div class="comp-gauge-foot">' + footer + '</div></div>';
    }

    let html = '';
    scenarioKeys.forEach(function (key) {
        const m = results[key];
        html += gauge('Scenario ' + key.toUpperCase() + ' — ' + LMN_CONFIG.rop.abbreviation,
            m.rop, SCENARIO_LINE[key], 'Buildings only. Mark at ' + threshold + '.', LMN_CONFIG.rop.definition);
        html += gauge('Scenario ' + key.toUpperCase() + ' — ' + bal.abbreviation,
            m.balanceRatio, SCENARIO_LINE[key], 'Buildings, vehicles and both arrays.', bal.definition);
    });
    strip.innerHTML = html;
}

// ─── Add Scenario C ─────────────────────────────────────────

function addScenarioC(code, envelope) {
    if (scenarios.c) return;

    scenarios.c = {
        energy: { load: [], demand: [], generation: [] },
        mobility: { transportation: [], mobility: [] },
        green: { energy_integrated: [] }
    };

    const container = document.getElementById('scenarios-container');
    if (!container) return;

    const panelHtml = `
    <div class="comp-scenario-panel comp-scenario--c" id="scenario-c">
        <div class="comp-scenario-header">
            <span class="comp-scenario-badge">C</span>
            <h2>Alternative 2</h2>
        </div>
        <div class="comp-scenario-body">
            <div class="comp-layer-group">
                <button class="comp-collapsible-btn" data-target="scen-c-l2-body">
                    <h3 class="comp-layer-title">Layer 2 — Energy</h3>
                    <svg class="comp-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div id="scen-c-l2-body" class="comp-collapsible-body">
                    <div class="comp-card-group"><span class="comp-card-group-label">Load</span><div class="comp-card-row" id="scen-c-load-cards"></div></div>
                    <div class="comp-card-group"><span class="comp-card-group-label">Energy Systems</span><div class="comp-card-row" id="scen-c-demand-cards"></div></div>
                    <div class="comp-card-group"><span class="comp-card-group-label">Energy Generation</span><div class="comp-card-row" id="scen-c-generation-cards"></div></div>
                </div>
            </div>
            <div class="comp-layer-group">
                <button class="comp-collapsible-btn" data-target="scen-c-l3-body">
                    <h3 class="comp-layer-title">Layer 3 — Mobility</h3>
                    <svg class="comp-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div id="scen-c-l3-body" class="comp-collapsible-body">
                    <div class="comp-card-group"><span class="comp-card-group-label">Transportation</span><div class="comp-card-row" id="scen-c-transportation-cards"></div></div>
                    <div class="comp-card-group"><span class="comp-card-group-label">Mobility</span><div class="comp-card-row" id="scen-c-mobility-cards"></div></div>
                </div>
            </div>
            <div class="comp-layer-group">
                <button class="comp-collapsible-btn" data-target="scen-c-l4-body">
                    <h3 class="comp-layer-title">Layer 4 — Green Infrastructure</h3>
                    <svg class="comp-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div id="scen-c-l4-body" class="comp-collapsible-body">
                    <div class="comp-card-group"><span class="comp-card-group-label">Energy-Integrated GI</span><div class="comp-card-row" id="scen-c-green-cards"></div></div>
                </div>
            </div>
        </div>
        <div class="comp-scenario-footer">
            <button id="copy-a-to-c" class="comp-copy-btn" type="button">Copy Scenario A into C</button>
        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', panelHtml);

    // Build cards for scenario C
    buildScenarioCards('c', code, envelope);

    // Setup collapsibles for the new panel
    document.querySelectorAll('#scenario-c .comp-collapsible-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (!target) return;
            btn.classList.toggle('open');
            target.classList.toggle('open');
        });
    });

    const copyBtnC = document.getElementById('copy-a-to-c');
    if (copyBtnC) {
        copyBtnC.addEventListener('click', () => {
            scenarios.c = {
                energy: {
                    load: (scenarios.a.energy.load || []).slice(),
                    demand: (scenarios.a.energy.demand || []).slice(),
                    generation: (scenarios.a.energy.generation || []).slice()
                },
                mobility: {
                    transportation: (scenarios.a.mobility.transportation || []).slice(),
                    mobility: (scenarios.a.mobility.mobility || []).slice()
                },
                green: {
                    energy_integrated: (scenarios.a.green.energy_integrated || []).slice()
                }
            };
            buildScenarioCards('c', code, envelope);
            updateResults(code, envelope);
        });
    }

    // Disable the add button
    const addBtn = document.getElementById('add-scenario-c');
    if (addBtn) {
        addBtn.disabled = true;
        addBtn.textContent = 'Scenario C added';
    }

    // Refresh table and chart with Scenario C column
    updateResults(code, envelope);
}

// ─── Update All Results ─────────────────────────────────────

function updateResults(code, envelope) {
    const active = { a: scenarios.a };
    active.b = scenarios.b;
    if (scenarios.c) active.c = scenarios.c;

    const keys = Object.keys(active);
    const results = renderComparisonTable(code, envelope, active);
    renderScenarioCaptions(results);
    renderComparisonChart(results, keys);
    renderEndUseChart(results, keys);
    renderRatioStrip(results, keys);
}

// ─── Export ──────────────────────────────────────────────────

// P6. One payload builder, used by both buttons, so the two exports can never
// disagree about what a scenario contained.
function buildExportRows(code, envelope) {
    const active = { a: scenarios.a };
    active.b = scenarios.b;
    if (scenarios.c) active.c = scenarios.c;

    const bal = LMN_CONFIG.neighbourhoodBalance;
    const rows = [];
    Object.keys(active).forEach(function (key) {
        const s = active[key];
        const m = computeMetrics(code, envelope, s.energy, s.mobility, s.green);
        rows.push({ key: key, selections: s, m: m, bal: bal });
    });
    return rows;
}

// unit, provenance kind and the resolved rung travel with every value, because
// a number without its basis is not evidence.
function exportMetricList(m) {
    return [
        { id: 'eui',                 label: 'Energy Use Intensity',            unit: LMN_CONFIG.units.euiCompact,   value: m.eui,               prov: 'eui' },
        { id: 'pvIntensity',         label: 'Rooftop PV intensity',            unit: LMN_CONFIG.units.euiCompact,   value: m.pvIntensity,       prov: 'pvIntensity' },
        { id: 'baseBuildingPv',      label: 'Base building solar (no array)',  unit: LMN_CONFIG.units.euiCompact,   value: m.baseBuildingPv,    prov: 'pvIntensity' },
        { id: 'rop',                 label: LMN_CONFIG.rop.name,               unit: 'dimensionless',               value: m.rop,               prov: 'rop' },
        { id: 'evNetDemand',         label: LMN_CONFIG.ev.netGridDemandTotalLabel, unit: LMN_CONFIG.ev.netGridDemandTotalUnit, value: m.evNetDemand, prov: 'evV2g' },
        { id: 'buildingDemandMWh',   label: 'Building demand',                 unit: 'MWh/yr', value: m.buildingDemandMWh,   prov: 'eui' },
        { id: 'rooftopPvMWh',        label: 'Rooftop PV generation',           unit: 'MWh/yr', value: m.rooftopPvMWh,        prov: 'pvTotal' },
        { id: 'lpvMWh',              label: 'Landscape PV generation',         unit: 'MWh/yr', value: m.lpvMWh,              prov: 'landscapePv' },
        { id: 'evAnnualMWh',         label: 'EV charging demand, annualised',  unit: 'MWh/yr', value: m.evAnnualMWh,         prov: 'evV2g' },
        { id: 'totalGenerationMWh',  label: 'Total on-site generation',        unit: 'MWh/yr', value: m.totalGenerationMWh,  prov: 'pvTotal' },
        { id: 'totalDemandMWh',      label: 'Total neighbourhood demand',      unit: 'MWh/yr', value: m.totalDemandMWh,      prov: 'eui' },
        { id: 'balanceRatio',        label: LMN_CONFIG.neighbourhoodBalance.name, unit: 'dimensionless', value: m.balanceRatio, prov: 'rop' }
    ];
}

function downloadFile(text, mime, filename) {
    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function csvCell(v) {
    if (v === null || v === undefined) return '';
    const s = String(v);
    return (/[",\n]/.test(s)) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function wireExport(code, envelope) {
    const printBtn = document.getElementById('comp-print-btn');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

    const exportBtn = document.getElementById('comp-export-btn');
    if (exportBtn) exportBtn.addEventListener('click', function () {
        const rows = buildExportRows(code, envelope);
        const payload = {
            tool: 'LMN tool, Comparison Mode',
            exported: new Date().toISOString(),
            neighbourhood: code,
            climateAndStandard: LMN_CONFIG.envelopeLabel(envelope),
            envelopeKey: envelope,
            conditionedAreaM2: (typeof CONDITIONED_AREA_DATA !== 'undefined') ? CONDITIONED_AREA_DATA[code] : null,
            gfaM2: (typeof GFA_DATA !== 'undefined') ? GFA_DATA[code] : null,
            floorAreaBasisNote: LMN_CONFIG.units.floorAreaBasisNote,
            energyBasis: LMN_CONFIG.units.energyBasisSentence,
            dataCampaign: LMN_CONFIG.dataCampaign,
            definitions: {
                rop: LMN_CONFIG.rop.definition,
                neighbourhoodBalanceRatio: LMN_CONFIG.neighbourhoodBalance.definition,
                evAnnualisation: LMN_CONFIG.neighbourhoodBalance.evAnnualisation.note,
                landscapePv: LMN_CONFIG.lpv.uniformityNote,
                facadePv: LMN_CONFIG.facadePv.note
            },
            scenarios: {}
        };

        rows.forEach(function (r) {
            const m = r.m;
            const metrics = {};
            exportMetricList(m).forEach(function (x) {
                metrics[x.id] = {
                    label: x.label,
                    value: x.value,
                    unit: x.unit,
                    provenance: LMN_CONFIG.provenance.results[x.prov]
                        ? LMN_CONFIG.provenance.results[x.prov].kind : null
                };
            });
            payload.scenarios['scenario_' + r.key.toUpperCase()] = {
                selections: r.selections,
                scenarioKey: m.scenario,
                eemLabel: LMN_CONFIG.eemLabel(m.scenario),
                resolvedCaption: m.caption,
                ladderNote: m.ladderNote || null,
                evScenario: m.evScenario,
                metrics: metrics
            };
        });

        downloadFile(JSON.stringify(payload, null, 2), 'application/json',
            'LMN-comparison-' + code + '.json');
    });

    const csvBtn = document.getElementById('comp-export-csv-btn');
    if (csvBtn) csvBtn.addEventListener('click', function () {
        const rows = buildExportRows(code, envelope);
        const lines = [];

        lines.push([LMN_CONFIG.productName + ', Comparison Mode'].map(csvCell).join(','));
        lines.push(['Neighbourhood', code].map(csvCell).join(','));
        lines.push(['Climate and standard', LMN_CONFIG.envelopeLabel(envelope)].map(csvCell).join(','));
        lines.push(['Heated and cooled floor area (m2)',
            (typeof CONDITIONED_AREA_DATA !== 'undefined') ? CONDITIONED_AREA_DATA[code] : ''].map(csvCell).join(','));
        lines.push(['Total built floor area (m2)',
            (typeof GFA_DATA !== 'undefined') ? GFA_DATA[code] : ''].map(csvCell).join(','));
        lines.push(['Energy basis', LMN_CONFIG.units.energyBasisSentence].map(csvCell).join(','));
        lines.push(['Simulation campaign',
            LMN_CONFIG.dataCampaign.climates + ' / ' + LMN_CONFIG.dataCampaign.montrealCorrected +
            ' / ' + LMN_CONFIG.dataCampaign.engine].map(csvCell).join(','));
        lines.push('');

        const header = ['Metric', 'Unit', 'Maturity'];
        rows.forEach(function (r) { header.push('Scenario ' + r.key.toUpperCase()); });
        lines.push(header.map(csvCell).join(','));

        lines.push(['Resolved case', '', ''].concat(rows.map(function (r) { return r.m.caption; }))
            .map(csvCell).join(','));

        const template = exportMetricList(rows[0].m);
        template.forEach(function (x, i) {
            const line = [x.label, x.unit, maturityLabel(x.prov)];
            rows.forEach(function (r) {
                const v = exportMetricList(r.m)[i].value;
                line.push(v === null || v === undefined ? 'Not selected' : v);
            });
            lines.push(line.map(csvCell).join(','));
        });

        lines.push('');
        lines.push(['Note', LMN_CONFIG.neighbourhoodBalance.evAnnualisation.note].map(csvCell).join(','));
        lines.push(['Note', LMN_CONFIG.lpv.uniformityNote].map(csvCell).join(','));
        lines.push(['Note', LMN_CONFIG.neighbourhoodBalance.ropContrast].map(csvCell).join(','));

        downloadFile(lines.join('\r\n'), 'text/csv;charset=utf-8',
            'LMN-comparison-' + code + '.csv');
    });
}

// ─── Init ───────────────────────────────────────────────────

function initComparisonPage() {
    const code = getQueryParam('neighbourhood');
    const envelope = getQueryParam('envelope') || sessionStorage.getItem('selectedEnvelope') || '';

    if (!code) {
        alert('No neighbourhood selected. Redirecting to start.');
        window.location.href = 'layer1_NUs_selection.html';
        return;
    }

    if (!envelope) {
        const main = document.querySelector('main.container') || document.body;
        main.innerHTML = LMN_CONFIG.noClimateNoticeHtml();
        return;
    }

    // Data gap guard (same as finish-design.js)
    const gapNotice = LMN_CONFIG.dataGapNotice(code, envelope);
    if (gapNotice) {
        const main = document.querySelector('main.container') || document.body;
        main.innerHTML = gapNotice +
            '<p class="info-box"><a href="layer1_output.html">Back to the neighbourhood table</a></p>';
        return;
    }

    // Set back button href
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.href = `layer4_finish_design.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(envelope)}`;
    }

    // Locked header
    setText('comp-nu-code', code);
    setText('comp-envelope', LMN_CONFIG.envelopeLabel(envelope));

    // Every derived total on this page divides by, or multiplies by, one of
    // these two areas. They belong on screen beside the numbers they make.
    const condArea = (typeof CONDITIONED_AREA_DATA !== 'undefined') ? CONDITIONED_AREA_DATA[code] : null;
    const gfa = (typeof GFA_DATA !== 'undefined') ? GFA_DATA[code] : null;
    if (condArea != null) {
        setText('comp-areas', fsNum(condArea, 0) + ' m² heated and cooled'
            + (gfa != null ? '  ·  ' + fsNum(gfa, 0) + ' m² total built' : ''));
        setText('comp-area-note', LMN_CONFIG.units.floorAreaBasisNote);
    }

    // ─── Scenario A: load from sessionStorage (read-only) ───
    const energySel = JSON.parse(sessionStorage.getItem('energySelections') || '{"load":[], "demand":[], "generation":[]}');
    const mobilitySel = JSON.parse(sessionStorage.getItem('mobilitySelections') || '{"transportation":[], "mobility":[]}');
    const greenSel = JSON.parse(sessionStorage.getItem('greenSelections') || '{"infrastructure":[], "urban_agriculture":[], "energy_integrated":[]}');

    scenarios.a = {
        energy: energySel,
        mobility: mobilitySel,
        green: greenSel
    };

    // Render Scenario A pills
    buildPills('scen-a-l2-pills', energySel, { load: 'load', demand: 'demand', generation: 'generation' });
    buildPills('scen-a-l3-pills', mobilitySel, { transportation: 'transportation', mobility: 'mobility' });
    buildPills('scen-a-l4-pills', greenSel, {
        infrastructure: 'infrastructure',
        urbanAgriculture: 'urban_agriculture',
        energyIntegrated: 'energy_integrated'
    });

    // ─── Scenario B: build interactive cards ────────────────
    buildScenarioCards('b', code, envelope);

    // Setup collapsibles
    setupCollapsibles();

    // Copy Scenario A into B. A deep copy, so editing B can never reach back
    // into the session-derived Scenario A.
    const copyBtn = document.getElementById('copy-a-to-b');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            scenarios.b = {
                energy: {
                    load: (scenarios.a.energy.load || []).slice(),
                    demand: (scenarios.a.energy.demand || []).slice(),
                    generation: (scenarios.a.energy.generation || []).slice()
                },
                mobility: {
                    transportation: (scenarios.a.mobility.transportation || []).slice(),
                    mobility: (scenarios.a.mobility.mobility || []).slice()
                },
                green: {
                    energy_integrated: (scenarios.a.green.energy_integrated || []).slice()
                }
            };
            buildScenarioCards('b', code, envelope);
            updateResults(code, envelope);
        });
    }

    // D6. The code baseline column, off by default so the table stays narrow.
    const baselineToggle = document.getElementById('comp-show-baseline');
    if (baselineToggle) {
        baselineToggle.addEventListener('change', () => {
            updateResults(code, envelope);
        });
    }

    // Add Scenario C button
    const addBtn = document.getElementById('add-scenario-c');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addScenarioC(code, envelope);
        });
    }

    // Initial results
    updateResults(code, envelope);

    // Wire export
    wireExport(code, envelope);
}

document.addEventListener('DOMContentLoaded', initComparisonPage);
