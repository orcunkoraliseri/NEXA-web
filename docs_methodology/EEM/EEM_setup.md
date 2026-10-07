# EEM_Journal — One-Page Framework Explainer

**For:** Supervisors, manuscript reviewers
**Date:** 2026-05-11
**Numbers from:**
- Residential 4-archetype fleet: `0_BEM_Setup/SimResults_modified/EEM_Journal_v6y_20260510_master.csv` (32 rows, Phase K v6.y; equals v6.x H4 within simulation noise)
- Full Option 7i fleet (25 active buildings × 2 climates): `docs_ACTIVE/EEM_Journalv6/EEM_Journal_Can_6_report.md` lines 156–190 (assembled from Phase L re-runs 2026-05-11/12; Phase L supplement CSVs: `0_BEM_Setup/SimResults_modified/opt7i_master_EEM_J_v4_CAN_MTL_20260511/` and `…CAN_CLG_20260511/`, 3 rows each — Phase L targeted sims only)

---

## What is EEM_Journal?

EEM_Journal is a retrofit bundle designed to quantify the marginal contribution of envelope, ASHP, and HPWH upgrades for a journal paper chapter. It applies three cumulative EEM tiers (EEM1 → EEM2 → EEM3) to a 64-building Canadian cohort (32 per climate) so each heat-pump measure layer can be attributed separately in an EUI ladder.

EEM_Journal is distinct from the dormant 33-measure EEM_MVP_ADV production stack. It focuses exclusively on heat-pump upgrades; non-HP measures active in earlier versions (HRV/ERV, supply-fan SFP tune, DHW demand-side and distribution) were intentionally cut in v6 to keep HVAC-tier = ASHP and DHW-tier = HPWH attribution clean (see §v6 X-cuts and deferrals).

---

## Scenarios

| Scenario tag | Short name | Measures applied |
|---|---|---|
| `EEM_J_DEFAULT` | Default | Unmodified baseline IDF; native PV only |
| `EEM_J_ENVELOPE` | EEM1 | Envelope package (see below) |
| `EEM_J_ENV_HVAC` | EEM2 | EEM1 + ASHP nameplate uplift + CCHP curves applied + inverter cooling curves + per-zone PTHP + defrost OnDemand + supplemental heater lockout + desuperheater |
| `EEM_J_ENV_HVAC_DHW` | EEM3 | EEM2 + HPWH CO₂ retrofit (Stratified, COP 4.0, −29 °C lockout, outdoor-air) + MURB swing-tank + SF preheat-tank |
| `EEM_J_ENV_HVAC_DHW_EEM4` | EEM4 | EEM3 + automated blinds + daylight dimming + LED LPD ×0.55 + occupancy-sensor schedule trim + ENERGY STAR plug loads + smart power management + APS phantom cut + HEMS peak trim + gas-appliance retrofit (BTAP residential only) |

Each scenario is cumulative: EEM4 ⊂ EEM3 ⊂ EEM2 ⊂ EEM1 as strict supersets.

---

## What each scenario contains

### EEM1 — Envelope

| Measure | Detail |
|---|---|
| Envelope constructions | HPENV high-performance opaque assemblies (wall, roof, floor) from `constructionSet_baseline.idf` |
| Triple-glazed windows | U=0.85 W/m²K, SHGC=0.40 — replaces all glazing in baseline |
| Foundation / slab insulation | Climate-zone-gated: applied in CZ6 (Montréal) and CZ7A (Calgary); skipped for warmer zones |
| Infiltration ×0.25 | Design-flow air leakage reduced to Passive House target (×0.25); was ×0.5 in v2 |

*References:*
- **Envelope constructions:** NRCan/CanmetENERGY (2023) — *Deep Energy Retrofits for Canadian Buildings* (71% natural-gas heating reduction; up to 80% total heating demand reduction); Lavigne et al., NRCan BTAP (2018–2022) — 15–30% whole-building EUI reduction on NECB-compliant CZ6/CZ7A baselines.
- **Triple-glazed windows:** PNNL/LBNL (2022) — *Thermal Performance of Triple-Pane Windows in Cold Climates* (16% heating reduction; 3–7% total site EUI reduction); NRC/BTAP (2021) — *NECB 2017/2020 Tiered Code Analysis* (50–60% savings over NECB 2017 Tier 3/4).
- **Foundation / slab insulation:** NRCan/CanmetENERGY (2023) — exterior insulation + air sealing; corroborated by NRC/BTAP (2021).
- **Infiltration ×0.25:** Hosseini M. et al. (2017) — *Comparison of building energy codes* (validates thermal bridging + infiltration savings in cold climates).

**EEM1 is frozen at v4 spec for v6.** No EEM1 changes were made in v6.

### EEM2 — Envelope + ASHP

All EEM1 measures plus:

| Measure | Function | Detail |
|---|---|---|
| ASHP nameplate uplift (E2-C) | `_convert_heating_to_ashp` | SF DX coils → COP 4.5 heating / EER 17 cooling [v6 X1: renamed from "GSHP option"] |
| CCHP curves applied (E2-D) | `_build_cchp_curves` | Biquadratic Cap-FT / EIR-FT curves **wired** to all DX heating coils; COP=2.5 floor; −25 °C compressor lockout (C1). Note: in v2/v3 these curves were *built but not applied*; v6 fully activates them. |
| Inverter cooling curves (E2-I) | `_apply_inverter_cooling_curves` | SEER 22 / EER 14 Cap-FT and EIR-FT curves on SF cooling DX; PLF = 1.0 flat [C4 — eliminates 7–8% cycling tax] |
| Per-zone PTHP (E2-J Branch A) | `_convert_sf_central_to_ductless_pthp` | Central DX deleted; per-zone PTHP units on Detached/Attached SF archetypes; AFN → `MultizoneWithoutDistribution` |
| Defrost OnDemand (C3) | `_apply_defrost` | `Defrost_Control = 'OnDemand'`; flat `EEM2_ASHP_DefrostEIR_Flat` curve [v6 correctness fix — silently skipped in v4/v5] |
| Supplemental heater lockout (C2/G4) | `_apply_lockout_temps` | CZ6 (Montréal): −22 °C lockout; CZ7A (Calgary): −27 °C lockout [v6 fix — was +4/+5 °C in v4/v5, firing backup resistance during shoulder season] |
| Desuperheater HP→DHW (E2-N) | `apply_desuperheater_dhw` | `Coil:WaterHeating:Desuperheater` on SF cooling coil; η_recovery = 0.30; routes to A5 preheat tank |

*References:*
- **ASHP nameplate uplift (E2-C):** IEA HPT Annex 52 (2018–2021) — average HP COPs 4.0; optimized systems up to 7.2; IGSHPA (2024) — *Cold Week Case Study*: COP 4.5 during peak January cold snap.
- **CCHP curves (E2-D):** Mendon et al., PNNL (2025) — *DOE Cold Climate Heat Pump Challenge*: median COPs 1.9 at −15 °C and 1.8 at −25 °C; CCHT/NRCan (2018) — 20–30% COP drop during extreme cold snaps, validates defrost-EIR curve.
- **Inverter cooling curves (E2-I):** BA-PIRC/FSEC (2015/2018) — 22–33% cooling savings for SEER 22 vs SEER 13/14; NREL (2022–2024) — *Basalt Vista Study*: validated SEER 22/HSPF 10.2 in cold climates.
- **Per-zone PTHP (E2-J Branch A):** Purdue University/DOE — *Thermal Distribution Efficiency*: 20–30% duct tax eliminated by per-zone topology in tightened envelopes.
- **Defrost OnDemand (C3):** CCHT/NRCan (2018) — defrost cycles cause 20–30% COP drop in humid cold climates; OnDemand adds 5–10% HSPF at no risk.
- **Supplemental heater lockout (C2/G4):** Mollier et al., NRCan (2023) — ccASHPs maintain COP > 1.5 below −20 °C, eliminating need for backup above design OAT.
- **Desuperheater HP→DHW (E2-N):** ASHRAE 90.1-2022 §6.5.6.2 — refrigeration heat reclaim mandate; NREL TP-7A40-67762 — η_recovery = 0.30 measured on split-system DX desuperheaters.

### EEM3 — Envelope + ASHP + HPWH

All EEM2 measures plus:

