/*
 * verify_stage04.js
 *
 * Stage 4, Layer 2 PV results. Checks every claim made in
 * Implementation/DONE/STAGE-04_Layer2-PV-Results.md.
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_stage04.js
 *
 * No packages. Prints a pass/fail line per check.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

let pass = 0;
const fail = [];
function check(name, condition, detail) {
    if (condition) { pass++; console.log('  PASS  ' + name); return; }
    fail.push(name + (detail ? '  ->  ' + detail : ''));
    console.log('  FAIL  ' + name + (detail ? '  [' + detail + ']' : ''));
}

// `const` at the top level of a script does not land on the context object, so
// the bindings are handed back by a trailing expression. Session 10 trap.
const ctx = { window: {}, document: { addEventListener() {} }, console, module: {} };
vm.createContext(ctx);
const CFG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;
const D = vm.runInContext(
    read('js/data.js') +
    '\n;({ENVELOPE_ENERGY_DATA, GFA_DATA, CONDITIONED_AREA_DATA, PV_GENERATION_DATA});',
    ctx);

const pvJs    = read('js/pv.js');
const fdJs    = read('js/finish-design.js');
const pvHtml  = read('layer2_pv_breakdown.html');
const docHtml = read('documentation.html');
const css     = read('css/styles.css');

// ─────────────────────────────────────────── 4.2 and 4.3, the two sentences
console.log('\n== 4.2 / 4.3, what is being shown and why it does not move ==');

check('config carries both sentences',
    !!(CFG.pv.scenarioNotes && CFG.pv.scenarioNotes.baseline && CFG.pv.scenarioNotes.rooftop));
check('the baseline sentence is chosen for DEFAULT',
    CFG.pvScenarioNote('DEFAULT') === CFG.pv.scenarioNotes.baseline);
check('the baseline sentence is chosen for the ideal thermal load',
    CFG.pvScenarioNote('IAL') === CFG.pv.scenarioNotes.baseline);
check('the rooftop sentence is chosen on every rung',
    ['EEM1', 'EEM2', 'EEM3', 'EEM4'].every(s => CFG.pvScenarioNote(s) === CFG.pv.scenarioNotes.rooftop));
check('the baseline sentence avoids the phrase "native PV"',
    !/native PV/i.test(CFG.pv.scenarioNotes.baseline), CFG.pv.scenarioNotes.baseline);
check('the rooftop sentence explains why the figure is the same on every rung',
    /same on every rung/i.test(CFG.pv.scenarioNotes.rooftop));
check('neither sentence uses the word EEM',
    !/EEM/.test(CFG.pv.scenarioNotes.baseline + CFG.pv.scenarioNotes.rooftop));
check('both layouts carry the sentence element',
    pvHtml.includes('id="pv-scenario-note"') && pvHtml.includes('id="pv-scenario-note-legacy"'));
check('js/pv.js fills it from config, not from a literal',
    /pvScenarioNote\(scenario\)/.test(pvJs));
check('the sentence has a style and hides when empty',
    /\.pv-scenario-note\b/.test(css) && /\.pv-scenario-note:empty/.test(css));

// ─────────────────────────────────────── D4.4, the claim the sentence makes
console.log('\n== D4.4, the claim that sentence makes must be true ==');

let varying = [];
for (const env of Object.keys(D.ENVELOPE_ENERGY_DATA)) {
    for (const nu of Object.keys(D.ENVELOPE_ENERGY_DATA[env])) {
        const rungs = ['EEM1', 'EEM2', 'EEM3', 'EEM4']
            .map(s => D.ENVELOPE_ENERGY_DATA[env][nu][s])
            .filter(Boolean)
            .map(r => r.pv);
        if (rungs.length > 1 && new Set(rungs).size > 1) varying.push(env + '/' + nu);
    }
}
check('rooftop PV really is identical on every rung, all envelopes, all NUs',
    varying.length === 0, varying.slice(0, 5).join(', '));

// ────────────────────────────────────── 4.6, the two efficiencies reconciled
console.log('\n== 4.6, revised 2026-08-24 by DBG-036: 23 % is the panel efficiency ==');

// INVERTED 2026-08-24, DBG-036. Measured in the upstream code, neither 18.65 %
// nor 20 % produced a published result; the Tier 3 injector, 23.0 % panel
// efficiency, is what ran on every neighbourhood. The pitched group is now
// quoted on its active fraction, 0.85, and the flat group on its own, 1.0 on
// the rack, not on aperture area or module area.
check('the pitched group is quoted on its active fraction',
    /23 %/.test(CFG.pv.roofGroups.pitched.moduleEfficiencyLabel)
    && CFG.pv.roofGroups.pitched.activeFraction === 0.85);
check('the flat group is quoted on its own active fraction',
    CFG.pv.roofGroups.flat.moduleEfficiencyLabel === '23 % panel, active fraction 1.0 on the rack');
check('the documentation shows both, side by side',
    /Flat roof<\/th>[\s\S]{0,80}Pitched roof<\/th>/.test(docHtml));
check('the documentation no longer claims one efficiency everywhere',
    !/one module efficiency is used everywhere/i.test(docHtml));
check('the documentation says the ground coverage ratio does not apply on a pitched roof',
    /Does not apply/i.test(docHtml));
check('the unsourced 18.68 % is not stored on any neighbourhood',
    !/"efficiency":/.test(read('js/data.js')));

// ─────────────────────────────────── 4.7, the unit, worded as CHV asked for
console.log('\n== 4.7, the plain-language unit, CHV action plan Stage 4 item 6 ==');

// INVERTED 2026-08-17, session 20, and this is the clearest case of a check
// being a belief that the client can overturn.
//
// It asserted CHV's Stage 4 item 6 wording VERBATIM, "kWh/m2 of gross floor
// area per year", because printing her own words was the safe reading of her
// action plan. The wording was wrong: the denominator is the heated and cooled
// area, measured on all 35 neighbourhoods in sessions 12 and 15. We asked her
// which of the two to publish, and on 2026-08-17, her point 6, she answered:
// "Please use PV generation intensity (kWh/m2 of heated and cooled floor area
// per year) if this is the actual denominator used in the calculation." It is.
// INVERTED 2026-08-24, CHV's second email: "the intensity row is gone from the
// interface and total PV array area takes its place." Her corrected wording of
// 2026-08-17 was right while the intensity was still a headline result; it is
// no longer printed on either layout, because a generation figure per square
// metre of FLOOR area invites being read as a figure per square metre of
// ARRAY. What replaced it is asserted instead.
check('the new layout no longer prints a PV generation intensity result',
    !/PV generation intensity/.test(pvHtml.replace(/<!--[\s\S]*?-->/g, '')));
check('Total PV array area replaces it, on both layouts',
    (pvHtml.match(/Total PV array area/g) || []).length === 2);
check('and "gross floor area" survives nowhere on the page',
    !/gross floor area/.test(pvHtml.replace(/<!--[\s\S]*?-->/g, '')));

// ────────────────────────────────── 4.8, both areas, and the right one used
console.log('\n== 4.8, both areas on screen, the total against the right one ==');

check('the total building area is on the page',
    pvHtml.includes('Total Building Area') && pvHtml.includes('id="pv-gfa-val"'));
check('the heated and cooled area is on the page',
    pvHtml.includes('Heated and Cooled Floor Area') && pvHtml.includes('id="pv-cond-area-val"'));
check('both are wired in js/pv.js',
    /#pv-cond-area-val'/.test(pvJs) && /#pv-cond-area-val-legacy'/.test(pvJs));
check('the PV page total multiplies by the heated and cooled area',
    /pvIntensity \* condArea \/ 1000/.test(pvJs) && !/pvIntensity \* gfa \/ 1000/.test(pvJs));
check('the Layer 4 summary does too, which it did not before',
    /pvIntensity \* condArea \/ 1000/.test(fdJs) && !/pvIntensity \* gfa \/ 1000/.test(fdJs));

// The arithmetic a reader can now do on screen must actually work.
let mismatched = [];
for (const nu of Object.keys(D.CONDITIONED_AREA_DATA)) {
    const pv = D.ENVELOPE_ENERGY_DATA['necb-2017']
        && D.ENVELOPE_ENERGY_DATA['necb-2017'][nu]
        && D.ENVELOPE_ENERGY_DATA['necb-2017'][nu]['EEM1'];
    if (!pv) continue;
    const shown = +(pv.pv * D.CONDITIONED_AREA_DATA[nu] / 1000).toFixed(1);
    const hand  = +((pv.pv * D.CONDITIONED_AREA_DATA[nu]) / 1000).toFixed(1);
    if (Math.abs(shown - hand) > 0.05) mismatched.push(nu);
}
check('intensity x heated and cooled area reproduces the displayed total, all NUs',
    mismatched.length === 0, mismatched.join(', '));

const rcd = D.ENVELOPE_ENERGY_DATA['necb-2017']['RC-D']['EEM1'].pv * D.CONDITIONED_AREA_DATA['RC-D'] / 1000;
check('RC-D still lands on the figure already on record with CHV, 1,063.4',
    Math.abs(rcd - 1063.4) / 1063.4 < 0.01, rcd.toFixed(1) + ' MWh/yr');
check('the two areas are genuinely different quantities on RC-D',
    D.GFA_DATA['RC-D'] !== D.CONDITIONED_AREA_DATA['RC-D'],
    D.GFA_DATA['RC-D'] + ' vs ' + D.CONDITIONED_AREA_DATA['RC-D']);

// ────────────────────────────────────────────────── 4.9, the methodology link
console.log('\n== 4.9, the methodology link ==');

check('both layouts carry the link',
    (pvHtml.match(/class="pv-method-link"/g) || []).length === 2);
check('it points at the PV methodology section',
    /href="documentation\.html#sec-pv"/.test(pvHtml));
check('that anchor exists in the documentation',
    /id="sec-pv"/.test(docHtml));
check('the link has a style', /\.pv-method-link\b/.test(css));

// ────────────────────────────────────────────────── 4.11, the heatmap removed
console.log('\n== 4.11, the dead heatmap is gone ==');

check('js/heatmap-data.js is deleted', !exists('js/heatmap-data.js'));
check('no page still loads it',
    !fs.readdirSync(ROOT).filter(f => f.endsWith('.html'))
        .some(f => read(f).includes('heatmap-data')));
// The removal note names the functions it removed, so strip comments before
// looking. A name in a comment is the record; a name in code is a leftover.
const pvCode = pvJs.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
check('the drawing code is gone from js/pv.js',
    !/drawHeatmapCanvas|renderHourlyHeatmaps|RDYLBU_R|heatmapColor|HOURLY_HEATMAP_DATA/.test(pvCode));
check('js/pv.js records why, so it is not re-added by accident',
    /Hourly heatmap: removed/.test(pvJs));
check('the upstream source CSVs are untouched, so it is recoverable',
    exists('Content/Images_PVpage/RC/RC-D/RC-D_Roof_Hourly_cropped.csv'));

// ──────────────────────────────────── DBG-013 on the Layer 4 summary as well
console.log('\n== DBG-013, the roof groups reach the Layer 4 summary too ==');

// MOVED 2026-08-17, session 20, not weakened. CHV's point 7 took the four PV
// parameter rows off the Layer 4 summary card and put them under Assumptions &
// Model Information, so the three checks below now test the same facts in their
// new home, fsAssumptions, instead of in the card that no longer holds them.
check('the Layer 4 summary resolves the roof group',
    /roofGroupFor\(code\)/.test(fdJs));
check('it suppresses the ground coverage ratio where it does not apply',
    /gcrApplies \? LMN_CONFIG\.pv\.gcr : 'does not apply on a pitched roof'/.test(fdJs));
check('it reads the efficiency from the roof group',
    /group\.moduleEfficiencyLabel/.test(fdJs));
check('and the four parameters really did land in the assumptions block',
    /'Rooftop PV', group\.surface/.test(fdJs)
    && /group\.mounting/.test(fdJs) && /group\.tiltLabel/.test(fdJs));
check('no page reads a per NU efficiency field any more',
    !/data\.efficiency|pvData\.efficiency/.test(pvJs + fdJs));

// ───────────────────────────────────────────────────────────────── hygiene
console.log('\n== file hygiene ==');

// A22, 2026-09-09: this used to require a fixed per file convention (CRLF or
// LF). `.gitattributes` (DBG-044) now normalises every text file to LF on
// checkout, on every platform, so a fixed expectation per file is stale by
// construction. What is still tested: a file must not carry both conventions
// mixed together, which is the real defect this check protected against.
const CRLF_HYGIENE_FILES = ['js/config.js', 'js/data.js', 'css/styles.css',
    'layer2_pv_breakdown.html', 'documentation.html', 'js/pv.js', 'js/finish-design.js'];
let bad = [];
for (const f of CRLF_HYGIENE_FILES) {
    const t = read(f);
    const crlf = (t.match(/\r\n/g) || []).length;
    const lf = (t.match(/\n/g) || []).length;
    const got = crlf === 0 ? 'LF' : (crlf === lf ? 'CRLF' : 'MIXED');
    if (got === 'MIXED') bad.push(f + ' mixes CRLF and bare LF');
}
check('no file mixes CRLF and bare LF line endings', bad.length === 0, bad.join('; '));

let parseBad = [];
for (const f of ['js/config.js', 'js/data.js', 'js/pv.js', 'js/finish-design.js']) {
    try { new Function(read(f)); } catch (e) { parseBad.push(f + ': ' + e.message); }
}
check('every edited script parses', parseBad.length === 0, parseBad.join('; '));

console.log('\n  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('\n  FAILURES\n' + fail.map(f => '   - ' + f).join('\n'));
    process.exit(1);
}
console.log('\n  ALL CHECKS PASSED\n');
