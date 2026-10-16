# Front Page HPerf Selection: Feasibility

Date: 2026-10-14. Status: evaluation only, no code changed.

## Request

The front page shows two pathways: "Existing Neighborhood" and "New Neighborhood" (disabled, "Not modelled yet"). The supervisor asks to put the HPerf (HPENV) selection on the front page instead of "Not modelled yet", and for existing neighbourhoods to offer only 1983 and Standard (NECB 2017).

## Verdict

Feasible, small change, no new simulation data needed.

## Current state

- Front page (`index.html:34-57`): two buttons. "New Neighborhood" is hard-coded as disabled with the label "Not modelled yet" (`index.html:49-56`). Get Started only enables for "existing" (`index.html:133-139`).
- Nothing is passed from the front page to Layer 1. Navigation is a plain `layer1_NUs_selection.html` link (`index.html:154`).
- Layer 1 shows the "Select Performance Level" popup with 1983, Standard, HPerf (`layer1_NUs_selection.html:228-261`, `js/app.js:326-369`). The same three tiers appear for every region and neighbourhood.
- The chosen tier becomes an envelope key (`necb-z6`, `high-performance-z6`, `vintage-1983-z6`), stored in sessionStorage (`app.js:580-583`) and read by all later pages. Later pages need no change.

## Data coverage

- HPerf data exists for all 35 neighbourhood types in all six NECB zones (`js/data.js`, `ENVELOPE_ENERGY_DATA`).
- 1983 data exists for 35 types in five zones (Z4, Z5, Z6, Z7A, Z7B). Only Montreal (Z6) is visible: `HISTORICAL_TIER_REGIONS = ['necb-z6']` (`app.js:205`). Adding a region is a one-line change once released.
- Known gaps (`config.js:372-435`) are unaffected by this change.

## Proposed design

1. `index.html`: enable the second pathway (label to be agreed, see decision) and remove "Not modelled yet". Store the pathway (`existing` or `new`) in sessionStorage on Get Started.
2. `js/app.js` (popup, `setupEnvelopeCards`): read the pathway. Existing shows 1983 (Montreal only for now) and Standard. New shows HPerf only.
3. Missing pathway (direct link, reviewer `?key=` entry, back button): fall back to the current behaviour, all tiers shown.
4. Clear any stored envelope when the pathway changes, so a stale HPerf key cannot carry into the existing pathway.
5. Bump the `?v=N` cache stamp on all pages in the same commit.

Files touched: `index.html`, `js/app.js`, possibly `layer1_NUs_selection.html` (popup wording), plus the stamp bump across pages. Layers 2 to 4 and comparison stay as they are.

## Risks and notes

- Wording: HPerf is a high-performance envelope applied to the same 35 existing archetypes, not a separately modelled new neighbourhood. Labelling it "New Neighborhood" may overstate what the model does.
- Outside Montreal, the existing pathway would show Standard only until 1983 goes live there, so a one-card popup appears. Acceptable, or auto-select it.
- Config comment at `config.js:1779` says HPerf has no DEFAULT row, but `data.js` has one. Not a blocker, worth a later check.
- `app.js`, `config.js`, `data.js` have uncommitted edits in the working tree. Commit or stash before starting.
- Checked against the local repo, not the live site. Not tested in a browser.

## Decision

Pathway name for HPerf on the front page. Recommendation: keep "New Neighborhood" only if the supervisor accepts that it means "high-performance envelope"; otherwise rename it to "High-Performance Envelope".

## Progress Log

