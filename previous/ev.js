/**
 * EV Profile Page
 * Handles the EV profile visualization and toggle button interactions
 */

/**
 * Get neighbourhood code from URL parameter
 * @returns {string|null} The neighbourhood code or null
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Setup toggle button interactions for EV parameters
 */
function setupEVToggleButtons() {
    const buttons = document.querySelectorAll('.ev-toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            // Deselect all other buttons in this category
            buttons.forEach(btn => {
                if (btn.dataset.category === category && btn !== button) {
                    btn.classList.remove('active');
                }
            });

            // Toggle this button (or ensure it stays active for single selection)
            if (!button.classList.contains('active')) {
                button.classList.add('active');
            }
        });
    });
}

/**
 * Initialize the EV page
 */
function initEVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Layer 3: Mobility of ${neighbourhoodCode}`;

        // Build sidebar
        if (typeof buildSidebar === 'function') {
            buildSidebar('ev', 'selection');
        }

        // Set back button href based on 'from' parameter or default to LPV
        if (backStepBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            backStepBtn.href = `layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        }

        // Set next step button href
        if (nextStepBtn) {
            nextStepBtn.href = `layer1_output.html`; // Or wherever it makes sense to go back to start
        }
    } else {
        titleElement.textContent = 'EV Profile';
    }

    // Setup toggle buttons
    setupEVToggleButtons();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEVPage);
