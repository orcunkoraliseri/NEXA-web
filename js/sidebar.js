/**
 * Shared Sidebar Component
 * Dynamically builds the left sidebar by reading cumulative state from sessionStorage.
 */

function getSidebarEnvelope() {
    const envParam = new URLSearchParams(window.location.search).get('envelope');
    if (envParam) {
        sessionStorage.setItem('selectedEnvelope', envParam);
        return envParam;
    }
    try {
        const filtersJson = sessionStorage.getItem('activeFilters');
        if (filtersJson) {
            const filters = JSON.parse(filtersJson);
            if (filters.envelope) return filters.envelope;
        }
    } catch (e) {}
    // CHV, 2026-08-17, point 2: "Remove any silent default to Montreal/NECB
    // when a valid climate has not been selected." This used to answer
    // 'necb-2017', so the sidebar named Montreal beside a result that had no
    // climate at all. The pages that draw numbers stop before the sidebar is
    // built; this returns nothing so that, if one ever does not, the sidebar
    // says nothing rather than saying Montreal.
    return sessionStorage.getItem('selectedEnvelope') || '';
}

/**
 * Builds and inserts the sidebar HTML into the placeholder element.
 * 
 * @param {string} currentLayer - "energy-selection" | "energy" | "pv" | "lpv" | "ev"
 * @param {string} mode - "selection" | "visuals" 
 */
