# System Setup Across the NU Publications — One Installation, Five Papers

**Author:** Orcun Koral Iseri
**Date:** 2026-07-16
**Purpose:** Explain the simulation installation shared by the neighbourhood-unit (NU) publications — NU1 (archetype methodology), NU2 (2nd journal), NU3 (3rd journal, Shapley retrofit ranking), the NU2xNU3 conference join, and the LMN web campaign — and show that baselines and retrofit measures are coherent across them.
**Companion deep-dives:** `BEM_methodology.md` (building sources and simulation variants), `CAN_transformation.md` (Canadian baselines), `EEM_setup.md` (active EEM measure set), `PV_methodology.md` (PV model).
**Table companion (added 2026-07-27):** `NUs_Setup_Matrix.md` holds the parameter-by-parameter setup matrix, residential and commercial side by side, plus the ground-coupling tables. This document is the narrative; that one is the lookup reference.

---

## 1. Why This Document?

The NU research programme has produced several publications over three years, each asking a different question of the same building stock: what the archetypes are (NU1), how far the stock can be pushed toward net-zero (NU2), which retrofit measure should come first and under what economics (NU3), how feasibility and bankability combine (the conference join), and how the results can be served interactively (LMN). A reader — or a reviewer — comparing these papers may reasonably ask whether they describe the same underlying model, or whether each paper rebuilt its own. This document answers that question: **since NU2, every publication runs on one shared installation** — the same prototype library, the same Canadian baseline transformation, the same retrofit applier code, and the same EnergyPlus version. What changes between papers is only how the scenarios are packaged and which question is asked of the outputs.

---

## 2. The Shared Installation

Every simulation behind NU2, NU3, the conference join, and LMN passes through the same five-stage pipeline.

### 2.1 US prototype stock

The building library starts from internationally recognised reference prototypes: sixteen ASHRAE 90.1-2022 commercial prototypes (DOE/PNNL, Buffalo NY CZ6A base form), three IECC 2024 single-family variants, two ASHRAE 90.1-2019 datacenter archetypes, and seven OpenStudio/DOE supplemental buildings (College, Supermarket, Laboratory, TallBuilding, SuperTallBuilding, and two small datacenters). The full provenance of this library, including the Buffalo-as-Montreal-proxy rationale, is documented in `BEM_methodology.md` §3 and §6.1.

### 2.2 Canadian baseline transformation

Each US prototype is transformed into a Canadian-code baseline before any retrofit is considered. Two prescriptive codes apply, and — deliberately — they are not the same code for both sectors, because that is how the Canadian regulatory system itself is split:

- **Commercial, institutional and mixed-use buildings → NECB 2017** (`idf_necb_applier.py`): envelope U-value caps (Tables 3.2.2.2/3.2.2.3), a lighting-power-density clamp (Table 4.2.1.6), the Tier-1 air-tightness target (0.25 L/s·m² at 75 Pa), and minimum HVAC efficiency floors (§5.2). Every clamp uses skip-when-better logic — a surface or component already meeting the Canadian cap is left untouched.
- **Low-rise residential → NBC 9.36** (`idf_nbc936_applier.py`): envelope U-caps, air-tightness, and heat-recovery ventilation. The NBC applier does not touch HVAC efficiency or LPD, because housing equipment is governed by EnerGuide labelling rather than prescriptive tables.
- **BTAP internal loads** (`idf_btap_loads_applier.py`) are then applied to every Canadian commercial IDF — NECB-A occupancy, plug-load, and thermostat schedules — closing the ~26% EUI gap between US-style internal-load assumptions and the NRCan BTAP reference archetypes.

The full transformation, including validation gates and the OfficeMedium acceptance run, is in `CAN_transformation.md`.

### 2.3 Retrofit measures (EEM applier)

All retrofit measures come from a single code path, `BEM_utils/idf_eem_applier.py`, implementing the EEM_Journal measure catalogue (canonical description: `EEM_setup.md`). Four domains cover the retrofit space:

