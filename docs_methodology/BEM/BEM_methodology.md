# IDF Reader & EnergyPlus BEM Toolkit — Methodology Overview

Prepared: 2026-04-14
Author: Orcun Koral Iseri
Purpose: Describe the building sources, simulation variations, and modelling assumptions that underpin the in-house BEM toolkit.

---

## 1. Introduction

The IDF Reader & EnergyPlus BEM Toolkit is a Python-based software pipeline developed to automate Building Energy Model (BEM) preparation, simulation, and cross-comparison at both the single-building and neighbourhood scales. The toolkit is organised around two complementary tracks (see accompanying flowcharts):

- **Track A — IDF Analysis Pipeline (`main.py`)**: A fast, read-only path that parses IDFs, extracts metadata and geometry, compares models, and injects existing EUI results into HTML/CSV reports. It does not call EnergyPlus.
- **Track B — BEM Simulation Pipeline (`main_BEM.py`)**: The primary engine. It handles configuration, IDF transformation (envelope upgrades, HVAC idealisation, EEM retrofits, PV injection), EnergyPlus execution across versions 22.1, 23.1 and 24.2, and neighbourhood-scale aggregation of up to 24 buildings.

Both tracks share a common foundation of core inputs: (i) a curated set of base building geometries and prototypes, (ii) a canonical neighbourhood registry, and (iii) climate data (EPW weather files, primarily Montreal CZ6A, with CZ5A and CZ7 Calgary also available). The present document explains the origin of these building prototypes, the variations applied to them during simulation, and the key modelling assumptions made along the way.

---

## 2. Simulation Interface (Menu-Driven)

`main_BEM.py` is operated through an interactive text-based menu. At launch the user selects one option; the menu re-prompts after each operation until `q` is entered.

```
  1. Run single simulation  (select IDF + EPW)
  2. Run all simulations    (parallel batch)
  3. Process results        (SQL -> JSON + PNG)
  4. Visualize results      (JSON -> bar chart)
  5. Compare demands        (demand-by-demand IDF diff)
  6. IDF modification sim   (IAL / HVAC + HPENV / IAL + HPENV / EEM / EEM2 / EEM3 / compare all / master (4-sim: DEFAULT / EEM1 / EEM2 / EEM3, PV cols: default + improved))
  7. Batch modification sim (IAL / HVAC + HPENV / IAL + HPENV / EEM / EEM2 / EEM3 / compare all / master (4-sim: DEFAULT / EEM1 / EEM2 / EEM3, PV cols: default + improved))
  8. Neighbourhood layout   (IAL / HVAC + HPENV / IAL + HPENV / EEM / EEM2 / compare all / master (4-sim: DEFAULT / EEM1 / EEM2 / EEM3, PV cols: default + improved))
  9. Neighbourhood Batch sim (IAL / HVAC + HPENV / IAL + HPENV / EEM / EEM2 / compare all / master (4-sim: DEFAULT / EEM1 / EEM2 / EEM3, PV cols: default + improved))
  10. Full PV scan          (standalone buildings, PV y+n)
  11. Neighbourhood preview (geometry-only HTML, no simulation)
  q. Quit
```

### 2.1 Single-Building Workflows (Options 1–7)

| Option | Name | Description |
|---|---|---|
| 1 | Run single simulation | Prompts the user to select one IDF and one EPW, then runs a single EnergyPlus simulation, writing outputs to a per-job directory. |
| 2 | Run all simulations | Dispatches all IDFs in the content library against the active EPW in parallel (up to `MAX_NEIGHBOURHOOD_WORKERS` concurrent processes). |
| 3 | Process results | Post-processes SQL output files into JSON summaries and PNG charts for all completed simulations. |
| 4 | Visualize results | Reads JSON summaries and renders comparative bar charts (EUI by end use, building type, etc.). |
| 5 | Compare demands | Runs a demand-by-demand IDF diff between two selected IDFs, highlighting changes in occupancy, lighting, equipment, and HVAC schedules. |
| 6 | IDF modification sim | Applies programmatic modifications to a single selected IDF and simulates. The sub-option selects the modification variant (see Section 4). |
| 7 | Batch modification sim | Same as option 6, but applied to all IDFs in the library in one automated pass. |

### 2.2 Neighbourhood Workflows (Options 8–9)

| Option | Name | Description |
|---|---|---|
| 8 | Neighbourhood layout | Applies modifications and simulates a single neighbourhood (all buildings on site), selected interactively from the registry. |
| 9 | Neighbourhood Batch sim | Runs all registered neighbourhoods sequentially, applying the selected modification variant to each. |

### 2.3 Utility Options (10–11)

| Option | Name | Description |
|---|---|---|
| 10 | Full PV scan | Runs all standalone buildings twice — with and without PV — and reports generation yield and net EUI impact side by side. |
| 11 | Neighbourhood preview | Generates a geometry-only HTML visualisation of a selected neighbourhood layout without running any EnergyPlus simulation. |

### 2.4 Modification Sub-Options

