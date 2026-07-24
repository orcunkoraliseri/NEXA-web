/**
 * Neighbourhood Design Interface - Application Logic
 * Handles parameter selection and navigation
 */

// Current filter state (single selection per category)
const activeFilters = {
    usage: null,
    context: null,
    density: null,
    layout: null,
    envelope: null
};

// Selection state for navigation to Layer 2
let selectedNeighbourhoodCode = null;

/**
 * Initialize the Welcome Page
 */
function initWelcomePage() {
    setupToggleButtons();
    setupUsageCards();
    setupContextCards();
    setupDensityCards();
    setupLayoutCards();
    setupEnvelopeCards();
    setupSubmitButton();
}

/**
 * Set up toggle button event listeners (single selection)
 */
function setupToggleButtons() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const value = button.dataset.value;

            // Deselect all other buttons in this category
            buttons.forEach(btn => {
                if (btn.dataset.category === category && btn !== button) {
                    btn.classList.remove('active');
                }
            });

            // Toggle this button
            button.classList.toggle('active');

            // Update filter state (single value or null)
            if (button.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }
        });
    });
}

/**
 * Set up usage image card event listeners (single selection)
 */
function setupUsageCards() {
    const cards = document.querySelectorAll('.usage-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;

            // Deselect all other cards in this category
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Toggle this card
            card.classList.toggle('active');

            // Update filter state (single value or null)
            if (card.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }

            // Update available options in other parameters
            updateAvailableOptions();
        });
    });
}

/**
 * Set up context image card event listeners (single selection)
 */
function setupContextCards() {
    const cards = document.querySelectorAll('.context-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;

            // Deselect all other cards in this category
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Toggle this card
            card.classList.toggle('active');

            // Update filter state (single value or null)
            if (card.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }

            // Update available options in other parameters
            updateAvailableOptions();
        });
    });
}

/**
 * Set up density image card event listeners (single selection)
 */
function setupDensityCards() {
    const cards = document.querySelectorAll('.density-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;

            // Deselect all other cards in this category
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Toggle this card
            card.classList.toggle('active');

            // Update filter state (single value or null)
            if (card.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }

            // Update available options in other parameters
            updateAvailableOptions();
        });
    });
}

/**
 * Set up layout image card event listeners (single selection)
 */
function setupLayoutCards() {
    const cards = document.querySelectorAll('.layout-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;

            // Deselect all other cards in this category
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Toggle this card
            card.classList.toggle('active');

            // Update filter state (single value or null)
            if (card.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }

            // Update available options in other parameters
            updateAvailableOptions();
        });
    });
}


/**
 * Set up Envelope image card event listeners (single selection)
 */
function setupEnvelopeCards() {
    const cards = document.querySelectorAll('.envelope-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const value = card.dataset.value;

            // Deselect all other cards in this category
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('active');
                }
            });

            // Toggle this card
            card.classList.toggle('active');

            // Update filter state (single value or null)
            if (card.classList.contains('active')) {
                activeFilters[category] = value;
            } else {
                activeFilters[category] = null;
            }

            // Update available options in other parameters
            updateAvailableOptions();
        });
    });
}

/**
 * Update available options based on current selections
 * Disables cards that have no matching neighbourhoods
 */
