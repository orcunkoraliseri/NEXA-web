# PV Methodology — What the PV columns mean in master reports

Prepared: 2026-04-21
Author: Orcun Koral Iseri
Purpose: Plain-English companion doc for the three PV columns surfaced in
Option 7 and Option 9 master reports. For the full implementer-level
details (object types, injector internals, file-by-file dispatch), see
`docs_BEM_explanation/PV_setup.md`.

---

## 1. Why there are PV columns at all

Every master report compares a building's **as-designed baseline**
against one or more **energy-efficiency upgrades (EEM1 / EEM2 / EEM3)**.
Some of those baselines already ship with rooftop PV (notably a handful
of ASHRAE prototypes); most do not. The EEM track, on top of its
envelope and HVAC upgrades, also installs rooftop PV using the project's
own sizing rules. To keep the two PV layers clearly separated, the
report reports **PV generation** in dedicated columns — separate from
building demand, never netted into EUI. That way the reader can see, at
a glance:

- How much PV the **baseline** building already produces on its own.
- How much PV the **upgraded** building produces once the project's PV
  package is added.
- The absolute yearly kilowatt-hours the upgraded PV package delivers.

## 2. The two-track PV model

The pipeline runs one EnergyPlus simulation for the DEFAULT case and
one for each EEM track. PV is handled differently in each:

| Track          | PV behaviour                                                 |
|----------------|--------------------------------------------------------------|
| DEFAULT        | Whatever PV the source prototype ships with (often none). The injector is **not** run — this preserves the as-designed reference. |
| EEM1 / 2 / 3   | The "Tier-3" injector adds rooftop PV sized from the actual roof geometry, on top of the EEM envelope / HVAC / DHW upgrades. |

So if the DEFAULT row shows zero PV and the EEM rows show a non-zero
value, that non-zero number comes entirely from the project's PV
package. If the DEFAULT row already shows a non-zero value, the EEM
rows must meet or exceed it (the pipeline enforces this invariant).

## 3. How PV is sized from the roof

Every building falls into one of two groups based on roof shape:

| Group | Roof type | Typical buildings                                                    | Sizing rule                                                                                                     |
|-------|-----------|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| A     | Pitched   | Single-family houses, row-houses, some small pitched-roof hotels     | PV panels attached to the dominant pitched face; the building is also rotated so that face points toward the sun. |
| B / C | Flat      | All ASHRAE commercial prototypes, apartment blocks, warehouses       | Tier-2: virtual PVWatts generator sized from projected roof area × GCR × module power density, 45° south tilt. Tier-3: physical `Shading:Building:Detailed` rack at 45°/south; a **single combined rack** is placed at the area-weighted centroid of all flat-roof zones (main roof + garage roof), with active area = Σ(roof_area) × GCR / cos(45°). The rack always faces **world south**: the injector reads `Building.NorthAxis` and computes `local_az = (180 − NorthAxis) % 360` so the rack orientation is correct regardless of how the building prototype is oriented in the model coordinate frame. South-facing walls and pre-existing `Shading:Building:Detailed` objects from the baseline IDF are excluded from T3 host-surface discovery. |

**Tier-3 vs Tier-1 nameplate ratio (flat roofs):** T3's row-spaced rack covers less roof per m² than T1's flush PVWatts array, by design. With the defaults above, T3 nameplate per m² of flat roof = `0.40 / cos(45°) × 0.230 = 0.130 kW/m²` vs T1 = `0.80 × 0.1865 = 0.149 kW/m²`, giving a fixed nameplate ratio of **0.872**. The 45° tilt at Buffalo / Montreal latitude recovers ~+10–15 % per nameplate-kW [R2] [R5], so the physical ceiling for T3/T1 annual generation is roughly **0.95** — not 1.0. Two buildings sit on this ceiling in the validated fleet (Hospital 0.945, HotelLarge 0.938); no parameter tuning closes that gap without inflating nameplate beyond the row-spacing physics. The Option-10 acceptance bar is therefore **T3/T1 ≥ 0.85**, which leaves headroom for the irreducible nameplate gap.