Options 6, 7, 8, and 9 share the same set of modification sub-options:

| Sub-option | Description |
|---|---|
| IAL | Ideal Air Loads only — strips real HVAC; reports thermal loads. |
| HVAC + HPENV | High-performance envelope with the original HVAC system retained. |
| IAL + HPENV | Combined HP envelope and ideal loads (pure envelope thermal demand). |
| EEM | Energy Efficiency Measures — envelope + lighting + setpoints (EEM1 track). |
| EEM2 | EEM1 + HVAC heat-pump upgrades. |
| EEM3 | EEM2 + DHW heat-pump water heater. |
| Compare all | Runs all variants above and exports a side-by-side summary CSV. |
| Master | 4-simulation run (DEFAULT / EEM1 / EEM2 / EEM3) with PV generation columns (default + improved) in the master CSV. |

---

## 3. Building Sources

The simulation library is built from three distinct sources. Each serves a different function in the study and reflects different code frameworks.

### 3.1 ASHRAE 90.1-2022 Commercial Prototypes (DOE/PNNL)

The backbone of the commercial library is the set of reference prototype IDFs developed by the U.S. Department of Energy and the Pacific Northwest National Laboratory in support of ANSI/ASHRAE/IES Standard 90.1-2022. These prototypes are the standard reference for commercial-building energy analysis in North America and encode climate-zone-specific HVAC sizing, envelope performance, and internal loads.

Sixteen ASHRAE 90.1-2022 prototypes are used in the toolkit, covering the typical commercial archetypes that appear in mixed-use neighbourhoods: apartment high-rise and mid-rise, hospital, hotels (large and small), offices (large, medium, small), outpatient healthcare, restaurants (fast food and sit-down), retail (standalone and strip mall), schools (primary and secondary, downscaled to 50% to match neighbourhood plot sizes), and warehouse. Two additional high-rise geometric variants (15 and 20 storeys) have been derived to study the effect of building height on wind exposure and solar access. All these prototypes are used in their Buffalo, NY base form — see Section 6.1 for the rationale.

### 3.2 IECC 2024 Residential (Single-Family)

For the residential building stock, the toolkit uses the 2024 International Energy Conservation Code (IECC) single-family prototype for Climate Zone 6A. Three variants of this prototype are maintained: a base two-storey house with attached garage, a no-garage variant, and a compact 90 m² row-house variant used in dense neighbourhood configurations. All IECC models use a gas furnace and DX cooling, with AirflowNetwork modelling of envelope infiltration and duct leakage.

### 3.3 Datacenter Archetypes and CHV Buildings

Two large-format ASHRAE 90.1-2019 datacenter prototypes (high-ITE and low-ITE density, pinned to EnergyPlus 22.1) are integrated for neighbourhoods containing large data centres. In parallel, a project-developed Community Housing Variant (CHV) building represents a near-zero-energy archetype not covered by standard prototypes: a high-performance small retail building with natural ventilation, electrochromic windows, LED lighting, and heat-pump electric heating.

### 3.4 OpenStudio Standard Library Archetypes

Seven additional archetypes fill gaps in the ASHRAE 90.1-2022 DOE/PNNL prototype set. Six were generated from the OpenStudio Standard Library using ASHRAE 90.1-2019, Climate Zone 6A, with Buffalo, NY as the reference location, matching the rest of the library. One (Supermarket) is a standalone DOE reference building. All are pinned to EnergyPlus 22.1 and follow the `_v221.idf` naming convention.

| Building | Standard | Archetype description | DEFAULT EUI (kWh/m²·yr) |
|---|---|---|---|
| College | 90.1-2019 CZ6A | University teaching and research facility; VAV with water-cooled centrifugal chiller and hot-water boiler. The DOE/PNNL prototype set does not include a College building; this IDF was generated in OpenStudio to fill that gap. | — |
| Supermarket | DOE reference (V24.2 → V22.1) | Grocery retail with commercial refrigeration. The source IDF ships with design-day `RunPeriod` objects; the pipeline auto-converts these to an annual January–December period whenever this building is used in options 6–9. | — |
| Laboratory | 90.1-2019 CZ6A | High-exhaust research laboratory. Heating-dominated at DEFAULT (exhaust-air makeup accounts for ~703 kWh/m²·yr). EEM2 HVAC electrification reduces total EUI by 73.6%. | 998.5 |
| TallBuilding | 90.1-2019 CZ6A | High-rise commercial / mixed-use (~40 storeys). Strong EEM1 + EEM2 response: −28.8% envelope + lighting, then −27.7% additional from HVAC electrification. | 165.1 |
| SuperTallBuilding | 90.1-2019 CZ6A | Super-tall mixed-use (> 40 storeys). Four benign coil-UA sizing Severes occur at DEFAULT — EnergyPlus recovers and completes successfully (0 Fatal). Total EEM3 reduction: −65.0%. | 187.0 |
| SmallDataCenterHighITE | 90.1-2019 CZ6A | Small datacenter, high IT equipment density. EEM measures deliver < 0.1% savings — IT plug loads dominate and are outside EEM scope. | 7 094 |
| SmallDataCenterLowITE | 90.1-2019 CZ6A | Small datacenter, low IT equipment density. Same EEM insensitivity as the high-ITE variant. | 2 864 |

