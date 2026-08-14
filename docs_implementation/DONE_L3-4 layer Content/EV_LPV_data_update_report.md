# Layer 3–4 Content Update — EV/V2G & LPV Data Generation

**Date:** 2026-06-22
**Author:** Generated via `Templates/Content_Layer3_Transportation/generate_ev_lpv_data.py`
**Scope:** Extend EV/V2G and LPV neighbourhood data from the 9 Residential Cluster (RC) units to **all 35 neighbourhood units (NUs)**.

---

## 1. Summary

Previously, EV and LPV data existed only for RC neighbourhoods — and even then, only 6 of the 9 RC units were live in the app. This update:

- Generated EV/V2G data for **all 35 NUs** (9 RC + 26 non-RC: RS, MU, CC, IC).
- **Backfilled** the 3 RC units that existed in the CSV but were never wired into the app (`RC-ML`, `RC-MR1`, `RC-HR1`).
- **Corrected** 3 inconsistent RC values (see §5).
- Replicated LPV data to all 35 NUs as a **placeholder** (no per-NU LPV formula exists yet — see §6).

All data was written to **both** the source CSVs and `js/data.js` (the file the pages actually read).

---

## 2. Data Pipeline (important context)

EV/LPV data lives in **two places that must stay in sync**:

| Layer | File | Role |
|---|---|---|
| Source of truth | `Templates/NUS_EV.csv`, `Templates/NUs_LPV.csv` | Human-readable spreadsheets |
| Runtime data | `js/data.js` → `EV_V2G_DATA`, `LPV_DATA` | **What the HTML pages actually read** |

The pages **never fetch the CSVs at runtime.** Values are transcribed into `data.js`. Neighbourhood is passed between pages via the `?neighbourhood=<code>` URL parameter; the EV1-vs-EV2 scenario is chosen from `sessionStorage.mobilitySelections` (EV2 only if both `ev` and `v2g_stations` are selected).

---

## 3. EV/V2G Generation Method

EV values are fully reproducible from the authoritative formula in
`Templates/Content_Layer3_Transportation/calculate_ev_scenarios.py`. The only per-NU inputs are **household count** and **residential floor area**; everything else is a fixed constant:

| Constant | Value |
|---|---|
| EV penetration | 1.5 EVs / household |
| Daily energy demand | 15 kWh / EV (200 km range) |
| Charging efficiency | 90% |
| → effective demand | **25 kWh/day per household** |
| Storage loss | 50% of fleet through storage × (1 − 90%) battery eff. |
| V2G participation | 50% |
| V2G discharge | 10 kW/day per participating EV |
| Baseline energy balance (`e_balance_base`) | **0** for every NU (same as all RC) |

### Per-building model (back-solved & validated against RC)

Per-building **household** counts were back-solved from the existing 9 RC rows and validated against the morphology building counts (`class_residential`):

| Building type | Households |
|---|---|
| Detached House (2-St) | 1 |
| Attached House (2-St) | 1 |
| Mid-Rise (4-St, 784 m²/fl) | 32 |
| High-Rise (10-St, 784 m²/fl) | 160 |
| High-Rise (15-St) — *scaled at 16 HH/storey* | 240 |
| High-Rise (20-St) — *scaled at 16 HH/storey* | 320 |

Residential composition per NU was read from `Templates/new/Full_NUs_Archetypes.csv`. Non-residential buildings (offices, retail, schools, hotels, hospitals, warehouses, data centers, colleges, labs, and "Tall/SuperTall" commercial towers) contribute **0** EV load.

**Total floor area** is NOT back-solved — it is taken directly from the authoritative simulation dataset `neighbourhood_morphology.csv` (`total_floor_area_m2`), which varies per NU (see §9). Site/land area is the uniform 5-acre parcel; floor area is the built-up area inside the buildings and differs by neighbourhood.

---

## 4. Generated Households & Results (all 35 NUs)

`Demand` = total EV energy demand (kWh/day); `EV1 bal` / `EV2 bal` = net energy balance (kWh/day, deficit shown as magnitude); `V2G` = V2G discharge contribution.

