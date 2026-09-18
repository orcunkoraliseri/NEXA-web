// Final verification for session 10.
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = 'C:/Users/o_iseri/Desktop/NEXA-web';
const P = f => path.join(repo, f);

let fails = 0;
const ok = (label, cond, extra) => {
  console.log((cond ? '  PASS  ' : '  FAIL  ') + label + (extra ? '  [' + extra + ']' : ''));
  if (!cond) fails++;
};

// --- every js file parses, and the browser globals resolve in order ---
const ctx = { console, window: {}, document: { addEventListener() {} }, sessionStorage: { getItem: () => null, setItem() {} } };
vm.createContext(ctx);
for (const f of ['js/config.js', 'js/data.js']) {
  vm.runInContext(fs.readFileSync(P(f), 'utf8'), ctx, { filename: f });
}
vm.runInContext('globalThis.__C=LMN_CONFIG; globalThis.__E=ENVELOPE_ENERGY_DATA; globalThis.__N=NEIGHBOURHOODS; globalThis.__G=GFA_DATA; globalThis.__P=PV_GENERATION_DATA; globalThis.__g=getEnergyData;', ctx);
const C = ctx.__C, E = ctx.__E, N = ctx.__N, G = ctx.__G, getEnergyData = ctx.__g;
console.log('\n== load order, config.js then data.js in one context ==');
ok('both files evaluate together with no clash', true);

console.log('\n== 0.5b, config.js on every page ==');
const pages = fs.readdirSync(repo).filter(f => f.endsWith('.html'));
// LOWERED from 15 to 14 on 2026-08-12, session 15, CHV Stage 9 item 7.
// layer3_ev_breakdown.html was reachable from no page and from no script; it
// was archived to previous/ with js/ev.js, the script only it loaded. The count
// is asserted rather than the absence, so that a page cannot be added without
// this check noticing and asking whether it loads config.js.
// RAISED from 14 to 15 on 2026-08-24. comparison.html was added, the fifteenth
// root page, so the count that used to catch an accidental addition now has to
// catch one against 15, not 14.
ok('15 root pages', pages.length === 15, pages.length + ' found');
// Reads the stamp instead of naming it, since 2026-08-17, session 21. It had to
// be rewritten by hand at every publish, and it failed the build after the one
// it was written for. What is being tested is that the 14 pages agree, not what
// the number is.
const STAMP = (fs.readFileSync(P('index.html'), 'utf8').match(/js\/config\.js\?v=(\d+)/) || [])[1];
let tagged = 0, ordered = 0;
for (const p of pages) {
  const t = fs.readFileSync(P(p), 'utf8');
  if (t.includes('js/config.js?v=' + STAMP)) tagged++;
  // Anchored on the src attribute since 2026-08-17, session 20. It used to
  // search for the bare file name, so a COMMENT naming js/data.js above the
  // script tags made the page fail a load-order check it passes. A check
  // scoped to a file answers a question about the file, not about the change.
  const ci = t.indexOf('src="js/config.js'), di = t.indexOf('src="js/data.js');
  if (di < 0 || (ci >= 0 && ci < di)) ordered++;
}
ok('config.js tag on every page', tagged === pages.length, tagged + '/' + pages.length);
ok('config.js before data.js everywhere', ordered === pages.length, ordered + '/' + pages.length);

console.log('\n== 1.11, cache busting ==');
// Raised twice on 2026-08-14, session 19. v=7 shipped the framed selection and
// the 60px building icons; v=8 shipped the parameter cards back to their fill,
// which Koral asked for after seeing v=7 live. Each stamp is asserted stale so
// a returning visitor cannot be served a stylesheet from an earlier decision.
let staleTag = 0;
// WIDENED 2026-08-17: any stamp that is not the current one is stale, instead of
// a hand-written list that has to grow at every publish.
for (const p of pages) if (new RegExp('\\?v=(?!' + STAMP + '\\b)\\d+\\b').test(fs.readFileSync(P(p), 'utf8'))) staleTag++;
ok('no stamp older than the current one is left', staleTag === 0);

