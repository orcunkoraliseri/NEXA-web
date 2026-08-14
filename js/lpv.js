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
 * STAGE-07 task 7.5. Find a row by its label rather than by its position.
 *
 * The table used to be read as configs[0] to configs[3], so adding the site
 * area row that CHV item 5 asks for would have shifted every value into the
 * wrong cell in silence. D7.1.
 */
function lpvRowByLabel(configs, label) {
    const row = configs.filter(function (r) { return r.label === label; })[0];
    return row ? row.value : '—';
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

    // Config rows, addressed by label. See lpvRowByLabel above for why.
    setText('cfg-site-area',          lpvRowByLabel(configs, 'Land / site area'));
    setText('cfg-land-allocation',    lpvRowByLabel(configs, 'Land Allocation'));
    setText('cfg-usable-area',        lpvRowByLabel(configs, 'Usable Area'));
    setText('cfg-module-capacity',    lpvRowByLabel(configs, 'Module Capacity'));
    setText('cfg-installed-capacity', lpvRowByLabel(configs, 'Installed Capacity (kWp)'));

    // The specific yield is the last step of the chain and was never on screen,
    // so a reader could not get from 80.9 kWp to 103.6 MWh/yr. CHV item 5.
    setText('cfg-specific-yield',
        LMN_CONFIG.lpv.specificYieldKWhPerKWpYr.toLocaleString() + ' kWh/kWp·yr');

    // Results rows (order matches LPV_DATA: Energy Generation)
    setText('res-energy-generation',  results[0] ? results[0].value : '—');

    // STAGE-07 tasks 7.5 and 7.6, CHV Stage 7 items 5 and 6.
    setText('lpv-uniformity-note',    LMN_CONFIG.lpv.uniformityNote);
    setText('lpv-usable-note',        LMN_CONFIG.lpv.usableFractionNote);
    setText('lpv-preliminary-note',   LMN_CONFIG.lpv.preliminaryNote);
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
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            backStepBtn.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(envelope)}`;
        }
        if (nextStepBtn) {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            nextStepBtn.href = `layer4_finish_design.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(envelope)}`;
        }
    }

    // Header indicators.
    //
    // DBG-033, 2026-08-12. The scale bar used to be called as
    // renderLPVScale(65.2): a literal, identical on all 35 neighbourhoods,
    // printed as "65.2 kWh/m²·yr" beside real results. It traces to no upstream
    // document, no CSV and no calculation in this repository. CHV's release rule
    // forbids an unsupported figure that looks like a normal result, and Stage 7
    // item 7 forbids an energy number for anything without a model, so it is
    // removed rather than explained. renderLPVScale is kept and unused: the bar
    // itself is sound and can be called again the day a defined intensity
    // exists for landscape PV.
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