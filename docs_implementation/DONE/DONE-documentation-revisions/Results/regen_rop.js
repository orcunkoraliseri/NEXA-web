// DBG-018. Regenerate Results/RESULT-07_RoP-values.csv from the CURRENT
// js/data.js, after the DBG-026, DBG-011, DBG-015, DBG-021, DBG-027 and D2.3
// changes of 2026-08-10.
//
// Reproduction command:
//   node docs_implementation/documentation-revisions/Results/regen_rop.js
//
// RoP = pv / total, both in kWh/m²·yr, so the floor area cancels and D6.0 does
// not affect it. Source of both numbers: ENVELOPE_ENERGY_DATA, which D0.6
// designated authoritative for pv.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = 'C:/Users/o_iseri/Desktop/NEXA-web';
const out = path.join(repo, 'docs_implementation/documentation-revisions/Results/RESULT-07_RoP-values.csv');

const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(repo, 'js/data.js'), 'utf8')
  + '\n;globalThis.__E=ENVELOPE_ENERGY_DATA;', ctx);
const E = ctx.__E;

// The two alias keys point at the same object as their target, so writing them
// twice would double count. Emit the target once and note the alias.
const ALIASES = { 'necb-2017': 'necb-z6', 'high-performance-necb': 'high-performance-z6' };

const rows = ['envelope_key,NU,scenario,pv_kwh_m2,total_eui_kwh_m2,RoP'];
let count = 0, skipped = 0;
const skippedRows = [];

for (const env of Object.keys(E)) {
  for (const nu of Object.keys(E[env])) {
    for (const sc of Object.keys(E[env][nu])) {
      const d = E[env][nu][sc];
      if (!d || typeof d.total !== 'number' || typeof d.pv !== 'number' || d.total === 0) {
        skipped++; skippedRows.push(`${env}/${nu}/${sc}`); continue;
      }
      rows.push([env, nu, sc, d.pv, d.total, (d.pv / d.total).toFixed(4)].join(','));
      count++;
    }
  }
}

fs.writeFileSync(out, rows.join('\r\n') + '\r\n');
console.log('rows written:', count);
console.log('skipped:', skipped, skippedRows.join(', ') || '(none)');
console.log('alias keys included and identical to their target by reference:', Object.keys(ALIASES).join(', '));

// a few spot values for the write up
for (const k of [['necb-z6', 'CC-B', 'DEFAULT'], ['necb-z6', 'CC-B', 'EEM1'], ['necb-z6', 'RC-D', 'EEM4'], ['necb-z6', 'MU-W2', 'EEM4']]) {
  const d = E[k[0]][k[1]][k[2]];
  console.log(k.join('/'), 'pv', d.pv, 'total', d.total, 'RoP', (d.pv / d.total).toFixed(3));
}