| Domain | Content (identical definitions in every publication) |
|---|---|
| **EEM1 — Envelope** | HPENV opaque assemblies, triple glazing (U = 0.85 W/m²K, SHGC = 0.40), foundation/slab insulation (CZ6/CZ7A-gated), infiltration ×0.25 |
| **EEM2 — HVAC** | ASHP conversion (COP 4.0–4.5 nameplate with cold-climate performance curves, OnDemand defrost, compressor lockouts), inverter cooling curves |
| **EEM3 — DHW** | Transcritical CO₂ heat-pump water heater (COP 4.0, −29 °C lockout, outdoor-air intake), stratified tanks, off-peak boost, tank jacket |
| **EEM4 — Loads** | Automated blinds, daylight dimming, LED at LPD ×0.55, occupancy schedule trim, ENERGY STAR plug loads, phantom/HEMS trims, residential gas-appliance electrification |

### 2.4 Neighbourhood assembly

Buildings are placed into 35 neighbourhood units according to the canonical registry (`Content/neighbourhoods/neighbourhood_registry.py`), grouped in five families: RS (residential standalone), RC (residential clusters), MU (mixed-use), CC (commercial core), and IC (industrial/datacenter — excluded from the retrofit papers because IT loads dominate). Merged neighbourhood IDFs run with `AirflowNetwork:SimulationControl = MultizoneWithoutDistribution`; single buildings keep `MultizoneWithDistribution` (the rationale and ≤5% accuracy cost are explained in `BEM_methodology.md` §6.6).

### 2.5 Simulation engine and climate

EnergyPlus 22.1.0 throughout, driven by CWEC2020v2 weather: Montréal-Trudeau International Airport (Climate Zone 6A) as the primary climate, Calgary Olympic Park (Zone 7A) as the secondary where a paper carries a second climate.

---

## 3. What Changes Between Publications — Packaging, Not Measures

The measure definitions above never change between papers. What changes is how the scenarios are combined:

- **Cumulative ladder** (NU2, and the diagonal of LMN): EEM1 ⊂ EEM2 ⊂ EEM3 ⊂ EEM4 as strict supersets. This answers "how far can the stock go" — each rung adds a domain on top of the previous ones.
- **Isolated domains** (NU3): each domain is applied alone against the baseline. This is required by NU3's research question — an order-free Shapley attribution of savings cannot be computed from a cumulative ladder, because applying measures in a fixed order mis-credits them (by up to ~7 kWh/m² in the NU3 analysis).
- **Full factorial** (LMN): all 2⁴ = 16 on/off combinations of the four domains, using the same applier code byte-for-byte. The cumulative ladder and the isolated domains are both subsets of this factorial.
- **Incumbent heating systems** (NU3 only): NU3 additionally re-baselines the whole stock under two existing heating systems — a mid-efficiency gas furnace (AFUE ≈ 0.90) and electric baseboard (COP = 1). Every one of the 33 NUs is simulated under **both** incumbents (33 NUs × 2 incumbents × 5 scenarios = 330 runs). For the residential families the baseboard columns are the realistic Quebec reading; for the commercial families the gas columns are realistic and the baseboard columns serve as a uniform all-electric sensitivity reference. This dual-incumbent design is an addition layered onto the shared system, not a divergence from it.
- **PV treatment**: NU2 and LMN pair the retrofit scenarios with the Tier-3 geometric PV injector (native PV only at Default; generation reported in dedicated columns and never netted into EUI — see `PV_methodology.md`). NU3 carries no PV, by design: its economics isolate the retrofit measures themselves.

---

## 4. Residential vs Commercial — Same Measures, Adapted Topology

A recurring reviewer question is whether the residential and commercial buildings receive "the same" retrofit. The answer is that the measure logic and performance targets are sector-identical, while the implementation respects each building's native systems: the applier selects the correct topology through archetype predicates. The same triple glazing, the same infiltration target, the same heat-pump COPs and the same LED reduction apply everywhere. A single-family house simply cannot receive a VAV coil uplift, and a hospital cannot receive a residential preheat tank; the gates encode building physics and the Canadian regulatory split, not different ambition levels.

**Two exceptions to that reassurance, and they are worth knowing before answering a reviewer.** The daylight setpoint and the plug-load factor genuinely differ by sector (300 vs 500 lux, ENERGY STAR x0.65 vs x0.75), which is deliberate and follows IES RP-1 and NECB. And the ground floor differs by sector for no reason anyone chose: see section 6, points 7 to 9.

