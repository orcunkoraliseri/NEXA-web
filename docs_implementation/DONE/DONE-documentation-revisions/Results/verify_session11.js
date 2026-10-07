/*
 * verify_session11.js
 *
 * Session 11 built the three tasks that had been waiting on a decision:
 * D6.0 (tasks 3.3 and 3.9), D3.3 (the wording of task 3.1) and D3.4 (the
 * proposal for task 3.6). This checks every claim made about that work, plus
 * the measurement behind DBG-029.
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_session11.js
 *
 * No packages. Exits non-zero on the first failure.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

let pass = 0;
const fail = [];
function check(name, condition, detail) {
    if (condition) { pass++; return; }
    fail.push(name + (detail ? '  ->  ' + detail : ''));
}

// ---------------------------------------------------------------------------
// Load config.js and data.js the way a browser would, in one context.
// `const` at the top level of a script does not land on the context object, so
// the bindings are handed back by a trailing expression.
// ---------------------------------------------------------------------------
const ctx = { window: {}, document: { addEventListener() {} }, console, module: {} };
vm.createContext(ctx);
const CFG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;   // data.js and the pages expect it as a global
const D = vm.runInContext(
    read('js/data.js') +
    '\n;({ENVELOPE_ENERGY_DATA, GFA_DATA, PV_GENERATION_DATA, NEIGHBOURHOODS});',
    ctx
);

// ===========================================================================
// 1. D6.0, the EUI basis, is settled in config and says the right thing
// ===========================================================================
check('1.1 units.eui names the heated and cooled basis',
    /heated and cooled/.test(CFG.units.eui), CFG.units.eui);
check('1.2 units.eui no longer says gross',
    !/gross/i.test(CFG.units.eui), CFG.units.eui);
check('1.3 the compact unit is unchanged',
    CFG.units.euiCompact === 'kWh/m²·yr', CFG.units.euiCompact);
check('1.4 the basis caption exists and is the agreed wording',
    CFG.units.euiBasisCaption === 'per heated and cooled floor area', CFG.units.euiBasisCaption);
check('1.5 floorAreaBasisNote no longer says PENDING',
    !/PENDING/.test(CFG.units.floorAreaBasisNote), CFG.units.floorAreaBasisNote);
check('1.6 the note explains both areas',
    /heated and cooled/.test(CFG.units.floorAreaBasisNote) &&
    /attics and basements/.test(CFG.units.floorAreaBasisNote));
check('1.7 the technical keys keep the EnergyPlus vocabulary',
    CFG.units.intensityFloorAreaBasis === 'net-conditioned' &&
    CFG.units.absoluteFloorAreaBasis === 'gross');
check('1.8 the plain-language labels exist',
    CFG.units.intensityFloorAreaBasisLabel === 'heated and cooled floor area' &&
    typeof CFG.units.absoluteFloorAreaBasisLabel === 'string');
check('1.9 LMN_CONFIG.euiBasis() returns the caption',
    CFG.euiBasis() === CFG.units.euiBasisCaption);

// ===========================================================================
// 2. D3.3, the ladder wording
// ===========================================================================
check('2.1 eemLabelsPending is cleared', CFG.eemLabelsPending === false);
// INVERTED 2026-08-17, session 20. These five strings encoded D3.3 as Koral
// settled it on 2026-08-10, in the absence of an answer from CHV. She answered
// on 2026-08-17, point 4, and named the five rungs herself. The ladder is
// unchanged and still cumulative; only the wording moved, so the check moves
// with it. The old strings are left above in this comment because a check that
// is inverted without saying what it used to believe is a check nobody can
// audit: they were "Baseline as built", "+ Envelope", "+ Envelope, heat pump",
// "+ Envelope, heat pump, hot water" and "+ Envelope, heat pump, hot water,
// lighting, equipment and cooling".
// INVERTED AGAIN 2026-08-24, CHV: "The cumulative logic is correct, but the
// current names are too long for the interface." She shortened her own
// 2026-08-17 wording. The old strings this check asserted, replaced here,
// were "HPerf + Heat Pump", "HPerf + Heat Pump + DHW" and "HPerf + Heat Pump +
// DHW + Lighting/Equipment/Cooling".
const expectedLabels = {
    DEFAULT: 'Baseline',
    EEM1: 'HPerf',
    EEM2: 'HPerf + Space HP',
    EEM3: 'HPerf + Space HP + HPWH',
    EEM4: 'HPerf + Space HP + HPWH + EEM'
};
for (const [k, v] of Object.entries(expectedLabels)) {
    check('2.2 ' + k + ' carries the agreed cumulative label',
        CFG.eemLabel(k) === v, CFG.eemLabel(k));
}
check('2.3 the wrong "deep retrofit" wording is gone from every label',
    !Object.values(CFG.eemLabels).some(v => /deep retrofit/i.test(v)));
// INVERTED 2026-08-24, CHV. EEM4 used to spell out "Lighting/Equipment/
// Cooling" in full because her earlier ladder used no abbreviation for that
// rung. Her shortened ladder replaces the spelled out phrase with the EEM
// abbreviation, defined once in LMN_CONFIG.abbreviations.
check('2.4 EEM4 names the top rung by the EEM abbreviation, per her shortened ladder',
    /\+ EEM$/.test(CFG.eemLabels.EEM4) &&
    !/lighting/i.test(CFG.eemLabels.EEM4) && !/equipment/i.test(CFG.eemLabels.EEM4) &&
    !/cooling/i.test(CFG.eemLabels.EEM4));
check('2.5 the ladder is cumulative: each rung is a prefix of the next',
    CFG.eemLabels.EEM2.startsWith(CFG.eemLabels.EEM1) &&
    CFG.eemLabels.EEM3.startsWith(CFG.eemLabels.EEM2) &&
    CFG.eemLabels.EEM4.startsWith(CFG.eemLabels.EEM3));
for (const k of ['DEFAULT', 'EEM1', 'EEM2', 'EEM3', 'EEM4', 'IAL']) {
    check('2.6 ' + k + ' has a long-form detail',
        typeof CFG.eemDetail(k) === 'string' && CFG.eemDetail(k).length > 30);
}
check('2.7 eemDetail returns empty, not the key, for an unknown rung',
    CFG.eemDetail('EEM9') === '');
check('2.8 eemLabel still falls back to the key for an unknown rung',
    CFG.eemLabel('EEM9') === 'EEM9');

// ===========================================================================
// 3. The pages read the config rather than a literal of their own
// ===========================================================================
const energyJs = read('js/energy.js');
const finishJs = read('js/finish-design.js');
const appJs = read('js/app.js');
const pvJs = read('js/pv.js');

// INVERTED 2026-08-17, session 20. It asserted that the caption under the EUI
// is euiBasis(), "per heated and cooled floor area". CHV, point 3, asked for the
// metric to be named in full and identified as site energy:
// "Annual EUI (kWh/m2 of heated and cooled floor area per year)". Her label
// contains the basis, so nothing is lost; what is added is the name of the
// quantity, which the caption never carried.
check('3.1 the energy scale prints the full metric label, CHV point 3',
    /eui-scale-basis/.test(energyJs)
    && /LMN_CONFIG\.units\.euiLabel/.test(energyJs)
    && /site energy/.test(energyJs));
check('3.2 the summary scale prints the same caption',
    /eui-scale-basis/.test(finishJs) && /LMN_CONFIG\.euiBasis\(\)/.test(finishJs));
check('3.3 the summary EUI field reads the unit from config, not a literal',
    /LMN_CONFIG\.units\.euiCompact/.test(finishJs) &&
    !/toFixed\(1\) \+ ' kWh\/m/.test(finishJs));
check('3.4 the assumptions box uses the one written sentence',
    /LMN_CONFIG\.units\.floorAreaBasisNote/.test(energyJs));
check('3.5 the assumptions box names the ladder rung',
    /eemLabel\(scenarioKey\)/.test(energyJs) && /'Scenario', rung/.test(energyJs));
check('3.6 the rung is assigned where the dataset is chosen, not recomputed',
    (energyJs.match(/scenarioKey = "EEM[234]"/g) || []).length === 3);
check('3.7 a combination outside the ladder is marked as such',
    /scenarioExact = false/.test(energyJs) && /Nearest simulated rung/.test(energyJs));
check('3.8 the Layer 1 area cell no longer calls the area gross',
    /m² total/.test(appJs) && !/m² gross/.test(appJs));
check('3.9 the new CSS class exists',
    /\.eui-scale-basis/.test(read('css/styles.css')));

// ===========================================================================
// 4. DBG-029, corrected in session 12 once the upstream table was located
// ===========================================================================
// Session 11 disclosed this defect and these checks pinned the disclosure in
// place. Session 12 found area_cond for all 35 NUs in the campaign validation
// file, so the checks now pin the fix instead.
check('4.1 the Preliminary tag is gone from the PV total',
    !/MWh\/yr \(Preliminary\)/.test(pvJs));
check('4.2 the reason is on the line, for the next maintainer',
    /DBG-029/.test(pvJs));
check('4.3 the hover explanation is attached to both layouts',
    /totalEl\.title = totalTitle/.test(pvJs));
check('4.4 the total is computed against the conditioned area',
    /pvIntensity \* condArea \/ 1000/.test(pvJs)
    && !/pvIntensity \* gfa \/ 1000/.test(pvJs));

const docs = read('documentation.html');
check('4.5 the documentation states the EUI identity',
    /Total End Uses \(kWh\/yr\) &divide; Net Conditioned Building Area/.test(docs));
check('4.6 the documentation no longer says "gross (conditioned)"',
    !/gross \(conditioned\)/i.test(docs));
check('4.7 the documentation gives the RC-D worked example against 10,560',
    /10,560 = 1,063.4 MWh\/yr/.test(docs));
check('4.8 the documentation discloses DBG-029',
    /DBG-029/.test(docs));
check('4.9 section G tabulates both areas',
    /Net conditioned \(m&sup2;\)/.test(docs) && /Conditioned share/.test(docs));
check('4.10 the modelling bullet no longer says "site gross"',
    !/site gross energy use intensity/.test(docs));

// The measurement the entry rests on, recomputed here rather than quoted.
const AREAS = {
    'RC-D': [21201, 10600], 'RC-ML': [20681, 10341], 'RC-R': [10600, 5300],
    'RC-T': [20162, 10081], 'RC-MR1': [22618, 16336], 'RC-MR2': [25077, 22592],
    'RC-MR3': [37615, 33888], 'RC-HR1': [28211, 25416], 'RC-HR2': [31346, 28240]
};
for (const [nu, [gross]] of Object.entries(AREAS)) {
    check('4.11 GFA_DATA[' + nu + '] equals the upstream gross column',
        D.GFA_DATA[nu] === gross, String(D.GFA_DATA[nu]));
}
const rcd = D.ENVELOPE_ENERGY_DATA['necb-z6']['RC-D']['EEM1'];
const shownMWh = rcd.pv * D.GFA_DATA['RC-D'] / 1000;
const trueMWh = rcd.pv * AREAS['RC-D'][1] / 1000;
check('4.12 the RC-D PV total on screen is about twice the figure on record',
    Math.abs(shownMWh / trueMWh - 2.0) < 0.01,
    shownMWh.toFixed(1) + ' against ' + trueMWh.toFixed(1));
check('4.13 the figure on record, 1,063.4 MWh/yr, is reproduced within 1 %',
    Math.abs(trueMWh - 1063.4) / 1063.4 < 0.01, trueMWh.toFixed(1));
check('4.14 RoP is untouched by the area, because it cancels',
    (rcd.pv / rcd.total).toFixed(3) ===
    ((rcd.pv * 12345) / (rcd.total * 12345)).toFixed(3));

// ===========================================================================
// 5. D3.4, the measurement behind RESULT-08
// ===========================================================================
const pvCodes = Object.keys(D.PV_GENERATION_DATA);
check('5.1 PV_GENERATION_DATA still covers 35 neighbourhoods', pvCodes.length === 35);
for (const field of ['surface', 'efficiency', 'mounting', 'gcr']) {
    const distinct = new Set(pvCodes.map(c => String(D.PV_GENERATION_DATA[c][field])));
    check('5.2 PV field "' + field + '" has one distinct value across all 35',
        distinct.size === 1, [...distinct].join(' | '));
}
check('5.3 RESULT-08 exists and removes nothing',
    /Nothing has been removed/.test(
        read('docs_implementation/documentation-revisions/Results/RESULT-08_Layer2-Field-Inventory-D3.4.md')));

// ===========================================================================
// 6. Nothing from session 10 was broken
// ===========================================================================
let cells = 0, worst = 0;
for (const env of Object.keys(D.ENVELOPE_ENERGY_DATA)) {
    for (const nu of Object.keys(D.ENVELOPE_ENERGY_DATA[env])) {
        for (const sc of Object.keys(D.ENVELOPE_ENERGY_DATA[env][nu])) {
            const cell = D.ENVELOPE_ENERGY_DATA[env][nu][sc];
            if (!cell || !Array.isArray(cell.breakdown)) continue;
            cells++;
            const six = cell.breakdown.reduce((s, i) => s + i.value, 0);
            const other = Math.max(0, cell.total - six);
            worst = Math.max(worst, Math.abs(six + other - cell.total));
        }
    }
}
check('6.1 the stored cell count is unchanged at 2,974', cells === 2974, String(cells));
check('6.2 six plus Other still reconstructs the stored total exactly',
    worst < 1e-9, worst.toExponential(2));
check('6.3 the Zone 7B MU-HC baseline is still absent',
    D.ENVELOPE_ENERGY_DATA['necb-z7b']['MU-HC'].DEFAULT === undefined);
check('6.4 the Montreal aliases still share one object',
    D.ENVELOPE_ENERGY_DATA['necb-2017'] === D.ENVELOPE_ENERGY_DATA['necb-z6']);
// INVERTED 2026-08-24, DBG-036. 18.65 % was never the efficiency the pipeline
// used; it was a retired Tier 1 cell efficiency printed by mistake as the
// tool's own value. The corrected label is 23 %, the Tier 3 panel efficiency
// that actually produced every published result.
check('6.5 the PV efficiency is the corrected panel figure everywhere',
    CFG.pv.moduleEfficiencyLabel.indexOf('23') !== -1
    && CFG.pv.moduleEfficiencyLabel.indexOf('18.65') === -1);
check('6.6 all 35 neighbourhoods still carry a building count',
    D.NEIGHBOURHOODS.filter(n => typeof n.buildingCount === 'number').length === 35);

// ===========================================================================
console.log('');
console.log('  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('');
    fail.forEach(f => console.log('  FAIL  ' + f));
    process.exit(1);
}
console.log('');
console.log('  ALL CHECKS PASSED');
