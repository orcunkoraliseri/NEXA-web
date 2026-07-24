# Walkthrough: Database Update & Regional Climate Zone Envelope Buttons

We have updated the database with national climate zone simulations from `Templates/2026-07-21`, integrated clean regional climate zone buttons with representative Canadian city names under **Envelope** in `layer1_NUs_selection.html`, and fixed the High-Performance envelope lookup bug in `energy.js`.

## Changes Made

### 1. Database & Conversion Pipeline
- **[convert_master_csv.py](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/Templates/scripts/convert_master_csv.py)**: Updated script to parse national climate zones Z4 to Z8 (`CAN_Z4`, `CAN_Z5`, `CAN_Z6`, `CAN_Z7A`, `CAN_Z7B`, `CAN_Z8`) alongside `US_ASHRAE` from `Templates/2026-07-21/LMN_national_NU_master.csv` and `LMN_national_PV_generation.csv`. Consolidated `CAN_MTL` into `CAN_Z6` and archived `Templates/CAN_MTL.csv` in `Templates/archive/`.
- **[js/data.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js)**: Re-generated and patched with 14 envelope keys. All 35 NUs now possess 100% complete dataset coverage across all climate zones.

### 2. User Interface & Layout (Layer 1 Selection & Results)
- **[layer1_NUs_selection.html](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html)**: Configured 14 interactive buttons (7 Standard + 7 High Performance) under **Envelope**, enriched with representative city names:
  - **Standard Construction**: `Standard (ASHRAE)`, `NECB Zone 4 (Windsor)`, `NECB Zone 5 (Toronto / Ottawa)`, `NECB Zone 6 (Montréal)`, `NECB Zone 7A (Calgary)`, `NECB Zone 7B (Whitehorse)`, `NECB Zone 8 (Yellowknife)`.
  - **High Performance Construction**: `High Perf. (ASHRAE)`, `High Perf. Zone 4 (Windsor)`, `High Perf. Zone 5 (Toronto / Ottawa)`, `High Perf. Zone 6 (Montréal)`, `High Perf. Zone 7A (Calgary)`, `High Perf. Zone 7B (Whitehorse)`, `High Perf. Zone 8 (Yellowknife)`.
- **[css/styles.css](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/css/styles.css)**: Applied a clean **2-row × 7-column CSS Grid system** (`grid-template-columns: repeat(7, 1fr)`) for `.envelope-cards`. Row 1 renders all 7 Standard construction cards and Row 2 renders all 7 High Performance construction cards.
- **[js/app.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js)**: Updated `envelopeImageNames` and `envelopeDisplayNames` to map all regional climate zone keys to proper labels with representative city names.

### 3. Energy Treemap & Lookup Bug Fix
- **[js/energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js)**:
  - **Identified Bug**: `renderTreemap()` stripped `"high-performance-"` from regional envelope keys (converting `"high-performance-z6"` into `"z6"`). Since `"z6"` is not a valid key in `ENVELOPE_ENERGY_DATA` (the valid keys are `"necb-z6"` and `"high-performance-z6"`), `getEnergyData("z6", ...)` returned `null`, producing an empty Treemap graphic for all 6 new High-Performance regional envelopes.
  - **Applied Resolution**: Updated `energy.js` so that High-Performance zonal envelopes (`high-performance-z4` through `high-performance-z8`) preserve their full key (`refEnvelope = envelope`), querying `ENVELOPE_ENERGY_DATA` directly without prefix stripping.

## Verification Results

- **Automated Validation**: Executed `py Templates/scripts/test_data_flow.py`. Verified 35 NUs × 14 envelope keys (490 combinations) with **0 NULL lookups** for High-Performance envelopes.
- **Data Integrity**: Verified total site EUI and 6 end-use breakdown metrics (Heating, Cooling, DHW, Lighting, Equipment, Fans & Pumps) for all climate zones and High-Performance variants.
- **Grid Layout**: Verified 2 rows × 7 columns grid layout structure in CSS.
