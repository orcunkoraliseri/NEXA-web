/**
 * EV & V2G Mobility Output Page
 * Reads neighbourhood + scenario from URL/sessionStorage and populates the table.
 */

function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * STAGE-06 task 6.2, CHV Stage 6 item 2. Returns "EV2" when EV and V2G are both
 * selected, "EV1" when EV alone is selected, and null when the selection maps to
 * no scenario at all.
 *
 * It used to return 'EV1' for an absent selection and for a V2G-only selection
 * alike, so the page rendered a complete EV-only result for a visitor who had
 * chosen nothing, and for one who had asked for something else. DBG-007. Null
 * is the whole point of this function now: no scenario, no numbers.
 */
function getScenarioFromSession() {
    const stored = sessionStorage.getItem('mobilitySelections');
    if (!stored) return null;

    let mobilitySelections;
    try {
        mobilitySelections = JSON.parse(stored);
    } catch (e) {
        return null;                       // a corrupted session is not a scenario
    }

    const transport = (mobilitySelections && mobilitySelections.transportation) || [];
    if (!transport.includes('ev')) return null;   // V2G alone is not a scenario
    return transport.includes('v2g_stations') ? 'EV2' : 'EV1';
}

/**
 * STAGE-06 task 6.2. The page with no numbers on it.
 */
function showEmptyState() {
    const empty = document.getElementById('ev-empty-state');
    const table = document.getElementById('ev-v2g-table');
    const header = document.getElementById('ev-visual-header');

    if (table) table.hidden = true;
    if (header) header.hidden = true;
    // The three reading notes are wrapped in one box, so the box goes with
    // them. Without this the empty state still ships a titled box with
    // nothing inside it.
    ['ev-sign-note', 'ev-intensity-note', 'ev-discharge-eff-note', 'ev-preliminary-note',
     'ev-notes-box', 'ev-preliminary-wrap'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.hidden = true;
    });

    if (empty) {
        empty.hidden = false;
        setText('ev-empty-title', LMN_CONFIG.ev.emptyStateTitle);
        setText('ev-empty-body', LMN_CONFIG.ev.emptyStateBody);

        // Carry the context back, so the way out of the empty state is one click
        // and lands on the same neighbourhood rather than at the beginning.
        const link = document.getElementById('ev-empty-link');
        const code = getNeighbourhoodFromURL();
        if (link && code) {
            const envelope = new URLSearchParams(window.location.search).get('envelope')
                || sessionStorage.getItem('selectedEnvelope') || '';
            link.href = 'layer3_mobility_selection.html?neighbourhood=' + encodeURIComponent(code)
                + (envelope ? '&envelope=' + encodeURIComponent(envelope) : '');
        }
    }
}

/**
 * STAGE-06 tasks 6.4 to 6.8, CHV Stage 6 items 4 to 8. Every label and unit on
 * this page, written once from LMN_CONFIG.ev.
 */
function applyLabels() {
    if (typeof LMN_CONFIG === 'undefined') return;
    const ev = LMN_CONFIG.ev;

    setText('lbl-ev-ownership',        ev.ownershipRateLabel);
    setText('lbl-daily-demand',        ev.dailyChargingDemandLabel);
    setText('unit-daily-demand',       ev.dailyChargingDemandUnit);
    setText('lbl-charging-eff',        ev.chargingEfficiencyLabel);
    setText('lbl-v2g-participation',   ev.v2gParticipationLabel);
    setText('lbl-discharge-eff',       ev.dischargeEfficiencyLabel);
    setText('lbl-v2g-export-per-ev',   ev.dailyV2gExportPerEvLabel);
    setText('unit-v2g-export-per-ev',  ev.dailyV2gExportPerEvUnit);

    setText('lbl-v2g-energy',          ev.dailyV2gEnergyLabel);
    setText('unit-v2g-energy',         ev.dailyV2gEnergyUnit);
    setText('lbl-net-total',           ev.netGridDemandTotalLabel);
    setText('unit-net-total',          ev.netGridDemandTotalUnit);
    setText('lbl-net-intensity',       ev.netGridDemandIntensityLabel);
    setText('unit-net-intensity',      ev.netGridDemandIntensityUnit);

    setText('ev-sign-note',            ev.signSentence);
    setText('ev-intensity-note',       'The intensity is measured ' + ev.intensityBasis + '.');
    setText('ev-discharge-eff-note',   ev.dischargeEfficiencyLabel + ': ' + ev.dischargeEfficiencyNote);
    setText('ev-preliminary-note',     ev.preliminaryNote);
    const prelimWrap = document.getElementById('ev-preliminary-wrap');
    if (prelimWrap) {
        prelimWrap.hidden = !ev.preliminaryNote;
    }
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

    // Configurations, all rows always shown; fields absent in this scenario show "-"
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

    // D6.11, D0.4a. The stored string names an image file. The three states are
    // worded once, in LMN_CONFIG.ev.statusStates, and the page reads them there.
    setText('res-status',             LMN_CONFIG.evStatusLabel(d.systemStatusIndicator));
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

    // 4. System status image, read from EV_V2G_DATA using current scenario
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
        const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
        backBtn.href = `layer3_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    }

    const nextBtn = document.getElementById('next-step-btn');
    if (nextBtn && neighbourhoodCode) {
        const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
        nextBtn.href = `layer4_green_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    }

    // STAGE-06 task 6.2. No scenario, or no neighbourhood, means no numbers.
    if (!neighbourhoodCode || !scenario) {
        showEmptyState();
        if (typeof buildSidebar === 'function') {
            buildSidebar('layer3_output', 'visuals');
        }
        return;
    }

    applyLabels();
    renderVisualHeader(neighbourhoodCode);
    populateTable(neighbourhoodCode, scenario);

    if (typeof buildSidebar === 'function') {
        buildSidebar('layer3_output', 'visuals');
    }
}

document.addEventListener('DOMContentLoaded', initEvV2gBreakdownPage);
