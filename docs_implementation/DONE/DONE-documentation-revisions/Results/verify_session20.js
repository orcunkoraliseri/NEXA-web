/*
 * verify_session20.js
 *
 * Session 20, 2026-08-17. CHV's second reply, her eight numbered points, and
 * nothing else:
 *
 *   point 1  the ASHRAE arm is withdrawn, not renamed, and nothing is deleted;
 *            the six Canadian climates each name their own weather file
 *   point 2  the popup never shows NECB 2017 for ASHRAE; Hyper-performance and
 *            HPENV are gone; the positive-energy wording is gone; no result
 *            page falls back to Montreal
 *   point 3  Annual EUI in her words, identified as site energy, with the gas
 *            to kWh conversion documented
 *   point 4  her five cumulative scenario names, HPerf defined once, EEM keys
 *            in the technical documentation only
 *   point 5  both module efficiencies explained, with the arithmetic
 *   point 6  PV generation intensity on the heated and cooled area; facade PV
 *            preliminary, restricted, and out of the totals
 *   point 7  three results on the PV page; the technical parameters moved into
 *            Assumptions & Model Information rather than deleted
 *   point 8  the count is out of the introduction, density is consistent, and
 *            simulated is distinguished from derived
 *
 * Run from the repository root:
 *   node docs_implementation/documentation-revisions/Results/verify_session20.js
 *
 * No packages.
 *
 * Three habits carried from earlier sessions, each paid for once already.
 *
 * 1. It RUNS the pages. Most of what this session changed is invisible to a
 *    regex: a popup label written by a click handler, a page that must stop
 *    instead of drawing, a field that moved from one container to another.
 * 2. Negative checks are anchored on a selector or an element id, never on a
 *    bare string. Session 19 paid for that on a colour.
 * 3. Comments are stripped before asking whether a defect is gone, because
 *    every fix in this repository names the defect it fixes.
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

// HTML comments are stripped too, and that is not a detail. Several of this
// session's fixes are HTML, and the comment that records a fix names the string
// it removed, so an unstripped search reports every fix as undone. One of them,
// in js/sidebar.js, is an HTML comment INSIDE a JavaScript template literal,
// which a JavaScript-only stripper does not see at all.
function codeOnly(src) {
    return src
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/[^\n]*/g, '$1');
}

// Built from char codes so the audit never carries the characters it forbids.
const DASHES = new RegExp('[' + String.fromCharCode(0x2013) + String.fromCharCode(0x2014) + ']');

const configJs = read('js/config.js');
const appJs = read('js/app.js');
const pvJs = read('js/pv.js');
const energyJs = read('js/energy.js');
const sidebarJs = read('js/sidebar.js');
const layer1Html = read('layer1_NUs_selection.html');
const pvHtml = read('layer2_pv_breakdown.html');
const finishHtml = read('layer4_finish_design.html');
const indexHtml = read('index.html');
const docHtml = read('documentation.html');
const css = read('css/styles.css');

const ctx = { window: {}, document: { addEventListener() {} }, console, module: {}, URLSearchParams };
vm.createContext(ctx);
const CFG = vm.runInContext(configJs + '\n;LMN_CONFIG;', ctx);
ctx.LMN_CONFIG = CFG;
vm.runInContext(read('js/data.js'), ctx);
const ENV = vm.runInContext('ENVELOPE_ENERGY_DATA;', ctx);
const NUS = vm.runInContext('NEIGHBOURHOODS;', ctx);

const SIX = ['necb-z4', 'necb-z5', 'necb-z6', 'necb-z7a', 'necb-z7b', 'necb-z8'];

// =========================================================================
console.log('\n== point 1, the ASHRAE arm and the weather files ==');

check('every one of the six Canadian climates names an exact weather file',
    SIX.every(k => {
        const c = CFG.climates.find(x => x.key === k);
        return c && /^CAN_.+\.epw$/.test(c.weatherFile || '');
    }));
check('and every one of the six is a CWEC file, not a TMY3',
    SIX.every(k => /CWEC/.test(CFG.climates.find(x => x.key === k).weatherFile)));
check('the six files are six different files, not one repeated',
    new Set(SIX.map(k => CFG.climates.find(x => x.key === k).weatherFile)).size === 6);
check('Montreal is the Trudeau CWEC2020v2 file',
    /CAN_QC_Montreal-Trudeau\.Intl\.AP\.716270_CWEC2020v2\.epw/
        .test(CFG.climates.find(x => x.key === 'necb-z6').weatherFile));

check('the ASHRAE entry names Buffalo Niagara openly, it is not hidden',
    /Buffalo Niagara/.test(CFG.climates.find(x => x.key === 'ashrae').weatherFile));
check('the ASHRAE arm is marked withdrawn, not simulation-backed',
    CFG.climates.find(x => x.key === 'ashrae').status === 'withdrawn');
check('no climate is called simulation-backed unless it is one of the six',
    CFG.climates.filter(c => c.status === 'simulation-backed').length === 6);

check('both ASHRAE keys are withdrawn, the standard tier and the high performance one',
    !!CFG.climateWithdrawn('ashrae') && !!CFG.climateWithdrawn('high-performance-ashrae'));
// NARROWED 2026-08-24, CHV: NECB Zone 8 is withdrawn from the public tool too,
// in the same way as ASHRAE. It used to be true that all six NECB keys were
// untouched by the withdrawal; that is no longer true of Zone 8, so it is
// tested separately below instead of folded into "no Canadian key is caught".
check('no Canadian key outside Zone 8 is caught by the withdrawal',
    ['necb-z4', 'necb-z5', 'necb-z6', 'necb-z7a', 'necb-z7b']
        .concat(['necb-2017', 'high-performance-z6', 'vintage-1983-z6'])
        .every(k => !CFG.climateWithdrawn(k)));