| NU | HH | Floor m² | Demand | EV1 bal | V2G | EV2 bal | Status |
|---|---:|---:|---:|---:|---:|---:|---|
| RC-R | 24 | 7,949 | 600 | 630 | 180 | 450 | Deficit |
| RC-D | 48 | 15,899 | 1,200 | 1,260 | 360 | 900 | Deficit |
| RC-ML ⁺ | 52 | 15,509 | 1,300 | 1,365 | 390 | 975 | Deficit |
| RC-T | 56 | 15,120 | 1,400 | 1,470 | 420 | 1,050 | Deficit |
| RC-MR1 ⁺ | 156 | 16,964 | 3,900 | 4,095 | 1,170 | 2,925 | Deficit |
| RC-MR2 ✎ | 256 | 18,808 | 6,400 | 6,720 | 1,920 | 4,800 | Deficit |
| RC-MR3 ✎ | 384 | 28,212 | 9,600 | 10,080 | 2,880 | 7,200 | Deficit |
| RC-HR1 ⁺ | 448 | 14,106 | 11,200 | 11,760 | 3,360 | 8,400 | Deficit |
| RC-HR2 ✎ | 640 | 9,404 | 16,000 | 16,800 | 4,800 | 12,000 | Deficit |
| RS-S | 40 | 14,491 | 1,000 | 1,050 | 300 | 750 | Deficit |
| RS-I1 | 110 | 16,835 | 2,750 | 2,888 | 825 | 2,062 | Deficit |
| RS-I2 | 160 | 29,489 | 4,000 | 4,200 | 1,200 | 3,000 | Deficit |
| RS-I3 | 28 | 11,850 | 700 | 735 | 210 | 525 | Deficit |
| RS-I4 | 160 | 22,406 | 4,000 | 4,200 | 1,200 | 3,000 | Deficit |
| MU-C1 | 960 | 44,200 | 24,000 | 25,200 | 7,200 | 18,000 | Deficit |
| MU-C2 | 1,280 | 72,337 | 32,000 | 33,600 | 9,600 | 24,000 | Deficit |
| MU-U1 | 1,280 | 58,948 | 32,000 | 33,600 | 9,600 | 24,000 | Deficit |
| MU-L | 128 | 15,430 | 3,200 | 3,360 | 960 | 2,400 | Deficit |
| MU-S1 | 160 | 28,109 | 4,000 | 4,200 | 1,200 | 3,000 | Deficit |
| MU-S2 | 160 | 18,184 | 4,000 | 4,200 | 1,200 | 3,000 | Deficit |
| MU-W | 64 | 11,699 | 1,600 | 1,680 | 480 | 1,200 | Deficit |
| MU-W2 | 0 | 15,223 | 0 | 0 | 0 | 0 | Net Zero |
| MU-HS | 110 | 17,983 | 2,750 | 2,888 | 825 | 2,062 | Deficit |
| MU-HC | 384 | 24,081 | 9,600 | 10,080 | 2,880 | 7,200 | Deficit |
| CC-S1 | 0 | 13,177 | 0 | 0 | 0 | 0 | Net Zero |
| CC-S2 | 0 | 6,094 | 0 | 0 | 0 | 0 | Net Zero |
| CC-B | 0 | 68,519 | 0 | 0 | 0 | 0 | Net Zero |
| CC-E1 | 32 | 76,341 | 800 | 840 | 240 | 600 | Deficit |
| CC-E2 | 32 | 46,648 | 800 | 840 | 240 | 600 | Deficit |
| CC-E3 | 96 | 50,527 | 2,400 | 2,520 | 720 | 1,800 | Deficit |
| CC-FD1 | 0 | 424,254 | 0 | 0 | 0 | 0 | Net Zero |
| CC-FD2 | 0 | 199,413 | 0 | 0 | 0 | 0 | Net Zero |
| CC-FD3 | 0 | 298,513 | 0 | 0 | 0 | 0 | Net Zero |
| IC-DE | 0 | 11,555 | 0 | 0 | 0 | 0 | Net Zero |
| IC-DC | 0 | 9,346 | 0 | 0 | 0 | 0 | Net Zero |

Legend: ⁺ = newly backfilled into the app · ✎ = corrected value (see §5) · "Deficit" = *Grid Stressed - Deficit* · "Net Zero" = *Load Balanced - Net Zero*.

---

## 5. Assumptions & Decisions

1. **`e_balance_base = 0` for all NUs.** Matches every existing RC entry. EV load is therefore always added to a zero baseline, producing a deficit (or net-zero where there are no households).

