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
    // D2.9. Set the guard state once at load, before the user has touched
    // anything, so the button ships grey rather than becoming grey later.
    checkAllFiltersSelected();
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
 * Helper to compose envelope filter value from region and tier
 */
function getEnvelopeValue(region, tier) {
    if (tier === 'standard') {
        return region;
    }
    if (tier === 'vintage-1983') {
        return 'vintage-1983-z6';
    }
    if (region === 'ashrae') {
        return 'high-performance-ashrae';
    }
    if (region.startsWith('necb-')) {
        return 'high-performance-' + region.replace('necb-', '');
    }
    return 'high-performance-' + region;
}

/**
 * Helper to parse envelope filter value into region and tier
 */
function parseEnvelopeValue(envelopeValue) {
    if (!envelopeValue) return { region: null, tier: null };
    if (envelopeValue.startsWith('vintage-1983-')) {
        return { region: 'necb-z6', tier: 'vintage-1983' };
    }
    if (envelopeValue.startsWith('high-performance-')) {
        let r = envelopeValue.replace('high-performance-', '');
        if (r.startsWith('z')) {
            r = 'necb-' + r;
        }
        return { region: r, tier: 'high-performance' };
    } else {
        return { region: envelopeValue, tier: 'standard' };
    }
}

/**
 * Set up Envelope image card event listeners and Popup Modal (Region selection + Tier popup)
 */
function setupEnvelopeCards() {
    const regionCards = document.querySelectorAll('.envelope-region-btn');
    const popup = document.getElementById('envelope-popup');
    const popupRegionName = document.getElementById('envelope-popup-region-name');
    const closeBtn = document.getElementById('envelope-popup-close');
    const tierBtns = document.querySelectorAll('.envelope-tier-btn');

    let pendingRegion = null;

    if (!regionCards.length || !popup) return;

    // Open popup when region card is clicked
    regionCards.forEach(card => {
        card.addEventListener('click', () => {
            const region = card.dataset.region;
            pendingRegion = region;

            // Set region name in popup
            const spanText = card.querySelector('span:not(.envelope-region-badge)').innerText.replace('\n', ' ');
            popupRegionName.textContent = spanText;

            // Show/hide 1983 vintage button (only for Zone 6)
            const btn1983 = document.getElementById('tier-btn-1983');
            if (btn1983) {
                btn1983.style.display = (region === 'necb-z6') ? '' : 'none';
            }

            // Highlight current tier in popup if this region is already active
            const currentParsed = parseEnvelopeValue(activeFilters.envelope);
            tierBtns.forEach(btn => {
                btn.classList.remove('active');
                if (currentParsed.region === region && btn.dataset.tier === currentParsed.tier) {
                    btn.classList.add('active');
                }
            });

            // Show modal
            popup.style.display = 'flex';
        });
    });

    // Handle tier selection inside popup
    tierBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!pendingRegion) return;

            const tier = btn.dataset.tier;
            const fullEnvelopeValue = getEnvelopeValue(pendingRegion, tier);

            // Update active filter state
            activeFilters.envelope = fullEnvelopeValue;

            // Update region cards visual states
            regionCards.forEach(card => {
                const badge = card.querySelector('.envelope-region-badge');
                if (card.dataset.region === pendingRegion) {
                    card.classList.add('active');
                    if (badge) {
                        badge.textContent = tier === 'high-performance' ? 'HPENV' : tier === 'vintage-1983' ? '1983' : 'Standard';
                    }
                } else {
                    card.classList.remove('active');
                    if (badge) {
                        badge.textContent = '';
                    }
                }
            });

            // Hide popup and update available filter options
            popup.style.display = 'none';
            updateAvailableOptions();
        });
    });

    // Close popup on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    // Close popup when clicking outside modal content
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
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

    // Update envelope region cards
    document.querySelectorAll('.envelope-region-btn').forEach(card => {
        const region = card.dataset.region;
        const stdVal = getEnvelopeValue(region, 'standard');
        const hpVal = getEnvelopeValue(region, 'high-performance');
        const vintageVal = (region === 'necb-z6') ? getEnvelopeValue(region, 'vintage-1983') : null;
        const isSelected = activeFilters.envelope === stdVal || activeFilters.envelope === hpVal || (vintageVal && activeFilters.envelope === vintageVal);

        if (!hasActiveFilters || availableValues.envelope.has(stdVal) || availableValues.envelope.has(hpVal) || (vintageVal && availableValues.envelope.has(vintageVal)) || isSelected) {
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
    if (!submitBtn) return;

    // D2.9, DBG-022, P0. Until 2026-08-10 this function checked nothing: it
    // only ever switched the button on. A user could therefore reach every
    // result in the tool without choosing a climate, and silently got
    // Montreal, because roughly 30 call sites fall back to necb-2017.
    const requireClimate = (typeof LMN_CONFIG !== 'undefined' && LMN_CONFIG.requireClimateSelection !== undefined)
        ? LMN_CONFIG.requireClimateSelection
        : true;
    const ready = !requireClimate || Boolean(activeFilters.envelope);

    submitBtn.disabled = !ready;
    submitBtn.setAttribute('aria-disabled', String(!ready));

    const hint = document.getElementById('view-results-hint');
    if (hint) {
        hint.style.display = ready ? 'none' : 'block';
    }
}

/**
 * Set up submit button to navigate to output page
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-results-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // D2.9, DBG-022. Second gate, so the climate cannot be skipped by
            // clearing the disabled attribute in the browser inspector.
            const requireClimate = (typeof LMN_CONFIG !== 'undefined' && LMN_CONFIG.requireClimateSelection !== undefined)
                ? LMN_CONFIG.requireClimateSelection
                : true;
            if (requireClimate && !activeFilters.envelope) {
                checkAllFiltersSelected();
                return;
            }

            // Store filters in sessionStorage
            sessionStorage.setItem('activeFilters', JSON.stringify(activeFilters));
            if (activeFilters.envelope) {
                sessionStorage.setItem('selectedEnvelope', activeFilters.envelope);
            }

            // Navigate to output page
            window.location.href = 'layer1_output.html';
        });
    }
}


/*
 * The hidden 3D popup that used to live here was removed on 2026-08-10, D2.8.
 * It listened for a click anywhere on the neighbourhood cell, called
 * stopPropagation, and so opened a Yes/No confirmation while silently failing
 * to select the row. Both actions are now labelled buttons built in
 * createResultRow, and the nav-modal markup was deleted from
 * layer1_output.html in the same pass.
 */


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
                const envelope = filters.envelope || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
                sessionStorage.setItem('selectedEnvelope', envelope);
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
        <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-secondary);">
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

    renderDataGapNotes(filters);
}

