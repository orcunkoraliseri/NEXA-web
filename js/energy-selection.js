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

    // CHV, 2026-08-17, point 2: "Remove any silent default to Montreal/NECB
    // when a valid climate has not been selected." This used to return
    // 'necb-2017'. The caller stops the page instead.
    return '';
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
 * STAGE-05 task 5.1, D0.5, DBG-017. Facade PV is offered only where it was
 * actually studied.
 *
 * Until now the card was enabled for all 35 neighbourhoods in all 7 climates,
 * 245 combinations, while upstream it exists as three single building runs in
 * Montreal (PV_methodology.md section 9). No neighbourhood level facade result
 * was ever produced, so the card also changed no number anywhere: a user could
 * select it, see nothing move, and reasonably conclude the tool was broken.
 *
 * The card is greyed everywhere else, and it says why on the page rather than
 * only in the code. It stays live for the nine Montreal neighbourhoods that
 * contain one of the three tall building archetypes it was tested on.
 */
function applyFacadePvRule(neighbourhoodCode, envelope) {
    const card = document.querySelector('.generation-card[data-value="pv_facade"]');
    if (!card) return;

    const allowed = LMN_CONFIG.facadePvAllowed(neighbourhoodCode, envelope);
    const status = document.getElementById('pv-facade-status');
    const note = document.getElementById('pv-facade-note');

    if (allowed) {
        card.disabled = false;
        card.classList.remove('is-unavailable');
        if (status) { status.hidden = true; status.textContent = ''; }
        if (note) { note.hidden = true; note.textContent = ''; }
        return;
    }

    card.disabled = true;
    card.classList.add('is-unavailable');
    // Not "Not modelled yet": this one IS modelled, just not here. The reason is
    // a restriction, so the reason is what the card says. D9.2 changed the other
    // wording and deliberately left this one alone.
    if (status) {
        status.hidden = false;
        status.textContent = 'Montreal only';
    }
    if (note) {
        note.hidden = false;
        note.textContent = LMN_CONFIG.facadePv.restrictionNote;
    }
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

    // Envelope display names come from LMN_CONFIG, D0.1 / DBG-016. The local
    // copy that used to sit here named four cities that were never simulated.
    const envelopeNames = LMN_CONFIG.envelopeLabels;

    // CHV, 2026-08-17, point 2. No climate chosen: stop before the selection is
    // built. getEnvelope() used to answer 'necb-2017' here.
    if (!envelope) {
        const main = document.querySelector('main.container') || document.body;
        main.innerHTML = LMN_CONFIG.noClimateNoticeHtml();
        titleElement.textContent = 'Layer 2: Energy Design';
        return;
    }

    // CHV, 2026-08-13. A withheld neighbourhood and climate pair is not
    // offered on the Layer 1 table, so this page is reachable for one only by
    // a stored session or a typed URL. It stops here, with the reason, rather
    // than letting the visitor build a design on a result that is not
    // published. The gate is the same object the table filters on.
    const gapNotice = LMN_CONFIG.dataGapNotice(neighbourhoodCode, envelope);
    if (gapNotice) {
        const main = document.querySelector('main.container') || document.body;
        main.innerHTML = gapNotice +
            '<p class="info-box"><a href="layer1_output.html">Back to the neighbourhood table</a></p>';
        titleElement.textContent = 'Layer 2: Energy Design';
        return;
    }

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

    // STAGE-05 task 5.1. Before the stored selection is restored, so that a
    // facade PV choice made on a Montreal neighbourhood cannot come back to
    // life on a neighbourhood where it is not offered.
    applyFacadePvRule(neighbourhoodCode, envelope);

    // Task 3.8, CHV Stage 3 item 6: Back then Next must return the same
    // scenario. Until 2026-08-10 this page started empty on every load, so
    // pressing Back from the breakdown silently cleared the user's measures
    // and pressing Next again recomputed the baseline instead of what they
    // had chosen. Restore before the mutual exclusion state is worked out.
    restoreEnergySelections();

    // Initialize mutual exclusion state
    updateMutualExclusion();
}

/**
 * Task 3.8. Re-apply the stored selection to the cards.
 * The state lives in sessionStorage under "energySelections", written by the
 * submit handler, and the neighbourhood and envelope stay in the URL, so a
 * refresh mid-flow also survives.
 */
function restoreEnergySelections() {
    let stored;
    try {
        stored = JSON.parse(sessionStorage.getItem('energySelections') || 'null');
    } catch (e) {
        stored = null;
    }
    if (!stored) return;

    const groups = [
        ['load', '.load-card'],
        ['demand', '.demand-card'],
        ['generation', '.generation-card']
    ];

    groups.forEach(([group, selector]) => {
        const values = Array.isArray(stored[group]) ? stored[group] : [];
        energySelections[group] = [];
        document.querySelectorAll(selector).forEach(card => {
            const isChosen = values.indexOf(card.dataset.value) !== -1;
            // A card that has since been disabled must not come back active.
            if (isChosen && !card.disabled) {
                card.classList.add('active');
                energySelections[group].push(card.dataset.value);
            } else {
                card.classList.remove('active');
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initEnergySelectionPage);
