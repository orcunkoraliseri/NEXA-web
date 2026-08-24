# Output Page Navigation Update Implementation Plan

## Goal Description
Update the `layer0_NUs_selection.html` page to replace the direct click-to-navigate behavior with a selection-based flow. Add a "Layer 2: Energy" button to the top-right, similar to the "Layer 2: PV generation" button in other pages, which will handle the navigation to `layer1_energy_selection.html` for the selected neighbourhood.

## Proposed Changes

### Documentation
#### [MODIFY] [02_output_page.md](file:///Users/orcunkoraliseri/Desktop/Interface/docs/02_output_page.md)
- Update "User Interaction Flow" to describe the new row selection and "Layer 2: Energy" button navigation.

### Interface
#### [MODIFY] [layer0_NUs_selection.html](file:///Users/orcunkoraliseri/Desktop/Interface/layer0_NUs_selection.html)
- Wrap the existing "Back to Parameters" button in a `<div class="nav-buttons">`.
- Add a new "Layer 2: Energy" button with class `next-button` inside the `nav-buttons` container.
- Set the new button to `disabled` by default.

#### [MODIFY] [css/styles.css](file:///Users/orcunkoraliseri/Desktop/Interface/css/styles.css)
- Add a `.selected` style for table rows (`tr.selected`) to visually indicate user selection (e.g., background highlight).

#### [MODIFY] [js/app.js](file:///Users/orcunkoraliseri/Desktop/Interface/js/app.js)
- Implement `selectedNeighbourhoodCode` state.
- Update `createResultRow()` to:
    - Remove the click event listener from `neighbourhoodCell` that causes immediate navigation.
    - Add a click event listener to the table row (`tr`) to handle selection:
        - Highlight the clicked row (add `.selected` class, remove from others).
        - Update `selectedNeighbourhoodCode`.
        - Enable the "Layer 2: Energy" button.
- Add an event listener to the new "Layer 2: Energy" button to navigate to `layer1_energy_selection.html?neighbourhood=...` using the selected code.

## Verification Plan

### Manual Verification
1.  **Open Output Page**: Navigate to `layer0_NUs_selection.html`.
2.  **Visual Check**:
    - Verify "Layer 2: Energy" button appears in the top-right.
    - Verify it is initially disabled (opacity/cursor).
3.  **Interaction Check**:
    - Click on a neighbourhood row.
    - Verify the row is highlighted.
    - Verify the "Layer 2: Energy" button becomes enabled.
    - Click another row to verify selection moves.
    - Click the "Layer 2: Energy" button.
    - Verify it navigates to `layer1_energy_selection.html` with the correct `neighbourhood` URL parameter.
    - Click the image in the neighbourhood cell to ensure it *does not* navigate immediately (or does it select? It should just select).