The injector writes standard EnergyPlus PV objects
(`Generator:Photovoltaic` or `Generator:PVWatts`), wired through an
inverter-backed electric load centre. Full parameter tables and object
listings live in `PV_setup.md`.

---

## 4. The three reported columns

These are the hop targets for the column-header hyperlinks in the
master report.

### PV_default_gen (kWh/m²·yr) <a id="pv_default_gen"></a>

**What it measures:** Annual PV generation per square metre of building
floor area, produced by the **DEFAULT** simulation.

- Reflects only the PV objects that are **native to the source IDF**.
- Zero for any prototype that ships without PV (the common case).
- The **same value** is carried on every scenario row for a given
  building — because the DEFAULT sim is what produced it, not the EEM
  sims. Think of it as a per-building baseline PV fingerprint.

**How to read it:** "Out of the box, this building already generates
X kWh of solar electricity per m² of floor per year."

### PV_improved_gen (kWh/m²·yr) <a id="pv_improved_gen"></a>

**What it measures:** Annual PV generation per square metre of building
floor area, produced by the **EEM\*_T3PV** simulation (the EEM track
with Tier-3 PV injected).

- Populated on EEM1 / EEM2 / EEM3 rows only.
- **Blank** on the DEFAULT row by design — the DEFAULT sim does not run
  the injector.
- Always ≥ `PV_default_gen` (monotonic invariant). The Monotonic Check
  section of the Option 7 report flags any row that violates this.

**How to read it:** "After the project's PV upgrade, the building
generates Y kWh of solar electricity per m² of floor per year."

### PV_total (kWh/yr) <a id="pv_total"></a>

**What it measures:** **Absolute** annual PV generation, in raw
kilowatt-hours per year, from the improved (EEM) track.

- Same source payload as `PV_improved_gen`, but **not** normalised by
  floor area.
- Useful for portfolio-scale thinking (summing across buildings) and
  for comparing total yield across buildings of different sizes — a
  large flat-roofed warehouse and a small townhouse can have similar
  `PV_improved_gen` per m², yet very different `PV_total`.

**How to read it:** "The upgraded PV package on this building produces
Z kWh of solar electricity per year, full stop."

---

## 5. How a row is built (DEFAULT vs EEM)

| Row type   | `PV_default_gen`    | `PV_improved_gen`             | `PV_total`                      |
|------------|---------------------|-------------------------------|----------------------------------|
| DEFAULT    | native PV intensity | *(blank)*                     | *(blank)*                        |
| EEM1/2/3   | native PV intensity | Tier-3 PV intensity (≥ default) | Tier-3 PV absolute kWh/yr        |

The repetition of `PV_default_gen` across every row is intentional — it
makes it easy to eyeball, for any EEM row, how much of the total PV
output is the project's addition versus what the prototype already had.

## 6. Assumptions the reader should know

All PV simulations in this pipeline share the following assumptions:

| Assumption                         | Value                                           |
|------------------------------------|-------------------------------------------------|
| Weather file                       | Buffalo NY TMY3 (all current Option 7 / 9 runs) |
| Module efficiency (Group A pitched)| 20% of aperture area, 0.9 active-area fraction [R1] [R8] |
| Module power density (Group B/C)   | 200 W/m² of roof area [R1] [R2]                  |
| Ground-coverage ratio (flat roofs) | 0.4 [R2] [R15]                                  |
| Array tilt (flat roofs)            | 45° (Tier-3 rack-mounted, south-facing); 45° (Tier-2 PVWatts) [R5] [R14] |
| Array azimuth                      | 180° (world south). Group A: optimizer rotates the building so the dominant pitched face points south. Group B/C Tier-3: the injector corrects for `Building.NorthAxis` so the combined flat-roof rack always achieves world south, even for buildings whose model coordinate frame is rotated relative to cardinal directions (e.g. diagonal strip malls, buildings with ±90° North-Axis offsets). [R6] |
| System DC→AC losses                | 14% [R3] [R4]                                   |
| Inverter efficiency                | 96% [R7]                                        |