| Date | Step | Result |
|---|---|---|
| 2026-10-14 | Gate | CHV agreed: HPENV out of the existing path, kept under new neighbourhoods. Front page keeps the "New Neighborhoods" label. |
| 2026-10-14 | 1. `index.html` | Second button enabled, "Not modelled yet" removed, label "New Neighborhoods". Get Started enables for either choice. Click writes `nexaPathway` (try/catch) and clears `selectedEnvelope` and `activeFilters` when the pathway changed. |
| 2026-10-14 | 2. `js/app.js` popup | Reads `nexaPathway`. existing: Standard, plus 1983 where released, no HPerf and no HPerf note. new: HPerf only. Missing: all tiers, as before. |
| 2026-10-14 | 3. Stale key | Handled in step 1 (clear on pathway change). |
| 2026-10-14 | 4. Cache stamp | `?v=39` to `?v=40` on all 16 pages. |
| 2026-10-14 | Checks | Headless Chrome (file://, iframe harness): existing Montreal shows 1983 and Standard; existing z4 and z5 show Standard; new shows HPerf only for z4, z5, z6; switching pathway clears `selectedEnvelope`; same pathway keeps it; direct Layer 1 visit shows all tiers; Get Started stays disabled with nothing chosen. Not tested: Edge/Safari, phone width, Layers 2 to 4 end to end with an HPerf key (key logic untouched), the `?key=` reviewer link, live site. Not committed. |
| 2026-10-14 | Review (Opus) | Code review of the `index.html` and `js/app.js` diffs: logic matches steps 1 to 3, no `?v=39` left on live pages, popup ids and `data-tier` selectors match `layer1_NUs_selection.html`. No defect found. Note: `nexaPathway` lives for the tab session, so a later direct visit to Layer 1 in the same tab keeps the narrowed tiers (a new tab or the `?key=` link opened fresh shows all tiers). Optional HPerf auto-select in the new pathway was not done. Not run in a browser in this review. |
| 2026-10-14 | Gemini browser test | Steps 1 to 9 PASS (desktop 1280px and phone 375px, both pathways, stale-key clear, fresh-tab direct visit, zero console errors). Observations, not fixed: label asymmetry "Existing Neighborhood" vs "New Neighborhoods" (plural follows CHV's reply, the old label was singular); single-option popups under New and under Existing outside Zone 6 (optional HPerf auto-select from step 2 not done). No real failure, no code change. |
| 2026-10-14 | Label | Koral: both labels plural. `index.html` first button now "Existing Neighborhoods" (span and alt). HTML text only, no css/js, so no stamp bump. |
| 2026-10-14 | Walkthrough deck | Slide deck of the first five pages per pathway (front page, Layer 1 popup, Layer 1 results, Layer 2 energy selection, Layer 2 breakdown), Montreal Z6, RC-R, energy systems COP 4 + DHW + appliances. Playwright screenshots, zero page errors. Observation, not fixed: both pathways show 60.6 kWh/m2-yr on the breakdown. In `data.js`, `necb-z6` EEM1 to EEM4 equal `high-performance-z6` EEM1 to EEM4 for RC-R, and `necb-z6` EEM1 equals `high-performance-z6` DEFAULT (106.3), so the NECB cumulative ladder already includes the HPerf envelope from EEM1 on. Pre-existing data design, out of scope, worth raising with CHV. |
| 2026-10-14 | 60.6 investigation (Sonnet) | By design, not a data or UI bug. The pipeline ran one cumulative ladder per zone (DEFAULT, ENVELOPE, ENV_HVAC, ENV_HVAC_DHW, EEM4; NEXA-desktop `docs_LMN_web/LMN-database-extension/results/LMN_national_EUI_ladder_report.md:5`). Z6 RC-R in `default_sims_fix/results/LMN_CAN_Z6_20260910_master.csv` is 134.28 / 106.34 / 92.90 / 80.73 / 60.58, which matches `necb-z6`. EEM1 is HPerf (`config.js:936`). `config.js:303-306` says HPerf "is EEM1", not a separate baseline. In all 8 `high-performance-*` arms, EEM1 to EEM4 equal the NECB arm (140/140), and HPerf DEFAULT equals NECB EEM1 (280/280). Any heat pump selection maps to EEM2 or higher (`energy.js:577-626`, `config.js:1772-1853`), so on Existing (NECB) every heat pump result already includes the HPerf envelope. Not stated to the user anywhere. The `config.js:304` count says "245 of 245", but a script gives 280. Not checked: every NU against the CSVs (only RC-R, MU-L, CC-B), and whether CHV knows the two pathways converge. |
| 2026-10-14 | Missing 408 and commit | 408 Standard + EEM4 cells missing (12.1% of the six national zones), handed to NEXA-desktop: `docs_ACTIVE/MissingSims/PROMPT_missing408_standard_EEM4.md`. Fan-fix rerun at 253 of 2,048 on Speed (19:10). Commit scheduled: Windows task "NEXA-web Friday commit", 2026-10-16 09:00, script `C:\Users\o_iseri\ScheduledTasks\nexa_web_friday_commit.ps1`, log beside it. Corrected same day (Koral: only Montreal 1983 is live, the other 1983 zones are not committed): all pages (stamp v40), `index.html`, `docs_implementation/frontPage`, and only the pathway hunk of `js/app.js` via `app_pathway.patch` (checked with `git apply --cached --check`). Left out: `data.js`, `config.js`, the 1983 hunks of `app.js`, `Templates/1983-National`, Part2 docs, password-system deletions. The script aborts if anything is already staged or the patch no longer applies. No push. |

## Site Text to Update

Scan by Sonnet on 2026-10-14. This was a read-only static text scan and nothing was edited. README, `data.js`, the breakdown, output and finish-design pages, and the sidebar badges were not checked.

**Must**
- `documentation.html:1069-1074`: the envelope options are listed as offered to every neighbourhood, with no mention of the pathway filter.
- `documentation.html:1500-1505`: "Standard and HPerf model new construction, 1983 captures retrofit of existing" now contradicts the site, which offers Standard under Existing and HPerf under New.
- `documentation.html:1213-1215`, `:1287`: the ladder notes never say that a heat pump on Existing already includes HPerf, or that the two pathways converge from EEM2 on.
- `js/config.js:1755` `eemLadder.rule`: this one string feeds the Terminology popover (`:2043`), `ladderNote` (`:1834`) and the comparison page (`comparison.js:676-682`). It is the best single place to state the convergence.

**Should**
- `index.html:31-52`: nothing says what each pathway offers.
- `layer1_NUs_selection.html:230-258` with `js/app.js:366-369`: the popup does not explain why only 1 or 2 tiers appear. A note shown only under Existing could carry the convergence sentence.
- `documentation.html:1579-1582`: the 1983 button also requires the Existing pathway.
- `js/config.js:936-937`: the EEM1/EEM2 descriptions could add "on Existing this includes the HPerf envelope".
- `layer2_energy_selection.html:89-103`: the Space HP and HPWH tooltips do not mention that HPerf is bundled in.

**Optional**
- `index.html:72-81`: the "What this tool is for" popover could carry a one-line explanation of the pathways.
- `documentation.html:445`, `:492-493`, `:1083-1105`: the V1 contents list, the high-performance twin and the reference case are not tied to the pathways.
- `js/config.js:889`: `highPerformance.definition`.

**Open**
- The convergence wording depends on CHV confirming that the merge is intended.
- The `config.js:304` count ("245 of 245") disagrees with a script count of 280.

## Correction: Combination Runs

2026-10-14, Sonnet scan of `NEXA-desktop/docs_DONE/docs_LMN_web`. This replaces the earlier "by design, cumulative only" finding.

- The simulations are a full 16-cell factorial in all six zones, with flags `env_flag, hvac_flag, dhw_flag, eem4_flag` (`default_sims_fix/results/LMN_CAN_Z6_20260910_master.csv`, `LMN_national_NU_master.csv`, `LMN-setup/LMN_master_setup.md:153-155`). Standard envelope + heat pump without HPENV exists as `EEM_J_HVAC_ONLY`, `EEM_J_HVAC_DHW` and `EEM_J_HVAC_DHW_EEM4`.
- Z6 RC-R: Standard + HP 101.7, + DHW 89.0, + EEM4 68.6. HPENV + HP 92.9, + DHW 80.7, + EEM4 60.6.
- The site fills `necb-z6` EEM1 to EEM4 from the HPENV diagonal (`ENVELOPE`, `ENV_HVAC`, `ENV_HVAC_DHW`, `ENV_HVAC_DHW_EEM4`), not from the standard-envelope runs (`data.js` RC-R around lines 6812-6933, MU-L around 4446-4566). That is why Existing and New both show 60.6. The mapping was documented in `docs_implementation/DONE/.../STAGE-03_Layer2-Energy-Demand.md` (D3.3, D3.5, D3.7) and is not coded in any script.
- Gap: 17 of 35 NUs have 12 tags, without the four standard-envelope EEM4 tags. For example, MU-L has no Standard + HP + DHW + EEM4.
- Consequence: the Existing pathway should read the standard-envelope runs for its Layer 2 results. This is a data change (`data.js`), traceable to the master CSVs, and it needs a decision on the NUs missing the EEM4 tags. Not done.
- Not verified: whether the other five NECB zones in `data.js` came from the 20260910 `default_sims_fix` master or the older master. The Z6 values match `default_sims_fix`.
- EMAIL-02 paragraph 2 ("the energy measures are cumulative") is wrong in light of this. Koral is editing the email by hand.

## Templates Scan

2026-10-14, Sonnet, `NEXA-web/Templates` only.

- `2026-07-19/LMN_full_NU_master_healed.csv`: CAN_MTL and US_ASHRAE have all 16 combinations for all 35 NUs. MU-L CAN_MTL Standard + HP + DHW + EEM4 is 89.5952 (line 1029).
- `2026-09-10/LMN_national_NU_master.csv` (the same md5 as `default_sims_fix`), Z4 to Z8: 18 NUs have 16 combinations. 17 NUs have 12: CC-E1 to E3, MU-HC, MU-HS, MU-L, MU-S1, MU-S2, MU-W, RC-HR1, RC-HR2, RC-MR1 to MR3, RS-I1, RS-I2, RS-I4. The missing four are the Standard + EEM4 combinations, skipped by the multifamily EEM4 gate. That makes 408 runs.
- `CAN_Z4.csv` to `CAN_Z8.csv` and `ASHRAE.csv` hold only the five-step ladder.
- `js/data.js` holds only DEFAULT, EEM1 to EEM4 and IAL. No Standard + HP combination key exists.

## Where the Full 16 Are

2026-10-14, direct check.

- `Part2-historicalcode sims/debug/investigate/folder_scan.md:114`: the multifamily EEM4 gate was found to be stale and was bypassed with `LMN_SKIP_EEM4_GATE=0`. All four 1983 arms (`HIST_NU_CAN_{Z4,Z5,Z7A,Z7B}_1983_20260924_master.csv`, `implementation_plan.md:71`) hold 560 rows each, all 16 x 35. Montreal 1983 also holds 560 (`DONE-1983-NECB-Zone6/walkthrough.md:13`).
- The NECB 2017 Z4 to Z8 master in `Templates/2026-09-10/` was built before the gate was bypassed. It still has 12 combinations for the 17 multifamily NUs.
- `DONO_database_expansion_newCAN_zones` and `default_historicalData` hold only plans and walkthroughs, with no result files.

## NEXA-desktop Search: NECB Standard + EEM4

2026-10-14, Sonnet, all of NEXA-desktop plus Desktop siblings. Koral context: the fan-fix rerun is in progress, and only Montreal 1983 is live on the site.

- Not found locally for Z4 to Z8 current code. The only current-code gate-off run (`LMN_SKIP_EEM4_GATE=0`, `main_BEM.py:740`, "TEMP missingSims rerun") was on 2026-06-17: 17 NUs x 4 tags, 68 of 68 PASS, CAN_MTL and US_ASHRAE only (`docs_DONE/docs_LMN_web/LMN-1983/debug/NUs/DONE/2026-08-08_EEM4_gate_68_missing_cells.md:97-102`).
- Results: `docs_DONE/docs_publications/NUs_3rd_Paper/DONE_implementation/DONE_missingSims/results/blockA_missing_cells_results_{MTL,US_ASHRAE}.csv`, merged into `LMN_full_NU_master_healed.csv`.
- `option_9_j_20260707_v2` and `option_9_j_20260910_v1` (`CAN_Z4` to `CAN_Z8`) hold the strict EEM4 tags for the 18 non-multifamily NUs only.
- Not checked: the Speed cluster (no access), non-CSV EnergyPlus outputs (folder names only). Correction: Speed is reachable through the `speed` SSH alias. A separate read-only search of Speed is pending.

## docs_LMN_web Scan: NECB Standard + EEM4

2026-10-14, Sonnet. Script `scan.py` in the session scratchpad over 41 non-1983 CSVs.

- Z4, Z5, Z6, Z7A, Z7B, Z8: 0 of 17 multifamily NUs for each of the four Standard + EEM4 tags, in every file (`default_sims_fix`, `LMN-database-extension`, the July zone archives, `pre_fcfix_merge_20260714`).
- The only hit is `LMN-setup/RESULTS/LMN-d1/LMN_NU_576_20260521_master.csv`: CAN_MTL, all rows `status=FAIL`, no EUI.
- The docs state the 12-tag design: `LMN-database-extension/manager-prompt-aftercompletion/national_zones_evaluation_results.md:45-48` ("18 NUs run full 16 scenarios + 17 NUs run 12 = 492/zone"), `LMN-database-extension/final-evaluation/LMN_national_final_evaluation.md:27`.
- `LMN-1983/submit/NUs/README.md`: the 68 gated cells on the current-code arm are "still in force here because that arm was not re-run". `LMN-1983/implementation/NUs/LMN1983_NU_implementation_plan.md:322`: the current-code arm "is not re-run or repaired from here".
- No doc claims Z4-Z8 completion for these cells. The 2026-08-08 gate-off jobs 1174303 and 1174333 were `CAN_MTL_1983` only.
- Not checked: `.xlsx`, binary outputs, Speed.

## Speed Scan: NECB Standard + EEM4

2026-10-14, Sonnet, read-only over SSH (`speed`).

- Not found: 0 of 408 (17 NUs x 4 tags x 6 zones). `/speed-scratch/o_iseri/lmn_z{4,5,6,7a,7b,8}` each hold 492 cells in `out/` and `idfs/`. The extracts `/speed-scratch/o_iseri/lmn_extract_z*[_dfix|_fcfix].csv` have zero rows for the four tags on the 17 NUs.
- `LMN_SKIP_EEM4_GATE` appears in no script or log in scratch or home, so no gate-off job targeted Z4-Z8.
- The only multifamily IDFs with these tags are under `/speed-scratch/o_iseri/usashrae/idfs/` (US_ASHRAE, already known).
- Missing total: 408 of 3,360 national-zone runs (12.1%), or 408 of 4,480 including CAN_MTL and US_ASHRAE (9.1%).
- Not checked: `.tgz`/`.tar` archives, `handover_*`, `step9_run`, `fleets`, `qc1983`, `rsi2_can` (name search only), other users' directories.
