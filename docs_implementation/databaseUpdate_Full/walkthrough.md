# Database Expansion Walkthrough

The LMN Tool database has been successfully expanded from the initial 9 RC neighbourhoods to **all 35 mixed-use, commercial, residential, and industrial neighbourhoods**.

## Changes Made

### 1. Data Processing Script
- Created `Templates/scripts/convert_master_csv.py` and `patch_data_js.py` to extract simulation data from `Templates/new/LMN_full_NU_master.csv` and metadata from `Templates/new/Full_NUs_Archetypes.csv`.
- Extracted and mapped the **16 binary-flag scenarios** into the standard 5 levels used by the UI: `DEFAULT`, `EEM1`, `EEM2`, `EEM3`, `EEM4`.
- Reconstructed `CAN_MTL.csv` and `ASHRAE.csv` to keep the offline database pipeline intact.
- **Bug Fix (Building Names & Infographics)**: Updated parsing in `convert_master_csv.py` to split on both `+` and `·` (middle dot) separators, so that no building types are missed. Refined name cleaning to strip multipliers (e.g. `14×`, `21`) and parentheticals. This ensures correct lookup matching in the `BUILDING_IMAGES` dictionary.

### 2. Database `data.js` Updates
- **NEIGHBOURHOODS**: Expanded from 9 to 35 entries. Mapped missing concepts (like MU-HS) to the closest existing typologies (e.g., Suburban Inner / Concept 6). Excluded the `RC-R_Garage` test dummy.
- **ENVELOPE_ENERGY_DATA**: Integrated all energy data blocks under `necb-2017` and `ashrae`. EEM1 was mapped as the High-Performance Envelope scenario.
- **PV_GENERATION_DATA**: Expanded with rooftop PV sizing from the EEM1 configurations.
- **BUILDING_IMAGES**: Added mappings for newly introduced building types (e.g., Outpatient Health Care, Supermarket, Warehouses).
  - **Data Center Consolidation**: Configured all variations of data centers (`DataCenterLargeHighITE`, `DataCenterLargeLowITE`, `SmallDataCenterHighITE`, `SmallDataCenterLowITE`) to map to the correct `Content/Images_Buildings/datacenter.png` infographic.
  - **Synonym Mappings**: Map singular/plural and spelling variations (e.g. `Detached Houses` -> `two-story house.png`, `Mid-Rise Apartment`/`Midrise` -> `midrise apartment.png`) to avoid broken images.

### 3. Layer UI / Downstream Support
- **Layer 1 Selection**: Added the missing `suburban edge` context card to `layer1_NUs_selection.html` to allow users to filter down to the new Industrial and Commercial typologies located on suburban edges.
- **Context Parameter Fallback**: Duplicated `suburban.png` context parameter image to `suburban-edge.png` in the parameter images folder so that it displays correctly in the properties cell on the results page.
- **Null Safety**: Updated `ev-v2g-breakdown.js` and `pv.js` to gracefully hide missing images and show standard missing data alerts, since EV and Heatmap data has not yet been computed for the newly added neighbourhoods.

## Verification
- All 35 NUs are now queryable via the layer 1 interface.
- Infographics under the buildings column display correctly for all residential, mixed-use, commercial, and industrial layouts.
- Data centers map correctly to the datacenter infographic.
- Energy charts in Layer 2 correctly display the new EUI breakdowns for heating, cooling, DHW, equipment, and PV generation.
- PV Generation logic dynamically adjusts between legacy (RC-HR2) and new layouts without breaking.
