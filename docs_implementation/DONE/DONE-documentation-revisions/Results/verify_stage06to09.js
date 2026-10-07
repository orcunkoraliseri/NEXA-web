/*
 * verify_stage06to09.js
 *
 * Stages 6, 7, 8 and 9, built in session 15 on 2026-08-12. Checks every claim
 * made in the section 8 of the four stage files.
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_stage06to09.js
 *
 * No packages.
 *
 * Two things in here are deliberate.
 *
 * 1. It does not only read source. The last block builds a small stub DOM and
 *    actually runs the Layer 4 summary logic against the real data, because a
 *    page that throws on load passes every regex check ever written.
 * 2. Where a number is asserted, it is asserted against LMN_CONFIG.lpvChain()
 *    or against arithmetic on js/data.js, never against a literal copied out of
 *    the stage file. A check that repeats the claim proves nothing.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

// Several checks below ask whether a defect is still IN the code. The fixes
// name the defect in a comment, on purpose, so a plain search finds the
// comment and reports the defect as present. Code is therefore stripped of its
// comments before those checks run. A check that cannot tell an explanation
// from the thing it explains is worse than no check.
function codeOnly(src) {
    return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
}

let pass = 0;
const fail = [];
function check(name, condition, detail) {
    if (condition) { pass++; console.log('  PASS  ' + name); return; }
    fail.push(name + (detail ? '  ->  ' + detail : ''));
    console.log('  FAIL  ' + name + (detail ? '  [' + detail + ']' : ''));
}

// ── load the two data layers the way a page does ─────────────────────────
const ctx = { window: {}, document: { addEventListener() {} }, console, module: {} };
vm.createContext(ctx);
const CFG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;
vm.runInContext(read('js/data.js'), ctx);
const EV = vm.runInContext('EV_V2G_DATA;', ctx);
const COND = vm.runInContext('CONDITIONED_AREA_DATA;', ctx);
const LPV = vm.runInContext('LPV_DATA;', ctx);
const ENV = vm.runInContext('ENVELOPE_ENERGY_DATA;', ctx);

const dataJs = read('js/data.js');
const configJs = read('js/config.js');
const mobilityJs = read('js/mobility-selection.js');
const evJs = read('js/ev-v2g-breakdown.js');
const lpvJs = read('js/lpv.js');
const finishJs = read('js/finish-design.js');
const css = read('css/styles.css');
const mobilityHtml = read('layer3_mobility_selection.html');
const evHtml = read('layer3_ev_v2g_mobility_output.html');
const greenHtml = read('layer4_green_selection.html');
const lpvHtml = read('layer4_lpv_breakdown.html');
const finishHtml = read('layer4_finish_design.html');
const docs = read('documentation.html');

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== STAGE 6, D6.10 and DBG-032, the floor area the intensity is on ==');

const nus = Object.keys(EV);
check('EV_V2G_DATA still covers 35 neighbourhoods', nus.length === 35, String(nus.length));

let areaWrong = 0, intWrong = 0, blocks = 0;
nus.forEach(nu => {
    ['EV1', 'EV2'].forEach(s => {
        const d = EV[nu][s];
        if (!d) return;
        blocks++;
        if (d.totalFloorArea !== COND[nu]) areaWrong++;
        const expected = Math.round((d.netEnergyBalance_kWh / COND[nu]) * 100) / 100;
        if (d.netEnergyBalance_kWh_m2 !== expected) intWrong++;
    });
});
check('70 scenario blocks are present', blocks === 70, String(blocks));
check('every EV floor area is the heated and cooled area, D6.0',
    areaWrong === 0, String(areaWrong) + ' wrong');
check('every intensity equals net demand / heated and cooled area',
    intWrong === 0, String(intWrong) + ' wrong');

// The defect, stated as its own check: the old table must not come back. The
// pre-correction value for RC-R was 7949 and for RC-HR2 9404, and neither is a
// conditioned area, so their reappearance means the copy was restored.
check('the superseded floor area table is gone from the EV block',
    EV['RC-R'].EV1.totalFloorArea !== 7949 && EV['RC-HR2'].EV1.totalFloorArea !== 9404,
    String(EV['RC-R'].EV1.totalFloorArea) + ' / ' + String(EV['RC-HR2'].EV1.totalFloorArea));
check('RC-HR2 intensity fell by about a factor of three',
    EV['RC-HR2'].EV1.netEnergyBalance_kWh_m2 < 0.7,
    String(EV['RC-HR2'].EV1.netEnergyBalance_kWh_m2));
check('no kWh/day total was touched by the correction',
    EV['RC-R'].EV2.netEnergyBalance_kWh === 450 && EV['RC-R'].EV1.netEnergyBalance_kWh === 630);

console.log('\n== STAGE 6, D6.7, CHV items 4, 5 and 6, names and units ==');

check('the invalid unit "10 kW / day" is stored nowhere in js/data.js',
    !/dischargeCapacity: "10 kW \/ day"/.test(dataJs));
check('the discharge value is stored as a bare number', EV['RC-R'].EV2.dischargeCapacity === '10');
check('the ownership rate is stored as a bare number', EV['RC-R'].EV1.evPenetrationRate === '1.5');
check('the charging demand is stored as a bare number', EV['RC-R'].EV1.dailyEnergyDemand === '15');

const evCfg = CFG.ev;
check('config names the V2G export per EV in kWh per EV per day',
    /kWh\/\(EV/.test(evCfg.dailyV2gExportPerEvUnit), evCfg.dailyV2gExportPerEvUnit);
check('config names the aggregate V2G energy, not a power',
    /energy/i.test(evCfg.dailyV2gEnergyLabel) && !/power/i.test(evCfg.dailyV2gEnergyLabel),
    evCfg.dailyV2gEnergyLabel);
check('config names an ownership rate, not a penetration rate',
    /ownership/i.test(evCfg.ownershipRateLabel) && !/penetration/i.test(evCfg.ownershipRateLabel));
check('the results page carries no label of its own for the renamed fields',
    evHtml.indexOf('>EV Penetration Rate<') === -1
    && evHtml.indexOf('>V2G Power Available<') === -1
    && evHtml.indexOf('>Discharge Capacity<') === -1
    && evHtml.indexOf('>Battery Efficiency<') === -1);
check('the summary page renamed the same four fields',
    finishHtml.indexOf('>EV Penetration Rate<') === -1
    && finishHtml.indexOf('>V2G Power Available<') === -1);
check('the page writes every renamed label from config',
    /lbl-ev-ownership/.test(evJs) && /lbl-v2g-energy/.test(evJs)
    && /lbl-v2g-export-per-ev/.test(evJs) && /lbl-discharge-eff/.test(evJs));

console.log('\n== STAGE 6, D6.8, CHV item 7, two balances with two names ==');

check('the two balance labels are different in config',
    evCfg.netGridDemandTotalLabel !== evCfg.netGridDemandIntensityLabel);
check('no two boxes on the page are both called Net Energy Balance',
    (evHtml.match(/>Net Energy Balance</g) || []).length === 0);
check('the intensity unit names a square metre and a day',
    /m2|m²/.test(evCfg.netGridDemandIntensityUnit) && /day|d\)/.test(evCfg.netGridDemandIntensityUnit),
    evCfg.netGridDemandIntensityUnit);
check('the summary page distinguishes the two as well',
    /intensity/i.test(finishJs.slice(finishJs.indexOf('const netBalance'), finishJs.indexOf('const netBalance') + 400)));

console.log('\n== STAGE 6, D6.11, CHV item 8, the sign convention ==');

check('config states the direction in words', /positive/i.test(evCfg.signSentence));
check('the convention is the delivered energy one, positive means deficit',
    evCfg.positiveMeans === 'deficit');
check('the page prints the sentence', /ev-sign-note/.test(evJs) && /ev-sign-note/.test(evHtml));
check('the three states are worded once and read through an accessor',
    typeof CFG.evStatusLabel === 'function'
    && CFG.evStatusLabel('Grid Stressed - Deficit') === evCfg.statusStates.deficit);
check('the stored status string is still the image file name, untouched',
    EV['RC-R'].EV1.systemStatusIndicator === 'Grid Stressed - Deficit');

console.log('\n== STAGE 6, CHV items 1, 2 and 3, no invalid scenario ==');

check('the V2G card ships disabled',
    /data-value="v2g_stations"[\s\S]{0,200}disabled/.test(mobilityHtml));
check('the V2G card ships with a visible reason',
    /Requires EV/.test(mobilityHtml));
check('the greying style is applied so the reason stays readable',
    /data-value="v2g_stations"[\s\S]{0,200}is-unavailable/.test(mobilityHtml)
    || /is-unavailable[\s\S]{0,200}data-value="v2g_stations"/.test(mobilityHtml));
check('selecting and deselecting EV drives the V2G card',
    /function syncV2gAvailability/.test(mobilityJs) && /syncV2gAvailability\(\);/.test(mobilityJs));
check('a disabled card cannot be toggled by a click',
    /if \(card\.disabled\) return;/.test(mobilityJs));
check('Continue ships disabled', /id="view-mobility-btn"[^>]*disabled/.test(mobilityHtml));
check('Continue shows the reason it is disabled', /mobility-submit-reason/.test(mobilityHtml));
check('the previously discarded evSelected is now the rule',
    /function selectionIsValid/.test(mobilityJs)
    && /transportation\.includes\('ev'\)/.test(mobilityJs));
check('a second gate survives the inspector',
    /if \(!selectionIsValid\(\)\) \{/.test(mobilityJs));

check('no scenario resolves to null rather than to EV1',
    /if \(!stored\) return null;/.test(evJs) && !/if \(!stored\) return 'EV1'/.test(evJs));
check('V2G alone is not a scenario',
    /if \(!transport\.includes\('ev'\)\) return null;/.test(evJs));
check('the empty state exists and ships hidden',
    /id="ev-empty-state"[^>]*hidden/.test(evHtml));
check('the empty state hides the table rather than sitting above it',
    /table\.hidden = true/.test(evJs));
check('the empty state has its own [hidden] rule, or it ships as an empty box',
    /\.empty-state\[hidden\]/.test(css));
check('the summary page also refuses to invent an EV scenario',
    /!transportSel\.includes\('ev'\)/.test(finishJs) && /'Not selected'/.test(finishJs));

console.log('\n== STAGE 6, CHV item 9, Preliminary ==');

check('Preliminary is one of the four status terms CHV fixed',
    CFG.statusTerms.indexOf('Preliminary') !== -1);
check('the mobility selection page carries the badge',
    /class="status-badge">Preliminary</.test(mobilityHtml));
check('the mobility results page carries the badge',
    /class="status-badge">Preliminary</.test(evHtml));
check('the badge has a style and a [hidden] rule of its own',
    /\.status-badge\s*\{/.test(css) && /\.status-badge\[hidden\]/.test(css));
check('the page says what Preliminary means here',
    /preliminaryNote/.test(evJs) && /calculation chain/i.test(evCfg.preliminaryNote));
check('the unapplied discharge efficiency is disclosed rather than implied',
    /not applied/i.test(evCfg.dischargeEfficiencyNote) && /ev-discharge-eff-note/.test(evJs));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== STAGE 7, D7.1 and DBG-014, the landscape PV chain ==');

const chain = CFG.lpvChain();
check('the chain is computed, not stored', typeof CFG.lpvChain === 'function');
check('5 acres is 20,234 m2', chain.siteAreaM2 === 20234);
check('the two fractions are applied in series, not in parallel',
    chain.usableM2 === Math.round(chain.allocatedM2 * 0.10 * 10) / 10,
    String(chain.usableM2));
check('the usable area is 404.7 m2, not the 2,023 m2 published before',
    chain.usableM2 === 404.7, String(chain.usableM2));
check('the installed capacity is 80.9 kWp, not 475', chain.installedKWp === 80.9,
    String(chain.installedKWp));
check('the generation is 103.6 MWh/yr, not 608', chain.generationMWhYr === 103.6,
    String(chain.generationMWhYr));

function lpvRow(label) { return LPV.rows.filter(r => r.label === label)[0]; }
const rowChecks = [
    ['Land / site area', '5 acres (20,234 m²)'],
    ['Usable Area', '10% of the allocated land (' + chain.usableM2 + ' m²)'],
    ['Installed Capacity (kWp)', chain.installedKWp + ' kWp'],
    ['Energy Generation', chain.generationMWhYr + ' MWh/yr']
];
rowChecks.forEach(([label, expected]) => {
    const row = lpvRow(label);
    const wrong = row ? Object.keys(row.values).filter(k => row.values[k] !== expected) : ['row missing'];
    check('LPV row "' + label + '" agrees with the chain on all 35',
        row && wrong.length === 0, wrong.slice(0, 3).join(', '));
});
check('the site area row was added, so the chain starts somewhere',
    !!lpvRow('Land / site area'));
check('no row still publishes 608 MWh/year',
    dataJs.indexOf('608 MWh/year') === -1);
check('no row still publishes 475 kWp', dataJs.indexOf('475 kWp') === -1);
check('the unit is MWh/yr, CHV item 4 wording',
    /MWh\/yr/.test(lpvRow('Energy Generation').values['RC-R']));

check('both pages read the LPV rows by label, not by position',
    /lpvRowByLabel/.test(lpvJs) && /lpvByLabel/.test(finishJs));
check('neither page reads configs[0] any more',
    !/configs\[0\]/.test(codeOnly(lpvJs)) && !/lpvConfigs\[0\]/.test(codeOnly(finishJs)));

console.log('\n== STAGE 7, DBG-033, the fabricated 65.2 ==');

check('the LPV page no longer calls the scale with a literal',
    !/renderLPVScale\(65\.2\)/.test(codeOnly(lpvJs)));
check('the summary page no longer calls it either',
    !/renderLPVScale\(65\.2\)/.test(codeOnly(finishJs)));
check('65.2 is executed in neither file',
    codeOnly(lpvJs).indexOf('65.2') === -1 && codeOnly(finishJs).indexOf('65.2') === -1);

console.log('\n== STAGE 7, CHV items 2, 3, 6 and 7, the two groups ==');

function buttons(html) { return html.match(/<button[\s\S]*?<\/button>/g) || []; }
// The submit button is a <button> too, and it is not an option.
const greenButtons = buttons(greenHtml).filter(b => /data-value=/.test(b));
const greenEnabled = greenButtons.filter(b => !/\sdisabled(\s|>)/.test(b));
check('exactly one Layer 4 option is selectable', greenEnabled.length === 1,
    String(greenEnabled.length));
check('and it is Landscape PV', /data-value="pv_vgs"/.test(greenEnabled[0] || ''));
check('the other seven are greyed', greenButtons.length - greenEnabled.length === 7,
    String(greenButtons.length - greenEnabled.length));
check('the page has a Future capabilities heading', /Future capabilities/.test(greenHtml));
check('the page has a heading for the option that produces a number',
    /Available now/.test(greenHtml));
check('the heading explains why the future group cannot be selected',
    /no quantitative method/i.test(greenHtml));
check('the group heading has a style', /\.group-heading\s*\{/.test(css));
check('Landscape PV is labelled Preliminary on its card',
    /data-value="pv_vgs"[\s\S]{0,400}Preliminary/.test(greenHtml));
check('and on its results page', /class="status-badge">Preliminary</.test(lpvHtml));
check('the uniform allocation is explained on the page',
    /lpv-uniformity-note/.test(lpvHtml) && /lpv-uniformity-note/.test(lpvJs));
check('the specific yield is on screen, so the last step can be closed',
    /cfg-specific-yield/.test(lpvHtml) && /specificYieldKWhPerKWpYr/.test(lpvJs));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== STAGE 8, CHV items 1 to 10 ==');

check('item 1, the scenario block exists', /id="scenario-block"/.test(finishHtml));
check('item 2, the comparison table exists', /id="fs-comparison"/.test(finishHtml));
// INVERTED 2026-08-24, CHV: "I also do not want the 2017 baseline to appear
// automatically as the reference case ... For V1, please remove the automatic
// baseline comparison ... The reference/comparison case should be clearly
// selected or defined rather than assumed." The Baseline column, always drawn,
// is replaced by a Reference case column that ships hidden, together with the
// Change column, until a reference case is chosen through
// LMN_CONFIG.referenceChooserHtml. Selected pathway is unaffected: it is the
// one thing the page always has, chosen or not.
check('item 3, it has reference and change columns, both hidden until a reference is chosen',
    /<th id="fs-th-reference" hidden>Reference case<\/th>/.test(finishHtml)
    && /<th>Selected pathway<\/th>/.test(finishHtml)
    && /<th id="fs-th-change" hidden>Change<\/th>/.test(finishHtml));
check('item 4, every row carries a status column', /<th>Status<\/th>/.test(finishHtml));
check('item 4, a metric that was not selected says so instead of showing a zero',
    /Not selected/.test(finishJs));
check('item 6, the meaning sentence is built from computed numbers only',
    /function fsMeaning/.test(finishJs) && /cmp\.metrics/.test(finishJs));
check('item 7, the constraint line ships hidden', /id="fs-constraint"[^>]*hidden/.test(finishHtml));
check('item 7, the constraint has a rule and returns null when it does not fire',
    /function fsConstraint/.test(finishJs) && /ropValue >= 1/.test(finishJs));
check('item 8, the assumptions box exists', /id="fs-assumptions"/.test(finishHtml));
check('item 9, print and export both exist',
    /id="fs-print-btn"/.test(finishHtml) && /id="fs-export-btn"/.test(finishHtml));
check('item 9, the buttons do not print themselves', /no-print/.test(finishHtml)
    && /@media print/.test(css));
// INVERTED 2026-08-24. The export used to carry an automatic baselineDefinition;
// it now carries whatever reference case the reader chose, or explicitly names
// that none was chosen, through LMN_CONFIG.referenceCase.
check('item 9, the export carries the assumptions, the status terms and the reference case',
    /assumptions:/.test(finishJs) && /statusTerms/.test(finishJs) && /referenceCase: ctx\.reference/.test(finishJs));
check('item 10, nothing anywhere calls a result the best option',
    ['index.html', 'layer1_NUs_selection.html', 'layer1_output.html', 'layer2_energy_selection.html',
     'layer2_energy_breakdown.html', 'layer2_pv_breakdown.html', 'layer3_mobility_selection.html',
     'layer3_ev_v2g_mobility_output.html', 'layer4_green_selection.html', 'layer4_lpv_breakdown.html',
     'layer4_output_selection.html', 'layer4_finish_design.html', 'documentation.html']
        .every(f => !/best option/i.test(read(f))));

// ── the part that a regex cannot do: run it ──────────────────────────────
console.log('\n== STAGE 8, the summary page actually runs ==');

function stubEl() {
    return {
        textContent: '', innerHTML: '', hidden: false, href: '', src: '', title: '',
        style: {}, classList: { add() {}, remove() {}, contains() { return false; } },
        addEventListener() {}, removeAttribute() {}, getAttribute() { return null; },
        // querySelectorAll ADDED 2026-08-24. js/finish-design.js now wires the
        // reference case chooser, LMN_CONFIG.referenceCase, by calling
        // host.querySelectorAll(...) on an element reached through
        // getElementById. A real element always has this method; the stub did
        // not, so the page threw "host.querySelectorAll is not a function" the
        // moment that new code ran, which is a gap in the stub, not in the page.
        setAttribute() {}, querySelector() { return null; }, querySelectorAll() { return []; },
        complete: true, naturalWidth: 1
    };
}
// ADDED 2026-08-24. js/finish-design.js now reads window.sessionStorage (not
// only the bare sessionStorage every other page read) to resolve the chosen
// reference case, LMN_CONFIG.selectedReferenceKey at line 915 and the
// chooser's own wiring at line 345. In a real browser window.sessionStorage
// and sessionStorage are the same object; a stub whose window carries no such
// property makes the reference case read as permanently unset even when a
// test sets one, which is a gap in the stub, not in the page.
function makeSessionStorage(store) {
    return {
        getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
        setItem(k, v) { store[k] = v; }
    };
}

const els = {};
const store = {};
const sessionStorageA = makeSessionStorage(store);
const pageCtx = {
    console,
    URLSearchParams,
    Blob: function () {}, URL: { createObjectURL() { return ''; }, revokeObjectURL() {} },
    Date,
    window: { location: { search: '?neighbourhood=RC-R&envelope=necb-z6' }, print() {}, sessionStorage: sessionStorageA },
    sessionStorage: sessionStorageA,
    document: {
        addEventListener() {},
        getElementById(id) { if (!els[id]) els[id] = stubEl(); return els[id]; },
        querySelectorAll() { return []; },
        querySelector() { return null; },
        createElement() { return stubEl(); },
        body: { appendChild() {}, removeChild() {} }
    },
    alert(msg) { throw new Error('alert fired: ' + msg); }
};
vm.createContext(pageCtx);
pageCtx.LMN_CONFIG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', pageCtx);
vm.runInContext(read('js/data.js'), pageCtx);
store.energySelections = JSON.stringify({ load: [], demand: ['cop3.5', 'dhw'], generation: ['pv_roof'] });
store.mobilitySelections = JSON.stringify({ transportation: ['ev', 'v2g_stations'], mobility: [] });
store.greenSelections = JSON.stringify({ infrastructure: [], urban_agriculture: [], energy_integrated: ['pv_vgs'] });

let ran = true, runError = '';
try {
    vm.runInContext(read('js/finish-design.js'), pageCtx);
    vm.runInContext('initSummaryPage();', pageCtx);
} catch (e) {
    ran = false; runError = e.message;
}
check('initSummaryPage runs to the end without throwing', ran, runError);

if (ran) {
    const body = els['fs-comparison-body'] ? els['fs-comparison-body'].innerHTML : '';
    check('the comparison table was filled', body.length > 0);
    check('it holds four metric rows', (body.match(/<tr>/g) || []).length === 4,
        String((body.match(/<tr>/g) || []).length));

    const selEui = ENV['necb-z6']['RC-R']['EEM3'].total;
    const baseEui = ENV['necb-z6']['RC-R']['DEFAULT'].total;
    check('the selected EUI on screen is the one in js/data.js',
        body.indexOf(selEui.toFixed(1)) !== -1, String(selEui));
    // INVERTED 2026-08-24, CHV: "I also do not want the 2017 baseline to
    // appear automatically as the reference case ... For V1, please remove
    // the automatic baseline comparison." No reference case is chosen in this
    // run, so the reference and change columns are not drawn at all, and the
    // DEFAULT rung's EUI is simply absent from the table. The old behaviour,
    // an automatic baseline, is tested separately below with a reference case
    // actually chosen.
    check('no reference case is chosen, so no baseline EUI is drawn',
        body.indexOf(baseEui.toFixed(1)) === -1);
    check('the reference and change header cells ship hidden',
        els['fs-th-reference'].hidden === true && els['fs-th-change'].hidden === true);
    check('each of the four rows carries three cells, not five, with none chosen',
        (body.match(/<td/g) || []).length === 12, String((body.match(/<td/g) || []).length));

    const pvTotal = ENV['necb-z6']['RC-R']['EEM3'].pv * COND['RC-R'] / 1000;
    check('rooftop PV is the intensity times the heated and cooled area, DBG-029',
        body.indexOf(pvTotal.toFixed(1)) !== -1, pvTotal.toFixed(1));
    check('landscape PV on the summary is the corrected 103.6',
        body.indexOf('103.6') !== -1);
    check('the EV row shows the stored net grid demand',
        body.indexOf(String(EV['RC-R'].EV2.netEnergyBalance_kWh)) !== -1);
    // INVERTED 2026-08-24. With no reference case chosen, EV and landscape PV
    // carry no baseline cell at all, true or otherwise: the column itself does
    // not exist. A true zero baseline is tested below, with a reference chosen.
    check('with no reference chosen, EV and landscape PV carry no baseline cell',
        (body.match(/>0</g) || []).length === 0);

    const meaning = els['fs-meaning'] ? els['fs-meaning'].textContent : '';
    check('the meaning sentence was written', meaning.length > 20, meaning.slice(0, 40));
    // INVERTED 2026-08-24. With nothing chosen the meaning sentence quotes only
    // the selected intensity and says plainly that nothing is compared,
    // LMN_CONFIG.referenceCase.noneNote, rather than quoting a baseline nobody
    // picked.
    check('it quotes the selected intensity and says nothing is compared',
        meaning.indexOf(selEui.toFixed(1)) !== -1
        && meaning.indexOf(baseEui.toFixed(1)) === -1
        && /No reference case is selected/.test(meaning));

    const rop = ENV['necb-z6']['RC-R']['EEM3'].pv / ENV['necb-z6']['RC-R']['EEM3'].total;
    const constraintShown = els['fs-constraint'] && els['fs-constraint'].hidden === false;
    check('the constraint line fires only when the roof cannot close the gap',
        (rop < 1) === !!constraintShown, 'RoP ' + rop.toFixed(3) + ', shown ' + constraintShown);

    const assumptions = els['fs-assumptions'] ? els['fs-assumptions'].innerHTML : '';
    check('the assumptions box was filled', assumptions.length > 0);
    check('it names the floor area basis', /heated and cooled/i.test(assumptions));
    check('it names the landscape PV chain', assumptions.indexOf('103.6') !== -1);
    check('it names the four status terms', CFG.statusTerms.every(t => assumptions.indexOf(t) !== -1));
    check('it names the roof group of this neighbourhood',
        assumptions.indexOf(CFG.roofGroupFor('RC-R').surface) !== -1);

    check('the scenario block names the neighbourhood and the climate',
        els['fs-nu'].textContent.indexOf('RC-R') !== -1
        && els['fs-climate'].textContent === CFG.envelopeLabel('necb-z6'));
    check('the LPV site area row reached the summary card',
        els['l4-site-area'].textContent.indexOf('20,234') !== -1,
        els['l4-site-area'].textContent);
    check('the summary EV block prints both balances with their names',
        /intensity/.test(els['l3-net-balance'].textContent), els['l3-net-balance'].textContent);
}

// ADDED 2026-08-24. The old automatic-baseline behaviour, a true zero for EV
// and landscape PV, a baseline EUI, a change column and a meaning sentence
// quoting both intensities, still exists: it is what the page draws once a
// reference case is chosen, LMN_CONFIG.referenceCase. This is the same
// neighbourhood and the same selections as the block above, with
// sessionStorage.referenceCase set to "necb2017", the NECB 2017 code minimum
// option, before the page runs.
console.log('\n== STAGE 8, the same page with a reference case chosen ==');
const elsRef = {};
const storeRef = {};
const sessionStorageRef = makeSessionStorage(storeRef);
const refCtx = {
    console, URLSearchParams,
    Blob: function () {}, URL: { createObjectURL() { return ''; }, revokeObjectURL() {} },
    Date,
    window: { location: { search: '?neighbourhood=RC-R&envelope=necb-z6' }, print() {}, sessionStorage: sessionStorageRef },
    sessionStorage: sessionStorageRef,
    document: {
        addEventListener() {},
        getElementById(id) { if (!elsRef[id]) elsRef[id] = stubEl(); return elsRef[id]; },
        querySelectorAll() { return []; },
        querySelector() { return null; },
        createElement() { return stubEl(); },
        body: { appendChild() {}, removeChild() {} }
    },
    alert(msg) { throw new Error('alert fired: ' + msg); }
};
vm.createContext(refCtx);
refCtx.LMN_CONFIG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', refCtx);
vm.runInContext(read('js/data.js'), refCtx);
storeRef.energySelections = JSON.stringify({ load: [], demand: ['cop3.5', 'dhw'], generation: ['pv_roof'] });
storeRef.mobilitySelections = JSON.stringify({ transportation: ['ev', 'v2g_stations'], mobility: [] });
storeRef.greenSelections = JSON.stringify({ infrastructure: [], urban_agriculture: [], energy_integrated: ['pv_vgs'] });
storeRef.referenceCase = 'necb2017';

let ranRef = true, runRefError = '';
try {
    vm.runInContext(read('js/finish-design.js'), refCtx);
    vm.runInContext('initSummaryPage();', refCtx);
} catch (e) { ranRef = false; runRefError = e.message; }
check('the page runs with a reference case chosen', ranRef, runRefError);

if (ranRef) {
    const bodyRef = elsRef['fs-comparison-body'] ? elsRef['fs-comparison-body'].innerHTML : '';
    const selEuiR = ENV['necb-z6']['RC-R']['EEM3'].total;
    const baseEuiR = ENV['necb-z6']['RC-R']['DEFAULT'].total;
    check('the reference and change header cells un-hide',
        elsRef['fs-th-reference'].hidden === false && elsRef['fs-th-change'].hidden === false);
    check('the baseline EUI reappears, the DEFAULT rung of the chosen reference',
        bodyRef.indexOf(baseEuiR.toFixed(1)) !== -1, String(baseEuiR));
    check('EV and landscape PV now carry a true zero baseline, not a blank',
        (bodyRef.match(/>0</g) || []).length >= 2);
    const meaningRef = elsRef['fs-meaning'] ? elsRef['fs-meaning'].textContent : '';
    check('the meaning sentence quotes both intensities against the chosen reference',
        meaningRef.indexOf(baseEuiR.toFixed(1)) !== -1 && meaningRef.indexOf(selEuiR.toFixed(1)) !== -1
        && /NECB 2017 code minimum/.test(meaningRef));
    check('the baseline note names the chosen reference case',
        /Reference case: NECB 2017 code minimum/.test(elsRef['fs-baseline-note'].textContent));
}

// the same page, with nothing selected: it must not invent a scenario
console.log('\n== STAGE 8, with nothing selected ==');
const els2 = {};
const store2 = {};
const sessionStorage2 = makeSessionStorage(store2);
const emptyCtx = Object.assign({}, pageCtx, {
    // window OVERRIDDEN 2026-08-24, not merely inherited: it must carry this
    // run's own sessionStorage2, not pageCtx's, or a reference case set on one
    // run's store would leak into the other through the same window object.
    window: { location: pageCtx.window.location, print() {}, sessionStorage: sessionStorage2 },
    sessionStorage: sessionStorage2,
    document: Object.assign({}, pageCtx.document, {
        getElementById(id) { if (!els2[id]) els2[id] = stubEl(); return els2[id]; }
    })
});
vm.createContext(emptyCtx);
emptyCtx.LMN_CONFIG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', emptyCtx);
vm.runInContext(read('js/data.js'), emptyCtx);
let ranEmpty = true, emptyError = '';
try {
    vm.runInContext(read('js/finish-design.js'), emptyCtx);
    vm.runInContext('initSummaryPage();', emptyCtx);
} catch (e) { ranEmpty = false; emptyError = e.message; }
check('the summary page runs with an empty session', ranEmpty, emptyError);
if (ranEmpty) {
    check('every EV field says Not selected rather than showing an EV1 result',
        els2['l3-net-balance'].textContent === 'Not selected',
        els2['l3-net-balance'].textContent);
    const body2 = els2['fs-comparison-body'] ? els2['fs-comparison-body'].innerHTML : '';
    // INVERTED 2026-08-24. With no reference case chosen, hasRef is false, so
    // fsRow never draws a baseline or change cell at all; each unselected
    // metric prints "Not selected" once, in its selected cell, not twice.
    // Three metrics were not selected, so three "Not selected" cells, not six.
    check('rooftop PV, mobility and landscape PV are absent from the comparison',
        (body2.match(/Not selected/g) || []).length === 3,
        String((body2.match(/Not selected/g) || []).length));
    check('no constraint sentence is written when no PV was selected',
        els2['fs-constraint'].hidden === true);
}

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== STAGE 6, the two Layer 3 pages actually run ==');

function layer3Ctx(sessionValue, search) {
    const elements = {};
    const cards = {};
    function card(value, disabled) {
        const status = stubEl();
        const c = Object.assign(stubEl(), {
            dataset: { value: value }, disabled: !!disabled,
            querySelector() { return status; },
            _status: status,
            _classes: {},
            handlers: []
        });
        c.classList = {
            add(n) { c._classes[n] = true; },
            remove(n) { delete c._classes[n]; },
            contains(n) { return !!c._classes[n]; },
            toggle(n) { if (c._classes[n]) { delete c._classes[n]; } else { c._classes[n] = true; } }
        };
        c.addEventListener = function (ev, fn) { c.handlers.push(fn); };
        cards[value] = c;
        return c;
    }
    const transportCards = [card('ev', false), card('v2g_stations', true)];
    const store3 = sessionValue === null ? {} : { mobilitySelections: sessionValue };

    const c = {
        console, URLSearchParams, Date,
        window: { location: { search: search } },
        sessionStorage: {
            getItem(k) { return Object.prototype.hasOwnProperty.call(store3, k) ? store3[k] : null; },
            setItem(k, v) { store3[k] = v; }
        },
        document: {
            addEventListener() {},
            getElementById(id) { if (!elements[id]) elements[id] = stubEl(); return elements[id]; },
            querySelectorAll(sel) {
                if (sel.indexOf('transportation-card') !== -1) return transportCards;
                return [];
            },
            querySelector(sel) {
                const m = sel.match(/data-value="([^"]+)"/);
                return m ? (cards[m[1]] || null) : null;
            }
        },
        alert() {},
        buildSidebar() {}
    };
    vm.createContext(c);
    c.LMN_CONFIG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', c);
    vm.runInContext(read('js/data.js'), c);
    return { ctx: c, elements, cards, transportCards };
}

// the selection page, as it ships, with nothing chosen
const sel = layer3Ctx(null, '?neighbourhood=RC-R&envelope=necb-z6');
let selRan = true, selErr = '';
try {
    vm.runInContext(read('js/mobility-selection.js'), sel.ctx);
    vm.runInContext('initMobilitySelectionPage();', sel.ctx);
} catch (e) { selRan = false; selErr = e.message; }
check('the mobility selection page runs', selRan, selErr);
if (selRan) {
    check('V2G is disabled before EV is chosen', sel.cards['v2g_stations'].disabled === true);
    check('and it says why', sel.cards['v2g_stations']._status.textContent === 'Requires EV');
    check('Continue is disabled before EV is chosen',
        sel.elements['view-mobility-btn'].disabled === true);
    check('and the reason is visible',
        sel.elements['mobility-submit-reason'].hidden === false
        && sel.elements['mobility-submit-reason'].textContent.length > 10);

    // choose EV: the same handler the browser would fire
    sel.cards['ev'].handlers.forEach(h => h());
    check('choosing EV enables V2G', sel.cards['v2g_stations'].disabled === false);
    check('choosing EV enables Continue', sel.elements['view-mobility-btn'].disabled === false);

    // choose V2G, then drop EV: the invalid pair must not survive
    sel.cards['v2g_stations'].handlers.forEach(h => h());
    sel.cards['ev'].handlers.forEach(h => h());
    check('dropping EV disables V2G again', sel.cards['v2g_stations'].disabled === true);
    check('dropping EV drops V2G from the selection as well',
        vm.runInContext('mobilitySelections.transportation.indexOf("v2g_stations");', sel.ctx) === -1);
    check('and Continue closes again', sel.elements['view-mobility-btn'].disabled === true);
}

// the results page with no scenario in the session
const out1 = layer3Ctx(null, '?neighbourhood=RC-R&envelope=necb-z6');
let outRan = true, outErr = '';
try {
    vm.runInContext(read('js/ev-v2g-breakdown.js'), out1.ctx);
    vm.runInContext('initEvV2gBreakdownPage();', out1.ctx);
} catch (e) { outRan = false; outErr = e.message; }
check('the results page runs with an empty session', outRan, outErr);
if (outRan) {
    check('the empty state is shown', out1.elements['ev-empty-state'].hidden === false);
    check('the table is hidden, so no number is on the page',
        out1.elements['ev-v2g-table'].hidden === true);
    // The element is not even in the map: the page never asked for it, which
    // is a stronger statement than finding it empty.
    check('no result cell was written', out1.elements['res-net-balance-kwh'] === undefined);
    check('the way back carries the neighbourhood',
        out1.elements['ev-empty-link'].href.indexOf('RC-R') !== -1);
}

// V2G alone: the selection that used to be answered with the EV1 result
const out2 = layer3Ctx(JSON.stringify({ transportation: ['v2g_stations'], mobility: [] }),
    '?neighbourhood=RC-R&envelope=necb-z6');
let out2Ran = true, out2Err = '';
try {
    vm.runInContext(read('js/ev-v2g-breakdown.js'), out2.ctx);
    vm.runInContext('initEvV2gBreakdownPage();', out2.ctx);
} catch (e) { out2Ran = false; out2Err = e.message; }
check('the results page runs with a V2G only session', out2Ran, out2Err);
if (out2Ran) {
    check('V2G alone shows the empty state, not the EV1 result, DBG-007',
        out2.elements['ev-empty-state'].hidden === false
        && out2.elements['res-net-balance-kwh'] === undefined);
}

// EV and V2G: the real result
const out3 = layer3Ctx(JSON.stringify({ transportation: ['ev', 'v2g_stations'], mobility: [] }),
    '?neighbourhood=RC-R&envelope=necb-z6');
let out3Ran = true, out3Err = '';
try {
    vm.runInContext(read('js/ev-v2g-breakdown.js'), out3.ctx);
    vm.runInContext('initEvV2gBreakdownPage();', out3.ctx);
} catch (e) { out3Ran = false; out3Err = e.message; }
check('the results page runs with a full EV2 session', out3Ran, out3Err);
if (out3Ran) {
    const e3 = out3.elements;
    check('the net grid demand on screen is the one in js/data.js',
        e3['res-net-balance-kwh'].textContent === EV['RC-R'].EV2.netEnergyBalance_kWh.toLocaleString(),
        e3['res-net-balance-kwh'].textContent);
    check('the intensity on screen is the corrected one',
        String(e3['res-net-balance-kwh-m2'].textContent) === String(EV['RC-R'].EV2.netEnergyBalance_kWh_m2));
    check('the floor area on screen is the heated and cooled area',
        e3['param-floor-area'].textContent === COND['RC-R'].toLocaleString(),
        e3['param-floor-area'].textContent);
    check('every renamed label was written from config',
        e3['lbl-ev-ownership'].textContent === evCfg.ownershipRateLabel
        && e3['lbl-v2g-energy'].textContent === evCfg.dailyV2gEnergyLabel
        && e3['lbl-net-total'].textContent === evCfg.netGridDemandTotalLabel
        && e3['lbl-net-intensity'].textContent === evCfg.netGridDemandIntensityLabel);
    check('the two balance labels on screen are different',
        e3['lbl-net-total'].textContent !== e3['lbl-net-intensity'].textContent);
    check('the discharge row carries a valid unit',
        e3['unit-v2g-export-per-ev'].textContent === evCfg.dailyV2gExportPerEvUnit
        && e3['cfg-discharge-cap'].textContent === '10');
    check('the sign convention was printed', e3['ev-sign-note'].textContent.length > 20);
    check('the status is worded, not the image file name',
        e3['res-status'].textContent === evCfg.statusStates.deficit, e3['res-status'].textContent);
    check('the empty state was never built on the success path',
        e3['ev-empty-state'] === undefined);
}

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== STAGE 9, CHV items 1 to 8 ==');

check('item 1, the full name is written out', /Layered Modular Neighbourhood/.test(docs));
check('item 1, the intended use has its own heading', /Intended use/.test(docs));
check('item 1, it says what the tool is not, including that it does not optimise',
    /no formal optimisation method is implemented/i.test(docs));
// Was "the seven climate arms" until 2026-08-17. Six are offered now; the
// assertion itself never named a count, only the cities, so only the label moved.
check('item 2, the six climate arms are listed with the corrected cities',
    ['Vancouver', 'Toronto', 'Winnipeg', 'Fort McMurray', 'Chisasibi'].every(c => docs.indexOf(c) !== -1));
check('item 2, no page names the four cities D0.1 removed',
    !/Windsor/.test(docs) && !/Whitehorse/.test(docs) && !/Yellowknife/.test(docs));

check('item 3, the EV chain is documented with its worked example',
    docs.indexOf('600 kWh/day') !== -1 && docs.indexOf('180 kWh/day') !== -1
    && docs.indexOf('450 kWh/day') !== -1);
check('item 3, the intensity denominator is named in the chapter',
    /heated and cooled floor\s*\n?\s*area/i.test(docs) || /heated and cooled floor area/i.test(docs));
check('item 3, the landscape PV chain is documented step by step',
    docs.indexOf('4,046.8') !== -1 && docs.indexOf('404.7') !== -1
    && docs.indexOf('80.9') !== -1 && docs.indexOf('103.6') !== -1);
check('item 3, the sign convention is stated in the documentation',
    /ISO 52000-1/.test(docs) && /deficit/.test(docs));
// The chapter names the superseded figures on purpose, so a reader holding the
// old number learns what happened to it. What must be gone is any superseded
// figure still presented AS the result, which on this page means in bold.
check('item 3, no superseded figure is still presented as the result',
    !/<strong>608 MWh\/year<\/strong>/.test(docs) && !/<strong>475 kWp<\/strong>/.test(docs)
    && !/<strong>10 kW\/day<\/strong>/.test(docs));
check('item 3, the corrected figures are the ones in bold',
    /<strong>103\.6 MWh\/yr<\/strong>/.test(docs) && /<strong>80\.9 kWp<\/strong>/.test(docs));

check('item 4, the limitations chapter lists the coverage gaps',
    /Coverage gaps/.test(docs));
check('item 4, it names the five neighbourhoods merged from a US prototype',
    /RC-D,\s+RC-ML,\s+RC-MR1,\s+RC-R\s+and\s+RC-T/.test(docs));
check('item 4, it names the Zone 7B gap', /Zone 7B/.test(docs) && /MU-HC/.test(docs));
check('item 4, it discloses the three open EV methodology questions',
    /5 % storage loss/.test(docs) && /90 % discharging efficiency/.test(docs)
    && /not netted against the EV load/i.test(docs));

const anchors = {
    'layer1_output.html': '#sec-archetypes',
    'layer2_energy_breakdown.html': '#sec-modelling',
    'layer2_pv_breakdown.html': '#sec-pv',
    'layer3_ev_v2g_mobility_output.html': '#sec-mobility',
    'layer4_lpv_breakdown.html': '#sec-green',
    'layer4_finish_design.html': '#sec-limitations'
};
Object.keys(anchors).forEach(f => {
    const page = read(f);
    const anchor = anchors[f];
    const id = anchor.slice(1);
    check('item 5, ' + f + ' links to its own chapter',
        page.indexOf('documentation.html' + anchor) !== -1);
    check('item 5, ' + anchor + ' exists in documentation.html',
        docs.indexOf('id="' + id + '"') !== -1);
});

check('item 6, the greyed wording is one of the four terms',
    CFG.statusTerms.indexOf(CFG.availability.notModelledLabel) !== -1);
check('item 6, "Coming soon" survives nowhere in the interface',
    ['layer2_energy_selection.html', 'layer4_green_selection.html', 'documentation.html']
        .every(f => read(f).indexOf('Coming soon') === -1));
check('item 6, the four terms are defined for the reader', /Simulation-backed/.test(docs)
    && /Not modelled yet/.test(docs) && /In development/.test(docs));

check('item 7, the unreachable EV page is archived',
    !exists('layer3_ev_breakdown.html') && exists('previous/layer3_ev_breakdown.html'));
check('item 7, its script went with it',
    !exists('js/ev.js') && exists('previous/ev.js'));
check('item 7, the archived output energy script is out of js/',
    !exists('js/output_energy.js') && exists('previous/output_energy.js'));
check('item 7, no page at the root loads a script from previous/',
    ['index.html', 'layer1_NUs_selection.html', 'layer1_output.html', 'layer2_energy_selection.html',
     'layer2_energy_breakdown.html', 'layer2_pv_breakdown.html', 'layer3_mobility_selection.html',
     'layer3_ev_v2g_mobility_output.html', 'layer4_green_selection.html', 'layer4_lpv_breakdown.html',
     'layer4_output_selection.html', 'layer4_finish_design.html', 'documentation.html']
        .every(f => read(f).indexOf('previous/') === -1));

console.log('\n== file hygiene ==');

// A22, 2026-09-09: these two checks used to require a fixed convention, CRLF
// for one list of files and LF for the other. `.gitattributes` (DBG-044) now
// normalises every text file to LF on checkout, on every platform, so a fixed
// expectation per file is stale by construction. What is still tested: no
// file in either list carries both conventions mixed together, which is the
// real defect these checks protected against.
const crlfFiles = ['js/data.js', 'js/config.js', 'layer3_mobility_selection.html',
    'layer3_ev_v2g_mobility_output.html', 'layer4_green_selection.html',
    'layer4_lpv_breakdown.html', 'layer4_finish_design.html', 'documentation.html', 'js/lpv.js'];
const crlfBroken = crlfFiles.filter(f => {
    const t = read(f);
    return (t.match(/\r\n/g) || []).length > 0 && (t.match(/(?<!\r)\n/g) || []).length > 0;
});
check('no listed file mixes CRLF and bare LF line endings', crlfBroken.length === 0, crlfBroken.join(', '));

const lfFiles = ['js/mobility-selection.js', 'js/ev-v2g-breakdown.js', 'js/finish-design.js'];
const lfBroken = lfFiles.filter(f => {
    const t = read(f);
    return (t.match(/\r\n/g) || []).length > 0 && (t.match(/(?<!\r)\n/g) || []).length > 0;
});
check('no LF file mixes CRLF and bare LF line endings', lfBroken.length === 0, lfBroken.join(', '));

// The dash class is built from character codes on purpose. Writing it as a
// literal put the two characters into this file, and the dash audit then
// rewrote the class into a range that matched every hyphen in the repository.
const dashClass = new RegExp('[' + String.fromCharCode(0x2013) + String.fromCharCode(0x2014) + ']');
check('no em or en dash was introduced into js/config.js', !dashClass.test(configJs));
check('no em or en dash in the two new Layer 3 scripts',
    !dashClass.test(mobilityJs) && !dashClass.test(evJs));

const decimals = [];
Object.keys(EV).forEach(nu => ['EV1', 'EV2'].forEach(s => {
    const v = EV[nu][s].netEnergyBalance_kWh_m2;
    if (String(v).indexOf('.') !== -1 && String(v).split('.')[1].length > 2) decimals.push(nu + ' ' + s);
}));
check('every stored EV intensity is at two decimals or fewer',
    decimals.length === 0, decimals.slice(0, 3).join(', '));

console.log('\n─────────────────────────────────────────────');
console.log('  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('\n  FAILURES');
    fail.forEach(f => console.log('   - ' + f));
    process.exitCode = 1;
} else {
    console.log('\n  ALL CHECKS PASSED');
}
