# PV Page Layout Update — Implementation Plan

## Overview

Redesign `layer2_pv_breakdown.html` from a two-column layout to a three-row layout for all neighbourhoods **except RC-HR2** (which keeps the current layout).

---

## New Page Layout (RC-R, RC-D, RC-T, RC-MR2, RC-MR3)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  HEADER: Layer 2: PV Generation of {neighbourhood}                          │
│  [ Energy Status Icon ]               [ PV Scale Bar ]                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ROW 1 — Stats Bar (horizontal, 6 items)                                    │
│                                                                             │
│  PV Surface  │  PV Efficiency  │  PV Mounting  │  GCR  │  PV Gen  │  RoP  │
│    Roof      │    18.68%       │  Fixed Roof   │  40%  │  91.38   │  —    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ROW 2 — Wall                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │                 │  │                 │  │                 │             │
│  │  Wall Hourly    │  │  Wall Incident  │  │  Wall Direct    │             │
│  │  Heatmap        │  │  Radiation (IR) │  │  Sun Hours(DSH) │             │
│  │  (cropped PNG)  │  │  (IR.png)       │  │  (DSH.png)      │             │
│  │                 │  │                 │  │                 │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  ROW 3 — Roof                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │                 │  │                 │  │                 │             │
│  │  Roof Hourly    │  │  Roof Incident  │  │  Roof Direct    │             │
│  │  Heatmap        │  │  Radiation (IR) │  │  Sun Hours(DSH) │             │
│  │  (cropped PNG)  │  │  (IR.png)       │  │  (DSH.png)      │             │
│  │                 │  │                 │  │                 │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Image Assets Per Neighbourhood

All images live under `Content/Images_PVpage/RC/{NN}/` where `{NN}` is the neighbourhood code.

| Neighbourhood | Wall Hourly | Wall IR | Wall DSH | Roof Hourly | Roof IR | Roof DSH |
|---|---|---|---|---|---|---|
| RC-R  | `RC-R_Wall_Hourly_cropped.png` *(canvas)* | `RC-R_Wall_IR_compressed_cropped.png` | `RC-R_Wall_DSH_compressed_cropped.png` | `RC-R_Roof_Hourly_cropped.png` *(canvas)* | `RC-R_Roof_IR_compressed_cropped.png` | `RC-R_Roof_DSH_compressed_cropped.png` |
| RC-D  | `RC-D_Wall_Hourly_cropped.png` *(canvas)* | `RC-D_Wall_IR_compressed_cropped.png` | `RC-D_Wall_DSH_compressed_cropped.png` | `RC-D_Roof_Hourly_cropped.png` *(canvas)* | `RC-D_Roof_IR_compressed_cropped.png` | `RC-D_Roof_DSH_compressed_cropped.png` |
| RC-T  | `RC-T_Wall_Hourly_cropped.png` *(canvas)* | `RC-T_Wall_IR_compressed_cropped.png` | `RC-T_Wall_DSH_compressed_cropped.png` | `RC-T_Roof_Hourly_cropped.png` *(canvas)* | `RC-T_Roof_IR_compressed_cropped.png` | `RC-T_Roof_DSH_compressed_cropped.png` |
| RC-MR2 | `RC-MR2_Wall_Hourly_cropped.png` *(canvas)* | `RC-MR2_Wall_IR_compressed_cropped.png` | `RC-MR2_Wall_DSH_compressed_cropped.png` | `RC-MR2_Roof_Hourly_cropped.png` *(canvas)* | `RC-MR2_Roof_IR_compressed_cropped.png` | `RC-MR2_Roof_DSH_compressed_cropped.png` |
| RC-MR3 | `RC-MR3_Wall_Hourly_cropped.png` *(canvas)* | `RC-MR3_Wall_IR_compressed_cropped.png` ⚠️ | `RC-MR3_Wall_DSH_compressed_cropped.png` | `RC-MR3_Roof_Hourly_cropped.png` *(canvas)* | `RC-MR3_Roof_IR_compressed_cropped.png` | `RC-MR3_Roof_DSH_compressed_cropped.png` |
| RC-HR2 | — (keep existing layout) | — | — | — | — | — |