console.log('\n== 0.1a / DBG-016, city names ==');
const wrong = ['Windsor', 'Calgary', 'Whitehorse', 'Yellowknife'];
let leaks = [];
for (const f of ['layer1_NUs_selection.html', 'js/app.js', 'js/energy.js', 'js/energy-selection.js']) {
  const t = fs.readFileSync(P(f), 'utf8');
  for (const w of wrong) {
    // ignore the explanatory comments that name the old values
    const lines = t.split(/\r?\n/).filter(l => l.includes(w) && !l.trim().startsWith('//') && !l.trim().startsWith('*'));
    if (lines.length) leaks.push(f + ':' + w);
  }
}
ok('no wrong city in any displayed string', leaks.length === 0, leaks.join(', '));
ok('config names Fort McMurray for 7B', C.envelopeLabel('necb-z7b').includes('Fort McMurray'));
ok('all 17 envelope keys have a label', Object.keys(E).every(k => C.envelopeLabels[k]));

console.log('\n== 2.3, standard line on the seven cards ==');
const l1 = fs.readFileSync(P('layer1_NUs_selection.html'), 'utf8');
// LOWERED from seven to six on 2026-08-17, session 21. Koral took the ASHRAE
// card off the page, so six cards are offered. Both of these now read the page
// with its comments stripped: the withdrawn card survives as a commented block
// so it can be restored, and a raw string search would count it and report a
// card the visitor cannot see. That would have been a false PASS, which is
// worse than a FAIL.
// LOWERED from six to five on 2026-08-24, CHV: she does not want Chisasibi
// published in the public tool at this stage. NECB Zone 8 is withdrawn from
// the selection page the same way ASHRAE was, its markup commented out rather
// than deleted, so it can be restored.
const l1Live = l1.replace(/<!--[\s\S]*?-->/g, '');
ok('five standard lines, one per offered climate', (l1Live.match(/envelope-card-standard/g) || []).length === 5,
  String((l1Live.match(/envelope-card-standard/g) || []).length));
ok('ASHRAE 90.1 is no longer offered on the page', !l1Live.includes('>ASHRAE 90.1<'));
ok('and its markup is kept, commented, so it can come back', l1.includes('>ASHRAE 90.1<'));
ok('NECB Zone 8 is no longer offered on the page', !l1Live.includes('Chisasibi'));
ok('and its markup is kept, commented, so it can come back', l1.includes('Chisasibi'));

console.log('\n== 2.10 / DBG-022, climate guard ==');
ok('button ships disabled', /id="view-results-btn"[^>]*disabled/.test(l1));
ok('hint element present', l1.includes('id="view-results-hint"'));
ok('guard reads the config flag', fs.readFileSync(P('js/app.js'), 'utf8').includes('requireClimateSelection'));
ok('config requires a climate', C.requireClimateSelection === true);

console.log('\n== 2.4 / DBG-021, buildings and floor area ==');
ok('all 35 NUs carry buildingCount', N.filter(n => typeof n.buildingCount === 'number').length === 35);
ok('CC-FD3 is 10 buildings', N.find(n => n.code === 'CC-FD3').buildingCount === 10);
ok('CC-FD3 no longer claims a HotelLarge', !N.find(n => n.code === 'CC-FD3').content.includes('HotelLarge'));
ok('CC-FD3 no longer reads "21 RestaurantSitDown"', !N.find(n => n.code === 'CC-FD3').content.includes('21 RestaurantSitDown'));
ok('all 35 NUs have a floor area', N.every(n => typeof G[n.code] === 'number'));
const l1o = fs.readFileSync(P('layer1_output.html'), 'utf8');
ok('two new table headers', l1o.includes('Number of buildings') && l1o.includes('Floor area'));

console.log('\n== 2.5 / D2.8, two actions, no popup ==');
const app = fs.readFileSync(P('js/app.js'), 'utf8');
ok('Select this NU button', app.includes('Select this NU'));
ok('View 3D button', app.includes('View 3D'));
ok('nav-modal markup gone', !l1o.includes('id="nav-modal"'));
ok('modal setup gone', !app.includes('function setupNeighbourhoodModal'));

console.log('\n== 2.11 / D2.3, Montreal aliases ==');
ok('17 envelope keys', Object.keys(E).length === 17);
ok('necb-2017 is the same object as necb-z6', E['necb-2017'] === E['necb-z6']);
ok('high-performance-necb is the same object as high-performance-z6', E['high-performance-necb'] === E['high-performance-z6']);