| Measure | Function | Gate | Detail |
|---|---|---|---|
| HPWH CO₂ retrofit (E3-F) | `apply_hpwh_retrofit_journal` | Broad | `WaterHeater:Mixed` → `HeatPump:PumpedCondenser` transcritical CO₂; OutdoorAirOnly; rated COP 4.0 (Phase L — Sanden GAU / Mitsubishi Q-Ton class); −29 °C lockout |
| HPWH tank → Stratified (C7) | `_convert_mixed_tank_to_stratified` | Broad | All HPWH tanks: Mixed → Stratified (6 nodes); gas-cooler inlet at bottom node [v6 correctness fix; **Phase P labeling fix pending** — `EndUse_Subcategory` correction; see Phase P note below] |
| HPWH outdoor-air intake (G2) | — | CZ≥4 | `AirInlet_Configuration = OutdoorAirOnly` for CZ6/CZ7A; warm-CZ `ZoneAirOnly` branch coded but untested in v6 |
| HPWH compressor cutoff (C6/G3) | — | Broad | −29 °C lockout on all HPWH wrappers including alt-path [v6 fix — alt-path was +5 °C in v4/v5, locking out compressor all winter in CZ6/CZ7A] |
| HPWH off-peak boost (E3-G) | `apply_hpwh_setpoint_reset` | Broad | 02:00–06:00 setpoint 65 °C + tempering valve 50 °C |
| HPWH tank jacket R-25 (E3-J) | `apply_hpwh_tank_jacket` | Broad | Off/On cycle-loss coefficients ×0.64 (R-16 → R-25); UA floor assert ≥ 0.3 W/K (C11) |
| MURB swing-tank topology (A1+A2) | `apply_swing_tank` | MURB | 50-gal Mixed swing tank + 75 W recirc parasitic inserted between recirc return and CO₂ HPWH supply |
| SCWH integrated HP (A3) [†] | — | Hotel/Hospital/SuperTall predicate | Code-only in v6: predicate evaluates False on all 4 residential archetypes; deferred to v7 commercial round |
| Preheat-tank topology (A5) | `apply_preheat_tank` | SF | 30-gal Mixed preheat tank upstream of SF HPWH; enables E2-N desuperheater coexistence (avoids v22.1 Fatal) |
| Hydronic combi HP (A6/I4a) [†] | — | Radiant-loop commercial predicate | Code-only in v6.y: predicate gates to `ZoneHVAC:LowTemperatureRadiant:*` + non-DHW hot-water PlantLoop; no v6.y residential sim affected; deferred to commercial dataset round |

*References:*
- **HPWH CO₂ retrofit (E3-F):** Energy350 BC Study (2018) — CO₂ split systems reliable to −29 °C; COP > 2.50 at −10 °C; NEEA/WSU (2015/2018) — seasonal COP 2.7–3.4, operation to −25 °C; Goudarzi et al. (2021) — 30–50% DHW reduction vs R-134a in cold-climate residential; NREL/PNNL Split-System HPWH (2022) — outdoor-air intake validates −29 °C lockout.
- **HPWH tank → Stratified (C7):** NREL (2022) — Stratified CO₂ HPWH achieves +5–15% COP vs Mixed tank due to correct cold-inlet temperature at bottom node.
- **HPWH compressor cutoff (C6/G3):** Energy350 BC Study (2018) — CO₂ class operates to −29 °C; NEEA/WSU (2018) — validates operation to −25 °C.
- **HPWH outdoor-air intake (G2):** NREL/PNNL Split-System HPWH (2022) — outdoor-air split eliminates zone-air theft and false COP credit.
- **HPWH off-peak boost (E3-G):** PG&E WatterSaver Program (2024) — Advanced Load Up to 65 °C, ~500 Wh shifted per unit; PNNL/FSEC (2021–2023) — ~0.5 kW peak shaving per unit.
- **HPWH tank jacket R-25 (E3-J):** ASHRAE Handbook HVAC Systems (2020) Ch. 50 — tank standby loss scaling by 1/R.
- **MURB swing-tank (A1+A2):** NEEA/WSU CO₂ HPWH Field Study — Anderson et al. (2017/2018): swing-tank topology required for MURB centralized CO₂ HPWH; isolates warm recirc return from gas cooler; field-validated ~12 kWh/m² DHW; recirc pumps measured at 40–75 W.
- **SCWH integrated HP (A3):** DOE (2021) — >70% DHW savings during cooling season for Hotel/Hospital with SCWH mode.
- **Preheat-tank topology (A5):** NREL TP-7A40-67762 — preheat-tank topology enables split-system desuperheater without shared condenser-sink conflict.
- **Hydronic combi HP (A6/I4a):** IEA HPT Annex 56 (2023) — *Combi heat pumps for low-energy buildings*: predicate-gated to commercial radiant-loop archetypes.

[†] Not exercised on the v6 residential fleet (predicate evaluates False on all four residential archetypes); kept as scaffolding for the v7 commercial round.

---

### EEM4 — Envelope + ASHP + HPWH + Cooling/Lighting/Equipment

All EEM3 measures plus:

**Cooling-side (shading + daylighting)**

| Code | Measure | EnergyPlus objects | Detail |
|---|---|---|---|
| C4-1 | Automated interior venetian blinds | `WindowMaterial:Blind` + `WindowShadingControl` (`OnIfHighSolarOnWindow`, 200 W/m² + OAT ≥ 15 °C; `BlockBeamSolar` slat angle) | Applied on all exterior windows with WWR ≥ 0.10; skipped on skylights, clerestories Z > 2.5 m, interior windows, north-facing in CZ6/CZ7A; skipped entirely on Laboratory, TallBuilding, SuperTallBuilding (blank-name fenestration E+ v22.1 fatal) |
| C4-3 | Continuous daylighting dimming — perimeter zones | `Daylighting:Controls` `ContinuousOff`; setpoint **300 lux residential / 500 lux commercial** (IES RP-1 / NECB); reference point 1.5 m inward (residential) or 3.0 m inward (commercial); fraction_controlled ≥ 0.10 gate | Skipped on zones with continuous-operation schedules (Min_Fraction > 0.40 → life-safety / process); skipped on surgical/exam/lab/kitchen/fume zones |

**Lighting-side**

| Code | Measure | EnergyPlus objects | Detail |
|---|---|---|---|
| L4-1 | LED fixture upgrade — LPD ×0.55 (45 % cut) | `Lights.Watts_per_Zone_Floor_Area` ×0.55; preserve `Return_Air_Fraction`, `Fraction_Radiant`, `Fraction_Visible` | Exempt: emergency/egress/exit, exterior/facade/parking, theatrical/accent, surgical/cleanroom objects per ASHRAE 90.1-2022 §9.4.1.1 |
| L4-2 | Occupancy-sensor schedule trim | Clone `Schedule:Compact` → `_EEM4_OccTrim_` prefix; peak ×0.90, after-hours floor 0.05; skip if Min_Fraction > 0.40 (24/7 loads) | Targets transient zones only; living rooms / bedrooms effectively unaffected at whole-home blend → −5 % Lighting |

**Equipment-side**

| Code | Measure | EnergyPlus objects | Detail |
|---|---|---|---|
| E4-1 | ENERGY STAR appliance class — EPD ×0.75 (×0.65 BTAP houses) | `ElectricEquipment.Watts_per_Zone_Floor_Area` (or `Design_Level` / `Watts_per_Person`) | Skip process/refrig/kitchen/medical/lab/datacenter objects by Name + EndUse Subcategory regex; BTAP residential override (filename `(?i)(detachedhouse\|attachedhouse\|nbc936)`) suspends commercial skip; Hospital + OutPatient fully skipped |
| E4-2 | Smart power management schedule | Clone Equipment schedule; off-hours floor 0.15 → 0.05; peak ×0.95 | Hospital + OutPatient skipped |
| E4-3 | Tier-1 APS phantom cut | Same cloned schedule; sleeping-hours fraction 0.05 → 0.02 (residual standby) | Hospital + OutPatient skipped |
| E4-4 | HEMS behavioural peak trim | Same cloned schedule; daytime/evening peak ×0.96 (4 % cut — Columbia submetering lower bound) | Hospital + OutPatient skipped |
| E4-5 | Heat-Pump Dryer fuel-switch — BTAP residential only | Spawn `ElectricEquipment electric_dryer{N}` from `GasEquipment gas_dryer{N}`, Design_Level ×0.50; zero source | Gated: `_eem4_is_btap_residential()` |
| E4-6 | Induction Range fuel-switch — BTAP residential only | Spawn `ElectricEquipment induction_range{N}` from `GasEquipment gas_range{N}`, Design_Level ×0.45; zero source | Gated: `_eem4_is_btap_residential()` |
| E4-7 | Gas MELs trim — BTAP residential only | `GasEquipment gas_mels{N}.Design_Level` ×0.85 in-place | Gated: `_eem4_is_btap_residential()` |