> *(canvas)* — Hourly heatmap columns are rendered at runtime from `HOURLY_HEATMAP_DATA` (embedded CSV data); the PNG file is not loaded by the page.
>
> ⚠️ **RC-MR3 naming issue:** The file on disk is `RC3_Wall_IR_compressed_cropped.png` (missing `-MR`). The JS expects `RC-MR3_Wall_IR_compressed_cropped.png`. This file needs to be renamed to load correctly.

> **Note on Hourly Heatmaps:** The `.py` files (e.g. `RC-R_Wall_Hourly_cropped.py`) are the Python/Matplotlib scripts that generated the `_cropped.png` files from the corresponding `_cropped.csv` files. The browser uses the pre-generated PNGs directly — no runtime Python execution needed.

---

## Files to Modify

### 1. `layer2_pv_breakdown.html`

Replace the existing `pv-profile-layout` div (two-column) with the new three-row structure:

```html
<div id="pv-new-layout">

  <!-- ROW 1: Stats Bar -->
  <div class="pv-stats-bar">
    <div class="pv-stat-item">
      <span class="pv-stat-label">PV Surface:</span>
      <span class="pv-stat-value" id="pv-surface-val">Roof</span>
    </div>
    <div class="pv-stat-item">
      <span class="pv-stat-label">PV Efficiency:</span>
      <span class="pv-stat-value" id="pv-efficiency-val">18.68%</span>
    </div>
    <div class="pv-stat-item">
      <span class="pv-stat-label">PV Mounting:</span>
      <span class="pv-stat-value" id="pv-mounting-val">Fixed Roof Mounted</span>
    </div>
    <div class="pv-stat-item">
      <span class="pv-stat-label">Ground Coverage Ratio:</span>
      <span class="pv-stat-value" id="pv-gcr-val">40%</span>
    </div>
    <div class="pv-stat-item">
      <span class="pv-stat-label">PV Generation (kWh/m²)</span>
      <span class="pv-stat-value" id="pv-generation-val">—</span>
    </div>
    <div class="pv-stat-item">
      <span class="pv-stat-label">Ratio of Performance (RoP)</span>
      <span class="pv-stat-value" id="pv-rop-val">—</span>
    </div>
  </div>

  <!-- ROW 2: Wall -->
  <div class="pv-image-row" id="pv-wall-row">
    <div class="pv-image-cell">
      <img id="wall-hourly-img" src="" alt="Wall Hourly Heatmap" class="pv-chart-image">
    </div>
    <div class="pv-image-cell">
      <img id="wall-ir-img" src="" alt="Wall Incident Radiation" class="pv-chart-image">
    </div>
    <div class="pv-image-cell">
      <img id="wall-dsh-img" src="" alt="Wall Direct Sun Hours" class="pv-chart-image">
    </div>
  </div>

  <!-- ROW 3: Roof -->
  <div class="pv-image-row" id="pv-roof-row">
    <div class="pv-image-cell">
      <img id="roof-hourly-img" src="" alt="Roof Hourly Heatmap" class="pv-chart-image">
    </div>
    <div class="pv-image-cell">
      <img id="roof-ir-img" src="" alt="Roof Incident Radiation" class="pv-chart-image">
    </div>
    <div class="pv-image-cell">
      <img id="roof-dsh-img" src="" alt="Roof Direct Sun Hours" class="pv-chart-image">
    </div>
  </div>

</div>

<!-- RC-HR2 fallback (legacy layout, shown only for RC-HR2) -->
<div id="pv-legacy-layout" style="display:none;">
  <!-- existing pv-profile-layout content preserved here -->
</div>
```

The JS in `initPVPage()` shows `pv-new-layout` by default and swaps to `pv-legacy-layout` when `neighbourhoodCode === 'RC-HR2'`.

---

### 2. `js/pv.js`

**Replace `updatePVImages()`** with a new function that sets all 6 image `src` attributes:

```js
function updatePVImages(neighbourhoodCode) {
    // RC-HR2 keeps legacy images — handled by layout toggle
    if (neighbourhoodCode === 'RC-HR2') return;

    const base = `Content/Images_PVpage/RC/${neighbourhoodCode}`;

    const imgMap = {
        'wall-hourly-img': `${base}/${neighbourhoodCode}_Wall_Hourly_cropped.png`,
        'wall-ir-img':     `${base}/${neighbourhoodCode}_Wall_IR.png`,
        'wall-dsh-img':    `${base}/${neighbourhoodCode}_Wall_DSH.png`,
        'roof-hourly-img': `${base}/${neighbourhoodCode}_Roof_Hourly_cropped.png`,
        'roof-ir-img':     `${base}/${neighbourhoodCode}_Roof_IR.png`,
        'roof-dsh-img':    `${base}/${neighbourhoodCode}_Roof_DSH.png`,
    };

    for (const [id, src] of Object.entries(imgMap)) {
        const el = document.getElementById(id);
        if (el) el.src = src;
    }
}
```

