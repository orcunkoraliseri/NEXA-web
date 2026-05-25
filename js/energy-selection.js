/**
 * Energy Selection Page
 * Handles parameter selection for energy consumption and generation
 * Note: This is a demo page - selections do not affect the energy data shown
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Get envelope standard from URL parameter.
 * @returns {string} The envelope value or default 'necb-2017'.
 */
function getEnvelopeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('envelope') || 'necb-2017';
}

// Current selection state (arrays for multi-select)
const energySelections = {
    load: [],
    demand: [],
    generation: []
};

/**
 * Setup load card event listeners (multi-selection with mutual exclusion for space heating).
 */
function setupLoadCards() {
    const cards = document.querySelectorAll('.load-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;

            // Toggle this card
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                if (!energySelections.load.includes(value)) {
                    energySelections.load.push(value);
                }

                if (value === 'thermal_load') {
                    // Deselect COP options in demand
                    energySelections.demand = energySelections.demand.filter(v => !['cop4', 'cop3.5', 'cop3'].includes(v));
                    document.querySelectorAll('.demand-card').forEach(dCard => {
                        if (['cop4', 'cop3.5', 'cop3'].includes(dCard.dataset.value)) {
                            dCard.classList.remove('active');
                        }
                    });
                }
            } else {
                energySelections.load = energySelections.load.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup demand card event listeners (multi-selection with mutual exclusion for space heating).
 */
function setupDemandCards() {
    const cards = document.querySelectorAll('.demand-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;

            // Toggle this card
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                // If this is a COP value, we enforce mutual exclusivity against thermal_load and other COPs
                if (['cop4', 'cop3.5', 'cop3'].includes(value)) {
                    energySelections.load = energySelections.load.filter(v => v !== 'thermal_load');
                    energySelections.demand = energySelections.demand.filter(v => !['cop4', 'cop3.5', 'cop3'].includes(v) || v === value);
                    
                    // Visually deselect others
                    document.querySelectorAll('.load-card[data-value="thermal_load"]').forEach(c => c.classList.remove('active'));
                    document.querySelectorAll('.demand-card').forEach(dCard => {
                        if (['cop4', 'cop3.5', 'cop3'].includes(dCard.dataset.value) && dCard.dataset.value !== value) {
                            dCard.classList.remove('active');
                        }
                    });
                }

                if (!energySelections.demand.includes(value)) {
                    energySelections.demand.push(value);
                }
            } else {
                energySelections.demand = energySelections.demand.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup generation card event listeners (multi-selection).
 */
function setupGenerationCards() {
    const cards = document.querySelectorAll('.generation-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const value = card.dataset.value;

            // Toggle this card (multi-select)
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                // Add to selections if not already present
                if (!energySelections.generation.includes(value)) {
                    energySelections.generation.push(value);
                }
            } else {
                // Remove from selections
                energySelections.generation = energySelections.generation.filter(v => v !== value);
            }
        });
    });
}

/**
 * Setup submit button to navigate to energy page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-energy-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();
            const envelope = getEnvelopeFromURL();

            // Store selections in sessionStorage
            sessionStorage.setItem('energySelections', JSON.stringify(energySelections));

            if (neighbourhoodCode) {
                // Navigate to the output energy results page, passing envelope
                window.location.href = `layer2_energy_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
            } else {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
            }
        });
    }
}

/**
 * Initialize the Energy Selection page.
 */
function initEnergySelectionPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const envelope = getEnvelopeFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backBtn = document.getElementById('back-btn');

    // Display-friendly envelope names
    const envelopeNames = {
        'necb-2017': 'NECB 2017',
        'ashrae': 'ASHRAE',
        'high-performance construction': 'High-Performance'
    };

    if (neighbourhoodCode) {
        // Update title with neighbourhood code and envelope standard
        const envName = envelopeNames[envelope] || envelope;
        titleElement.textContent = `Layer 2: Energy Design Interface for ${neighbourhoodCode} (${envName})`;

        // Update back button to maintain context (go back to selection page)
        if (backBtn) {
            backBtn.href = 'layer1_output.html';
        }

        // Build the initial sidebar in selection mode
        buildSidebar('layer2_selection', 'selection');
    }

    // Setup interactive elements
    setupLoadCards();
    setupDemandCards();
    setupGenerationCards();
    setupSubmitButton();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEnergySelectionPage);