**Downgrade methodology.** All six OpenStudio IDFs were exported at EnergyPlus version 25.1 and surgically downgraded to 22.1 by reverse-applying the published transition rules (`Rules22-1-0-to-22-2-0.md` through `Rules24-1-0-to-24-2-0.md`). Object classes requiring edits across one or more files: `ZoneInfiltration:DesignFlowRate` (removal of `Density Basis` field plus Space→Zone name remapping), `Boiler:HotWater`, `Sizing:Zone`, `Controller:OutdoorAir`, `Chiller:Electric:EIR`, `Coil:Cooling:DX:TwoSpeed`, `Coil:Cooling:DX:SingleSpeed`, `HeatExchanger:AirToAir:SensibleAndLatent`, and `AirLoopHVAC:UnitarySystem`. All six validated with 0 Severe / 0 Fatal on V22.1 baseline annual runs. The Supermarket downgrade from V24.2 required only a version bump plus removal of one field in `Coil:Cooling:DX:SingleSpeed`.

---

## 4. Simulation Variations

Each base IDF can be run in one or more of the following variants through the Programmatic Modifications branch of the pipeline (Branch 3 in the technical flowchart). The variants are designed as a progression of "what is being studied" — from as-designed baseline to isolated envelope performance to deep retrofit.

### 4.1 Option 1 — Default (As-Designed Baseline)

The source IDF is optimised (metered outputs and SQLite reporting injected) and simulated without any envelope or HVAC changes. Output tag `DEFAULT`. This is the reference energy performance of the building under its original design, driven by the Montreal CWEC2020v2 weather file. All subsequent variants are compared against this baseline.

### 4.2 Option 6 — Ideal Air Loads (IAL)

All HVAC and plant-loop objects are stripped and replaced with `ZoneHVAC:IdealLoadsAirSystem`, one per conditioned zone. The IdealLoads system has unlimited capacity, meets setpoints perfectly, and reports heating and cooling as **thermal energy** (kWh of heat added or removed) rather than fuel consumed. It carries no fans, no pumps, no performance curves, and no defrost penalty.

The purpose of this variant is to expose the **true thermal load** of the building envelope — the minimum amount of conditioning that any HVAC system would have to deliver to maintain comfort. Output tag `IAL`. This variant is essential for envelope performance studies, load disaggregation, and for isolating the HVAC system's contribution to total energy use.

A critical point: IAL values (reported in kWh thermal) are **not directly comparable** with the fuel/electricity consumption of the baseline HVAC. The ratio `IAL_thermal / HVAC_energy` is instead the effective seasonal coefficient of performance of the real system (see Section 6.2).

### 4.3 Option 7 — High-Performance Envelope (HPENV)

All exterior surface constructions are remapped to high-performance alternatives: walls to RSI ≈ 6.7 m²K/W, roofs to RSI ≈ 14 m²K/W, windows (where needed) to a simple glazing assembly with U ≤ 0.926 W/m²K and SHGC ≈ 0.57. The original HVAC system is kept intact, so the simulation reflects how the real HVAC performs against a substantially improved envelope. Output tag `HPENV`.

Two important skip rules govern window replacement. First, if the existing window is already better than the HP target (as is the case for ASHRAE 90.1-2022 prototypes with U ≈ 0.363–0.382 W/m²K), the window is left untouched — applying HP would actually increase cooling loads through its higher SHGC. Second, if a window is controlled by a `WindowShadingControl` with `SwitchableGlazing` (electrochromic), it is preserved intact to avoid orphaning the shading control logic. These skip rules are documented in detail in Section 6.3.

### 4.4 Option 8 — Combined IAL + HPENV

Both modifications are applied in sequence: HP envelope first, then HVAC stripping. The resulting IDF has HP constructions and ideal loads, and therefore measures the **pure envelope thermal demand at maximum performance level** — the theoretical minimum thermal load that can be reached through envelope and HVAC measures alone. Output tag `IAL_HPENV`. This is the most informative variant for assessing the upper bound of envelope-driven energy savings.

### 4.5 Option 9 — Energy Efficiency Measures (EEM)

The EEM variant represents a deep retrofit scenario and combines five building-level measures on top of the HP envelope:

1. High-performance wall insulation (RSI = 6.73 m²K/W) — reuses the HPENV wall material.
2. High-performance roof insulation (RSI = 14.04 m²K/W) — reuses the HPENV roof material.
3. High-performance windows (U ≤ 0.926 W/m²K) — reuses the HPENV window logic with the same skip rules.
4. LED lighting retrofit: all `Lights` objects have their `Watts per Zone Floor Area` scaled by 0.60 (40% LPD reduction).
5. Optimised HVAC setpoints: thermostat `Schedule:Day:Interval` values are clamped to 20 °C heating and 25 °C cooling.

