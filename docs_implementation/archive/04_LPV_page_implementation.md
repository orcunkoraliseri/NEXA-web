# Implementation Plan — LPV Breakdown Page (Dynamic Data)

## Goal

Convert `layer4_lpv_breakdown.html` from a static mock-up into a dynamic, data-driven results page.
Data source: `Templates/NUs_LPV.csv`
Reference implementation style: `layer3_ev_v2g_mobility_output.html` + `js/ev-v2g-breakdown.js`
Visual header: three image cards above the table showing the selected Energy-Integrated GI option,
the neighbourhood image, and `LPV.png` — side by side, matching the EV & V2G page pattern.
Navigation trigger: selecting any "Energy-Integrated GI" parameter on `layer4_green_selection.html`
routes the user directly to this page.

---

## Current State

| Aspect | Status |
|---|---|
| Layout | Two-column mock-up (left: toggle buttons + KPI hardcoded values; right: static chart images) |
| Data | Hardcoded — `185 kWh/m²/year`, `-14°C` |
| JavaScript (`js/lpv.js`) | Only sets up toggle buttons, energy status, scale bar, sidebar, and nav links — no CSV parsing |
| CSV (`Templates/NUs_LPV.csv`) | Not yet consumed by any script |
| Navigation entry point | Reachable only via a button on `layer4_output_selection.html` — not connected to green parameter selection |

---

## Current Navigation Flow (before this plan)

```
layer4_green_selection.html
        |
        | (submit — always)
        v
layer4_output_selection.html
        |
        | (manual "Proceed to LPV" button)
        v
layer4_lpv_breakdown.html
```

## Target Navigation Flow (after this plan)

```
layer4_green_selection.html
        |
        |-- Energy-Integrated GI selected? YES ──────────────────────┐
        |                                                             v
        |                                              layer4_lpv_breakdown.html
        |                                               (dynamic, data-driven)
        |-- Energy-Integrated GI selected? NO
        |
        v
layer4_output_selection.html
        |
        | (unchanged path for other green parameters)
        v
  ... rest of flow
```

---

## CSV Structure

```
,Neighbourhood,    RC1,    RC2,    RC3,    RC4,    RC5,    RC6
Config.,Land Allocation,        20%, ...
Config.,Usable Area,            10%, ...
Config.,Module Capacity,        400W, ...
Config.,Installed Capacity,     475 kWp, ...
Results,Energy Generation,      608 MWh/year, ...
```

- **Column 0**: category tag (`Config.` or `Results`)
- **Column 1**: row/parameter label
- **Columns 2–7**: values for RC1–RC6 respectively

---

## Proposed Page Layout

The new `layer4_lpv_breakdown.html` mirrors the EV & V2G breakdown page exactly:
a visual image header above the data table, both inside the main content area.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│  HEADER                                                                         │
│  Layer 4: Land-PV Generation — RC1              [Energy Status] [LPV Scale]     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│  NAV BAR                                                                        │
│  [← Back to Green Results]                        [Finish Design →]             │
└─────────────────────────────────────────────────────────────────────────────────┘

