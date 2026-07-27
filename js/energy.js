/**
 * Energy Treemap Visualization
 * Renders a treemap showing energy breakdown by end-use category
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
 * Render the EUI scale bar showing where this neighbourhood's energy usage falls
 * @param {number} euiValue - The EUI value for the neighbourhood
 */
function renderEUIScale(euiValue) {
    const container = document.getElementById('eui-scale-container');
    if (!container) return;

    // EUI range constants (same as in app.js)
    const EUI_MIN = 56;
    const EUI_MAX = 240;

    // Calculate position on scale (0-100%)
    const position = Math.min(100, Math.max(0, ((euiValue - EUI_MIN) / (EUI_MAX - EUI_MIN)) * 100));

    // Calculate color based on position (green -> yellow -> red)
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
            <span class="eui-scale-value" style="color: ${color}">${euiValue.toFixed(1)}</span>
            <span class="eui-scale-unit">kWh/m²·yr</span>
            <div class="eui-scale-bar">
                <div class="eui-scale-indicator" style="left: ${position}%"></div>
            </div>
            <div class="eui-scale-labels">
                <span>${EUI_MIN}</span>
                <span>${EUI_MAX}</span>
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

/**
 * Calculate percentage of each energy category
 * @param {Array} breakdown - Array of energy breakdown items
 * @param {number} total - Total energy value
 * @returns {Array} Breakdown with percentages added
 */
function calculatePercentages(breakdown, total) {
    return breakdown
        .filter(item => item.value > 0)
        .map(item => ({
            ...item,
            percentage: ((item.value / total) * 100).toFixed(1)
        }))
        .sort((a, b) => b.value - a.value);
}

/**
 * Squarified treemap algorithm
 * @param {Array} data - Array of items with value property
 * @param {number} x - Starting x position
 * @param {number} y - Starting y position
 * @param {number} width - Available width
 * @param {number} height - Available height
 * @returns {Array} Items with x, y, width, height properties
 */
function squarify(data, x, y, width, height) {
    if (data.length === 0) return [];
    if (data.length === 1) {
        return [{
            ...data[0],
            x: x,
            y: y,
            width: width,
            height: height
        }];
    }

    const total = data.reduce((sum, item) => sum + item.value, 0);
    const sortedData = [...data].sort((a, b) => b.value - a.value);

    // Determine if we should split horizontally or vertically
    const isVertical = height > width;

    // Find the best split point
    let row = [];
    let rowTotal = 0;
    let remaining = [...sortedData];

    for (let i = 0; i < sortedData.length; i++) {
        const item = sortedData[i];
        const testRow = [...row, item];
        const testRowTotal = rowTotal + item.value;

        // Calculate aspect ratios
        const currentWorst = row.length > 0 ? worstAspectRatio(row, rowTotal, total, width, height, isVertical) : Infinity;
        const newWorst = worstAspectRatio(testRow, testRowTotal, total, width, height, isVertical);

        if (newWorst < currentWorst || row.length === 0) {
            row.push(item);
            rowTotal += item.value;
            remaining = sortedData.slice(i + 1);
        } else {
            break;
        }
    }

    // Layout the row
    const rowRatio = rowTotal / total;
    const results = [];

    if (isVertical) {
        const rowHeight = height * rowRatio;
        let currentX = x;

        row.forEach(item => {
            const itemWidth = width * (item.value / rowTotal);
            results.push({
                ...item,
                x: currentX,
                y: y,
                width: itemWidth,
                height: rowHeight
            });
            currentX += itemWidth;
        });

        // Recursively layout remaining items
        if (remaining.length > 0) {
            const remainingResults = squarify(remaining, x, y + rowHeight, width, height - rowHeight);
            results.push(...remainingResults);
        }
    } else {
        const rowWidth = width * rowRatio;
        let currentY = y;

        row.forEach(item => {
            const itemHeight = height * (item.value / rowTotal);
            results.push({
                ...item,
                x: x,
                y: currentY,
                width: rowWidth,
                height: itemHeight
            });
            currentY += itemHeight;
        });

        // Recursively layout remaining items
        if (remaining.length > 0) {
            const remainingResults = squarify(remaining, x + rowWidth, y, width - rowWidth, height);
            results.push(...remainingResults);
        }
    }

    return results;
}

/**
 * Calculate worst aspect ratio in a row
 */
function worstAspectRatio(row, rowTotal, total, width, height, isVertical) {
    if (row.length === 0) return Infinity;

    const rowRatio = rowTotal / total;
    const size = isVertical ? height * rowRatio : width * rowRatio;
    const otherSize = isVertical ? width : height;

    let worst = 0;
    row.forEach(item => {
        const itemSize = otherSize * (item.value / rowTotal);
        const aspect = Math.max(size / itemSize, itemSize / size);
        worst = Math.max(worst, aspect);
    });

    return worst;
}

/**
 * Render the treemap
 * @param {string} neighbourhoodCode - The neighbourhood code
 */
function renderTreemap(neighbourhoodCode) {
    const container = document.getElementById('treemap-container');
    const titleElement = document.getElementById('neighbourhood-title');
    const legendContainer = document.getElementById('legend');

    // Read envelope from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const envelope = urlParams.get('envelope') || 'necb-2017';

    // Read load and demand selections from sessionStorage
    const selections = JSON.parse(
        sessionStorage.getItem('energySelections') || '{"load":[], "demand":[]}'
    );
    const loadSelections = selections.load || [];
    const demandSelections = selections.demand || [];

    // 1. Determine reference envelope and base level.
    // For high-performance zone envelopes (high-performance-z4, -z5, -z6, etc.)
    // the data is stored directly under that key — do NOT strip the prefix.
    // Only the legacy "high-performance-necb" / "high-performance-ashrae" pair
    // needs a base-envelope fallback mapping.
    let refEnvelope = envelope;
    let baseLevel = "DEFAULT";

    if (envelope.startsWith("high-performance-")) {
        baseLevel = "EEM1";
        // For legacy NECB/ASHRAE HP variants, also maintain a base reference
        if (envelope === "high-performance-necb") {
            refEnvelope = "necb-2017";
        } else if (envelope === "high-performance-ashrae") {
            refEnvelope = "ashrae";
        }
        // For zone-specific HP variants (high-performance-z4, -z5, etc.)
        // the envelope key itself exists directly in ENVELOPE_ENERGY_DATA —
        // so refEnvelope stays as-is (the full "high-performance-z*" key).
    }

    // 2. Fetch the reference data for all needed columns from the standard envelope
    const baseDefault = getEnergyData(refEnvelope, neighbourhoodCode, "DEFAULT");
    const baseEem1 = getEnergyData(refEnvelope, neighbourhoodCode, "EEM1");
    const baseEem2 = getEnergyData(refEnvelope, neighbourhoodCode, "EEM2");
    const baseEem3 = getEnergyData(refEnvelope, neighbourhoodCode, "EEM3");
    const baseEem4 = getEnergyData(refEnvelope, neighbourhoodCode, "EEM4");
    const baseIal = getEnergyData(refEnvelope, neighbourhoodCode, "IAL");

    let energyData = null;
    let colName = "Baseline";

    if (!baseDefault) {
        container.innerHTML = '<p class="error-message">Energy data not found for this neighbourhood and configuration.</p>';
        titleElement.textContent = 'Energy Breakdown';
        return;
    }

    const hasHP = demandSelections.includes('cop4') || demandSelections.includes('cop3.5') || demandSelections.includes('cop3');
    const hasDhw = demandSelections.includes('dhw');
    const hasAppliances = demandSelections.includes('appliances');

    if (loadSelections.includes('thermal_load')) {
        energyData = baseIal || baseDefault;
        colName = "Thermal Load";
    } else {
        // Baseline is EEM1 for high-performance envelope, DEFAULT for standard envelope
        const baseDataset = (baseLevel === "EEM1" && baseEem1) ? baseEem1 : baseDefault;
        
        let startDataset;
        if (hasHP) {
            if (hasDhw && hasAppliances && baseEem4) {
                startDataset = baseEem4;
            } else if (hasDhw && baseEem3) {
                startDataset = baseEem3;
            } else if (baseEem2) {
                startDataset = baseEem2;
            } else {
                startDataset = baseDataset;
            }
        } else {
            startDataset = baseDataset;
        }

        // Deep clone starting breakdown
        const breakdown = JSON.parse(JSON.stringify(startDataset.breakdown));
        const pv = startDataset.pv;

        // Calculate individual savings for DHW (EEM2 -> EEM3)
        const dhwSavings = {};
        if (baseEem2 && baseEem3) {
            baseEem2.breakdown.forEach(item => {
                const targetItem = baseEem3.breakdown.find(i => i.name === item.name);
                if (targetItem) {
                    dhwSavings[item.name] = item.value - targetItem.value;
                }
            });
        }

        // Calculate individual savings for Appliances (EEM3 -> EEM4)
        const appSavings = {};
        if (baseEem3 && baseEem4) {
            baseEem3.breakdown.forEach(item => {
                const targetItem = baseEem4.breakdown.find(i => i.name === item.name);
                if (targetItem) {
                    appSavings[item.name] = item.value - targetItem.value;
                }
            });
        }

        // Apply DHW savings if selected but not in starting dataset
        if (hasDhw && !hasHP) {
            breakdown.forEach(item => {
                const saving = dhwSavings[item.name] || 0;
                item.value = Math.max(0, item.value - saving);
            });
        }

        // Apply Appliances savings if selected but not in starting dataset (not started from EEM4)
        const startedFromEem4 = (hasHP && hasDhw && hasAppliances);
        if (hasAppliances && !startedFromEem4) {
            breakdown.forEach(item => {
                const saving = appSavings[item.name] || 0;
                item.value = Math.max(0, item.value - saving);
            });
        }

        // Recalculate total
        const total = breakdown.reduce((sum, item) => sum + item.value, 0);

        energyData = {
            total: parseFloat(total.toFixed(1)),
            breakdown: breakdown,
            pv: pv
        };

        // Determine title
        const parts = [];
        if (hasHP) parts.push("Heat Pump (COP 4)");
        if (hasDhw) parts.push("Heat Pump for DHW");
        if (hasAppliances) parts.push("Efficient Appliances");

        if (parts.length === 0) {
            colName = envelope.startsWith("high-performance-") ? "High-Performance Envelope" : "Baseline";
        } else {
            colName = parts.join(" + ");
        }
    }

    const envelopeNames = {
        'necb-2017': 'Standard (NECB Zone 6, Montréal)',
        'ashrae': 'Standard (ASHRAE)',
        'necb-z4': 'NECB Zone 4 (Windsor)',
        'necb-z5': 'NECB Zone 5 (Toronto / Ottawa)',
        'necb-z6': 'NECB Zone 6 (Montréal)',
        'necb-z7a': 'NECB Zone 7A (Calgary)',
        'necb-z7b': 'NECB Zone 7B (Whitehorse)',
        'necb-z8': 'NECB Zone 8 (Yellowknife)',
        'high-performance-necb': 'High Performance based on NECB',
        'high-performance-ashrae': 'High Performance based on ASHRAE',
        'high-performance-z4': 'High Perf. Zone 4 (Windsor)',
        'high-performance-z5': 'High Perf. Zone 5 (Toronto / Ottawa)',
        'high-performance-z6': 'High Perf. Zone 6 (Montréal)',
        'high-performance-z7a': 'High Perf. Zone 7A (Calgary)',
        'high-performance-z7b': 'High Perf. Zone 7B (Whitehorse)',
        'high-performance-z8': 'High Perf. Zone 8 (Yellowknife)'
    };
    const envName = envelopeNames[envelope] || envelope;
    titleElement.textContent = `Layer 2: ${colName} Breakdown of ${neighbourhoodCode} (${envName})`;

    // Render EUI Scale
    renderEUIScale(energyData.total);

    // Render Energy Status icon
    renderEnergyStatus(neighbourhoodCode);

    // Set back step button href to energy selection page
    const backStepBtn = document.getElementById('back-step-btn');
    if (backStepBtn) {
        backStepBtn.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    }

    // Set next step button href
    const nextStepBtn = document.getElementById('next-step-btn');
    if (nextStepBtn) {
        nextStepBtn.href = `layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}&from=consumption`;
    }

    // Use full breakdown from the new data
    let filteredBreakdown = energyData.breakdown;

    // Recalculate total from filtered data
    const filteredTotal = filteredBreakdown.reduce(
        (sum, item) => sum + item.value, 0
    );

    // Calculate percentages and filter zero values
    const breakdown = calculatePercentages(filteredBreakdown, filteredTotal);

    // Get container dimensions
    const containerWidth = container.clientWidth || 1000;
    const containerHeight = 450;
    container.style.height = `${containerHeight}px`;

    // Calculate squarified layout
    const layout = squarify(breakdown, 0, 0, containerWidth, containerHeight);

    // Clear container
    container.innerHTML = '';

    // Create treemap items
    layout.forEach(item => {
        const div = document.createElement('div');
        div.className = 'treemap-item';
        div.style.left = `${item.x}px`;
        div.style.top = `${item.y}px`;
        div.style.width = `${item.width}px`;
        div.style.height = `${item.height}px`;
        div.style.backgroundColor = ENERGY_COLORS[item.name] || '#6b7280';

        // Always show content, adjust font size based on available space
        const minDimension = Math.min(item.width, item.height);
        const showFull = item.width > 100 && item.height > 80;
        const showMedium = item.width > 60 && item.height > 50;

        if (showFull) {
            div.innerHTML = `
                <span class="treemap-name">${item.name}</span>
                <span class="treemap-value">${item.value.toFixed(1)} kWh/m²·yr</span>
                <span class="treemap-percent">${item.percentage}%</span>
            `;
        } else if (showMedium) {
            div.innerHTML = `
                <span class="treemap-value" style="font-size: 0.9rem">${item.value.toFixed(1)}</span>
                <span class="treemap-percent" style="font-size: 0.7rem">${item.percentage}%</span>
            `;
        } else if (minDimension > 30) {
            div.innerHTML = `<span class="treemap-value" style="font-size: 0.8rem">${item.value.toFixed(1)}</span>`;
        }

        // Tooltip on hover
        div.title = `${item.name}: ${item.value.toFixed(1)} kWh/m²·yr (${item.percentage}%)`;

        container.appendChild(div);
    });

    // Generate legend
    renderLegend(breakdown, legendContainer);
}

/**
 * Render the legend
 * @param {Array} breakdown - Energy breakdown data
 * @param {HTMLElement} container - Legend container
 */
function renderLegend(breakdown, container) {
    container.innerHTML = '';

    breakdown.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <span class="legend-color" style="background-color: ${ENERGY_COLORS[item.name] || '#6b7280'}"></span>
            <span class="legend-name">${item.name}</span>
            <span class="legend-value">${item.value.toFixed(1)} (${item.percentage}%)</span>
        `;
        container.appendChild(legendItem);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (neighbourhoodCode) {
        // Build the sidebar in visuals mode
        if (typeof buildSidebar === 'function') {
            buildSidebar('energy', 'visuals');
        }

        renderTreemap(neighbourhoodCode);

        // Update nav buttons
        const backBtn = document.getElementById('back-step-btn');
        const nextBtn = document.getElementById('next-step-btn');

        const _envelopeForNav = new URLSearchParams(window.location.search).get('envelope') || 'necb-2017';
        if (backBtn) backBtn.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(_envelopeForNav)}`;
        // Assume next page from Energy should be PV Generation (renderTreemap overwrites this with envelope included)
        if (nextBtn) nextBtn.href = `layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(_envelopeForNav)}`;

        // Re-render on window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                renderTreemap(neighbourhoodCode);
            }, 100);
        });
    } else {
        document.getElementById('treemap-container').innerHTML =
            '<p class="error-message">No neighbourhood specified. Please select a neighbourhood from the results page.</p>';
    }
});