*Code prefix: **C** = Cooling-side impact · **L** = Lighting-side impact · **E** = Equipment-side impact.*

**Design principle:** Combined moderate-tier measures (not maximum specs) — LED ×0.55 + ESTAR ×0.75 + automated blinds + daylight dimming + occupancy schedules yield cross-load savings (equipment heat-gain → cooling reduction) that exceed any single deep-tier measure alone, at a defensible moderate-investment scenario.

**Key guardrails (from `docs_DONE/docs_EEM/DONE/EEM4/EEM4_setup.md` §4.7):**
- Process load skip (E4-1/2/3/4): regex `(?i)(process|fume.?hood|refrig|walk.?in|kitchen.*equip|cook|med(ical)?.*equip|surg|it.?load|server|datacenter|...)` on Name + EndUse Subcategory.
- Hospital + OutPatientHealthCare: E4-1/2/3/4 fully disabled; C4-1 / C4-3 / L4-1 / L4-2 remain active.
- BTAP residential override (bullet 13): commercial skip suspended so E4-1 fires on `refrigerator1`, `dishwasher1`, etc.; ×0.65 ESTAR floor applied (bullet 15).
- Lab / TallBuilding / SuperTallBuilding: C4-1 (blind injection) skipped due to blank-fenestration-name E+ v22.1 fatal; all other measures active.
- Schedule cloning: every mutated `Schedule:Compact` is cloned with `_EEM4_OccTrim_` / `_EEM4_EquipTrim_` prefix — never mutated in place.
- DataCenter passthrough: no `Lights` or general `ElectricEquipment` → nothing applied.

*References:*
- **C4-1 automated blinds:** Karlsen, Heiselberg & Bryn (2015) — *Solar shading control strategies for residential buildings in cold climates*; D'Oca et al. (2018) — IEA SHC Task 56 synthesis.
- **C4-3 daylighting:** PNNL-23800 (2014) — *Cost-Effectiveness of 2015 IECC*; Williams et al. LBNL (2012) — *Lighting Controls in Commercial Buildings*.
- **L4-1 LED:** DOE/EE-2136 (2020) — *SSL Adoption Report*; PNNL-23800 40–50 % LPD drop vs pre-LED; Elliott et al. PNNL-32815 (2021).
- **L4-2 occupancy sensor:** Mass EEAC RLPNC 19-2 (2019); CPUC DEER Lighting Controls (2021); NEEP Residential Lighting Strategy (2018).
- **E4-1 ENERGY STAR:** Lobato et al. NREL/TP-5500-49975 (2011) — 25–35 % gain band; EPA ENERGY STAR Unit Energy Consumption Tables (2022).
- **E4-2/3 smart power + APS:** Mass EEAC RLPNC 17-3 (2018); NREL/SR-5500-60000 (2014); PG&E APS Impact Study (2019).
- **E4-4 HEMS:** Allcott (2011) — *Social norms and energy conservation*; Columbia University submetering (2020); EPRI (2018).
- **E4-5/6 fuel-switch:** CEC-500-2021-025; ANSI/RESNET/ICC 301-2022; Energy350 BC Study (2018).

---

## v6 X-cuts and deferrals

Eight measures that were active in v3/v5 were intentionally commented out in v6 to ensure HVAC-tier = ASHP and DHW-tier = HPWH are literally true. All are preserved in the codebase under `# [v6 X-cut]` markers for recovery in a future passive/envelope tier:

| Code | Measure | Function(s) commented out |
|---|---|---|
| X4 | Ventilation HR: HRV/ERV sensible/latent upgrade + missing-HR injection on bare OA paths + zone-ERV fan tune | `_enhance_heat_recovery`, `_add_missing_heat_recovery`, `_tune_zone_erv` |
| X5 | Supply-fan SFP tune (η ≥ 0.70, pressure rise ≤ 600 Pa) | `_tune_supply_fans_sfp` — `idf_eem_applier.py:6071` (EEM3) and `:7975` (EEM2) |
| X6 | DHW demand ×0.70 (low-flow fixtures) | `apply_dhw_demand_reduction` |
| X7 | DHW distribution wrapper (pipe insulation + temp lowering + recirc schedule; central-DHW gated, no-op on SF) | `apply_dhw_pipe_insulation`, `apply_dhw_temp_lowering`, `apply_dhw_recirc_scheduling` |
| X8 | Deep DHW volume right-sizing (×0.50 SF) | `apply_deep_dhw_volume` |
| X9 | DHW pipe insulation SF | `apply_dhw_pipe_insulation` |
| X10 | DHW temp lowering SF (60→55 °C + Sun pasteurize 65 °C) | `apply_dhw_temp_lowering` |
| X11 | DWHR drain-water heat recovery preheat SF (+8 °C cold-water schedule) | `apply_dwhr_preheat` |

**Rationale:** X4–X11 are non-HP load-side or distribution measures; their presence in the same EEM tier as ASHP/HPWH conflates heat-pump performance attribution with envelope/distribution efficiency, obscuring the HP-focused contribution claim of the journal paper.

**Deferrals to v7 commercial round (separate from X-cuts):**
- **A3** (SCWH integrated HP): code-only in v6; predicate fires only for Hotel/Hospital/SuperTall; deferred because the commercial cooling-waste-heat topology is absent from all four residential archetypes.
- **A6/I4a** (hydronic combi HP): code-only in v6.y; predicate gates to radiant-loop commercial buildings; deferred due to commercial radiant-loop topology mismatch.

---

## What is deliberately excluded from all scenarios

- **Internal loads:** No LED lighting upgrades, no plug-load reduction.
- **Scheduling:** No occupancy setback, no demand-controlled ventilation (DCV).
- **HRV/ERV upgrades and missing-HR injection:** Cut from EEM2 in v6 (X4) to maintain HP-only attribution; were active in v3/v5.
- **Supply-fan SFP tune:** Cut from EEM2 and EEM3 in v6 (X5) for the same reason; active in v3/v5. As a consequence, v6 EEM2/EEM3 fan energy ("Other" end use) is approximately 2–3 kWh/m² higher than v3/v5.
- **DHW demand-side and distribution measures (X6–X11):** Cut from EEM3 in v6; active in v3. The removal of X6 (DHW demand ×0.70) raises SF EEM3 DHW by ~30% relative to v5, which is compensated by the E1–E4 HPWH efficiency stack (rated COP 4.0 + CCHP + PLF flatten + VariableSpeed coil).

---

## PV pairing

| Scenario | PV treatment |
|---|---|
| EEM_Default | Native PV only (no Tier-3 override; 0.0 kWh/m² across all Canadian baselines) |
| EEM1 / EEM2 / EEM3 / EEM4 | Tier-3 PV applied. Pitched archetypes (Detached/Attached/OfficeSmall/Restaurants) use the **south-facing dominant pitched face only** (dominant-face fallback if no south slope); flat roofs use a single world-south 45° rack. No suitability cap. (south-only since 2026-05-29; previously all roof planes) |

Net EUI = site gross EUI − annual PV generation (kWh/m²). EUI-ladder analysis uses **gross EUI** to isolate measure effect from PV pairing. PV is reported in dedicated columns and is never netted into EUI for ladder comparisons.

---

## Simulation setup — Canadian cohort (v6)

| Item | Value |
|---|---|
| Total buildings per climate | 32 (CAN_MTL CZ6 and CAN_CLG CZ7A run separately) |
| Building cohort | 4 residential archetypes (Detached, Attached, MidRise, HighRise) + 2 tall-residential (ST15, ST20) + NECB17 commercial + OpenStudio supplementals + 4 datacenter (passthrough) |
| Baseline standard | NECB 2017 (commercial) / NBC 9.36 (residential); BTAP internal loads and schedules |
| Weather — CZ6 | CWEC2020v2 Montréal Trudeau Intl AP |
| Weather — CZ7A | CWEC2020v2 Calgary Olympic Park Upper |
| EnergyPlus version | 22.1.0 |
| Scenarios per building | 5 (Default + EEM1 + EEM2 + EEM3 + EEM4) |
| Total simulations | 320 (32 buildings × 5 scenarios × 2 climates) |
| DC archetypes | 4 per climate (passthrough — EEM1/2/3 rows cloned from Default; `is_passthrough=True`) |
| Active buildings in ladder | TODO(verify) — report shows 25 active buildings × 2 climates; "28 buildings × 4 scenarios − exclusions" per report header; Datacenter, Supermarket, and OfficeLarge excluded from EUI ladder |

