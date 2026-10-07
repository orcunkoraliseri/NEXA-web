# Simulation Setup Across the NU Publications: Residential vs Commercial, Table Reference

**Date:** 2026-07-27
**Purpose:** One place to look up *what is actually set* in every NU simulation, split by sector, with the residential and commercial columns side by side. Where the two sectors differ, this document says whether the difference is deliberate (building physics, Canadian regulatory split) or inherited (nobody chose it).
**Relationship to the companion document:** `System_Setup_NUs_Publications.md` is the **narrative**: why one installation serves five papers, and what changes between them. This document is the **tables**: the parameter-by-parameter setup. Read that one to understand the programme, this one to look up a value or answer a reviewer.
**Sources:** `BEM_methodology.md`, `CAN_transformation.md`, `EEM_setup.md`, `PV_methodology.md`, and `docs_ACTIVE/NUs_1st_Paper/v3/explanation/GroundFloor_Convention.md` (ground coupling, which none of the other four covers).

---

## 1. How to read this

Three kinds of sector difference appear in the tables, and they are not equivalent. Each row is tagged:

| Tag | Meaning |
|---|---|
| **[REG]** | Deliberate, and required. Canada regulates the two sectors under different codes, so the models must too. |
| **[PHYS]** | Deliberate, and physical. A house cannot take a VAV coil uplift and a hospital cannot take a residential preheat tank. Same ambition, different topology. |
| **[INH]** | **Inherited. Nobody chose it.** It arrived with the source prototypes and survived every transformation. These are the rows a reviewer can legitimately challenge. |

Only the **[INH]** rows are problems. There are four of them, and three concern the ground floor.

---

## 2. Table A: The full setup matrix

| Domain | Residential (RS, RC families) | Commercial / mixed-use (CC, MU, IC) | Tag |
|---|---|---|---|
| **Source prototype** | IECC 2024 single-family (3 variants), CZ6A | ASHRAE 90.1-2022 DOE/PNNL (16), 90.1-2019 datacenters (2), OpenStudio supplementals (7). Buffalo NY CZ6A base form | [REG] |
| **Canadian baseline code** | **NBC 9.36** (`idf_nbc936_applier.py`) | **NECB 2017** (`idf_necb_applier.py`) + BTAP internal loads | [REG] |
| **Wall U cap (Z6 / Z7A)** | NBC 9.36 table, wood-frame values | 0.247 / 0.210 W/m²K | [REG] |
| **Roof U cap (Z6 / Z7A)** | NBC 9.36 table | 0.183 / 0.162 W/m²K | [REG] |
| **Window U cap (Z6 / Z7A)** | **1.60 / 1.40** W/m²K | **1.90 / 1.60** W/m²K | [REG] |
| **Below-grade wall U cap** | NBC 9.36 table | 0.284 / 0.210 W/m²K | [REG] |
| **Heated slab / floor-on-grade U cap** | NBC 9.36 table | **0.568 / 0.379** W/m²K | [REG] |
| **Ground boundary condition** | **Plain `Ground`, no ground-temperature object at all** | **`GroundFCfactorMethod`** with `Construction:FfactorGroundFloor` | **[INH]** |
| **Ground temperature actually used** | **E+ default, flat 18 C** (arrived at by omission, invisible in the IDF) | **Buffalo air temperature lagged 3 months**, min in May, max in October | **[INH]** |
| **Air-tightness target (baseline)** | Tier 1: **2.5 ACH₅₀** (Z6) / 2.0 ACH₅₀ (Z7A), applied by scaling AFN effective-leakage-area | Tier 1: **0.25 L/s·m² at 75 Pa** | [REG] |
| **Lighting power density (baseline)** | Not clamped. Housing LPD is governed by EnerGuide labelling, not a prescriptive table | NECB Table 4.2.1.6, clamped by space type, skip-when-better | [REG] |
| **HVAC efficiency floors (baseline)** | Not clamped, same reason | NECB §5.2 minimum efficiencies | [REG] |
| **Internal loads / schedules** | Prototype-native (IECC/ResStock) | **BTAP** NECB-A occupancy, plug-load and thermostat schedules. Closes a ~26% EUI gap against the NRCan BTAP reference archetypes | [REG] |
| **Simulation engine** | EnergyPlus 22.1.0 | EnergyPlus 22.1.0 | -- |
| **Weather** | Montréal-Trudeau CWEC2020v2 (CZ6A) primary, Calgary Olympic Park (CZ7A) secondary | same | -- |
| **AirflowNetwork mode** | Neighbourhood runs `MultizoneWithoutDistribution`; single-building runs `MultizoneWithDistribution` | same | [PHYS] |