These assumptions are identical for DEFAULT native PV (where the
prototype happens to ship with PVWatts objects using ASHRAE defaults)
and for the Tier-3 injector. The difference between the two tracks is
**not** the module model — it is whether PV is sized from the current
roof geometry at all.

## 7. Common questions at a glance

- **Why is `PV_default_gen` 3.3 on every row for my building but
  `PV_improved_gen` jumps to 48?** The prototype shipped with a small
  native PV array; the Tier-3 injector sized a much larger array from
  the full flat-roof area.
- **Why is `PV_default_gen` 0.0 on every row for my building?** The
  source prototype has no `Generator:PVWatts` or `Generator:Photovoltaic`
  object. This is expected for most ASHRAE commercial prototypes.
- **Why is `PV_improved_gen` blank on the DEFAULT row?** The DEFAULT
  simulation intentionally does not run the Tier-3 injector, so there
  is no improved-track PV payload to report on that row.
- **Why is `PV_total` different from `PV_improved_gen × floor area`?**
  It shouldn't be — `PV_total = PV_improved_gen × floor_area_m2`
  exactly, by construction. Any visible difference is a rounding
  artefact (report values are rounded to one decimal place).

## 8. Where to go deeper

For the implementer-level detail (object types, per-group helpers,
electrical wiring, code dispatch sites, and CSV writer fieldnames), see
`docs_BEM_explanation/PV_setup.md`. That doc is the source of truth for
the Tier-3 pipeline; this one exists to help a reviewer who just opened
a master report understand the three PV columns without reading any
Python.

---

*Stable anchors required by master reports: `#pv_default_gen`,
`#pv_improved_gen`, `#pv_total`.*

---

## 9. Single-building PV generation results — highrise facade

The three highrise archetypes have additionally been tested with south-wall BIPV via `apply_roof_plus_facade_pv()` in `BEM_utils/pv_apply.py`. The table below shows absolute roof vs facade breakdown; the combined kWh/m² values appear in §10.

| Building | Floors | Roof PV (kWh/yr) | Facade PV (kWh/yr) | Total PV (kWh/yr) | Facade uplift |
|---|---:|---:|---:|---:|---:|
| ApartmentHighRise | 10 | 164,481 | +47,614 | 212,095 | +28.9% |
| HighRise_ST15 | 15 | 165,257 | +82,801 | 248,058 | +50.1% |
| HighRise_ST20 | 20 | 165,561 | +111,055 | 276,615 | +67.1% |

Facade parameters: south-facing walls only (azimuth 135-225 deg), top 50% of floors, fill fraction 0.50, panel efficiency 0.20 (20%). EPW: Montreal CWEC2020v2. CLG results pending. [R10] [R11]

Implementation: `BEM_utils/pv_facade.py`. Full test results: `docs_ACTIVE/PV_facade/PV_facade_task.md`.

---

## 10. Single-building PV generation results (all buildings)

PV_default = 0 for all 25 buildings — no Canadian baseline (NECB17 / NBC 9.36) ships with native PV. PV_improved is the Tier-3 roof PV intensity after EEM1 injection. Source: `outputs/Output_Sims_Journal_v3/EEM_Journal_v3_master.csv`. EPW: Montreal (CWEC2020v2) and Calgary (CWEC2020v2). Highrise buildings additionally have south-facade PV tested (see §9).

> **Update 2026-05-29 — south-facade-only Tier-3 for pitched archetypes.** Tier-2 PV was retired; the improved PV track is now Tier-3 only, and pitched roofs receive PV on the **south-facing dominant pitched face only** (dominant-face fallback when no south slope exists), instead of every roof plane. The DetachedHouses / AttachedHouses rows below are refreshed from direct E+ validation (DC produced energy ÷ floor area, baseline+PV, optimizer off) and drop to ≈59–62% of the prior both-facade values. The pitched **commercial** rows (OfficeSmall, RestaurantFastFood, RestaurantSitDown) are also south-only in code now but their values below still reflect the pre-fix v3 CSV — see the note after the table. Flat-roof buildings are unchanged.