The original HVAC system is retained. Output tag `EEM`. District-level retrofit measures (solar thermal collectors, waste-to-energy CHP, borehole thermal energy storage, natural-gas district heating) are handled separately at the neighbourhood scale and are not part of this building-level variant.

### 4.6 Neighbourhood Simulations (Options 9d / 9e)

At the neighbourhood scale (Branch 4 in the flowchart), up to 24 building IDFs are placed on a site according to the canonical layout in `neighbourhood_registry.py` and simulated concurrently. Each neighbourhood can be run across 4 variants (DEFAULT, IAL, HPENV, IAL_HPENV) or 8 variants with PV additions. The registry covers 28 Canadian neighbourhoods grouped into portfolios such as RS-I, RS-R, RS-HR, MU-S, MU-C, MU-I, MC-C, MC-MC, IC-B and IC-DC (mixed-use, residential, institutional, and industrial/datacenter typologies).

Because neighbourhood runs stress EnergyPlus's AirflowNetwork solver differently from single-building runs, a different `AirflowNetwork:SimulationControl` mode is used (`MultizoneWithoutDistribution`); this is discussed in Section 6.6.

### 4.7 Photovoltaic (PV) Injection — EEM Track

Any simulation variant in the 6e and 9e branches can activate a photovoltaic generation layer. The pipeline operates entirely on the IDF as plain text (no `eppy` dependency), which keeps it compatible with every EnergyPlus version in the library (8.x, 22.1, 23.1, 24.2). A full description of the PV layer — including the two-track model, roof classification, tilt logic, and sizing rules — is given in Section 5.

---

## 5. Photovoltaic (PV) Simulation Layer

**Aim:** DEFAULT track = leave-as-is native PV from the source IDF; EEM track (Tier-3 injector) = geometry-aware PV sized from actual roof area, stacked on top of the EEM envelope / HVAC / DHW upgrades.

The PV layer is the mechanism by which the toolkit produces and compares on-site solar generation scenarios. It is geometry-aware: panel placement, tilt, azimuth, and capacity are derived automatically from each building's roof geometry rather than set manually.

### 5.1 Two-Track PV Model — DEFAULT vs EEM

The pipeline runs one EnergyPlus simulation for the DEFAULT case and one for each EEM tier. PV is handled differently in each track:

| Track | PV behaviour | Use case |
|---|---|---|
| DEFAULT | Source IDF copied unchanged; the Tier-3 injector is **not** run — native PV objects in the prototype are preserved as-is | Baseline scenario; reflects whatever PV the source prototype already ships with (often zero) |
| EEM1 / EEM2 / EEM3 | The Tier-3 injector adds rooftop PV sized from the actual roof geometry, on top of the EEM envelope / HVAC / DHW upgrades | Best-practice PV scenario with geometry-optimised panels |

The DEFAULT track is meaningful because most ASHRAE 90.1-2022 prototype IDFs (16 of 20) ship with `Generator:PVWatts` objects already embedded at **0° tilt** (horizontal). This is the ASHRAE Section 10.4 compliance placeholder (0.6 W/ft² of conditioned floor area at flat tilt), not an engineering-optimal design. In the DEFAULT track these horizontal panels are left in place so that the baseline scenario reflects the code-minimum PV already present in the prototype. In the EEM track the Tier-3 injector strips and replaces them with geometry-optimised equivalents.

### 5.2 Building Classification by Roof Geometry

Before any PV object is injected, the building is classified into one of three groups by `classify_pv_group()` (in `BEM_utils/pv_utils.py`). Classification is based on the tilt angle of each exterior roof surface, computed from the polygon's surface normal:

```
n = (v1 − v0) × (v2 − v0)            # cross product of two roof edges
tilt = arccos( |n̂ · ẑ| )              # angle between normal and vertical
```

| Group | Condition | Typical Examples | PV Strategy |
|---|---|---|---|
| **A** | At least one pitched surface (tilt > 5°) | Residential, small office | Surface-attached `Generator:Photovoltaic` |
| **B** | All flat (tilt ≤ 5°), single Z-level | Restaurants, retail, warehouse | `Generator:PVWatts` with tilted racking |
| **C** | All flat, multiple Z-levels | Mid/high-rise, large office, hospital | `Generator:PVWatts` per roof level |

Groups B and C share the same injection logic (both use `Generator:PVWatts`); the distinction exists only for upstream metadata and per-level capacity accounting on stepped high-rise buildings.

### 5.3 Group A — Pitched-Roof Strategy (`Generator:Photovoltaic`)

For buildings with pitched roofs, panels are **flush-mounted** on the existing roof surface. The EnergyPlus object pair used is `Generator:Photovoltaic` linked to a `PhotovoltaicPerformance:Simple` performance model. Panel tilt and azimuth are inherited directly from the underlying `BuildingSurface:Detailed` object — they are not specified separately.

