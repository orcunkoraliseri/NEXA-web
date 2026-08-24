# Update Energy Generation Parameters Implementation Plan

## Goal Description
Update the "Energy generation" parameters on the `layer1_energy_selection.html` page to include new elements (PV, PV-T, STC, Biomass) organized into a specific 4-row layout.

## Proposed Changes

### Documentation
#### [MODIFY] [03_energy_selection_page.md](file:///Users/orcunkoraliseri/Desktop/Interface/docs/03_energy_selection_page.md)
- Update the "Energy Generation Parameters" section to reflect the new 4-row structure and new options.
- Update image references.

### Interface
#### [MODIFY] [layer1_energy_selection.html](file:///Users/orcunkoraliseri/Desktop/Interface/layer1_energy_selection.html)
- Replace the existing "Energy Generation" card container.
- Implement a 4-row structure:
    - **Row 1**: PV on roof, PV on facade
    - **Row 2**: PV-T on roof, PV-T on facade
    - **Row 3**: STC on roof, STC on facade
    - **Row 4**: Biomass, Wind, Geothermal
- Update image paths to point to `Content/Images_Layer1_EnergyGeneration/...`.
- Add specific `data-value` attributes for the new types (e.g., `pv_roof`, `pv_facade`).

#### [MODIFY] [css/styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)
- Add styles for `.generation-container` and `.generation-row` to support the row-based layout.
- Ensure rows are centered and have appropriate spacing (`gap`).

## Verification Plan

### Manual Verification
1.  **Open the Page**: Open `layer1_energy_selection.html` in the browser.
2.  **Visual Check**:
    - Verify that "Energy Generation" section now has 4 distinct rows.
    - **Row 1**: Check for "PV on Roof" and "PV on Facade" images.
    - **Row 2**: Check for "PV-T on Roof" and "PV-T on Facade" images.
    - **Row 3**: Check for "STC on Roof" and "STC on Facade" images.
    - **Row 4**: Check for "Biomass", "Wind", and "Geothermal" images.
    - Ensure images load correctly.
3.  **Interaction Check**:
    - Click on multiple cards to ensure selection highlighting works (pink border/background).
    - Verify that the layout remains stable (rows don't collapse weirdly) when resizing.
