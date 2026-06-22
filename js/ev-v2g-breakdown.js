/**
 * EV & V2G Mobility Output Page
 * Reads neighbourhood + scenario from URL/sessionStorage and populates the table.
 */

function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Returns "EV2" if both 'ev' and 'v2g_stations' are in the transportation selections,
 * otherwise returns "EV1".
 */
function getScenarioFromSession() {
    const stored = sessionStorage.getItem('mobilitySelections');
    if (!stored) return 'EV1';
    const mobilitySelections = JSON.parse(stored);
    const transport = mobilitySelections.transportation || [];
    return (transport.includes('ev') && transport.includes('v2g_stations')) ? 'EV2' : 'EV1';
}

const TRANSPORT_LABEL_MAP = {
    'ev':                    'EV',
    'ev_public_transport':   'EV Public Transport',
    'ev_charging_stations':  'EV Charging Stations',
    'v2g_stations':          'V2G Stations'
};

const EV_STATUS_IMAGE_MAP = {
    'Grid Stressed - Deficit':   'Content/Images_Layer3_Transportation/grid stressed - deficit.png',
    'Energy Positive - Surplus': 'Content/Images_Layer3_Transportation/energy positive - surplus.png',
    'Load Balanced - Net Zero':  'Content/Images_Layer3_Transportation/load balanced - net zero.png'
};

function populateTable(neighbourhoodCode, scenario) {
    if (!EV_V2G_DATA || !EV_V2G_DATA[neighbourhoodCode]) {
        alert("No EV data available for this neighbourhood yet.");
        return;
    }
    const d = EV_V2G_DATA[neighbourhoodCode][scenario];
    if (!d) return;

    // Configurations — all rows always shown; fields absent in this scenario show "-"
    setText('cfg-ev-penetration',   d.evPenetrationRate    || '-');
    setText('cfg-daily-demand',     d.dailyEnergyDemand    || '-');
    setText('cfg-charging-eff',     d.chargingEfficiency   || '-');
    setText('cfg-v2g-participation', d.v2gParticipationRate || '-');
    setText('cfg-battery-eff',      d.batteryEfficiency    || '-');
    setText('cfg-discharge-cap',    d.dischargeCapacity    || '-');

    // Parameters
    setText('param-num-hh',    d.numHouseholds);
    setText('param-floor-area', d.totalFloorArea.toLocaleString());

    // Results
    setText('res-total-ev-demand',    d.totalEvEnergyDemand.toLocaleString());
    setText('res-storage-loss',       d.storageLoss.toLocaleString());
    setText('res-net-balance-kwh',    d.netEnergyBalance_kWh.toLocaleString());
    setText('res-net-balance-kwh-m2', d.netEnergyBalance_kWh_m2);
    setText('res-v2g-power',          d.v2gPowerAvailable !== null ? d.v2gPowerAvailable.toLocaleString() : '-');

}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}



function makeImageCard(src, label, extraClass) {
    return `
        <div class="ev-header-card ${extraClass || ''}">
            <img src="${src}" alt="${label}" class="ev-header-card-img"
                 onerror="this.parentElement.style.display='none'">
            <span class="ev-header-card-label">${label}</span>
        </div>`;
}

function renderVisualHeader(neighbourhoodCode) {
    const container = document.getElementById('ev-visual-header');
    if (!container) return;

    const stored = sessionStorage.getItem('mobilitySelections');
    const mobilitySelections = stored ? JSON.parse(stored) : { transportation: [] };
    const transport = mobilitySelections.transportation || [];

    let cards = '';

    // 1. EV car image (always first, if EV selected)
    if (transport.includes('ev')) {
        cards += makeImageCard(
            'Content/Images_Layer3_Transportation/ev.png',
            'EV', 'ev-header-card--ev'
        );
    }

    // 2. V2G Stations image (if selected, shown next to EV car)
    if (transport.includes('v2g_stations')) {
        cards += makeImageCard(
            'Content/Images_Layer3_Transportation/v2g stations.png',
            'V2G Stations', ''
        );
    }

    // 3. Neighbourhood image
    const nuData = (typeof NEIGHBOURHOODS !== 'undefined')
        ? NEIGHBOURHOODS.find(n => n.code === neighbourhoodCode)
        : null;
    if (nuData && nuData.image) {
        cards += makeImageCard(nuData.image, neighbourhoodCode, 'ev-header-card--neighbourhood');
    }

    // 4. System status image — read from EV_V2G_DATA using current scenario
    const scenario = getScenarioFromSession();
    const statusLabel = EV_V2G_DATA && EV_V2G_DATA[neighbourhoodCode]
        ? EV_V2G_DATA[neighbourhoodCode][scenario].systemStatusIndicator
        : null;
    if (statusLabel && EV_STATUS_IMAGE_MAP[statusLabel]) {
        cards += makeImageCard(EV_STATUS_IMAGE_MAP[statusLabel], statusLabel, '');
    }

    container.innerHTML = cards;
}

function initEvV2gBreakdownPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const scenario = getScenarioFromSession();

    // Update page header
    const title = document.getElementById('neighbourhood-title');
    if (title && neighbourhoodCode) {
        title.textContent = `Layer 3: EV & V2G Mobility Output for ${neighbourhoodCode}`;
    }

    // Update navigation buttons
    const backBtn = document.getElementById('back-step-btn');
    if (backBtn && neighbourhoodCode) {
        backBtn.href = `layer3_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
    }

    const nextBtn = document.getElementById('next-step-btn');
    if (nextBtn && neighbourhoodCode) {
        nextBtn.href = `layer4_green_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
    }

    if (neighbourhoodCode) {
        renderVisualHeader(neighbourhoodCode);
        populateTable(neighbourhoodCode, scenario);

        if (typeof buildSidebar === 'function') {
            buildSidebar('layer3_output', 'visuals');
        }
    }
}

document.addEventListener('DOMContentLoaded', initEvV2gBreakdownPage);