**Orientation optimisation.** Before panels are attached, an orientation step (in `pv_optimizer.py`) identifies the dominant south-facing azimuth of the roof and rotates the building if necessary. The rotation is applied by patching the `North Axis` field of the `Building` object (a single regex substitution on the IDF text). EnergyPlus rotates all surface coordinates internally at runtime using this field, so no geometry is physically moved and shading from neighbouring buildings or terrain remains consistent. The rotation offset is computed as:

```
offset = (180° − dominant_azimuth) mod 360°
```

**Surface selection.** After rotation, surfaces qualify for PV if tilt is between 10° and 80° (excluding near-flat and near-vertical surfaces) and corrected azimuth is between 135° and 225° (within ±45° of true south). North-facing pitched surfaces would produce less than 30% of south-facing yield at northern latitudes in winter and are therefore excluded.

**Capacity determination.** Capacity is implicit, derived from the physical surface area and two parameters:

```
P_DC [W] = Irradiance [W/m²] × Surface_Area [m²] × active_fraction × cell_efficiency
```

with `active_fraction = 0.90` (packing factor, accounting for panel gaps, mounting hardware, and roof edge setbacks) and `cell_efficiency = 0.20` (20% monocrystalline module at STC).

**Heat transfer mode.** `Decoupled` — the PV panels do not thermally interact with the building envelope. This is the correct choice for comparative PV scenario studies because it isolates electrical output without confounding heating/cooling loads through roof shading effects.

**Consequence of pitched-roof yield.** Because panel tilt equals the underlying roof pitch, the annual yield of a Group A building is determined by its existing geometry, not by an optimal tilt choice. For a residential building at 3:12 pitch (tilt ≈ 14°) or 6:12 pitch (tilt ≈ 27°), the tilt is noticeably below the Montreal optimum (~45°), and yield will be lower per installed m² than a flat-roof building with tilted racking. This is the standard residential installation approach and avoids the complexity of adding tilt-up racking on a pitched surface.

### 5.4 Groups B and C — Flat-Roof Strategy (`Generator:PVWatts`)

For flat roofs, panels are **mounted on ballasted racking** at a fixed tilt above the roof membrane. The EnergyPlus object used is `Generator:PVWatts`, a math-only performance model that does not attach to any `BuildingSurface:Detailed` object and adds no shading geometry to the simulation. This matches the physical reality (panels are decoupled from the roof) and avoids the need to create dummy surface objects.

**Tilt angle.** The tilt is fixed at **20°** for all Group B/C buildings. This value provides a practical balance between annual yield, inter-row spacing requirements, and snow-shedding performance for northern sites.

**Azimuth.** Fixed at 180° (true south) for all Group B/C buildings. Maximum annual yield in the Northern hemisphere.

**Capacity calculation.** For each exterior roof surface with `Outside Boundary Condition = Outdoors`, capacity is sized from the horizontal projected area:

```
capacity_W = projected_area [m²] × GCR × module_power_density [W/m²]
capacity_kW ≈ projected_area [m²] × 0.080
```

with the following parameters:

| Parameter | Value | Basis |
|---|---|---|
| Ground Coverage Ratio (GCR) | 0.40 | Practical flat-roof racking density at 20° tilt |
| Module power density | 200 W/m² | Mainstream monocrystalline module at STC |
| System losses | 14% | Wiring, soiling, mismatch, availability (PVWatts default) |
| Tilt | 20° fixed | Practical balance of yield, row spacing, and snow shedding |
| Azimuth | 180° (true south) | Maximum annual yield |

One `Generator:PVWatts` object is emitted per roof surface. For a multi-level flat-roof building such as ApartmentMidRise (9 roof surfaces across setbacks) this yields 9 independently sized generators. Surfaces below 0.1 kW capacity are skipped to avoid cluttering the IDF with trivial contributions.

**Multi-storey high-rise coverage.** Because `Generator:PVWatts` is emitted per exterior roof surface, stepped or setback roofs are handled correctly — each level's flat area contributes proportionally.

### 5.5 Sizing Cases A–D

When the Tier-3 injector is activated (EEM track), the current PV state of the source IDF and its roof type combine into four sizing cases. This ensures that buildings already carrying the ASHRAE 0° placeholder are not doubly counted and that pitched-roof buildings receive the appropriate object type.

| Case | Source IDF PV state | Roof type | Action |
|---|---|---|---|
| **A** | Has `Generator:PVWatts`, not full-roof coverage | Flat | Strip existing PV objects; re-apply PVWatts at full-roof coverage with 20° fixed tilt |
| **B** | Has `Generator:PVWatts`, already full-roof coverage | Flat | Update tilt angle only (0° → 20°); preserve sizing |
| **C** | No existing PV | Flat | Apply PVWatts to all exterior roof surfaces at 20° fixed tilt |
| **D** | No existing PV | Pitched | Apply `Generator:Photovoltaic` to qualifying south-facing pitched surfaces |

