/**
 * Energy Selection Page
 * Handles parameter selection for energy consumption and generation
 * Selections map to energy data columns (IAL, DEFAULT, EEM1-EEM4)
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

function getEnvelopeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const envFromURL = params.get('envelope');
    if (envFromURL) {
        sessionStorage.setItem('selectedEnvelope', envFromURL);
        return envFromURL;
    }
    try {
        const filtersJson = sessionStorage.getItem('activeFilters');
        if (filtersJson) {
            const filters = JSON.parse(filtersJson);
            if (filters.envelope) {
                sessionStorage.setItem('selectedEnvelope', filters.envelope);
                return filters.envelope;
            }
        }
    } catch (e) {}
    const stored = sessionStorage.getItem('selectedEnvelope');
    if (stored) return stored;

    return 'necb-2017';
}

// Current selection state (arrays for multi-select)
const energySelections = {
    load: [],
    demand: [],
    generation: []
};

/**
 * Update the disabled/enabled visual state of groups based on mutual exclusion.
 * - If Thermal Load is active  → disable all demand cards
 * - If any demand card is active → disable all load cards
 * - If neither group has selections → enable both groups
 */
function updateMutualExclusion() {
    const loadCards = document.querySelectorAll('.load-card');
    const demandCards = document.querySelectorAll('.demand-card');

    const hasLoad = energySelections.load.length > 0;
    const hasDemand = energySelections.demand.length > 0;

    // Disable demand cards when Thermal Load is selected
    demandCards.forEach(card => {
        // Never re-enable permanently disabled items (e.g. "Other TBA")
        if (card.hasAttribute('data-permanently-disabled')) return;
        if (hasLoad) {
            card.disabled = true;
        } else {
            card.disabled = false;
        }
    });

    // Disable load cards when any Energy Systems button is selected
    loadCards.forEach(card => {
        if (card.hasAttribute('data-permanently-disabled')) return;
        if (hasDemand) {
            card.disabled = true;
        } else {
            card.disabled = false;
        }
    });
}

/**
 * Setup load card event listeners (Thermal Load selection with mutual exclusion).
 */
function setupLoadCards() {
    const cards = document.querySelectorAll('.load-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.disabled) return; // Respect disabled state

            const value = card.dataset.value;

            // Toggle this card
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                if (!energySelections.load.includes(value)) {
                    energySelections.load.push(value);
                }

                if (value === 'thermal_load') {
                    // Clear all demand selections
                    energySelections.demand = [];
                    document.querySelectorAll('.demand-card').forEach(dCard => {
                        dCard.classList.remove('active');
                    });
                }
            } else {
                energySelections.load = energySelections.load.filter(v => v !== value);
            }

            updateMutualExclusion();
        });
    });
}

/**
 * Setup demand card event listeners (multi-selection for Heat Pump, DHW, Appliances).
 * Heat Pump (COP 4) is mutually exclusive with other COP values.
 * Selecting any demand card disables Thermal Load.
 */
function setupDemandCards() {
    const cards = document.querySelectorAll('.demand-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.disabled) return; // Respect disabled state

            const value = card.dataset.value;

            // Toggle this card
            card.classList.toggle('active');

            // Update selection state
            if (card.classList.contains('active')) {
                // If this is a COP value, enforce mutual exclusivity among COP variants only
                if (['cop4', 'cop3.5', 'cop3'].includes(value)) {
                    energySelections.demand = energySelections.demand.filter(v => !['cop4', 'cop3.5', 'cop3'].includes(v));

                    // Visually deselect other COP cards
                    document.querySelectorAll('.demand-card').forEach(dCard => {
                        if (['cop4', 'cop3.5', 'cop3'].includes(dCard.dataset.value) && dCard.dataset.value !== value) {
                            dCard.classList.remove('active');
                        }
                    });
                }

                if (!energySelections.demand.includes(value)) {
                    energySelections.demand.push(value);
                }

                // Clear Thermal Load when any demand is selected
                energySelections.load = energySelections.load.filter(v => v !== 'thermal_load');
                document.querySelectorAll('.load-card[data-value="thermal_load"]').forEach(c => c.classList.remove('active'));

            } else {
                energySelections.demand = energySelections.demand.filter(v => v !== value);
            }

            updateMutualExclusion();
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
            if (card.disabled) return; // Respect disabled state

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
        'necb-2017': 'NECB Zone 6 (Montréal)',
        'ashrae': 'ASHRAE',
        'necb-z4': 'NECB Zone 4 (Windsor)',
        'necb-z5': 'NECB Zone 5 (Toronto / Ottawa)',
        'necb-z6': 'NECB Zone 6 (Montréal)',
        'necb-z7a': 'NECB Zone 7A (Calgary)',
        'necb-z7b': 'NECB Zone 7B (Whitehorse)',
        'necb-z8': 'NECB Zone 8 (Yellowknife)',
        'high-performance-necb': 'High Perf. NECB',
        'high-performance-ashrae': 'High Perf. ASHRAE',
        'high-performance-z4': 'High Perf. Zone 4 (Windsor)',
        'high-performance-z5': 'High Perf. Zone 5 (Toronto / Ottawa)',
        'high-performance-z6': 'High Perf. Zone 6 (Montréal)',
        'high-performance-z7a': 'High Perf. Zone 7A (Calgary)',
        'high-performance-z7b': 'High Perf. Zone 7B (Whitehorse)',
        'high-performance-z8': 'High Perf. Zone 8 (Yellowknife)',
        'high-performance construction': 'High-Performance'
    };

    if (neighbourhoodCode) {
        // Update title with neighbourhood code and envelope standard
        const envName = envelopeNames[envelope] || envelope;
        titleElement.textContent = `Layer 2: Energy Design for ${neighbourhoodCode} (${envName})`;

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

    // Initialize mutual exclusion state
    updateMutualExclusion();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEnergySelectionPage);