| Building | Floor area (m^2) | PV_default (kWh/m^2) | PV_improved MTL (kWh/m^2) | PV_improved CLG (kWh/m^2) | PV method |
|---|---:|---:|---:|---:|---|
| AttachedHouses | 1,260 | 0.0 | 81.8 | 82.3 | Roof (Group A, pitched — south face only) |
| DetachedHouses | 221 | 0.0 | 80.2 | 80.4 | Roof (Group A, pitched — south face only) |
| ApartmentHighRise | 7,060 | 0.0 | 30.0* | 24.5 | Roof (Tier-3 flat) + facade (MTL only)* |
| HighRise_ST15 | 10,590 | 0.0 | 23.4* | 16.4 | Roof (Tier-3 flat) + facade (MTL only)* |
| HighRise_ST20 | 14,120 | 0.0 | 19.6* | 12.3 | Roof (Tier-3 flat) + facade (MTL only)* |
| ApartmentMidRise | 2,824 | 0.0 | 66.5 | 63.9 | Roof (Tier-3 flat) |
| College | 6,368 | 0.0 | 53.2 | 55.9 | Roof (Tier-3 flat) |
| Hospital | 22,436 | 0.0 | 23.1 | 22.9 | Roof (Tier-3 flat) |
| HotelLarge | 11,345 | 0.0 | 33.2 | 34.9 | Roof (Tier-3 flat) |
| HotelSmall | 3,725 | 0.0 | 71.7 | 68.9 | Roof (Tier-3 flat) |
| Laboratory | 8,361 | 0.0 | 70.5 | 74.0 | Roof (Tier-3 flat) |
| MT5 SmallRetail | 390 | 0.0 | 93.6 | 85.4 | Roof (Tier-3 flat) |
| OfficeMedium | 4,982 | 0.0 | 70.4 | 74.0 | Roof (Tier-3 flat) |
| OfficeSmall | 511 | 0.0 | 303.1† | 293.7† | Roof (Group A, pitched — south face only)† |
| OutPatientHealthCare | 3,804 | 0.0 | 76.3 | 80.2 | Roof (Tier-3 flat) |
| RestaurantFastFood | 232 | 0.0 | 226.7† | 219.8† | Roof (Group A, pitched — south face only)† |
| RestaurantSitDown | 511 | 0.0 | 229.0† | 221.4† | Roof (Group A, pitched — south/dominant face)† |
| RetailStandalone | 2,294 | 0.0 | 211.3 | 222.0 | Roof (Tier-3 flat) |
| RetailStripmall | 2,090 | 0.0 | 211.3 | 222.0 | Roof (Tier-3 flat) |
| SchoolPrimary | 3,436 | 0.0 | 211.3 | 222.0 | Roof (Tier-3 flat) |
| SchoolSecondary | 9,796 | 0.0 | 128.4 | 134.9 | Roof (Tier-3 flat) |
| SuperTallBuilding | 135,858 | 0.0 | 2.9 | 3.0 | Roof (Tier-3 flat) |
| TallBuilding | 72,623 | 0.0 | 5.4 | 5.7 | Roof (Tier-3 flat) |
| Warehouse (50pct) | 2,418 | 0.0 | 153.0 | 151.5 | Roof (Tier-3 flat) |
| Warehouse (full) | 4,835 | 0.0 | 153.0 | 151.5 | Roof (Tier-3 flat) |

*Highrise MTL PV_improved includes combined roof+facade (facade test run on Montreal CWEC2020v2). CLG values are roof-only (facade test pending). Facade uplift: +28.9% / +50.1% / +67.1% for ApartmentHighRise / ST15 / ST20. See §9 for absolute kWh breakdown.

Note: SuperTall and Tall buildings have large floor areas relative to roof, giving very low PV intensity per m². Small buildings (OfficeSmall, Restaurants) show high intensity for the same reason in reverse.