check('NECB Zone 8 is now withdrawn, both its tiers, CHV 2026-08-24',
    !!CFG.climateWithdrawn('necb-z8') && !!CFG.climateWithdrawn('high-performance-z8'));
check('the withdrawal reaches the gate every result page already calls',
    !!CFG.dataGapFor('CC-B', 'ashrae') && !!CFG.dataGapFor('MU-C1', 'high-performance-ashrae'));
check('it is labelled with her own words, Results under revision',
    CFG.climateWithdrawn('ashrae').label === CFG.availability.underRevisionLabel);
check('the notice names the climate, not a neighbourhood',
    /is not currently offered/.test(CFG.dataGapNotice(null, 'ashrae'))
    && !/null/.test(CFG.dataGapNotice(null, 'ashrae')));
check('it is the caution box, because it stands where a result would have been',
    /info-box--caution/.test(CFG.dataGapNotice(null, 'ashrae')));

// "Do not simply rename the existing Buffalo case", her words. The opposite of
// renaming is that the data is untouched and the card is disabled.
check('NOTHING was deleted from js/data.js to withdraw it',
    !!ENV['ashrae'] && Object.keys(ENV['ashrae']).length === 35
    && !!ENV['high-performance-ashrae']);
// INVERTED 2026-08-17, Koral's decision. Until 2026-08-17 these two checks read
// "the ASHRAE card ships disabled on the page" and "and it carries the status
// label rather than vanishing". Both passed and both are now wrong: the card is
// off the page entirely. What has to hold instead is that it is gone from the
// LIVE markup, that the block survives commented so it can come back, and that
// the reason is still printed. Nothing about the data changed.
check('no live ASHRAE card is left in the climate row',
    !/data-region="ashrae"/.test(codeOnly(layer1Html)));
