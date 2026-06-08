/**
 * PV Profile Page
 * Handles the PV generation profile visualization
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
 * Render the PV scale bar
 * @param {number} value - The PV generation value
 */
function renderPVScale(value) {
    const container = document.getElementById('pv-scale-container');
    if (!container) return;

    // Scale range 0-100
    const MIN = 0;
    const MAX = 100;

    // Calculate position on scale (0-100%)
    const position = Math.min(100, Math.max(0, ((value - MIN) / (MAX - MIN)) * 100));

    // Calculate color based on position (Green -> Yellow -> Red)
    // Using the same logic as EUI scale for visual consistency
    let color;
    if (position <= 50) {
        // Green to Yellow
        const ratio = position / 50;
        const r = Math.round(34 + (234 - 34) * ratio);
        const g = Math.round(197 + (234 - 197) * ratio);
        const b = Math.round(94 + (8 - 94) * ratio);
        color = `rgb(${r}, ${g}, ${b})`;
    } else {
        // Yellow to Red
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
 * Render the Energy Status icon
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function renderEnergyStatus(neighbourhoodCode) {
    const container = document.getElementById('energy-status-container');
    if (!container) return;

    // Find the neighbourhood to get its energy status
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

// ── Heatmap canvas renderer ─────────────────────────────────────────────────

// RdYlBu_r colorscale stops (matplotlib equivalent)
const RDYLBU_R = [
    [0.000, [49,  54,  149]],
    [0.125, [69,  117, 180]],
    [0.250, [116, 173, 209]],
    [0.375, [171, 217, 233]],
    [0.500, [255, 255, 191]],
    [0.625, [253, 174, 97 ]],
    [0.750, [244, 109, 67 ]],
    [0.875, [215, 48,  39 ]],
    [1.000, [165, 0,   38 ]]
];

function heatmapColor(value, vmin, vmax) {
    const t = Math.max(0, Math.min(1, (value - vmin) / (vmax - vmin)));
    let lo = RDYLBU_R[0], hi = RDYLBU_R[RDYLBU_R.length - 1];
    for (let i = 0; i < RDYLBU_R.length - 1; i++) {
        if (t <= RDYLBU_R[i + 1][0]) { lo = RDYLBU_R[i]; hi = RDYLBU_R[i + 1]; break; }
    }
    const f = lo[0] === hi[0] ? 0 : (t - lo[0]) / (hi[0] - lo[0]);
    return [
        Math.round(lo[1][0] + f * (hi[1][0] - lo[1][0])),
        Math.round(lo[1][1] + f * (hi[1][1] - lo[1][1])),
        Math.round(lo[1][2] + f * (hi[1][2] - lo[1][2]))
    ];
}

/**
 * Draw a 4-season hourly heatmap on a canvas element.
 * Replicates the matplotlib RdYlBu_r heatmap from the .py scripts.
 * Data comes from HOURLY_HEATMAP_DATA (heatmap-data.js) — no fetch needed.
 * @param {number[][]} rows - 24 rows × 4 seasons (row 0 = 12 AM)
 * @param {string[]} seasons - season labels e.g. ['Mar 21', 'Jun 21', ...]
 * @param {string} canvasId - target canvas element ID
 */
function drawHeatmapCanvas(rows, seasons, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const container = canvas.parentElement;
    const W = container ? container.clientWidth || 360 : 360;
    const H = 260;
    canvas.width  = W;
    canvas.height = H;

    const nHours   = rows.length;    // 24
    const nSeasons = seasons.length; // 4

    const ML = 50, MR = 66, MT = 14, MB = 28;
    const plotW  = W - ML - MR;
    const plotH  = H - MT - MB;
    const colGap = 7;
    const colW   = (plotW - colGap * (nSeasons - 1)) / nSeasons;
    const cellH  = plotH / nHours;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#f5f7fa';
    ctx.fillRect(0, 0, W, H);

    // ── Heatmap cells ──────────────────────────────────────────
    for (let s = 0; s < nSeasons; s++) {
        const colX = ML + s * (colW + colGap);
        for (let h = 0; h < nHours; h++) {
            const val = rows[h][s];
            const [r, g, b] = heatmapColor(val, 0, 900);
            // origin='lower': hour 0 at bottom of plot
            const cellY = MT + plotH - (h + 1) * cellH;
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fillRect(colX, cellY, colW, cellH + 0.5);
        }
    }

    // ── Y-axis labels & ticks (left, origin=lower) ─────────────
    ctx.fillStyle   = '#555';
    ctx.font        = '10px Inter, sans-serif';
    ctx.textAlign   = 'right';
    ctx.textBaseline = 'middle';
    const yTicks = [
        { h: 0,  label: '12 AM' },
        { h: 6,  label: '6 AM'  },
        { h: 12, label: '12 PM' },
        { h: 18, label: '6 PM'  },
        { h: 24, label: '12 AM' }
    ];
    yTicks.forEach(({ h, label }) => {
        const y = MT + plotH - h * cellH;
        ctx.fillText(label, ML - 5, y);
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth   = 0.5;
        ctx.beginPath();
        ctx.moveTo(ML - 3, y);
        ctx.lineTo(ML,     y);
        ctx.stroke();
    });

    // ── Season labels (x-axis, below each column) ──────────────
    ctx.fillStyle    = '#555';
    ctx.font         = '10px Inter, sans-serif';
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'top';
    for (let s = 0; s < nSeasons; s++) {
        const colX = ML + s * (colW + colGap);
        ctx.fillText(seasons[s], colX + colW / 2, MT + plotH + 6);
    }

    // ── Colorbar ────────────────────────────────────────────────
    const cbX = W - MR + 12;
    const cbW = 11;
    const cbH = plotH;

    // Gradient: top = red (900), bottom = blue (0)
    for (let py = 0; py < cbH; py++) {
        const val = (1 - py / cbH) * 900;
        const [r, g, b] = heatmapColor(val, 0, 900);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(cbX, MT + py, cbW, 1);
    }

    // Colorbar border
    ctx.strokeStyle = '#bbb';
    ctx.lineWidth   = 0.5;
    ctx.strokeRect(cbX, MT, cbW, cbH);

    // Colorbar ticks & labels
    ctx.fillStyle    = '#555';
    ctx.font         = '9px Inter, sans-serif';
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'middle';
    [0, 180, 360, 540, 720, 900].forEach(val => {
        const ty = MT + cbH - (val / 900) * cbH;
        ctx.fillText(val, cbX + cbW + 3, ty);
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth   = 0.5;
        ctx.beginPath();
        ctx.moveTo(cbX + cbW, ty);
        ctx.lineTo(cbX + cbW + 3, ty);
        ctx.stroke();
    });

    // Colorbar title
    ctx.fillStyle    = '#555';
    ctx.font         = '9px Inter, sans-serif';
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('kWh/m²', cbX, MT - 3);
}

/**
 * Render both wall and roof hourly heatmaps for a neighbourhood.
 * @param {string} neighbourhoodCode
 */
function renderHourlyHeatmaps(neighbourhoodCode) {
    if (!HOURLY_HEATMAP_DATA || !HOURLY_HEATMAP_DATA[neighbourhoodCode]) return;
    const entry   = HOURLY_HEATMAP_DATA[neighbourhoodCode];
    const seasons = HOURLY_HEATMAP_DATA.seasons;
    drawHeatmapCanvas(entry.wall, seasons, 'wall-hourly-chart');
    drawHeatmapCanvas(entry.roof, seasons, 'roof-hourly-chart');
}

// ── Image updater ────────────────────────────────────────────────────────────

/**
 * Update PV profile images for specific neighbourhoods.
 * RC-HR2 uses the legacy layout with its own images; all others use the new 3-row layout.
 * Hourly heatmaps are rendered to canvas from embedded data (no fetch).
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function updatePVImages(neighbourhoodCode) {
    if (neighbourhoodCode === 'RC-HR2') return;

    // For new neighbourhoods not in RC folder, adjust base path if needed
    // Assuming they are added in their respective folders later, or just hide if missing
    const prefix = neighbourhoodCode.split('-')[0];
    const base = `Content/Images_PVpage/${prefix}/${neighbourhoodCode}`;
    const imgMap = {
        'wall-ir-img':     `${base}/${neighbourhoodCode}_Wall_IR_compressed_cropped.png`,
        'wall-dsh-img':    `${base}/${neighbourhoodCode}_Wall_DSH_compressed_cropped.png`,
        'roof-ir-img':     `${base}/${neighbourhoodCode}_Roof_IR_compressed_cropped.png`,
        'roof-dsh-img':    `${base}/${neighbourhoodCode}_Roof_DSH_compressed_cropped.png`,
    };

    for (const [id, src] of Object.entries(imgMap)) {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'block';
            el.onerror = function() { this.style.display = 'none'; };
            el.src = src;
        }
    }

    // Render hourly heatmaps from embedded data
    renderHourlyHeatmaps(neighbourhoodCode);
}

/**
 * Determine whether RoP should be shown based on the stored energy selection.
 * RoP is only applicable when Heat Pump COP 4 is selected.
 * @returns {boolean} True if cop4 demand is selected.
 */
function isCOP4Selected() {
    try {
        const raw = sessionStorage.getItem('energySelections');
        if (!raw) return false;
        const selections = JSON.parse(raw);
        return Array.isArray(selections.demand) && selections.demand.includes('cop4');
    } catch (e) {
        return false;
    }
}

/**
 * Update PV parameter values dynamically.
 * RoP is only displayed when Heat Pump COP 4 is the active demand selection;
 * for all other selections (COP 3 or Thermal Load COP 1) it is shown as —.
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function updatePVParameters(neighbourhoodCode) {
    if (!PV_GENERATION_DATA || !PV_GENERATION_DATA[neighbourhoodCode]) return;

    const data = PV_GENERATION_DATA[neighbourhoodCode];
    const showRoP = isCOP4Selected();
    const gcrValue = data.gcr ? (parseFloat(data.gcr) * 100).toFixed(0) + '%' : '';
    const ropValue = showRoP ? data.rop : '—';

    const isLegacy = (neighbourhoodCode === 'RC-HR2');

    if (isLegacy) {
        // Populate legacy layout IDs
        const legacyMap = {
            '#pv-surface-val-legacy':    data.surface,
            '#pv-efficiency-val-legacy': data.efficiency,
            '#pv-mounting-val-legacy':   data.mounting,
            '#pv-gcr-val-legacy':        gcrValue,
            '#pv-generation-val-legacy': data.generation,
            '#pv-rop-val-legacy':        ropValue
        };
        for (const [selector, value] of Object.entries(legacyMap)) {
            const el = document.querySelector(selector);
            if (el && value !== undefined) el.textContent = value;
        }
    } else {
        // Populate new layout IDs
        const newMap = {
            '#pv-surface-val':    data.surface,
            '#pv-efficiency-val': data.efficiency,
            '#pv-mounting-val':   data.mounting,
            '#pv-gcr-val':        gcrValue,
            '#pv-generation-val': data.generation,
            '#pv-rop-val':        ropValue
        };
        for (const [selector, value] of Object.entries(newMap)) {
            const el = document.querySelector(selector);
            if (el && value !== undefined) el.textContent = value;
        }
    }
}

/**
 * Initialize the PV page
 */
function initPVPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');
    const backStepBtn = document.getElementById('back-step-btn');
    const nextStepBtn = document.getElementById('next-step-btn');

    // Render scale with random value (0-100 range as proxy)
    renderPVScale(70.5);

    // Toggle between new 3-row layout and legacy layout (RC-HR2 only)
    const isLegacy = (neighbourhoodCode === 'RC-HR2');
    const newLayout = document.getElementById('pv-new-layout');
    const legacyLayout = document.getElementById('pv-legacy-layout');
    if (newLayout) newLayout.style.display = isLegacy ? 'none' : 'block';
    if (legacyLayout) legacyLayout.style.display = isLegacy ? 'block' : 'none';

    // Render Energy Status icon and PV Images
    if (neighbourhoodCode) {
        renderEnergyStatus(neighbourhoodCode);
        updatePVImages(neighbourhoodCode);
        updatePVParameters(neighbourhoodCode);
    }

    if (neighbourhoodCode) {
        // Update title
        titleElement.textContent = `Layer 2: PV Generation of ${neighbourhoodCode}`;

        // Build sidebar
        if (typeof buildSidebar === 'function') {
            buildSidebar('pv', 'visuals');
        }

        // Set back button href to energy-selection page
        if (backStepBtn) {
            backStepBtn.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }

        // Set next step button href
        if (nextStepBtn) {
            nextStepBtn.href = `layer3_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
        }
    } else {
        titleElement.textContent = 'PV Generation Profile';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPVPage);
