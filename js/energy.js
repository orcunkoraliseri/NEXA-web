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
 * DBG-024, P0, task 3.11.
 *
 * The stored `total` is the real EUI, the EnergyPlus "Total End Uses" row.
 * The stored `breakdown` holds only six of the fourteen end uses EnergyPlus
 * reports, so summing it understates the EUI. Until 2026-08-10 this page
 * summed the six and showed 72.3 while the final summary page showed the
 * stored 86.8 for the same design.
 *
 * This returns the residual, total minus the six, which is the seven dropped
 * buckets. It is never negative and is 0 when the six already add up.
 *
 * @param {Object} dataset - a stored { total, breakdown[], pv } object
 * @returns {number} the residual in kWh/m²·yr, one decimal place
 */
function otherEndUseResidual(dataset) {
    if (!dataset || !Array.isArray(dataset.breakdown)) return 0;
    const six = dataset.breakdown.reduce((sum, item) => sum + item.value, 0);
    const residual = (dataset.total || 0) - six;
    return residual > 0.05 ? parseFloat(residual.toFixed(1)) : 0;
}

/**
 * DBG-024. Append the residual as a seventh, labelled block, so the chart adds
 * up to the number printed above it.
 * @param {Array} breakdown - the six stored end uses
 * @param {number} residual - from otherEndUseResidual
 * @returns {Array} six or seven blocks
 */
function withOtherEndUse(breakdown, residual) {
    if (!residual) return breakdown;
    return breakdown.concat([{
        name: (typeof LMN_CONFIG !== 'undefined') ? LMN_CONFIG.otherEndUseLabel : 'Other',
        value: residual,
        description: (typeof LMN_CONFIG !== 'undefined') ? LMN_CONFIG.otherEndUseDescription : ''
    }]);
}

/**
 * Task 3.4, D3.2. State in one sentence what the number above actually is.
 * Measured, not assumed: site energy, the EnergyPlus "Total End Uses" row,
 * electricity plus gas, with no source energy multipliers.
 */
function renderEnergyBasisNote() {
    const el = document.getElementById('energy-basis-note');
    if (!el || typeof LMN_CONFIG === 'undefined') return;
    el.textContent = LMN_CONFIG.units.energyBasisSentence;
}

/**
 * Task 3.2, D3.5, CHV Stage 3 item 2. Show the baseline beside the selected
 * case, with the change in absolute and percentage terms.
 *
 * The baseline is the building with NO measure applied, so it is the DEFAULT
 * scenario of the STANDARD envelope for the chosen climate. Choosing the high
 * performance envelope does not move it: that envelope IS a measure, EEM1,
 * verified at 245 of 245 rows. Before this, ticking one measure made the
 * envelope choice change nothing visible on screen.
 *
 * @param {string} envelope - the active envelope key
 * @param {string} neighbourhoodCode - the active NU
 * @param {number} selectedTotal - the EUI now on screen
 */
function renderBaselineComparison(envelope, neighbourhoodCode, selectedTotal) {
    const el = document.getElementById('baseline-comparison');
    if (!el) return;

    // The standard arm of the same climate, whatever the user picked.
    const standardEnvelope = LMN_CONFIG.baselineEnvelopeFor(envelope);
    const baselineData = getEnergyData(standardEnvelope, neighbourhoodCode, 'DEFAULT');

    if (!baselineData || typeof selectedTotal !== 'number') {
        el.innerHTML = '';
        return;
    }

    const baseline = baselineData.total;
    const change = selectedTotal - baseline;
    const percent = baseline ? (change / baseline) * 100 : 0;
    const unit = (typeof LMN_CONFIG !== 'undefined') ? LMN_CONFIG.units.euiCompact : 'kWh/m²·yr';
    // Task 3.3. Dense table, so the compact unit stays and the long form is
    // the tooltip. The caption under the EUI scale carries the words.
    const long = (typeof LMN_CONFIG !== 'undefined') ? LMN_CONFIG.units.eui : '';
    const sign = change > 0 ? '+' : '';
    const direction = change < 0 ? 'saving' : (change > 0 ? 'increase' : 'no change');

    el.innerHTML = `
    <div class="comparison-row">
      <span class="comparison-label">Baseline</span>
      <span class="comparison-value">${baseline.toFixed(1)}</span>
      <span class="comparison-unit" title="${long}">${unit}</span>
      <span class="comparison-note">${LMN_CONFIG.envelopeLabel(standardEnvelope)}, no measure applied</span>
    </div>
    <div class="comparison-row comparison-row--selected">
      <span class="comparison-label">Selected</span>
      <span class="comparison-value">${selectedTotal.toFixed(1)}</span>
      <span class="comparison-unit" title="${long}">${unit}</span>
      <span class="comparison-note">${LMN_CONFIG.envelopeLabel(envelope)}, with your selection</span>
    </div>
    <div class="comparison-row comparison-row--change">
      <span class="comparison-label">Change</span>
      <span class="comparison-value">${sign}${change.toFixed(1)}</span>
      <span class="comparison-unit" title="${long}">${unit}</span>
      <span class="comparison-note">${sign}${percent.toFixed(1)} %, ${direction}</span>
    </div>
  `;
}

