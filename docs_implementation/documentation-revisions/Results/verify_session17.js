/*
 * verify_session17.js
 *
 * Session 17, 2026-08-13. Everything CHV asked for in her reply to
 * EMAIL-02b, and nothing else:
 *
 *   her answer 5  the five neighbourhoods are withheld in the five climates
 *                 that still carry the US prototype, and marked
 *   her answer 4  RoP keeps its place and gains a plain sentence on the page
 *   her Stage 1   the landing page names the tool in full, positions it as a
 *                 pre-feasibility tool, links About, Limitations and
 *                 Methodology, and carries a version and a date
 *   her Stage 2   the withholding is stated, never silent
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_session17.js
 *
 * No packages.
 *
 * Two habits carried from earlier sessions, both paid for once already.
 *
 * 1. It runs the pages. A check that only reads source cannot see a page that
 *    throws on load, and cannot see a guard that never fires. The last two
 *    blocks build a stub DOM, load the real js/config.js and js/data.js, and
 *    run the Layer 2 PV page and the Layer 4 summary against a withheld pair
 *    and against a live one.
 * 2. The dash audit is scoped to the text this session wrote, not to whole
 *    files. A check scoped to a file answers a question about the file.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

let pass = 0;
const fail = [];
function check(name, condition, detail) {
    if (condition) { pass++; console.log('  PASS  ' + name); return; }
    fail.push(name + (detail ? '  ->  ' + detail : ''));
    console.log('  FAIL  ' + name + (detail ? '  [' + detail + ']' : ''));
}

// Comments name the defect they fix, so a plain search finds the explanation
// and reports the defect as present. Strip them before asking "is it gone".
function codeOnly(src) {
    return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/[^\n]*/g, '$1');
}

// Built from char codes so the audit never carries the characters it forbids.
const DASHES = new RegExp('[' + String.fromCharCode(0x2013) + String.fromCharCode(0x2014) + ']');

const configJs = read('js/config.js');
const appJs = read('js/app.js');
const pvJs = read('js/pv.js');
const energyJs = read('js/energy.js');
const energySelJs = read('js/energy-selection.js');
const finishJs = read('js/finish-design.js');
const indexHtml = read('index.html');
const pvHtml = read('layer2_pv_breakdown.html');
const css = read('css/styles.css');

