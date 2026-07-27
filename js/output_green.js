/**
 * Output Green Page
 * Displays the selected neighbourhood along with green infrastructure parameters in the sidebar
 */

function getNeighbourhoodFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('neighbourhood');
}

/**
 * Render the output table (Intentionally removed as layout updated to not use the table here)
 */
function renderOutputGreenTable() {
    // Left blank intentionally, handled through sidebar layout update.
}

/**
 * Setup navigation buttons
 */
function setupNavigation() {
    const backBtn = document.getElementById('back-btn');
    const neighbourhoodCode = getNeighbourhoodFromURL();

    if (backBtn && neighbourhoodCode) {
        const envelope = new URLSearchParams(window.location.search).get('envelope') || 'necb-2017';
        backBtn.href = `layer4_green_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
    }

    const lpvBtn = document.getElementById('proceed-lpv-btn');
    if (lpvBtn && neighbourhoodCode) {
        lpvBtn.addEventListener('click', () => {
            const envelope = new URLSearchParams(window.location.search).get('envelope') || 'necb-2017';
            window.location.href = `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}&envelope=${encodeURIComponent(envelope)}`;
        });
    }
}

/**
 * Initialize page
 */
function initOutputGreenPage() {
    const neighbourhoodCode = getNeighbourhoodFromURL();
    const titleElement = document.getElementById('neighbourhood-title');

    if (neighbourhoodCode) {
        titleElement.textContent = `Layer 4: Green Selection Results for ${neighbourhoodCode}`;

        if (typeof buildSidebar === 'function') {
            buildSidebar('layer4_output', 'visuals');
        }
    }

    renderOutputGreenTable();
    setupNavigation();
}

document.addEventListener('DOMContentLoaded', initOutputGreenPage);