Every clamp in the baseline transformation uses **skip-when-better**: a surface or component that already meets the Canadian cap is left untouched. This matters when reading results, because it means a US prototype that was already better than NECB shows no change from the transformation, which is correct behaviour and not a bug.

---

## 3. Table B: Ground coupling, the one domain no methodology document covered

Measured 2026-07-27 across all 321 IDFs in the building library
(`docs_ACTIVE/NUs_1st_Paper/v3/implementation/csv/Paper1_v3_ffactor_census.csv`) and mapped onto the
35 NU archetypes (`Paper1_v3_ffactor_by_archetype.csv`).

### 3.1 What is in the library

| Treatment | Files | Share | Which buildings |
|---|---:|---:|---|
| `GroundFCfactorMethod` + `Site:GroundTemperature:FCfactorMethod` | 219 | **68.2%** | Most ASHRAE commercial prototypes, both MURB apartment prototypes |
| Plain `Ground`, **no** ground-temperature object -> E+ default 18 C | 55 | **17.1%** | **DetachedHouse, AttachedHouse**, the two small datacenters |
| Plain `Ground` + `Site:GroundTemperature:BuildingSurface` | 27 | 8.4% | Small Retail, Supermarket, the CHV buildings |
| **Both methods inside the same file** | 20 | 6.2% | **TallBuilding, SuperTallBuilding** (7 to 8 F-factor floors and 7 plain `Ground` floors each) |
| Kiva (`Foundation:Kiva`) | 0 | 0% | none, before Paper 1 v3 Phase 4b |

**There is no project convention.** The split follows building type and was never decided: the IECC residential prototypes contain no `Construction:FfactorGroundFloor` object at all, and the ASHRAE commercial ones ship with it.

### 3.2 What that does to the archetypes

| Group | Archetypes | Ground method |
|---|---|---|
| Pure F-factor | IC-DC, IC-DE, MU-C2, MU-U1, **RC-HR1, RC-HR2, RC-MR2, RC-MR3** | 100% F-factor |
| Pure `Ground` at the 18 C default | **RC-R, RC-T, RC-D, RC-ML** | 100% E+ default |
| **Mixed inside one NU** | the other **23** archetypes, including RC-MR1 and every CC, MU and RS | 2 or 3 methods at once |

**23 of 35 archetypes combine more than one ground method inside a single neighbourhood.** MU-HS combines three. The low-density residential archetypes and the mid/high-rise ones fall on opposite sides of the split, which runs straight through the density ladder that the NU papers compare.

### 3.3 The two defects, with magnitudes

**Defect 1: the F-factor series is lagged air temperature, and it is the wrong city.**
The twelve values shipped in all 219 F-factor files are the **Buffalo TMY3 monthly mean dry-bulb air temperature shifted forward three months** (verified locally, RMSE 0.028 °C over all shifts from -6 to +6). The EnergyPlus IDD memo prescribes exactly that: *"should be close to the monthly average outdoor air temperature delayed by 3 months for the location"*. So this is not a project error and not a PNNL error; the defect is in the prescription, because an undamped three-month lag gives a deep-soil phase on a surface-air amplitude.

| | Annual mean | **Nov to Mar mean** |
|---|---:|---:|
| Shipped series | 8.97 °C | **+10.14 °C** |
| Montreal EPW 0.5 m soil | 7.45 °C | **-1.92 °C** |

**About 12 K too warm through the heating season, while the annual mean looks fine**, so an annual sanity check does not catch it. Roughly **141 GJ/yr of understated heating per 893 W/K of F-factor floor**. The October value of 22.0 °C also exceeds a 21 °C setpoint, producing a spurious autumn ground *gain*. And it is Buffalo's series: every Canadian baseline set (CAN_MTL, CAN_CLG, Z5, Z7B) carries it while running Montreal or Calgary weather. Correctly lagged Montreal air would give April at **-9.0 °C**, not the shipped -3.4 °C.

**Defect 2: F-factor models core-slab loss as zero.**
`Q = F x ExposedPerimeter x dT`. Floor area away from the perimeter loses nothing by construction. On one mid-rise archetype the entire ground conductance is **893 W/K against a 37,612 W/K envelope, i.e. 2.4%**, so no slab measure can be worth more than 2.4% of envelope conductance. The same floor modelled with layers is **48.5%**. A factor of twenty, decided by the ground model alone. This is why EEM1's foundation/slab insulation measure needs the `_swap_cfactor_ffactor_to_layered` pre-pass, and why that pre-pass silently changes the ground boundary condition mid-ladder.

