/**
 * finish-design.js
 * Consolidated Design Summary Logic
 * Loads all choices from sessionStorage and database constants and populates the dashboard.
 */

// Helper to get query parameters
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Set text content helper
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

// -------------------------------------------------------------
// Scales Renderers (replicated from energy.js / pv.js / lpv.js)
// -------------------------------------------------------------
function renderEUIScale(euiValue) {
    const container = document.getElementById('eui-scale-container');
    if (!container) return;

    const EUI_MIN = 56;
    const EUI_MAX = 240;
    const position = Math.min(100, Math.max(0, ((euiValue - EUI_MIN) / (EUI_MAX - EUI_MIN)) * 100));

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

function renderPVScale(value) {
    const container = document.getElementById('pv-scale-container');
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

// Render Energy Status icon in the header
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

// -------------------------------------------------------------
// Resolve active scenario & energy metrics (mirrors energy.js / pv.js)
// -------------------------------------------------------------
function resolveEnvelopeAndScenario(code) {
    const envelope = getQueryParam('envelope') || 'necb-2017';

    const selections = JSON.parse(
        sessionStorage.getItem('energySelections') || '{"load":[], "demand":[]}'
    );
    const loadSelections = selections.load || [];
    const demandSelections = selections.demand || [];

    let refEnvelope = envelope;
    let baseLevel = 'DEFAULT';
    if (envelope.startsWith('high-performance-')) {
        baseLevel = 'EEM1';
        if (envelope === 'high-performance-necb') {
            refEnvelope = 'necb-2017';
        } else if (envelope === 'high-performance-ashrae') {
            refEnvelope = 'ashrae';
        }
    }

    let scenario;
    if (loadSelections.includes('thermal_load')) {
        const hasIal = !!(ENVELOPE_ENERGY_DATA &&
                         ENVELOPE_ENERGY_DATA[refEnvelope] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code] &&
                         ENVELOPE_ENERGY_DATA[refEnvelope][code]['IAL']);
        scenario = hasIal ? 'IAL' : 'DEFAULT';
    } else {
        const hasHP = demandSelections.includes('cop4') ||
                      demandSelections.includes('cop3.5') ||
                      demandSelections.includes('cop3');
        const hasDhw = demandSelections.includes('dhw');
        const hasAppliances = demandSelections.includes('appliances');

        if (hasHP) {
            if (hasDhw && hasAppliances) scenario = 'EEM4';
            else if (hasDhw) scenario = 'EEM3';
            else scenario = 'EEM2';
        } else {
            scenario = (baseLevel === 'EEM1') ? 'EEM1' : 'DEFAULT';
        }
    }

    const energyObject = (ENVELOPE_ENERGY_DATA &&
                          ENVELOPE_ENERGY_DATA[refEnvelope] &&
                          ENVELOPE_ENERGY_DATA[refEnvelope][code])
        ? ENVELOPE_ENERGY_DATA[refEnvelope][code][scenario]
        : null;

    return { envelope, scenario, energyObject };
}

// Determine if Heat Pump COP 4 is selected
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

// -------------------------------------------------------------
// Populate page fields
// -------------------------------------------------------------
function initSummaryPage() {
    const code = getQueryParam('neighbourhood');
    if (!code) {
        alert("No neighbourhood selected. Redirecting to start.");
        window.location.href = 'layer1_NUs_selection.html';
        return;
    }

    // Set Back button href
    const backBtn = document.getElementById('back-step-btn');
    if (backBtn) {
        backBtn.href = `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(code)}&envelope=${encodeURIComponent(getQueryParam('envelope') || 'necb-2017')}`;
    }

    // Lookup neighbourhood
    const nu = NEIGHBOURHOODS.find(n => n.code === code);
    if (!nu) {
        alert("Invalid neighbourhood selection.");
        return;
    }

    // Lookup concept
    const concept = CONCEPTS.find(c => c.id === nu.conceptId);

    // Render header indicators
    renderEnergyStatus(code);

    // -------------------------------------------------------------
    // CARD 1: LAYER 1 - Morphology
    // -------------------------------------------------------------
    const nuImage = nu.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(code);
    const imgEl = document.getElementById('l1-nu-image');
    if (imgEl) imgEl.src = nuImage;

    setText('l1-nu-code', code);
    setText('l1-nu-concept', concept ? concept.name : 'Concept');
    setText('l1-context', nu.context || '—');
    setText('l1-usage', nu.usage || '—');
    setText('l1-density', nu.density || '—');
    setText('l1-layout', nu.layout || '—');

    const gfa = GFA_DATA[code];
    setText('l1-gfa', gfa ? gfa.toLocaleString() + ' m²' : '—');
    setText('l1-buildings', nu.buildings ? nu.buildings.join(', ') : '—');

    // -------------------------------------------------------------
    // CARD 2: LAYER 2 - Energy & PV Sizing
    // -------------------------------------------------------------
    const { envelope, scenario, energyObject } = resolveEnvelopeAndScenario(code);
    const euiValue = energyObject ? energyObject.total : 0;
    renderEUIScale(euiValue);
    setText('l2-eui-val', euiValue ? euiValue.toFixed(1) + ' kWh/m²·yr' : '—');

    // Envelope Display Label
    const envLabels = {
        'necb-2017': 'NECB 2017 Standard',
        'ashrae': 'ASHRAE 90.1 Standard',
        'high-performance-necb': 'High Performance NECB',
        'high-performance-ashrae': 'High Performance ASHRAE'
    };
    setText('l2-envelope', envLabels[envelope] || envelope);

    // Energy selections load & demand pills
    const energySelections = JSON.parse(sessionStorage.getItem('energySelections') || '{"load":[], "demand":[], "generation":[]}');
    const l2PillsContainer = document.getElementById('l2-pills');
    if (l2PillsContainer) {
        let pillsHtml = '';
        if (energySelections.load) {
            energySelections.load.forEach(val => {
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer2_ThermalLoad/ThermalLoad.png" onerror="this.style.display='none'">Thermal Load</span>`;
            });
        }
        const demandLabels = {
            'cop4': 'HP COP 4', 'cop3.5': 'HVAC COP 3.5', 'cop3': 'HVAC COP 3',
            'dhw': 'DHW', 'appliances': 'Appliances'
        };
        const demandImages = {
            'cop4': 'HeatPump_COP4', 'cop3.5': 'HVAC_COP3.5', 'cop3': 'HVAC_COP3',
            'dhw': 'dhw', 'appliances': 'AppliancesEquipment'
        };
        if (energySelections.demand) {
            energySelections.demand.forEach(val => {
                const label = demandLabels[val] || val;
                const imgName = demandImages[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer2_EnergyDemand/${imgName}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        const genLabels = {
            'pv_roof': 'PV Roof', 'pv_facade': 'PV Facade', 'pvt_roof': 'PV-T Roof', 'pvt_facade': 'PV-T Facade',
            'stc_roof': 'STC Roof', 'stc_facade': 'STC Facade', 'biomass': 'Biomass', 'wind': 'Wind', 'geothermal': 'Geothermal'
        };
        if (energySelections.generation) {
            energySelections.generation.forEach(val => {
                const label = genLabels[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer2_EnergyGeneration/${label}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        l2PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // PV details populating
    const pvIntensity = energyObject ? energyObject.pv : 0;
    renderPVScale(pvIntensity);

    const pvData = PV_GENERATION_DATA[code];
    if (pvData) {
        setText('l2-pv-surface', pvData.surface || '—');
        setText('l2-pv-efficiency', pvData.efficiency || '—');
        setText('l2-pv-mounting', pvData.mounting || '—');
        const gcr = pvData.gcr ? (parseFloat(pvData.gcr) * 100).toFixed(0) + '%' : '—';
        setText('l2-pv-gcr', gcr);
        const totalMWh = (pvIntensity && gfa) ? (pvIntensity * gfa / 1000).toFixed(1) + ' MWh/yr' : '—';
        setText('l2-pv-total', totalMWh);
        const ropValue = isCOP4Selected() ? pvData.rop : '—';
        setText('l2-pv-rop', ropValue);
    }

    // -------------------------------------------------------------
    // CARD 3: LAYER 3 - EV & Mobility summary
    // -------------------------------------------------------------
    const mobilitySelections = JSON.parse(sessionStorage.getItem('mobilitySelections') || '{"transportation":[], "mobility":[]}');
    const l3PillsContainer = document.getElementById('l3-pills');
    if (l3PillsContainer) {
        let pillsHtml = '';
        const transportLabels = {
            'ev': 'EV', 'ev_public_transport': 'EV Public Transport',
            'ev_charging_stations': 'EV Charging Stations', 'v2g_stations': 'V2G Stations'
        };
        if (mobilitySelections.transportation) {
            mobilitySelections.transportation.forEach(val => {
                const label = transportLabels[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer3_Transportation/${label}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        const mobilityLabels = {
            'bicycle_infrastructure': 'Bicycle Infra', 'pedestrian_oriented_design': 'Pedestrian Design'
        };
        if (mobilitySelections.mobility) {
            mobilitySelections.mobility.forEach(val => {
                const label = mobilityLabels[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer3_Mobility/${label}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        l3PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // EV details populating
    const evScenario = (mobilitySelections.transportation && mobilitySelections.transportation.includes('ev') && mobilitySelections.transportation.includes('v2g_stations')) ? 'EV2' : 'EV1';
    const evData = EV_V2G_DATA[code] ? EV_V2G_DATA[code][evScenario] : null;
    if (evData) {
        setText('l3-ev-penetration', evData.evPenetrationRate || '—');
        setText('l3-charging-efficiency', evData.chargingEfficiency || '—');
        setText('l3-daily-demand', evData.dailyEnergyDemand || '—');
        setText('l3-v2g-rate', evData.v2gParticipationRate || '—');
        setText('l3-total-ev-demand', evData.totalEvEnergyDemand ? evData.totalEvEnergyDemand.toLocaleString() + ' kWh/day' : '—');
        setText('l3-storage-loss', evData.storageLoss ? evData.storageLoss.toLocaleString() + ' kWh/day' : '—');
        setText('l3-v2g-power', evData.v2gPowerAvailable !== null ? evData.v2gPowerAvailable.toLocaleString() + ' kWh/day' : '—');

        const netBalance = evData.netEnergyBalance_kWh ? evData.netEnergyBalance_kWh.toLocaleString() + ' kWh/day (' + evData.netEnergyBalance_kWh_m2 + ' kWh/m²-day)' : '—';
        setText('l3-net-balance', netBalance);
    }

    // -------------------------------------------------------------
    // CARD 4: LAYER 4 - Green Infrastructure & Land PV
    // -------------------------------------------------------------
    const greenSelections = JSON.parse(sessionStorage.getItem('greenSelections') || '{"infrastructure":[], "urban_agriculture":[], "energy_integrated":[]}');
    const l4PillsContainer = document.getElementById('l4-pills');
    if (l4PillsContainer) {
        let pillsHtml = '';
        const infraLabels = { 'green_roofs': 'Green Roofs', 'vertical_greening_systems': 'VGS', 'linear_greenery': 'Linear Greenery', 'green_spaces': 'Green Spaces' };
        if (greenSelections.infrastructure) {
            greenSelections.infrastructure.forEach(val => {
                const label = infraLabels[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer4_Infrastructure/${label}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        const agLabels = { 'roof_gardens': 'Roof Gardens', 'food_gardens': 'Food Gardens' };
        if (greenSelections.urban_agriculture) {
            greenSelections.urban_agriculture.forEach(val => {
                const label = agLabels[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer4_UrbanAgriculture/${label}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        const integratedLabels = { 'pv_green_roofs': 'PV-Green Roofs', 'pv_vgs': 'Landscape PV' };
        const integratedImages = { 'pv_green_roofs': 'pv-green roofs integrated modules', 'pv_vgs': 'lpv' };
        if (greenSelections.energy_integrated) {
            greenSelections.energy_integrated.forEach(val => {
                const label = integratedLabels[val] || val;
                const img = integratedImages[val] || val;
                pillsHtml += `<span class="selection-pill"><img src="Content/Images_Layer4_EnergyIntegratedGI/${img}.png" onerror="this.style.display='none'">${label}</span>`;
            });
        }
        l4PillsContainer.innerHTML = pillsHtml || '<span>No selections made</span>';
    }

    // Land PV (LPV) table populating
    const lpvConfigs = LPV_DATA.rows.filter(r => r.category === 'Config.');
    const lpvResults = LPV_DATA.rows.filter(r => r.category === 'Results');

    const landAllocation = lpvConfigs[0] ? lpvConfigs[0].values[code] : '—';
    const usableArea = lpvConfigs[1] ? lpvConfigs[1].values[code] : '—';
    const moduleCapacity = lpvConfigs[2] ? lpvConfigs[2].values[code] : '—';
    const installedCapacity = lpvConfigs[3] ? lpvConfigs[3].values[code] : '—';
    const lpvGeneration = lpvResults[0] ? lpvResults[0].values[code] : '—';

    setText('l4-land-allocation', landAllocation);
    setText('l4-usable-area', usableArea);
    setText('l4-module-capacity', moduleCapacity);
    setText('l4-installed-capacity', installedCapacity);
    setText('l4-energy-generation', lpvGeneration);

    // LPV scale rendering
    renderLPVScale(65.2); // Matching the hardcoded scale from lpv.js for this layer

    // -------------------------------------------------------------
    // SIDEBAR
    // -------------------------------------------------------------
    if (typeof buildSidebar === 'function') {
        buildSidebar('layer4_output', 'visuals');
    }

    // Programmatically hide broken images inside the main summary cards to prevent duplicate alt text display
    const mainImages = document.querySelectorAll('#visual-content img');
    mainImages.forEach(img => {
        if (img.complete && img.naturalWidth === 0) {
            img.style.display = 'none';
        }
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
}

// Run on document load
document.addEventListener('DOMContentLoaded', initSummaryPage);