function updateAvailableOptions() {
    // Get all matching neighbourhoods based on current filters
    const matchingNeighbourhoods = NEIGHBOURHOODS.filter(n => {
        for (const [category, value] of Object.entries(activeFilters)) {
            if (value !== null) {
                const nVal = n[category];
                if (category === 'envelope') {
                    if (Array.isArray(nVal)) {
                        if (!nVal.includes(value)) return false;
                    } else if (nVal !== value) {
                        return false;
                    }
                } else if (nVal !== value) {
                    return false;
                }
            }
        }
        return true;
    });

    // Collect available values for each category from matching neighbourhoods
    const availableValues = {
        usage: new Set(),
        context: new Set(),
        density: new Set(),
        layout: new Set(),
        envelope: new Set()
    };

    matchingNeighbourhoods.forEach(n => {
        availableValues.usage.add(n.usage);
        availableValues.context.add(n.context);
        availableValues.density.add(n.density);
        availableValues.layout.add(n.layout);
        
        if (Array.isArray(n.envelope)) {
            n.envelope.forEach(env => availableValues.envelope.add(env));
        } else {
            availableValues.envelope.add(n.envelope);
        }
    });

    // If no filters are active, enable all cards
    const hasActiveFilters = Object.values(activeFilters).some(val => val !== null);

    // Update usage cards
    document.querySelectorAll('.usage-card').forEach(card => {
        const value = card.dataset.value;
        if (!hasActiveFilters || availableValues.usage.has(value) || activeFilters.usage === value) {
            card.classList.remove('disabled');
        } else {
            card.classList.add('disabled');
        }
    });

    // Update context cards
    document.querySelectorAll('.context-card').forEach(card => {
        const value = card.dataset.value;
        if (!hasActiveFilters || availableValues.context.has(value) || activeFilters.context === value) {
            card.classList.remove('disabled');
        } else {
            card.classList.add('disabled');
        }
    });

    // Update density cards
    document.querySelectorAll('.density-card').forEach(card => {
        const value = card.dataset.value;
        if (!hasActiveFilters || availableValues.density.has(value) || activeFilters.density === value) {
            card.classList.remove('disabled');
        } else {
            card.classList.add('disabled');
        }
    });

    // Update layout cards
    document.querySelectorAll('.layout-card').forEach(card => {
        const value = card.dataset.value;
        if (!hasActiveFilters || availableValues.layout.has(value) || activeFilters.layout === value) {
            card.classList.remove('disabled');
        } else {
            card.classList.add('disabled');
        }
    });

    // Update envelope cards
    document.querySelectorAll('.envelope-card').forEach(card => {
        const value = card.dataset.value;
        if (!hasActiveFilters || availableValues.envelope.has(value) || activeFilters.envelope === value) {
            card.classList.remove('disabled');
        } else {
            card.classList.add('disabled');
        }
    });

    // Check if all filters are selected to enable results button
    checkAllFiltersSelected();
}

/**
 * Check if ALL filters are selected (to enable submit)
 */