console.log('\n== 3.12 / DBG-027, Zone 7B MU-HC ==');
ok('no fabricated DEFAULT', E['necb-z7b']['MU-HC'].DEFAULT === undefined);
ok('the four measures survive', ['EEM1', 'EEM2', 'EEM3', 'EEM4'].every(s => E['necb-z7b']['MU-HC'][s]));
ok('every other Z7B NU keeps its DEFAULT', Object.keys(E['necb-z7b']).filter(k => k !== 'MU-HC').every(k => E['necb-z7b'][k].DEFAULT));
ok('the gap is declared in config', !!C.dataGapFor('MU-HC', 'necb-z7b'));
ok('other NUs are not blocked', !C.dataGapFor('CC-B', 'necb-z7b'));

console.log('\n== 3.11 / DBG-024, one EUI ==');
let worst = 0;
for (const e of Object.keys(E)) for (const n of Object.keys(E[e])) for (const s of Object.keys(E[e][n])) {
  const d = E[e][n][s];
  const six = d.breakdown.reduce((a, b) => a + b.value, 0);
  const other = (d.total - six) > 0.05 ? +(d.total - six).toFixed(1) : 0;
  worst = Math.max(worst, Math.abs(six + other - d.total));
}
ok('six + Other reproduces the stored total on every cell', worst < 0.051, 'worst ' + worst.toFixed(4));
ok('energy.js renders the stored total', fs.readFileSync(P('js/energy.js'), 'utf8').includes('const filteredTotal = energyData.total'));

// D0.2 was "one efficiency everywhere, 18.65 %". Session 12 SUPERSEDED half of
// that with D4.3: 18.65 % and 20 % are not two versions of one number, they are
// the flat-roof and the pitched-roof case. The two checks below used to assert
// the old belief (no 20 % anywhere, and 35 stored strings reading 18.65 %) and
// are inverted here to assert the correction instead. Only the 18.68 %, which
// had no upstream source at all, is still forbidden outright.
// INVERTED 2026-08-24, DBG-036. CHV asked for the exact original source of
// both the 18.65 % and 20 % figures. Measured in the upstream code, neither of
// them is what produced a published result: the Tier 3 injector, at a panel
// efficiency of 23.0 %, is what ran on every neighbourhood. 18.65 % is a
// retired Tier 1 cell efficiency and 20 % is a literature reference quoted in
// PV_methodology.md, and both are now named on the page as exactly that, not
// as the tool's own efficiency. The three checks below used to assert 18.65 %
// as the stored value and 20 % / 18.65 % as the pitched / flat group figures;
// they are inverted to assert the correction instead.
console.log('\n== 0.7 / D0.2, revised by D4.3 and DBG-036: 23 % is the panel efficiency ==');
ok('config holds 23 % as the panel efficiency', C.pv.moduleEfficiencyLabel === '23 % panel efficiency');
ok('the pitched group is quoted on its active fraction, not on aperture area',
  /23 %/.test(C.pv.roofGroups.pitched.moduleEfficiencyLabel) && C.pv.roofGroups.pitched.activeFraction === 0.85);
ok('the flat group is quoted on its active fraction, not on module area',
  /23 %/.test(C.pv.roofGroups.flat.moduleEfficiencyLabel) && C.pv.roofGroups.flat.activeFraction === 1.0);
ok('18.65 % and 20 % are named only as a retired convention and a literature reference',
  /retired/i.test(C.pv.efficiencyExplanation.retired) && /18\.65/.test(C.pv.efficiencyExplanation.retired)
  && /20 %/.test(C.pv.efficiencyExplanation.retired) && /literature reference/i.test(C.pv.efficiencyExplanation.retired));
// Only the stored field and the displayed literal are forbidden. The
// documentation is allowed to NAME 18.68 % in the paragraph that explains why
// it was deleted, and js/data.js legitimately holds 18.681 as a heating value.
let stale = [];
for (const f of ['js/data.js', 'layer2_pv_breakdown.html', 'documentation.html']) {
  const t = fs.readFileSync(P(f), 'utf8');
  if (/"efficiency":\s*"18\.68%"/.test(t)) stale.push(f + ' (stored field)');
  if (f !== 'documentation.html' && /18\.68\s*%/.test(t)) stale.push(f + ' (displayed literal)');
}
ok('the unsourced 18.68 % is neither stored nor displayed', stale.length === 0, stale.join(', '));
ok('the dead per NU efficiency field is gone from data.js',
   !/"efficiency":/.test(fs.readFileSync(P('js/data.js'), 'utf8')));
