# Walkthrough - LMN-tool Database Restructuring and Envelope Addition

We successfully executed the approved implementation plan to resolve data inconsistencies across the CSV templates, restructure the energy database into pivoted, easy-to-read CSV files, and add a fourth envelope option in the frontend interface.

## Summary of Changes

### 1. Database Restructuring & Consistency
* **Restructured Energy CSVs:**
  * Moved and converted `Templates/archive/CAN_MTL.csv` and `Templates/archive/ASHRAE.csv` into clean, pivoted column-oriented files under `Templates/CAN_MTL.csv` and `Templates/ASHRAE.csv`. This reduced the files from 73 rows (per-metric rows) to 54 rows (each row representing a single self-contained EEM level with all metrics as columns).
  * Archived the complex, redundant, and error-prone `Templates/LMN_Energy_Database.csv` to `Templates/archive/LMN_Energy_Database_archived.csv`.
* **Cleaned Up PV Generation:**
  * Modified `Templates/PV_generation.csv` to remove orphaned `CAN_CLG` rows, rename the column `Standard` to `Envelope`, and rename value identifiers to `NECB-2017` and `ASHRAE`.
  * Restored accurate, non-zero IAL (Initial/Baseline) PV values from the archives so that they are correctly represented.
* **Expanded Parameters:**
  * Updated `Templates/Welcome_Page_Parameters.csv` to list all 4 envelope options.
  * Expanded `Templates/Interface_Connections.csv` from 9 rows to 36 rows to map all 9 Neighborhood Units (NUs) against all 4 envelope options.

### 2. Frontend & JS Upgrades
* **UI Controls Updated:**
  * Modified [layer1_NUs_selection.html](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html) to include the new 4th envelope option button card: **High-Performance (ASHRAE)**, while renaming the existing button to **High-Performance (NECB)**.
* **Data Integration in JS:**
  * Updated [data.js](file:///c:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js) by expanding the `envelope` property array in the `NEIGHBOURHOODS` array to include all 4 options: `["necb-2017", "ashrae", "high-performance-necb", "high-performance-ashrae"]`.
  * Injected accurate `high-performance-necb` and `high-performance-ashrae` datasets into the `ENVELOPE_ENERGY_DATA` block using the correct pivoted metrics.
  * Cleaned up `getEnergyData()` to remove the legacy dynamic envelope aliasing logic, now that both high-performance options have their own fully realized data entries.

---

## Verification & Status

### Stale References Check
* Grepped the codebase and confirmed that all stale references (e.g., `CAN_CLG`, old `high-performance construction` string keys) have been safely replaced or removed.

### Verification Matrix
* Verified that the UI works seamlessly with all 4 envelope combinations.
* Verified that energy data changes dynamically as expected on Layer 2 when toggling between **NECB 2017**, **ASHRAE**, **High-Performance (NECB)**, and **High-Performance (ASHRAE)**.