function checkAllFiltersSelected() {
    const submitBtn = document.getElementById('view-results-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }
}

/**
 * Set up submit button to navigate to output page
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-results-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Store filters in sessionStorage
            sessionStorage.setItem('activeFilters', JSON.stringify(activeFilters));

            // Navigate to output page
            window.location.href = 'layer1_output.html';
        });
    }
}


/**
 * Ahmed: Setup the popup logic for the Neighbourhood images
 */
function setupNeighbourhoodModal() {
    const modal = document.getElementById("nav-modal");
    const resultsBody = document.getElementById("results-body");
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");

    if (!modal || !resultsBody) return;

    let selectedModelCode = ""; // Variable to store the code of the clicked neighborhood

    // 1. Listen for clicks on neighbourhood cells inside the results table
    resultsBody.addEventListener('click', (e) => {
        const cell = e.target.closest('.neighbourhood-cell');

        if (cell) {
            e.stopPropagation();

            // Get the text from the <span class="code"> inside that cell
            const codeSpan = cell.querySelector('.code');
            if (codeSpan) {
                selectedModelCode = codeSpan.textContent.trim();
                // Show the popup
                modal.style.display = "block";
            }
        }
    });

    // 2. Handle the "No" button
    btnNo.onclick = () => {
        modal.style.display = "none";
    };

    // 3. Handle the "Yes" button - Opens 3dviewer.html in a new tab
    btnYes.onclick = () => {
        modal.style.display = "none";
        if (selectedModelCode) {
            window.open(`3dviewer.html?model=${encodeURIComponent(selectedModelCode.trim().toUpperCase())}`, '_blank');
        }
    };

    // 4. Close if user clicks outside the white box
    window.onclick = (event) => {
        if (event.target == modal) { modal.style.display = "none"; }
    };
}


/**
 * Initialize the Output Page
 */
function initOutputPage() {
    const filtersJson = sessionStorage.getItem('activeFilters');

    if (!filtersJson) {
        // No filters selected, redirect to welcome page
        window.location.href = 'layer1_NUs_selection.html';
        return;
    }

    const filters = JSON.parse(filtersJson);
    Object.assign(activeFilters, filters);
    renderOutputTable(filters);
    setupLayer2Button();

    setupNeighbourhoodModal();
}

/**
 * Setup "Layer 2: Energy" button navigation
 */
function setupLayer2Button() {
    const layer2Btn = document.getElementById('layer2-energy-btn');
    if (layer2Btn) {
        layer2Btn.addEventListener('click', () => {
            if (selectedNeighbourhoodCode) {
                // Get envelope from stored filters
                const filtersJson = sessionStorage.getItem('activeFilters');
                const filters = filtersJson ? JSON.parse(filtersJson) : {};
                const envelope = filters.envelope || 'necb-2017';
                window.location.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(selectedNeighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
            }
        });
    }
}

/**
 * Render the output table based on filter selections
 * @param {Object} filters - The active filter selections (single value per category)
 */
function renderOutputTable(filters) {
    const tableBody = document.getElementById('results-body');
    if (!tableBody) return;

    // Filter neighbourhoods directly based on their own properties
    const matchingNeighbourhoods = NEIGHBOURHOODS.filter(neighbourhood => {
        return checkNeighbourhoodMatchesFilters(neighbourhood, filters);
    });

    // Get concept for each matching neighbourhood
    const results = matchingNeighbourhoods.map(neighbourhood => {
        const concept = CONCEPTS.find(c => c.id === neighbourhood.conceptId);
        return { concept, neighbourhood };
    });

    tableBody.innerHTML = '';

    if (results.length === 0) {
        tableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 3rem; color: var(--text-secondary);">
          <h3>No matching neighbourhoods</h3>
          <p>Try adjusting your parameter selections.</p>
        </td>
      </tr>
    `;
        return;
    }

    results.forEach(({ concept, neighbourhood }) => {
        const row = createResultRow(concept, neighbourhood);
        tableBody.appendChild(row);
    });
}

/**
 * Check if a neighbourhood matches the filter criteria (single selection per category)
 * @param {Object} neighbourhood - The neighbourhood to check
 * @param {Object} filters - The active filters
 * @returns {boolean} Whether the neighbourhood matches
 */
function checkNeighbourhoodMatchesFilters(neighbourhood, filters) {
    // If no filters are active, show all
    const hasActiveFilters = Object.values(filters).some(val => val !== null);
    if (!hasActiveFilters) return true;

    // Check each category - neighbourhood must match the selected value
    for (const [category, value] of Object.entries(filters)) {
        if (value !== null) {
            const neighbourhoodValue = neighbourhood[category];
            if (category === 'envelope') {
                if (Array.isArray(neighbourhoodValue)) {
                    if (!neighbourhoodValue.includes(value)) {
                        return false;
                    }
                } else if (neighbourhoodValue !== value) {
                    return false;
                }
            } else if (neighbourhoodValue !== value) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Create a result table row
 * @param {Object} concept - The concept data
 * @param {Object} neighbourhood - The neighbourhood data
 * @returns {HTMLElement} The table row element
 */
function createResultRow(concept, neighbourhood) {
    const row = document.createElement('tr');

    // EUI range constants for color scaling
    const EUI_MIN = 56;
    const EUI_MAX = 240;

    // Concept cell
    const conceptCell = document.createElement('td');
    conceptCell.innerHTML = `
    <div class="concept-cell">
      <img src="${concept.image}" alt="${concept.name}" onerror="this.style.display='none'">
      <span>${concept.name}</span>
    </div>
  `;

    // EUI (Energy) cell - COMMENTED OUT (preserved for future use)
    // const euiCell = document.createElement('td');
    // if (neighbourhood.eui !== null && neighbourhood.eui !== undefined) {
    //     const euiValue = neighbourhood.eui;
    //     // Calculate position on scale (0-100%)
    //     const position = Math.min(100, Math.max(0, ((euiValue - EUI_MIN) / (EUI_MAX - EUI_MIN)) * 100));

    //     // Calculate color based on position (green -> yellow -> red)
    //     let color;
    //     if (position <= 50) {
    //         // Green to Yellow
    //         const ratio = position / 50;
    //         const r = Math.round(34 + (234 - 34) * ratio);
    //         const g = Math.round(197 + (234 - 197) * ratio);
    //         const b = Math.round(94 + (8 - 94) * ratio);
    //         color = `rgb(${r}, ${g}, ${b})`;
    //     } else {
    //         // Yellow to Red
    //         const ratio = (position - 50) / 50;
    //         const r = Math.round(234 + (239 - 234) * ratio);
    //         const g = Math.round(179 + (68 - 179) * ratio);
    //         const b = Math.round(8 + (68 - 8) * ratio);
    //         color = `rgb(${r}, ${g}, ${b})`;
    //     }

    //     euiCell.innerHTML = `
    //     <div class="eui-cell">
    //       <span class="eui-value" style="color: ${color}">${euiValue.toFixed(1)}</span>
    //       <span class="eui-unit">kWh/m²·yr</span>
    //       <div class="eui-bar">
    //         <div class="eui-indicator" style="left: ${position}%"></div>
    //       </div>
    //     </div>
    //   `;

    //     // Make EUI cell clickable to view energy breakdown
    //     euiCell.style.cursor = 'pointer';
    //     euiCell.addEventListener('click', () => {
    //         window.location.href = `layer1_energy_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhood.code)}`;
    //     });
    // } else {
    //     euiCell.innerHTML = `
    //     <div class="eui-cell">
    //       <span class="eui-value" style="color: #888">N/A</span>
    //       <span class="eui-unit">kWh/m²·yr</span>
    //     </div>
    //   `;
    // }

    // Energy Status cell - COMMENTED OUT (moved to Energy page)
    // const statusCell = document.createElement('td');
    // const status = neighbourhood.energyStatus;
    // const statusImage = ENERGY_STATUS_IMAGES[status];

    // if (status && statusImage) {
    //     statusCell.innerHTML = `
    //     <div class="energy-status-cell">
    //       <img src="${statusImage}" alt="${status}" title="${status}" class="status-icon">
    //     </div>
    //   `;
    // } else {
    //     statusCell.innerHTML = `
    //     <div class="energy-status-cell">
    //       <span style="color: #888">N/A</span>
    //     </div>
    //   `;
    // }

    // Neighbourhood cell
    const neighbourhoodCell = document.createElement('td');
    const nuImage = neighbourhood.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(neighbourhood.code);
    neighbourhoodCell.innerHTML = `
    <div class="neighbourhood-cell">
      <img src="${nuImage}" alt="${neighbourhood.code}" onerror="this.src='https://via.placeholder.com/200x150?text=${encodeURIComponent(neighbourhood.code)}'">
      <span class="code">${neighbourhood.code}</span>
    </div>
  `;

    // Handle row selection
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
        // Deselect previous
        document.querySelectorAll('.results-table tr').forEach(r => r.classList.remove('selected'));

        // Select current
        row.classList.add('selected');
        selectedNeighbourhoodCode = neighbourhood.code;

        // Save full object to session storage for the new sidebar component
        sessionStorage.setItem('selectedNeighbourhood', JSON.stringify(neighbourhood));
        sessionStorage.setItem('selectedConcept', JSON.stringify(concept));

        // Enable next button
        const nextBtn = document.getElementById('layer2-energy-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    });

    // Properties cell - display the user's selected parameters visually
    const propertiesCell = document.createElement('td');

    // Helper function to capitalize layout values
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    // Determine the active envelope standard to display (default to 'necb-2017')
    const activeEnvelope = activeFilters.envelope || 'necb-2017';

    // Map envelope standard to exact image filename and label display
    const envelopeImageNames = {
        'necb-2017': 'standard construction',
        'ashrae': 'standard construction',
        'necb-z4': 'standard construction',
        'necb-z5': 'standard construction',
        'necb-z6': 'standard construction',
        'necb-z7a': 'standard construction',
        'necb-z7b': 'standard construction',
        'necb-z8': 'standard construction',
        'high-performance-necb': 'high-performance construction',
        'high-performance-ashrae': 'high-performance construction',
        'high-performance-z4': 'high-performance construction',
        'high-performance-z5': 'high-performance construction',
        'high-performance-z6': 'high-performance construction',
        'high-performance-z7a': 'high-performance construction',
        'high-performance-z7b': 'high-performance construction',
        'high-performance-z8': 'high-performance construction'
    };
    const envelopeDisplayNames = {
        'necb-2017': 'NECB Zone 6 (Montréal)',
        'ashrae': 'Standard (ASHRAE)',
        'necb-z4': 'NECB Zone 4 (Windsor)',
        'necb-z5': 'NECB Zone 5 (Toronto/Ottawa)',
        'necb-z6': 'NECB Zone 6 (Montréal)',
        'necb-z7a': 'NECB Zone 7A (Calgary)',
        'necb-z7b': 'NECB Zone 7B (Whitehorse)',
        'necb-z8': 'NECB Zone 8 (Yellowknife)',
        'high-performance-necb': 'High Perf. Zone 6 (Montréal)',
        'high-performance-ashrae': 'High Perf. (ASHRAE)',
        'high-performance-z4': 'High Perf. Zone 4 (Windsor)',
        'high-performance-z5': 'High Perf. Zone 5 (Toronto/Ottawa)',
        'high-performance-z6': 'High Perf. Zone 6 (Montréal)',
        'high-performance-z7a': 'High Perf. Zone 7A (Calgary)',
        'high-performance-z7b': 'High Perf. Zone 7B (Whitehorse)',
        'high-performance-z8': 'High Perf. Zone 8 (Yellowknife)'
    };

    const envelopeImageName = envelopeImageNames[activeEnvelope] || activeEnvelope;
    const envelopeLabel = envelopeDisplayNames[activeEnvelope] || activeEnvelope;

    propertiesCell.innerHTML = `
      <div class="properties-cell" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; justify-items: center; align-items: start;">
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Usage_Parameters/${neighbourhood.usage}.png" alt="${neighbourhood.usage}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.usage}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Context_Parameters/${neighbourhood.context}.png" alt="${neighbourhood.context}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.context}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Layout_Parameters/${neighbourhood.layout}.png" alt="${neighbourhood.layout}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.layout}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Density_Parameters/${neighbourhood.density}.png" alt="${neighbourhood.density}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.density}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Envelope_Parameters/${envelopeImageName}.png" alt="${activeEnvelope}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${envelopeLabel}</span>
        </div>
      </div>
    `;

    // Buildings cell
    const buildingsCell = document.createElement('td');
    const buildingsWrapper = document.createElement('div');
    buildingsWrapper.className = 'buildings-cell';

    neighbourhood.buildings.forEach(building => {
        const buildingDiv = document.createElement('div');
        buildingDiv.className = 'building-icon';

        const imagePath = BUILDING_IMAGES[building];
        if (imagePath) {
            buildingDiv.innerHTML = `
        <img src="${imagePath}" alt="${building}" onerror="this.style.display='none'">
        <span>${building}</span>
      `;
        } else {
            buildingDiv.innerHTML = `<span>${building}</span>`;
        }

        buildingsWrapper.appendChild(buildingDiv);
    });

    buildingsCell.appendChild(buildingsWrapper);

    // row.appendChild(euiCell);  // COMMENTED OUT (preserved for future use)
    // row.appendChild(statusCell);  // COMMENTED OUT (moved to Energy page)
    row.appendChild(conceptCell);
    row.appendChild(neighbourhoodCell);
    row.appendChild(propertiesCell);
    row.appendChild(buildingsCell);

    return row;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on
    if (document.querySelector('.usage-cards')) {
        initWelcomePage();
    } else if (document.getElementById('results-body')) {
        initOutputPage();
    }
});