### 3.4 What EnergyPlus itself says

The IDD memo on `Site:GroundTemperature:BuildingSurface`:

> *CAUTION - Do not use the "undisturbed" ground temperatures from the weather data. These values are too extreme for the soil under a conditioned building.*

Any model in the 8.4% row above should be checked against that caution. It is also the primary source that settles what a `BuildingSurface` value should be: under a heated Montreal building, roughly 15 to 19.6 °C, annual mean around 17.3 °C, so the E+ default of 18 °C is close to right and an undisturbed annual mean (around 10 °C) is not.

### 3.5 Status

**Not fixed.** Correcting it would alter every F-factor model in the library, including the ones behind published papers. The staged plan is in `GroundFloor_Convention.md` section 4: Paper 1 v3 as pilot, then one Journal/Chile archetype measured under both models, then the library converted only if the delta is material. Measured so far, on Paper 1 v3's RC-MR2: the ground model is worth **1.8 to 2.4% of site energy** on the archetype side.

---

## 4. Table C: Retrofit measures by sector

Measure definitions are sector-identical. The *implementation* respects each building's native systems, selected by archetype predicates in `BEM_utils/idf_eem_applier.py`. Full catalogue: `EEM_setup.md`.

| Tier | Measure | Residential | Commercial / mixed-use | Tag |
|---|---|---|---|---|
| **EEM1** | Opaque assemblies | HPENV set, identical targets | HPENV set, identical targets | -- |
| EEM1 | Glazing | Triple, U 0.85 W/m²K, SHGC 0.40 | same | -- |
| EEM1 | Foundation / slab insulation | CZ6 and CZ7A only | same, **but requires the C/F-factor -> layered pre-pass** (see 3.3) | **[INH]** |
| EEM1 | Infiltration | x0.25 (Passive House target) | x0.25 | -- |
| **EEM2** | Heating topology | Single-family: **central DX deleted, per-zone PTHP**, AFN forced to `MultizoneWithoutDistribution` | **DX-coil uplift on the existing airloops**, PSZ/VAV/DOAS topology preserved | [PHYS] |
| EEM2 | ASHP performance | COP 4.5 heating / EER 17 cooling, CCHP curves wired, COP 2.5 floor, -25 °C compressor lockout | same curves and floors | -- |
| EEM2 | Defrost | `OnDemand` | same | -- |
| EEM2 | Backup lockout | -22 °C (CZ6) / -27 °C (CZ7A) | same | -- |
| EEM2 | Desuperheater to DHW | Single-family only, η 0.30, routes to the preheat tank | not applied | [PHYS] |
| **EEM3** | DHW plant | Transcritical CO₂ HPWH, COP 4.0, outdoor-air intake, -29 °C lockout | same plant | -- |
| EEM3 | Tank topology | **SF: 30-gal preheat tank** upstream (also avoids a v22.1 Fatal with the desuperheater). **MURB: 50-gal swing tank + 75 W recirculation parasitic** | Central HPWH retrofit; integrated SCWH gated to Hotel / Hospital / SuperTall (coded, not yet exercised) | [PHYS] |
| EEM3 | Tank jacket | R-25, cycle-loss x0.64 | same | -- |
| **EEM4** | Daylight dimming setpoint | **300 lux**, reference point 1.5 m inward | **500 lux**, reference point 3.0 m inward | [REG] |
| EEM4 | LED / LPD | x0.55 | x0.55 | -- |
| EEM4 | Plug loads (ENERGY STAR) | **x0.65** (BTAP houses) | **x0.75** | [REG] |
| EEM4 | Fuel switching | **Yes, BTAP residential only**: heat-pump dryer x0.50, induction range x0.45, gas MELs x0.85 | **None** | [PHYS] |
| EEM4 | Automated blinds | All exterior windows WWR >= 0.10 | same, **skipped on Laboratory, TallBuilding, SuperTallBuilding** (blank-name fenestration triggers a v22.1 Fatal) | [PHYS] |
| EEM4 | Equipment measures | Applied | **Fully skipped on Hospital and OutPatientHealthCare** | [PHYS] |
| **All** | Datacenters | n/a | **Passthrough** past EEM1, process loads outside scope | [PHYS] |
| **PV** | Track | Native only at Default; **Tier-3 geometric injector** from EEM1 on. Pitched-roof strategy (`Generator:Photovoltaic`) | Native only at Default; Tier-3 from EEM1 on. Flat-roof strategy (`Generator:PVWatts`, 45° racking) | [PHYS] |
| PV | Reporting | Dedicated columns, **never netted into EUI** | same | -- |