† **Pitched commercial — value pending re-sim (2026-05-29).** OfficeSmall (hip N/E/S/W), RestaurantFastFood (N/S) and RestaurantSitDown (E/W, no south slope → dominant-face fallback) are pitched, not flat. As of the south-only fix they receive Tier-3 PV on the south/dominant pitched face only, so the PV_improved values shown (carried over from the pre-fix v3 CSV) will **drop** on the next regeneration. They were not re-simulated in this pass — only DetachedHouses / AttachedHouses were validated directly.

---

## 11. Detached-house PV system (pitched / angled roof)

This is the PV configuration used for **detached houses** (Group A, pitched roof). Panels are mounted **flush on the dominant pitched roof face**, so the array inherits the **roof's own slope** — there is **no separate tilt angle**. The 45° south-facing rack from §3 is a **flat-roof-only** construct and is **not used** here.

| Parameter | Detached-house value |
|---|---|
| Roof group | A — pitched (angled) |
| Mounting | Flush on the dominant pitched roof face (coplanar with the roof) |
| **Array tilt** | **= roof pitch angle** — the panels follow the roof slope; no fixed-tilt rack is applied |
| Array azimuth | World south (180°). Standalone single-building runs (optimizer on) rotate `Building.North_Axis` so the dominant pitched face points south; the EEM_Journal / neighbourhood pipeline runs with the optimizer **off** and instead selects the south-facing slope directly via the NorthAxis-corrected surface azimuth (135–225°), with a dominant-pitched-face fallback when no south slope exists |
| Flat-roof 45° rack (Tier-3) | **Not used** (flat-roof groups B/C only) |
| Module efficiency | 20% of aperture area |
| Active-area fraction | 0.9 |
| PV objects | Standard EnergyPlus PV objects on the pitched roof surfaces, inverter-backed electric load centre |
| System DC→AC losses | 14% |
| Inverter efficiency | 96% |
| DEFAULT track | Native PV only (0 for detached houses — no native array) |
| EEM1 / 2 / 3 track | Tier-3 injector sizes the array from the **south-facing** pitched-roof geometry only (since 2026-05-29; previously both slopes) [R5] [R9] |

Validated detached-house yield (§10): **136.2 kWh/m²·yr (Montréal) / 131.8 (Calgary)** PV_improved after EEM1 injection.

---

## 12. References

External literature validation of the modelling assumptions in §3, §6, §9 and §11. Each `[R#]` marker in those sections maps to the source below. Verdicts are summarised from a 2026-06-03 deep-research review (full text and per-assumption verdict table: `docs_DONE/docs_PV/PV-deepresearch/`).