// INVERTED 2026-08-24. The card-status wording changed with the rest of the
// availability labels, from her earlier "Results under revision" to "Not
// available in this climate"; the check now reads the current wording.
check('and the markup survives inside a comment, so it can be restored',
    /data-region="ashrae"/.test(layer1Html)
    && /card-status">Not available in this climate/.test(layer1Html));
// LOWERED from six to five on 2026-08-24, CHV: NECB Zone 8 is withdrawn from
// the public tool the same way ASHRAE was, and its card is commented out of
// the row alongside it. A second check pins that its markup survives too.
check('exactly five climate cards are offered, all of them Canadian',
    (codeOnly(layer1Html).match(/class="envelope-card envelope-region-btn"/g) || []).length === 5);
check('and NECB Zone 8 survives inside a comment as well, so it can be restored',
    !/data-region="necb-z8"/.test(codeOnly(layer1Html))
    && /data-region="necb-z8"/.test(layer1Html));
check('the withdrawal notice names the case even with no card to point at',
    /Standard \(ASHRAE 90\.1\)/.test(CFG.envelopeLabel('ashrae'))
    && /entry\.climates\.length \? LMN_CONFIG\.envelopeLabel\(entry\.climates\[0\]\)/.test(codeOnly(appJs)));
check('a second gate stops a click even if the attribute is cleared',
    /data-permanently-disabled/.test(codeOnly(appJs))
    && /card\.disabled \|\| card\.hasAttribute/.test(codeOnly(appJs)));
check('the reason has a home under the row of cards',
    /id="envelope-withdrawn-note"/.test(layer1Html)
    && /renderWithdrawnClimateNote/.test(codeOnly(appJs)));

check('the weather file accessor resolves through the envelope, not only the climate',
    CFG.weatherFileFor('high-performance-z7a') === CFG.weatherFileFor('necb-z7a')
    && CFG.weatherFileFor('necb-2017') === CFG.weatherFileFor('necb-z6'));

// =========================================================================
console.log('\n== point 2, the four interface corrections ==');

check('the popup ships with NO standard in its markup',
    !/tier-sub">NECB 2017/.test(layer1Html) && /id="tier-sub-standard"/.test(layer1Html));
check('HPENV and Hyper-performance are gone from every shipped file',
    [layer1Html, appJs, configJs, css, docHtml, finishHtml]
        .map(codeOnly)
        .every(src => !/HPENV/.test(src) && !/[Hh]yper-performance/.test(src)));
check('the tier is defined once, in config',
    CFG.envelopeTiers.highPerformance.short === 'HPerf'
    && CFG.envelopeTiers.highPerformance.full === 'High-Performance Envelope');
check('and its definition is written for the user, not only for us',
    /High-Performance Envelope/.test(CFG.envelopeTiers.highPerformance.definition));

check('the positive-energy wording is out of the last page that carried it',
    !/positive-energy district neigh/i.test(codeOnly(layer1Html))
    && !/Design positive/i.test(layer1Html.replace(/<!--[\s\S]*?-->/g, '')));
// INVERTED 2026-08-24, item 1 of the release identity change. The product
// name became "LMN V1, Layered Modular Neighbourhood Tool" and every root
// page title was rebuilt to end in it, replacing "Layered Modular
// Neighbourhood (LMN) Tool".
check('the tab title says what the tool is instead',
    /<title>Neighbourhood Selection \| LMN V1, Layered Modular Neighbourhood Tool<\/title>/.test(layer1Html));

// The fallback. Four number-producing files must not carry it any more, and
// the link-building sites are allowed to, which is the distinction RESULT-11
// measured. Asserting the distinction, not the absence.
const NUMBER_FILES = {
    'js/energy.js': energyJs,
    'js/pv.js': pvJs,
    'js/energy-selection.js': read('js/energy-selection.js'),
    'js/finish-design.js': read('js/finish-design.js'),
    'js/sidebar.js': sidebarJs
};
for (const [name, src] of Object.entries(NUMBER_FILES)) {
    // Classified line by line. A surviving fallback is allowed only where the
    // value it produces is used to build the next page's address, never to look
    // a number up. That is the distinction RESULT-11 measured, and asserting the
    // distinction is worth more than asserting the absence: a check that simply
    // demands zero occurrences would be satisfied by a refactor nobody reviewed.
    const lines = codeOnly(src).split(/\r?\n/);
    const offenders = lines.filter(l =>
        /\|\|\s*'necb-2017'/.test(l) && !/_envelopeForNav|href|location\./.test(l));
    check(name + ' has no fallback left that feeds a number',
        offenders.length === 0, offenders.map(l => l.trim().slice(0, 60)).join(' | '));
}
check('the replacement returns an empty string, it does not invent a climate',
    CFG.selectedEnvelopeOrEmpty('', null) === ''
    && CFG.selectedEnvelopeOrEmpty('?envelope=necb-z5', null) === 'necb-z5');
check('the stop is written once, in config, so five pages cannot word it five ways',
    /No climate selected/.test(CFG.noClimateNoticeHtml())
    && /info-box--caution/.test(CFG.noClimateNoticeHtml())
    && /layer1_NUs_selection\.html/.test(CFG.noClimateNoticeHtml()));

// =========================================================================
console.log('\n== point 3, the EUI label, site energy and the gas conversion ==');

check('her label, word for word',
    CFG.units.euiLabel === 'Annual EUI (kWh/m² of heated and cooled floor area per year)');
check('the metric is identified as site energy beside the number',
    /euiLabel \+ ', site energy'/.test(codeOnly(energyJs)));
check('the plain sentence exists and says electricity plus natural gas',
    /electricity and natural gas/i.test(CFG.units.energyBasisPlain)
    && /no source or primary energy conversion/i.test(CFG.units.energyBasisPlain));
check('the gas conversion is stated with its factor',
    /277\.778/.test(CFG.units.gasConversionSentence)
    && /3\.6 MJ/.test(CFG.units.gasConversionSentence)
    && CFG.units.gasConversionFactor === 277.778);
check('it reaches the assumptions block on the energy page',
    /gasConversionSentence/.test(codeOnly(energyJs)));
check('and it is written out in the documentation, with the kBtu case too',
    /1 GJ = 277\.778 kWh/.test(docHtml) && /0\.293071/.test(docHtml));
check('the documentation states plainly that nothing is weighted by fuel',
    /Nothing is weighted by fuel/.test(docHtml));

// =========================================================================
console.log('\n== point 4, the scenario names ==');

// SHORTENED 2026-08-24, CHV: "The cumulative logic is correct, but the current
// names are too long for the interface." She replaced her own 2026-08-17
// wording with the four terms in LMN_CONFIG.abbreviations. The old names this
// check asserted are the comment above the ladder in js/config.js: "HPerf +
// Heat Pump", "HPerf + Heat Pump + DHW" and "HPerf + Heat Pump + DHW +
// Lighting/Equipment/Cooling".
const HER_NAMES = {
    DEFAULT: 'Baseline',
    EEM1: 'HPerf',
    EEM2: 'HPerf + Space HP',
    EEM3: 'HPerf + Space HP + HPWH',
    EEM4: 'HPerf + Space HP + HPWH + EEM'
};
for (const [k, v] of Object.entries(HER_NAMES)) {
    check('the user reads "' + v + '" for ' + k, CFG.eemLabel(k) === v, CFG.eemLabel(k));
}
check('the ladder is still cumulative, each rung contains the one below',
    ['EEM2', 'EEM3', 'EEM4'].every(k => CFG.eemLabel(k).indexOf('HPerf') === 0));
check('Deep Retrofit appears in no shipped string',
    !/deep retrofit/i.test(codeOnly(configJs)) && !/deep retrofit/i.test(docHtml));
check('the long descriptions name the rung below by HER name, not by the data key',
    /Everything in HPerf, plus Space HP:/.test(CFG.eemDetail('EEM2'))
    && /Everything in HPerf \+ Space HP, plus HPWH:/.test(CFG.eemDetail('EEM3'))
    && /Everything in HPerf \+ Space HP \+ HPWH, plus the EEM package:/.test(CFG.eemDetail('EEM4')));
// INVERTED 2026-08-24. Her shortened ladder renamed this rung's acronym from
// DHW to HPWH, Heat Pump Water Heater; DHW survives in LMN_CONFIG.acronyms for
// its own sake, but the ladder detail no longer spells out "domestic hot
// water", it spells out HPWH instead.
check('HPWH is spelled out once, because her shortened ladder uses that acronym',
    CFG.abbreviations.find(a => a.short === 'HPWH').full === 'Heat Pump Water Heater'
    && /Heat Pump Water Heater/i.test(CFG.eemDetail('EEM3')));
check('the four abbreviations her shortened ladder relies on are defined once',
    CFG.abbreviations.length === 4
    && CFG.abbreviations.map(a => a.short).join(',') === 'HPerf,Space HP,HPWH,EEM'
    && CFG.abbreviations.find(a => a.short === 'EEM').full === 'Energy Efficiency Measures');
check('the EEM keys survive as DATA keys, which is what js/data.js is keyed by',
    Object.keys(CFG.eemLabels).join(',') === 'DEFAULT,EEM1,EEM2,EEM3,EEM4,IAL'
    && !!ENV['necb-z6']['CC-B']['EEM1']);
// NARROWED 2026-08-17, Koral. CHV allowed the EEM keys to stay in the technical
// documentation; he asked for them out of it as well, and for the cumulative
// names in their place. One footnote survives, because js/data.js really is
// keyed that way and a reader of the raw file needs the mapping once. So the
// check is no longer "they are present" but "they are present exactly once, in
// a sentence that calls them file keys, and nowhere else on the page".
// INVERTED 2026-08-24. EEM used to appear on this page only inside the
// data-file footnote, because her ladder spelled the top rung out in full. Her
// shortened ladder brings the word EEM back as the fifth rung name and as a
// defined abbreviation (her 2026-08-17 instruction "the word EEM appears on no
// control" is her own later reversal, not a defect), so it now also appears in
// the ladder table and in the terminology legend. What still has to hold is
// that the data-key footnote survives, unchanged, and that no "Data key"
// column was reintroduced into the ladder table itself.
check('the EEM1 to EEM4 data-file footnote still names the keys',
    (function () {
        const rendered = codeOnly(docHtml);
        return /internal keys[\s\S]{0,200}EEM1[\s\S]{0,120}EEM4/.test(rendered)
            && !/<th>Data key<\/th>/.test(rendered);
    })());
check('the EEM abbreviation is defined in the terminology legend',
    /<strong>EEM<\/strong> = Energy Efficiency Measures/.test(codeOnly(docHtml)));
check('and the ladder table now carries the names alone',
    /<th>Scenario<\/th>[\s\S]{0,200}<th>What it adds<\/th>/.test(codeOnly(docHtml))
    && /<td><strong>HPerf \+ Space HP<\/strong><\/td>/.test(docHtml)
    && /<td><strong>HPerf \+ Space HP \+ HPWH \+ EEM<\/strong><\/td>/.test(docHtml));
check('the result caption reads as a name, not as a fragment',
    CFG.resultCaption('necb-z6', 'EEM2') === 'NECB Zone 6 (Montréal), HPerf + Space HP');

// =========================================================================
console.log('\n== point 5, the two PV module efficiencies ==');

// REWRITTEN 2026-08-24, DBG-036 and DBG-037. CHV asked for the exact original
// source of both 18.65 % and 20 %, and reopened the question of whether they
// are two definitions or two conventions. Measured in the upstream code,
// neither of them produced a published number: the Tier 3 injector, 23.0 %
// panel efficiency, is what ran on every neighbourhood, and 18.65 % (Tier 1,
// retired) and 20 % (a literature reference) are named for what they are, in
// the "retired" key. sameTechnology, pitched, flat and shared keep their old
// names but their content now describes the Tier 3 model, so the checks below
// are rewritten against that content rather than merely inverted in place.
const EFF = CFG.pv.efficiencyExplanation;
check('the tool states that one panel technology is assumed on every roof',
    /one panel is assumed on every roof/i.test(EFF.sameTechnology)
    && /23\.0 %/.test(EFF.sameTechnology));
check('the pitched figure names its active fraction, not aperture area',
    /23 %|0\.230/.test(EFF.pitched) && /0\.85/.test(EFF.pitched) && !/aperture/.test(EFF.pitched));
check('and it prints the arithmetic that makes the panel and the roof face agree',
    /0\.230 x 0\.85, so 19\.55 %/.test(EFF.pitched));
check('the flat figure names its source file and line',
    /pv_tier3\.py lines 617 to 623/.test(EFF.flat) && /45 degree/.test(EFF.flat));
check('the shared part of the chain is named, so the difference is bounded',
    /14 %/.test(EFF.shared) && /96 %/.test(EFF.shared));
check('both roof groups still carry their own label, D4.3 is not undone',
    CFG.roofGroupFor('RC-D').moduleEfficiencyLabel === '23 % panel, active fraction 0.85'
    && CFG.roofGroupFor('CC-B').moduleEfficiencyLabel === '23 % panel, active fraction 1.0 on the rack');
check('the retired figures are named as retired, not as the tool\'s own value',
    /18\.65 %/.test(EFF.retired) && /20 %/.test(EFF.retired) && /retired/i.test(EFF.retired));
check('the explanation reaches the PV page, not only the config',
    /efficiencyExplanation/.test(codeOnly(pvJs))
    && /id="pv-efficiency-explainer"/.test(pvHtml));
check('and the documentation carries the same arithmetic',
    /0\.230 &times; 0\.85 = 19\.55%/.test(docHtml));

// =========================================================================
console.log('\n== point 6, the PV result ==');

// INVERTED 2026-08-24, CHV's second email: "the intensity row is gone from
// the interface and total PV array area takes its place." The label this
// check used to require, "PV generation intensity (kWh/m2 of heated and
// cooled floor area per year)", is the thing that was removed; a reader could
// mistake a generation figure per square metre of FLOOR area for one per
// square metre of ARRAY. The intensity is still what the total below is
// computed from, so it survives in the assumptions block's wording, but it is
// no longer a headline result on either layout.
check('the PV generation intensity row is gone from both layouts',
    !/PV generation intensity/.test(pvHtml.replace(/<!--[\s\S]*?-->/g, '')));
check('a Total PV array area row replaces it, hidden until a value exists, on both layouts',
    (pvHtml.match(/Total PV array area/g) || []).length === 2
    && (pvHtml.match(/id="pv-area-item[^"]*"\s+hidden/g) || []).length === 2);
check('total PV generation still stands as a result, on both layouts',
    /id="pv-total-val"/.test(pvHtml) && /id="pv-total-val-legacy"/.test(pvHtml));
check('the words "gross floor area" survive nowhere on the PV page',
    !/gross floor area/.test(pvHtml.replace(/<!--[\s\S]*?-->/g, '')));

check('facade PV is preliminary', CFG.facadePv.status === 'preliminary');
check('facade PV is restricted to the nine supported neighbourhoods',
    CFG.facadePv.validNUs.length === 9);
check('facade PV is restricted to Montreal',
    CFG.facadePv.validClimates.length === 1 && CFG.facadePv.validClimates[0] === 'necb-z6');
check('facade PV is excluded from the totals', CFG.facadePv.includedInTotals === false);
check('and the gate agrees with the four flags above',
    CFG.facadePvAllowed('RC-HR1', 'necb-z6') === true
    && CFG.facadePvAllowed('RC-HR1', 'necb-z4') === false
    && CFG.facadePvAllowed('CC-B', 'necb-z6') === false);

// =========================================================================
console.log('\n== point 7, the main results ==');

const MOVED = ['pv-surface-val', 'pv-efficiency-val', 'pv-mounting-val', 'pv-gcr-val',
    'pv-gfa-val', 'pv-cond-area-val'];
const statsBar = (pvHtml.match(/<div class="pv-stats-bar">[\s\S]*?<\/div>\s*<\/div>/) || [''])[0];
check('the results bar holds three fields, not nine',
    (statsBar.match(/pv-stat-item/g) || []).length === 3, String((statsBar.match(/pv-stat-item/g) || []).length));
// INVERTED 2026-08-24. pv-generation-val, the PV generation intensity field,
// left the results bar with the intensity row itself; pv-area-val, Total PV
// array area, took its place among the three.
check('and they are the three she named',
    /pv-area-val/.test(statsBar) && /pv-total-val/.test(statsBar) && /pv-rop-val/.test(statsBar));
check('none of the six moved fields is still in the results bar',
    MOVED.every(id => statsBar.indexOf('id="' + id + '"') === -1));
// Moved, not deleted, is the instruction. Both halves are asserted.
const assumBlock = (pvHtml.match(/<details class="assumptions-details" id="pv-assumptions">[\s\S]*?<\/details>/) || [''])[0];
check('all six are present in Assumptions & Model Information',
    MOVED.every(id => assumBlock.indexOf('id="' + id + '"') !== -1));
check('her container carries her name, on both layouts',
    (pvHtml.match(/Assumptions &amp; Model Information/g) || []).length === 2);
check('the four she listed by name are there: location, weather file, area basis, model version',
    ['pv-location-val', 'pv-weatherfile-val', 'pv-areabasis-val', 'pv-modelversion-val']
        .every(id => assumBlock.indexOf('id="' + id + '"') !== -1));
check('the legacy layout got the same treatment',
    /id="pv-assumptions-legacy"/.test(pvHtml)
    && MOVED.every(id => pvHtml.indexOf('id="' + id + '-legacy"') !== -1));
check('the block opens closed, so it is accessible rather than prominent',
    /<details class="assumptions-details"/.test(pvHtml) && !/<details class="assumptions-details"[^>]*\sopen/.test(pvHtml));
check('it has a rule of its own and it is centred on the column',
    /\.assumptions-details \{/.test(css) && /margin: 1\.5rem auto 0;/.test(css));
// Session 16's trap. The empty case is already covered by the component's own
// .info-box.info-box:empty rule, so this asserts that rule still exists rather
// than adding a second one, and that the nested rule sits BELOW the component,
// where it cannot be mistaken for it by verify_session16.js.
check('an empty explanation box inside it cannot ship as an empty bordered box',
    /\.info-box\.info-box:empty[\s\S]{0,80}display: none/.test(css)
    && css.indexOf('.assumptions-details .info-box {') > css.indexOf('.info-box {'));

// KORAL, 2026-08-17, session 22. The HPerf definition in the Layer 1 popup.
// It is written in by js/app.js and it had no rule of its own, so it inherited
// text-align: center and the 1rem size off .envelope-popup-content and read as
// a centred ragged block. The lesson is general: a paragraph that a script
// writes into an empty element is the one paragraph nobody sees while styling,
// so the class it carries has to be asserted to exist.
const popupNoteRule = (css.match(/\.envelope-popup-note \{[\s\S]*?\}/) || [''])[0];
check('the popup definition paragraph has a rule of its own',
    popupNoteRule.length > 0);
check('it takes the reading face the other explanation boxes take',
    /font-family: var\(--font-body\);/.test(popupNoteRule));
check('and --font-body is actually defined, not an invalid value falling back',
    /--font-body:\s*var\(--font-primary\);/.test(css));
check('it is set as a paragraph, justified, not centred off the popup',
    /text-align: justify;/.test(popupNoteRule) && /hyphens: auto;/.test(popupNoteRule));
check('it matches the explanation size and colour, 0.8rem and text-secondary',
    /font-size: 0\.8rem;/.test(popupNoteRule) && /color: var\(--text-secondary\);/.test(popupNoteRule));
check('and empty, before the popup is first opened, it is not a bare rule',
    /\.envelope-popup-note:empty \{[\s\S]{0,60}display: none/.test(css));
check('the paragraph it styles is still the one js/app.js writes into',
    /class="envelope-popup-note" id="envelope-popup-hperf-definition"/.test(layer1Html)
    && /getElementById\('envelope-popup-hperf-definition'\)/.test(codeOnly(appJs)));

check('the four PV parameter rows have left the Layer 4 summary card',
    ['l2-pv-surface', 'l2-pv-efficiency', 'l2-pv-gcr', 'l2-pv-mounting']
        .every(id => finishHtml.indexOf('id="' + id + '"') === -1));
check('and the setText calls that filled them are gone, not left as silent no-ops',
    ['l2-pv-surface', 'l2-pv-efficiency', 'l2-pv-gcr', 'l2-pv-mounting']
        .every(id => codeOnly(read('js/finish-design.js')).indexOf("setText('" + id + "'") === -1));
check('the summary still shows the results she kept',
    /id="l2-eui-val"/.test(finishHtml) && /id="l2-pv-total"/.test(finishHtml)
    && /id="l2-pv-rop"/.test(finishHtml));
check('the EUI row is named as a metric, not as a "score"',
    /Annual EUI/.test(finishHtml) && !/Calculated EUI Score/.test(codeOnly(finishHtml)));

// =========================================================================
console.log('\n== point 8, the four other corrections ==');

check('the count is out of the introduction',
    !/fixed set of 35/.test(indexHtml.replace(/<!--[\s\S]*?-->/g, '')));
check('and the pre-feasibility scope survives it',
    /pre-feasibility comparison tool/.test(indexHtml)
    && /does not design a neighbourhood/.test(indexHtml));

check('density is one vocabulary everywhere',
    new Set(NUS.map(n => n.density)).size === 3
    && ['low', 'medium', 'high'].every(v => NUS.some(n => n.density === v)));
check('and the empty placeholder is the site-wide one, not "N/A"',
    !/N\/A/.test(codeOnly(sidebarJs))
    && (codeOnly(sidebarJs).match(/\|\| '&mdash;'/g) || []).length === 4);
// There is no FAR in the tool. Asserting it, so that a future FAR cannot appear
// unlabelled and this claim to CHV cannot rot.
check('no FAR is computed or displayed anywhere',
    ![appJs, pvJs, energyJs, sidebarJs, read('js/finish-design.js')]
        .some(src => /\bFAR\b/.test(codeOnly(src))));

const P = CFG.provenance;
// INVERTED 2026-08-24, CHV's section 4 item 4: "When a result is calculated
// from another simulated scenario, label it Derived from simulation rather
// than Simulation-backed." The single word "Derived" is replaced by that
// phrase; the classification itself, simulated versus derived, is unchanged.
check('simulated and derived from simulation are defined once',
    P.simulatedLabel === 'Directly simulated' && P.derivedLabel === 'Derived from simulation');
check('the EUI and the PV intensity are marked simulated',
    P.results.eui.kind === 'simulated' && P.results.pvIntensity.kind === 'simulated');
check('the six derived results are marked derived, each naming its source or decision',
    ['pvTotal', 'highPerfBase', 'rop', 'landscapePv', 'evV2g', 'facadePv']
        .every(k => P.results[k].kind === 'derived' && /D\d|DBG|RT01/.test(P.results[k].note)));
check('the distinction reaches the PV page',
    /id="pv-provenance-note"/.test(pvHtml) && /provenance/.test(codeOnly(pvJs)));
check('and the energy page, where the high performance baseline is the derived one',
    /highPerfBase/.test(codeOnly(energyJs)));

// =========================================================================
console.log('\n== running the pages ==');

function stubEl() {
    return {
        textContent: '', innerHTML: '', hidden: false, href: '', src: '', title: '',
        style: {}, classList: { add() {}, remove() {}, contains() { return false; } },
        addEventListener() {}, removeAttribute() {}, getAttribute() { return null; },
        setAttribute() {}, hasAttribute() { return false; }, disabled: false,
        querySelector() { return null; }, querySelectorAll() { return []; },
        complete: true, naturalWidth: 1, dataset: {}
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

// --- the withdrawn arm, reached by a typed address ------------------------
const pvAshrae = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=CC-B&envelope=ashrae', SEL);
check('the PV page runs on the withdrawn arm', pvAshrae.ok, pvAshrae.err);
check('and it stops with the reason instead of drawing a result',
    /info-box--caution/.test(pvAshrae.main.innerHTML)
    && /United States reference case/.test(pvAshrae.main.innerHTML));
check('no PV intensity is written for the withdrawn arm',
    pvAshrae.els['pv-generation-val'] === undefined
    || pvAshrae.els['pv-generation-val'].textContent === '');

const finAshrae = pageRun('js/finish-design.js', 'initSummaryPage()',
    '?neighbourhood=CC-B&envelope=high-performance-ashrae', SEL);
check('the Layer 4 summary runs on the withdrawn arm', finAshrae.ok, finAshrae.err);
check('and it stops too, which is the page that is always forgotten',
    /info-box--caution/.test(finAshrae.main.innerHTML));

// --- no climate at all ----------------------------------------------------
const pvNone = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=CC-B', {});
check('the PV page runs with no climate', pvNone.ok, pvNone.err);
check('and it stops instead of drawing Montreal',
    /No climate selected/.test(pvNone.main.innerHTML));
check('the stop offers the way back rather than a dead end',
    /layer1_NUs_selection\.html/.test(pvNone.main.innerHTML));

const finNone = pageRun('js/finish-design.js', 'initSummaryPage()', '?neighbourhood=CC-B', {});
check('the Layer 4 summary runs with no climate', finNone.ok, finNone.err);
check('and it stops as well', /No climate selected/.test(finNone.main.innerHTML));

// --- a live pair, so the gates are proved not to over-fire ----------------
const pvLive = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=CC-B&envelope=necb-z6', SEL);
check('the PV page still runs on a live pair', pvLive.ok, pvLive.err);
// INVERTED 2026-08-24. pv-generation-val, the PV intensity field, is gone from
// the page; pv-total-val, Total PV generation, is what still proves the page
// draws a result, since the intensity remains what that total is computed from.
check('and it still draws a PV generation total',
    pvLive.els['pv-total-val'] && /[0-9]/.test(pvLive.els['pv-total-val'].textContent));
check('the assumptions block is filled, not left with its placeholders',
    pvLive.els['pv-weatherfile-val']
    && /CAN_QC_Montreal-Trudeau/.test(pvLive.els['pv-weatherfile-val'].textContent));
check('the location is named in words',
    pvLive.els['pv-location-val'] && /Montr/.test(pvLive.els['pv-location-val'].textContent));
check('the model and data version is named',
    pvLive.els['pv-modelversion-val']
    && /option_9_j_20260707_v2/.test(pvLive.els['pv-modelversion-val'].textContent));
// INVERTED 2026-08-24, DBG-036/DBG-037. The arithmetic printed on the page is
// now the Tier 3 panel figure against the pitched roof active fraction.
check('the efficiency explainer is written on the page',
    pvLive.els['pv-efficiency-explainer']
    && /0\.230 x 0\.85, so 19\.55 %/.test(pvLive.els['pv-efficiency-explainer'].innerHTML));
// Case-insensitive: the labels are lower-cased mid-sentence on the page, which
// is a wording choice and not the thing being tested.
check('the provenance note distinguishes the three numbers',
    pvLive.els['pv-provenance-note']
    && /directly simulated/i.test(pvLive.els['pv-provenance-note'].innerHTML)
    && /derived/i.test(pvLive.els['pv-provenance-note'].innerHTML)
    && /PV generation intensity/.test(pvLive.els['pv-provenance-note'].innerHTML));
// INVERTED 2026-08-24, DBG-036. CC-B is a flat roof neighbourhood, and the
// flat group's label carries the corrected panel figure rather than 18.65 %.
check('the four moved parameters are still being written, into their new home',
    pvLive.els['pv-efficiency-val']
    && pvLive.els['pv-efficiency-val'].textContent === '23 % panel, active fraction 1.0 on the rack'
    && pvLive.els['pv-gcr-val'] && pvLive.els['pv-gcr-val'].textContent !== '');

// A house, so the pitched roof group is proved to still reach the page.
const pvHouse = pageRun('js/pv.js', 'initPVPage()', '?neighbourhood=RC-D&envelope=necb-z6', SEL);
// INVERTED 2026-08-24, DBG-036. RC-D is a pitched roof neighbourhood, and its
// label now carries the corrected panel figure at its own active fraction.
check('a pitched roof neighbourhood still gets its own parameters',
    pvHouse.ok && pvHouse.els['pv-efficiency-val']
    && pvHouse.els['pv-efficiency-val'].textContent === '23 % panel, active fraction 0.85', pvHouse.err);
check('and its ground coverage ratio still says it does not apply',
    pvHouse.els['pv-gcr-val'] && /Does not apply/.test(pvHouse.els['pv-gcr-val'].textContent));

// --- the Layer 1 popup ----------------------------------------------------
// The defect was one hard coded string that was right for six regions out of
// seven, so the check runs the handler on ASHRAE and on a NECB zone.
const cards = [];
function cardStub(region) {
    const el = stubEl();
    el.dataset = { region: region };
    el.querySelector = () => ({ innerText: region });
    el.addEventListener = (evt, fn) => { cards.push({ region, fn, el }); };
    return el;
}
(function runPopup() {
    const els = {};
    // These two cards are stubs, not a reading of the page. Since 2026-08-17 no
    // ASHRAE card exists in layer1_NUs_selection.html at all, and the check
    // above proves that. What is still worth testing here is js/app.js: if the
    // commented block is ever restored, the handler must still refuse the click
    // and must still name ASHRAE 90.1 rather than NECB 2017. That is the defect
    // her point 2 was about, and it must not come back with the card.
    const regionCards = ['ashrae', 'necb-z6'].map(cardStub);
    const c = {
        console, URLSearchParams, Date,
        window: { location: { search: '', href: '' }, addEventListener() {} },
        sessionStorage: { getItem() { return null; }, setItem() {} },
        document: {
            addEventListener() {},
            getElementById(id) { if (!els[id]) els[id] = stubEl(); return els[id]; },
            querySelectorAll(sel) {
                if (sel === '.envelope-region-btn') return regionCards;
                if (sel === '.envelope-tier-btn') return [];
                return [];
            },
            querySelector() { return null; },
            createElement() { return stubEl(); },
            body: { appendChild() {} }
        },
        activeFilters: { envelope: null }
    };
    vm.createContext(c);
    c.LMN_CONFIG = vm.runInContext(configJs + '\n;LMN_CONFIG;', c);
    let ok = true, err = '';
    try {
        vm.runInContext(read('js/app.js'), c);
        vm.runInContext('setupEnvelopeCards();', c);
    } catch (e) { ok = false; err = e.message; }
    check('the envelope card handler runs', ok, err);

    check('the high performance tier is written from config, not from the markup',
        els['tier-label-hperf'] && els['tier-label-hperf'].textContent === 'HPerf'
        && els['tier-sub-hperf'] && els['tier-sub-hperf'].textContent === 'High-Performance Envelope');
    check('and HPerf is defined for the user in the same popup',
        els['envelope-popup-hperf-definition']
        && /High-Performance Envelope/.test(els['envelope-popup-hperf-definition'].textContent));
    // INVERTED 2026-08-17, on Koral's instruction. It used to believe the box
    // under the climate row had to carry the withdrawal reason, which was true
    // while the ASHRAE card was on the page. Session 21 took the card off, and
    // the box was then explaining an option the visitor never saw. The entry
    // carries showOnSelection: false and the element ships empty. What must
    // still hold is that the REASON is not lost: the gate below prints it.
    check('the box under the cards is empty, the withdrawal is not narrated',
        els['envelope-withdrawn-note']
        && !/United States reference case/.test(els['envelope-withdrawn-note'].innerHTML));
    check('and the reason is still printed where it stops somebody',
        /United States reference case/.test(CFG.dataGapNotice(null, 'ashrae'))
        && /United States reference case/.test(CFG.dataGapNotice('RC-D', 'high-performance-ashrae')));
    check('the flag is what silences it, so one word restores the box',
        CFG.withdrawnClimates[0].showOnSelection === false
        && /showOnSelection !== false/.test(codeOnly(appJs)));

    const necb = cards.find(x => x.region === 'necb-z6');
    if (necb) { necb.fn(); }
    check('clicking a NECB zone shows NECB 2017 in the popup',
        els['tier-sub-standard'] && els['tier-sub-standard'].textContent === 'NECB 2017',
        els['tier-sub-standard'] ? els['tier-sub-standard'].textContent : 'not written');

    // The ASHRAE card ships disabled, so the handler must refuse it. Its
    // standard must not be NECB 2017 either way, which is the whole of her
    // point 2 first bullet.
    const ash = cards.find(x => x.region === 'ashrae');
    if (ash) { ash.el.hasAttribute = () => true; ash.fn(); }
    check('clicking the withdrawn ASHRAE card does NOT open the popup on it',
        els['tier-sub-standard'].textContent === 'NECB 2017');

    // And if it were ever re-enabled, the label would follow the region.
    if (ash) { ash.el.hasAttribute = () => false; ash.el.disabled = false; ash.fn(); }
    check('and if it were re-enabled it would read ASHRAE 90.1, never NECB 2017',
        els['tier-sub-standard'].textContent === 'ASHRAE 90.1',
        els['tier-sub-standard'].textContent);
})();

// =========================================================================
console.log('\n== nothing that was right was broken ==');

check('js/data.js was not opened: every stored energy value is still at one decimal',
    (function () {
        let bad = 0;
        for (const env of Object.keys(ENV)) {
            for (const nu of Object.keys(ENV[env])) {
                for (const sc of Object.keys(ENV[env][nu])) {
                    const t = ENV[env][nu][sc] && ENV[env][nu][sc].total;
                    if (typeof t === 'number' && Math.round(t * 10) / 10 !== t) bad++;
                }
            }
        }
        return bad === 0;
    })());
check('all 35 neighbourhoods survive', NUS.length === 35);
check('the seventeen envelope keys survive', Object.keys(ENV).length === 17);
// GROWN from four to five on 2026-08-24, CHV's section 4 item 4: "Derived from
// simulation" is added as its own release term, distinct from
// "Simulation-backed", rather than folded into it.
check('the status terms are still hers and now five',
    CFG.statusTerms.length === 5);

// The stamp moves with the build, because a returning visitor holds the old
// file. Session 19 bumped twice in one hour for exactly this reason.
const ROOT_PAGES = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
// RAISED from 14 to 15 on 2026-08-24: comparison.html is the fifteenth root
// page.
check('15 root pages', ROOT_PAGES.length === 15, String(ROOT_PAGES.length));
// Read the stamp rather than naming it, so the check does not have to be edited
// on every publish. What matters is that all 15 pages agree: a page left behind
// serves an old script against a new one, which is the bug this guards.
const STAMP = (read('index.html').match(/js\/config\.js\?v=(\d+)/) || [])[1];
check('the build carries a cache stamp', !!STAMP, String(STAMP));
check('and every root page is on the same one, none left behind',
    ROOT_PAGES.every(p => !read(p).includes('js/config.js')
        || read(p).includes('js/config.js?v=' + STAMP)), 'stamp v=' + STAMP);
check('no earlier stamp survives anywhere',
    ROOT_PAGES.every(p => !new RegExp('\\?v=(?!' + STAMP + '\\b)\\d+\\b').test(read(p))));

// Scoped to the text this session wrote, not to whole files. A dash audit over
// a whole stylesheet answers a question about the stylesheet.
const NEW_TEXT = [
    CFG.climateWithdrawn('ashrae').reason,
    CFG.noClimateNotice.reason,
    CFG.units.gasConversionSentence,
    CFG.units.energyBasisPlain,
    CFG.units.euiLabel,
    EFF.sameTechnology, EFF.pitched, EFF.flat, EFF.shared,
    CFG.envelopeTiers.highPerformance.definition
].concat(Object.values(CFG.eemLabels))
 .concat(Object.values(P.results).map(r => r.note));
check('no em dash or en dash in anything this session wrote',
    !NEW_TEXT.some(t => DASHES.test(t)),
    (NEW_TEXT.find(t => DASHES.test(t)) || '').slice(0, 60));

// =========================================================================
console.log('\n' + '='.repeat(60));
console.log('  checks passed : ' + pass);
console.log('  checks failed : ' + fail.length);
if (fail.length) {
    console.log('\n  FAILURES');
    fail.forEach(f => console.log('   - ' + f));
    process.exitCode = 1;
} else {
    console.log('  ALL CHECKS PASSED');
}