ok('no page reads a per NU efficiency field',
   !/data\.efficiency|pvData\.efficiency/.test(
     fs.readFileSync(P('js/pv.js'), 'utf8') + fs.readFileSync(P('js/finish-design.js'), 'utf8')));

console.log('\n== 3.1, one name per measure, and the icon paths ==');
let iconMiss = [];
for (const g of ['load', 'demand', 'generation']) for (const k of Object.keys(C.selectionLabels[g])) {
  if (!fs.existsSync(P(C.selectionLabels[g][k].image))) iconMiss.push(g + '/' + k);
}
ok('every icon path exists on disk', iconMiss.length === 0, iconMiss.join(', '));
for (const f of ['js/sidebar.js', 'js/finish-design.js']) {
  const t = fs.readFileSync(P(f), 'utf8');
  ok(f + ' builds no icon path from a label', !/Images_Layer2_\w+\/\$\{/.test(t));
}

console.log('\n== 3.2 / D3.5, the baseline ==');
ok('every envelope key resolves a baseline', Object.keys(E).every(k => getEnergyData(C.baselineEnvelopeFor(k), 'CC-B', 'DEFAULT')));
ok('high performance keeps the standard baseline',
  getEnergyData(C.baselineEnvelopeFor('high-performance-z6'), 'CC-B', 'DEFAULT').total === E['necb-z6']['CC-B'].DEFAULT.total);
ok('1983 vintage is its own baseline', C.baselineEnvelopeFor('vintage-1983-z6') === 'vintage-1983-z6');

console.log('\n== 3.4, 3.5, the basis sentence and the assumptions box ==');
const bd = fs.readFileSync(P('layer2_energy_breakdown.html'), 'utf8');
ok('basis note element', bd.includes('id="energy-basis-note"'));
ok('comparison element', bd.includes('id="baseline-comparison"'));
ok('assumptions element', bd.includes('id="assumptions-box"'));
ok('config states site energy', C.units.energyBasis === 'site');

console.log('\n== 3.8, scenario survives Back then Next ==');
ok('the selection page restores state', fs.readFileSync(P('js/energy-selection.js'), 'utf8').includes('function restoreEnergySelections'));

console.log('\n== DBG-018, derived values ==');
const csv = fs.readFileSync(P('docs_implementation/documentation-revisions/Results/RESULT-07_RoP-values.csv'), 'utf8').trim().split(/\r?\n/);
ok('RoP table regenerated, 2974 rows plus header', csv.length === 2975, csv.length + ' lines');
ok('no page reads the null stored rop', !/pvData\.rop|data\.rop/.test(fs.readFileSync(P('js/pv.js'), 'utf8') + fs.readFileSync(P('js/finish-design.js'), 'utf8')));

console.log('\n== file hygiene ==');
// A22, 2026-09-09: this used to demand every line end in CRLF, which was the
// repository's convention when this check was written. `.gitattributes` (DBG-044)
// now normalises every text file to LF on checkout, on every platform, so that
// convention no longer exists to preserve. What the check actually protects
// against, a file with two conventions mixed together by a careless edit, still
// matters and is still tested here.
let crlfBad = [];
for (const f of ['js/data.js', 'js/config.js', 'js/app.js', 'js/energy.js', 'js/energy-selection.js'].concat(pages.map(p => p))) {
  const t = fs.readFileSync(P(f), 'utf8');
  if (/\r\n/.test(t) && /(?<!\r)\n/.test(t)) crlfBad.push(f);
}
ok('no file mixes CRLF and bare LF line endings', crlfBad.length === 0, crlfBad.join(', '));
let dashes = [];
for (const f of ['js/config.js']) {
  if (/[\u2014\u2013]/.test(fs.readFileSync(P(f), 'utf8'))) dashes.push(f);
}
ok('no em or en dash in js/config.js', dashes.length === 0, dashes.join(', '));
ok('all stored numbers still at one decimal',
  Object.keys(E).every(e => Object.keys(E[e]).every(n => Object.keys(E[e][n]).every(s => {
    const d = E[e][n][s];
    const vals = [d.total, d.pv].concat(d.breakdown.map(b => b.value));
    return vals.every(v => Math.abs(v * 10 - Math.round(v * 10)) < 1e-9);
  }))));

console.log('\n' + (fails === 0 ? 'ALL CHECKS PASSED' : fails + ' CHECK(S) FAILED'));
process.exit(fails === 0 ? 0 : 1);
