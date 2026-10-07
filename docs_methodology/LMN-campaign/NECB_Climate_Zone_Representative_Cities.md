# **Expanding the NU Simulation Framework Across Canada's NECB Climate Zones**

*Proposed representative cities for full national climate-zone coverage*

Prepared: 2026-07-06   |   Author: Orcun Koral Iseri   |   Companion to: BEM\_methodology.md, CAN\_Standandards\_detailed\_CHV.md, NUS\_Paper\_Skeleton\_v2.docx

# **1\. Background**

* Current coverage: Montréal (Zone 6\) and Calgary (Zone 7A), plus the ASHRAE 90.1-2022 / IECC 2024 U.S. prototype baselines.

* The paper's cross-climate transferability claim needs full national coverage, not just two zones.

* Calgary's HDD count places it in Zone 7A, but frequent chinook winds cause mid-winter thaw events.

* Calgary sits at \~1,100 m elevation and receives atypically high annual sunshine (\~2,400 h).

* Its heating load profile and PV yield pattern are therefore not representative of Zone 7A.

* Recommendation: keep Calgary as a chinook sensitivity case, not the primary 7A representative.

* Add Edmonton and Winnipeg as the true continental-prairie Zone 7A representative cities.

# **2\. Proposed Representative Cities**

The table covers all six NECB heating-degree-day (HDD₁₈) climate zones, from Zone 4 (warmest) to Zone 8 (coldest). Full national coverage requires twelve CWEC2020v2 EPW files at two cities per zone; two (Montréal, Calgary) are already simulated.

| NECBZone | HDD₁₈ Range (°C·d) | Representative City 1 | Representative City 2 | Rationale |
| :---: | :---: | ----- | ----- | ----- |
| 4 | \< 3,000 (warmest) | Vancouver, BC (\~2,800) | Victoria, BC (\~2,650) | Coastal SW BC only; marine, mild, cloudy winters; mainland vs. Vancouver Island microclimate. |
| 5 | 3,000–3,999 | Toronto (Pearson), ON (\~3,700) | Kelowna, BC (\~3,400) | Humid/dry pairing — Toronto: humid Great Lakes (5A-analogue); Kelowna: dry interior BC (5B-analogue); Windsor \= humid alternative to Toronto. |
| 6 | 4,000–4,999 | Montréal, QC (\~4,500) — already simulated | Halifax, NS (\~4,000) | Montréal: humid-continental baseline, already simulated; Halifax: adds Atlantic maritime signature; Ottawa (\~4,500) \= alternative continental site. |
| 7A | 5,000–5,999 | Edmonton, AB (\~5,120) | Winnipeg, MB (\~5,670) | True continental prairie — cold, dry, no chinook effect; Winnipeg near upper HDD edge; Québec City (\~5,080) \= eastern-humid alternative; Calgary retained as chinook sensitivity case, not primary 7A rep. |
| 7B | 6,000–6,999 | Fort McMurray, AB (\~6,250) | Whitehorse, YT (\~6,580) | Boreal Alberta vs. subarctic Yukon valley; Goose Bay, NL (\~6,670) \= eastern/Labrador alternative. |
| 8 | ≥ 7,000 (coldest) | Chisasibi, QC (\~7,400–7,600; via La Grande Rivière A/CYGL CWEC2020v2 proxy) | Yellowknife, NT (\~8,170) | Chisasibi — subarctic coastal Zone 8 (Dfc) on James Bay; no dedicated EPW, proxied via CYGL (\~81 km inland, same NECB zone). Yellowknife — largest Zone 8 population centre, western continental counterpart. |

*Table 1\. Proposed representative cities for each NECB climate zone, with approximate HDD₁₈ and selection rationale. All candidate EPWs are available as CWEC2020v2 files under the relevant provincial/territorial folders on climate.onebuilding.org.*

# **3\. Implementation Notes**

* PV tilt is set from each EPW's latitude, spanning 48.4°N (Victoria) to 62.5°N (Yellowknife) across the proposed set.

* Review the self-shading derate (calibrated at GCR \= 0.42 for \~45°N) before batch runs at the highest-latitude sites.

* Only NECB\_Z6\_\* and NECB\_Z7A\_\* construction families exist today; NECB\_Z4\_\*, NECB\_Z5\_\*, NECB\_Z7B\_\*, and NECB\_Z8\_\* still need to be added.
  *(Update 2026-07-14: done -- construction families now exist for all six zones, Z4 through Z8; see section 5 below.)*

* Verify whether NECB assigns identical envelope U-values to Zones 7A and 7B (NECB 2017/2020 Table 3.2.2.2) before duplicating construction sets.