┌───────────────┬─────────────────────────────────────────────────────────────────┐
│               │  VISUAL HEADER ROW                                              │
│  SIDEBAR      │  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐        │
│               │  │  GI option   │   │ Neighbourhood│   │  LPV.png     │        │
│  [RC1 card]   │  │    image     │   │    image     │   │   image      │        │
│  [RC2 card]   │  │              │   │              │   │              │        │
│  [RC3 card]   │  │  PV-Green    │   │    RC1       │   │ LPV Profile  │        │
│  [RC4 card]   │  │   Roofs      │   │              │   │              │        │
│  [RC5 card]   │  └──────────────┘   └──────────────┘   └──────────────┘        │
│               │                                                                 │
│               │  ┌──────────────────────────────────────────────────────────┐  │
│               │  │  TABLE: LPV Results                                      │  │
│               │  ├───────────────────┬──────────────────┬───────────────────┤  │
│               │  │  Configurations   │   Parameters     │   Results         │  │
│               │  ├───────────────────┼──────────────────┼───────────────────┤  │
│               │  │  LAND ALLOCATION  │  MODULE CAPACITY │ ENERGY GENERATION │  │
│               │  │  20%              │  400W            │ 608 MWh/year      │  │
│               │  ├───────────────────┼──────────────────┼───────────────────┤  │
│               │  │  USABLE AREA      │ INSTALLED CAP.   │        —          │  │
│               │  │  10%              │ 475 kWp          │                   │  │
│               │  └───────────────────┴──────────────────┴───────────────────┘  │
│               │                                                                 │
└───────────────┴─────────────────────────────────────────────────────────────────┘
```

### Visual Header Card Order

| Position | Content | Source |
|---|---|---|
| 1st card | Selected Energy-Integrated GI option image | `sessionStorage → greenSelections.energy_integrated` |
| 2nd card | Neighbourhood image | `NEIGHBOURHOODS.find(n => n.code === code).image` |
| 3rd card | LPV.png | Always shown — `Content/Images_LPVProfile/LPV.png` |

If the user selected both GI options (`pv_green_roofs` and `pv_vgs`), each renders as its own card
before the neighbourhood card.

### Table Column Meaning

| Column | Content |
|---|---|
| **Configurations** | User-defined input parameters (Land Allocation, Usable Area) |
| **Parameters** | System/module specifications (Module Capacity, Installed Capacity) |
| **Results** | Computed outputs from the CSV (Energy Generation) |

---

## Implementation Steps

### Step 1 — Embed LPV data in `js/data.js`

Add a `LPV_DATA` constant after the existing constants:

```javascript
// js/data.js — append after existing constants
const LPV_DATA = {
  columns: ["RC1", "RC2", "RC3", "RC4", "RC5", "RC6"],
  rows: [
    { category: "Config.",  label: "Land Allocation",          values: { RC1: "20%",          RC2: "20%",          RC3: "20%",          RC4: "20%",          RC5: "20%",          RC6: "20%"          } },
    { category: "Config.",  label: "Usable Area",              values: { RC1: "10%",          RC2: "10%",          RC3: "10%",          RC4: "10%",          RC5: "10%",          RC6: "10%"          } },
    { category: "Config.",  label: "Module Capacity",          values: { RC1: "400W",         RC2: "400W",         RC3: "400W",         RC4: "400W",         RC5: "400W",         RC6: "400W"         } },
    { category: "Config.",  label: "Installed Capacity (kWp)", values: { RC1: "475 kWp",      RC2: "475 kWp",      RC3: "475 kWp",      RC4: "475 kWp",      RC5: "475 kWp",      RC6: "475 kWp"      } },
    { category: "Results",  label: "Energy Generation",        values: { RC1: "608 MWh/year", RC2: "608 MWh/year", RC3: "608 MWh/year", RC4: "608 MWh/year", RC5: "608 MWh/year", RC6: "608 MWh/year" } }
  ]
};
```

> If the CSV gains more rows later, only this constant needs updating — the JS rendering is generic.

---

### Step 2 — Rewrite `js/lpv.js`

Replace the toggle-button logic entirely with data-driven table population, modelled on
`ev-v2g-breakdown.js`.

**Functions to implement:**

```javascript
// Already exists — keep unchanged
function getNeighbourhoodFromURL() { ... }

// New: split LPV_DATA rows by category for the selected neighbourhood
function getLPVDataForNeighbourhood(code) {
  const configs = LPV_DATA.rows
    .filter(r => r.category === "Config.")
    .map(r => ({ label: r.label, value: r.values[code] || "—" }));
  const results = LPV_DATA.rows
    .filter(r => r.category === "Results")
    .map(r => ({ label: r.label, value: r.values[code] || "—" }));
  return { configs, results };
}

// New: set a single element's text by id
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// New: populate all table cells
function populateLPVTable(code) {
  const { configs, results } = getLPVDataForNeighbourhood(code);
  // Map to element IDs defined in HTML (see Step 3)
  setText('cfg-land-allocation',   configs[0]?.value);
  setText('cfg-usable-area',       configs[1]?.value);
  setText('cfg-module-capacity',   configs[2]?.value);
  setText('cfg-installed-capacity',configs[3]?.value);
  setText('res-energy-generation', results[0]?.value);
}

// New: inject LPV.png into corner container
function renderLPVImage() {
  const container = document.getElementById('lpv-corner-image-container');
  if (!container) return;
  const img = document.createElement('img');
  img.src       = 'Content/Images_LPVProfile/LPV.png';
  img.alt       = 'LPV Profile Reference';
  img.className = 'lpv-corner-image';
  container.appendChild(img);
}

// Updated init — replaces current initLPVPage()
function initLPVPage() {
  const code = getNeighbourhoodFromURL();

  // Title
  const title = document.getElementById('neighbourhood-title');
  if (title) title.textContent = `Layer 4: Land-PV Profile — ${code}`;

  // Nav buttons
  const backBtn = document.getElementById('back-step-btn');
  const nextBtn = document.getElementById('next-step-btn');
  if (backBtn && code) backBtn.href = `layer4_output_selection.html?neighbourhood=${encodeURIComponent(code)}`;
  if (nextBtn && code) nextBtn.href = `layer1_NUs_selection.html?neighbourhood=${encodeURIComponent(code)}`;

  // Header indicators
  renderEnergyStatus(code);
  renderLPVScale(/* value derived from LPV_DATA for code */);

  // Table + corner image
  populateLPVTable(code);
  renderLPVImage();

  // Sidebar
  buildSidebar(code, 'lpv', 'selection');
}

document.addEventListener('DOMContentLoaded', initLPVPage);
```

---

### Step 3 — Rewrite `layer4_lpv_breakdown.html` body

Replace the entire `lpv-profile-layout` two-column mock-up with the new structure:

```html
<div id="visual-content" class="main-content">

  <!-- Corner image — positioned top-right within .main-content -->
  <div id="lpv-corner-image-container" class="lpv-corner-image-container"></div>

  <!-- Data table -->
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

> Remove the `<script src="js/lpv.js">` reference is NOT needed — keep it. Just the HTML body content changes.

---

