# Task Plan — LPV Breakdown Page (Dynamic Data)

> This plan is written for direct LLM implementation.
> Each task is atomic, self-contained, and includes exact file paths,
> the precise code to find/replace, and a verification check.
> Complete tasks in order — later tasks depend on earlier ones.

---

## Overview of Changes

| # | File | Type | One-line description |
|---|---|---|---|
| T1 | `js/data.js` | Addition | Add `LPV_DATA` constant before module.exports |
| T2 | `js/data.js` | Edit | Add `LPV_DATA` to module.exports |
| T3 | `js/lpv.js` | Full rewrite | Replace toggle logic with data-driven table + corner image |
| T4 | `layer4_lpv_breakdown.html` | Body rewrite | Replace mock-up layout with table + corner image container |
| T5 | `css/styles.css` | Addition | Add LPV table and corner image styles at end of file |
| T6 | `js/green-selection.js` | Edit (1 function) | Route to LPV page when Energy-Integrated GI is selected |

---

## T1 — Add `LPV_DATA` constant to `js/data.js`

**File:** `js/data.js`

**What to do:** Insert the `LPV_DATA` constant block immediately before the existing
`if (typeof module !== 'undefined' && module.exports)` line at the bottom of the file.

**Find this exact text** (the last ~3 lines of the file before the exports):

```javascript
// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENERGY_DATA, ENERGY_STATUS_IMAGES, EV_V2G_DATA };
}
```

**Replace with:**

```javascript
// LPV (Land-PV) data derived from Templates/NUs_LPV.csv
const LPV_DATA = {
  columns: ["RC1", "RC2", "RC3", "RC4", "RC5", "RC6"],
  rows: [
    {
      category: "Config.",
      label: "Land Allocation",
      values: { RC1: "20%", RC2: "20%", RC3: "20%", RC4: "20%", RC5: "20%", RC6: "20%" }
    },
    {
      category: "Config.",
      label: "Usable Area",
      values: { RC1: "10%", RC2: "10%", RC3: "10%", RC4: "10%", RC5: "10%", RC6: "10%" }
    },
    {
      category: "Config.",
      label: "Module Capacity",
      values: { RC1: "400W", RC2: "400W", RC3: "400W", RC4: "400W", RC5: "400W", RC6: "400W" }
    },
    {
      category: "Config.",
      label: "Installed Capacity (kWp)",
      values: { RC1: "475 kWp", RC2: "475 kWp", RC3: "475 kWp", RC4: "475 kWp", RC5: "475 kWp", RC6: "475 kWp" }
    },
    {
      category: "Results",
      label: "Energy Generation",
      values: { RC1: "608 MWh/year", RC2: "608 MWh/year", RC3: "608 MWh/year", RC4: "608 MWh/year", RC5: "608 MWh/year", RC6: "608 MWh/year" }
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENERGY_DATA, ENERGY_STATUS_IMAGES, EV_V2G_DATA };
}
```

**Verify:** Open `js/data.js` and confirm `LPV_DATA` appears as a `const` before the
`module.exports` line. The rest of the file must be unchanged.

---

## T2 — Add `LPV_DATA` to module.exports in `js/data.js`

**File:** `js/data.js`

**What to do:** Update the module.exports line (the one you just preserved in T1) to include
`LPV_DATA`.

**Find this exact text:**

```javascript
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENERGY_DATA, ENERGY_STATUS_IMAGES, EV_V2G_DATA };
```

**Replace with:**

```javascript
  module.exports = { CONCEPTS, NEIGHBOURHOODS, BUILDING_IMAGES, ENERGY_COLORS, ENERGY_DATA, ENERGY_STATUS_IMAGES, EV_V2G_DATA, LPV_DATA };
```

**Verify:** The exports line now contains `LPV_DATA` at the end of the object.

---

## T3 — Rewrite `js/lpv.js`

**File:** `js/lpv.js`

**What to do:** Replace the **entire file contents** with the code below.
The functions `renderLPVScale` and `renderEnergyStatus` are kept intact.
`setupLPVToggleButtons` is removed. New functions added:
`getLPVDataForNeighbourhood`, `setText`, `populateLPVTable`, `renderLPVImage`.
`initLPVPage` is updated to call the new functions.

**New full file contents:**

