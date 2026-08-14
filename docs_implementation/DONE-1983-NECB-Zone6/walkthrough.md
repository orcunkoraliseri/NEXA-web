# Walkthrough &mdash; 1983 Vintage (Quebec NECB Zone 6) Integration

## Overview

The **1983 Vintage (Quebec NECB Zone 6)** simulation dataset has been integrated into the LMN neighbourhood-energy tool. This addition enables users to assess energy performance and retrofit pathways for existing pre-code building stock in Montreal/Quebec across all 35 Neighbourhood Units (NUs).

---

## Summary of Changes

### 1. Data Processing & Master Database
- **Source CSV**: `Templates/1983-Quebec/LMN1983_NU_all_results.csv` (1,120 simulation rows).
- **Target Filtering**: Filtered to `arm == "CAN_MTL_1983"` (560 rows covering 35 NUs × 16 scenario combinations).
- **EEM Ladder Mapping**:
  - `EEM_J_DEFAULT` &rarr; `DEFAULT` (Pre-code baseline)
  - `EEM_J_ENVELOPE` &rarr; `EEM1` (Deep envelope retrofit)
  - `EEM_J_ENV_HVAC` &rarr; `EEM2` (Envelope + Heat pump HVAC)
  - `EEM_J_ENV_HVAC_DHW` &rarr; `EEM3` (Envelope + Heat pump HVAC + HPWH)
  - `EEM_J_ENV_HVAC_DHW_EEM4` &rarr; `EEM4` (Envelope + HVAC + DHW + High-efficiency lighting & appliances)
- **`js/data.js`**:
  - Added `ENVELOPE_ENERGY_DATA["vintage-1983-z6"]` with 35 NUs and 6-component EUI breakdowns (Heating, Cooling, DHW, Lighting, Equipment, Fans & Pumps) and PV generation values.
  - Added `"vintage-1983-z6"` to the `envelope` property array of all 35 neighbourhoods in `NEIGHBOURHOODS`.

### 2. User Interface (Layer 1 Selection Modal)
- **`layer1_NUs_selection.html`**:
  - Added dedicated `"1983 — Quebec Vintage"` button (`#tier-btn-1983`) inside `#envelope-popup`.
  - Layout ordered from left to right: **1983** (gauche), **Standard / NECB 2017** (milieu), **HPENV** (droite).
- **`js/app.js`**:
  - Configured conditional visibility: the "1983" button only appears when the user clicks **NECB Zone 6 (Montréal)**. For all other climate zones, only standard and HPENV options remain visible.
  - Updated `getEnvelopeValue`, `parseEnvelopeValue`, card badge text (`1983`), and available options checks.
  - Updated `envelopeDisplayNames` and `envelopeImageNames`.

### 3. Downstream Layers (Layers 2–4)
- **`js/energy-selection.js` & `js/energy.js`**:
  - Added display name mappings: `'vintage-1983-z6': '1983 Vintage — NECB Zone 6 (Montréal)'`.
  - Maintained default baseline behavior for vintage envelopes without breaking heat pump and appliance retrofit calculations.

### 4. Technical Documentation & Validation Report
- **PDF Asset**: Copied `Templates/1983-Quebec/LMN1983_NU_validation_all35.pdf` to `Content/References & Methodology/Reports/LMN1983_NU_validation_all35.pdf`.
- **`documentation.html`**:
  - Added **Section L: 1983 Vintage Envelope (Quebec NECB Zone 6)** detailing purpose, pre-code envelope parameters, simulation campaign details, and EUI comparisons.
  - Added Table of Contents link and updated subsequent section letterings.
  - Added direct link to the 35-NU validation report PDF in the Detailed Reports section.

---

## Verification & Test Results

1. **JavaScript Syntax & Compilation**:
   - `node -c js/data.js js/app.js js/energy.js js/energy-selection.js`: Passed with **0 errors**.
2. **Data Consistency**:
   - 35 / 35 Neighbourhood Units loaded into `ENVELOPE_ENERGY_DATA["vintage-1983-z6"]`.
   - 35 / 35 Neighbourhood entries updated in `NEIGHBOURHOODS`.
   - Sample EUI verification (`CC-B`):
     - `DEFAULT` total EUI = **191.4 kWh/m²** (Heating: 64.3, Cooling: 9.0, DHW: 18.5, Lighting: 40.9, Equip: 33.1, Fans: 11.1)
     - `EEM4` total EUI = **80.9 kWh/m²** (Heating: 8.8, Cooling: 6.2, DHW: 2.6, Lighting: 18.6, Equip: 22.0, Fans: 8.3)
3. **Popup Interactivity**:
   - Zone 6 (Montréal) click &rarr; Displays Standard, HPENV, and 1983 buttons.
   - Other zones (Zone 4, 5, 7A, 7B, 8, ASHRAE) &rarr; Displays only Standard and HPENV buttons.