const ctx = { window: {}, document: { addEventListener() {} }, console, module: {} };
vm.createContext(ctx);
const CFG = vm.runInContext(configJs + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;
vm.runInContext(read('js/data.js'), ctx);
const ENV = vm.runInContext('ENVELOPE_ENERGY_DATA;', ctx);
const NUS = vm.runInContext('NEIGHBOURHOODS;', ctx);

const FIVE = ['RC-D', 'RC-ML', 'RC-MR1', 'RC-R', 'RC-T'];
const FIVE_CLIMATES = ['necb-z4', 'necb-z5', 'necb-z7a', 'necb-z7b', 'necb-z8'];

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 1. CHV answer 5, the withheld set is declared once, in config ==');

check('six gap entries: the five house NUs plus MU-HC', CFG.dataGaps.length === 6,
    String(CFG.dataGaps.length));

const dbg28 = CFG.dataGaps.filter(g => g.debugRef === 'DBG-028');
check('five of them are DBG-028', dbg28.length === 5, String(dbg28.length));
check('and they are the five neighbourhoods she named',
    FIVE.every(nu => dbg28.some(g => g.nu === nu)));

check('each names ten envelope keys, the five climates and their high performance twins',
    dbg28.every(g => g.climates.length === 10));

FIVE_CLIMATES.forEach(clim => {
    check('RC-D is withheld in ' + clim, !!CFG.dataGapFor('RC-D', clim));
    check('RC-D is withheld in high-performance-' + clim.replace('necb-', ''),
        !!CFG.dataGapFor('RC-D', 'high-performance-' + clim.replace('necb-', '')));
});

check('Montreal stays live, all four of its keys',
    ['necb-z6', 'necb-2017', 'high-performance-z6', 'high-performance-necb']
        .every(k => !CFG.dataGapFor('RC-D', k)));
check('the 1983 vintage arm stays live', !CFG.dataGapFor('RC-D', 'vintage-1983-z6'));

// INVERTED 2026-08-17, session 20, and this one is worth reading twice.
//
// It used to assert that the ASHRAE arm is untouched, on the reasoning that a
// US prototype in a US arm is the correct prototype, so withholding it would be
// withholding a result that is not defective. THAT REASONING IS STILL TRUE
// about DBG-028, and it is not what withdraws the arm now.
//
// CHV, 2026-08-17, point 1: "We cannot have Buffalo/Niagara as a climate case
// in this tool." The objection is not that the results are wrong. It is that a
// United States reference case is offered in a row of Canadian climate zones,
// which makes it read as one. Withdrawn by Koral's decision of 2026-08-17,
// DBG-034.
check('the whole ASHRAE arm is withdrawn, both its tiers, CHV point 1',
    FIVE.concat(['CC-B', 'MU-C1', 'RC-HR2']).every(nu =>
        !!CFG.dataGapFor(nu, 'ashrae') && !!CFG.dataGapFor(nu, 'high-performance-ashrae')));
check('it is withdrawn as a climate, not as a neighbourhood defect',
    CFG.climateWithdrawn('ashrae').scope === 'climate'
    && CFG.climateWithdrawn('ashrae').debugRef === 'DBG-034');
check('nothing was deleted from js/data.js to do it',
    !!ENV['ashrae'] && Object.keys(ENV['ashrae']).length === 35
    && !!ENV['high-performance-ashrae']);
// NARROWED 2026-08-24, CHV: NECB Zone 8 is withdrawn from the public tool too,
// in the same way as ASHRAE. It used to be true that all six NECB climates
// were untouched by the withdrawal; that is no longer true of Zone 8.
check('the five Canadian climates outside Zone 8 are untouched by the withdrawal',
    ['necb-z4', 'necb-z5', 'necb-z6', 'necb-z7a', 'necb-z7b']
        .every(k => !CFG.climateWithdrawn(k)));
check('NECB Zone 8 is now withdrawn as well, CHV 2026-08-24',
    !!CFG.climateWithdrawn('necb-z8') && !!CFG.climateWithdrawn('high-performance-z8'));

// INVERTED 2026-08-24. dataGapFor tests the withdrawn climates FIRST, so a
// neighbourhood outside the five DBG-028 house NUs is still blocked in Zone 8,
// not by a neighbourhood specific gap but by the climate withdrawal that
// applies to every neighbourhood in that arm.
check('a neighbourhood outside the five is never blocked by the DBG-028 gap',
    ['CC-B', 'MU-C1', 'RC-HR2'].every(nu =>
        ['necb-z4', 'necb-z5', 'necb-z7a', 'necb-z7b'].every(c => !CFG.dataGapFor(nu, c))));
check('but every neighbourhood is blocked in the withdrawn Zone 8 arm',
    ['CC-B', 'MU-C1', 'RC-HR2'].every(nu => !!CFG.dataGapFor(nu, 'necb-z8')));

check('the Zone 7B baseline gap survives, DBG-027', !!CFG.dataGapFor('MU-HC', 'necb-z7b'));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 2. it is marked, in her words, and the marking is not invented ==');

check('every gap carries a label', CFG.dataGaps.every(g => typeof g.label === 'string' && g.label.length > 3));
// INVERTED 2026-08-24, CHV: "The Results under revision message currently
// shown at the bottom should not remain in the final published V1." Her own
// 2026-08-13 wording is replaced by "Not available in this climate", the same
// label the withdrawn climate arms carry.
check('the five read "Not available in this climate", her 2026-08-24 wording',
    dbg28.every(g => g.label === 'Not available in this climate'));
check('MU-HC reads "Not currently available", because it is not being revised, it never ran',
    CFG.dataGapFor('MU-HC', 'necb-z7b').label === 'Not currently available');
check('the label lives in config as well, so no page writes it as a literal',
    CFG.availability.underRevisionLabel === 'Not available in this climate'
    && CFG.availability.notAvailableLabel === 'Not currently available');
// The phrase survives inside comments that quote CHV's own 2026-08-24 wording
// as the record of why it changed, the same pattern this file's other
// inversions follow. What has to be gone is the LIVE string, so the search is
// on code with its comments stripped, not on the raw file.
check('"Results under revision" is not one of the release terms, and no longer exists as a live string',
    CFG.statusTerms.length === 5
    && CFG.statusTerms.indexOf('Results under revision') === -1
    && !/Results under revision/.test(codeOnly(configJs))
    && !/Results under revision/.test(codeOnly(appJs)));

let withheld = 0, offered = 0;
CFG.climates.map(c => c.key).forEach(k => NUS.forEach(n => {
    if (ENV[k] && ENV[k][n]) { if (CFG.dataGapFor(n.code || n, k)) withheld++; else offered++; }
}));
// NEIGHBOURHOODS holds objects; count again on the code
withheld = 0; offered = 0;
CFG.climates.map(c => c.key).forEach(k => NUS.forEach(n => {
    if (ENV[k] && ENV[k][n.code]) { if (CFG.dataGapFor(n.code, k)) withheld++; else offered++; }
}));
// UPDATED 2026-08-17, session 20. It read 26 withheld and 219 offered until the
// ASHRAE arm was withdrawn on CHV's point 1. The 35 neighbourhoods of that arm
// are now withheld too, so 26 + 35 = 61, and 245 - 61 = 184.
//
// UPDATED AGAIN 2026-08-24: NECB Zone 8 is withdrawn as well, the same way as
// ASHRAE, adding its own 35 to the withheld count: 61 + 35 = 96... except that
// four of Zone 8's 35 were already counted once, as members of the five house
// NUs withheld from Zone 8 individually under DBG-028. Those five now fall
// under the climate withdrawal instead, so they are not double counted: the
// DBG-028 climates shrink from five to four (necb-z4, necb-z5, necb-z7a,
// necb-z7b), 4 x 5 = 20 house NU pairs, plus MU-HC (1), plus the two fully
// withdrawn arms, ASHRAE and Zone 8 (35 + 35 = 70). 20 + 1 + 70 = 91.
//
// The two counts are asserted separately AND their sum is asserted, because a
// single total would still pass if a neighbourhood silently left the catalogue.
check('91 of the 245 exposed pairs are withheld: 20 house NU pairs, MU-HC, and the 70 of the two withdrawn arms',
    withheld === 91, String(withheld));
check('154 pairs are still offered', offered === 154, String(offered));
check('nothing fell out of the catalogue while those two moved',
    withheld + offered === 245, String(withheld + offered));

check('withholding is a publication decision, not a deletion: the rows are still in the data',
    FIVE.every(nu => FIVE_CLIMATES.every(c => !!ENV[c][nu] && !!ENV[c][nu].DEFAULT)));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 3. the Layer 1 table, run for real ==');

function layer1Run(envelopeKey) {
    const els = {};
    const rows = [];
    const store = { activeFilters: JSON.stringify({ envelope: envelopeKey }) };
    function el(id) {
        if (!els[id]) els[id] = {
            id, textContent: '', innerHTML: '', style: {}, dataset: {},
            classList: { add() {}, remove() {}, contains() { return false; } },
            addEventListener() {}, appendChild(c) { rows.push(c); },
            setAttribute() {}, removeAttribute() {}, querySelector() { return null; }
        };
        return els[id];
    }
    const c = {
        console, URLSearchParams, Date,
        window: { location: { search: '', href: '' } },
        sessionStorage: {
            getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
            setItem(k, v) { store[k] = v; }
        },
        document: {
            addEventListener() {},
            getElementById(id) { return el(id); },
            querySelectorAll() { return []; },
            querySelector() { return null; },
            createElement() {
                return {
                    innerHTML: '', className: '', dataset: {}, style: {},
                    classList: { add() {}, remove() {} }, addEventListener() {},
                    querySelector() { return null; }, querySelectorAll() { return []; },
                    appendChild() {}
                };
            },
            body: { appendChild() {} }
        }
    };
    vm.createContext(c);
    c.LMN_CONFIG = vm.runInContext(configJs + '\n;LMN_CONFIG;', c);
    vm.runInContext(read('js/data.js'), c);
    vm.runInContext(appJs, c);
    vm.runInContext('renderOutputTable(' + JSON.stringify({ envelope: envelopeKey }) + ');', c);
    return { els, rows, note: els['data-gap-notes'] ? els['data-gap-notes'].innerHTML : '' };
}

let z4, z6, ran4 = true, err4 = '';
try { z4 = layer1Run('necb-z4'); z6 = layer1Run('necb-z6'); }
catch (e) { ran4 = false; err4 = e.message; }
check('the Layer 1 table renders', ran4, err4);

if (ran4) {
    check('Zone 4 offers 30 neighbourhoods, not 35', z4.rows.length === 30, String(z4.rows.length));
    check('Montreal still offers all 35', z6.rows.length === 35, String(z6.rows.length));

    // INVERTED 2026-08-24, CHV: "The Results under revision message currently
    // shown at the bottom should not remain in the final published V1. It is
    // fine internally during development, but those cases should either be
    // corrected or disabled before publication." renderDataGapNotes in
    // js/app.js no longer draws a box explaining a partially withheld climate;
    // the withheld rows are simply absent from the table, with their reason
    // written only at the point of the stop, session 23's rule. The five
    // checks this replaces used to assert that box's content on Zone 4 and on
    // Zone 7B: that it existed, that it named the five neighbourhoods and the
    // climate, that it carried her label as the title, and that Zone 7B drew
    // two boxes. None of that is drawn any more.
    check('the withheld rows on Zone 4 draw no note beneath the table',
        z4.note === '');
    check('Montreal draws no note at all', z6.note === '');

    const z7b = layer1Run('necb-z7b');
    check('Zone 7B still withholds the five and MU-HC, six in all', z7b.rows.length === 29,
        String(z7b.rows.length));
    check('and it too draws no note, for the same reason as Zone 4',
        z7b.note === '');

    // A climate withdrawn outright, NECB Zone 8 since 2026-08-24, withholds
    // all 35 rows through renderOutputTable, so results.length is 0 and the
    // table draws its own "No matching neighbourhoods" placeholder. That is an
    // EARLIER return in renderOutputTable, above the renderDataGapNotes call,
    // so the note holder is never reached by that path either, on Zone 8 same
    // as on Zone 4.
    const z8 = layer1Run('necb-z8');
    check('Zone 8 is withdrawn outright, so it offers no neighbourhoods',
        z8.rows.length === 0, String(z8.rows.length));
    check('the empty table draws no note through this path, same as Zone 4',
        z8.note === '');
}

// renderDataGapNotes still does draw the stop for a withdrawn climate arm, per
// item 8: what changed is that the per-neighbourhood boxes are gone, not that
// this branch was removed. It is just not reachable through renderOutputTable
// when the withdrawal empties the table, so it is called directly here, the
// way session 20 calls setupEnvelopeCards() directly to reach code a stub
// cannot drive through a click.
(function () {
    const els = {};
    function el(id) {
        if (!els[id]) els[id] = {
            id, textContent: '', innerHTML: '', style: {}, dataset: {},
            classList: { add() {}, remove() {}, contains() { return false; } },
            addEventListener() {}, appendChild() {},
            setAttribute() {}, removeAttribute() {}, querySelector() { return null; }
        };
        return els[id];
    }
    const c = {
        console, URLSearchParams, Date,
        window: { location: { search: '', href: '' } },
        sessionStorage: { getItem() { return null; }, setItem() {} },
        document: {
            addEventListener() {},
            getElementById(id) { return el(id); },
            querySelectorAll() { return []; },
            querySelector() { return null; },
            createElement() {
                return {
                    innerHTML: '', className: '', dataset: {}, style: {},
                    classList: { add() {}, remove() {} }, addEventListener() {},
                    querySelector() { return null; }, querySelectorAll() { return []; },
                    appendChild() {}
                };
            },
            body: { appendChild() {} }
        }
    };
    vm.createContext(c);
    c.LMN_CONFIG = vm.runInContext(configJs + '\n;LMN_CONFIG;', c);
    vm.runInContext(read('js/data.js'), c);
    let ok = true, err = '';
    try {
        vm.runInContext(appJs, c);
        vm.runInContext('renderDataGapNotes({envelope: "necb-z8"});', c);
    } catch (e) { ok = false; err = e.message; }
    check('renderDataGapNotes itself still draws the stop for a withdrawn climate', ok, err);
    const note = ok ? els['data-gap-notes'].innerHTML : '';
    check('and it is the box, with her current label as the title',
        /info-box--caution/.test(note) && /info-box-title">Not available in this climate</.test(note));
    check('it names the reason the zone is withdrawn', note.indexOf('Chisasibi') !== -1);
})();

check('app.js no longer emits the old loose line', !/data-gap-note"/.test(codeOnly(appJs)));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 4. the gate that survives a typed URL ==');

check('the notice is written once, in config', /LMN_CONFIG\.dataGapNotice = function/.test(configJs));
check('and it is the caution variant, because it stands where a result would be',
    /dataGapNotice[\s\S]{0,600}info-box info-box--caution/.test(configJs));

[['js/energy-selection.js', energySelJs], ['js/energy.js', energyJs],
 ['js/pv.js', pvJs], ['js/finish-design.js', finishJs]].forEach(([name, src]) => {
    check(name + ' calls the gate', /LMN_CONFIG\.dataGapNotice\(/.test(codeOnly(src)));
    check(name + ' returns instead of rendering', /gapNotice[\s\S]{0,400}return;/.test(codeOnly(src)));
});

// energy.js must gate BEFORE it reads a number, not after.
const gateAt = energyJs.indexOf('dataGapNotice(');
const readAt = energyJs.indexOf('const baseDefault = getEnergyData');
check('js/energy.js gates before the first data read', gateAt !== -1 && gateAt < readAt,
    gateAt + ' vs ' + readAt);

// Layer 3 and the landscape PV page are deliberately NOT gated. Assert the
// reason rather than the absence: their numbers do not depend on the climate.
const EVD = vm.runInContext('EV_V2G_DATA;', ctx);
const LPVD = vm.runInContext('LPV_DATA;', ctx);
check('EV data is keyed by neighbourhood only, so no EV number moves with the climate',
    Object.keys(EVD).length === 35 && !Object.keys(EVD).some(k => CFG.envelopeLabels[k]));
check('landscape PV data is keyed by neighbourhood only, same reason',
    LPVD.columns.length === 35 && !LPVD.columns.some(k => CFG.envelopeLabels[k]));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 5. the pages run, and the gate actually fires ==');

function stubEl() {
    return {
        textContent: '', innerHTML: '', hidden: false, href: '', src: '', title: '',
        style: {}, classList: { add() {}, remove() {}, contains() { return false; } },
        addEventListener() {}, removeAttribute() {}, getAttribute() { return null; },
        // querySelectorAll ADDED 2026-08-24. js/finish-design.js now wires the
        // reference case chooser by calling host.querySelectorAll(...) on an
        // element reached through getElementById, LMN_CONFIG.referenceCase.
        // A real element always has this method; the stub did not, so the
        // stubbed page threw "host.querySelectorAll is not a function" the
        // moment that new code ran, which is a gap in the stub, not in the page.
        setAttribute() {}, querySelector() { return null; }, querySelectorAll() { return []; },
        complete: true, naturalWidth: 1
    };
}

function pageRun(script, entry, search, selections) {
    const els = {};
    const main = stubEl();
    const store = Object.assign({}, selections || {});
    const c = {
        console, URLSearchParams, Date,
        Blob: function () {}, URL: { createObjectURL() { return ''; }, revokeObjectURL() {} },
        window: { location: { search: search, href: '' }, print() {} },
        sessionStorage: {
            getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
            setItem(k, v) { store[k] = v; }
        },
        document: {
            addEventListener() {},
            getElementById(id) { if (!els[id]) els[id] = stubEl(); return els[id]; },
            querySelectorAll() { return []; },
            // Pages reach their elements both ways, by id and by selector. One
            // map behind both, or a check reports an element as never written
            // when it was written through the other route.
            querySelector(sel) {
                if (sel === 'main.container') return main;
                if (sel.charAt(0) === '#') {
                    const id = sel.slice(1);
                    if (!els[id]) els[id] = stubEl();
                    return els[id];
                }
                return null;
            },
            createElement() { return stubEl(); },
            body: { appendChild() {}, removeChild() {} }
        },
        alert() {},
        buildSidebar() {}
    };
    vm.createContext(c);
    c.LMN_CONFIG = vm.runInContext(configJs + '\n;LMN_CONFIG;', c);
    vm.runInContext(read('js/data.js'), c);
    let ok = true, err = '';
    try {
        vm.runInContext(read(script), c);
        vm.runInContext(entry + ';', c);
    } catch (e) { ok = false; err = e.message; }
    return { ok, err, els, main };
}

const SEL = {
    energySelections: JSON.stringify({ load: [], demand: ['cop3.5'], generation: ['pv_roof'] }),
    mobilitySelections: JSON.stringify({ transportation: ['ev'], mobility: [] }),
    greenSelections: JSON.stringify({ infrastructure: [], urban_agriculture: [], energy_integrated: [] })
};

const pvBlocked = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=RC-D&envelope=necb-z4', SEL);
check('the PV page runs on a withheld pair', pvBlocked.ok, pvBlocked.err);
check('and prints the notice instead of a result',
    /info-box--caution/.test(pvBlocked.main.innerHTML)
    && pvBlocked.main.innerHTML.indexOf('RC-D') !== -1);
check('no PV intensity is written on a withheld pair',
    pvBlocked.els['pv-generation-val'] === undefined
    || pvBlocked.els['pv-generation-val'].textContent === '');
check('no ratio of performance is written either',
    pvBlocked.els['pv-rop-val'] === undefined
    || pvBlocked.els['pv-rop-val'].textContent === '');

const pvLive = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=RC-D&envelope=necb-z6', SEL);
check('the PV page still works on a live pair', pvLive.ok, pvLive.err);
// INVERTED 2026-08-24. pv-generation-val, the PV generation intensity field,
// left the page with the intensity row itself; pv-total-val, Total PV
// generation, is what still proves the page draws a result there.
check('and it does write a PV generation total there',
    !!pvLive.els['pv-total-val'] && /^[0-9]/.test(pvLive.els['pv-total-val'].textContent),
    pvLive.els['pv-total-val'] && pvLive.els['pv-total-val'].textContent);
check('the gate did not fire on the live pair', pvLive.main.innerHTML === '');

const sumBlocked = pageRun('js/finish-design.js', 'initSummaryPage()',
    '?neighbourhood=RC-T&envelope=necb-z8', SEL);
check('the Layer 4 summary runs on a withheld pair', sumBlocked.ok, sumBlocked.err);
check('and it publishes nothing', /info-box--caution/.test(sumBlocked.main.innerHTML)
    && (!sumBlocked.els['l2-eui-value'] || sumBlocked.els['l2-eui-value'].textContent === ''));

const sumLive = pageRun('js/finish-design.js', 'initSummaryPage()',
    '?neighbourhood=RC-T&envelope=necb-z6', SEL);
check('the summary still works on a live pair', sumLive.ok, sumLive.err);
check('the gate did not fire there', sumLive.main.innerHTML === '');

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 6. CHV answer 4, RoP explains itself on the page ==');

check('the sentence lives in config', typeof CFG.rop.interfaceNote === 'string'
    && CFG.rop.interfaceNote.length > 120);
check('it says what the number is', /divided by/.test(CFG.rop.interfaceNote));
check('it says how to read it', /near energy positive/.test(CFG.rop.interfaceNote));
check('it says what it is not, an hourly statement', /any given hour/.test(CFG.rop.interfaceNote));
check('both layouts carry the element, current and legacy',
    /id="pv-rop-note"/.test(pvHtml) && /id="pv-rop-note-legacy"/.test(pvHtml));
check('both are the box component', (pvHtml.match(/class="info-box" id="pv-rop-note/g) || []).length === 2);
check('js/pv.js fills it from config, never from a literal',
    /ropNoteEl[\s\S]{0,200}LMN_CONFIG\.rop\.interfaceNote/.test(pvJs));
check('and writes nothing when the ratio itself is not shown',
    /ropNoteEl[\s\S]{0,200}\/\^\[0-9\]\/\.test/.test(pvJs));
check('the full definition still lives in the documentation, section D',
    /id="sec-rop"/.test(read('documentation.html')));

const pvIal = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=RC-D&envelope=necb-z6',
    { energySelections: JSON.stringify({ load: ['ideal_thermal_load'], demand: [], generation: ['pv_roof'] }) });
check('on a live pair the note is written', pvLive.els['pv-rop-note']
    && pvLive.els['pv-rop-note'].textContent === CFG.rop.interfaceNote);
check('the page runs on the ideal thermal load', pvIal.ok, pvIal.err);

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 7. CHV Stage 1, the landing page ==');

// INVERTED 2026-08-24, item 1 of the release identity change. The product
// name became "LMN V1, Layered Modular Neighbourhood Tool" and the
// parenthetical form "Layered Modular Neighbourhood (LMN)" this check used to
// require is gone from the page along with it.
check('the tool is named in full',
    indexHtml.indexOf('Layered Modular Neighbourhood Tool') !== -1
    && indexHtml.indexOf('LMN V1') !== -1);
check('the tab title carries it too', /<title>LMN V1, Layered Modular Neighbourhood Tool<\/title>/.test(indexHtml));
check('the broken character is gone', indexHtml.indexOf('�') === -1);
check('it no longer claims to design or optimise anything',
    !/allows stakeholders to design and optimize/.test(indexHtml));
check('it positions itself as early stage and pre-feasibility',
    /early stage decision support/.test(indexHtml) && /pre-feasibility/.test(indexHtml));
check('the scope note is the box component', /class="info-box" id="landing-scope-note"/.test(indexHtml));
check('and it states what the tool is not', /does not design a neighbourhood/.test(indexHtml));
check('About is one click away', /documentation\.html#sec-what-is-lmn/.test(indexHtml));
check('Limitations is one click away', /documentation\.html#sec-limitations/.test(indexHtml));
check('Methodology is one click away', /href="documentation\.html">Methodology/.test(indexHtml));
check('both anchors exist in the documentation',
    /id="sec-what-is-lmn"/.test(read('documentation.html'))
    && /id="sec-limitations"/.test(read('documentation.html')));
check('the version stamp element is on the page', /id="site-version"/.test(indexHtml));
check('it is filled from config, not typed in',
    /LMN_CONFIG\.version/.test(indexHtml) && /LMN_CONFIG\.lastUpdated/.test(indexHtml)
    && indexHtml.indexOf('Version 0.9.0') === -1);
check('config.js is loaded before the script that reads it',
    indexHtml.indexOf('js/config.js') < indexHtml.indexOf("getElementById('site-version')"));
check('the stamp has a rule of its own', /\.site-version \{/.test(css));
// Moved with the build, 2026-08-17, session 20. The point of the check is that
// the stamp is not left behind, so it follows every build that changes what the
// site says.
check('the date it prints is the day this build was made', CFG.lastUpdated === '2026-08-24');

// ═════════════════════════════════════════════════════════════════════════
console.log('\n== 8. hygiene ==');

// Scoped to what this session wrote. A whole file audit answers a question
// about the file, not about the change.
function slice(src, from, to) {
    const a = src.indexOf(from);
    const b = src.indexOf(to, a);
    return (a === -1 || b === -1) ? '' : src.slice(a, b);
}
const written = {
    'config, the withheld set': slice(configJs, 'DBG-028, P0, and CHV', 'facadePv:'),
    'config, the notice': slice(configJs, 'LMN_CONFIG.dataGapNotice', 'DBG-027, task 3.12'),
    'config, the RoP sentence': slice(configJs, 'interfaceNote:', '\n  },'),
    'app.js, the grouped note': slice(appJs, 'function renderDataGapNotes', 'function checkNeighbourhoodMatchesFilters'),
    'index.html': indexHtml,
    'pv.js, the RoP note': slice(pvJs, '2b. What the Ratio of Performance', 'return pvIntensity')
};
Object.keys(written).forEach(name => {
    check('no em or en dash in ' + name, written[name] !== '' && !DASHES.test(written[name]));
});

// A22, 2026-09-09: this used to require a specific convention per file (CRLF
// for some, LF for others). `.gitattributes` (DBG-044) now normalises every
// text file to LF on checkout, on every platform, so a fixed per file
// expectation is stale by construction. What the check protected against,
// one file ending up with both conventions mixed together, is still real and
// still tested here.
['index.html', 'layer2_pv_breakdown.html', 'js/config.js',
 'js/app.js', 'js/energy.js', 'js/energy-selection.js',
 'css/styles.css', 'js/pv.js', 'js/finish-design.js']
    .forEach((f) => {
        const b = fs.readFileSync(path.join(ROOT, f), 'latin1');
        const crlf = (b.match(/\r\n/g) || []).length;
        const bareLf = (b.match(/(?<!\r)\n/g) || []).length;
        check(f + ' does not mix CRLF and bare LF line endings',
            !(crlf > 0 && bareLf > 0), 'CRLF ' + crlf + ' of bare LF ' + bareLf);
    });

// Nothing this session did was allowed to touch a stored energy value. The
// five neighbourhoods are withheld from publication, not edited.
let decimals = 0;
Object.keys(ENV).forEach(k => Object.keys(ENV[k]).forEach(n => Object.keys(ENV[k][n]).forEach(s => {
    const cell = ENV[k][n][s];
    const t = String(cell.total).split('.')[1];
    if (t && t.length > 1) decimals++;
    cell.breakdown.forEach(b => {
        const d = String(b.value).split('.')[1];
        if (d && d.length > 1) decimals++;
    });
})));
check('every energy value is still at one decimal place, so none was rewritten',
    decimals === 0, String(decimals));

// ═════════════════════════════════════════════════════════════════════════
console.log('\n' + '='.repeat(66));
console.log('  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('\n  FAILURES');
    fail.forEach(f => console.log('   ' + f));
    process.exitCode = 1;
} else {
    console.log('\n  ALL CHECKS PASSED\n');
}