```javascript
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
 * @param {string} code - e.g. "RC1"
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

/**
 * Inject LPV.png into the corner image container.
 */
function renderLPVImage() {
    const container = document.getElementById('lpv-corner-image-container');
    if (!container) return;

    const img = document.createElement('img');
    img.src       = 'Content/Images_LPVProfile/LPV.png';
    img.alt       = 'LPV Profile Reference';
    img.className = 'lpv-corner-image';
    container.appendChild(img);
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
            nextStepBtn.href = `layer1_NUs_selection.html`;
        }
    }

    // Header indicators
    renderLPVScale(65.2);
    if (code) renderEnergyStatus(code);

    // Data table
    if (code) populateLPVTable(code);

    // Corner image
    renderLPVImage();

    // Sidebar
    if (typeof buildSidebar === 'function' && code) {
        buildSidebar('lpv', 'selection');
    }
}

document.addEventListener('DOMContentLoaded', initLPVPage);
```

**Verify:** File contains no references to `setupLPVToggleButtons`, `.lpv-toggle-btn`,
or `lpv-parameter-buttons`. It contains `populateLPVTable`, `renderLPVImage`, and
`getLPVDataForNeighbourhood`.

---

## T4 — Rewrite the body content of `layer4_lpv_breakdown.html`

**File:** `layer4_lpv_breakdown.html`

**What to do:** Replace only the inner content of `<div id="visual-content" class="main-content">`.
Do not change the header, nav buttons, sidebar, or script tags.

**Find this exact block** (everything inside `<div id="visual-content" class="main-content">`):

```html
            <div id="visual-content" class="main-content">
                <!-- LPV Profile Content -->
                <div class="lpv-profile-layout">
                    <!-- Left Column: Inputs and KPIs -->
                    <div class="lpv-left-column">
                        <!-- Inputs Section -->
                        <div class="lpv-section">

                            <!-- Application Location -->
                            <div class="lpv-parameter-group">
                                <h3 class="lpv-parameter-label">Application Location</h3>
                                <div class="lpv-parameter-buttons">
                                    <button class="lpv-toggle-btn active" data-category="application-location"
                                        data-value="parking">Parking</button>
                                    <button class="lpv-toggle-btn" data-category="application-location"
                                        data-value="walking-lanes">Walking Lanes</button>
                                    <button class="lpv-toggle-btn" data-category="application-location"
                                        data-value="bus-stops">Bus Stops</button>
                                </div>
                            </div>

                            <!-- Height of Structure -->
                            <div class="lpv-parameter-group">
                                <h3 class="lpv-parameter-label">Height of Structure</h3>
                                <div class="lpv-parameter-buttons">
                                    <button class="lpv-toggle-btn active" data-category="height-structure"
                                        data-value="pedestrian">Pedestrian (2.5m)</button>
                                    <button class="lpv-toggle-btn" data-category="height-structure"
                                        data-value="vehicle">Vehicle
                                        (3.0m)</button>
                                    <button class="lpv-toggle-btn" data-category="height-structure"
                                        data-value="service">Service
                                        (4.5m+)</button>
                                </div>
                            </div>

                            <!-- Transparency -->
                            <div class="lpv-parameter-group">
                                <h3 class="lpv-parameter-label">Transparency</h3>
                                <div class="lpv-parameter-buttons">
                                    <button class="lpv-toggle-btn active" data-category="transparency"
                                        data-value="25">25%</button>
                                    <button class="lpv-toggle-btn" data-category="transparency"
                                        data-value="50">50%</button>
                                    <button class="lpv-toggle-btn" data-category="transparency"
                                        data-value="75">75%</button>
                                </div>
                            </div>
                        </div>

                        <!-- KPIs Section -->
                        <div class="lpv-section">

                            <!-- Land Use Efficiency -->
                            <div class="lpv-kpi-item">
                                <h3 class="lpv-kpi-label">Land Use Efficiency</h3>
                                <div class="lpv-kpi-value">185 kWh/m²/year</div>
                            </div>

                            <!-- UHI: Surface Temperature -->
                            <div class="lpv-kpi-item">
                                <h3 class="lpv-kpi-label">UHI: Surface Temperature</h3>
                                <div class="lpv-kpi-value">-14°C (25°F)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Visualization -->
                    <div class="lpv-right-column">
                        <div class="lpv-section">

                            <!-- Heatmap Overlay -->
                            <div class="lpv-chart-container">
                                <img src="Content/Images_LPVProfile/Heatmap Overlay Pedestrian Comfort.png"
                                    alt="Heatmap Overlay Pedestrian Comfort" class="lpv-chart-image">
                            </div>

                            <!-- Cross-Section Diagram -->
                            <div class="lpv-chart-container">
                                <img src="Content/Images_LPVProfile/Cross-Section Diagram.png"
                                    alt="Cross-Section Diagram" class="lpv-chart-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
```

