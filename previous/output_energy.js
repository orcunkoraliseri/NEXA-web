/**
 * Output Energy Page
 * Displays the selected neighbourhood along with energy consumption and generation parameters
 */

/**
 * Get neighbourhood code from URL parameter.
 * @returns {string|null} The neighbourhood code or null.
 */
function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Render the output table including energy selections
 */
function renderOutputEnergyTable() {
    const tableBody = document.getElementById('results-body');
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (!tableBody || !neighbourhoodCode) return;

    // Get selections from sessionStorage
    const energySelections = JSON.parse(sessionStorage.getItem('energySelections') || '{"load":[], "demand":[], "generation":[]}');

    // Find the specific neighbourhood
    const neighbourhood = NEIGHBOURHOODS.find(n => n.code === neighbourhoodCode);
    if (!neighbourhood) return;

    // Get concept data
    const concept = CONCEPTS.find(c => c.id === neighbourhood.conceptId);
    if (!concept) return;

    // Create row
    const row = document.createElement('tr');

    // Concept cell
    const conceptCell = document.createElement('td');
    conceptCell.innerHTML = `
        <div class="concept-cell">
            <img src="${concept.image}" alt="${concept.name}" onerror="this.style.display='none'">
            <span>${concept.name}</span>
        </div>
    `;

    // Neighbourhood cell
    const neighbourhoodCell = document.createElement('td');
    const nuImage = neighbourhood.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(neighbourhood.code);
    neighbourhoodCell.innerHTML = `
        <div class="neighbourhood-cell">
            <img src="${nuImage}" alt="${neighbourhood.code}" onerror="this.src='https://via.placeholder.com/200x150?text=${encodeURIComponent(neighbourhood.code)}'">
            <span class="code">${neighbourhood.code}</span>
        </div>
    `;

    // Properties cell
    const propertiesCell = document.createElement('td');
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    propertiesCell.innerHTML = `
      <div class="properties-cell" style="display: flex; gap: var(--spacing-sm); justify-content: center; align-items: center; flex-wrap: wrap;">
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Usage_Parameters/${neighbourhood.usage}.png" alt="${neighbourhood.usage}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.usage}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Context_Parameters/${neighbourhood.context}.png" alt="${neighbourhood.context}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.context}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Layout_Parameters/${capitalize(neighbourhood.layout)}.png" alt="${neighbourhood.layout}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.layout}</span>
        </div>
        <div class="property-icon" style="text-align: center; font-size: 0.8rem; display: flex; flex-direction: column; align-items: center;">
          <img src="Content/Images_Density_Parameters/${neighbourhood.density}.png" alt="${neighbourhood.density}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 4px;" onerror="this.style.display='none'">
          <span>${neighbourhood.density}</span>
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

    // Energy Consumption cell
    const consumptionCell = document.createElement('td');
    consumptionCell.className = 'clickable-cell';
    consumptionCell.title = 'Proceed to Energy Analysis';
    const consumptionWrapper = document.createElement('div');
    consumptionWrapper.className = 'energy-selection-cell';

    // 1. Add active loads
    if (energySelections.load) {
        energySelections.load.forEach(val => {
            if (val === 'thermal_load') {
                const item = document.createElement('div');
                item.className = 'energy-selection-item';
                item.innerHTML = `
                    <img src="Content/Images_Layer2_ThermalLoad/thermalload.png" alt="Thermal Load" onerror="this.style.display='none'">
                    <span>Thermal Load</span>
                `;
                consumptionWrapper.appendChild(item);
            }
        });
    }

    // 2. Add active demands
    if (energySelections.demand) {
        const demandLabels = {
            'cop4': 'Heat Pump (COP 4)',
            'dhw': 'DHW',
            'appliances': 'Appliances and Equipment'
        };
        const demandImages = {
            'cop4': 'heatpump_cop4',
            'dhw': 'dhw',
            'appliances': 'appliancesequipment'
        };

        energySelections.demand.forEach(val => {
            if (demandLabels[val]) {
                const item = document.createElement('div');
                item.className = 'energy-selection-item';
                const label = demandLabels[val];
                const imgName = demandImages[val];
                item.innerHTML = `
                    <img src="Content/Images_Layer2_EnergyDemand/${imgName}.png" alt="${label}" onerror="this.style.display='none'">
                    <span>${label}</span>
                `;
                consumptionWrapper.appendChild(item);
            }
        });
    }

    if (consumptionWrapper.children.length === 0) {
        consumptionWrapper.innerHTML = '<span>None selected</span>';
    }

    consumptionCell.appendChild(consumptionWrapper);

    // Navigation for consumption
    consumptionCell.addEventListener('click', () => {
        const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
        window.location.href = `layer2_energy_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    });

    // Energy Generation cell
    const generationCell = document.createElement('td');
    generationCell.className = 'clickable-cell';
    generationCell.title = 'Proceed to PV Generation';
    const generationWrapper = document.createElement('div');
    generationWrapper.className = 'energy-selection-cell';

    // Map data-value to display label and image name
    const generationLabels = {
        'pv_roof': 'PV on Roof',
        'pv_facade': 'PV on Facade',
        'pvt_roof': 'PV-T on Roof',
        'pvt_facade': 'PV-T on Facade',
        'stc_roof': 'STC on Roof',
        'stc_facade': 'STC on Facade',
        'biomass': 'Biomass',
        'wind': 'Wind',
        'geothermal': 'Geothermal'
    };

    energySelections.generation.forEach(val => {
        const item = document.createElement('div');
        item.className = 'energy-selection-item';
        const label = generationLabels[val] || val;
        // The image name might need exact match with the file name
        const imgName = label;
        item.innerHTML = `
            <img src="Content/Images_Layer2_EnergyGeneration/${imgName}.png" alt="${label}" onerror="this.style.display='none'">
            <span>${label}</span>
        `;
        generationWrapper.appendChild(item);
    });
    generationCell.appendChild(generationWrapper);

    // Navigation for generation
    generationCell.addEventListener('click', () => {
        const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
        window.location.href = `layer2_pv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    });

    // Append cells to row
    row.appendChild(conceptCell);
    row.appendChild(neighbourhoodCell);
    row.appendChild(propertiesCell);
    row.appendChild(buildingsCell);
    row.appendChild(consumptionCell);
    row.appendChild(generationCell);

    tableBody.appendChild(row);
}

/**
 * Setup navigation buttons
 */
function setupNavigation() {
    const backBtn = document.getElementById('back-btn');
    const proceedBtn = document.getElementById('proceed-mobility-btn');
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (backBtn && neighbourhoodCode) {
        const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
        backBtn.href = `layer2_energy_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    }

    if (proceedBtn && neighbourhoodCode) {
        proceedBtn.addEventListener('click', () => {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || sessionStorage.getItem('selectedEnvelope') || 'necb-2017';
            window.location.href = `layer3_mobility_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        });
    }
}

/**
 * Initialize page
 */
function initOutputEnergyPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 2: Energy Selection Results for ${neighbourhoodCode}`;

        // Build sidebar in visuals mode to show layer 2
        if (typeof buildSidebar === 'function') {
            buildSidebar('layer2_output_energy', 'visuals');
        }
    }

    renderOutputEnergyTable();
    setupNavigation();
}

document.addEventListener('DOMContentLoaded', initOutputEnergyPage);