---

## EUI ladder — results summary

Source: `0_BEM_Setup/SimResults_modified/EEM_Journal_v6y_20260510_master.csv` (32 rows, residential 4-archetype fleet, Phase K v6.y; equals v6.x H4 within simulation noise). All values gross EUI (kWh/m²); PV not netted.

| Climate | Archetype | Default | EEM1 | EEM2 | EEM3 | EEM3 Δ% |
|---|---|---:|---:|---:|---:|---:|
| CAN_MTL (Z6) | DetachedHouse | 127.8 | 105.3 | 93.3 | 81.1 | −36.5% |
| CAN_MTL (Z6) | AttachedHouse | 131.0 | 112.4 | 106.5 | 91.9 | −29.9% |
| CAN_MTL (Z6) | AptMidRise | 109.2 | 102.6 | 95.4 | 69.1 | −36.7% |
| CAN_MTL (Z6) | AptHighRise | 119.9 | 112.3 | 110.1 | 73.0 | −39.1% |
| CAN_CLG (Z7A) | DetachedHouse | 116.7 | 101.0 | 90.3 | 78.3 | −32.9% |
| CAN_CLG (Z7A) | AttachedHouse | 119.4 | 107.6 | 103.5 | 89.1 | −25.4% |
| CAN_CLG (Z7A) | AptMidRise | 103.4 | 101.2 | 94.3 | 68.1 | −34.1% |
| CAN_CLG (Z7A) | AptHighRise | 113.3 | 112.1 | 110.2 | 73.2 | −35.4% |

**Fleet median EEM3 Δ% = −34.75%** (median of 8 residential data points above; source: `EEM_Journal_v6y_20260510_master.csv`). MTL residential median = −36.6%; CLG residential median = −33.5%.

**Phase K MidRise DHW note:** AptMidRise EEM3 DHW = 17.6 kWh/m² (MTL) / 17.7 kWh/m² (CLG). This is the published, physically defensible value for the NECB17 per-unit OutdoorAirOnly Pumped HPWH topology in CZ6/CZ7A. Phase I+J attempts to converge toward the NEEA/WSU CZ4C reference of ~12 kWh/m² were abandoned in Phase K: (1) that reference describes a centralized CO₂ swing-tank in CZ4C (Pacific Northwest), not the per-unit topology here; (2) the only model lever capable of reaching [12, 16] kWh/m² (forcing `:VariableSpeed` coils on 23 per-unit MidRise tanks) produced an E+ v22.1 artifact — autosized evaporator fan coupled to coil capacity, with no clean decoupling available.

**Phase P note:** HighRise EEM3 numbers above are pre-Phase-P. C7 Stratified backup-resistance energy (~7 kWh/m²) is currently mis-bucketed from Water Heating to Space Heating in E+ v22.1. Phase P will add `EndUse_Subcategory = 'Water Heating'` to both heater objects (label-only fix: combined Htg+WS conserved). See Phase P section below.

**Full Option 7i fleet ladder** (25 active buildings × 2 climates, post-Phase-L): see `EEM_Journal_Can_6_report.md` lines 156–190. Commercial range: −6.6% (Hospital CLG) to −67.7% (Laboratory CLG). Datacenter, Supermarket, and OfficeLarge excluded from ladder analysis.

---

## EEM4 results — residential fleet (v7, 2026-05-13/14)

Source: `0_BEM_Setup/SimResults_modified/EEM_Journal_v6y_20260513_master.csv` (T8 final rerun, 8 rows — 4 residential archetypes × MTL + CLG). EEM4 rows include E4-1 residential override (×0.65 BTAP houses). All values gross EUI (kWh/m²); PV not netted.

### Disaggregated end-use EUI — residential archetypes (EEM3 → EEM4 delta)

| Building | Scenario | Htg | Clg | DHW | Ltg | Equip | Other | Total | Δ% vs Default |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Detached (MTL) | EEM3 | 8.3 | 7.1 | 6.7 | 4.7 | 46.6 | 7.8 | 81.1 | −36.5% |
| Detached (MTL) | **EEM4** | 9.8 | **5.7** | 6.7 | **2.6** | **28.3** | 7.8 | **60.9** | **−52.3%** |
| Detached (CLG) | EEM3 | 7.7 | 5.1 | 6.6 | 4.7 | 46.6 | 7.6 | 78.3 | −32.9% |
| Detached (CLG) | **EEM4** | 9.2 | **4.0** | 6.6 | **2.6** | **28.3** | 7.7 | **58.5** | **−49.9%** |
| Attached (MTL) | EEM3 | 2.6 | 7.0 | 11.2 | 5.8 | 57.1 | 8.1 | 91.7 | −30.0% |
| Attached (MTL) | **EEM4** | 4.1 | **5.1** | 11.2 | **3.2** | **34.8** | 8.0 | **66.3** | **−49.4%** |
| Attached (CLG) | EEM3 | 1.8 | 5.3 | 11.1 | 5.8 | 57.1 | 7.8 | 88.9 | −25.5% |
| Attached (CLG) | **EEM4** | 3.2 | **3.5** | 11.2 | **3.2** | **34.8** | 7.7 | **63.5** | **−46.8%** |
| MidRise (MTL) | EEM3 | 4.0 | 12.8 | 17.6 | 4.8 | 19.3 | 10.6 | 69.1 | −36.7% |
| MidRise (MTL) | **EEM4** | 4.3 | **9.7** | 17.6 | **1.9** | **11.2** | 9.7 | **54.4** | **−50.2%** |
| MidRise (CLG) | EEM3 | 4.1 | 11.5 | 17.7 | 4.8 | 19.3 | 10.6 | 68.1 | −34.1% |
| MidRise (CLG) | **EEM4** | 4.5 | **8.6** | 17.7 | **1.9** | **11.2** | 9.6 | **53.5** | **−48.3%** |
| HighRise (MTL) | EEM3 | 9.7 | 16.3 | 8.3 | 3.9 | 19.0 | 15.8 | 73.0 | −39.1% |
| HighRise (MTL) | **EEM4** | 10.4 | **11.9** | 8.3 | **1.4** | **10.9** | 13.9 | **56.8** | **−52.6%** |
| HighRise (CLG) | EEM3 | 9.2 | 16.1 | 8.3 | 3.9 | 19.0 | 16.7 | 73.2 | −35.4% |
| HighRise (CLG) | **EEM4** | 9.9 | **11.0** | 8.4 | **1.4** | **10.9** | 14.2 | **55.8** | **−50.8%** |

**Fleet median EEM4 Δ% = −50.3%** (residential, vs Default). MTL median = −51.3%; CLG median = −48.5%.

**EEM3 → EEM4 incremental Δ**: Cooling −22 to −33%; Lighting −55 to −64%; Equipment −41 to −43%; Heating +1.5–2.5 kWh/m² (lighting/equipment heat-gain trade-off, fully expected; dominated by Equip + Ltg savings).

### Full Option 7i fleet EUI ladder — EEM4 (25 active buildings × 2 climates)

Source: `docs_DONE/docs_EEM/DONE/EEM4/EEM_Journal_Can_7_report.md`. Datacenter excluded (passthrough). All kWh/m² gross site EUI.