### Step 4 — Add CSS in `css/styles.css`

```css
/* ── LPV Breakdown Page ───────────────────────────── */

/* Corner image anchor — main-content must be position:relative */
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
  /* Match ev-v2g-table header gradient */
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 600;
}

#lpv-table.lpv-table tbody tr {
  border-bottom: 1px solid var(--border-color);
  transition: background 0.15s;
}

#lpv-table.lpv-table tbody tr:hover {
  background: rgba(var(--primary-rgb), 0.04);
}

#lpv-table.lpv-table tbody td {
  padding: 0.85rem 1rem;
  vertical-align: top;
}

/* Ensure main-content is positioned so the corner image anchors correctly */
.main-content {
  position: relative;
}

/* Responsive: hide corner image on narrow viewports */
@media (max-width: 768px) {
  .lpv-corner-image-container {
    position: static;
    width: 120px;
    margin: 0 0 1rem auto;
    display: block;
  }
}
```

---

### Step 5 — Connect Energy-Integrated GI selection to LPV page

**File to modify:** `js/green-selection.js`

**Current behaviour:** The submit button always navigates to `layer4_output_selection.html`.

**New behaviour:** If the user has selected at least one `energy_integrated` parameter, route
directly to `layer4_lpv_breakdown.html` instead.

```javascript
// In green-selection.js — replace setupSubmitButton()
function setupSubmitButton() {
  const submitBtn = document.getElementById('view-green-btn');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const neighbourhoodCode = getNeighbourhoodFromURL();

      // Persist all selections for the sidebar / other pages to read
      sessionStorage.setItem('greenSelections', JSON.stringify(greenSelections));

      if (!neighbourhoodCode) {
        alert('No neighbourhood selected. Please go back and select a neighbourhood.');
        return;
      }

      // If any Energy-Integrated GI option is selected → go to LPV breakdown directly
      if (greenSelections.energy_integrated.length > 0) {
        window.location.href =
          `layer4_lpv_breakdown.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
      } else {
        window.location.href =
          `layer4_output_selection.html?neighbourhood=${encodeURIComponent(neighbourhoodCode)}`;
      }
    });
  }
}
```

> The two `energy_integrated` values that trigger this are:
> - `pv_green_roofs` (PV-Green Roofs Integrated Modules)
> - `pv_vgs` (PV-VGS Integrated Modules)

---

## File Change Summary

| File | Change Type | Description |
|---|---|---|
| `js/data.js` | Addition | Add `LPV_DATA` constant with all rows from `NUs_LPV.csv` |
| `js/lpv.js` | Rewrite | Replace toggle logic with CSV data table population + corner image |
| `layer4_lpv_breakdown.html` | Body rewrite | Replace two-column mock-up with structured table + corner image container |
| `css/styles.css` | Addition | Add `.lpv-corner-image-*`, `.lpv-table`, and `.main-content { position:relative }` rules |
| `js/green-selection.js` | Edit (1 function) | `setupSubmitButton()` — route to LPV page when `energy_integrated` is selected |

---

## Acceptance Criteria

- [ ] Navigating to `layer4_lpv_breakdown.html?neighbourhood=RC1` shows RC1 data; switching to RC3 shows RC3 data
- [ ] All 5 CSV rows (Land Allocation, Usable Area, Module Capacity, Installed Capacity, Energy Generation) are displayed in the correct table columns
- [ ] `LPV.png` appears in the top-right corner of the content area and does not overlap the table
- [ ] Sidebar, header energy status, LPV scale bar, and nav buttons continue to function correctly
- [ ] No hardcoded values remain in the HTML; all data comes from `LPV_DATA` in `data.js`
- [ ] On `layer4_green_selection.html`, selecting either `pv_green_roofs` or `pv_vgs` and clicking "View Green Performance" routes directly to `layer4_lpv_breakdown.html`
- [ ] On `layer4_green_selection.html`, selecting only Infrastructure or Urban Agriculture options still routes to `layer4_output_selection.html` as before
- [ ] Page is responsive — corner image does not overflow on narrow screens (≤ 768px)

---

## Notes & Risks

- **CSV completeness**: The current `NUs_LPV.csv` has only 5 data rows and 6 neighbourhoods (RC1–RC6). If additional rows are added later, only `LPV_DATA` in `data.js` needs updating.
- **RC6 not in `NEIGHBOURHOODS`**: `data.js` only defines RC1–RC5. If RC6 is a valid navigation target, check whether the sidebar and energy status logic need updating separately.
- **`main-content` positioning**: The CSS step adds `position: relative` to `.main-content`. Verify this does not break the absolute positioning of any other elements that already rely on this class.
- **Mixed selection**: If a user selects both Infrastructure items AND an Energy-Integrated GI item, Step 5 routes them to the LPV page. The `greenSelections` object is still persisted to `sessionStorage`, so other pages can still read those selections from there if needed.
- **Back button on LPV page**: After routing from Green Selection → LPV directly, the back button should return to `layer4_green_selection.html` (not `layer4_output_selection.html`). Consider updating the back button href in `initLPVPage()` to read a `from` URL param or always point to the green selection page.
