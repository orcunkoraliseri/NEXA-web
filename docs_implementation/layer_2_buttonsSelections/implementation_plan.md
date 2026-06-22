# Fix Energy Selection → Breakdown Column Mapping & EUI Duplications

## Problem Analysis

After investigating the database and JS logic, here's what was found:

### Database Structure (per NU like RC-R, per envelope)

Each neighbourhood unit has **6 data columns**:

| Column | Meaning | Description |
|--------|---------|-------------|
| `IAL` | **Ideal Air Load** (Thermal Load) | Raw heating/cooling loads without HVAC system |
| `DEFAULT` | **Baseline** | Standard envelope, no HP, conventional DHW & equipment |
| `EEM1` | **HP Envelope** | High-performance envelope only (no heat pump) |
| `EEM2` | **Heat Pump (COP 4)** | High-perf envelope + heat pump |
| `EEM3` | **Heat Pump + HP-DHW** | EEM2 + heat pump DHW |
| `EEM4` | **Heat Pump + HP-DHW + Efficient Appliances** | EEM3 + efficient appliances/equipment |

### EUI Duplication Bug

In the first implementation, we mapped any user selection combinations to one of the 5 hardcoded EEM levels using a "best fit" heuristic:
- Selecting **Heat Pump + DHW** mapped to `EEM3` (total = 81.0 for RC-R under Standard NECB).
- Selecting **DHW only** (without Heat Pump) also mapped to `EEM3` (total = 81.0).

This resulted in the exact same EUI value (81.0) and breakdown (which included space-heating heat pump savings) even though the user did not select a space-heating heat pump.

### Session Storage Keys Mismatch

`layer2_energy_selection.html` saves user selections under `load`, `demand`, and `generation` arrays inside the `energySelections` sessionStorage object.
However, `output_energy.js` and the sidebar's initialization code in `sidebar.js` were attempting to read `consumption` and `generation`, leading to:
1. JavaScript TypeErrors/crashes when viewing results.
2. Missing icons/labels for selections (e.g. DHW).

---

## Proposed Changes

### 1. Dynamic EEM Savings Calculator

#### [MODIFY] [energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/energy.js)

Instead of choosing a single column, we dynamically calculate the energy breakdown:
1. **Identify the reference envelope**: If the user selected a high-performance envelope, we resolve to the standard envelope (e.g. `necb-2017` or `ashrae`) and set the base level to `EEM1`. If they selected standard, we set the base level to `DEFAULT`.
2. **Calculate individual savings**:
   - `DHW_savings` = `EEM2` - `EEM3` (individual end-use differences)
   - `App_savings` = `EEM3` - `EEM4` (individual end-use differences)
3. **Determine starting dataset**:
   - If Heat Pump is selected, we start from `EEM2`, `EEM3`, or `EEM4` (depending on if DHW/Appliances are also selected).
   - If Heat Pump is NOT selected, we start from the base level (`DEFAULT` or `EEM1`).
4. **Apply savings**:
   - If DHW is selected but Heat Pump is OFF, subtract `DHW_savings` from the starting dataset.
   - If Appliances are selected but we didn't start from `EEM4`, subtract `App_savings` from the starting dataset.
5. **Recalculate total**: Sum the final end-use values to display the correct total EUI and update the breakdown treemap.

This allows all 8 combinations of Heat Pump, DHW, and Appliances to produce distinct, logically correct energy results:
- None: 137.8
- DHW only: 125.6 (retains conventional heating, saves DHW)
- Appliances only: 117.8 (retains conventional heating & DHW, saves appliances)
- DHW + Appliances: 105.6
- Heat Pump only: 93.2
- Heat Pump + DHW: 81.0
- Heat Pump + Appliances: 73.2
- Heat Pump + DHW + Appliances: 61.0

### 2. Session Storage Key Alignment & Sidebar Mapping

#### [MODIFY] [output_energy.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/output_energy.js)
- Update sessionStorage parser fallback object keys to match `load` and `demand` instead of `consumption`.
- Update the consumption cell renderer to display both active `load` and `demand` parameters with their correct labels and icons.

#### [MODIFY] [sidebar.js](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/sidebar.js)
- Update sessionStorage parser fallback object keys to match `load` and `demand`.
- Add `dhw` image/label mappings inside `demandLabels` and `demandImages` so that DHW selections show up in the sidebar.

---

## Verification Plan

### Manual Verification
1. Open `layer2_energy_selection.html?neighbourhood=RC-R&envelope=necb-2017`
2. Select **DHW** only and click **View Energy Performance**:
   - Verify EUI total is **124.9 kWh/m²·yr** (or ~125).
   - Verify the treemap contains conventional space heating (53.4 kWh/m²·yr) and efficient DHW (7.0 kWh/m²·yr).
3. Go back and select **Heat Pump + DHW**:
   - Verify EUI total is **80.2 kWh/m²·yr** (or ~81.0).
   - Verify the treemap contains efficient space heating (8.9 kWh/m²·yr) and efficient DHW (6.6 kWh/m²·yr).
4. Verify the sidebar and Layer 2 output table load correctly and display the selected cards (including DHW) without any JavaScript console errors.
