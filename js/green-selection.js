/**
 * Green Selection Page
 * Handles parameter selection for green infrastructure and agriculture
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
const greenSelections = {
    infrastructure: [],
    urban_agriculture: [],
    energy_integrated: []
};

/**
 * Setup card event listeners for multi-selection.
 */
function setupCards() {
    const cards = document.querySelectorAll('.green-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;
            card.classList.toggle('active');

            if (card.classList.contains('active')) {
                if (!greenSelections[category].includes(value)) {
                    greenSelections[category].push(value);
                }
            } else {
                greenSelections[category] = greenSelections[category].filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup submit button.
 * If any Energy-Integrated GI option is selected, navigate directly to the LPV breakdown page.
 * Otherwise navigate to the standard green output selection page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-green-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();

            // Persist all selections so other pages can read them
            sessionStorage.setItem('greenSelections', JSON.stringify(greenSelections));

            if (!neighbourhoodCode) {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
                return;
            }

            // If any Energy-Integrated GI option is active, go directly to LPV breakdown
            if (greenSelections.energy_integrated.length > 0) {
                const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
                window.location.href = `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
            } else {
                const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
                window.location.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
            }
        });
    }
}

/**
 * Initialize the Green Selection page.
 */
function initGreenSelectionPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backBtn = document.getElementById('back-btn');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 4: Green Selection for ${neighbourhoodCode}`;

        if (backBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            backBtn.href = `layer3_ev_v2g_mobility_output.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        }

        buildSidebar('layer4_selection', 'selection');
    }

    setupCards();
    setupSubmitButton();
}

document.addEventListener('DOMContentLoaded', initGreenSelectionPage);