/**
 * DBG-027, task 3.12. Print the reason for every neighbourhood withheld from
 * this climate, under the table. A withheld case that is not explained looks
 * like a filter result, which is the failure mode the release rule targets.
 * @param {Object} filters - The active filter selections
 */
function renderDataGapNotes(filters) {
    const holder = document.getElementById('data-gap-notes');
    if (!holder) return;

    holder.innerHTML = '';
    if (typeof LMN_CONFIG === 'undefined' || !filters.envelope) return;

    const gaps = LMN_CONFIG.dataGaps.filter(g => g.climates.indexOf(filters.envelope) !== -1);
    if (gaps.length === 0) return;

    // One box per reason, not one box per neighbourhood. CHV's decision of
    // 2026-08-13 withholds five neighbourhoods at once in five climates, and
    // five copies of one sentence is not an explanation, it is noise that
    // gets skipped. Neighbourhoods sharing a reason are named together.
    const groups = [];
    gaps.forEach(gap => {
        const existing = groups.find(group => group.reason === gap.reason);
        if (existing) { existing.nus.push(gap.nu); return; }
        groups.push({
            label: gap.label || LMN_CONFIG.availability.notAvailableLabel,
            reason: gap.reason,
            nus: [gap.nu]
        });
    });

    const climate = LMN_CONFIG.envelopeLabel(filters.envelope);

    // The box, not a loose line: CHV asked for the reason to be stated, and
    // session 16 settled what a stated reason looks like on this site.
    holder.innerHTML = groups.map(group => {
        const names = joinNuNames(group.nus);
        const verb = group.nus.length > 1 ? 'are' : 'is';
        return `
    <div class="info-box">
      <div class="info-box-body">
        <p class="info-box-title">${group.label}</p>
        <p class="info-box-line"><strong>${names}</strong> ${verb} not shown for ${climate}. ${group.reason}</p>
      </div>
    </div>`;
    }).join('');
}

/**
 * "RC-D", "RC-D and RC-T", "RC-D, RC-ML and RC-T". Used only by the note
 * above, and kept here rather than in config because it is presentation.
 * @param {string[]} names - The neighbourhood codes
 * @returns {string} The codes as one readable list
 */
function joinNuNames(names) {
    if (names.length === 1) return names[0];
    return names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}

/**
 * Check if a neighbourhood matches the filter criteria (single selection per category)
 * @param {Object} neighbourhood - The neighbourhood to check
 * @param {Object} filters - The active filters
 * @returns {boolean} Whether the neighbourhood matches
 */