**Strip-before-replace logic (Case A).** The 13 ASHRAE buildings that ship with horizontal 0.6 W/ft² PV must have their existing PV objects removed before new ones are injected, because EnergyPlus errors out on duplicate `ElectricLoadCenter:Distribution` objects. The strip removes: `Generator:PVWatts`, `Generator:Photovoltaic`, `PhotovoltaicPerformance:Simple`, `ElectricLoadCenter:Generators`, `ElectricLoadCenter:Inverter:PVWatts`, `ElectricLoadCenter:Inverter:Simple`, and any `ElectricLoadCenter:Distribution` with bus type `DirectCurrentWithInverter`.

### 5.6 Shared Electrical Infrastructure

Regardless of group or case, three additional objects are appended once per IDF (the injection is idempotent — existing objects are not duplicated):

| Object | Settings |
|---|---|
| `ElectricLoadCenter:Inverter:Simple` | Inverter efficiency = 0.96 (96%) |
| `ElectricLoadCenter:Generators` | Lists all injected generators |
| `ElectricLoadCenter:Distribution` | Operation type: Baseload; Bus type: DirectCurrentWithInverter |

**Baseload operation** means all generated DC electricity is inverted and fed directly into the building's electrical bus, offsetting net consumption instantaneously. No battery storage is modelled in this phase.

Four hourly `Output:Variable` objects are added to capture DC and AC generation rates, produced energy, and inverter efficiency. Annual generation is aggregated post-simulation and stored in `eui_summary.json` as `pv_generation_kwh` (total) and `pv_generation_kwh_m2` (normalised by conditioned floor area).

### 5.7 Key Parameter Summary

| Parameter | Group A (pitched) | Groups B/C (flat) |
|---|---|---|
| EnergyPlus object | `Generator:Photovoltaic` + `PhotovoltaicPerformance:Simple` | `Generator:PVWatts` |
| Panel tilt | Inherited from roof pitch (~14–27° typical) | 20° fixed |
| Panel azimuth | Inherited from roof azimuth (post-rotation) | 180° (true south) |
| Active fraction / GCR | 0.90 (packing factor) | 0.40 (GCR) |
| Panel efficiency / power density | 20% cell efficiency | 200 W/m² module STC rating |
| System losses | — | 14% |
| Heat transfer mode | Decoupled | — (not attached to a surface) |
| Inverter efficiency | 96% | 96% |
| Surface filter | Tilt 10–80°, azimuth 135–225° | Exterior Roof, Outdoors BC |

### 5.8 PV Report Columns

Master reports surface three dedicated PV columns, keeping generation separate from building demand (PV is never netted into EUI).

| Column | Unit | Source | Description |
|---|---|---|---|
| `PV_default_gen` | kWh/m²·yr | DEFAULT simulation | Annual PV intensity from the prototype's native PV. Zero for buildings without native PV. The same value is repeated on every scenario row for a given building. |
| `PV_improved_gen` | kWh/m²·yr | EEM1/2/3 (Tier-3) simulation | Annual PV intensity after the Tier-3 injector. Populated on EEM rows only; blank on the DEFAULT row. Always ≥ `PV_default_gen`. |
| `PV_total` | kWh/yr | EEM1/2/3 (Tier-3) simulation | Absolute annual PV generation (not floor-normalised). Equal to `PV_improved_gen × floor_area_m²`. Useful for portfolio aggregation. |

The `PV_default_gen` value is replicated on every scenario row for a given building so that, for any EEM row, the reader can immediately see how much of the total PV output comes from the Tier-3 addition versus what the prototype already carried.

### 5.9 Phase 1 Known Limitations

Five archetypes currently fail or produce zero generation under the Tier-3 injector and are treated as known-bad for Phase 1: Hospital and OutPatientHealthCare (complex HVAC interaction with PV output variables), OfficeLarge and OfficeMedium (geometry edge case in surface parsing on the IAL/IAL+HPENV sub-pipelines), and the CHV Small Retail (no qualifying flat surfaces identified by the classifier). These buildings continue to run correctly in DEFAULT mode. Resolution is deferred to Phase 2.

---

## 6. Key Modelling Assumptions

The following assumptions are the most consequential methodological decisions in the toolkit. They are documented here because they materially affect result interpretation and because they are not obvious from the code alone.

### 6.1 Buffalo, NY as a Proxy for Montreal (Climate Zone 6A)

Montreal is classified as ASHRAE Climate Zone 6A — cold, humid continental. The DOE/PNNL prototype library does not include any Canadian city. Among the available CZ6A cities, Buffalo, NY was selected as the base location for every commercial prototype. The reasoning is as follows:

- **Climate zone match.** Buffalo and Montreal share the identical 6A designation, which specifies a cold, humid-continental regime. This determines both the heating-dominated load profile and the latent cooling load character.
- **Heating degree days.** Buffalo HDD₁₈ ≈ 3,500; Montreal HDD₁₈ ≈ 3,900. The 11% gap means the Buffalo-sized HVAC equipment is slightly undersized for Montreal, but closer than any other candidate (Rochester ≈ 3,300, Denver ≈ 2,700).
- **Latent load regime.** Buffalo's Lake Erie exposure produces humid summers representative of Montreal. Semi-arid cities in CZ6B (Great Falls, Helena) would systematically under-size latent cooling.
- **Precedent.** Buffalo is a primary representative city in DOE/PNNL prototype work and in the ASHRAE 90.1 energy savings analyses.

