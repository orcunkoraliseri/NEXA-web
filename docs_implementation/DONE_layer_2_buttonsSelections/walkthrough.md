# Walkthrough: Energy Selection & EUI Calculation Fixes

## Changes Made

### 1. [energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js) — Dynamic EEM Savings Calculator
Replaced the static column mapping with a dynamic EEM savings calculator:
- **Reference Redirection**: Automatically resolves high-performance envelope variants (e.g., `high-performance-necb` or `high-performance-ashrae`) to their standard reference counterparts (`necb-2017` or `ashrae`) and maps the base level to `EEM1`. Standard envelopes map base level to `DEFAULT`.
- **Savings Isolation**: Dynamically computes individual end-use savings:
  - `DHW_savings` = `EEM2` - `EEM3` (space heating is kept conventional, water heating is upgraded)
  - `App_savings` = `EEM3` - `EEM4` (appliances are upgraded)
- **Starting Points**: Starts from `EEM2`/`EEM3`/`EEM4` if a space-heating Heat Pump is selected, or from the base level (`DEFAULT`/`EEM1`) if Heat Pump is OFF.
- **Dynamic Application**: Subtracts `DHW_savings` and/or `App_savings` if they are selected but not built into the starting dataset.
- **Dynamic Totals**: Recalculates the total EUI as the sum of the final breakdown.

This resolves the issue where "DHW only" and "Heat Pump + DHW" produced the same result (81.0 kWh/m²·yr). Now, they produce distinct, correct values:
- **DHW only** → **124.9 kWh/m²·yr** (retains conventional heating, efficient DHW)
- **Heat Pump + DHW** → **80.2 kWh/m²·yr** (efficient heating, efficient DHW)

### 2. [output_energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/output_energy.js) — Session Storage Alignment
- Updated the sessionStorage parsing fallback from `consumption` to `load` and `demand`.
- Fixed the table cell renderer to display both `load` and `demand` selections under the "Energy Consumption" column, utilizing the correct image directories (`Images_Layer2_ThermalLoad` and `Images_Layer2_EnergyDemand`).

### 3. [sidebar.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/sidebar.js) — Sidebar & Key Alignment
- Updated sessionStorage parsing fallback to support `load` and `demand` fields.
- Added label and image mappings for `dhw` inside `demandLabels` and `demandImages` so that DHW selections render correctly on the sidebar.

---

## What Was Tested & Verified

### 1. Distinct EUI Totals (Standard NECB, RC-R)
- **None**: **137.0 kWh/m²·yr** (Baseline)
- **DHW only**: **124.9 kWh/m²·yr** (Heating = 53.4, DHW = 7.0)
- **Appliances only**: **117.0 kWh/m²·yr** (Heating = 52.4, Equipment = 28.3)
- **Heat Pump only**: **92.3 kWh/m²·yr** (Heating = 6.2, DHW = 21.7)
- **Heat Pump + DHW**: **80.2 kWh/m²·yr** (Heating = 8.9, DHW = 6.6)
- **Heat Pump + DHW + Appliances**: **60.2 kWh/m²·yr** (Heating = 10.6, DHW = 6.6, Equipment = 28.3)

### 2. Distinct EUI Totals (High-Performance NECB, RC-R)
- **None**: **106.8 kWh/m²·yr** (High-Performance Envelope baseline)
- **DHW only**: **94.7 kWh/m²·yr** (Heating = 23.4, DHW = 6.6)
- **Heat Pump + DHW**: **80.2 kWh/m²·yr** (Heating = 8.9, DHW = 6.6)

### 3. Navigation & Sidebar
- Navigated through Selection → Breakdown → Outputs and verified the active selections (including DHW) display correctly in both the sidebar and the output table.
- Verified that no console crashes or JavaScript TypeErrors occur.
