# Implementation Plan: Update Database with Context Variations (2026-07-21) & Add Regional Envelope Buttons

Integration of the new simulation data from `Templates/2026-07-21` (national NECB climate zones Z4 to Z8 + Montreal baselines) into the LMN tool database (`js/data.js`), and addition of the new regional climate zone buttons under **Envelope** in `layer1_NUs_selection.html`.

## User Review Required

> [!IMPORTANT]
> **New Climate Zone Envelopes Added**:
> 6 new regional climate zones have been simulated (`CAN_Z4`, `CAN_Z5`, `CAN_Z6`, `CAN_Z7A`, `CAN_Z7B`, `CAN_Z8`). Buttons for both **Standard Construction** and **High Performance Construction** for each of these climate zones (plus Montreal NECB and ASHRAE baselines) will be exposed on Layer 1.

> [!NOTE]
> All 35 Neighbourhood Units (NUs) have complete simulation data for all 6 new climate zones in the master CSV.

## Open Questions

None at present. The dataset structure in `Templates/2026-07-21/LMN_national_NU_master.csv` and `Templates/2026-07-21/LMN_national_PV_generation.csv` is fully validated.

---

## Proposed Changes

### Database & Conversion Scripts

#### [MODIFY] [convert_master_csv.py](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/Templates/scripts/convert_master_csv.py)
- Update input paths to target `Templates/2026-07-21/LMN_national_NU_master.csv` and `Templates/2026-07-21/LMN_national_PV_generation.csv`.
- Parse all 7 standard zones: `CAN_Z4` (`necb-z4`), `CAN_Z5` (`necb-z5`), `CAN_Z6` (`necb-z6`), `CAN_Z7A` (`necb-z7a`), `CAN_Z7B` (`necb-z7b`), `CAN_Z8` (`necb-z8`), plus `ASHRAE`. (Consolidated `CAN_MTL` into `CAN_Z6`).
- Generate high-performance variants (`high-performance-z4`, `high-performance-z5`, etc.) using `EEM1` (`EEM_J_ENVELOPE`) baseline data.
- Update `ENVELOPE_ENERGY_DATA`, `PV_GENERATION_DATA`, and `NEIGHBOURHOODS` array in `js/data.js`.

#### [MODIFY] [js/data.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js)
- Update `NEIGHBOURHOODS` envelope arrays to include all regional envelope keys (`necb-z4` through `necb-z8`, `ashrae`, and their corresponding `high-performance-*` variants).
- Update `ENVELOPE_ENERGY_DATA` with total EUI, breakdown metrics (Heating, Cooling, DHW, Lighting, Equipment, Fans & Pumps), and PV generation for all 35 NUs across all 14 envelope standards/zones.
- Update `PV_GENERATION_DATA` with region-specific PV generation parameters.

---

### Layer 1 UI & Layout

#### [MODIFY] [layer1_NUs_selection.html](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html)
- Add new parameter buttons under the **Envelope** section organized in a **2-row × 7-column CSS Grid**:
  - **Standard Construction (Row 1)**: `Standard (ASHRAE)`, `NECB Zone 4 (Windsor)`, `NECB Zone 5 (Toronto/Ottawa)`, `NECB Zone 6 (Montréal)`, `NECB Zone 7A (Calgary)`, `NECB Zone 7B (Whitehorse)`, `NECB Zone 8 (Yellowknife)`.
  - **High Performance Construction (Row 2)**: `High Perf. (ASHRAE)`, `High Perf. Zone 4 (Windsor)`, `High Perf. Zone 5 (Toronto/Ottawa)`, `High Perf. Zone 6 (Montréal)`, `High Perf. Zone 7A (Calgary)`, `High Perf. Zone 7B (Whitehorse)`, `High Perf. Zone 8 (Yellowknife)`.

#### [MODIFY] [css/styles.css](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/css/styles.css)
- Apply `display: grid; grid-template-columns: repeat(7, 1fr);` to `.envelope-cards` for clean alignment.

#### [MODIFY] [js/app.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js)
- Update `envelopeImageNames` and `envelopeDisplayNames` lookups in `createResultRow()` to map each new envelope key to its thumbnail image and human-readable label with city names.

---

### Layer 2 Visualization & Bug Fix

#### [MODIFY] [js/energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js)
- **Bug Fix — High Performance Envelope Lookup**:
  - **Issue**: `renderTreemap()` stripped the `"high-performance-"` prefix automatically (e.g. converting `"high-performance-z6"` into `"z6"`). Because `"z6"` is not a valid key in `ENVELOPE_ENERGY_DATA` (the valid keys are `"necb-z6"` and `"high-performance-z6"`), `getEnergyData("z6", ...)` returned `null`, producing an empty Treemap for all 6 new regional high-performance envelopes.
  - **Fix**: Updated envelope reference resolution so that zonal High-Performance envelopes (`high-performance-z4` through `high-performance-z8`) preserve their full key (`refEnvelope = envelope`), querying `ENVELOPE_ENERGY_DATA` directly without stripping the prefix.

---

## Verification Plan

### Automated Tests
- Run `convert_master_csv.py` to regenerate `js/data.js` and export individual zone CSV files in `Templates/`.
- Execute `py Templates/scripts/test_data_flow.py` to verify all 490 combinations (35 NUs × 14 envelope keys) and confirm 0 NULL lookups for High-Performance envelopes.

### Manual Verification
- Open `layer1_NUs_selection.html` in browser, select High Performance regional envelopes (e.g. `High Perf. Zone 6 (Montréal)`), proceed to Layer 2 Energy Breakdown, and verify that the Treemap renders properly with correct EUI totals and 6-category breakdown.