**Replace with:**

```html
            <div id="visual-content" class="main-content">

                <!-- Corner image — top-right, anchored to .main-content -->
                <div id="lpv-corner-image-container" class="lpv-corner-image-container"></div>

                <!-- LPV Results Table -->
                <table id="lpv-table" class="lpv-table">
                    <thead>
                        <tr>
                            <th>Configurations</th>
                            <th>Parameters</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Row 1: Land Allocation | Module Capacity | Energy Generation -->
                        <tr>
                            <td>
                                <span class="metric-label">Land Allocation</span>
                                <span id="cfg-land-allocation" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Module Capacity</span>
                                <span id="cfg-module-capacity" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Energy Generation</span>
                                <span id="res-energy-generation" class="metric-value">—</span>
                            </td>
                        </tr>
                        <!-- Row 2: Usable Area | Installed Capacity | (empty) -->
                        <tr>
                            <td>
                                <span class="metric-label">Usable Area</span>
                                <span id="cfg-usable-area" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Installed Capacity</span>
                                <span id="cfg-installed-capacity" class="metric-value">—</span>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
```

**Also fix the duplicate `</main>` tag.** Find this near the end of `<body>`:

```html
    </main>
    </main>
```

Replace with:

```html
    </main>
```

**Verify:** Open the file and confirm:
- No `lpv-profile-layout`, `lpv-toggle-btn`, `lpv-kpi-value`, or static image references remain
inside `#visual-content`
- The IDs `cfg-land-allocation`, `cfg-usable-area`, `cfg-module-capacity`,
`cfg-installed-capacity`, `res-energy-generation` are all present
- `lpv-corner-image-container` div is present
- Only one closing `</main>` tag exists

---

## T5 — Add LPV styles to `css/styles.css`

**File:** `css/styles.css`

**What to do:** Append the following CSS block at the very end of the file (after all existing rules).

```css

/* ─────────────────────────────────────────────────────────
   LPV Breakdown Page
   ───────────────────────────────────────────────────────── */

/* Corner image — .main-content must be position:relative to anchor this */
.main-content {
    position: relative;
}

.lpv-corner-image-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 160px;
    z-index: 10;
}

.lpv-corner-image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    display: block;
}

/* LPV results table — mirrors .ev-v2g-table styling */
#lpv-table.lpv-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
}

#lpv-table.lpv-table thead th {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 0.75rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
}

#lpv-table.lpv-table tbody tr {
    border-bottom: 1px solid var(--border-color);
    transition: background 0.15s;
}

#lpv-table.lpv-table tbody tr:hover {
    background: rgba(0, 0, 0, 0.03);
}

#lpv-table.lpv-table tbody td {
    padding: 0.85rem 1rem;
    vertical-align: top;
}

/* Responsive: stack corner image above table on narrow screens */
@media (max-width: 768px) {
    .lpv-corner-image-container {
        position: static;
        width: 120px;
        margin: 0 0 1rem auto;
        display: block;
    }
}
```

**Verify:** Save the file. Open any existing page in the browser to confirm no existing styles
broke (`.main-content` getting `position: relative` is the only change that could affect other pages — check that no other page relied on it being `static`).

---

## T6 — Route to LPV page from Energy-Integrated GI selection

**File:** `js/green-selection.js`

**What to do:** Replace the `setupSubmitButton` function entirely.

**Find this exact function:**

```javascript
/**
 * Setup submit button to navigate to output green page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-green-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();

            // Store selections in sessionStorage (for future use)
            sessionStorage.setItem('greenSelections', JSON.stringify(greenSelections));

            if (neighbourhoodCode) {
                window.location.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            } else {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
            }
        });
    }
}
```

**Replace with:**