2. **Commercial/industrial NUs → 0 EV demand.** The EV model is residential-household-driven. NUs with no dwellings (`MU-W2`, `CC-S1/S2/B`, `CC-FD1/2/3`, `IC-DE`, `IC-DC`) honestly compute to **0 demand / "Load Balanced - Net Zero"**. *Confirmed acceptable by stakeholder.*

3. **Tall MU towers scaled at 16 HH/storey (households only).** RC tops out at 10-St high-rises (160 HH). MU-C1 (15-St) and MU-C2/MU-U1 (20-St) were scaled proportionally → 240 and 320 HH respectively. *Assumption — no source data above 10-St.* (Floor area for these comes from the morphology dataset, not scaling — see §9.)

4. **MU-HS attached houses = 14 units.** The archetype lists "14× Attached House (2-St, 7 units/row, 190 m²/unit)". **Confirmed by stakeholder: 14 attached houses total, arranged as 2 rows of 7.** → MU-HS = 110 households (96 from 3 mid-rises + 14 attached).

5. **Three RC values corrected.** The original hand-entered values for `RC-MR2`, `RC-MR3`, `RC-HR2` used **26.25 kWh/HH** for demand, which was inconsistent with (a) the documented 25 kWh/HH formula and (b) their own storage-loss figures. Regeneration corrected them:

   | NU | Old demand | New demand | Old EV1 bal | New EV1 bal |
   |---|---:|---:|---:|---:|
   | RC-MR2 | 6,720 | **6,400** | 7,040 | **6,720** |
   | RC-MR3 | 10,080 | **9,600** | 10,560 | **10,080** |
   | RC-HR2 | 16,800 | **16,000** | 17,600 | **16,800** |

   *Confirmed acceptable by stakeholder.* All other RC values are unchanged.

---

## 6. LPV Data — Status & Open Decision

**LPV has no generation formula in the codebase.** `NUs_LPV.csv` was a uniform placeholder: every NU shared `20% / 10% / 400W / 475 kWp / 608 MWh/year`. This update **replicated that same placeholder** to all 35 NUs so the LPV page renders for every neighbourhood.

### Reverse-engineered LPV formula (from the existing numbers)

The placeholder values decode to a clear linear chain driven by one hidden input — **total site area**, currently fixed at ~5 acres (20,230 m²) for every NU:

| Step | Value | Definition |
|---|---|---|
| Total site area | 20,230 m² (≈ 5 acres) | **Hardcoded, identical for all NUs** |
| Land Allocation = 20% × site | 4,046 m² (= 1 acre) | "20% of the land is LPV" |
| Usable Area = 10% × site | 2,023 m² (½ acre) | = 50% of the allocation |
| Installed Capacity = usable × 0.235 kWp/m² | 475 kWp | ≈ 1,188 × 400 W modules |
| Energy Generation = capacity × 1,280 kWh/kWp/yr | 608 MWh/yr | Specific yield (Montreal-class) |

### Why LPV is still uniform

Because the total site area is hardcoded the same for every NU, all LPV outputs are identical. **To differentiate LPV per NU, a per-NU site area is required — and no such dataset exists in the repo** (only density *ranges*, du/ac, in `Full_NUs_Archetypes.csv`).

### Decision (settled)

**Keep LPV uniform — 5 acres for every neighbourhood.** This matches the journal methodology, which constrains all NUs to a single standardized parcel (see §9). The "20% of land = LPV" rule holds; LPV values are intentionally identical across NUs because the site area is the controlled variable in the model.

> **Precision note:** the authoritative site area in `neighbourhood_morphology.csv` is **21,717 m² (5.37 acres)**, not the 20,230 m² (5.00 acres) the current LPV placeholder is built on. The current LPV numbers (4,046 m² allocation / 475 kWp / 608 MWh) are internally consistent at 5.00 acres. If exact alignment with the morphology parcel is wanted, rescale by 21,717 / 20,230 = 1.0735 → 4,343 m² allocation / 510 kWp / 653 MWh. Left as-is pending confirmation.

---

## 7. Files Changed