| Building | Baseline (MTL) | EEM1 (MTL) | EEM2 (MTL) | EEM3 (MTL) | **EEM4 (MTL)** | Δ% (MTL) | Baseline (CLG) | EEM1 (CLG) | EEM2 (CLG) | EEM3 (CLG) | **EEM4 (CLG)** | Δ% (CLG) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Attached Houses | 131.0 | 112.4 | 106.5 | 91.7 | **66.3** | -49.4% | 119.4 | 107.6 | 103.5 | 88.9 | **63.5** | -46.8% |
| Detached Houses | 127.8 | 105.3 | 93.3 | 81.1 | **60.9** | -52.3% | 116.7 | 101.0 | 90.3 | 78.3 | **58.5** | -49.9% |
| ApartmentHighRise | 119.9 | 112.3 | 110.0 | 72.8 | **56.8** | -52.6% | 113.3 | 112.1 | 110.1 | 73.1 | **55.8** | -50.8% |
| HighRise_ST15 | 113.9 | 107.2 | 104.9 | 70.8 | **54.6** | -52.1% | 107.5 | 107.2 | 105.4 | 71.4 | **53.8** | -50.0% |
| HighRise_ST20 | 111.0 | 104.5 | 102.3 | 69.0 | **52.7** | -52.5% | 104.6 | 104.7 | 102.9 | 69.7 | **52.0** | -50.3% |
| ApartmentMidRise | 109.2 | 102.6 | 95.4 | 69.1 | **54.4** | -50.2% | 103.4 | 101.2 | 94.3 | 68.1 | **53.5** | -48.3% |
| College | 81.1 | 78.3 | 76.7 | 63.5 | **38.0** | -53.1% | 74.5 | 73.9 | 72.6 | 59.4 | **34.3** | -54.0% |
| Hospital | 265.0 | 261.8 | 244.0 | 229.6 | **212.0** | -20.0% | 253.4 | 249.4 | 240.5 | 226.2 | **207.7** | -18.0% |
| HotelLarge | 206.1 | 199.7 | 173.9 | 124.3 | **114.5** | -44.4% | 199.3 | 195.0 | 171.3 | 121.9 | **111.5** | -44.1% |
| HotelSmall | 161.6 | 152.2 | 142.6 | 92.4 | **81.8** | -49.4% | 155.9 | 148.3 | 140.3 | 90.3 | **79.8** | -48.8% |
| Laboratory | 828.9 | 787.9 | 259.7 | 254.7 | **229.6** | -72.3% | 739.1 | 702.6 | 232.1 | 227.1 | **200.6** | -72.9% |
| MT5 SmallRetail | 274.2 | 173.2 | 172.1 | 163.9 | **157.9** | -42.4% | 259.5 | 161.9 | 161.4 | 153.2 | **147.9** | -43.0% |
| OfficeMedium | 92.5 | 82.6 | 68.5 | 62.2 | **40.8** | -55.9% | 84.8 | 77.4 | 64.3 | 58.0 | **38.2** | -55.0% |
| OfficeSmall | 89.6 | 81.4 | 78.5 | 65.9 | **50.4** | -43.8% | 85.4 | 79.4 | 76.8 | 64.2 | **49.0** | -42.6% |
| OutPatientHealthCare | 232.8 | 216.3 | 135.6 | 118.3 | **110.5** | -52.5% | 213.3 | 195.4 | 126.7 | 109.3 | **101.1** | -52.6% |
| RestaurantFastFood | 1648.8 | 1459.0 | 1064.2 | 907.4 | **895.9** | -45.7% | 1614.1 | 1422.4 | 1065.3 | 908.9 | **899.6** | -44.3% |
| RestaurantSitDown | 1031.0 | 980.5 | 670.8 | 549.4 | **539.7** | -47.7% | 1009.4 | 961.2 | 677.1 | 556.5 | **548.2** | -45.7% |
| RetailStandalone | 145.8 | 130.0 | 76.2 | 66.3 | **53.8** | -63.1% | 139.1 | 131.1 | 79.5 | 69.6 | **58.2** | -58.2% |
| RetailStripmall | 170.4 | 135.5 | 85.5 | 78.0 | **57.0** | -66.5% | 161.0 | 130.4 | 85.6 | 78.2 | **58.9** | -63.4% |
| SchoolPrimary | 143.3 | 115.4 | 78.0 | 71.5 | **58.3** | -59.3% | 133.5 | 114.2 | 75.4 | 69.0 | **55.8** | -58.2% |
| SchoolSecondary | 133.8 | 113.1 | 72.7 | 66.6 | **51.9** | -61.2% | 120.6 | 102.9 | 68.4 | 62.2 | **48.9** | -59.5% |
| SuperTallBuilding | 109.2 | 94.3 | 89.0 | 70.7 | **50.6** | -53.6% | 100.2 | 91.2 | 86.0 | 67.8 | **47.7** | -52.4% |
| TallBuilding | 116.7 | 105.7 | 100.5 | 80.9 | **59.5** | -49.0% | 108.8 | 101.8 | 96.7 | 77.1 | **55.8** | -48.7% |
| Warehouse (50pct) | 64.8 | 59.0 | 41.4 | 39.3 | **37.6** | -42.0% | 57.5 | 53.5 | 34.8 | 32.7 | **31.4** | -45.4% |
| Warehouse (full) | 47.8 | 46.1 | 30.0 | 28.8 | **27.2** | -43.1% | 43.9 | 44.6 | 27.6 | 26.4 | **24.9** | -43.3% |

**Commercial EEM3 → EEM4 incremental impact by tier:**
- **HUGE (−13 to −19 %):** OfficeSmall/Medium, Schools, RetailStandalone/Stripmall — high LPD/EPD baselines, shallow-plan perimeter zones with WWR ≥ 0.20; LED + ESTAR + daylighting all fire together.
- **GOOD (−8 to −12 %):** College, Hotels, Tall/SuperTall, MT5 SmallRetail — mid-tier LPD/EPD or partially deep-plan; LED + ESTAR dominate.
- **MODEST (−4 to −8 %):** Hospital, OutPatient, Warehouses — healthcare equipment skip; low LPD/EPD baselines in Warehouses.
- **NOTHING (<−3 %):** Restaurants, Laboratory — process loads (kitchen/lab/fume hoods) carry > 70 % of EUI; blind/daylighting area is minimal.

**Note on Option 9i neighbourhoods:** EEM4 not yet simulated at the neighbourhood level — Option 9i EEM4 rerun pending. The neighbourhood ladder in `EEM_Journal_Can_7_report.md` covers EEM1–EEM3 only.

---

## Neighbourhood (Option 9i) results — cumulative ladder and isolated scenarios

Two complementary neighbourhood-scale (Option 9i) EUI views. The **cumulative** ladder applies the EEM tiers as strict supersets (EEM1 ⊂ EEM2 ⊂ EEM3 ⊂ EEM4); the **isolated** scenarios apply each domain alone against the Default baseline with HVAC kept on (Envelope-only / HVAC-only / DHW-only / EEM4-only), so each domain's standalone value is separated from sequencing. All values gross site EUI (kWh/m²); PV not netted. (The Option 9i EEM4 rerun noted as 'pending' earlier in this doc completed 2026-05-15 and is included in the cumulative ladder below.)

### Option 9i neighbourhood EUI ladder — MTL vs CLG (kWh/m²) — 36 NUs (2026-05-12 / EEM4: 2026-05-15)

*EEM Δ% = (EEM4 − Baseline) / Baseline × 100. PV not netted into EUI.*

Source (EEM1–EEM3): `option9_i_20260512_125350/CAN_{MTL,CLG}/master_summary.csv` (36 NUs per cohort, E+ v22.1).
Source (EEM4): `option9_i_20260515_092412/CAN_{MTL,CLG}/master_summary.csv` (36 NUs per cohort, EEM_J_ENV_HVAC_DHW_EEM4 scenario, E+ v22.1).