The Buffalo IDF therefore provides the geometry, internal loads, HVAC topology, and equipment sizing. The **Montreal CWEC2020v2 EPW** file then drives the thermal simulation. One consequence is that gas-fired rooftop units on restaurant prototypes — sized for Buffalo kitchen-exhaust makeup air — can be marginally overwhelmed in Montreal's colder winters, producing small amounts of unmet heating hours. This is a realistic reflection of reusing a Buffalo-sized system in a colder climate, not a pipeline error.

### 6.2 IAL vs HVAC Values Are Not Directly Comparable

`ZoneHVAC:IdealLoadsAirSystem` reports **thermal** energy (District Cooling / District Heating Water in GJ). The baseline HVAC reports **electricity or gas** consumed. The correct relationship is:

```
HVAC_energy = thermal_delivered / effective_seasonal_efficiency
```

When the real HVAC system meets setpoints, the ratio `IAL_thermal / HVAC_energy` is the **effective seasonal COP** of that system, including all real-world degradation (cold-ambient heat-pump losses, defrost cycles, resistance backup, part-load effects). For the sample buildings, measured seasonal COPs are:

| Building | System | Heating COP | Cooling COP |
|---|---|---:|---:|
| OfficeSmall | DX Heat Pump | 2.84 | 3.38 |
| RestaurantFastFood | Gas RTU + DX cooling | n/a (gas) | 2.72 |
| RestaurantSitDown | Gas RTU + DX cooling | n/a (gas) | 2.70 |
| SmallRetail (CHV) | HP Electric | 1.32 | N/V dominates |

Because of this, IAL cooling and heating values are always higher (in thermal kWh) than HVAC electricity values (in electric kWh) — this is physically correct and not a bug. It simply reflects that a real HVAC system delivers the same thermal load at a COP > 1.

### 6.3 Electrochromic Windows and Already-Performant Glazing Are Preserved

In HPENV, IAL_HPENV, and EEM variants, two categories of windows are intentionally left unchanged:

First, **electrochromic (switchable) glazing** — found in the CHV Small Retail building, where `WindowShadingControl` objects with `Shading Type = SwitchableGlazing` interpolate at every timestep between a bleached (clear, high-SHGC) and tinted (dark, low-SHGC) state based on zone temperature. If the underlying fenestration construction is replaced by a static HP Window, the shading control becomes orphaned: EnergyPlus either ignores it silently or produces inconsistent solar-gain behaviour. The consequence observed before this fix was implemented was a 30-50% phantom reduction in lighting, equipment, and water heating demand — all of which should be envelope-independent.

Second, **ASHRAE 90.1-2022 prototype windows**, which already outperform the HP target (U ≈ 0.363–0.382 W/m²K vs HP target U = 0.926 W/m²K). Applying HP Window to these would also raise SHGC from ≈ 0.37 to 0.57 and increase cooling loads by up to +54% for small, internally-loaded buildings. In both cases, the skip rule is "preserve what is already equal to or better than the target."

### 6.4 Natural Ventilation Is Preserved in IAL

For the CHV Small Retail building, `ZoneVentilation:WindandStackOpenArea` objects provide passive summer cooling through wind- and buoyancy-driven flow. These are envelope features, not HVAC components, and they are therefore preserved in the IAL variant as well as in the baseline. Removing NV from IAL but keeping it in DEFAULT would make HVAC vs IAL comparisons reflect design choice rather than HVAC efficiency. The result is that both variants show near-zero mechanical cooling for this building — the correct behaviour.

### 6.5 Geometric Updates for High-Rise Storey Variants

The ASHRAE high-rise apartment prototype uses a `ZoneGroup` multiplier to represent repeated middle floors. Simply changing this multiplier correctly scales floor area and internal loads but leaves zone `Z Origin` coordinates at the base-case elevations. EnergyPlus uses zone elevation for wind-driven convective coefficients, sky view factors, and solar access, so uncorrected zones sit at the wrong physical height. For neighbourhood placement (where shadows must fall in the right place) and for wind-exposure studies, the geometric correction is applied. Measured impact in Montreal: heating +7.6 to +14.2%, cooling −4.9 to −7.6%, net total EUI +2.0 to +2.5%.

### 6.6 AirflowNetwork Mode: Without Distribution at Neighbourhood Scale

The IECC residential IDF runs as a single building with `MultizoneWithDistribution`, which includes a full duct leakage and pressure-balance sub-model. At neighbourhood scale, where 24 independent buildings share the same AirflowNetwork solver matrix, the duct solver becomes numerically singular during high-wind Montreal weather (March/April reversal events), producing a fatal error mid-simulation. The pipeline therefore uses `MultizoneWithoutDistribution` for neighbourhood runs, retaining envelope crack infiltration, attic and crawlspace ventilation, garage leakage, and wind/stack pressure — but dropping the duct distribution component.

