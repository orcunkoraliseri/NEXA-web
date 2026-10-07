/*
 * verify_session16.js
 *
 * Session 16, 2026-08-12. The explanation boxes.
 *
 * Koral read the nine sentences the last four sessions added to the pages and
 * said the drawing was wrong: the sentences are correct, but a loose grey line
 * under a table is not a design. They now use the same anatomy as the
 * assumptions card and the disclaimer box, in a colour of their own.
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_session16.js
 *
 * No packages.
 *
 * What this suite refuses to do is check that a class name appears somewhere in
 * a file. Every check below names the sentence Koral quoted, finds the element
 * that carries it, and asserts that this element is inside a box. The point of
 * the change was the nine sentences, not the class.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

let pass = 0;
const fail = [];
function check(name, condition, detail) {
    if (condition) { pass++; console.log('  PASS  ' + name); return; }
    fail.push(name + (detail ? '  ->  ' + detail : ''));
    console.log('  FAIL  ' + name + (detail ? '  [' + detail + ']' : ''));
}

const css        = read('css/styles.css');
const configJs   = read('js/config.js');
const evJs       = read('js/ev-v2g-breakdown.js');

const PAGES = {
    'layer2_energy_selection.html':      read('layer2_energy_selection.html'),
    'layer2_energy_breakdown.html':      read('layer2_energy_breakdown.html'),
    'layer2_pv_breakdown.html':          read('layer2_pv_breakdown.html'),
    'layer3_mobility_selection.html':    read('layer3_mobility_selection.html'),
    'layer3_ev_v2g_mobility_output.html': read('layer3_ev_v2g_mobility_output.html'),
    'layer4_green_selection.html':       read('layer4_green_selection.html'),
    'layer4_lpv_breakdown.html':         read('layer4_lpv_breakdown.html'),
    'layer4_finish_design.html':         read('layer4_finish_design.html')
};

// The tag that carries a given id, with its attributes. Returns '' if the id is
// not on the page at all, which fails the check rather than passing it quietly.
function tagWithId(html, id) {
    const m = html.match(new RegExp('<[a-z]+[^>]*\\bid="' + id + '"[^>]*>'));
    return m ? m[0] : '';
}

// True when the element is a box itself, or sits inside one. The wrapper form is
// used where several sentences belong together and share one title.
function isBoxed(html, id) {
    const tag = tagWithId(html, id);
    if (!tag) return false;
    if (/class="[^"]*\binfo-box\b/.test(tag)) return true;
    if (!/class="[^"]*\binfo-box-line\b/.test(tag)) return false;
    // A line has to be inside an .info-box, not merely carry the class.
    const before = html.slice(0, html.indexOf(tag));
    const open = before.lastIndexOf('class="info-box');
    const close = before.lastIndexOf('</aside>');
    return open !== -1 && open > close;
}

console.log('\n== the component exists, and it is a box ==');

check('the explanation box has a rule down its left edge and a ground of its own',
    /\.info-box \{[\s\S]*?border-left: 4px solid var\(--accent-teal\)/.test(css)
    && /\.info-box \{[\s\S]*?background: rgba\(107, 168, 184/.test(css));

// Scoped to the one rule. A search across the whole stylesheet would find the
// disclaimer's amber further down and report the two as the same colour.
const infoBoxRule = (css.match(/\.info-box \{[^}]*\}/) || [''])[0];
check('it is teal, so it is not the amber disclaimer',
    /var\(--accent-teal\)/.test(infoBoxRule) && !/var\(--accent-amber\)/.test(infoBoxRule));

// Koral, on the first drawing: this is a web page, not a report. A box pinned
// to the left margin at a fixed width is the shape of a printed document. Every
// box is centred on the column and hugs its own sentence.
check('the boxes sit in the middle of the page, not on the left margin',
    /margin: 12px auto/.test(infoBoxRule) && /width: fit-content/.test(infoBoxRule));

check('no box opts out of being centred',
    !/info-box--centred/.test(css)
    && !Object.keys(PAGES).some(n => /info-box--centred/.test(PAGES[n])));

check('the caution variant is the amber one, and it is a separate rule',
    /\.info-box--caution \{[\s\S]*?border-left-color: var\(--accent-amber\)/.test(css));

check('each variant opens with its own mark',
    /\.info-box::before \{[\s\S]*?content: "i"/.test(css)
    && /\.info-box--caution::before \{[\s\S]*?content: "!"/.test(css));

check('a box with nothing in it does not render',
    /\.info-box\.info-box:empty[\s\S]{0,60}display: none/.test(css));

// This one is the trap that shipped an empty grey badge on 35 cards in session
// 10: an author rule that sets display beats the browser rule for [hidden].
// .info-box sets display: flex, so it has the same defect unless it says so.
check('display: flex does not defeat the hidden attribute',
    /\.info-box\[hidden\] \{\s*\r?\n\s*display: none;/.test(css));

check('the box survives being printed',
    /@media print \{[\s\S]{0,200}\.info-box \{/.test(css));

console.log('\n== the nine sentences Koral quoted, one by one ==');

// 1. Facade PV, layer 2 selection. The sentence lives in config, the element on
//    the page, so both ends are checked.
check('1. the facade PV restriction is in a box',
    /Facade PV is available only for the nine/.test(configJs)
    && isBoxed(PAGES['layer2_energy_selection.html'], 'pv-facade-note'));

// 2. The energy basis, layer 2 breakdown.
check('2. the site energy basis is in a box',
    isBoxed(PAGES['layer2_energy_breakdown.html'], 'energy-basis-note'));

// 3 and 4. The two PV notes, on both the current and the legacy layout. The
//    legacy layout is the one RC-HR2 still uses, so missing it would leave one
//    neighbourhood in the old drawing.
check('3. the pitched roof note is in a box, on both layouts',
    /The panels lie flush on the south facing/.test(configJs)
    && isBoxed(PAGES['layer2_pv_breakdown.html'], 'pv-roof-note')
    && isBoxed(PAGES['layer2_pv_breakdown.html'], 'pv-roof-note-legacy'));

check('4. the scenario note is in a box, on both layouts',
    isBoxed(PAGES['layer2_pv_breakdown.html'], 'pv-scenario-note')
    && isBoxed(PAGES['layer2_pv_breakdown.html'], 'pv-scenario-note-legacy'));

// 5. The reason Continue is disabled, layer 3 selection.
check('5. the reason Continue is disabled is in a box',
    /Select EV to see mobility results/.test(PAGES['layer3_mobility_selection.html'])
    && isBoxed(PAGES['layer3_mobility_selection.html'], 'mobility-submit-reason'));

// 6. The three reading notes on the EV results page, now one box with a title.
const evHtml = PAGES['layer3_ev_v2g_mobility_output.html'];
check('6. the sign, the intensity and the discharge efficiency share one box',
    isBoxed(evHtml, 'ev-sign-note')
    && isBoxed(evHtml, 'ev-intensity-note')
    && isBoxed(evHtml, 'ev-discharge-eff-note'));

check('6. that box says what it is',
    /<p class="info-box-title">How to read these numbers<\/p>/.test(evHtml));

// 7. The EV preliminary note, under the badge.
check('7. the EV preliminary note is in a box',
    /Preliminary\. These figures come from a fixed calculation chain/.test(configJs)
    && isBoxed(evHtml, 'ev-preliminary-note'));

// 8. The landscape PV notes. The usable fraction is the one figure outside its
//    published range, so it is the one that reads as a limitation.
const lpvHtml = PAGES['layer4_lpv_breakdown.html'];
check('8. the landscape PV notes are in a box',
    isBoxed(lpvHtml, 'lpv-uniformity-note') && isBoxed(lpvHtml, 'lpv-preliminary-note'));

check('8. the usable fraction is the caution box, not the explanation box',
    /info-box info-box--caution[\s\S]{0,220}id="lpv-usable-note"/.test(lpvHtml)
    && !/info-box--caution[\s\S]{0,220}id="lpv-uniformity-note"/.test(lpvHtml));

check('8. the two landscape PV boxes each say what they are',
    /How this number is built/.test(lpvHtml) && /Known limitation/.test(lpvHtml));

// 9. The two group headings on the green layer.
check('9. both group heading notes are in a box',
    /class="group-heading-note info-box">This option has a calculation method/.test(PAGES['layer4_green_selection.html'])
    && /class="group-heading-note info-box">No quantitative method exists/.test(PAGES['layer4_green_selection.html']));

console.log('\n== nothing was left behind ==');

// Every note element on every page has to be boxed now, including any this
// session did not think of. A sentence still floating loose is the defect the
// change was made to remove.
const KNOWN_LOOSE = [];
Object.keys(PAGES).forEach(name => {
    const html = PAGES[name];
    const notes = html.match(/<p[^>]*class="[^"]*\b(selection-note|group-heading-note|energy-basis-note|pv-roof-note|pv-scenario-note)\b[^"]*"[^>]*>/g) || [];
    notes.forEach(tag => {
        if (!/\binfo-box\b/.test(tag) && !/\binfo-box-line\b/.test(tag)) {
            KNOWN_LOOSE.push(name + ': ' + tag.slice(0, 70));
        }
    });
});
check('no explanation sentence is still a loose line on any page',
    KNOWN_LOOSE.length === 0, KNOWN_LOOSE.join(' | '));

// The empty state has to take the box with it. .info-box-line:empty hides the
// three sentences, but the box around them carries a title, so it would still
// draw a titled box with nothing inside.
check('the empty state hides the box, not only the sentences in it',
    /id="ev-notes-box"/.test(evHtml) && /'ev-notes-box'/.test(evJs));

console.log('\n== house rules ==');

// The standing rule, applied to what this session wrote rather than to whole
// files. css/styles.css carries em dashes in section comments that predate every
// one of these sessions, and the pages carry the site-wide em dash a cell shows
// before a script fills it. Failing on those would say nothing about this
// change, so the search is narrowed to the lines that make the boxes: the new
// stylesheet block, and every line of markup that mentions the component.
const cssBlock = css.slice(css.indexOf('Explanation boxes, session 16'));
const boxLines = [];
Object.keys(PAGES).forEach(name => {
    PAGES[name].split('\n').forEach(line => {
        if (/info-box/.test(line)) boxLines.push(name + ': ' + line.trim());
    });
});
check('the stylesheet block this session added carries no dash',
    cssBlock.length > 500 && !/[–—]/.test(cssBlock));
check('no line of the new markup carries a dash',
    boxLines.length > 15 && !boxLines.some(l => /[–—]/.test(l)),
    String(boxLines.length));

// Line endings differ per file in this repository and a rewritten file is a
// diff on every line, which hides the real change from review.
// A22, 2026-09-09: this compared \n count against \r\n count, which only
// matches a file that is entirely CRLF. `.gitattributes` (DBG-044) now
// normalises every text file to LF on checkout, so that convention is gone
// on every platform. What still matters, and is still tested here, is that
// one edit did not leave a file with both conventions mixed together.
const CRLF_FILES = ['css/styles.css'].concat(Object.keys(PAGES));
const mixed = CRLF_FILES.filter(f => {
    const s = read(f);
    const crlf = (s.match(/\r\n/g) || []).length;
    const bareLf = (s.match(/(?<!\r)\n/g) || []).length;
    return crlf > 0 && bareLf > 0;
});
check('no file this session touched mixes CRLF and bare LF line endings', mixed.length === 0, mixed.join(', '));

console.log('\n─────────────────────────────────────────────');
console.log('  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('\n  FAILURES');
    fail.forEach(f => console.log('   - ' + f));
    process.exit(1);
}
console.log('\n  ALL CHECKS PASSED\n');