**Add layout toggle logic in `initPVPage()`:**

```js
const isLegacy = (neighbourhoodCode === 'RC-HR2');
document.getElementById('pv-new-layout').style.display = isLegacy ? 'none' : 'block';
document.getElementById('pv-legacy-layout').style.display = isLegacy ? 'block' : 'none';
```

---

### 3. `css/styles.css`

Add the following new CSS classes (existing classes can be left unchanged):

```css
/* ── PV New Layout ──────────────────────────────────────────── */

/* Row 1: Stats bar */
.pv-stats-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
}

.pv-stat-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-right: 1px solid #e0e0e0;
    text-align: center;
    min-width: 120px;
}

.pv-stat-item:last-child {
    border-right: none;
}

.pv-stat-label {
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
}

.pv-stat-value {
    font-size: 15px;
    font-weight: 600;
    color: #222;
}

/* Rows 2 & 3: Image rows */
.pv-image-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
}

.pv-image-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
}

.pv-image-cell .pv-chart-image {
    width: 100%;
    height: auto;
    display: block;
}
```

---

## Implementation Steps

1. **`layer2_pv_breakdown.html`** — Replace the `<div class="pv-profile-layout">` block with the new three-row HTML. Wrap the old layout in `id="pv-legacy-layout"` and wrap the new layout in `id="pv-new-layout"`.

2. **`js/pv.js`** — Replace `updatePVImages()` with the new version above. Add the layout toggle in `initPVPage()`.

3. **`css/styles.css`** — Append the new CSS classes listed above.

---

## Exceptions

| Neighbourhood | Layout |
|---|---|
| RC-R | New 3-row layout |
| RC-D | New 3-row layout |
| RC-T | New 3-row layout |
| RC-MR2 | New 3-row layout |
| RC-MR3 | New 3-row layout |
| **RC-HR2** | **Keep existing layout (no change)** |

RC-HR2 has no images in `Content/Images_PVpage/RC/RC-HR2/`, so the legacy layout (left-column stats + right-column Solar Irradiation / Monthly Generation images) is preserved for it.

---

## Task List

---

### Task 1 — Restructure the HTML layout of the PV page

- **Aim:** Replace the existing two-column layout with a new three-row layout that separates stats, wall visuals, and roof visuals into distinct horizontal sections.

- **What to do:** Edit `layer2_pv_breakdown.html` to replace the `<div class="pv-profile-layout">` block with two new wrapper divs: `#pv-new-layout` (three-row structure) and `#pv-legacy-layout` (the preserved old layout for RC-HR2).

- **How to do:** Inside `#pv-new-layout`, create three child sections:
  - Row 1: a `<div class="pv-stats-bar">` containing six `.pv-stat-item` divs (one per KPI)
  - Row 2: a `<div class="pv-image-row" id="pv-wall-row">` with three `.pv-image-cell` divs each holding an `<img>` element (IDs: `wall-hourly-img`, `wall-ir-img`, `wall-dsh-img`)
  - Row 3: a `<div class="pv-image-row" id="pv-roof-row">` with three `.pv-image-cell` divs each holding an `<img>` element (IDs: `roof-hourly-img`, `roof-ir-img`, `roof-dsh-img`)

  Inside `#pv-legacy-layout`, copy the original `pv-profile-layout` structure unchanged, renaming the stat IDs with a `-legacy` suffix (e.g. `pv-surface-val-legacy`) to avoid DOM ID collisions.

- **Why:** The old layout mixed stats and visuals in a side-by-side column arrangement. The new layout gives each surface (Wall, Roof) its own dedicated row with three comparable images displayed at equal width, making comparisons across chart types clearer and the page easier to read.

- **What it impacts:** The visible structure of `layer2_pv_breakdown.html`. No other page is affected. The JS and CSS must be updated in subsequent tasks to support the new element IDs and class names.

