# Implementation Plan - Navigation Flow Update

This plan outlines the changes required to update the navigation flow from `output_layer1_energy_breakdown.html` through the energy and mobility analysis pages, as requested.

## Goal Description
Redesign the navigation flow to allow direct access to specific analysis pages from `output_layer1_energy_breakdown.html` and streamline the progression through Energy, PV, Land-PV, and Mobility layers.

## Proposed Changes

### Navigation Logic Updates

1.  **`output_layer1_energy_breakdown.html` & `js/output_energy.js`**
    *   **Remove**: The "Proceed to Energy Analysis" button.
    *   **Clean Up**: Removing the "Back to Selection" button was not explicitly requested, but usually, headers act as navigation or there is a specific back button. The user asked to "pass to layer1_energy_breakdown.html by clicking on the row". I will keep the "Back to Selection" button for safety unless asked to remove, but I'll focus on the forward navigation.
    *   **New Interaction**: Add click event listeners to the "Energy Consumption" and "Energy Generation" table cells.
        *   Clicking **"Energy Consumption"** cell -> Navigates to `layer1_energy_breakdown.html`.
        *   Clicking **"Energy Generation"** cell -> Navigates to `layer1_pv_breakdown.html`.
    *   **Styling**: Add CSS to indicate these cells are clickable (cursor pointer, hover effect).

2.  **`layer1_energy_breakdown.html`**
    *   **Left Button**: Change text to "Back to Energy Output", link to `output_layer1_energy_breakdown.html`.
    *   **Right Button**: Change text to "Layer 3: Mobility", link to `ev.html`.

3.  **`layer1_pv_breakdown.html`**
    *   **Left Button**: Change text to "Back to Energy Output", link to `output_layer1_energy_breakdown.html`.
    *   **Right Button**: Change text to "Layer 2: Land-PV generation", link to `llayer1_pv_breakdown.html`.

4.  **`llayer1_pv_breakdown.html`**
    *   **Left Button**: Change text to "Back to PV generation", link to `layer1_pv_breakdown.html`.
    *   **Right Button**: Change text to "Layer 3: Mobility", link to `ev.html`.

5.  **`ev.html`**
    *   **Update**: The right-top button is now labeled "Back to Layer 2: Energy Output" and returns to `output_layer1_energy_breakdown.html`.

### File Modifications

#### [MODIFY] [output_layer1_energy_breakdown.html](file:///Users/orcunkoraliseri/Desktop/Interface/output_layer1_energy_breakdown.html)
- Remove the "Proceed to Energy Analysis" button from the header/nav area.

#### [MODIFY] [js/output_energy.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/output_energy.js)
- Update `createResultRow` to add clickable classes/IDs to the Energy Consumption and Generation cells.
- Add event delegation or specific listeners to handle navigation with `neighbourhood` parameters preserved.

#### [MODIFY] [css/styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)
- Add styles for `.clickable-cell` (e.g., `cursor: pointer`, `transition`, hover effects) to indicate interactivity on the specific table cells.

#### [MODIFY] [layer1_energy_breakdown.html](file:///Users/orcunkoraliseri/Desktop/Interface/layer1_energy_breakdown.html)
- Update header buttons as specified.

#### [MODIFY] [layer1_pv_breakdown.html](file:///Users/orcunkoraliseri/Desktop/Interface/layer1_pv_breakdown.html)
- Update header buttons as specified.

#### [MODIFY] [llayer1_pv_breakdown.html](file:///Users/orcunkoraliseri/Desktop/Interface/llayer1_pv_breakdown.html)
- Update header buttons as specified.

#### [MODIFY] [ev.html](file:///Users/orcunkoraliseri/Desktop/Interface/ev.html) & [js/ev.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/ev.js)
- Update the right-top button to return to "Energy Output".

## Verification Plan

### Automated Browser Verification
- **Scenario**: Validate the full navigation chain.
    1.  Start at `output_layer1_energy_breakdown.html` (with a neighbourhood selected).
    2.  Click **Energy Consumption** cell -> Verify URL is `layer1_energy_breakdown.html` with correct params.
    3.  Click "Layer 3: Mobility" -> Verify URL is `ev.html`.
    4.  Navigate back to `output_layer1_energy_breakdown.html` via the right-top button.
    5.  Click **Energy Generation** cell -> Verify URL is `layer1_pv_breakdown.html`.
    6.  Click "Layer 2: Land-PV generation" -> Verify URL is `llayer1_pv_breakdown.html`.
    7.  Click "Layer 3: Mobility" -> Verify URL is `ev.html`.
    8.  Check all "Back" buttons function as intended.