* Fenestration-and-door-to-wall ratio (FDWR) caps tighten from 40% (Zones 4–7) to 30% in Zone 8\.
  *(Update 2026-07-14: done -- Z8 FDWR handling is implemented and exercised in the delivered Z8 (Chisasibi) run; see section 5 below.)*

* MU/CC office and hotel archetypes will need WWR reduction or the NECB trade-off path for the Yellowknife and Chisasibi runs.
  *(Update 2026-07-14: Chisasibi (Z8) delivered via the CYGL proxy with the FDWR-capped construction family applied; Yellowknife was not built -- Z8 coverage uses the single Chisasibi/CYGL representative city, see section 5.)*

* Montréal and Calgary are heating-dominated, so the existing runs exercise DX cooling coils only lightly.

* Kelowna and Toronto will place real load on cooling equipment — a useful check on the Buffalo-sized DX units under warmer conditions.

# **4\. Sources**

National Research Council of Canada — National Energy Code of Canada for Buildings (NECB), HDD₁₈-based climate zone definitions.

ClimateData.ca — "Projected Building Climate Zones" and "Buildings Climate Zones Projections," NECB six-zone HDD methodology.

NAIMA Canada — Insulation Requirements and HDD; Codes & Standards, provincial NECB/NBC adoption status.

Alberta Metal Building Association — NECB 2017 climate zone / HDD lookup examples (e.g., Edmonton HDD₁₈ \= 5,120, Zone 7A).

climate.onebuilding.org — WMO Region 4, Canada EPW repository (CWEC2020v2 file source for all proposed cities).

Chisasibi\_Climate\_Simulation\_Assessment.md — internal proxy-station analysis recommending La Grande Rivière A (CYGL) CWEC2020v2 as the defensible weather-file proxy for Chisasibi, QC.

---

# 5. Delivered coverage (2026-07-14)

*Appended by Employee-2 (Sonnet), Task T6 of `implementation/wrap-up/LMN_national_wrapup_plan.md`.
The proposal text above (sections 1-4) is left as originally written; this section records what was
actually built and run.*

The national NECB-zone campaign proposed in sections 1-2 has been **delivered**: all six NECB
climate zones (Z4 through Z8) were built and run end-to-end (Option 9i neighbourhood pipeline,
EnergyPlus v22.1, ~35 neighbourhood units per zone, full `EEM_J_DEFAULT -> EEM4` retrofit ladder).
The national master (`results/LMN_national_NU_master.csv`) carries **2996 rows**: 2951 rows across
the six NECB zones plus 45 rows for the legacy Montreal (`CAN_MTL`) reference set, integrated as a
separate `zone = "CAN_MTL"` block for cross-checking (see `validation/LMN_national_validation_report.md`) rather
than merged into `Z6`.

## Actual representative cities used (one city per zone, not the two-city pairs proposed in section 2)

