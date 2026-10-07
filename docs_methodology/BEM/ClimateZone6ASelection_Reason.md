# Buffalo as Representative City for Climate Zone 6A — Selection Rationale

**Date:** 2026-03-20
**Scope:** `ASHRAE901_OfficeSmall_STD2022` prototype IDF selection for Montreal-based simulation
**Question:** Which DOE prototype IDF location best represents Montreal's climate for building energy simulation?

---

## 1. Context

The DOE/PNNL prototype building IDFs are location-specific: each IDF contains HVAC systems sized for the design conditions of a particular city, with constructions and equipment selected to comply with ASHRAE 90.1 for that climate zone. When simulating a prototype building with a Montreal weather file (CWEC2020), the IDF base location must be selected to minimize HVAC sizing mismatch and ensure setpoints are met throughout the annual simulation.

Montreal is classified as **ASHRAE Climate Zone 6A** (cold, humid continental). From the available `ASHRAE901_OfficeSmall_STD2022` prototype IDFs, the candidate locations within or adjacent to CZ6A are:

| Location | ASHRAE CZ | Notes |
|---|---|---|
| Buffalo, NY | 6A | Cold, humid, Great Lakes |
| Rochester, NY | 6A | Cold, humid, slightly milder |
| International Falls, MN | 7 | Subarctic, too cold |
| Great Falls, MT | 6B | Cold but semi-arid, wrong humidity class |

---

## 2. Why Buffalo

### 2.1 Climate Zone Match

Buffalo is classified as ASHRAE Climate Zone 6A, identical to Montreal. The 6A designation specifies a cold climate with a humid continental regime, which determines both the heating-dominated annual load profile and the latent cooling load characteristics in summer. Great Falls (6B) shares the cold classification but is semi-arid, producing systematically lower latent loads than Montreal and making it unsuitable as a proxy.

### 2.2 Heating Degree Days

Heating degree days (HDD, base 18 degC) provide a first-order proxy for annual heating demand and HVAC sizing conservatism:

| Location | HDD18 (approx.) |
|---|---|
| Montreal | ~3900 |
| Buffalo, NY | ~3500 |
| Rochester, NY | ~3300 |

Buffalo's HDD is closer to Montreal than Rochester's. The HVAC system in the Buffalo IDF is sized for slightly more severe heating conditions, reducing the risk of unmet heating hours when the IDF is run with the Montreal CWEC2020 weather file.

### 2.3 Latent Load Regime

Buffalo sits directly on Lake Erie and is subject to significant lake-effect moisture, producing humid summer conditions with elevated latent cooling loads. This is more representative of Montreal's humid continental summer profile than Rochester, which is more sheltered from direct lake-effect exposure. Latent load matching is critical for DX coil sizing: a semi-arid proxy city systematically undersizes the cooling coil for Montreal conditions, producing unmet cooling hours (as documented in `IALvsHVAC_load_energy_discrepancy.md` for the Denver IDF case).

### 2.4 DOE/PNNL Precedent

Buffalo is a primary representative city for Climate Zone 6A in DOE/PNNL prototype building studies and ASHRAE 90.1 energy standard development. Its use as a CZ6A proxy is established in the published literature, making it the most defensible selection for peer-reviewed reporting.

---

## 3. Known Limitations

The Buffalo IDF is not a perfect proxy for Montreal. Three residual discrepancies are expected:

| Source | Direction | Magnitude (estimated) |
|---|---|---|
| HDD gap (3500 vs 3900) | HVAC slightly undersized for heating | Small, <10% heating energy |
| No Canadian construction baseline | Constructions reflect US 90.1, not NECB | Addressed by construction replacement |
| No Canadian utility rates or schedules | Schedules reflect US occupancy patterns | Addressed by schedule replacement if needed |

These limitations are acceptable for the intended use case, where the Buffalo IDF serves as the HVAC sizing and geometry reference and the Montreal CWEC2020 EPW drives the actual thermal simulation.

---

## 4. Conclusion

`ASHRAE901_OfficeSmall_STD2022_Buffalo.idf` is selected as the base prototype IDF for Montreal simulations. The selection is based on Climate Zone 6A classification match, closest available HDD to Montreal, appropriate latent load regime from lake-effect humidity, and established precedent in DOE/PNNL prototype studies. The IDF is subsequently modified to replace US constructions with Canadian NECB-compliant assemblies and HVAC with `ZoneHVAC:IdealLoadsAirSystem` for thermal load disaggregation.

---

## 5. Related Files

- `IALvsHVAC_load_energy_discrepancy.md` — documents the consequence of using a mismatched climate IDF (Denver) with a Montreal weather file
- `IALvsHVAC_waterheater_difference.md` — SHW value difference between IAL and HVAC simulations
- `IALvsHVAC_heating_demand_difference.md` — heating-only deep dive