- **Steps:**
  1. Open `layer2_pv_breakdown.html`
  2. Locate the `<div class="pv-profile-layout">` block inside `#visual-content`
  3. Wrap the new HTML in `<div id="pv-new-layout">` (visible by default)
  4. Add Row 1: `.pv-stats-bar` with six `.pv-stat-item` children, each with a `.pv-stat-label` and `.pv-stat-value` span; assign the correct IDs to the value spans
  5. Add Row 2: `.pv-image-row#pv-wall-row` with three `.pv-image-cell` children containing `<img>` tags with IDs `wall-hourly-img`, `wall-ir-img`, `wall-dsh-img`
  6. Add Row 3: `.pv-image-row#pv-roof-row` with three `.pv-image-cell` children containing `<img>` tags with IDs `roof-hourly-img`, `roof-ir-img`, `roof-dsh-img`
  7. Wrap the original two-column structure in `<div id="pv-legacy-layout" style="display:none;">`, renaming stat value IDs to the `-legacy` variants

- **Expected result:** The page HTML contains both layout wrappers. On load, `#pv-new-layout` is visible and `#pv-legacy-layout` is hidden. The stats bar renders in a single horizontal row and two image rows appear below it (images will be empty until Task 2 populates the `src` attributes).

- **How to test:**
  - Open `layer2_pv_breakdown.html?neighbourhood=RC-R` in a browser
  - Verify the stats bar renders across the full width with six columns
  - Verify two empty image rows appear below the stats bar
  - Temporarily set `?neighbourhood=RC-HR2` and confirm the legacy two-column layout appears instead

---

### Task 2 — Update `js/pv.js` to populate images and toggle layouts

- **Aim:** Make the JavaScript read the neighbourhood code from the URL and dynamically set the correct image paths for all six chart slots, while also toggling which layout (new vs legacy) is visible.

- **What to do:** In `js/pv.js`, replace the existing `updatePVImages()` function with a new version that handles 6 image slots and targets the new element IDs. Update `updatePVParameters()` to route stat values to either the new or legacy IDs based on the neighbourhood. Add layout toggle logic at the start of `initPVPage()`.

- **How to do:**
  - In `updatePVImages()`: build the image base path as `Content/Images_PVpage/RC/{code}/`, then set `src` on all six `<img>` elements using the naming pattern `{code}_Wall_Hourly_cropped.png`, `{code}_Wall_IR.png`, `{code}_Wall_DSH.png`, `{code}_Roof_Hourly_cropped.png`, `{code}_Roof_IR.png`, `{code}_Roof_DSH.png`. Return early without doing anything for `RC-HR2`.
  - In `updatePVParameters()`: check if `neighbourhoodCode === 'RC-HR2'`; if so, write values to the `-legacy` suffixed IDs; otherwise write to the standard new-layout IDs.
  - In `initPVPage()`: before any other rendering, read `neighbourhoodCode`, set `#pv-new-layout` display to `'none'` and `#pv-legacy-layout` display to `'block'` when the code is `RC-HR2`, and invert for all other codes.

- **Why:** Without this JS update, the new HTML elements have no `src` values and the stats bar shows placeholder dashes. The layout toggle is also needed to ensure RC-HR2 never shows the new empty image rows.

- **What it impacts:** All dynamic content on `layer2_pv_breakdown.html` — stats values, image sources, and which layout section is visible. No other JS file or page is affected.

- **Steps:**
  1. Open `js/pv.js`
  2. Replace the body of `updatePVImages()` with the new 6-slot version (early return for `RC-HR2`)
  3. Replace the body of `updatePVParameters()` with the branching version (legacy IDs vs new IDs)
  4. In `initPVPage()`, add the layout toggle block immediately before the `renderEnergyStatus` / `updatePVImages` / `updatePVParameters` calls

- **Expected result:** Opening the page with any neighbourhood code other than RC-HR2 shows all six images loaded from the correct paths. The stats bar is fully populated. Opening with `RC-HR2` shows the old two-column layout with its own stats populated.

- **How to test:**
  - Open `layer2_pv_breakdown.html?neighbourhood=RC-R` — all 6 images should load (Wall and Roof rows)
  - Repeat for RC-D, RC-T, RC-MR2, RC-MR3 and verify each loads its own images
  - Open with `RC-HR2` — only the legacy layout should be visible; no empty image rows
  - Open browser DevTools Network tab and confirm the 6 image requests resolve with HTTP 200

---