| NECB zone | City actually simulated | Note vs. section 2 proposal |
|---|---|---|
| Z4 | Vancouver, BC | As proposed (Representative City 1). Victoria not built. |
| Z5 | Toronto, ON | As proposed (Representative City 1). Kelowna not built. |
| Z6 | Montreal, QC | As proposed -- pre-existing coverage, carried into the national campaign. Halifax not built. |
| Z7A | **Winnipeg, MB** | Section 2 proposed Edmonton as Representative City 1 and Winnipeg as City 2. **Edmonton was dropped: no CWEC2020v2 EPW was available for Edmonton at build time**, so Winnipeg (the proposed City 2, also chinook-free continental prairie) became the sole Z7A representative. Calgary was not built as part of the national campaign; the legacy Calgary (`CAN_CLG`) results remain a separate frozen reference (see `validation/LMN_national_validation_report.md`, section "Z7A vs CAN_CLG" -- Calgary's chinook-moderated winters make it read systematically milder than Winnipeg for the same nominal zone). |
| Z7B | Fort McMurray, AB | As proposed (Representative City 1). Whitehorse not built. |
| Z8 | Chisasibi, QC (via La Grande Riviere A / CYGL CWEC2020v2 proxy) | As proposed (Representative City 1). Yellowknife not built. |

Only one city per zone was carried through the full ~35-NU x 5-ladder-step campaign (twelve cities
across two-per-zone, as scoped in section 2, was not attempted -- single-city-per-zone was judged
sufficient national coverage for the paper's transferability claim).

## Deliverables produced

- **EUI ladder report (all 6 zones + legacy Montreal reference):**
  [`LMN_national_EUI_ladder_report.md`](./LMN_national_EUI_ladder_report.md)
- **Figures** (per-zone ladders, fleet-median comparison, EEM4-savings-by-zone, Montreal-legacy
  overlay, and cross-climate comparisons):
  [`figures/`](./figures/) (see also [`figures/cross_climate/`](./figures/cross_climate/) for the
  four per-family grouped-bar comparisons across Z4-Z8 -- `cross_climate_family_{RS,RC,MU,CC}.png`,
  one small-multiple subplot per neighbourhood, consolidated from the earlier per-NU figures)
- **PV generation deliverable:**
  [`results/LMN_national_PV_generation.csv`](./results/LMN_national_PV_generation.csv) and
  [`LMN_national_PV_generation.md`](./LMN_national_PV_generation.md) (PV reported separately per
  zone/NU/ladder-step; never netted into EUI anywhere in this project)
- **Validation report -- internal (vs legacy) + external (vs independent benchmarks):**
  [`validation/LMN_national_validation_report.md`](./validation/LMN_national_validation_report.md).
  Part 1 confirms new-basis Z6 reproduces legacy Montreal (`CAN_MTL`) to within 0.5% at every ladder
  step (9/9 RC NUs PASS) and explains the Z7A-vs-`CAN_CLG` divergence via the documented
  Calgary-to-Winnipeg city swap above. Part 2 cross-checks the whole fleet against the deepResearch
  03/04/05 external benchmarks (NRCan/ASHRAE/IECC/CHBA/PH EUI, deep-retrofit savings, PVWatts/NRCan/GSA
  PV) -- all CONFIRMS, with four paper caveats (Z8 far-north low-confidence; PV snow-cover derate;
  Chisasibi CYGL proxy; Fort McMurray wildfire-smoke yield).
- **Deep-research validation prompts + completed results (Task T5, extended):** three external
  research prompts, each now with a completed `_results.md` companion whose findings are folded into
  the validation report Part 2:
  [`deepResearch/03_zone_EUI_benchmark_validation_prompt.md`](./deepResearch/03_zone_EUI_benchmark_validation_prompt.md)
  (external EUI benchmarks per archetype x zone),
  [`deepResearch/04_EEM_savings_plausibility_prompt.md`](./deepResearch/04_EEM_savings_plausibility_prompt.md)
  (deep-retrofit whole-building savings % by climate severity, checking our -47.7% (Z4) to -56.2% (Z8)
  EEM4 fleet-median trend), and
  [`deepResearch/05_PV_generation_validation_prompt.md`](./deepResearch/05_PV_generation_validation_prompt.md)
  (rooftop PV specific-yield / floor-normalized generation per representative city). Completed results:
  `deepResearch/03,04,05_*_results.md`.
- **Independent evaluation (V0-V7):**
  [`manager-prompt-aftercompletion/national_zones_evaluation_results.md`](./manager-prompt-aftercompletion/national_zones_evaluation_results.md)
  -- Stage 1 build + Stage 2 campaign re-verified against the files (not the Progress Log): GO, no
  product-code defect (one stale Z7A test fixture found and fixed).

## Coverage caveat carried forward

As implemented, national coverage is **one representative city per zone**, not the two-city pairs
originally proposed in section 2 (Victoria, Kelowna, Halifax, Edmonton, Whitehorse, and Yellowknife
were not built). Datacenter archetypes (`IC-DC`, `IC-DE`) are included in the master and ladder-
report tables for completeness but are excluded from bar-chart figures (their EUI dwarfs the axis)
per the wrap-up plan's manager decisions.

## Paper caveats D-1 to D-6 (final evaluation, 2026-07-14)

*Consolidated from `final-evaluation/LMN_national_final_evaluation.md` (sourced from
`validation/LMN_national_validation_report.md` and deepResearch 03/04/05). These are
**disclosure items for the manuscript** -- none requires re-simulation or code changes. They
supersede the shorter "four paper caveats" list quoted earlier in this section.*

- **D-1 -- Z7A/Z7B/Z8 EEM4 medians exceed the flat CHBA < 64 kWh/m2 net-zero-ready target**
  (+12% / +13% / +28% respectively). This is expected heating-load physics against a single flat
  national number (deepResearch 03), not a modelling failure. State it as expected physics in the
  paper so a bare reading of the table does not look like a shortfall.
- **D-2 -- Z8 EEM4 savings (-56.2%) fall below the 60-80% subarctic literature band.** Baseline
  mismatch, not an error: the literature band is drawn from retrofits of pre-1980 existing stock,
  while our baseline is code-minimum new construction (deepResearch 04 instructs excluding
  existing-stock comparators). Disclose the comparator mismatch explicitly.
- **D-3 -- PV snow-cover derate is not modelled.** The EnergyPlus PVWatts output carries no
  snow-cover loss, so roof-mounted PV is optimistic by roughly 10-15% (Winnipeg, Z7A), 15-20%
  (Fort McMurray, Z7B), and 20-25% (Chisasibi, Z8); south-facade PV is essentially unaffected
  (~0%). Footnote wherever Z7A-Z8 roof PV figures are quoted; a derated PV column is possible
  future work if needed.
- **D-4 -- Chisasibi weather-file proxy bias.** Z8 uses the La Grande Riviere A (CYGL) airport
  EPW, ~90 km inland of the actual coastal Chisasibi site, adding an estimated +5-10% optimistic
  bias to Z8 solar (and, by extension, mildly to Z8 heating-load) results. Footnote Z8-specific
  claims.
- **D-5 -- Fort McMurray CWEC PV yield sits below the climate normal.** The CWEC composite gives
  ~1,100 kWh/kWp vs the ~1,200 kWh/kWp NRCan climate-normal, attributed to recent wildfire-smoke
  aerosol events embedded in the CWEC years. Footnote if Z7B PV is quoted as a long-term normal.
- **D-6 -- Z8 / far-north external benchmarks are inherently low-confidence.** Both the EUI
  comparators (territorial CEUD suppression, small samples, 2008-era Yukon/NWT entries) and the
  savings comparators (existing-stock-based subarctic literature) are weak; external corroboration
  for Z8 is therefore softer than for Z4-Z7B. One sentence in the paper's limitations section.

---

# 6. Progress Log

### 2026-07-14 -- National campaign fully delivered, validated, and evaluated
All post-delivery consolidation and validation tasks are COMPLETE.

- **Campaign delivered:** 6 NECB zones (Z4-Z8) built + run; national master
  `results/LMN_national_NU_master.csv` = 2996 rows (2951 NECB + 45 legacy `CAN_MTL` reference;
  Z7B = 491, the 1 documented MU-HC gap).
- **Deliverables:** EUI-ladder report (+ CAN_MTL table); PV generation `.csv` + `.md`;
  figures (per-zone ladders, fleet-median, EEM4-savings box, CAN_MTL overlay, and the four
  per-family cross-climate small-multiples `cross_climate_family_{RS,RC,MU,CC}.png`, consolidated
  from the earlier 33 per-NU figures with enlarged legends + tightened layout).
- **Validation report renamed + relocated:** `internal_validation_legacy.md` ->
  `validation/LMN_national_validation_report.md`, expanded to cover BOTH Part 1 (internal vs legacy
  CAN_MTL/CAN_CLG) and Part 2 (external vs deepResearch 03/04/05 benchmarks). All axes CONFIRMS.
- **Deep-research:** prompts 03/04/05 written; all three `_results.md` completed and folded into the
  validation report Part 2.
- **Independent evaluation (V0-V7):** re-verified against files, not the Progress Log -- Stage 1 GO
  (after fixing one stale Z7A `Calgary->Winnipeg` test fixture; `test_necb_transformations.py` = 16
  passed, 1 skipped), Stage 2 GO, external CONFIRMS. Full write-up in
  `manager-prompt-aftercompletion/national_zones_evaluation_results.md`.
- **Open (non-blocking) items:** (a) confirm the Z6 RC archetypes are construction-set-native (why
  new Z6 matches legacy CAN_MTL exactly); (b) four paper caveats (Z8 far-north low-confidence; PV
  snow-cover derate; Chisasibi CYGL proxy; Fort McMurray wildfire-smoke PV yield).

**Status: LMN national database validated and ready for the external DB tool / paper.**

### 2026-07-14 -- Final evaluation closed; paper caveats integrated into this doc
- Final evaluation delivered: `final-evaluation/LMN_national_final_evaluation.md` (all A-items
  executed; campaign closed, commit `e7d4bdf0`).
- **Open item (a) above is RESOLVED:** Z6 was freshly re-simulated (`00.Baseline_NUs_CAN_Z6/`
  regenerated 2026-07-07, byte-different from legacy), but the residential wall-RSI correction is a
  no-op on the executed envelope -- the corrected cap loosened U from 0.210 to 0.337, and the
  applier's skip-when-better guard (`idf_nbc936_applier.py` ~L352-357) keeps the native IECC-2024
  wall because it already beats the looser target. Hence the near-exact Z6-vs-CAN_MTL match
  (max delta 0.48%). Traceability closed; no numeric defect.
- **Open item (b) superseded:** the four-caveat list is expanded to the full six-item register
  **D-1 to D-6**, now integrated as section 5 "Paper caveats D-1 to D-6" in this document.
- MU-HC Z7B missing `EEM_J_DEFAULT` row (491/492) formally accepted-with-note; footnotes added to
  the EUI-ladder and PV reports; optional backfill tracked in the separate MU-HC_gas_B3 fix plan.
