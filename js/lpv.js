/**
 * LPV Profile Page
 * Reads LPV_DATA for the selected neighbourhood and populates the results table.
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null}
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Render the LPV scale bar in the header.
 * @param {number} value - Scale value (0–100)
 */
function renderLPVScale(value) {
    const container = document.getElementById('lpv-scale-container');
    if (!container) return;

    const MIN = 0;
    const MAX = 100;
    const position = Math.min(100, Math.max(0, ((value - MIN) / (MAX - MIN)) * 100));

    let color;
    if (position <= 50) {
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        const ratio = (position - 50) / 50;
        const r = Math.round(234 + (239 - 234) * ratio);
        const g = Math.round(179 + (68 - 179) * ratio);
        const b = Math.round(8 + (68 - 8) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    }

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${value.toFixed(1)}</span>
            <span class="eui-scale-unit">kWh/m²·yr</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${MIN}</span>
                <span>${MAX}</span>
            </div>
        </div>
    `;
}

/**
 * Render the Energy Status icon in the header.
 * @param {string} neighbourhoodCode
 */
function renderEnergyStatus(neighbourhoodCode) {
    const container = document.getElementById('energy-status-container');
    if (!container) return;

    const neighbourhood = NEIGHBOURHOODS.find(n => n.code === neighbourhoodCode);
    if (!neighbourhood || !neighbourhood.energyStatus) {
        container.innerHTML = '';
        return;
    }

    const status = neighbourhood.energyStatus;
    const statusImage = ENERGY_STATUS_IMAGES[status];

    if (statusImage) {
        container.innerHTML = `
            <div class="energy-status-header-display">
                <img src="${statusImage}" alt="${status}" title="${status}" class="energy-status-header-icon">
            </div>
        `;
    }
}

/**
 * Split LPV_DATA rows by category for the given neighbourhood code.
 * @param {string} code - e.g. "RC-R"
 * @returns {{ configs: Array<{label:string, value:string}>, results: Array<{label:string, value:string}> }}
 */
function getLPVDataForNeighbourhood(code) {
    const configs = LPV_DATA.rows
        .filter(r => r.category === 'Config.')
        .map(r => ({ label: r.label, value: r.values[code] || '—' }));

    const results = LPV_DATA.rows
        .filter(r => r.category === 'Results')
        .map(r => ({ label: r.label, value: r.values[code] || '—' }));

    return { configs, results };
}

/**
 * Set the text content of an element by id.
 * @param {string} id
 * @param {string} value
 */
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

/**
 * Populate all LPV table cells for the given neighbourhood code.
 * Element IDs must match those defined in layer4_lpv_breakdown.html.
 * @param {string} code
 */
function populateLPVTable(code) {
    const { configs, results } = getLPVDataForNeighbourhood(code);

    // Config rows (order matches LPV_DATA: Land Allocation, Usable Area, Module Capacity, Installed Capacity)
    setText('cfg-land-allocation',    configs[0] ? configs[0].value : '—');
    setText('cfg-usable-area',        configs[1] ? configs[1].value : '—');
    setText('cfg-module-capacity',    configs[2] ? configs[2].value : '—');
    setText('cfg-installed-capacity', configs[3] ? configs[3].value : '—');

    // Results rows (order matches LPV_DATA: Energy Generation)
    setText('res-energy-generation',  results[0] ? results[0].value : '—');
}

// Maps energy_integrated selection values to their image paths and display labels
const GI_IMAGE_MAP = {
    'pv_green_roofs': {
        src:   'Content/Images_Layer4_EnergyIntegratedGI/pv-green roofs integrated modules.png',
        label: 'PV-Green Roofs'
    },
    'pv_vgs': {
        src:   'Content/Images_Layer4_EnergyIntegratedGI/lpv.png',
        label: 'Landscape PV'
    }
};

/**
 * Build a single LPV header card HTML string.
 * @param {string} src
 * @param {string} label
 * @param {string} gridClass  — one of: lpv-card--gi, lpv-card--neighbourhood, lpv-card--lpv
 * @returns {string}
 */
function makeLPVImageCard(src, label, gridClass) {
    return `
        <div class="lpv-header-card ${gridClass || ''}">
            <img src="${src}" alt="${label}" class="lpv-header-card-img"
                 onerror="this.parentElement.style.display='none'">
            <span class="lpv-header-card-label">${label}</span>
        </div>`;
}

/**
 * Render the visual header grid above the LPV table.
 * Grid layout (2 cols × 2 rows):
 *   top-left    → selected GI option image
 *   bottom-left → neighbourhood image
 *   right col   → LPV.png (spans both rows)
 * @param {string} code - neighbourhood code e.g. "RC-R"
 */
function renderLPVVisualHeader(code) {
    const container = document.getElementById('lpv-visual-header');
    if (!container) return;

    let cards = '';

    // 1. Selected Energy-Integrated GI option(s) from sessionStorage — top-left
    const stored = sessionStorage.getItem('greenSelections');
    const greenSelections = stored ? JSON.parse(stored) : { energy_integrated: [] };
    const energyIntegrated = greenSelections.energy_integrated || [];

    // Only the first GI selection occupies the top-left cell; extras are ignored in this layout
    const firstGI = energyIntegrated[0] ? GI_IMAGE_MAP[energyIntegrated[0]] : null;
    if (firstGI) {
        cards += makeLPVImageCard(firstGI.src, firstGI.label, 'lpv-card--gi');
    }
    // When no GI is selected, omit the placeholder so the neighbourhood card
    // becomes the first child in col 1 and spans the full left column height.

    // 2. Neighbourhood image — left column (spans both rows when GI is absent)
    const nuData = (typeof NEIGHBOURHOODS !== 'undefined')
        ? NEIGHBOURHOODS.find(function(n) { return n.code === code; })
        : null;
    const nuGridClass = firstGI ? 'lpv-card--neighbourhood' : 'lpv-card--neighbourhood lpv-card--neighbourhood-full';
    if (nuData && nuData.image) {
        cards += makeLPVImageCard(nuData.image, code, nuGridClass);
    }

    // 3. LPV.png — right column, spans both rows
    cards += makeLPVImageCard(
        'Content/Images_LPVProfile/lpv.png',
        'LPV Profile',
        'lpv-card--lpv'
    );

    container.innerHTML = cards;
}

/**
 * Initialize the LPV breakdown page.
 */
function initLPVPage() {
    const code = getNeighbourhoodFromURL();

    // Header title
    const titleElement = document.getElementById('neighbourhood-title');
    if (titleElement) {
        titleElement.textContent = code
            ? `Layer 4: Land-PV Generation of ${code}`
            : 'Layer 4: Land-PV Profile';
    }

    // Nav buttons
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');
    if (code) {
        if (backStepBtn) {
            backStepBtn.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(code)}`;
        }
        if (nextStepBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || 'necb-2017';
            nextStepBtn.href = `layer4_finish_design.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(envelope)}`;
        }
    }

    // Header indicators
    renderLPVScale(65.2);
    if (code) renderEnergyStatus(code);

    // Data table
    if (code) populateLPVTable(code);

    // Visual header row
    if (code) renderLPVVisualHeader(code);

    // Sidebar
    if (typeof buildSidebar === 'function' && code) {
        buildSidebar('lpv', 'selection');
    }
}

document.addEventListener('DOMContentLoaded', initLPVPage);