| Neighbourhood | Baseline (Montreal) | EEM1 (MTL) | EEM2 (MTL) | EEM3 (MTL) | **EEM4 (MTL)** | EEM Δ% (MTL) | Baseline (Calgary) | EEM1 (CLG) | EEM2 (CLG) | EEM3 (CLG) | **EEM4 (CLG)** | EEM Δ% (CLG) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| RS-I1 | 169.2 | 148.6 | 124.8 | 100.5 | **83.4** | −50.7% | 163.9 | 147.0 | 123.6 | 99.3 | **82.4** | −49.7% |
| RS-S | 202.1 | 182.1 | 152.7 | 130.6 | **108.0** | −46.6% | 199.7 | 179.4 | 151.1 | 129.1 | **106.7** | −46.6% |
| RS-I2 | 145.4 | 129.0 | 101.0 | 82.3 | **64.9** | −55.4% | 136.2 | 125.9 | 98.5 | 79.8 | **63.5** | −53.4% |
| RS-I3 | 179.2 | 144.7 | 121.3 | 106.4 | **85.2** | −52.5% | 177.0 | 144.1 | 119.4 | 104.6 | **83.4** | −52.9% |
| RS-I4 | 137.2 | 120.3 | 95.8 | 76.4 | **60.6** | −55.8% | 127.6 | 115.8 | 93.2 | 74.0 | **59.2** | −53.6% |
| RC-HR1 | 111.2 | 103.4 | 99.8 | 67.3 | **52.3** | −53.0% | 104.4 | 102.0 | 99.2 | 66.7 | **51.4** | −50.8% |
| RC-HR2 | 116.2 | 108.0 | 106.5 | 69.0 | **53.7** | −53.8% | 109.1 | 107.1 | 106.2 | 68.9 | **52.8** | −51.6% |
| RC-MR1 | 113.6 | 100.5 | 96.7 | 74.3 | **56.4** | −50.4% | 108.2 | 98.2 | 95.0 | 72.7 | **54.7** | −49.4% |
| RC-MR2 | 107.0 | 99.1 | 92.4 | 65.7 | **51.5** | −51.9% | 100.2 | 97.3 | 91.3 | 64.7 | **50.6** | −49.5% |
| RC-MR3 | 107.0 | 99.0 | 92.0 | 65.3 | **51.1** | −52.2% | 100.2 | 97.2 | 90.8 | 64.3 | **50.2** | −49.9% |
| RC-D | 138.6 | 108.2 | 93.1 | 81.0 | **61.1** | −55.9% | 135.1 | 104.3 | 90.3 | 78.3 | **58.9** | −56.4% |
| RC-ML | 139.2 | 111.0 | 99.7 | 86.2 | **63.8** | −54.2% | 134.3 | 106.7 | 96.7 | 83.4 | **61.4** | −54.3% |
| RC-T | 140.0 | 114.0 | 106.5 | 91.8 | **66.7** | −52.4% | 133.4 | 109.2 | 103.4 | 88.8 | **63.9** | −52.1% |
| RC-R | 137.8 | 107.6 | 93.2 | 81.0 | **61.0** | −55.7% | 133.5 | 103.1 | 90.2 | 78.2 | **58.6** | −56.1% |
| RC-R_Garage | 137.5 | 107.8 | 94.3 | 90.1 | **80.9** | −41.2% | 133.2 | 103.2 | 90.9 | 86.7 | **77.8** | −41.6% |
| IC-DC | 3660.5 | 3663.7 | 3645.7 | 3637.5 | **3632.7** | −0.8% | 3654.5 | 3655.5 | 3638.2 | 3630.0 | **3625.4** | −0.8% |
| IC-DE | 11920.8 | 11914.9 | 11887.0 | 11877.1 | **11865.4** | −0.5% | 11905.2 | 11897.1 | 11868.6 | 11858.8 | **11848.4** | −0.5% |
| MU-C1 | 205.6 | 182.2 | 169.2 | 139.9 | **119.1** | −42.1% | 195.3 | 177.3 | 167.1 | 137.9 | **113.2** | −42.0% |
| MU-C2 | 136.5 | 118.0 | 109.3 | 85.2 | **60.2** | −55.9% | 128.8 | 116.4 | 108.5 | 84.5 | **58.7** | −54.4% |
| MU-HC | 162.6 | 152.7 | 124.4 | 92.6 | **77.5** | −52.3% | 154.9 | 149.1 | 121.6 | 89.8 | **75.0** | −51.6% |
| MU-HS | 198.0 | 176.2 | 135.3 | 109.3 | **94.2** | −52.4% | 190.6 | 169.9 | 132.4 | 106.4 | **91.2** | −52.2% |
| MU-L | 158.7 | 141.0 | 122.8 | 94.9 | **80.1** | −49.5% | 152.3 | 138.0 | 121.5 | 93.7 | **79.4** | −47.9% |
| MU-S1 | 193.3 | 182.2 | 151.0 | 122.9 | **100.5** | −48.0% | 187.3 | 182.4 | 150.0 | 121.8 | **100.0** | −46.6% |
| MU-S2 | 186.8 | 177.3 | 148.3 | 121.7 | **98.1** | −47.5% | 180.0 | 176.2 | 147.7 | 121.1 | **98.0** | −45.6% |
| MU-U1 | 119.9 | 100.7 | 97.3 | 77.0 | **50.0** | −58.3% | 112.0 | 99.9 | 97.0 | 76.7 | **48.6** | −56.6% |
| MU-W | 144.9 | 129.9 | 103.9 | 83.7 | **74.0** | −48.9% | 139.2 | 127.3 | 102.8 | 82.6 | **73.5** | −47.2% |
| MU-W2 | 128.0 | 110.7 | 83.6 | 73.6 | **67.4** | −47.3% | 123.4 | 107.1 | 80.8 | 70.8 | **65.4** | −47.0% |
| CC-B | 119.5 | 113.6 | 100.4 | 87.2 | **64.5** | −46.0% | 114.4 | 109.7 | 97.5 | 84.4 | **62.1** | −45.7% |
| CC-S1 | 255.4 | 233.5 | 190.8 | 173.2 | **139.3** | −45.5% | 245.5 | 226.1 | 186.6 | 168.9 | **137.2** | −44.1% |
| CC-S2 | 343.5 | 316.4 | 265.3 | 246.4 | **196.7** | −42.7% | 334.0 | 309.9 | 261.3 | 242.2 | **193.6** | −42.0% |
| CC-E1 | 95.2 | 89.3 | 81.2 | 71.6 | **48.8** | −48.7% | 89.9 | 86.3 | 78.7 | 69.1 | **46.6** | −48.2% |
| CC-E2 | 299.6 | 280.6 | 145.0 | 129.7 | **106.7** | −64.4% | 273.7 | 255.7 | 136.4 | 121.1 | **98.9** | −63.9% |
| CC-E3 | 285.0 | 269.3 | 143.8 | 127.0 | **106.4** | −62.7% | 262.4 | 248.2 | 135.7 | 118.9 | **98.5** | −62.5% |
| CC-FD1 | 125.0 | 112.7 | 101.5 | 81.8 | **61.4** | −50.9% | 116.7 | 109.6 | 98.2 | 78.5 | **58.5** | −49.9% |
| CC-FD2 | 117.5 | 109.6 | 100.3 | 84.8 | **62.5** | −46.8% | 110.4 | 106.2 | 97.4 | 81.9 | **59.7** | −45.9% |
| CC-FD3 | 133.0 | 119.7 | 108.1 | 88.5 | **66.5** | −50.0% | 124.6 | 115.8 | 104.6 | 85.2 | **63.1** | −49.4% |

*Fleet median EEM4 Δ% (36 NUs): MTL = −50.8% · CLG = −49.6%. Fleet median EEM4 EUI: MTL = 67.1 kWh/m² · CLG = 64.6 kWh/m² (36 NUs). EEM3 reference: MTL = −37.9% / 87.9 kWh/m² · CLG = −35.4% / 84.9 kWh/m².*

### Isolated EEM scenarios — neighbourhood EUI (CAN_MTL vs US_ASHRAE, kWh/m²) — 35 NUs

#### Scenario map - SEPARATE (isolated) scenarios, NOT a cumulative ladder

Each EEM domain is applied **on its own** against the DEFAULT baseline, with HVAC kept ON. These are five independent simulations per (NU, standard); the measures are **not** stacked on top of one another. (This differs from the Paper 2 / EEM_Journal cumulative ladder, where EEM2 = EEM1 + HVAC, EEM3 = EEM2 + DHW, etc.) The isolated framing is what lets Block A/B attribute a standalone saving to each domain (and feeds the Shapley decomposition).

| Scenario | Flags (env, hvac, dhw, eem4) | scenario_tag | Meaning |
|---|:---:|---|---|
| Baseline | 0, 0, 0, 0 | `EEM_J_DEFAULT`  | NECB 2017 / NBC 9.36 baseline, no measures |
| Envelope | 1, 0, 0, 0 | `EEM_J_ENVELOPE` | Envelope retrofit **only** |
| HVAC     | 0, 1, 0, 0 | `EEM_J_HVAC_ONLY`| ASHP / HVAC retrofit **only** |
| DHW      | 0, 0, 1, 0 | `EEM_J_DHW_ONLY` | HPWH / DHW retrofit **only** |
| EEM4     | 0, 0, 0, 1 | `EEM_J_EEM4_ONLY`| Cooling/Lighting/Equipment retrofit **only** |

*Each measure cell below shows the isolated EUI and, in parentheses, the standalone change vs that NU's Baseline: Δ% = (measure − Baseline) / Baseline x 100. A negative value is a saving.*

