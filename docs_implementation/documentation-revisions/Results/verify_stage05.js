/*
 * verify_stage05.js
 *
 * Stage 5, energy generation options and icons. Checks every claim made in
 * Implementation/DONE/STAGE-05_Generation-Options-Icons.md.
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_stage05.js
 *
 * No packages. Prints a pass/fail line per check.
 *
 * The point of this file is the case check. Development is on Windows, which
 * is case insensitive, and the site is served by GitHub Pages, which is Linux
 * and is not. fs.existsSync on Windows answers yes to a path whose case is
 * wrong, so existsExactCase walks the real directory listing component by
 * component instead of asking the filesystem to match.
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

// The check the whole stage exists for. Every component of the path has to
// appear in its parent's listing with exactly the case that is written down.
function existsExactCase(relPath) {
    const parts = relPath.split('/').filter(Boolean);
    let dir = ROOT;
    for (let i = 0; i < parts.length; i++) {
        let listing;
        try { listing = fs.readdirSync(dir); } catch (e) { return false; }
        if (listing.indexOf(parts[i]) === -1) return false;
        dir = path.join(dir, parts[i]);
    }
    return true;
}

const ctx = { window: {}, document: { addEventListener() {} }, console, module: {} };
vm.createContext(ctx);
const CFG = vm.runInContext(read('js/config.js') + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;

const sidebarJs = read('js/sidebar.js');
const finishJs  = read('js/finish-design.js');
const energySel = read('js/energy-selection.js');
const lpvJs     = read('js/lpv.js');
const configJs  = read('js/config.js');
const l2Html    = read('layer2_energy_selection.html');
const l4Html    = read('layer4_green_selection.html');
const css       = read('css/styles.css');

// ───────────────────────────────────── 5.3, every icon path, exact case
console.log('\n== 5.3 and 5.5, every icon path resolves on a case sensitive filesystem ==');

const groups = Object.keys(CFG.selectionLabels);
check('all eight selection groups are declared',
    groups.length === 8, groups.join(', '));

let entries = [];
for (const g of groups) {
    for (const k of Object.keys(CFG.selectionLabels[g])) {
        entries.push({ group: g, key: k, e: CFG.selectionLabels[g][k] });
    }
}
check('every entry carries a label and an image',
    entries.every(x => x.e.label && x.e.image),
    entries.filter(x => !x.e.label || !x.e.image).map(x => x.group + '.' + x.key).join(', '));

const missing = entries.filter(x => !existsExactCase(x.e.image));
check('every icon file exists with the exact case written in config, ' + entries.length + ' of ' + entries.length,
    missing.length === 0,
    missing.map(x => x.group + '.' + x.key + ' -> ' + x.e.image).join('; '));

const outsideContent = entries.filter(x => x.e.image.indexOf('Content/') !== 0);
check('every icon path is repository relative, no leading slash and no host',
    outsideContent.length === 0, outsideContent.map(x => x.e.image).join('; '));

// The exact mapping CHV flagged.
check('VGS resolves to the real file, not to the abbreviation',
    CFG.selection('infrastructure', 'vertical_greening_systems').image ===
    'Content/Images_Layer4_Infrastructure/vertical greening systems.png');
check('VGS keeps its full name as the display label',
    CFG.selection('infrastructure', 'vertical_greening_systems').label === 'Vertical Greening Systems');
check('an unknown key returns the key itself rather than a broken path',
    CFG.selection('infrastructure', 'not_a_key').label === 'not_a_key' &&
    CFG.selection('infrastructure', 'not_a_key').image === '');

// ───────────────────────────────────── 5.4, no path built from a display label
console.log('\n== 5.4, no path is built from a display label in any live file ==');

// Matches an Images_ path that contains a template placeholder.
const interpolated = /Images_[A-Za-z0-9_]*\/[^"'`]*\$\{/;
const liveFiles = {
    'js/sidebar.js': sidebarJs,
    'js/finish-design.js': finishJs,
    'js/energy-selection.js': energySel,
    'js/lpv.js': lpvJs
};
for (const [f, src] of Object.entries(liveFiles)) {
    check(f + ' builds no image path from a label', !interpolated.test(src),
        (src.match(interpolated) || [''])[0]);
}

check('js/finish-design.js reads all three Layer 4 groups from config',
    /LMN_CONFIG\.selection\('infrastructure'/.test(finishJs) &&
    /LMN_CONFIG\.selection\('urbanAgriculture'/.test(finishJs) &&
    /LMN_CONFIG\.selection\('energyIntegrated'/.test(finishJs));
check('js/finish-design.js keeps no local label map for those groups',
    !/infraLabels|agLabels|integratedLabels|integratedImages/.test(finishJs));
check('js/sidebar.js reads all five of its groups from config',
    ['load', 'demand', 'generation', 'transportation', 'mobility']
        .every(g => sidebarJs.indexOf("LMN_CONFIG.selection('" + g + "'") !== -1));

// js/app.js and js/output_energy.js are deliberately untouched: the five paths
// in app.js resolve because the stored parameter values are already lower case,
// and output_energy.js is loaded only by previous/layer2_output_energy.html,
// which was archived in session 8. Standing rule of 2026-08-11: if it works, do
// not touch it. This check records that the second file is still unreachable.
const rootPages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
const outputEnergyCallers = rootPages.filter(f => read(f).includes('output_energy.js'));
check('js/output_energy.js is still reached by no page at the repository root',
    outputEnergyCallers.length === 0, outputEnergyCallers.join(', '));

// ───────────────────────────────────── 5.6, a missing icon is visible again
console.log('\n== 5.6, a missing icon warns instead of hiding ==');

check('LMN_CONFIG.iconMissing exists', typeof CFG.iconMissing === 'function');

let warned = [];
const fakeImg = {
    dataset: {}, classList: { add(c) { this.added = c; } },
    getAttribute() { return 'Content/Images_Layer4_Infrastructure/Green Roofs.png'; },
    removeAttribute(a) { this.removed = a; }
};
const prevWarn = console.warn;
console.warn = (m) => warned.push(m);
CFG.iconMissing(fakeImg);
CFG.iconMissing(fakeImg);
console.warn = prevWarn;
check('it warns once, names the file, and does not loop', warned.length === 1 &&
    warned[0].indexOf('Green Roofs.png') !== -1, warned.join(' | '));
check('it drops the src and marks the element', fakeImg.removed === 'src' &&
    fakeImg.classList.added === 'icon-missing');

const silent = /onerror="this\.style\.display='none'"/g;
check('js/sidebar.js no longer hides a config driven icon on error',
    (sidebarJs.match(/\$\{sel\.image\}[^>]*this\.style\.display='none'/g) || []).length === 0);
check('js/finish-design.js hides no icon on error at all',
    (finishJs.match(silent) || []).length === 0);
check('js/sidebar.js routes all eight config driven icons through iconMissing',
    (sidebarJs.match(/LMN_CONFIG\.iconMissing\(this\)/g) || []).length === 8,
    String((sidebarJs.match(/LMN_CONFIG\.iconMissing\(this\)/g) || []).length));
// RAISED 2026-08-12, session 15. Six pills, plus the page level error listener
// at the end of initSummaryPage. That listener used to set display:none on
// every broken image on this page, which quietly undid the session 14 fix here
// and here alone: the pills asked for a grey plate and the listener removed it.
check('js/finish-design.js routes all six of its pills, and its page listener, through iconMissing',
    (finishJs.match(/LMN_CONFIG\.iconMissing\(this\)/g) || []).length === 7,
    String((finishJs.match(/LMN_CONFIG\.iconMissing\(this\)/g) || []).length));
check('js/finish-design.js no longer hides a broken image on this page',
    !/this\.style\.display\s*=\s*'none'/.test(finishJs));
check('layer4_green_selection.html carries no inline grey block handler',
    !/backgroundColor='#e0e0e0'/.test(l4Html));
check('the missing icon plate has a style', /img\.icon-missing\s*\{/.test(css));

// ───────────────────────────────────── 5.1, facade PV
console.log('\n== 5.1, facade PV is offered only where it was studied ==');

check('the rule is declared once, in config',
    Array.isArray(CFG.facadePv.validNUs) && CFG.facadePv.validNUs.length === 9 &&
    CFG.facadePv.validClimates.length === 1);
check('it is allowed on a Montreal high rise neighbourhood',
    CFG.facadePvAllowed('RC-HR1', 'necb-z6') === true);
check('it follows Montreal through its alias key',
    CFG.facadePvAllowed('RC-HR1', 'necb-2017') === true);
check('it follows Montreal through the high performance and 1983 keys',
    CFG.facadePvAllowed('MU-C1', 'high-performance-z6') === true &&
    CFG.facadePvAllowed('MU-C1', 'vintage-1983-z6') === true);
check('it is refused on a Montreal neighbourhood with no tall building',
    CFG.facadePvAllowed('RC-D', 'necb-z6') === false);
check('it is refused on a tall neighbourhood in another climate',
    CFG.facadePvAllowed('RC-HR1', 'necb-z8') === false &&
    CFG.facadePvAllowed('RC-HR1', 'ashrae') === false);
check('it is refused when no climate is known',
    CFG.facadePvAllowed('RC-HR1', null) === false);
check('the restriction sentence exists and names the nine',
    /nine/i.test(CFG.facadePv.restrictionNote));

check('the page applies the rule before it restores the stored selection',
    energySel.indexOf('applyFacadePvRule(') < energySel.indexOf('restoreEnergySelections();') &&
    /function applyFacadePvRule/.test(energySel));
check('the page has somewhere to print the reason',
    l2Html.includes('id="pv-facade-note"') && l2Html.includes('id="pv-facade-status"'));
check('the facade card is not disabled in the markup, the rule decides',
    /data-value="pv_facade">/.test(l2Html));
check('the reason text comes from config, not from a literal in the page',
    /LMN_CONFIG\.facadePv\.restrictionNote/.test(energySel));
check('a card greyed by the rule is not labelled Coming soon, which would be false',
    /'Montreal only'/.test(energySel));

// ───────────────────────────────────── 5.2, every greyed button says why
console.log('\n== 5.2, every greyed technology carries a visible status ==');

// INVERTED 2026-08-12, session 15, decision D9.2. This check asserted
// "Coming soon", the wording Koral chose on 2026-08-11. CHV's Stage 9 item 6
// requires the same four status terms everywhere and hers for this case is
// "Not modelled yet", so the value changed and the key changed with it. The
// check now asserts the correction, and it additionally asserts that the
// wording is one of her four terms, which is the property that was missing:
// nothing stopped a fifth term being introduced the first time.
const label = CFG.availability.notModelledLabel;
check('the wording is declared once in config', label === 'Not modelled yet');
check('the wording is one of the four status terms CHV fixed',
    CFG.statusTerms.indexOf(label) !== -1, label);
check('the old key is gone, so it cannot be read by mistake',
    CFG.availability.comingSoonLabel === undefined);

function buttons(html) {
    return html.match(/<button[\s\S]*?<\/button>/g) || [];
}
const l2Disabled = buttons(l2Html).filter(b => /\sdisabled(\s|>)/.test(b));
const l4Disabled = buttons(l4Html).filter(b => /\sdisabled(\s|>)/.test(b));

check('Layer 2 has the nine greyed cards the page ships with',
    l2Disabled.length === 9, String(l2Disabled.length));
check('Layer 4 has the seven greyed cards the page ships with',
    l4Disabled.length === 7, String(l4Disabled.length));

const l2NoLabel = l2Disabled.filter(b => b.indexOf('>' + label + '<') === -1);
const l4NoLabel = l4Disabled.filter(b => b.indexOf('>' + label + '<') === -1);
check('every greyed Layer 2 card says "' + label + '"', l2NoLabel.length === 0,
    String(l2NoLabel.length) + ' without it');
check('every greyed Layer 4 card says "' + label + '"', l4NoLabel.length === 0,
    String(l4NoLabel.length) + ' without it');
check('every greyed card is marked so the status stays readable',
    l2Disabled.concat(l4Disabled).every(b => b.indexOf('is-unavailable') !== -1));
check('no enabled card carries a status label',
    buttons(l2Html).concat(buttons(l4Html))
        .filter(b => !/\sdisabled(\s|>)/.test(b))
        .every(b => b.indexOf('>' + label + '<') === -1));
check('the status has a style that survives the greying',
    /\.card-status\s*\{/.test(css) && /\.is-unavailable:disabled\s*\{/.test(css) &&
    /:not\(\.card-status\)/.test(css));
check('the restriction note has a style', /\.selection-note\s*\{/.test(css));
// A class rule that sets display beats the browser rule for [hidden]. Without
// this pair the page would ship an empty grey badge on every neighbourhood.
check('the two elements the facade rule fills in stay hidden while they are empty',
    /\.card-status\[hidden\],\s*\r?\n\.selection-note\[hidden\] \{\s*\r?\n\s*display: none;/.test(css));

// ───────────────────────────────────── 5.7, fit instead of crop
console.log('\n== 5.7, icons are fitted, not cropped ==');

for (const k of ['usage', 'context', 'layout', 'density']) {
    const block = (css.match(new RegExp('\\.' + k + '-card img \\{[^}]*\\}')) || [''])[0];
    check('.' + k + '-card icons are fitted, not cropped',
        /object-fit: contain/.test(block), block.replace(/\s+/g, ' ').slice(0, 80));
}
for (const k of ['generation', 'consumption', 'envelope']) {
    const block = (css.match(new RegExp('\\.' + k + '-card img[^{]*\\{[^}]*\\}')) || [''])[0];
    check('.' + k + '-card icons are fitted, not cropped',
        /object-fit: contain/.test(block), block.replace(/\s+/g, ' ').slice(0, 80));
}

// ───────────────────────────────────── house rules
console.log('\n== house rules ==');

// Written as escapes on purpose: a character class holding the two real dashes
// becomes the range [-] the moment a dash sweep runs over this file, and that
// range matches every hyphen in the codebase. Session 14 paid for this once.
const DASHES = new RegExp('[' + String.fromCharCode(0x2013, 0x2014) + ']');

// The dash rule applies to what this round writes. Two of the files touched
// here carry em dashes that predate it and that the standing rule of
// 2026-08-11 keeps out of scope: js/finish-design.js prints one as the site
// wide "no value" placeholder, which every results script does, and
// css/styles.css has them inside section comments. Neither was introduced
// here. The files written from scratch, and the strings this stage added, are
// checked instead.
const written = ['js/config.js', 'js/energy-selection.js',
    'layer2_energy_selection.html', 'layer4_green_selection.html'];

const dashed = written.filter(f => DASHES.test(read(f)));
check('no em dash and no en dash in the files this stage wrote',
    dashed.length === 0, dashed.join(', '));

const addedCss = (css.match(/\/\* STAGE-05[\s\S]*?img\.icon-missing \{[^}]*\}/) || [''])[0];
check('no em dash and no en dash in the rules this stage added to the stylesheet',
    addedCss.length > 0 && !DASHES.test(addedCss));

// A22, 2026-09-09: this used to require a fixed per file convention (CRLF or
// LF). `.gitattributes` (DBG-044) now normalises every text file to LF on
// checkout, on every platform, so a fixed expectation per file is stale by
// construction. What is still tested: a file must not carry both conventions
// mixed together, which is the real defect this check protected against.
const CRLF_HYGIENE_FILES = ['js/config.js', 'js/energy-selection.js', 'css/styles.css',
    'layer2_energy_selection.html', 'layer4_green_selection.html', 'js/sidebar.js', 'js/finish-design.js'];
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
for (const f of ['js/config.js', 'js/sidebar.js', 'js/finish-design.js', 'js/energy-selection.js']) {
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