```javascript
/**
 * Setup submit button.
 * If any Energy-Integrated GI option is selected, navigate directly to the LPV breakdown page.
 * Otherwise navigate to the standard green output selection page.
 */
function setupSubmitButton() {
    const submitBtn = document.getElementById('view-green-btn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const neighbourhoodCode = getNeighbourhoodFromURL();

            // Persist all selections so other pages can read them
            sessionStorage.setItem('greenSelections', JSON.stringify(greenSelections));

            if (!neighbourhoodCode) {
                alert('No neighbourhood selected. Please go back and select a neighbourhood.');
                return;
            }

            // If any Energy-Integrated GI option is active, go directly to LPV breakdown
            if (greenSelections.energy_integrated.length > 0) {
                window.location.href = `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            } else {
                window.location.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
            }
        });
    }
}
```

**Verify:** The function now has two destination branches. No other functions in the file are changed.

---

## End-to-End Verification Checklist

After all six tasks are complete, open the interface in a browser and run through these checks:

### Check 1 — Data loads correctly
1. Open `layer4_lpv_breakdown.html?neighbourhood=RC1`
2. Confirm the table shows:
   - Land Allocation: `20%`
   - Usable Area: `10%`
   - Module Capacity: `400W`
   - Installed Capacity: `475 kWp`
   - Energy Generation: `608 MWh/year`
3. Change URL to `?neighbourhood=RC3` — same values should appear (all neighbourhoods share the same values in the current CSV)

### Check 2 — Corner image renders
1. On `layer4_lpv_breakdown.html?neighbourhood=RC1`, `LPV.png` should appear in the top-right corner of the content area
2. It should not overlap the table headings
3. On a narrow viewport (< 768px) it should appear above the table, left-aligned to the right

### Check 3 — Header indicators still work
1. The LPV scale bar renders with value `65.2` in the header
2. The energy status icon renders for the neighbourhood

### Check 4 — Navigation from Energy-Integrated GI
1. Open `layer4_green_selection.html?neighbourhood=RC1`
2. Click **"PV-Green Roofs Integrated Modules"** so it highlights active
3. Click **"View Green Performance"**
4. Confirm you land on `layer4_lpv_breakdown.html?neighbourhood=RC1`

### Check 5 — Existing navigation unaffected
1. Open `layer4_green_selection.html?neighbourhood=RC1`
2. Select only **"Green Roofs"** (Infrastructure) — do NOT select any Energy-Integrated GI option
3. Click **"View Green Performance"**
4. Confirm you land on `layer4_output_selection.html?neighbourhood=RC1` (unchanged behaviour)

### Check 6 — No broken layout on other pages
1. Open `layer3_ev_v2g_mobility_output.html?neighbourhood=RC1` and confirm its table still renders correctly (the `.main-content { position: relative }` CSS addition should have no visible effect here)

---

## Dependency Order Summary

```
T1 (add LPV_DATA)
  └─> T2 (export LPV_DATA)   ← T3 depends on LPV_DATA being available globally
        └─> T3 (rewrite lpv.js)
              └─> T4 (rewrite HTML)  ← element IDs must match T3's setText() calls
                    └─> T5 (add CSS) ← classes must match T4's class names
T6 (green-selection.js) ← independent, can be done at any point
```

---

## Layout Fix Tasks (T7 + T8)

T1–T6 were implemented but the page has layout problems: **everything renders on one line**
and the corner image **floats over the table**. The root causes are:

| Bug | Cause | Fix |
|---|---|---|
| Labels and values render inline (floating) | `.metric-label { display: block }` is only scoped to `.ev-v2g-table`, never added for `.lpv-table` | T7: add scoped metric rules to the LPV CSS block |
| Table header is transparent/broken | T5 used `var(--primary-color)` and `var(--accent-color)` — these variables **do not exist** in this project. The correct variable is `var(--accent-gradient)` | T7: fix header gradient |
| Corner image overlaps the table | T5 used `position: absolute` which pulls the image out of flow and covers the Results column | T8: switch to flex layout — table and image sit side by side in a row |

---

## T7 — Replace the broken LPV CSS block in `css/styles.css`

**File:** `css/styles.css`

**What to do:** Find the entire LPV section that was appended in T5 and replace it completely.

**Find this exact block** (the entire LPV section from its comment header to the closing `}` of the media query):

```css

/* ─────────────────────────────────────────────────────────
   LPV Breakdown Page
   ───────────────────────────────────────────────────────── */

/* Corner image — .main-content must be position:relative to anchor this */
.main-content {
    position: relative;
}

.lpv-corner-image-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 160px;
    z-index: 10;
}

.lpv-corner-image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    display: block;
}

/* LPV results table — mirrors .ev-v2g-table styling */
#lpv-table.lpv-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.5rem;
}

#lpv-table.lpv-table thead th {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 0.75rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
}

#lpv-table.lpv-table tbody tr {
    border-bottom: 1px solid var(--border-color);
    transition: background 0.15s;
}

#lpv-table.lpv-table tbody tr:hover {
    background: rgba(0, 0, 0, 0.03);
}

#lpv-table.lpv-table tbody td {
    padding: 0.85rem 1rem;
    vertical-align: top;
}