/**
 * Task 3.5. An assumptions and model info box, so a reader can tell what the
 * number on this page was computed from without opening the documentation.
 * @param {string} envelope - the active envelope key
 * @param {string} neighbourhoodCode - the active NU
 * @param {Object} energySelections - the user's Layer 2 selections
 * @param {string} scenarioKey - the ladder rung the numbers came from
 * @param {boolean} scenarioExact - false when the rung was adjusted by savings
 */
function renderAssumptionsBox(envelope, neighbourhoodCode, energySelections, scenarioKey, scenarioExact) {
    const el = document.getElementById('assumptions-box');
    if (!el || typeof LMN_CONFIG === 'undefined') return;

    const climateKey = LMN_CONFIG.climateOfEnvelope(envelope);
    const climate = LMN_CONFIG.climates.find(c => c.key === climateKey);
    const measures = []
        .concat((energySelections.load || []).map(v => LMN_CONFIG.selection('load', v).label))
        .concat((energySelections.demand || []).map(v => LMN_CONFIG.selection('demand', v).label));
    const snow = LMN_CONFIG.snowNote(climateKey);

    // Task 3.1, D3.3. Name the rung of the simulated ladder, so a reader can
    // tell which stored case the number came from and not only which boxes
    // they ticked. The ladder is cumulative: each rung contains the one below.
    const rungLabel = LMN_CONFIG.eemLabel(scenarioKey);
    const rungDetail = LMN_CONFIG.eemDetail(scenarioKey);
    const rung = scenarioExact
        ? `${rungLabel}. ${rungDetail}`
        : `Nearest simulated rung: ${rungLabel}. Your combination was not simulated on its own, so the remaining measure is applied to that rung as a saving. ${rungDetail}`;

    const rows = [
        ['Climate and standard', climate ? `${LMN_CONFIG.envelopeLabel(climateKey)}, ${climate.standard}` : LMN_CONFIG.envelopeLabel(envelope)],
        ['Envelope', LMN_CONFIG.envelopeLabel(envelope)],
        ['Measures applied', measures.length ? measures.join(', ') : 'None, this is the baseline building'],
        ['Scenario', rung],
        ['Energy basis', LMN_CONFIG.units.energyBasisSentence],
        // Task 3.3, D6.0. One sentence, written out, rather than two adjectives
        // a reader has to know the EnergyPlus vocabulary to decode.
        ['Floor area basis', LMN_CONFIG.units.floorAreaBasisNote],
        ['Simulation campaign', `${LMN_CONFIG.dataCampaign.climates}, ${LMN_CONFIG.dataCampaign.engine}`],
        ['Data version', `${LMN_CONFIG.version}, updated ${LMN_CONFIG.lastUpdated}`],
        ['Status', 'Simulation-backed']
    ];
    if (snow) rows.push(['Snow cover', snow]);

    el.innerHTML = `
    <h2 class="assumptions-title">Assumptions and model info</h2>
    <dl class="assumptions-list">
      ${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}
    </dl>
  `;
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

    // STAGE-03 task 3.3, D6.0. The compact unit stays, because it is what
    // fits beside a large number, and the basis is written underneath it in
    // words. Both strings come from LMN_CONFIG so that the day the basis
    // changes, it changes in one place.
    const unit  = LMN_CONFIG.units.euiCompact;
    const basis = LMN_CONFIG.euiBasis();
    const long  = LMN_CONFIG.units.eui;

    container.innerHTML = `
        <div class="eui-scale-display">
            <span class="eui-scale-value" style="color: ${color}">${euiValue.toFixed(1)}</span>
            <span class="eui-scale-unit" title="${long}">${unit}</span>
            <span class="eui-scale-basis">${basis}</span>
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

    // Read envelope from URL params or sessionStorage
    const urlParams = new URLSearchParams(window.location.search);
    let envelope = urlParams.get('envelope');
    if (envelope) {
        sessionStorage.setItem('selectedEnvelope', envelope);
    } else {
        try {
            const filtersJson = sessionStorage.getItem('activeFilters');
            if (filtersJson) {
                const filters = JSON.parse(filtersJson);
                if (filters.envelope) envelope = filters.envelope;
            }
        } catch (e) {}
        if (!envelope) envelope = sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
    }

    // CHV, 2026-08-13. Second gate, before any number is read. See the note
    // in js/config.js on dataGapNotice.
    if (typeof LMN_CONFIG !== 'undefined') {
        const gapNotice = LMN_CONFIG.dataGapNotice(neighbourhoodCode, envelope);
        if (gapNotice && container) {
            container.innerHTML = gapNotice;
            if (legendContainer) legendContainer.innerHTML = '';
            if (titleElement) titleElement.textContent = 'Energy Breakdown';
            return;
        }
    }

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

    // Task 3.1, D3.3. Which rung of the simulated ladder the number on screen
    // came from. Assigned in the same branches that choose the dataset, never
    // recomputed from the tick boxes a second time, so the name cannot drift
    // away from the arithmetic. `scenarioExact` goes false when the selection
    // is a combination the campaign never stored and savings are applied on
    // top of the nearest rung.
    let scenarioKey = (baseLevel === "EEM1") ? "EEM1" : "DEFAULT";
    let scenarioExact = true;

    if (loadSelections.includes('thermal_load')) {
        // DBG-024: the stored total is authoritative here too, so the seventh
        // block is added rather than the six being re-summed.
        const ialSource = baseIal || baseDefault;
        energyData = {
            total: ialSource.total,
            breakdown: withOtherEndUse(ialSource.breakdown, otherEndUseResidual(ialSource)),
            pv: ialSource.pv
        };
        colName = LMN_CONFIG.selection('load', 'thermal_load').label;
        if (baseIal) scenarioKey = "IAL";
    } else {
        // Baseline is EEM1 for high-performance envelope, DEFAULT for standard envelope
        const baseDataset = (baseLevel === "EEM1" && baseEem1) ? baseEem1 : baseDefault;
        
        let startDataset;
        if (hasHP) {
            if (hasDhw && hasAppliances && baseEem4) {
                startDataset = baseEem4;
                scenarioKey = "EEM4";
            } else if (hasDhw && baseEem3) {
                startDataset = baseEem3;
                scenarioKey = "EEM3";
            } else if (baseEem2) {
                startDataset = baseEem2;
                scenarioKey = "EEM2";
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
            scenarioExact = false;
        }

        // Apply Appliances savings if selected but not in starting dataset (not started from EEM4)
        const startedFromEem4 = (hasHP && hasDhw && hasAppliances);
        if (hasAppliances && !startedFromEem4) {
            breakdown.forEach(item => {
                const saving = appSavings[item.name] || 0;
                item.value = Math.max(0, item.value - saving);
            });
            scenarioExact = false;
        }

        // DBG-024, P0, task 3.11. The total is NOT the sum of the six charted
        // end uses. The seven end uses this tool does not chart are carried
        // through as a constant residual, taken from the starting dataset,
        // because no measure on this page touches them. When the selection
        // maps exactly onto a stored scenario, which is the usual case, the
        // number below is identical to the stored total.
        const other = otherEndUseResidual(startDataset);
        const sixSum = breakdown.reduce((sum, item) => sum + item.value, 0);
        const total = sixSum + other;

        energyData = {
            total: parseFloat(total.toFixed(1)),
            breakdown: withOtherEndUse(breakdown, other),
            pv: pv
        };

        // Determine title
        // Task 3.1: the same names the sidebar and the finish page use.
        const parts = [];
        if (hasHP) parts.push(LMN_CONFIG.selection('demand', 'cop4').label);
        if (hasDhw) parts.push(LMN_CONFIG.selection('demand', 'dhw').label);
        if (hasAppliances) parts.push(LMN_CONFIG.selection('demand', 'appliances').label);

        if (parts.length === 0) {
            colName = envelope.startsWith("high-performance-") ? "High-Performance Envelope" : "Baseline";
        } else {
            colName = parts.join(" + ");
        }
    }

    // Envelope display names come from LMN_CONFIG, D0.1 / DBG-016. The local
    // copy that used to sit here named four cities that were never simulated.
    const envelopeNames = LMN_CONFIG.envelopeLabels;
    const envName = envelopeNames[envelope] || envelope;
    titleElement.textContent = `Layer 2: ${colName} Breakdown of ${neighbourhoodCode} (${envName})`;

    // Render EUI Scale
    renderEUIScale(energyData.total);

    // Task 3.4, D3.2: name the energy basis next to the value.
    renderEnergyBasisNote();

    // Task 3.2, D3.5: baseline, selected and change, together.
    renderBaselineComparison(envelope, neighbourhoodCode, energyData.total);

    // Task 3.5: assumptions and model info.
    renderAssumptionsBox(envelope, neighbourhoodCode, selections, scenarioKey, scenarioExact);

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

    // DBG-024. Percentages are taken against the reported EUI, which the
    // seventh block now makes the breakdown add up to.
    const filteredTotal = energyData.total;

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

        // Tooltip on hover. DBG-024: the "Other" block explains itself here,
        // because its label alone would not tell the reader what is in it.
        div.title = item.description
            ? `${item.name}: ${item.value.toFixed(1)} kWh/m²·yr (${item.percentage}%). ${item.description}`
            : `${item.name}: ${item.value.toFixed(1)} kWh/m²·yr (${item.percentage}%)`;

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
        // DBG-024: the "Other" block carries its contents in a tooltip.
        if (item.description) legendItem.title = item.description;
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

        const _envelopeForNav = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
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