The same triple glazing, the same infiltration target, the same heat-pump COPs and the same LED reduction apply everywhere. The gates encode building physics and the Canadian regulatory split, not different ambition levels. The one exception is the EEM1 foundation row, which is tagged [INH] because its behaviour depends on a ground model nobody chose.

---

## 5. Table D: Which setup each publication carries

| Item | **NU1** | **NU2** | **NU3** | **NU2xNU3 (Chile)** | **LMN** |
|---|---|---|---|---|---|
| Question asked | archetype / morphology framework | how far toward net-zero | which measure first, under what economics | feasibility x bankability | interactive exploration of the full factorial |
| Stock | RC family only, qualitative metro cross-map | 33 NUs, four families (IC excluded) | same 33 NUs (from the 35-NU / 350-run campaign) | same 33 NUs; data join for energy and economics, **plus a 33-run PV recomputation (2026-07-31)** | 35 NUs, plus an RC-only sub-campaign (LMN-RC) |
| Baseline | Generic HPENV (RSI 7 / 14), pre-dates the NECB pipeline | NECB 2017 + NBC 9.36 + BTAP | NECB 2017 (Z6) + NBC 9.36 (Z6) | inherits NU2 + NU3 | NECB + NBC + BTAP, US 90.1-2022 kept as a third track |
| Climate | Montréal CWEC | Montréal CZ6A (final text) | Montréal CZ6A simulated; seven cities reached by economic transfer, no re-simulation | Montréal CZ6A only | Montréal CZ6A + Calgary CZ7A (+ Buffalo proxy for the US track) |
| Scenario packaging | single static configuration | cumulative EEM1 -> EEM4 | isolated domains (Shapley, order-free) | join of NU2 and NU3 outputs | full 2⁴ factorial (16 cells; multifamily NUs run 12) |
| Incumbent heating | Ideal Loads | prototype-native | **gas furnace AND electric baseboard**, both simulated for every NU | gas (NU3 side) | prototype-native |
| PV | static rooftop 45° + BIPV south façade | Tier-3 from EEM1 (**as it stood in May 2026**: all roof planes, PV laid flat on flat roofs) | **none, by design** | **recomputed 2026-07-31 with current Tier-3**, not inherited from NU2 | native at Default, Tier-3 in the other 15 cells |
| **Ground coupling** | **mixed, per Table B** | **mixed, per Table B** | **mixed, per Table B** | **mixed, per Table B** | **mixed, per Table B** |
| **Ground temperature** | **F-factor archetypes: lagged Buffalo air. Others: 18 C default** | same | same | same | same |
| Economics | -- | cost-effectiveness pathways | full NPV / IRR / payback, capital-cost matrix, incentives, inter-provincial transfer | feasibility-bankability pairing | -- |

The ground rows are identical across every publication because none of them ever set the ground model; they all inherit it from the same library.

**PV row, note added 2026-07-31.** The Chile paper no longer inherits NU2's PV column. NU2 was simulated with a Tier-3 injector that predates two later changes: pitched roofs received modules on every roof plane including north-facing slopes (corrected 2026-05-29 to the south-facing dominant face only), and flat roofs received modules lying flat on the roof surface (replaced by a single combined 45-degree rack per building at GCR 0.40). The Chile paper's 33 units were therefore re-simulated on 2026-07-31 with the current injector, reusing the archived neighbourhood IDFs unchanged so that stock, baselines, climate, scenario ladder, AirflowNetwork mode and ground coupling are byte-identical to NU2; only the array on the roof differs.

**The archived set is version-mixed, and each unit was run on the engine matching its own header.** Reading the `Version` field out of all 33 IDFs gives 29 at 22.1 and exactly four, RC-D, RC-ML, RC-R and RC-T, at 23.1. Pinning one engine fleet-wide is wrong in both directions: a 23.1-authored DX coil on the 22.1 engine loses the inserted `2023 Rated ... Fan Power Per Volume Flow Rate` field and every later field slides up by one, and the reverse pinning shifts the other 29 the other way. Either way the run dies with Severes and a Fatal in under a second, before the simulation begins. This cost the round two relaunches; do not restate a single version for this set.