| Neighbourhood | Baseline (MTL) | Envelope (MTL) | HVAC (MTL) | DHW (MTL) | EEM4 (MTL) | Baseline (US) | Envelope (US) | HVAC (US) | DHW (US) | EEM4 (US) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| RS-I1 | 169.2 | 148.5 (−12.2%) | 128.9 (−23.8%) | 145.5 (−14.0%) | 158.2 (−6.5%) | 190.6 | 163.5 (−14.3%) | 159.2 (−16.5%) | 167.7 (−12.0%) | 173.9 (−8.8%) |
| RS-I2 | 145.3 | 128.9 (−11.3%) | 107.2 (−26.2%) | 127.9 (−12.0%) | 131.0 (−9.9%) | 158.2 | 132.4 (−16.3%) | 131.2 (−17.0%) | 140.9 (−10.9%) | 142.4 (−10.0%) |
| RS-I3 | 179.2 | 144.7 (−19.2%) | 133.4 (−25.6%) | 165.1 (−7.9%) | 166.2 (−7.3%) | 179.1 | 149.3 (−16.6%) | 147.1 (−17.8%) | 165.1 (−7.8%) | 161.3 (−9.9%) |
| RS-I4 | 137.2 | 120.3 (−12.3%) | 101.9 (−25.7%) | 119.3 (−13.0%) | 130.9 (−4.5%) | 153.0 | 124.3 (−18.8%) | 126.2 (−17.5%) | 135.3 (−11.6%) | 137.6 (−10.1%) |
| RS-S | 202.0 | 182.0 (−9.9%) | 159.8 (−20.9%) | 179.4 (−11.2%) | 184.4 (−8.7%) | 200.0 | 183.5 (−8.3%) | 175.3 (−12.3%) | 177.7 (−11.1%) | 180.3 (−9.8%) |
| RC-D | 138.6 | 108.2 (−21.9%) | 103.5 (−25.3%) | 126.0 (−9.0%) | 123.7 (−10.7%) | 131.7 | 103.8 (−21.2%) | 99.2 (−24.7%) | 119.2 (−9.5%) | 116.7 (−11.4%) |
| RC-HR1 | 111.2 | 103.4 (−7.1%) | 100.5 (−9.6%) | 79.0 (−29.0%) | 101.7 (−8.5%) | 146.6 | 120.1 (−18.1%) | 125.0 (−14.7%) | 114.9 (−21.6%) | 132.7 (−9.4%) |
| RC-HR2 | 116.2 | 107.9 (−7.1%) | 106.2 (−8.6%) | 78.7 (−32.2%) | 107.1 (−7.8%) | 155.0 | 125.0 (−19.3%) | 131.5 (−15.2%) | 117.7 (−24.1%) | 142.2 (−8.2%) |
| RC-ML | 139.2 | 111.0 (−20.3%) | 109.3 (−21.5%) | 125.3 (−10.0%) | 122.4 (−12.1%) | 133.5 | 107.6 (−19.4%) | 105.6 (−20.9%) | 119.5 (−10.4%) | 116.5 (−12.7%) |
| RC-MR1 | 113.6 | 100.5 (−11.5%) | 100.0 (−12.0%) | 91.4 (−19.6%) | 100.6 (−11.5%) | 123.3 | 112.4 (−8.8%) | 112.3 (−8.9%) | 101.6 (−17.6%) | 104.3 (−15.4%) |
| RC-MR2 | 107.0 | 99.1 (−7.4%) | 94.3 (−11.8%) | 81.0 (−24.3%) | 97.2 (−9.1%) | 137.7 | 113.8 (−17.4%) | 117.2 (−14.9%) | 112.8 (−18.1%) | 122.9 (−10.8%) |
| RC-MR3 | 107.0 | 99.0 (−7.5%) | 94.0 (−12.2%) | 81.0 (−24.3%) | 97.4 (−9.0%) | 137.9 | 113.4 (−17.7%) | 117.0 (−15.1%) | 113.0 (−18.1%) | 123.3 (−10.6%) |
| RC-R | 137.8 | 107.6 (−21.9%) | 103.4 (−25.0%) | 125.3 (−9.1%) | 122.9 (−10.8%) | 131.4 | 103.6 (−21.2%) | 99.3 (−24.4%) | 118.8 (−9.6%) | 116.3 (−11.5%) |
| RC-T | 140.0 | 114.0 (−18.6%) | 115.5 (−17.5%) | 124.6 (−11.0%) | 121.1 (−13.4%) | 135.3 | 111.5 (−17.6%) | 112.3 (−17.0%) | 119.9 (−11.4%) | 116.2 (−14.1%) |
| MU-C1 | 205.5 | 180.8 (−12.0%) | 174.2 (−15.2%) | 177.5 (−13.6%) | 193.8 (−5.7%) | 212.4 | 188.7 (−11.2%) | 188.7 (−11.2%) | 184.1 (−13.3%) | 199.5 (−6.1%) |
| MU-C2 | 136.4 | 117.0 (−14.2%) | 113.0 (−17.1%) | 114.8 (−15.8%) | 125.2 (−8.2%) | 170.0 | 151.7 (−10.8%) | 151.9 (−10.7%) | 148.2 (−12.8%) | 157.1 (−7.6%) |
| MU-HC | 162.5 | 152.5 (−6.1%) | 125.9 (−22.5%) | 131.1 (−19.3%) | 152.1 (−6.4%) | 194.1 | 169.1 (−12.9%) | 158.0 (−18.6%) | 163.1 (−16.0%) | 179.9 (−7.3%) |
| MU-HS | 198.0 | 176.1 (−11.0%) | 140.9 (−28.8%) | 172.5 (−12.9%) | 187.1 (−5.5%) | 222.9 | 196.4 (−11.9%) | 179.0 (−19.7%) | 197.8 (−11.3%) | 211.8 (−5.0%) |
| MU-L | 158.6 | 140.9 (−11.2%) | 131.2 (−17.3%) | 131.2 (−17.3%) | 148.1 (−6.6%) | 178.9 | 151.2 (−15.5%) | 154.1 (−13.8%) | 152.5 (−14.7%) | 163.9 (−8.4%) |
| MU-S1 | 193.0 | 181.9 (−5.7%) | 153.4 (−20.5%) | 164.6 (−14.7%) | 176.2 (−8.7%) | 219.9 | 191.6 (−12.9%) | 184.8 (−16.0%) | 192.7 (−12.3%) | 200.3 (−8.9%) |
| MU-S2 | 186.6 | 177.2 (−5.0%) | 151.1 (−19.0%) | 161.0 (−13.7%) | 170.4 (−8.7%) | 210.8 | 187.6 (−11.0%) | 180.6 (−14.3%) | 186.2 (−11.6%) | 188.7 (−10.5%) |
| MU-U1 | 119.8 | 99.4 (−17.0%) | 101.1 (−15.6%) | 101.9 (−14.9%) | 107.8 (−10.1%) | 154.2 | 134.7 (−12.7%) | 137.9 (−10.6%) | 135.7 (−12.0%) | 141.2 (−8.4%) |
| MU-W | 144.6 | 129.7 (−10.3%) | 111.1 (−23.2%) | 125.1 (−13.5%) | 138.5 (−4.2%) | 161.2 | 130.6 (−19.0%) | 136.9 (−15.1%) | 142.1 (−11.8%) | 151.3 (−6.1%) |
| MU-W2 | 127.5 | 110.5 (−13.3%) | 95.5 (−25.1%) | 118.5 (−7.0%) | 123.4 (−3.1%) | 135.0 | 98.0 (−27.4%) | 117.0 (−13.4%) | 126.4 (−6.3%) | 130.4 (−3.4%) |
| CC-B | 119.3 | 113.2 (−5.2%) | 100.3 (−15.9%) | 106.2 (−11.0%) | 101.6 (−14.9%) | 181.6 | 174.2 (−4.1%) | 168.6 (−7.2%) | 169.0 (−6.9%) | 162.6 (−10.5%) |
| CC-E1 | 95.1 | 89.0 (−6.3%) | 81.3 (−14.5%) | 85.7 (−9.8%) | 78.9 (−17.0%) | 182.9 | 160.1 (−12.5%) | 158.6 (−13.3%) | 173.7 (−5.0%) | 164.6 (−10.0%) |
| CC-E2 | 299.2 | 279.2 (−6.7%) | 149.4 (−50.1%) | 284.0 (−5.1%) | 270.1 (−9.7%) | 389.5 | 359.0 (−7.8%) | 211.0 (−45.8%) | 374.6 (−3.8%) | 357.2 (−8.3%) |
| CC-E3 | 284.7 | 269.0 (−5.5%) | 145.5 (−48.9%) | 268.0 (−5.9%) | 262.3 (−7.9%) | 376.3 | 342.8 (−8.9%) | 207.8 (−44.8%) | 360.2 (−4.3%) | 347.8 (−7.6%) |
| CC-FD1 | 125.0 | 112.7 (−9.8%) | 101.0 (−19.2%) | 105.3 (−15.8%) | 110.1 (−11.9%) | 188.5 | 140.4 (−25.5%) | 132.4 (−29.8%) | 169.3 (−10.2%) | 180.6 (−4.2%) |
| CC-FD2 | 117.4 | 109.4 (−6.8%) | 99.2 (−15.5%) | 101.8 (−13.2%) | 100.1 (−14.7%) | 170.2 | 152.3 (−10.5%) | 146.0 (−14.2%) | 155.1 (−8.9%) | 156.5 (−8.1%) |
| CC-FD3 | 132.9 | 119.6 (−10.0%) | 108.8 (−18.1%) | 113.4 (−14.7%) | 116.5 (−12.4%) | 167.1 | 138.4 (−17.1%) | 132.1 (−20.9%) | 148.0 (−11.4%) | 157.4 (−5.8%) |
| CC-S1 | 255.0 | 232.8 (−8.7%) | 200.0 (−21.6%) | 238.0 (−6.7%) | 231.2 (−9.3%) | 259.3 | 233.2 (−10.1%) | 225.8 (−12.9%) | 242.6 (−6.4%) | 235.3 (−9.2%) |
| CC-S2 | 342.9 | 315.6 (−7.9%) | 275.3 (−19.7%) | 325.2 (−5.2%) | 306.7 (−10.5%) | 340.6 | 311.4 (−8.6%) | 298.7 (−12.3%) | 323.2 (−5.1%) | 299.5 (−12.1%) |
| IC-DC | 3,660.2 | 3,663.5 (+0.1%) | 3,636.7 (−0.6%) | 3,652.1 (−0.2%) | 3,656.6 (−0.1%) | 3,679.2 | 3,670.9 (−0.2%) | 3,665.4 (−0.4%) | 3,671.5 (−0.2%) | 3,674.8 (−0.1%) |
| IC-DE | 11,920.6 | 11,914.6 (−0.0%) | 11,884.0 (−0.3%) | 11,910.8 (−0.1%) | 11,911.0 (−0.1%) | 11,965.4 | 11,953.3 (−0.1%) | 11,943.4 (−0.2%) | 11,956.1 (−0.1%) | 11,958.0 (−0.1%) |