function checkNeighbourhoodMatchesFilters(neighbourhood, filters) {
    // DBG-027, P0, task 3.12. A neighbourhood with no usable result for the
    // chosen climate is not offered at all. The reason is printed under the
    // table by renderOutputTable, so the absence is explained rather than
    // silent. This test runs before the filter test, because it holds even
    // when no other filter is active.
    if (typeof LMN_CONFIG !== 'undefined' && filters.envelope) {
        if (LMN_CONFIG.dataGapFor(neighbourhood.code, filters.envelope)) return false;
    }

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

    // Neighbourhood cell.
    // D2.8, CHV Stage 2 item 5: two clearly labelled actions per NU. Both
    // already existed and both were invisible: selecting was an unlabelled
    // whole row click, and the 3D view was a hidden click on the picture that
    // opened a Yes/No popup and, because of stopPropagation, failed to select
    // the row at the same time. The popup and the picture handler are gone.
    const neighbourhoodCell = document.createElement('td');
    const nuImage = neighbourhood.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(neighbourhood.code);
    neighbourhoodCell.innerHTML = `
    <div class="neighbourhood-cell">
      <img src="${nuImage}" alt="${neighbourhood.code}" onerror="this.src='https://via.placeholder.com/200x150?text=${encodeURIComponent(neighbourhood.code)}'">
      <span class="code">${neighbourhood.code}</span>
      <div class="nu-actions">
        <button type="button" class="nu-action-btn nu-select-btn">Select this NU</button>
        <button type="button" class="nu-action-btn nu-view3d-btn">View 3D</button>
      </div>
    </div>
  `;

    // Handle row selection. The whole row stays clickable as a shortcut, and
    // the labelled button calls the same function, so the two cannot drift.
    const selectThisNU = () => {
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
    };

    row.style.cursor = 'pointer';
    row.addEventListener('click', selectThisNU);

    const selectBtn = neighbourhoodCell.querySelector('.nu-select-btn');
    if (selectBtn) {
        selectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            selectThisNU();
        });
    }

    const view3dBtn = neighbourhoodCell.querySelector('.nu-view3d-btn');
    if (view3dBtn) {
        // D2.8: opens the viewer directly. A button already labelled View 3D
        // makes the old "Would you like to navigate the Neighbourhood Unit?"
        // confirmation redundant.
        view3dBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(`3dviewer.html?model=${encodeURIComponent(neighbourhood.code.trim().toUpperCase())}`, '_blank');
        });
    }

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
        'high-performance-z8': 'high-performance construction',
        'vintage-1983-z6': 'standard construction'
    };
    // Envelope display names now come from LMN_CONFIG, D0.1 / DBG-016. The map
    // that used to sit here named four cities that were never simulated:
    // Windsor, Calgary, Whitehorse and Yellowknife.
    const envelopeImageName = envelopeImageNames[activeEnvelope] || activeEnvelope;
    const envelopeLabel = LMN_CONFIG.envelopeLabel(activeEnvelope);

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

    // D2.7, CHV Stage 2 item 4: two planning quantities per NU.
    //
    // Number of buildings is the count of simulated buildings, one per merged
    // sector IDF in the campaign that feeds this site. It is NOT parsed from
    // the composition text, because that text counts dwelling units and an
    // attached-house prototype is a row of 7 units. DBG-021.
    const countCell = document.createElement('td');
    const count = neighbourhood.buildingCount;
    countCell.innerHTML = `
    <div class="metric-cell" title="Buildings actually simulated. One row of attached houses is one building and contains several dwellings.">
      <span class="metric-value">${(typeof count === 'number') ? count : 'not established'}</span>
      <span class="metric-unit">buildings</span>
    </div>
  `;

    // Floor area is GFA_DATA, the EnergyPlus Total Building Area, which is
    // GROSS. The EUI and PV intensities are published on NET CONDITIONED area,
    // so the basis is named here rather than left to be assumed. D6.0.
    const areaCell = document.createElement('td');
    const gfa = (typeof GFA_DATA !== 'undefined') ? GFA_DATA[neighbourhood.code] : undefined;
    areaCell.innerHTML = `
    <div class="metric-cell" title="Total built floor area, the EnergyPlus Total Building Area, including unheated attics and basements. The energy intensities elsewhere in the tool are per heated and cooled floor area, which for the house neighbourhoods is half of this.">
      <span class="metric-value">${(typeof gfa === 'number') ? gfa.toLocaleString('en-CA') : 'not established'}</span>
      <span class="metric-unit">m² total</span>
    </div>
  `;

    // row.appendChild(euiCell);  // COMMENTED OUT (preserved for future use)
    // row.appendChild(statusCell);  // COMMENTED OUT (moved to Energy page)
    row.appendChild(conceptCell);
    row.appendChild(neighbourhoodCell);
    row.appendChild(propertiesCell);
    row.appendChild(buildingsCell);
    row.appendChild(countCell);
    row.appendChild(areaCell);

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