### Task 3 — Add CSS classes for the new layout to `css/styles.css`

- **Aim:** Style the new three-row layout so the stats bar is evenly spaced and horizontally centred, and the image rows display three equal-width cells per row.

- **What to do:** Append new CSS rule blocks to `css/styles.css` for `.pv-stats-bar`, `.pv-stat-item`, `.pv-stat-label`, `.pv-stat-value`, `.pv-image-row`, and `.pv-image-cell`. Include a responsive breakpoint that collapses both the stats bar and image rows to a single column on narrow screens.

- **How to do:**
  - `.pv-stats-bar`: `display: flex`, no gap, single shared border with `border-radius`, `background: var(--bg-card)`
  - `.pv-stat-item`: `flex: 1 1 0`, `display: flex; flex-direction: column; align-items: center; justify-content: center`, `border-right` divider, removed on last child
  - `.pv-stat-label`: small uppercase label using `var(--text-secondary)` and `var(--font-display)`
  - `.pv-stat-value`: larger bold value using `var(--text-primary)` and `var(--font-display)`
  - `.pv-image-row`: `display: grid; grid-template-columns: repeat(3, 1fr)` with `gap: var(--spacing-sm)`
  - `.pv-image-cell`: `display: flex; align-items: center; justify-content: center`, `background: var(--bg-card)`, `border-radius: var(--radius-md)`, `overflow: hidden`
  - At `@media (max-width: 768px)`: stats bar switches to `flex-direction: column`, image row switches to `grid-template-columns: 1fr`

- **Why:** Without these classes the layout has no visual structure — the stats items collapse, dividers are absent, and the images stack uncontrolled. Reusing the existing CSS design tokens (`--bg-card`, `--font-display`, etc.) keeps the new layout visually consistent with the rest of the interface.

- **What it impacts:** Only `layer2_pv_breakdown.html`. No existing PV or LPV classes are modified, only new classes are added, so there is no risk of regression on other pages.

- **Steps:**
  1. Open `css/styles.css`
  2. Locate the existing `/* Responsive for PV Profile */` media query block (end of the PV section)
  3. Append the new `/* ── PV New 3-Row Layout ── */` rule block directly after it
  4. Add rules for `.pv-stats-bar`, `.pv-stat-item`, `.pv-stat-item:last-child`, `.pv-stat-label`, `.pv-stat-value`
  5. Add rules for `.pv-image-row`, `.pv-image-cell`, `.pv-image-cell .pv-chart-image`
  6. Add the `@media (max-width: 768px)` responsive block

- **Expected result:** The stats bar renders as a single horizontally divided card with six equal columns, all text centred. The two image rows each display three equally sized image cells side by side. On a narrow viewport, all elements collapse to full-width single-column stacks.

- **How to test:**
  - Open the page at full browser width — verify the stats bar shows six even columns with dividers
  - Resize the browser below 768px — verify the stats bar and image rows each collapse to a single column
  - Check alignment: all labels and values should be horizontally and vertically centred within each stat cell
  - Inspect in DevTools to confirm no existing PV or LPV class rules were modified

---

### Task 4 — Verify image assets are present for all applicable neighbourhoods

- **Aim:** Confirm that all required PNG files exist in the correct folder structure before the layout goes live, so no broken image slots appear for any neighbourhood.

- **What to do:** Check that the six required images are present for each of the five neighbourhoods that use the new layout (RC-R, RC-D, RC-T, RC-MR2, RC-MR3).

- **How to do:** For each neighbourhood code `{NN}`, verify the following files exist under `Content/Images_PVpage/RC/{NN}/`:
  - `{NN}_Wall_Hourly_cropped.png`
  - `{NN}_Wall_IR.png`
  - `{NN}_Wall_DSH.png`
  - `{NN}_Roof_Hourly_cropped.png`
  - `{NN}_Roof_IR.png`
  - `{NN}_Roof_DSH.png`

  If any file is missing, generate it by running the corresponding `.py` script against the `.csv` data file in the same directory (e.g. `RC-R_Wall_Hourly_cropped.py` reads `RC-R_Wall_Hourly_cropped.csv` and saves `RC-R_Wall_Hourly_cropped.png`).

- **Why:** The JS populates image `src` attributes by constructing paths from the neighbourhood code. A missing file produces a broken image icon in the UI with no fallback. Verifying assets upfront prevents visible errors for users.