**The per-measure table lives in [`NUs_Setup_Matrix.md`](NUs_Setup_Matrix.md) Table C**, which lists every measure with its residential and commercial implementation side by side and tags each row as regulatory, physical or inherited. It is not duplicated here, so that the two documents cannot drift apart. The full gate list with the EnergyPlus objects touched by each measure is in `EEM_setup.md`.

---

## 5. Publication-by-Publication Setup

Each paper asks a different question of the same installation, with a different scenario packaging, a different incumbent-heating treatment and a different PV decision. **The full per-publication matrix is [`NUs_Setup_Matrix.md`](NUs_Setup_Matrix.md) Table D**, covering question asked, stock, baseline, climate, scenario packaging, incumbent heating, PV, economics and ground coupling for NU1, NU2, NU3, the NU2xNU3 Chile join and LMN.

Two rows of that table are worth stating here because they are the ones a reader is most likely to misread:

- **NU1 is a different rigour level** and does not sit on the shared installation described in section 2. It uses a generic high-performance envelope, Ideal Loads heating and a static PV assumption; it pre-dates the NECB/BTAP pipeline. Cite it for the archetype and morphology framework, never for baseline or measure values.
- **The ground-coupling row is identical for every publication**, because none of them ever set the ground model. They all inherit the same mixture from the same library. See section 6, points 7 to 9.

---

## 6. Known Inconsistencies and How to Interpret Them

Nine points deserve an explicit note, because a careful reader will find them. **Points 7 to 9 were added 2026-07-27 and are of a different kind from the first six: they are not packaging differences, they are a domain this document did not previously cover at all.** Full evidence and the staged fix are in `docs_ACTIVE/NUs_1st_Paper/v3/explanation/GroundFloor_Convention.md`; the tables are in `NUs_Setup_Matrix.md` section 3.

1. **NU1 is a different rigor level.** It uses a generic high-performance envelope, Ideal Loads heating, and a static PV assumption; it pre-dates the NECB/BTAP pipeline. It should be cited for the archetype and morphology framework it introduces, never for baseline or measure values. The shared installation described here begins with NU2.
2. **NU2's scope narrowed late.** An archived plotting specification describes 36 NUs in two climates (Montréal + Calgary); the final text reports 33 NUs in Montréal only. Calgary Z7A artifacts (baseline EUI tables, Appendix A parameters) exist in the repository but were not carried into the published NU2 results, nor into the NU2xNU3 join — which states explicitly that neither parent paper has a validated Calgary result to pair.
3. **The EnergyPlus version is not stated in the final NU2/NU3 texts.** It is 22.1.0 throughout; one sentence in a response-to-reviewers settles this if asked.
4. **LMN's documentation carries a version-notation inconsistency**: the academic draft mentions E+ 22.1 for commercial/mid-rise and 23.1 for single-family, while the LMN-RC results report states 22.1.0 uniformly. This should be reconciled before the LMN write-up is submitted.
5. **The AirflowNetwork mode differs by scale, not by paper.** Neighbourhood runs use `MultizoneWithoutDistribution`, single-building runs `MultizoneWithDistribution`. This is a documented, deliberate choice (duct-solver stability at 24-building scale) and is identical in every campaign, so relative comparisons are unaffected.
6. **EEM4 is gated, everywhere the same way.** Multifamily NUs in LMN skip the four non-envelope EEM4 factorial corners; Hospital and OutPatientHealthCare skip the equipment-side measures in every campaign; restaurants and laboratories show near-zero EEM4 response because process loads dominate. These are the same guardrails in all publications, not per-paper choices.
7. **There is no ground-model convention, and the split runs through the density ladder.** Census of all 321 library IDFs: 68.2% use `GroundFCfactorMethod`, 17.1% use a plain `Ground` boundary with **no ground-temperature object at all** (so the EnergyPlus default of 18 °C), 8.4% use `Ground` with a temperature object, and 6.2% use **both methods inside the same file** (TallBuilding, SuperTallBuilding). The split follows building type: the IECC residential prototypes contain no F-factor object, the ASHRAE commercial ones ship with it. Mapped onto the archetypes, **23 of 35 NUs mix methods inside one neighbourhood**, and RC-R / RC-T / RC-D / RC-ML sit on the opposite side of the split from RC-MR2 / RC-MR3 / RC-HR1 / RC-HR2. Since comparing archetypes against each other is what these papers report, this is the inconsistency with the most reviewer leverage. Unlike points 1 to 6 it is **not** a per-paper choice and **not** deliberate: every publication inherits it unchanged from the same library.
8. **The F-factor ground-temperature series is lagged Buffalo air temperature, used unchanged under Canadian weather.** The twelve values in all 219 F-factor files are the Buffalo TMY3 monthly mean dry-bulb **air** temperature shifted forward three months (verified, RMSE 0.028 °C). The EnergyPlus IDD memo prescribes exactly that, so it is neither our error nor PNNL's; the defect is that an undamped three-month lag produces a deep-soil phase on a surface-air amplitude. Effect: the heating-season (Nov to Mar) mean is **+10.14 °C** against Montreal soil at **-1.92 °C**, i.e. about **12 K too warm when it matters**, while the annual mean looks unremarkable. Roughly **141 GJ/yr of understated heating per 893 W/K of F-factor floor**, and a spurious autumn ground *gain* because the October value (22.0 °C) exceeds a 21 °C setpoint. Every Canadian baseline set carries Buffalo's series while running Montreal or Calgary weather.
9. **EEM1's foundation insulation changes the ground model mid-ladder.** The measure cannot apply to a C-factor or F-factor construction, so `_swap_cfactor_ffactor_to_layered` converts the floor to layers first, which moves the surface off `GroundFCfactorMethod`. The scenarios inside one cumulative run therefore do not all share a ground boundary condition. This is documented in `debug_References.md` chapter 5 as an implementation note; it is repeated here because it is a **methodology** fact, not an implementation detail.