/* Responsive: stack corner image above table on narrow screens */
@media (max-width: 768px) {
    .lpv-corner-image-container {
        position: static;
        width: 120px;
        margin: 0 0 1rem auto;
        display: block;
    }
}
```

**Replace with:**

```css

/* ─────────────────────────────────────────────────────────
   LPV Breakdown Page
   ───────────────────────────────────────────────────────── */

/* Flex row: table takes remaining width, image is a fixed-width column on the right */
.lpv-content-layout {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

/* LPV results table */
#lpv-table.lpv-table {
  flex: 1;
  min-width: 0;
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-md);
  overflow: hidden;
}

#lpv-table.lpv-table thead th {
  background: var(--accent-gradient);
  color: #fff;
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  vertical-align: top;
}

#lpv-table.lpv-table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background var(--transition-fast);
}

#lpv-table.lpv-table tbody tr:last-child {
  border-bottom: none;
}

#lpv-table.lpv-table tbody tr:hover {
  background: rgba(102, 126, 234, 0.05);
}

#lpv-table.lpv-table tbody td {
  padding: 0.85rem 1.25rem;
  vertical-align: middle;
}

/* metric-label: small uppercase caption above the value — must be display:block */
#lpv-table.lpv-table .metric-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

/* metric-value: the actual data value, on its own line below the label */
#lpv-table.lpv-table .metric-value {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

/* Corner image — fixed-width flex child on the right */
.lpv-corner-image-container {
  flex-shrink: 0;
  width: 180px;
}

.lpv-corner-image {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  display: block;
}

/* Responsive: stack image above table on narrow screens */
@media (max-width: 768px) {
  .lpv-content-layout {
    flex-direction: column;
  }

  .lpv-corner-image-container {
    width: 120px;
    align-self: flex-end;
  }
}
```

**Verify:**
- The words `--primary-color` and `--accent-color` no longer appear in the LPV section
- `.metric-label { display: block }` and `.metric-value { display: block }` are present, scoped to `#lpv-table.lpv-table`
- `.lpv-content-layout { display: flex }` is present
- `.lpv-corner-image-container` has `flex-shrink: 0` and `width: 180px` — no `position: absolute`
- The old `.main-content { position: relative }` rule is gone from the LPV section

---

## T8 — Add flex wrapper in `layer4_lpv_breakdown.html`

**File:** `layer4_lpv_breakdown.html`

**What to do:** Wrap the table and the corner image container inside a single
`<div class="lpv-content-layout">`. The table must come first (left side), the image
container second (right side) — flex places them in source order.

**Find this exact block:**

```html
            <div id="visual-content" class="main-content">

                <!-- Corner image — top-right, anchored to .main-content -->
                <div id="lpv-corner-image-container" class="lpv-corner-image-container"></div>

                <!-- LPV Results Table -->
                <table id="lpv-table" class="lpv-table">
                    <thead>
                        <tr>
                            <th>Configurations</th>
                            <th>Parameters</th>
                            <th>Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Row 1: Land Allocation | Module Capacity | Energy Generation -->
                        <tr>
                            <td>
                                <span class="metric-label">Land Allocation</span>
                                <span id="cfg-land-allocation" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Module Capacity</span>
                                <span id="cfg-module-capacity" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Energy Generation</span>
                                <span id="res-energy-generation" class="metric-value">—</span>
                            </td>
                        </tr>
                        <!-- Row 2: Usable Area | Installed Capacity | (empty) -->
                        <tr>
                            <td>
                                <span class="metric-label">Usable Area</span>
                                <span id="cfg-usable-area" class="metric-value">—</span>
                            </td>
                            <td>
                                <span class="metric-label">Installed Capacity</span>
                                <span id="cfg-installed-capacity" class="metric-value">—</span>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>
```

**Replace with:**

```html
            <div id="visual-content" class="main-content">

                <div class="lpv-content-layout">

                    <!-- LPV Results Table (left, takes remaining width) -->
                    <table id="lpv-table" class="lpv-table">
                        <thead>
                            <tr>
                                <th>Configurations</th>
                                <th>Parameters</th>
                                <th>Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Row 1: Land Allocation | Module Capacity | Energy Generation -->
                            <tr>
                                <td>
                                    <span class="metric-label">Land Allocation</span>
                                    <span id="cfg-land-allocation" class="metric-value">—</span>
                                </td>
                                <td>
                                    <span class="metric-label">Module Capacity</span>
                                    <span id="cfg-module-capacity" class="metric-value">—</span>
                                </td>
                                <td>
                                    <span class="metric-label">Energy Generation</span>
                                    <span id="res-energy-generation" class="metric-value">—</span>
                                </td>
                            </tr>
                            <!-- Row 2: Usable Area | Installed Capacity | (empty) -->
                            <tr>
                                <td>
                                    <span class="metric-label">Usable Area</span>
                                    <span id="cfg-usable-area" class="metric-value">—</span>
                                </td>
                                <td>
                                    <span class="metric-label">Installed Capacity</span>
                                    <span id="cfg-installed-capacity" class="metric-value">—</span>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Corner image (right, fixed width 180px) -->
                    <div id="lpv-corner-image-container" class="lpv-corner-image-container"></div>

                </div>

            </div>
```