Consequence to state plainly rather than paper over: the correction is **not a uniform reduction**, because the two placement changes run in opposite directions. Fleet generation over the 33 units is 0.925 of the archived total, but per unit the ratio runs from 0.62 to 1.25, and 11 of the 33 go **up**: pitched archetypes lose array to the dropped north slope, while flat-roof archetypes gain because a 45-degree rack collects more than the same modules lying flat. On the four gable-roof residential clusters the area loss is exactly half, and the measured generation loss is far less than half, 26.2% to 37.7%, since a north slope at Montreal's latitude yields only 36% to 61% of what the south slope on the same roof yields. Quote the measured pair, not the area figure alone.

One further consequence, easy to miss: the combined rack is a `Shading:Building:Detailed` surface, so unlike the `Decoupled` generators it **does** enter the thermal model and shades the roof beneath it. A PV regeneration is therefore not thermally neutral on flat-roof units; measured site-EUI movement reaches 2.3% there, against 0.007% to 0.021% on the pitched gable units that get no rack.

Facade BIPV is available in the current injector but self-gates off in every one of these neighbourhood merges, so no unit gains wall-mounted generation. Method, per-unit array geometry and gates: `docs_ACTIVE/NUs_Journale_Revista Ingenieria de Construccion/v2/implementation/v7_pv_south_only_correction_plan.md`; per-unit audit table: the same folder's `outputs/csv/v7_pv_recompute_audit.csv`.

---

## 6. The honest list: what is not harmonized

Four rows carry the **[INH]** tag. Ranked by how much a reviewer could do with them.

1. **The ground boundary condition differs by building type, and the split runs through the density ladder.** Residential archetypes are on a plain `Ground` boundary at the E+ default; mid-rise and high-rise are on F-factor. Any comparison of a low-density archetype against a high-density one crosses a method boundary. This is the one that matters, because comparing archetypes against each other **is** the NU papers' result.
2. **The F-factor ground-temperature series is lagged Buffalo air temperature, about 12 K too warm through the heating season, and is used unchanged under Montreal and Calgary weather.** Understates heating for every F-factor building. Direction is known; the magnitude is roughly 141 GJ/yr per 893 W/K of ground floor.
3. **Twenty files use both ground methods inside one building** (TallBuilding, SuperTallBuilding). Neither method is an error alone, so nothing flags it.
4. **EEM1's foundation insulation cannot apply to an F-factor construction** and needs a pre-pass that converts the floor to layers, which changes the ground boundary condition mid-ladder. So the scenarios within one cumulative run do not all share a ground model.

Three further points, already documented in `System_Setup_NUs_Publications.md` section 6 and repeated here so this table stands alone: NU1 is a different rigour level and should be cited only for the archetype framework; the EnergyPlus version (22.1.0) is not stated in the final NU2/NU3 texts; and the AirflowNetwork mode differs by scale rather than by paper, identically in every campaign.

**How to answer a reviewer on point 1 or 2 today, before anything is re-run:** state the ground model per building family, state the direction of the error (understated heating on F-factor buildings), and give the measured magnitude (1.8 to 2.4% of site energy on the one archetype where it has been measured under a physical ground model). Do not claim the models share identical boundary conditions across the archetype series, because they do not.

---

## 7. Where to go deeper

| Topic | Document |
|---|---|
| Why one installation serves five papers, and what changes between them | `System_Setup_NUs_Publications.md` |
| Building sources, simulation variants, key modelling assumptions | `BEM_methodology.md` |
| NECB 2017 and NBC 9.36 transformation, validation gates | `CAN_transformation.md` |
| Active EEM measure catalogue, gates, EnergyPlus objects touched | `EEM_setup.md` |
| Two-track PV model, sizing, report columns | `PV_methodology.md` |
| **Ground coupling: census, per-archetype mapping, the two defects, the staged fix** | `docs_ACTIVE/NUs_1st_Paper/v3/explanation/GroundFloor_Convention.md` |
| Errors seen before, with causes and fixes | `debug_References.md`, chapters 7 and 16 for the ground entries |
| Ground-model evidence CSVs | `docs_ACTIVE/NUs_1st_Paper/v3/implementation/csv/Paper1_v3_ffactor_census.csv`, `..._ffactor_by_archetype.csv`, `..._ground_model_survey.csv` |
