# LMN-tool Implementation Tasks

## CSV Files
- [x] Create `Templates/CAN_MTL.csv` — pivoted format from archive
- [x] Create `Templates/ASHRAE.csv` — pivoted format from archive
- [x] Delete `Templates/LMN_Energy_Database.csv` (Moved to archive/LMN_Energy_Database_archived.csv)
- [x] Update `Templates/PV_generation.csv` — remove CAN_CLG, rename Standard→Envelope, rename values
- [x] Update `Templates/Welcome_Page_Parameters.csv` — Envelope row → 4 options
- [x] Update `Templates/Interface_Connections.csv` — 9 rows → 36 rows (9 NUs × 4 envelopes)

## UI
- [x] Update `layer1_NUs_selection.html` — add 4th envelope button, rename existing HP button

## JavaScript
- [x] Update `data.js` — NEIGHBOURHOODS envelope arrays (3 → 4 values)
- [x] Update `data.js` — Fix IAL PV values (restore archive non-zero values)
- [x] Update `data.js` — Add `high-performance-ashrae` ENVELOPE_ENERGY_DATA block
- [x] Update `data.js` — Replace `high-performance construction` alias with proper `high-performance-necb` block
- [x] Update `data.js` — Simplify `getEnergyData()` (remove alias logic)

## Verification
- [x] Grep for stale references (CAN_CLG, CAN_MTL, US_ASHRAE, old HP key)
- [x] Spot-check JS energy values against new CSVs