function buildSidebar(currentLayer, mode) {
    const sidebarContainer = document.getElementById('sidebar');
    if (!sidebarContainer) return;

    // Retrieve data across layers
    const energySelections = JSON.parse(sessionStorage.getItem('energySelections') || '{"load":[], "demand":[], "generation":[]}');
    const lpvSelections = JSON.parse(sessionStorage.getItem('lpvSelections') || '{}');
    const evSelections = JSON.parse(sessionStorage.getItem('evSelections') || '{}');
    const mobilitySelections = JSON.parse(sessionStorage.getItem('mobilitySelections') || '{"transportation":[], "mobility":[]}');
    const greenSelections = JSON.parse(sessionStorage.getItem('greenSelections') || '{"infrastructure":[], "urban_agriculture":[], "energy_integrated":[]}');

    // Retrieve active envelope with fallback to sessionStorage
    const currentEnvelope = getSidebarEnvelope();

    // Retrieve basic neighbourhood info
    const params = new URLSearchParams(window.location.search);
    const codeFromURL = params.get('neighbourhood');

    let neighbourhood = null;
    let concept = null;

    // Attempt to get full neighbourhood data from memory (set in Layer 0/1)
    try {
        const storedNuInfo = JSON.parse(sessionStorage.getItem('selectedNeighbourhood'));
        if (storedNuInfo && storedNuInfo.code === codeFromURL) {
            neighbourhood = storedNuInfo;
            // Also need concept info if stored, else fallback
            const storedConcept = JSON.parse(sessionStorage.getItem('selectedConcept'));
            if (storedConcept) concept = storedConcept;
        }
    } catch (e) { console.error("Error parsing stored neighbourhood", e); }

    // Fallback: If not found in sessionStorage, try to fetch from NEIGHBOURHOODS data (if data.js is loaded)
    if (!neighbourhood && typeof NEIGHBOURHOODS !== 'undefined' && codeFromURL) {
        neighbourhood = NEIGHBOURHOODS.find(n => n.code === codeFromURL);
        if (neighbourhood && typeof CONCEPTS !== 'undefined') {
            concept = CONCEPTS.find(c => c.id === neighbourhood.conceptId);
        }
    }

    if (!neighbourhood) {
        // Essential data missing, render empty or fallback message
        sidebarContainer.innerHTML = `<div class="sidebar-error">Neighbourhood data not found. Please start from the beginning.</div>`;
        return;
    }

    // Determine the title of the top boundary based on layer visibility
    let topBoundaryTitle = 'Layer 1';
    if (currentLayer === 'lpv' || currentLayer === 'ev' || currentLayer.startsWith('layer3') || currentLayer.startsWith('layer4')) {
        topBoundaryTitle = 'Layer 1 + Layer 2';
    }

    // Sidebar HTML assembly
    let html = ``;

    // -------------------------------------------------------------
    // TOP SECTION (Purple background)
    // Cumulative Past Selections
    // -------------------------------------------------------------
    html += `
        <div class="sidebar-section sidebar-section--purple">
    `;

    // --- LAYER 1 DATA ---

    const nuImage = neighbourhood.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(neighbourhood.code);
    const conceptImage = concept ? concept.image : '';
    const conceptName = concept ? concept.name : 'Concept';

    html += `
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Concept</h3>
            <div class="sidebar-item">
                <img src="${conceptImage}" alt="${conceptName}" onerror="this.style.display='none'">
                <span>${conceptName}</span>
            </div>
        </div>
        
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Neighbourhood</h3>
            <div class="sidebar-item sidebar-item--large">
                <img src="${nuImage}" alt="${neighbourhood.code}" onerror="this.src='https://via.placeholder.com/200x150?text=${encodeURIComponent(neighbourhood.code)}'">
                <span class="code">${neighbourhood.code}</span>
            </div>
            <!-- CHV, 2026-08-17, point 8: "ensure FAR/density is shown
                 consistently if it remains part of Stage 2." Density itself was
                 already consistent, low, medium or high, in the same words on
                 the selection card, in the table, here and on the summary. What
                 was NOT consistent was the empty placeholder: this block said
                 "N/A" while every other page on the site uses the em dash.
                 There is no FAR anywhere in the tool; it is not computed and it
                 is not displayed. -->
            <div class="sidebar-properties">
                <p><strong>Context:</strong> ${neighbourhood.context || '&mdash;'}</p>
                <p><strong>Usage:</strong> ${neighbourhood.usage || '&mdash;'}</p>
                <p><strong>Layout:</strong> ${neighbourhood.layout || '&mdash;'}</p>
                <p><strong>Density:</strong> ${neighbourhood.density || '&mdash;'}</p>
            </div>
        </div>
        
        <div class="sidebar-block">
            <h3 class="sidebar-subtitle">Buildings</h3>
            <div class="sidebar-buildings">
    `;

    if (neighbourhood.buildings && neighbourhood.buildings.length > 0) {
        neighbourhood.buildings.forEach(bId => {
            const imgPath = (typeof BUILDING_IMAGES !== 'undefined') ? BUILDING_IMAGES[bId] : '';
            html += `
                <div class="sidebar-building-icon">
                    ${imgPath ? `<img src="${imgPath}" alt="${bId}" onerror="this.style.display='none'">` : ''}
                    <span>${bId}</span>
                </div>
            `;
        });
    } else {
        html += `<span>No buildings defined.</span>`;
    }

    html += `
            </div>
        </div>
    `;

    // --- LAYER 2 CUMULATIVE DATA (Only show here if we are on Layer 3 pages) ---
    if ((currentLayer === 'lpv' || currentLayer === 'ev' || currentLayer.startsWith('layer3') || currentLayer.startsWith('layer4')) && mode === 'selection') {
        html += generateLayer1Block(energySelections, false, currentLayer, neighbourhood.code);
    }

    html += `</div>`; // End top purple section

    // -------------------------------------------------------------
    // BOTTOM SECTION (Pink background)
    // Newly Added Features (Only applies in "visuals" or subsequent step mode)
    // -------------------------------------------------------------

    if (mode === 'visuals') {
        if (currentLayer === 'energy' || currentLayer === 'pv' || currentLayer === 'layer2_selection' || currentLayer === 'layer2_output_energy' || currentLayer === 'energy-selection' || currentLayer.startsWith('layer3') || currentLayer.startsWith('layer4')) {
            html += `
                <div class="sidebar-section sidebar-section--pink">
                    ${generateLayer1Block(energySelections, true, currentLayer, neighbourhood.code)}
                </div>
            `;
        }

        if (currentLayer.startsWith('layer3_output') || currentLayer.startsWith('layer4')) {
            html += `
                <div class="sidebar-section sidebar-section--pink">
                    ${generateLayer2Block(mobilitySelections, true, currentLayer, neighbourhood.code)}
                </div>
            `;
        }

        if (currentLayer.startsWith('layer4_output')) {
            html += `
                <div class="sidebar-section sidebar-section--pink">
                    ${generateLayer3Block(greenSelections, true, currentLayer, neighbourhood.code)}
                </div>
            `;
        }
    }

    sidebarContainer.innerHTML = html;

    // Add click listeners to clickable items
    setupSidebarInteractions();

    // Programmatically hide broken images inside the sidebar to prevent duplicate alt text display
    const sidebarImages = sidebarContainer.querySelectorAll('img');
    sidebarImages.forEach(img => {
        // Hide immediately if already complete and naturalWidth is 0 (load failed)
        if (img.complete && img.naturalWidth === 0) {
            img.style.display = 'none';
        }
        // Attach error event handler to hide the image if it fails to load later
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
}

/**
 * Helper to generate Layer 2 (Energy + Generation) HTML blocks
 */
function generateLayer1Block(energySelections, isClickable, currentLayer, nuCode) {
    const currentEnvelope = getSidebarEnvelope();
    let html = ``;

    // --- Load ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Load</h3>
                <div class="sidebar-items-grid">`;

    if (energySelections.load && energySelections.load.length > 0) {
        energySelections.load.forEach(val => {
            // Task 3.1: one label and one icon path, from LMN_CONFIG. The
            // literal "ThermalLoad" that used to be here 404s on GitHub Pages,
            // where the filesystem is case sensitive and the file is
            // thermalload.png.
            const sel = LMN_CONFIG.selection('load', val);
            const label = sel.label;
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            const activeClass = (isClickable && currentLayer === 'energy') ? 'sidebar-item--active' : '';
            const _envelopeSb = currentEnvelope;
            const dataset = isClickable ? `data-target="layer2_energy_breakdown.html?neighbourhood=${encodeURIComponent(nuCode)}&envelope=${encodeURIComponent(_envelopeSb)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass} ${activeClass}" ${dataset}>
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    // --- Energy Demand ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Energy Demand</h3>
                <div class="sidebar-items-grid">`;

    // Task 3.1: labels and icon paths come from LMN_CONFIG. The two maps that
    // stood here named the same measure differently from every other page and
    // built four of their five image paths in the wrong case.
    if (energySelections.demand && energySelections.demand.length > 0) {
        energySelections.demand.forEach(val => {
            const sel = LMN_CONFIG.selection('demand', val);
            const label = sel.label;
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            const activeClass = (isClickable && currentLayer === 'energy') ? 'sidebar-item--active' : '';
            const _envelopeSb2 = currentEnvelope;
            const dataset = isClickable ? `data-target="layer2_energy_breakdown.html?neighbourhood=${encodeURIComponent(nuCode)}&envelope=${encodeURIComponent(_envelopeSb2)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass} ${activeClass}" ${dataset}>
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    // --- Energy Generation ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Energy Generation</h3>
                <div class="sidebar-items-grid">`;

    // Task 3.1, same reason. The path used to be built by interpolating the
    // display label, "PV on Roof.png", against a file named "pv on roof.png".
    if (energySelections.generation && energySelections.generation.length > 0) {
        energySelections.generation.forEach(val => {
            const sel = LMN_CONFIG.selection('generation', val);
            const label = sel.label;
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            // Make generation active if currentLayer is 'pv' AND it's a visualization mode
            const activeClass = (isClickable && currentLayer === 'pv') ? 'sidebar-item--active' : '';
            const _envelopeSb = currentEnvelope;
            const dataset = isClickable ? `data-target="layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(nuCode)}&envelope=${encodeURIComponent(_envelopeSb)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass} ${activeClass}" ${dataset}>
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    return html;
}

/**
 * Helper to generate Layer 3 Mobility blocks
 */
function generateLayer2Block(mobilitySelections, isClickable, currentLayer, nuCode) {
    const currentEnvelope = getSidebarEnvelope();
    let html = ``;

    // --- Transportation ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Transportation</h3>
                <div class="sidebar-items-grid">`;

    // STAGE-05 task 5.4, DBG-006. The label and the image path both come from
    // LMN_CONFIG.selectionLabels. Nothing interpolates a display label into a
    // filename any more: that is what 404s on the case sensitive live server.
    if (mobilitySelections.transportation && mobilitySelections.transportation.length > 0) {
        mobilitySelections.transportation.forEach(val => {
            const sel = LMN_CONFIG.selection('transportation', val);
            const label = sel.label;
            const clickableClass = isClickable ? 'sidebar-item--clickable' : '';
            const _envelopeSb3 = currentEnvelope;
            const dataset = isClickable ? `data-target="layer3_ev_v2g_mobility_output.html?neighbourhood=${encodeURIComponent(nuCode)}&envelope=${encodeURIComponent(_envelopeSb3)}"` : '';

            html += `
                <div class="sidebar-item ${clickableClass}" ${dataset}>
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    // --- Mobility ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Mobility</h3>
                <div class="sidebar-items-grid">`;

    if (mobilitySelections.mobility && mobilitySelections.mobility.length > 0) {
        mobilitySelections.mobility.forEach(val => {
            const sel = LMN_CONFIG.selection('mobility', val);
            const label = sel.label;
            html += `
                <div class="sidebar-item">
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else {
        html += `<span>None selected</span>`;
    }
    html += `</div></div>`;

    return html;
}

/**
 * Helper to generate Layer 4 Green blocks
 */
function generateLayer3Block(greenSelections, isClickable, currentLayer, nuCode) {
    let html = ``;

    // --- Infrastructure ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Infrastructure</h3>
                <div class="sidebar-items-grid">`;
    if (greenSelections.infrastructure && greenSelections.infrastructure.length > 0) {
        greenSelections.infrastructure.forEach(val => {
            const sel = LMN_CONFIG.selection('infrastructure', val);
            const label = sel.label;
            html += `
                <div class="sidebar-item">
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else { html += `<span>None selected</span>`; }
    html += `</div></div>`;

    // --- Urban Agriculture ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Urban Agriculture</h3>
                <div class="sidebar-items-grid">`;
    if (greenSelections.urban_agriculture && greenSelections.urban_agriculture.length > 0) {
        greenSelections.urban_agriculture.forEach(val => {
            const sel = LMN_CONFIG.selection('urbanAgriculture', val);
            const label = sel.label;
            html += `
                <div class="sidebar-item">
                    <img src="${sel.image}" alt="${label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${label}</span>
                </div>
            `;
        });
    } else { html += `<span>None selected</span>`; }
    html += `</div></div>`;

    // --- Energy-Integrated GI ---
    html += `<div class="sidebar-block">
                <h3 class="sidebar-subtitle">Energy-Integrated GI</h3>
                <div class="sidebar-items-grid">`;
    if (greenSelections.energy_integrated && greenSelections.energy_integrated.length > 0) {
        greenSelections.energy_integrated.forEach(val => {
            const info = LMN_CONFIG.selection('energyIntegrated', val);
            html += `
                <div class="sidebar-item">
                    <img src="${info.image}" alt="${info.label}" onerror="LMN_CONFIG.iconMissing(this)">
                    <span>${info.label}</span>
                </div>
            `;
        });
    } else { html += `<span>None selected</span>`; }
    html += `</div></div>`;

    return html;
}

/**
 * Setup interactions for sidebar items that act as navigation links
 */
function setupSidebarInteractions() {
    const clickableItems = document.querySelectorAll('.sidebar-item--clickable');
    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetUrl = item.getAttribute('data-target');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
}