The accuracy cost is small: duct leakage typically contributes 5–15% of total infiltration, translating to ≤ 5% absolute EUI shift. Because **all neighbourhood variants** use the same mode, relative comparisons remain valid. Simulation wall time drops approximately tenfold.

### 6.7 EnergyPlus Version Selection

Different source IDFs are pinned to different EnergyPlus versions: ASHRAE 90.1-2022 and IECC 2024 IDFs use 22.1, the CHV Small Retail V242 uses 24.2, and datacenter IDFs are pinned to 22.1. Version is detected automatically from the `Version,X.X;` field of each IDF, and the appropriate executable is resolved through the configuration layer. One consequence of supporting multiple versions is that EnergyPlus 24.2 renamed the IdealLoads reporting column from `Electricity` to `District Heating Water`; the plotting code filters on recognised energy units (GJ, kWh, J, kBtu, Btu, MJ) rather than on column names, ensuring consistent capture across versions.

### 6.8 Downscaled Buildings

Three prototypes are used at 50% floor area to match neighbourhood plot sizes: Primary School, Secondary School, and Warehouse. The Buffalo secondary school prototype in particular has a footprint of 141 × 104 m, which exceeds the largest neighbourhood plot (142 × 71 m). Downscaling preserves geometry proportions and HVAC sizing ratios. Where even 50% scaling is insufficient for compact sites, a Calgary-resized secondary school (~1,266 m²) is used instead.

---

## 7. Reference Benchmarks

Simulated EUI results are cross-checked against four published reference sources, consolidated in `docs_reports/BEM_reference.md`:

| Source | Published | Coverage | Role |
|---|---|---|---|
| DOE Commercial Building Benchmark Models | 2008 | U.S. commercial archetypes, 16 climate zones | Archetype shape, HVAC type, climate sensitivity |
| NRCan Canadian National Median Reference Values | 2018 | Canadian commercial and institutional stock medians | Post-simulation benchmarking and calibration |
| ASHRAE 90.1-2022 Energy Savings Analysis | 2024 | 90.1-2019 vs 90.1-2022 code delta | Code-delta expectations for commercial models |
| 2024 IECC Residential Energy Savings Analysis | 2024 | 2021 IECC vs 2024 IECC | Code-delta expectations for residential models |

Simulated values in Montreal consistently fall within the expected range of the DOE 2008 CZ6A (Minneapolis) reference EUIs, adjusted for Montreal's colder and more humid climate.

---

## 8. Summary

The toolkit is designed around three ideas. First, the simulation library is built on internationally recognised reference prototypes — 16 ASHRAE 90.1-2022 commercial prototypes, 3 IECC 2024 residential variants, 2 large-format ASHRAE 90.1-2019 datacenter archetypes, and 7 OpenStudio/DOE supplemental buildings (College, Supermarket, Laboratory, TallBuilding, SuperTallBuilding, and 2 small-format datacenter variants) — supplemented by a CHV near-zero-energy building. Second, every building can be simulated in a progression of variants (Default → IAL → HPENV → IAL+HPENV → EEM, optionally with PV), each answering a different analytical question, from as-designed baseline to pure envelope thermal demand to deep retrofit. Third, the methodological choices — Buffalo as a CZ6A proxy, the preservation of electrochromic and already-performant windows, the AirflowNetwork mode change for neighbourhoods, the handling of natural ventilation in IAL, the geometric correction for storey variants — are deliberate and are documented so that results can be interpreted consistently and reproduced.

The pipeline operates at both single-building and neighbourhood scales, supports multiple EnergyPlus versions transparently, and produces merged IDFs, per-building SQL/CSV results, and neighbourhood summary HTML/CSV reports.

---

## 9. File Locations

| Content | Path |
|---|---|
| Source IDFs (baseline prototypes) | `Content/00.BaselineBuildings_NUs/` |
| Datacenter archetypes | `Content/datacenter/` |
| Neighbourhood definitions | `Content/neighbourhoods/neighbourhood_registry.py` |
| Modified IDFs (IAL, HPENV, EEM, PV) | `Content/idfs_modified/` |
| Single-building results | `0_BEM_Setup/SimResults_modified/` |
| Neighbourhood results | `0_BEM_Setup/SimResults_neighbourhoods/` |
| IAL conversion module | `BEM_utils/idf_idealizer.py` |
| HP envelope module | `BEM_utils/idf_construction_updater.py` |
| EEM applier | `BEM_utils/idf_eem_applier.py` |
| PV injection | `BEM_utils/pv_utils.py`, `BEM_utils/pv_optimizer.py` |
| Analysis pipeline (no simulation) | `main.py` |
| Simulation pipeline | `main_BEM.py` |
| Reference benchmarks report | `docs_reports/BEM_reference.md` |