- **What it impacts:** The visual completeness of the page for all five neighbourhoods. No code change is required if all assets are present.

- **Steps:**
  1. List the contents of each neighbourhood subfolder under `Content/Images_PVpage/RC/`
  2. Cross-reference with the asset table in the **Image Assets Per Neighbourhood** section above
  3. For any missing PNG, open the corresponding `.py` file in the same folder, run it with Python (requires `matplotlib` and `pandas`), and save the output PNG to the same folder with the correct filename
  4. Confirm RC-HR2 is excluded — it has no subfolder and no images are expected

- **Expected result:** All 30 PNG files (6 per neighbourhood × 5 neighbourhoods) are present in their respective subfolders. No broken images appear on any neighbourhood's PV page.

- **How to test:**
  - Navigate to each of the five neighbourhoods via the browser and confirm all six image slots render without broken-image icons
  - Cross-check file counts: `Content/Images_PVpage/RC/{NN}/` should contain at least 6 `.png` files for each of RC-R, RC-D, RC-T, RC-MR2, RC-MR3

---

## Progress Log

---

### Task 1 — Restructure the HTML layout of the PV page
**Status:** Completed  
**Date:** 2026-04-06

**What was done:**
The entire `<div class="pv-profile-layout">` block inside `#visual-content` was replaced with two new sibling wrappers:

- `<div id="pv-new-layout">` — the new three-row structure, visible by default (`display: block`)
- `<div id="pv-legacy-layout" style="display:none;">` — the preserved original two-column layout, hidden by default

Inside `#pv-new-layout`, three child sections were created:
- **Row 1** — `.pv-stats-bar` containing six `.pv-stat-item` divs, each with a `.pv-stat-label` and a `.pv-stat-value` span. Value span IDs: `pv-surface-val`, `pv-efficiency-val`, `pv-mounting-val`, `pv-gcr-val`, `pv-generation-val`, `pv-rop-val`.
- **Row 2** — `.pv-image-row#pv-wall-row` with three `.pv-image-cell` divs containing `<img>` elements (IDs: `wall-hourly-img`, `wall-ir-img`, `wall-dsh-img`).
- **Row 3** — `.pv-image-row#pv-roof-row` with three `.pv-image-cell` divs containing `<img>` elements (IDs: `roof-hourly-img`, `roof-ir-img`, `roof-dsh-img`).

Inside `#pv-legacy-layout`, the original input-bar and KPI structure was preserved with stat value IDs renamed to the `-legacy` suffix (e.g. `pv-surface-val-legacy`) to avoid DOM ID collisions.

**Issues encountered:** None. A duplicate `</main>` closing tag was already present in the original file and was left as-is to avoid unintended structural changes.

**File modified:** `layer2_pv_breakdown.html`

---

### Task 2 — Update `js/pv.js` to populate images and toggle layouts
**Status:** Completed  
**Date:** 2026-04-06

**What was done:**
Three changes were made to `js/pv.js`:

1. **`updatePVImages()` replaced** — The old function that handled only two image slots (`solar-irradiation-img`, `monthly-generation-img`) was replaced with a new version that sets `src` on all six image elements using the path pattern `Content/Images_PVpage/RC/{code}/{code}_{Surface}_{Type}.png`. The function returns early without any action when `neighbourhoodCode === 'RC-HR2'`.

2. **`updatePVParameters()` updated** — The function was refactored to branch on `neighbourhoodCode === 'RC-HR2'`. For RC-HR2 it writes stat values to the `-legacy` suffixed IDs; for all other neighbourhoods it writes to the standard new-layout IDs. The GCR calculation and RoP visibility logic were preserved unchanged.

3. **Layout toggle added to `initPVPage()`** — A block was inserted before the `renderEnergyStatus` / `updatePVImages` / `updatePVParameters` calls. It reads `neighbourhoodCode`, then sets `#pv-new-layout` and `#pv-legacy-layout` `display` styles accordingly: new layout visible for all codes except RC-HR2, legacy layout visible only for RC-HR2.

**Issues encountered:** None.

**File modified:** `js/pv.js`

---

### Task 3 — Add CSS classes for the new layout to `css/styles.css`
**Status:** Completed  
**Date:** 2026-04-06

**What was done:**
A new `/* ── PV New 3-Row Layout ── */` section was appended to `css/styles.css` immediately after the existing `/* Responsive for PV Profile */` media query block. The following rule sets were added:

- `.pv-stats-bar` — `display: flex`, shared card border with `border-radius: var(--radius-md)`, `background: var(--bg-card)`, `margin-bottom: var(--spacing-md)`
- `.pv-stat-item` — `flex: 1 1 0`, column flex with `align-items: center; justify-content: center`, `border-right` divider using `rgba(0,0,0,0.08)`, `min-width: 110px`
- `.pv-stat-item:last-child` — removes the right border
- `.pv-stat-label` — `0.75rem` uppercase label, `var(--text-secondary)`, `var(--font-display)`, letter spacing
- `.pv-stat-value` — `1rem` bold value, `var(--text-primary)`, `var(--font-display)`
- `.pv-image-row` — `display: grid; grid-template-columns: repeat(3, 1fr)`, `gap: var(--spacing-sm)`, `margin-bottom: var(--spacing-sm)`
- `.pv-image-cell` — flex centering, `var(--bg-card)` background, `border-radius: var(--radius-md)`, `overflow: hidden`
- `.pv-image-cell .pv-chart-image` — `width: 100%; height: auto; object-fit: contain`
- `@media (max-width: 768px)` — stats bar collapses to column, stat items use bottom border instead of right border, image rows collapse to single column

All design tokens (`--bg-card`, `--radius-md`, `--spacing-sm`, `--font-display`, `--text-primary`, `--text-secondary`) are reused from the existing `:root` variables. No existing PV or LPV rules were modified.

**Issues encountered:** None.

**File modified:** `css/styles.css`

---

### Task 4 — Verify image assets are present for all applicable neighbourhoods
**Status:** Completed  
**Date:** 2026-04-06

**What was done:**
A file existence check was run for all six required PNGs across all five applicable neighbourhoods. Results:

| Neighbourhood | Wall Hourly | Wall IR | Wall DSH | Roof Hourly | Roof IR | Roof DSH |
|---|---|---|---|---|---|---|
| RC-R  | OK | OK | OK | OK | OK | OK |
| RC-D  | OK | OK | OK | OK | OK | OK |
| RC-T  | OK | OK | OK | OK | OK | OK |
| RC-MR2 | OK | OK | OK | OK | OK | OK |
| RC-MR3 | OK | OK | OK | OK | OK | OK |

All 30 PNG files were confirmed present at the time of this check (using original `_IR.png` / `_DSH.png` naming). RC-HR2 was excluded — no subfolder exists and it uses the legacy layout.

**Issues encountered:** None at the time of Task 4. Images were later replaced in Task 6 (see below).

**Action required:** See Task 6.

---

### Task 5 — Replace Hourly Heatmap PNGs with canvas-rendered charts from embedded CSV data
**Status:** Completed  
**Date:** 2026-04-06

**Background:**
The pre-generated `_Hourly_cropped.png` files caused the page to be excessively tall in the y-axis direction because matplotlib's `figsize=(10, 8)` produces 800px-tall images at 100 dpi. The original Python scripts (`.py` files) control the plot dimensions intentionally, but PNG files cannot be resized without losing that intent. The fix was to replicate the matplotlib heatmap directly in the browser at a controlled height (260px canvas).

**What was done:**

**1. `js/heatmap-data.js` (new file)**
All CSV data from the 10 source files (`{NN}_{Wall|Roof}_Hourly_cropped.csv` for 5 neighbourhoods) was embedded as a single JavaScript object `HOURLY_HEATMAP_DATA`. Each entry stores two 24×4 arrays (`wall` and `roof`) — 24 rows for hours (12 AM → 11 PM), 4 columns for seasons (Mar 21, Jun 21, Sep 21, Dec 21). This avoids any `fetch()` call, which is blocked on `file://` protocol (the project has no local server).