| File | Change |
|---|---|
| `Templates/NUS_EV.csv` | Rewritten — all 35 NUs × 2 scenarios |
| `Templates/NUs_LPV.csv` | Rewritten — all 35 NUs (placeholder values) |
| `js/data.js` | `EV_V2G_DATA` (35 NUs) and `LPV_DATA` (35 columns) regenerated |
| `Templates/Content_Layer3_Transportation/generate_ev_lpv_data.py` | **New** — reproducible generator |

---

## 8. How to Regenerate / Extend

```bash
cd Templates/Content_Layer3_Transportation
py generate_ev_lpv_data.py        # rewrites both CSVs + the data.js blocks (idempotent)
```

To add or change a neighbourhood, edit the `NU_RES` dictionary in `generate_ev_lpv_data.py` (residential building composition per NU) and rerun. The script splices the `EV_V2G_DATA` / `LPV_DATA` blocks into `data.js` by comment marker, so it is safe to run repeatedly.

To switch LPV from placeholder to per-NU values, add a per-NU `site_area` and implement the §6 formula in the generator.

---

## 9. External Data Validation (morphology + publications)

Two external sources were scanned to ground the assumptions in §3–§6:

- `C:\Users\o_iseri\Desktop\idf_reader\outputs\outputs_NUs_key_drivers\neighbourhood_morphology.csv`
- `C:\Users\o_iseri\Desktop\idf_reader\docs_DONE\docs_publications` (journal paper "NU2", appendices, plot specs)

### 9.1 What the morphology CSV authoritatively provides

All 35 NUs are present (plus a bonus `RC-R_Garage` variant). Relevant columns: `site_area_m2`, `total_floor_area_m2`, `footprint_area_m2`, `FAR`, `coverage_ratio`, `n_buildings`, `class_residential`, `archetype_mix`, plus heights/walls/glazing. **There is NO household / dwelling-unit column.**

- **Site area = 21,717 m² for every NU** (uniform). Confirms the "5-acre standardized parcel" — exact value 5.37 acres.
- **Building counts (`class_residential`) match this update's model** — e.g. RC-R=24, RC-D=48, RC-MR2=8, RC-HR2=4. ✅ Validates the residential building composition in `NU_RES`.
- **Households are still a modeling assumption** — the CSV counts residential *buildings*, not *units*. The per-building unit counts (mid-rise=32, high-rise=160, etc.) used for EV demand are not in any scanned source and remain as documented in §3.

### 9.2 Floor areas — adopted from morphology dataset (resolved)

The original `NUS_EV.csv` floor areas (back-solved / scaled) differed substantially from the authoritative morphology `total_floor_area_m2`, especially for high-rises. **These authoritative values have now been adopted** (hardcoded as `MORPH_FLOOR` in the generator and written to `NUS_EV.csv` + `data.js`). Before → after:

| NU | Old floor (m²) | Adopted floor (m²) |
|---|---:|---:|
| RC-R | 5,280 | 7,949 |
| RC-D | 10,560 | 15,899 |
| RC-T | 10,080 | 15,120 |
| RC-ML | 10,320 | 15,509 |
| RC-MR1 | 17,580 | 16,964 |
| RC-MR2 | 25,080 | 18,808 |
| RC-MR3 | 37,620 | 28,212 |
| RC-HR1 | 59,565 | 14,106 |
| RC-HR2 | 94,050 | 9,404 |

**Effect:** EV *demand* values are unchanged (household-driven). Only `totalFloorArea` (displayed) and `netEnergyBalance_kWh_m2` (= balance ÷ floor area) changed — e.g. RC-HR2's per-m² balance went from 0.18 to 1.79 kWh/m²·day, now reflecting the real built-up area. The no-household commercial/industrial NUs now show their actual floor area (e.g. CC-FD1 = 424,254 m²) with 0 EV demand, rather than 0.

### 9.3 Where the EV / LPV assumptions actually come from

The scanned publications (paper "NU2") cover **rooftop and south-façade PV** in detail (200 W/m² flat-roof power density, ground-coverage ratio 0.40, 20% module efficiency, 14% DC-AC loss, 96% inverter) but **do not** contain:

- EV assumptions (penetration, demand, efficiency, V2G) — *not present anywhere in the folder.*
- Landscape-PV (ground-mounted, land-allocation) assumptions — *not present.*
- Household / dwelling-unit counts — *not present.*

