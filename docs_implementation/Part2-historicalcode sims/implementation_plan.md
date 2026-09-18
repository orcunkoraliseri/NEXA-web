# Part 2, Historical Codebase Sims (Zones 4, 5, 7A, 7B)

Split out from `docs_implementation/default_historicalData/` on 2026-09-15, after that
session closed Part 1 (dfix DEFAULT correction, see
`docs_implementation/DONE/default_historicalData/`) and stopped at Gate B.

## Status: not started (correction below)

Not blocked on anything in this repo. Blocked on upstream simulation work in
`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`.
More of that upstream work is done than first thought; see the 2026-09-15 correction in the
Progress Log. Still nothing to do on this side: the results CSV does not exist yet.

## Why this side has nothing to do yet

Part 1 (dfix) was a **re-run**: the 24 affected NUs already existed, already had simulation
results, and the corrected CSV was delivered finished. This project is different: it is a
**new simulation campaign**, four new vintage arms (`CAN_Z4_1983`, `CAN_Z5_1983`,
`CAN_Z7A_1983`, `CAN_Z7B_1983`), 35 NUs x 16 scenarios x 4 zones. Checked 2026-09-15: neither
`HIST_NU_all_results.csv` nor `HIST_NU_results.md` exists anywhere under `idf_reader`. There is
no results file to convert into `data.js` yet, regardless of how much of the upstream pipeline
is otherwise ready.

## Gate condition (from the session prompt)

`idf_reader/docs_ACTIVE/HistoricalCodebaseSims/HistoricalCodebaseSims_Implementation_Plan.md`,
Control list, must read Done for Stages 0 to 4 (Stage 5, Web, is this repo's job) before this
side does anything.

**Correction, 2026-09-15 (see Progress Log):** the first read of that Control list on
2026-09-15 took its TODO markers at face value. The table had not been kept in sync with that
plan's own Progress Log: Stage 0 (Re-entry) and Stage 1 (Applier) were actually done on
2026-09-10 and 2026-09-11, and Stage 2 (Baselines) is done through B-3, only B-4 (single-
building smoke runs) outstanding. Gate G-0 (the dependency on `default_sims_fix`) is also now
closed, since Part 1 of this session's own work satisfies its conditions. Fixed the stale table
in place upstream. **Still TODO: B-4, all of Stage 3 (the Speed campaign that actually produces
the historical results, 35 NUs x 16 cells x 4 zones, ~10-12 days wall clock) and all of Stage 4
(results and gates).** No results file exists until Stage 4 finishes, so this repo's status is
unchanged: nothing to do yet, just closer than the first read suggested.

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
- 2026-09-15 (correction): re-read `HistoricalCodebaseSims_Implementation_Plan.md`'s own
  Progress Log, not just its Control list table. Stages 0 and 1 were done 2026-09-10/11; Stage
  2 is done through B-3; Gate G-0 is now closed (its two upstream conditions are satisfied by
  `default_sims_fix`'s 2026-09-15 closeout, which this session's Part 1 work is). Wrote the
  closing entry and fixed the stale Control list table in that plan directly, and added this
  folder's path there so the next `idf_reader` session on that track knows where the web-side
  handoff lands. Still nothing to do here: B-4, Stage 3 (the Speed campaign) and Stage 4
  (results) remain, and `HIST_NU_all_results.csv` does not exist yet.
