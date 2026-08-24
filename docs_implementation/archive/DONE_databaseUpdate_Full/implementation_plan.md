# Expand LMN Tool Database to All 34 Neighbourhoods

Expand the LMN tool from **9 RC-only** neighbourhoods to **all 34 neighbourhood types** (RC, RS, MU, CC, IC) using the new simulation data in `LMN_full_NU_master.csv` and metadata in `Full_NUs_Archetypes.csv`. The `RC-R_Garage` testing neighbourhood will be excluded.

## Proposed Changes

### Component 1: Template CSV Files

#### [MODIFY] [Templates/](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates)
- Replace [Master_database.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Master_database.csv) with the new master data (or copy from `Templates/new/LMN_full_NU_master.csv`)
- Replace [NU_Archetypes.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/NU_Archetypes.csv) with full archetypes data (from `Templates/new/Full_NUs_Archetypes.csv`)
- Update [ASHRAE.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/ASHRAE.csv) and [CAN_MTL.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/CAN_MTL.csv) with data for all 34 NUs (extracted from new master)
- Update [Interface_Connections.csv](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/Interface_Connections.csv) to include all 34 NUs

---

### Component 2: NEIGHBOURHOODS Array in data.js (Layer 0/1 Selection)

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) — `NEIGHBOURHOODS` array (lines 24–167)

Add **25 new neighbourhood entries** to the `NEIGHBOURHOODS` array (excluding RC-R_Garage). Each entry needs:
- `code`: NU code from archetype CSV (e.g., "RS-I1", "MU-C1", "CC-B")
- `conceptId`: mapped from the "Development Typologies" column. NUs with missing/new concepts (like MU-HS, MU-HC) will be mapped to "Suburban Inner" or the closest matching existing concept.
- `usage`: derived from NUs Type — `"residential"` (RC/RS), `"mixed-use"` (MU), `"commercial"` (CC), `"industrial"` (IC)
- `context`: derived from Location column
- `density`: derived from Density column
- `layout`: derived from the NU type and location
- `envelope`: same as existing NUs (`necb-2017`, `ashrae`, `high-performance-necb`, `high-performance-ashrae`)
- `content`: from "Building Content" column
- `image`: path to the corresponding image (with correct casing)
- `buildings`: parsed from the "Building Content" column

**Image path handling:** New NU images are UPPERCASE (e.g., `MU-C1.png`), old RC images are lowercase (e.g., `rc-r.png`).
```javascript
// New NUs use UPPERCASE filenames
{ code: "MU-C1", image: "Content/Images_Neighbourhoods/MU-C1.png", ... }
// Existing RC NUs keep lowercase filenames
{ code: "RC-R",  image: "Content/Images_Neighbourhoods/rc-r.png", ... }
```

---

### Component 3: ENVELOPE_ENERGY_DATA in data.js (Layer 2 Energy)

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) — `ENVELOPE_ENERGY_DATA` (lines 238–378+)

Add all 25 new NUs to the `ENVELOPE_ENERGY_DATA` object under both `"necb-2017"` (CAN_MTL) and `"ashrae"` (US_ASHRAE) keys. Also add high-performance envelope variants using the EEM1 data.

**EEM Scenario Mapping:** The 16 scenarios from the new master CSV will be mapped to the 5 legacy levels:
| Current Level | New scenario_tag |
|---|---|
| DEFAULT | `EEM_J_DEFAULT` |
| EEM1 | `EEM_J_ENVELOPE` |
| EEM2 | `EEM_J_ENV_HVAC` |
| EEM3 | `EEM_J_ENV_HVAC_DHW` |
| EEM4 | `EEM_J_ENV_HVAC_DHW_EEM4` |

*IAL levels will be skipped or kept empty if not provided in the new master.*

**Data extraction approach:** Write a script to parse `LMN_full_NU_master.csv` and map the values to the EEM levels.

---

### Component 4: PV_GENERATION_DATA in data.js

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) — `PV_GENERATION_DATA` (lines 200–210)

Add entries for all new NUs. The PV generation values will be extracted from the `EEM_J_ENVELOPE` rows (which correspond to high-performance variations with PV enabled) in the new master CSV.

---

### Component 5: BUILDING_IMAGES in data.js

#### [MODIFY] [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) — `BUILDING_IMAGES` (lines 170–197)

Add image mappings for new building types that appear in the new NUs.
> [!NOTE]
> Some new building types don't have corresponding images yet. For those, the mapping key will be added but fall back to a placeholder.

---

### Component 6: Filter System Update (Layer 0/1 Selection UI)

#### [MODIFY] [layer1_NUs_selection.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html)

Add new filter card options for the expanded categories:
- **Usage cards**: Add `mixed-use`, `commercial`, `industrial`
- **Context cards**: Add `suburban-edge`
- **Density cards**: Ensure all density levels are represented

---

### Component 7: Downstream Layers Compatibility

#### [MODIFY] [ev.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/ev.js) + [ev-v2g-breakdown.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/ev-v2g-breakdown.js)
- Handle missing `EV_V2G_DATA` entries — show "No EV data available" message for NUs without EV data.

#### [MODIFY] [lpv.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/lpv.js)
- Handle missing `LPV_DATA` columns — show "No LPV data available" message. (LPV generation script integration will be handled if provided/applicable).

#### [MODIFY] [pv.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/pv.js) & [heatmap-data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/heatmap-data.js)
- Heatmap data will be skipped for the new NUs. Add checks to not break the PV page if `HOURLY_HEATMAP_DATA` is missing for a neighbourhood.

---

### Component 8: Data Conversion Script

#### [NEW] [Templates/scripts/convert_master_csv.py](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/Templates/scripts/convert_master_csv.py)

A Python script to parse `LMN_full_NU_master.csv` and generate the JavaScript data structures for `data.js`. This script will:
1. Read the CSV and group rows by `building_id` and `standard`
2. Map `scenario_tag` to EEM levels (DEFAULT, EEM1–EEM4)
3. Output the `ENVELOPE_ENERGY_DATA` entries as JavaScript
4. Output the `PV_GENERATION_DATA` entries
5. Parse `Full_NUs_Archetypes.csv` to generate `NEIGHBOURHOODS` array entries

---

## Execution Summary

| Step | Files | Description |
|---|---|---|
| 1 | `convert_master_csv.py` | Write and run the conversion script |
| 2 | `data.js` — NEIGHBOURHOODS | Add 25 new NU entries with metadata |
| 3 | `data.js` — ENVELOPE_ENERGY_DATA | Add energy data for all new NUs under both standards |
| 4 | `data.js` — PV_GENERATION_DATA | Add PV data for new NUs |
| 5 | `data.js` — BUILDING_IMAGES | Add new building type mappings |
| 6 | `layer1_NUs_selection.html` | Add filter cards for new categories |
| 7 | Downstream JS files | Add null-checks for missing data |
| 8 | Template CSVs | Copy/update source CSVs |

---

## Verification Plan

### Automated Tests
- Run the conversion script and verify output matches expected format
- Validate all 34 NU codes appear in both `NEIGHBOURHOODS` and `ENVELOPE_ENERGY_DATA`
- Check all image paths resolve to existing files

### Manual Verification
- Open `layer1_NUs_selection.html` in browser, verify new filter categories appear
- Select each new NU type and verify the full flow through Layer 2 (Energy), Layer 3 (EV/V2G), Layer 4 (Green)
- Confirm no JavaScript errors in console for any NU selection
- Verify images display correctly for all 34 NUs