**Verify:**
- The `<div class="lpv-content-layout">` wraps both the `<table>` and the `#lpv-corner-image-container`
- The `<table>` appears **before** the `<div id="lpv-corner-image-container">` in the source (table = left, image = right)
- All five element IDs (`cfg-land-allocation`, `cfg-usable-area`, `cfg-module-capacity`, `cfg-installed-capacity`, `res-energy-generation`) are still present and unchanged
- No other part of the file was modified

---

## Updated Verification Checklist (post T7 + T8)

### Check 1 — Labels and values stack correctly (primary fix)
1. Open `layer4_lpv_breakdown.html?neighbourhood=RC1`
2. In each table cell, the label (e.g. "Land Allocation") should appear on its own line in small grey uppercase text
3. The value (e.g. "20%") should appear on the next line in larger bold text
4. No label and value should appear side-by-side on the same line

### Check 2 — Table header has colour
1. The three column headers (Configurations, Parameters, Results) should have the purple gradient background (`#667eea → #764ba2`)
2. Header text should be white

### Check 3 — Corner image does not overlap the table
1. `LPV.png` should appear to the **right** of the table as a separate column, not on top of it
2. The table should occupy the full left portion of the content area
3. Resize the browser to < 768px — the image should move above the table and align to the right edge

### Check 4 — Data values populate correctly
1. Land Allocation: `20%`, Usable Area: `10%`, Module Capacity: `400W`,
   Installed Capacity: `475 kWp`, Energy Generation: `608 MWh/year`

### Check 5 — EV/V2G page unaffected
1. Open `layer3_ev_v2g_mobility_output.html?neighbourhood=RC1`
2. Its table should look identical to before — no regressions from T7

---

## Updated Dependency Order

```
T1 → T2 → T3 → T4 → T5 (original implementation — all completed)
T6 (green-selection routing — completed)

T7 (fix CSS block — replaces broken T5 output) — completed
  └─> T8 (add .lpv-content-layout wrapper in HTML) — completed
```

---

## Visual Header Tasks (T9 + T10 + T11)

T7 and T8 fixed the floating layout and broken CSS variables. The next improvement adds a
**visual image header row** above the table — three cards side by side showing:
1. The selected Energy-Integrated GI option image (from `sessionStorage`)
2. The neighbourhood image (from `NEIGHBOURHOODS`)
3. `LPV.png` (always present)

This matches the pattern on `layer3_ev_v2g_mobility_output.html` exactly.
The existing `.ev-header-card`, `.ev-header-card-img`, `.ev-header-card-label` CSS classes
are already global and will be reused. Only the row container needs a new CSS rule.

The corner image (currently beside the table in the flex row) is **replaced** by the header row.

---

## T9 — Update `js/lpv.js`: replace `renderLPVImage` with `renderLPVVisualHeader`

**File:** `js/lpv.js`

**What to do:** Make three targeted edits to the current file.

### Edit 9a — Add the `GI_IMAGE_MAP` constant

Add this block immediately after the closing `}` of `renderEnergyStatus`:

```javascript
// Maps energy_integrated selection values to their image paths and display labels
const GI_IMAGE_MAP = {
    'pv_green_roofs': {
        src:   'Content/Images_Layer4_EnergyIntegratedGI/PV-Green Roofs Integrated Modules.png',
        label: 'PV-Green Roofs'
    },
    'pv_vgs': {
        src:   'Content/Images_Layer4_EnergyIntegratedGI/PV-VGS Integrated Modules.png',
        label: 'PV-VGS Modules'
    }
};
```

### Edit 9b — Replace `renderLPVImage()` with `renderLPVVisualHeader(code)`

**Find this exact function:**