- **[R1]** U.S. DOE / NREL. *Solar Photovoltaic System Cost Benchmarks* (2024). https://www.energy.gov/cmei/systems/solar-photovoltaic-system-cost-benchmarks — establishes the ~20.6% standard module efficiency and ~206 W/m² gross-module power-density baseline. *Supports §6 module efficiency & power density (verdict: well-supported).*
- **[R2]** NREL. *System Advisor Model (SAM) Technical Reference Manual.* https://sam.nrel.gov/ — row-pitch self-shading, GCR limits, and packing-density (nameplate-ratio) algorithms. *Supports §3 nameplate ratio and §6 GCR. Note: the review flags the 0.87× capacity claim as questionable (true packing ratio ≈0.44× at GCR 0.40).*
- **[R3]** NREL. *PVWatts Version 5 Manual.* https://docs.nrel.gov/docs/fy14osti/62641.pdf — module-efficiency tiers and the multiplicative default 14% system-loss stack. *Supports §6 DC→AC losses (well-supported).*
- **[R4]** PNNL. *GridProjectIQ (GridPIQ) — Photovoltaics.* https://gridpiq.pnnl.gov/v2-beta/doc/technologies/pv/ — independent derivation of the 14% loss stack. *Supports §6 DC→AC losses.*
- **[R5]** Rousse, D. et al. (2025). *Best tilt of PV systems in Canada — correction-angle correlation for tilted surfaces across Canadian cities.* ÉTS Montréal. https://espace2.etsmtl.ca/id/eprint/31054/1/Rousse-D-2025-31054.pdf — high-latitude optimal tilt (≈lat−3–5°); <2% annual penalty at fixed 45°. *Supports §3/§6 tilt and §11 pitched slope (45° defensible-but-on-the-edge for flat-roof racking).*
- **[R6]** SolarTech / EnergySage. *Solar panel direction & orientation guides.* https://solartechonline.com/blog/solar-panel-direction-orientation-guide/ ; https://www.energysage.com/solar/solar-panel-performance-orientation-angle/ — south-azimuth optimum and east/west yield-loss curves (2–5% at ±45°, 15–25% at E/W). *Supports §6 azimuth (well-supported).*
- **[R7]** Sandia National Laboratories / PVPMC. *CEC Inverter Test Protocol.* https://pvpmc.sandia.gov/modeling-guide/dc-to-ac-conversion/cec-inverter-test-protocol/ — weighted (part-load) inverter-efficiency curves; CEC-weighted 96.5–97.5%. *Supports §6 inverter efficiency (96% slightly conservative, well-supported).*
- **[R8]** Ladybug Tools. *Honeybee-Energy `PVProperties` module.* https://www.ladybug.tools/honeybee-energy/docs/honeybee_energy.generator.pv.html — EnergyPlus-coupled default `active_area_fraction = 0.90`. *Supports §6 / §11 active-area fraction (well-supported).*
- **[R9]** Makarem & Monzer (2026) / ASES. *East–West vs. South-Facing Solar: when "more panels" beats "perfect direction".* https://ases.org/east-west-vs-south-facing-solar-when-more-panels-beats-perfect-direction/ — multi-facet (E/W) placement trades −15–25% per-panel yield for +27–30% installed capacity. *Supports §11; flags south-face-only as defensible-but-restrictive.*
- **[R10]** NRCan / IEA-PVPS. *An Evaluation of the Potential of Building-Integrated Photovoltaics in Canada.* https://ressources-naturelles.canada.ca/sites/www.nrcan.gc.ca/files/canmetenergy/files/pubs/2006-047_OP-J_411-SOLRES_BIPV_new.pdf — rooftop 0.88 vs facade 0.64 relative yield (≈73% per-unit-area facade-to-roof ratio). *Supports §9 facade yield (well-supported).*
- **[R11]** Hosseini & Kim (2024). *Comprehensive analysis of energy and visual performance of BIPV across all ASHRAE climate zones.* Energy & Buildings. https://www.scribd.com/document/915169996/ — facade generation scaling with building height; +29–67% absolute uplift physically plausible for high-rises. *Supports §9 facade uplift.*
- **[R12]** Haque & Sheth (2018). *Energy Loss in Solar Photovoltaic Systems Under Snowy Conditions* (Calgary field study). https://www.researchgate.net/publication/326510895 — ~9% annual snow-loss baseline; up to 20–34% for low-tilt flat-roof arrays. *Climate caveat for the Montréal/Calgary runs (snow loss not modelled in the current assumptions).*
- **[R13]** Baldus-Jeursen et al. (2023). *Snow Losses for Photovoltaic Systems: Validating the Marion and Townsend Models.* IEEE J. Photovoltaics. http://www.krichlab.ca/wp-content/uploads/2025/11/Baldus-Jeursen_IEEEJPhotov_2023_Snow_Losses_for_Photovoltaic_Systems_Validating_the_Marion_and_Townsend_Models.pdf — Québec snow-shedding and snow-albedo (0.6–0.8) validation. *Climate caveat (albedo/bifacial winter gains, snow clearing).*
- **[R14]** PV Rack / WattBuild. *Flat-roof solar mounting & racking guides.* https://pvrack.com/types/flat-roof/ ; https://www.wattbuild.com/learn/about/105/flat-roof-solar-racking — wind-uplift and ballast dead-load limits that drive the 10–15° commercial flat-roof market standard (context for the 45° edge verdict). *Supports §6 tilt caveat.*
- **[R15]** Lion Solar. *Utility-scale solar GCR & ROI guide.* https://lion-solar.com/utility-scale-solar-investment-guide/ — standard optimized GCR range 0.30–0.50. *Supports §6 GCR (0.40 typical, well-supported).*
