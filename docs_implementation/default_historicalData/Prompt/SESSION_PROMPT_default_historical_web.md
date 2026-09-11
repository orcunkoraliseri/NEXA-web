# Session prompt: DEFAULT correction and historical datasets into LMN-web

**Open a new session by pasting this file's path and nothing else.** Written 2026-09-10,
before the simulations existed. Two upstream campaigns in `idf_reader` must be finished
before this prompt is used; the two gate checks in section 1 say how to tell.

## 0. Rules for this session

* Read `CLAUDE.md` at the repo root first. Chat in English, 1 to 3 sentences, no em dash,
  max ~80 words per reply. Findings go in the task doc, not chat.
* Every value put on the site traces to `idf_reader/docs_DONE/docs_LMN_web`. Nothing is
  typed by hand, nothing is "corrected" in this repo. If a number looks wrong, it is
  reported upstream, not edited here.
* No CDN, no build step. Any css/js change bumps the `?v=N` cache stamp on all fifteen pages
  in the same commit. Commit only when Koral asks.
* Cheap models for scanning and file peeks. Read `js/data.js` and `documentation.html` only
  with targeted offsets, never whole (80,000+ lines and 100 KB).
* The task doc for this work is `docs_implementation/default_historicalData/implementation_plan.md`
  (create it at step 2, mirror the structure of `DONE/DONE-1983-NECB-Zone6/implementation_plan.md`).
  Append a Progress Log row after every step; never reformat earlier rows.

## 1. Gate checks, do these before anything else

**Gate A, DEFAULT correction shipped.** Open
`idf_reader/docs_ACTIVE/default_sims_fix/Default_Sims_Fix_Implementation_Plan.md`, section
"Execution log". It must contain a closeout entry naming the fix commit, the exact NU x zone
list re-run, and the master CSV date. If that entry is missing, stop and tell Koral in one line.

**Gate B, historical arms returned.** Open
`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`.
Its Control list must read Done for Stages 0 to 4 (Stage 5 is this session), and
`submit/HIST_NU_all_results.csv` plus `HIST_NU_results.md` must exist in the location the
plan's V-4 names. If Gate B fails but Gate A passes, do Part 1 only and stop.

Both plans were written 2026-09-10, when Zone 6 was the only historical tier on the site and
the stamp was `?v=29`. Check the current stamp with a grep before assuming anything.

## 2. Part 1, DEFAULT correction into data.js

Upstream fact: the DEFAULT build path skipped NECB equipment baselining for three sector
families (`Small_Retail_V2210`, `Supermarket_V22.1`, `ASHRAE_HighRise_ST15/ST20`). Affected
NUs were at least MU-C1, CC-S1, CC-S2, MU-S1, MU-S2, CC-B, MU-C2, MU-U1, across zones; the
final list is the one in Gate A's closeout entry, not this one.

1. Take the corrected rows from the file named in the closeout entry (expected: the zone rows
   of `LMN_national_NU_master.csv` or a per-fix CSV under `docs_DONE/docs_LMN_web`).
2. Replace only `ENVELOPE_ENERGY_DATA["necb-z*"][NU]["DEFAULT"]` for the listed NU x zone
   pairs: `total` and the six `breakdown` entries (Heating, Cooling, DHW, Lighting,
   Equipment, Fans & Pumps) plus the PV value if the row carries one. EEM1 to EEM4 stay
   untouched unless the closeout entry says they were re-run too.
3. Check: for each replaced pair, Equipment changed and DHW, Lighting, Fans are within
   rounding of the old value. Print a before/after table into the task doc, not chat.
4. If any listed NU has no DEFAULT entry (known: MU-HC under `necb-z7b`), fill it from the
   same source and log it as a gap closed, not a correction.
5. Check the site loads: `layer1_NUs_selection.html` card totals, `layer2` energy view for two
   corrected NUs, `comparison.html` untouched (it is offline, code commented out, leave it).

## 3. Part 2, historical tiers for Zones 4, 5, 7A, 7B