**2. `js/pv.js` — heatmap renderer added**
Three new functions were added before `updatePVImages()`:
- `heatmapColor(value, vmin, vmax)` — maps a scalar value to an RGB triple using the matplotlib `RdYlBu_r` colorscale (9 key stops, linear interpolation between them). Blue = 0 kWh/m² (no irradiation), Red = 900 kWh/m² (peak irradiation).
- `drawHeatmapCanvas(rows, seasons, canvasId)` — draws the full heatmap onto a `<canvas>` element. Layout: 50px left margin (Y labels), 66px right margin (colorbar + labels), 14px top margin, 28px bottom margin (season labels). Canvas is 260px tall and fills the container width. Cells are drawn bottom-up to match matplotlib's `origin='lower'`. Y-axis ticks at hours 0, 6, 12, 18, 24 labelled '12 AM', '6 AM', '12 PM', '6 PM', '12 AM'. Colorbar drawn as a 1px-per-row gradient with ticks at 0, 180, 360, 540, 720, 900.
- `renderHourlyHeatmaps(neighbourhoodCode)` — looks up the neighbourhood data in `HOURLY_HEATMAP_DATA` and calls `drawHeatmapCanvas` for both wall and roof canvases.

`updatePVImages()` was updated to remove `wall-hourly-img` and `roof-hourly-img` from the `imgMap` (those `<img>` elements no longer exist) and to call `renderHourlyHeatmaps()` at the end.

**3. `layer2_pv_breakdown.html`**
- `<img id="wall-hourly-img">` replaced with `<canvas id="wall-hourly-chart" class="pv-hourly-canvas">` inside a `.pv-canvas-cell` div.
- `<img id="roof-hourly-img">` replaced with `<canvas id="roof-hourly-chart" class="pv-hourly-canvas">` inside a `.pv-canvas-cell` div.
- `<script src="js/heatmap-data.js">` added between `data.js` and `sidebar.js` in the script loading order.

**4. `css/styles.css`**
Two new rules added before `.pv-image-row`:
- `.pv-canvas-cell` — `display: block; padding: 0` (overrides the flex centering of `.pv-image-cell` so the canvas fills the full cell width)
- `.pv-hourly-canvas` — `display: block; width: 100%; height: auto` (allows the canvas to scale with the container)

**Issues encountered:**
- `fetch()` is unavailable on `file://` protocol — resolved by embedding all CSV data as a static JS object in `heatmap-data.js`, consistent with the project's existing approach in `data.js`.
- PNG files are retained in the `/Content/Images_PVpage/RC/` folders; they are simply no longer referenced by the page.

**Files created/modified:**
- Created: `js/heatmap-data.js`
- Modified: `js/pv.js`, `layer2_pv_breakdown.html`, `css/styles.css`

---

### Task 6 — Update image references to compressed and cropped IR/DSH filenames
**Status:** Completed  
**Date:** 2026-04-06

**Background:**
The IR (Incident Radiation) and DSH (Direct Sun Hours) images were manually updated outside the codebase: each file was compressed and cropped, and renamed by appending `_compressed_cropped` before the `.png` extension (e.g. `RC-R_Wall_IR.png` → `RC-R_Wall_IR_compressed_cropped.png`). The old filenames no longer exist on disk.

**What was done:**

**`js/pv.js` — `updatePVImages()` updated**
The four image path strings in `imgMap` were updated to use the new suffix:

| Slot | Old filename | New filename |
|---|---|---|
| `wall-ir-img` | `{NN}_Wall_IR.png` | `{NN}_Wall_IR_compressed_cropped.png` |
| `wall-dsh-img` | `{NN}_Wall_DSH.png` | `{NN}_Wall_DSH_compressed_cropped.png` |
| `roof-ir-img` | `{NN}_Roof_IR.png` | `{NN}_Roof_IR_compressed_cropped.png` |
| `roof-dsh-img` | `{NN}_Roof_DSH.png` | `{NN}_Roof_DSH_compressed_cropped.png` |

**Document (`PV_page_layout_update.md`) — Image Assets table updated**
The asset table in the **Image Assets Per Neighbourhood** section was updated to reflect the new filenames. Hourly heatmap columns are annotated as *(canvas)* to clarify they are not loaded as PNGs.

**Issues encountered:**
One naming inconsistency found in `RC-MR3/`:
- **Expected:** `RC-MR3_Wall_IR_compressed_cropped.png`
- **Found on disk:** `RC3_Wall_IR_compressed_cropped.png` (missing `-MR` in the neighbourhood prefix)

The JS will produce a broken image for RC-MR3's Wall IR slot until this is resolved.

**Action required:**
Rename `Content/Images_PVpage/RC/RC-MR3/RC3_Wall_IR_compressed_cropped.png` → `RC-MR3_Wall_IR_compressed_cropped.png`

**Files modified:** `js/pv.js`, `docs_implementation/PV_page_layout_update.md`
