# Part 2, Historical Codebase Sims (Zones 4, 5, 7A, 7B)

Split out from `docs_implementation/default_historicalData/` on 2026-09-15, after that
session closed Part 1 (dfix DEFAULT correction, see
`docs_implementation/DONE/default_historicalData/`) and stopped at Gate B.

## Status: not started

Not blocked on anything in this repo. Blocked on upstream simulation work in
`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`.

## Why this side has nothing to do yet

Part 1 (dfix) was a **re-run**: the 24 affected NUs already existed, already had simulation
results, and the corrected CSV was delivered finished. This project is different: it is a
**new simulation campaign**, four new vintage arms (`CAN_Z4_1983`, `CAN_Z5_1983`,
`CAN_Z7A_1983`, `CAN_Z7B_1983`), 35 NUs x 16 scenarios x 4 zones, that has not been run at
all. Checked 2026-09-15: neither `HIST_NU_all_results.csv` nor `HIST_NU_results.md` exists
anywhere under `idf_reader`. There is no results file to convert into `data.js` yet.

## Gate condition (from the session prompt)

`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`,
Control list, must read Done for Stages 0 to 4 (Stage 5, Web, is this repo's job) before this
side does anything. Checked 2026-09-15: Stage 0 (Re-entry) is still TODO.

Stage summary (full detail in that plan):
- Stage 0, Re-entry: path relocation, suites green, snapshot, archetype count settled.
- Stage 1, Applier: thread the zone parameter through `create_qc1983_idf`.
- Stage 2, Baselines: build four new `Content/00.Baseline_NUs_CAN_<zone>_1983` folders.
- Stage 3, NU runs: 35 NUs x 16 cells x 4 zones on Speed (~10-12 days wall clock).
- Stage 4, Results: gates NG1-NG5, cross-zone gate, external validation, results CSV.
- Stage 5, Web (this repo): `data.js` keys, popup and names, documentation chapter, cache
  stamp. This is the only stage owned here.

## When this side picks the work back up

Reopen `docs_implementation/default_historicalData/Prompt/SESSION_PROMPT_default_historical_web.md`
Part 2 (section 3) once Gate B passes, or use the fresh prompt in this folder's `Prompt/`
subfolder, whichever is current at that time.

## Progress Log

- 2026-09-15: Folder created after the `default_historicalData` session closed Part 1 and
  confirmed Gate B still fails (Stage 0 TODO, no results CSV upstream yet). Nothing else done.