Mirror `DONE/DONE-1983-NECB-Zone6/walkthrough.md` step by step. The Zone 6 tooling lives in
`Templates/1983-Quebec/` (`convert_1983_csv.py`, `add_vintage_to_neighbourhoods.py`,
`insert_data.py`); copy them into `Templates/1983-National/` and parameterise by arm, do not
edit the Zone 6 copies.

Arms and keys:

| Arm in CSV | data.js key | Region key | Popup shows button |
|---|---|---|---|
| `CAN_Z4_1983` | `vintage-1983-z4` | `necb-z4` | yes |
| `CAN_Z5_1983` | `vintage-1983-z5` | `necb-z5` | yes |
| `CAN_Z7A_1983` | `vintage-1983-z7a` | `necb-z7a` | yes |
| `CAN_Z7B_1983` | `vintage-1983-z7b` | `necb-z7b` | yes |

Zone 8 has no arm in this campaign (plan OD-3); `necb-z8` keeps only Standard and HPENV.

Steps, one Progress Log row each:

1. **Data.** Convert `HIST_NU_all_results.csv` per arm with the same EEM ladder map
   (`EEM_J_DEFAULT` to DEFAULT, `..._ENVELOPE` EEM1, `..._ENV_HVAC` EEM2, `..._ENV_HVAC_DHW`
   EEM3, `..._ENV_HVAC_DHW_EEM4` EEM4). Expect 35 NUs x 5 scenarios per arm. Append four
   `ENVELOPE_ENERGY_DATA["vintage-1983-z*"] = {...}` blocks after the Zone 6 block (search
   `ENVELOPE_ENERGY_DATA["vintage-1983-z6"]`), and add the four keys to every neighbourhood's
   `envelope` array in `NEIGHBOURHOODS`. Run the brace and key checks in `Templates/1983-Quebec/`.
2. **Config.** In `js/config.js`, extend the four maps that carry `vintage-1983-z6` (display
   name at line ~288, self-map at ~318, region map at ~339, tier text `vintage1983` at ~871).
   Label per plan OD-2: "1983" with sub-label "Vintage stock 1975-1995" on all five cards. The
   definition text must say the four new tiers are the Quebec 1983 level carried to each zone
   by the MNEC 1997 ratio, not that zone's own 1983 code, and drop "available for Montreal only".
3. **Popup and app.** In `js/app.js`, `getEnvelopeValue` (~209) and `parseEnvelopeValue`
   (~226) currently hardwire `z6`; make them zone-aware. The `#tier-btn-1983` visibility test
   (~350) and the selection check (~518) must accept the five regions with a historical arm.
4. **Downstream.** `js/energy-selection.js` and `js/energy.js` display-name maps, same four keys.
5. **Documentation.** `documentation.html` Section L (search `Section L: 1983`): add the four
   zones, the transfer rule in one paragraph, the provenance sentence, and links to the new
   validation PDFs. Copy `HIST_NU_validation_*.pdf` and `vintage_code_years_and_sources.pdf`
   from the plan's V-3/V-4 locations into `Content/References & Methodology/Reports/`.
6. **Stamp and check.** Bump `?v=N` on all fifteen pages. Open each of the five regions in
   the popup, pick 1983, confirm the card badge, the Layer 2 totals and the Layer 4 EEM ladder
   for one NU per zone against the CSV. Write the 5-zone spot check in the task doc.
7. **Closeout.** Write `walkthrough.md` next to the plan, move the folder to
   `DONE/DONE-default-historicalData/`, and append one row to the documentation-revisions
   round table if that file is still the living log. Do not commit; tell Koral it is ready.

## 4. What this session does not do

* No new simulations, no value edits by hand, no reopening of the transfer rule (decision of
  2026-08-07, final).
* No Comparison Mode work: it is offline by decision of 2026-09-10 and stays commented out.
* No Zone 8 historical tier.
* No email to CHV from this session; results go to her through the normal round letter.