```javascript
/**
 * Inject LPV.png into the corner image container.
 */
function renderLPVImage() {
    const container = document.getElementById('lpv-corner-image-container');
    if (!container) return;

    const img = document.createElement('img');
    img.src       = 'Content/Images_LPVProfile/LPV.png';
    img.alt       = 'LPV Profile Reference';
    img.className = 'lpv-corner-image';
    container.appendChild(img);
}
```

**Replace with:**

```javascript
/**
 * Build a single image card HTML string — mirrors makeImageCard() in ev-v2g-breakdown.js.
 * @param {string} src
 * @param {string} label
 * @param {string} extraClass
 * @returns {string}
 */
function makeLPVImageCard(src, label, extraClass) {
    return `
        <div class="ev-header-card ${extraClass || ''}">
            <img src="${src}" alt="${label}" class="ev-header-card-img"
                 onerror="this.parentElement.style.display='none'">
            <span class="ev-header-card-label">${label}</span>
        </div>`;
}

/**
 * Render the visual header row above the LPV table.
 * Card order: selected GI option(s) → neighbourhood image → LPV.png
 * @param {string} code - neighbourhood code e.g. "RC1"
 */
function renderLPVVisualHeader(code) {
    const container = document.getElementById('lpv-visual-header');
    if (!container) return;

    let cards = '';

    // 1. Selected Energy-Integrated GI option(s) from sessionStorage
    const stored = sessionStorage.getItem('greenSelections');
    const greenSelections = stored ? JSON.parse(stored) : { energy_integrated: [] };
    const energyIntegrated = greenSelections.energy_integrated || [];

    energyIntegrated.forEach(function(value) {
        const map = GI_IMAGE_MAP[value];
        if (map) {
            cards += makeLPVImageCard(map.src, map.label, 'ev-header-card--gi');
        }
    });

    // 2. Neighbourhood image
    const nuData = (typeof NEIGHBOURHOODS !== 'undefined')
        ? NEIGHBOURHOODS.find(function(n) { return n.code === code; })
        : null;
    if (nuData && nuData.image) {
        cards += makeLPVImageCard(nuData.image, code, 'ev-header-card--neighbourhood');
    }

    // 3. LPV.png — always last
    cards += makeLPVImageCard(
        'Content/Images_LPVProfile/LPV.png',
        'LPV Profile',
        'ev-header-card--lpv'
    );

    container.innerHTML = cards;
}
```

### Edit 9c — Update `initLPVPage()` to call `renderLPVVisualHeader` instead of `renderLPVImage`

**Find this line** inside `initLPVPage()`:

```javascript
    // Corner image
    renderLPVImage();
```

**Replace with:**

```javascript
    // Visual header row
    if (code) renderLPVVisualHeader(code);
```

**Verify:** `lpv.js` now contains `GI_IMAGE_MAP`, `makeLPVImageCard`, `renderLPVVisualHeader`.
`renderLPVImage` no longer exists. `initLPVPage` calls `renderLPVVisualHeader(code)`.

---

## T10 — Update `layer4_lpv_breakdown.html`: swap corner image for visual header row

**File:** `layer4_lpv_breakdown.html`

**What to do:** Two changes inside `<div id="visual-content" class="main-content">`.

### Change 10a — Add the visual header div above the content layout

**Find this exact opening:**

```html
            <div id="visual-content" class="main-content">

                <div class="lpv-content-layout">
```

**Replace with:**

```html
            <div id="visual-content" class="main-content">

                <!-- Visual header: GI selection image | neighbourhood image | LPV.png -->
                <div id="lpv-visual-header" class="lpv-visual-header-row"></div>

                <div class="lpv-content-layout">
```

### Change 10b — Remove the corner image container from the flex row

**Find this block** (the corner image div inside `lpv-content-layout`):

```html
                    <!-- Corner image (right, fixed width 180px) -->
                    <div id="lpv-corner-image-container" class="lpv-corner-image-container"></div>

                </div>
```

**Replace with:**

```html
                </div>
```

**Verify:** The file now has `<div id="lpv-visual-header" class="lpv-visual-header-row"></div>`
before `lpv-content-layout`. The `lpv-corner-image-container` div is gone.
The table is the only child of `lpv-content-layout`.

---

## T11 — Update `css/styles.css`: add `.lpv-visual-header-row`, remove corner image rules

**File:** `css/styles.css`

**What to do:** Find the current LPV CSS section and replace it.

**Find this exact block:**