The paper attributes both EV integration and landscape-integrated PV to a **prior paper, reference [24]: Hachem-Vermette C., "Designing energy-positive neighborhoods: A modular framework for integrated planning and policy guidance," *Energy Reports* 14 (2025) 4492–4507.** That paper — not in this repo or the scanned folder — is the authoritative source for the EV constants in `calculate_ev_scenarios.py` and the LPV land-allocation method in §6. Retrieve it to verify or revise those assumptions.

---

## 10. Render Verification & Image-Casing Fix

### 10.1 Render verification (all 35 NUs)

The EV (`layer3_ev_v2g_mobility_output.html` + `ev-v2g-breakdown.js`) and LPV (`layer4_lpv_breakdown.html` + `lpv.js`) pages were verified by simulating their exact lookup/populate logic against `data.js` (no headless browser available; node simulation used). Results — **all PASS**:

- All 35 codes resolve in `EV_V2G_DATA`, `LPV_DATA`, and `NEIGHBOURHOODS`; none hit the "No EV data available" alert.
- 0-household NUs (CC/IC/MU-W2) render cleanly as `0` / "Load Balanced - Net Zero" — no null errors.
- The new `"Load Balanced - Net Zero"` status maps to an existing image.
- All 35 NUs are reachable through the layer-1 filter UI; `?neighbourhood=<code>` matches data keys exactly (no `RC1` vs `RC-R` mismatch).

### 10.2 Image-casing fix (cross-platform precaution)

Verification surfaced a latent issue: image paths in code used different letter-casing than the actual files on disk. Harmless on Windows (case-insensitive) but would silently break images on a case-sensitive Linux server (the `onerror` handler hides the card). **28 static references were aligned to the real on-disk filenames**:

| File | Count | Example |
|---|---:|---|
| `js/data.js` | 12 | `…/rc-r.png` → `…/RC-R.png`; `…/Positive.png` → `…/positive.png` |
| `js/ev-v2g-breakdown.js` | 5 | `…/Load Balanced - Net Zero.png` → `…/load balanced - net zero.png` |
| `js/lpv.js` | 2 | `…/LPV.png` → `…/lpv.png` |
| `Templates/scripts/out_data.js` | 9 | neighbourhood images `rc-*.png` → `RC-*.png` |

After the fix, an automated case-insensitive scan reports **0 remaining casing mismatches** and `data.js` loads cleanly (35 NUs / 35 NEIGHBOURHOODS).

### 10.3 Missing/misnamed assets — resolved

Two references pointed at files that did not exist on disk (a naming issue, not casing). Both fixed after confirming the intended assets:

- **Data-center building image:** `BUILDING_IMAGES["Data Center"]` / `["Datacenter"]` pointed at a non-existent `datacenter.png`. Repointed to the real **`large datacenter.png`**. (The archetype-specific keys `"Data Center Large…ITE"` and `"Small Data Center…ITE"` already mapped correctly to `large datacenter.png` / `small data center.png`.) Stakeholder confirmed both data-center images are correct.
- **PV-VGS / Landscape PV image:** `lpv.js` and `sidebar.js` referenced a non-existent `PV-VGS Integrated Modules.png`. A `Content` scan established that **`pv_vgs` is the "Landscape PV" option** — the canonical selection page (`layer4_green_selection.html`) already uses **`lpv.png`** with the label **"Landscape PV"**. "PV-VGS" (PV + Vertical Greening Systems) was an earlier name dropped mid-development. Updated `lpv.js` (`GI_IMAGE_MAP.pv_vgs` → `lpv.png`, label "Landscape PV") and `sidebar.js` (separated image filename from display label; `pv_green_roofs` → lowercase real filename, `pv_vgs` → `lpv.png` / "Landscape PV"). This also fixed a latent casing bug in the sidebar's green-roofs image path.

After these fixes an automated scan reports **0 casing mismatches and 0 missing-asset references** across the runtime JS.

### 10.4 Remaining item (Linux-only, not fixed)

Other **dynamic image refs** built at runtime via interpolation (e.g. `sidebar.js` `Images_Layer2_EnergyDemand/${imgName}.png`, `Images_Layer3_Transportation/${label}.png`) can still mis-case on a case-sensitive server depending on the data value vs disk casing. These work on Windows; a per-folder normalization pass is needed before any case-sensitive (Linux) deployment.