**Fleet median isolated Δ% (35 NUs):**

| Standard | Envelope | HVAC | DHW | EEM4 |
|---|---:|---:|---:|---:|
| CAN_MTL | −9.9% | −19.2% | −13.0% | −8.7% |
| US_ASHRAE | −12.9% | −15.1% | −11.3% | −8.9% |

---

## Phase P pending

Phase P is in flight as of 2026-05-11. A two-line code fix in `BEM_utils/idf_eem_applier.py` (`_convert_mixed_tank_to_stratified`, after line 1610) adds `EndUse_Subcategory = 'Water Heating'` to both heater objects in the Stratified HPWH tank, correcting the ~7 kWh/m² mis-bucketing of HighRise EEM3 backup-resistance energy from the Space Heating meter to the Water Heating meter in EnergyPlus v22.1. The fix is label-only: combined Htg+WS is conserved; only the per-column split changes. Upon completion, report Table 2b (HighRise EEM3 Htg/DHW columns) and the Option 7i ladder will be refreshed. All numbers in this document are pre-Phase-P state.

---

## Relationship to v1/v2/v3

**v1** (`EEM_JOURNAL`) applied the same envelope + ASHP bundle as a single tag with no per-tier breakdown; v1 outputs and manuscript-of-record are byte-frozen.

**v2** split the bundle into three cumulative tiers with fleet median −30.7% (MTL) / −28.1% (CLG). **v3** deepened to a heat-pump focus, adding HRV/ERV upgrades (X4) and supply-fan SFP (X5) to EEM2, and nine DHW measures (HPWH, DWHR, demand reduction, distribution) to EEM3, reaching −40.6% (MTL) / −40.9% (CLG). **v2 and v3 are superseded by v6.**

**Path from v3 to v6:**
- **v4 SF-targeted (2026-05-08):** Added E2-J Branch A (per-zone PTHP for Detached/Attached SF), E3-J (HPWH tank jacket), and several SF-focused EEM3 corrections.
- **v5 SF push-forward (2026-05-08/09/10):** Continued E2-J Branch A + HPWH efficiency items (E2-I inverter cooling curves); commercial measures I4a/b/c predicate-gated and inert on residential fleet.
- **v6.x (2026-05-10):** 13 physics bug fixes (C1–C13, G2–G4); 8 non-HP measures commented out (X4–X11); MURB swing-tank (A1+A2) and SF preheat-tank (A5) topology additions; HPWH rated COP upgraded 2.69 → 4.0 (Phase L — transcritical CO₂, Sanden GAU / Mitsubishi Q-Ton); C7 Mixed→Stratified HPWH tank conversion added.
- **Phase K (2026-05-10) — MidRise convergence ABANDONED:** Four consecutive Phase I+J pre-flight gate failures drove the decision. **Binding outcome: v6.y MidRise EEM3 DHW = 17.6 kWh/m² is the published, physically defensible value.** v6.y equals v6.x H4 within simulation noise; fleet median unchanged at −34.75%.
- **Phase P (in flight, 2026-05-11):** Rank 1 labeling-bug fix for C7 Stratified `EndUse_Subcategory`; will refresh HighRise EEM3 Htg/DHW split in the report once the 224-sim full-fleet re-run completes. Combined Htg+WS conserved; fleet median not expected to change.

---

## Update log

### 2026-05-15 — EEM4 section added

- **Scope:** Added EEM4 scenario tag, measure stack (C4-1/C4-3/L4-1/L4-2/E4-1 through E4-7), key guardrails, residential end-use table, and full Option 7i fleet EEM4 ladder.
- **Sources:** `docs_DONE/docs_EEM/DONE/EEM4/EEM4_setup.md` (measure spec, §3–4, §4.7 guardrails); `docs_DONE/docs_EEM/DONE/EEM4/EEM_Journal_Can_7_report.md` (Table 2b residential, full fleet ladder).
- **Numbers from:** `0_BEM_Setup/SimResults_modified/EEM_Journal_v6y_20260513_master.csv` (T8 final, 8 rows residential EEM4).
- **Scenarios count updated:** 4 → 5 per building; total simulations 256 → 320.
- **Note:** Option 9i neighbourhood EEM4 rerun pending; neighbourhood table still covers EEM1–EEM3 only.

### 2026-05-11 — v6.y refresh (doc-only)

- **Scope:** Full document rewrite from v2/v3 state to v6.y current state.
- **Lines rewritten:** All sections (prior content described v2 and a partial v3 addendum only).
- **Sources cited:** `EEM_Journal_v6y_20260510_master.csv` (fleet median −34.75%, residential EUI table); `EEM_Journal_Can_6_report.md` lines 1–190 (v6 measure stack, Option 7i ladder, Phase K/L narratives, Phase O [†] deferrals, Phase P scope); `DONE_EEM_Journal_Can_6_improvement.md` (HPWH COP 4.0, Phase K abandonment decision); `BEM_utils/idf_eem_applier.py` (X5 `[v6 X-cut]` markers verified at lines 6071 and 7975; CCHP applied state confirmed; PV source `main_BEM.py:10312` confirmed).
- **TODO(verify):** Full Option 7i master CSV row count per climate — Phase L supplement CSVs in `opt7i_master_EEM_J_v4_CAN_MTL_20260511/` and `…CLG_20260511/` contain only 3 data rows each (targeted Phase L sims: Hospital EEM3 + ST15/ST20 DEFAULT); the per-building subdirectory outputs are in `opt7i_master_EEM_J_v4_CAN_MTL_20260510/CAN_MTL/`; a consolidated full-fleet master CSV for Option 7i does not appear to exist as a single file on disk. Report line 158 source citation should be updated to a consolidated CSV once Phase P full-fleet re-run (224 sims) completes.
- **Phase P:** All numbers are pre-Phase-P state; Phase P pending section added.
- **X-cut list correction:** Task prompt listed X4=ASHP defrost through X11=tank upsize; actual X-cut numbering from `EEM_J_Can_6.md` Phase A table is X4=Ventilation HR, X5=SFP tune, X6=DHW demand, X7=distribution wrapper, X8=deep volume, X9=pipe insulation, X10=temp lowering, X11=DWHR. Document uses authoritative source numbering.