```css
/* ─────────────────────────────────────────────────────────
   LPV Breakdown Page
   ───────────────────────────────────────────────────────── */

/* Flex row: table takes remaining width, image is a fixed-width column on the right */
.lpv-content-layout {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

/* LPV results table */
#lpv-table.lpv-table {
  flex: 1;
  min-width: 0;
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-md);
  overflow: hidden;
}

#lpv-table.lpv-table thead th {
  background: var(--accent-gradient);
  color: #fff;
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  vertical-align: top;
}

#lpv-table.lpv-table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background var(--transition-fast);
}

#lpv-table.lpv-table tbody tr:last-child {
  border-bottom: none;
}

#lpv-table.lpv-table tbody tr:hover {
  background: rgba(102, 126, 234, 0.05);
}

#lpv-table.lpv-table tbody td {
  padding: 0.85rem 1.25rem;
  vertical-align: middle;
}

/* metric-label: small uppercase caption — must be display:block to sit above the value */
#lpv-table.lpv-table .metric-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

/* metric-value: the actual data value on its own line */
#lpv-table.lpv-table .metric-value {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

/* Corner image — fixed-width flex child on the right */
.lpv-corner-image-container {
  flex-shrink: 0;
  width: 180px;
}

.lpv-corner-image {
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  display: block;
}

/* Responsive: stack image above table on narrow screens */
@media (max-width: 768px) {
  .lpv-content-layout {
    flex-direction: column;
  }

  .lpv-corner-image-container {
    width: 120px;
    align-self: flex-end;
  }
}
```

**Replace with:**

```css
/* ─────────────────────────────────────────────────────────
   LPV Breakdown Page
   ───────────────────────────────────────────────────────── */

/* Visual header row — mirrors .ev-visual-header-row */
.lpv-visual-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}

/* LPV results table */
#lpv-table.lpv-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  box-shadow: var(--shadow-card);
  border-radius: var(--radius-md);
  overflow: hidden;
}

#lpv-table.lpv-table thead th {
  background: var(--accent-gradient);
  color: #fff;
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  vertical-align: top;
}

#lpv-table.lpv-table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background var(--transition-fast);
}

#lpv-table.lpv-table tbody tr:last-child {
  border-bottom: none;
}

#lpv-table.lpv-table tbody tr:hover {
  background: rgba(102, 126, 234, 0.05);
}

#lpv-table.lpv-table tbody td {
  padding: 0.85rem 1.25rem;
  vertical-align: middle;
}

/* metric-label: small uppercase caption — must be display:block to sit above the value */
#lpv-table.lpv-table .metric-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

/* metric-value: the actual data value on its own line */
#lpv-table.lpv-table .metric-value {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}
```

**Verify:**
- `.lpv-visual-header-row` is present with `display: flex` and matches `.ev-visual-header-row`
- `.lpv-content-layout`, `.lpv-corner-image-container`, `.lpv-corner-image` rules are gone
- Table CSS is unchanged from T7

---

## Final Verification Checklist (post T9 + T10 + T11)

### Check 1 — Visual header row renders
1. Open `layer4_lpv_breakdown.html?neighbourhood=RC1`
2. Before the table, a card row should appear with a light card background and shadow
3. The row should contain cards in this order:
   - If `pv_green_roofs` was selected in sessionStorage: the PV-Green Roofs image with label "PV-Green Roofs"
   - If `pv_vgs` was selected: the PV-VGS image with label "PV-VGS Modules"
   - Neighbourhood image with label "RC1"
   - LPV.png with label "LPV Profile"

### Check 2 — Fallback when sessionStorage is empty
1. Open the page directly without navigating from `layer4_green_selection.html`
2. No GI cards should appear (the `energy_integrated` array is empty)
3. The neighbourhood card and LPV.png card should still render

### Check 3 — Table renders correctly below the header
1. Labels are stacked above values in each cell (not inline)
2. Table header has the purple gradient
3. Table occupies full width of the content area (no side column)

### Check 4 — No broken images
1. Each card hides itself via `onerror` if its image file is missing
2. Other cards are unaffected when one fails to load

### Check 5 — EV/V2G page unaffected
1. Open `layer3_ev_v2g_mobility_output.html?neighbourhood=RC1`
2. Its visual header and table must look identical to before

---

## Final Dependency Order

```
T1 → T2 → T3 → T4 → T5 (original implementation — completed)
T6 (green-selection routing — completed)
T7 (fix CSS) → T8 (fix HTML flex wrapper) — completed

T9  (lpv.js: add GI_IMAGE_MAP + renderLPVVisualHeader, remove renderLPVImage)
  └─> T10 (HTML: add lpv-visual-header div, remove lpv-corner-image-container)
        └─> T11 (CSS: swap corner image rules for lpv-visual-header-row rule)
```