**How to answer a reviewer on 7 or 8 before anything is re-run:** state the ground model per building family, state the direction of the error (heating understated on F-factor buildings), and give the measured magnitude, which is **1.8 to 2.4% of site energy** on the one archetype so far measured under a physical ground model (Kiva, Paper 1 v3 Phase 4b). Do not claim identical boundary conditions across the archetype series.

---

## 7. Summary

One installation serves all the NU publications from NU2 onward: US reference prototypes, transformed to the two Canadian prescriptive codes that genuinely govern their sectors (NECB 2017 for commercial, NBC 9.36 for housing) with BTAP internal loads, retrofitted through a single measure catalogue (EEM1–EEM4) implemented in one applier, assembled into 35 canonical neighbourhoods, and simulated in EnergyPlus 22.1 under Montréal (and where applicable Calgary) CWEC2020v2 weather. NU2 stacks the measures cumulatively to measure depth; NU3 isolates them and doubles the baseline across two incumbent heating fuels to rank them fairly and price them; LMN runs the complete factorial to serve every combination interactively. The papers therefore differ in the question asked and the scenario packaging — never in the baselines, the measure definitions, or the simulation engine.

---

## 8. File Locations

| Content | Path |
|---|---|
| **Setup matrix, residential vs commercial, table form** | `docs_BEM_Explanation/NUs_Setup_Matrix.md` |
| **Ground coupling: census, per-archetype mapping, the two defects** | `docs_ACTIVE/NUs_1st_Paper/v3/explanation/GroundFloor_Convention.md` |
| Measure catalogue (active EEM set) | `docs_BEM_Explanation/EEM_setup.md` |
| Canadian baseline transformation | `docs_BEM_Explanation/CAN_transformation.md` |
| Building sources & simulation variants | `docs_BEM_Explanation/BEM_methodology.md` |
| EEM applier | `BEM_utils/idf_eem_applier.py` |
| Baseline appliers | `BEM_utils/idf_necb_applier.py`, `idf_nbc936_applier.py`, `idf_btap_loads_applier.py` |
| Neighbourhood registry | `Content/neighbourhoods/neighbourhood_registry.py` |
| NU2 final text + appendices | `docs_DONE/docs_publications/NUs_2ndJournal/` |
| NU3 current manuscript | `docs_ACTIVE/NUs_3rd_Paper/submission/final_reportv5.md` |
| NU2xNU3 conference verification | `docs_DONE/docs_publications/NUs_Conference.../NU2xNU3_integration_verification_report.md` |
| LMN campaign spec + results | `docs_DONE/docs_LMN_web/LMN-setup/LMN_master_setup.md`, `.../RESULTS/` |
