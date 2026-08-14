/**
 * Mobility Selection Page
 * Handles parameter selection for mobility and transportation
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

// Current selection state
const mobilitySelections = {
    transportation: [],
    mobility: []
};

/**
 * STAGE-06 task 6.1, CHV Stage 6 item 1. V2G is a child of EV.
 *
 * Before this, every transportation card was an independent toggle, so V2G
 * could be chosen on its own. The results page then resolved the scenario as
 * "EV and V2G" or else "EV only", which meant a V2G-only selection silently
 * produced the EV-only result: the user asked for one thing and was shown
 * another, with nothing on screen saying so. DBG-007.
 *
 * The V2G card ships disabled and says why. Selecting EV enables it.
 * Deselecting EV deselects and re-disables it, so an invalid pair cannot
 * survive in the selection at all.
 */
function syncV2gAvailability() {
    const card = document.querySelector('.transportation-card[data-value="v2g_stations"]');
    if (!card) return;

    const status = card.querySelector('.card-status');
    const evSelected = mobilitySelections.transportation.includes('ev');

    if (evSelected) {
        card.disabled = false;
        card.classList.remove('is-unavailable');
        if (status) { status.hidden = true; status.textContent = ''; }
        return;
    }

    // EV is not selected. Drop V2G if it was somehow on, then close the door.
    card.classList.remove('active');
    mobilitySelections.transportation = mobilitySelections.transportation.filter(v => v !== 'v2g_stations');
    card.disabled = true;
    card.classList.add('is-unavailable');
    if (status) {
        status.hidden = false;
        status.textContent = 'Requires EV';
    }
}

/**
 * Setup card event listeners for multi-selection.
 */
function setupCards() {
    const transportCards = document.querySelectorAll('.transportation-card');
    transportCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.disabled) return;   // a disabled card is not a selection

            const value = card.dataset.value;
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                if (!mobilitySelections.transportation.includes(value)) {
                    mobilitySelections.transportation.push(value);
                }
            } else {
                mobilitySelections.transportation = mobilitySelections.transportation.filter(v => v !== value);
            }

            syncV2gAvailability();
            syncSubmitState();
        });
    });

    const mobilityCards = document.querySelectorAll('.mobility-card');
    mobilityCards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                if (!mobilitySelections.mobility.includes(value)) {
                    mobilitySelections.mobility.push(value);
                }
            } else {
                mobilitySelections.mobility = mobilitySelections.mobility.filter(v => v !== value);
            }
        });
    });
}

/**
 * STAGE-06 task 6.3, CHV Stage 6 item 3. Continue is blocked while the
 * selection maps to no defined scenario, and the reason is on screen.
 *
 * The old code computed `evSelected` and then never used it, so navigation
 * proceeded whatever had been chosen. DBG-008.
 */
function selectionIsValid() {
    return mobilitySelections.transportation.includes('ev');
}

function syncSubmitState() {
    const submitBtn = document.getElementById('view-mobility-btn');
    const reason = document.getElementById('mobility-submit-reason');
    if (!submitBtn) return;

    const ok = selectionIsValid();
    submitBtn.disabled = !ok;
    if (reason) {
        reason.hidden = ok;
        reason.textContent = ok ? '' : 'Select EV to see mobility results. V2G is an option on top of EV.';
    }
}

/**
 * Setup submit button to navigate to output mobility page.
 * If EV is selected, navigate directly to the EV & V2G breakdown page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-mobility-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Second gate. The disabled attribute is one line away in the
            // inspector, so the decision is taken again here.
            if (!selectionIsValid()) {
                syncSubmitState();
                return;
            }

            const neighbourhoodCode = getNeighbourhoodFromURL();

            // Store selections in sessionStorage
            sessionStorage.setItem('mobilitySelections', JSON.stringify(mobilitySelections));

            if (neighbourhoodCode) {
                const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
                window.location.href = `layer3_ev_v2g_mobility_output.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
            } else {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
            }
        });
    }

    syncSubmitState();
}

/**
 * Initialize the Mobility Selection page.
 */
function initMobilitySelectionPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backBtn = document.getElementById('back-btn');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 3: Mobility Selection for ${neighbourhoodCode}`;

        if (backBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            backBtn.href = `layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        }

        buildSidebar('layer3_selection', 'selection');
    }

    setupCards();
    setupSubmitButton();

    // Both gates are set from the empty selection this page opens with, so the
    // V2G card and the Continue button ship in the correct state rather than
    // waiting for the first click to correct them.
    syncV2gAvailability();
    syncSubmitState();
}

document.addEventListener('DOMContentLoaded', initMobilitySelectionPage);
