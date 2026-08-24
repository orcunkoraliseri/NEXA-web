# Envelope Parameter — Region + Popup Refactor

## Problem Statement

The current Envelope section in [`layer1_NUs_selection.html`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html#L108-L172) displays **14 buttons** in a 7×2 grid (7 standard + 7 high-performance). As more regions/codes are added in the future, this layout will become unmanageable. The goal is to simplify the UI so that only **region buttons** are shown, and the **performance tier** is selected in a small popup after the region is chosen.

## Current State

| Row | Buttons (7 per row) |
|-----|---------------------|
| **Standard** | ASHRAE · NECB Z4 · Z5 · Z6 · Z7A · Z7B · Z8 |
| **High Perf.** | HP-ASHRAE · HP-Z4 · HP-Z5 · HP-Z6 · HP-Z7A · HP-Z7B · HP-Z8 |

**Total: 14 envelope buttons visible at once.**

## Proposed UX Flow

```
Step 1 — User sees only Region buttons:
  ┌──────────┐  ┌──────────┐
  │  ASHRAE  │  │ NECB Z4  │  ...  │ NECB Z8  │
  └──────────┘  └──────────┘       └──────────┘

Step 2 — After clicking a region, a small popup appears:
  ┌─────────────────────────────────┐
  │   Select Performance Level      │
  │                                 │
  │  ┌───────────┐ ┌─────────────┐  │
  │  │   2017    │ │    HPENV    │  │
  │  │(Code Act.)│ │(Hyper-Perf.)│  │
  │  └───────────┘ └─────────────┘  │
  │                                 │
  │          [ × Close ]            │
  └─────────────────────────────────┘

Step 3 — Popup closes, region button shows selected state
         with a badge indicating the performance tier.
```

**Total visible buttons: 8 region buttons** (down from 14). Scalable to many more regions.

---

## Proposed Changes

### Component 1 — HTML ([`layer1_NUs_selection.html`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html))

#### [MODIFY] [`layer1_NUs_selection.html`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/layer1_NUs_selection.html#L108-L172)

1. **Replace the 14 `envelope-card` buttons** (lines 111–171) with **8 region-only buttons**:
   - `ashrae` — Standard (ASHRAE)
   - `necb-z4` — NECB Zone 4 (Windsor)
   - `necb-z5` — NECB Zone 5 (Toronto / Ottawa)
   - `necb-z6` — NECB Zone 6 (Montréal)
   - `necb-z7a` — NECB Zone 7A (Calgary)
   - `necb-z7b` — NECB Zone 7B (Whitehorse)
   - `necb-z8` — NECB Zone 8 (Yellowknife)

   Each button uses `data-category="envelope"` and `data-region="<region>"` (instead of `data-value`).

2. **Add an inline popup (modal) element** at the end of the Envelope `parameter-group` div:
   ```html
   <div id="envelope-popup" class="envelope-popup" style="display:none;">
     <div class="envelope-popup-content">
       <p class="envelope-popup-title">Select Performance Level</p>
       <div class="envelope-popup-options">
         <button class="envelope-tier-btn" data-tier="standard">
           <span class="tier-label">Standard</span>
           <span class="tier-sub">NECB 2017</span>
         </button>
         <button class="envelope-tier-btn" data-tier="high-performance">
           <span class="tier-label">HPENV</span>
           <span class="tier-sub">Hyper-performance</span>
         </button>
       </div>
       <button class="envelope-popup-close" id="envelope-popup-close">×</button>
     </div>
   </div>
   ```

3. **Add a small badge/indicator** to each region button so the user can see which performance tier is selected after choosing.

---

### Component 2 — CSS ([`css/styles.css`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/css/styles.css))

#### [MODIFY] [`styles.css`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/css/styles.css#L562-L636)

1. **Update `.envelope-cards` grid** from `repeat(7, 1fr)` → a responsive layout for fewer buttons (e.g. `repeat(auto-fit, minmax(140px, 1fr))` or similar flex-based layout matching other card sections).

2. **Add new CSS classes** for the popup:
   - `.envelope-popup` — full-screen overlay backdrop (similar to existing `.modal`)
   - `.envelope-popup-content` — centered white card with rounded corners
   - `.envelope-popup-title` — title text style
   - `.envelope-tier-btn` — styled tier selection buttons (2017 / HPENV)
   - `.envelope-popup-close` — close (×) button
   - Entrance animation (fade-in + slight scale)

3. **Add `.envelope-region-badge`** — small pill/badge that appears on the region card after selection to show "2017" or "HPENV".

---

### Component 3 — JavaScript ([`js/app.js`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js))

#### [MODIFY] [`app.js`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/app.js#L199-L231)

1. **Refactor `setupEnvelopeCards()`** to implement the 2-step flow:
   - Click on a region button → open popup, store `pendingRegion`.
   - Click on tier button inside popup →
     - Compose the final `data-value` (e.g. `necb-z6` for standard, `high-performance-z6` for HP).
     - Set `activeFilters.envelope = composedValue`.
     - Add `active` class to the region button.
     - Inject a badge showing the chosen tier.
     - Close popup.
   - Click close / outside popup → cancel, no selection.

2. **Update `updateAvailableOptions()`** — the envelope section update logic (lines 322–330) must query `.envelope-region-btn` instead of `.envelope-card`, and evaluate availability based on region (checking both standard and HP variants).

3. **Preserve backward compatibility** with `sessionStorage` — the composed value (`necb-z6`, `high-performance-z6`, etc.) is stored exactly as before so downstream pages (Layer 2, output, energy) are unaffected.

---

### Component 4 — Data ([`js/data.js`](file:///C:/Users/o_iseri/Desktop/LMN-tool-main/js/data.js))

#### No changes required

The `envelope` arrays in `NEIGHBOURHOODS` already use the combined keys (`necb-z6`, `high-performance-z6`, etc.), so no data migration is needed. The composed value from the popup maps directly to the existing keys.

---

## Data-Value Mapping Reference

| Region Button | Standard (2017) value | High-Perf (HPENV) value |
|---|---|---|
| ASHRAE | `ashrae` | `high-performance-ashrae` |
| NECB Zone 4 | `necb-z4` | `high-performance-z4` |
| NECB Zone 5 | `necb-z5` | `high-performance-z5` |
| NECB Zone 6 | `necb-z6` | `high-performance-z6` |
| NECB Zone 7A | `necb-z7a` | `high-performance-z7a` |
| NECB Zone 7B | `necb-z7b` | `high-performance-z7b` |
| NECB Zone 8 | `necb-z8` | `high-performance-z8` |

---

## Open Questions

> [!IMPORTANT]
> **1. Region images**: The current buttons all share the same images (`standard construction.png` / `high-performance construction.png`). Should the **new region buttons** continue using `standard construction.png` as their image, or should we use a different image per region (e.g. a map/zone icon)?

> [!NOTE]
> **2. Default tier**: When a user clicks a region, should there be a **default pre-selected tier** (e.g. "2017" is pre-highlighted in the popup), or should both options be unselected?

> [!NOTE]
> **3. Future expansion**: You mentioned adding more buttons in the future. Will these be **new regions** (e.g. NECB Zone 9), **new performance tiers** (beyond 2017 and HPENV), or both? This helps us design the popup to be extensible.

---

## Verification Plan

### Manual Verification
1. Open `layer1_NUs_selection.html` in browser
2. Verify only 8 region buttons appear (down from 14)
3. Click each region → popup appears with "2017" and "HPENV" options
4. Select a tier → popup closes, region button shows active state + badge
5. Click "View Neighbourhoods" → verify correct envelope value in `sessionStorage`
6. Navigate to Layer 2 → verify envelope parameter is correctly passed
7. Test close popup by clicking × and clicking outside
8. Test switching regions and tiers (deselect/reselect)
9. Test responsive layout at narrow widths
