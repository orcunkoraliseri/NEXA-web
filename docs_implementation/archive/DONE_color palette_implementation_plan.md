# Theme Refinement v2 — Cool White Base with Warm Yellow→Red Accents

## Background & Problem Diagnosis

The first round of palette work (v1) successfully replaced every purple/indigo/violet token with a warm yellow→amber→burnt-orange-red spectrum. **However, the result felt over-saturated**: the page looks uniformly yellow-cream because the *base surfaces* (page background, secondary background, card background) were all shifted into warm cream/greige tones.

**Comparison with reference (`colorPaletteExample.png`):**

| Surface | Reference image | Current website (after v1) | Issue |
|---|---|---|---|
| Page background | **Pure white / cool light gray** (~`#FFFFFF`–`#FAFAFA`) | Warm cream `#FDFAF4` | Too yellow overall |
| Card / panel background | **Pure white** | Warm cream `rgba(253,250,244,0.95)` | Cards blend into warm bg |
| Inactive variant tiles (gray MU/CC) | Cool greige `#C8C4B0` | (already greige on parameter cards) | Greige applied too broadly |
| Selected/active tile | **Bright golden yellow** `#F5C400` | Subtle amber tint | Highlight is not bold enough |
| Banners ("Retrofit Methods") | **Burnt orange-red** `#C93D0A` | (no equivalent element) | Could add a banner accent |
| Arrows / dashboard chips | **Amber** `#E8860A` | Used in glows / borders | OK |

**Root cause:** v1 treated yellow/orange/red as the *base palette*. The reference treats them as **highlights on a cool white-gray base**. The fix is to revert the base surfaces to a clean neutral white-gray, and make the warm colours pop *only* on accents (titles, buttons, active states, banners, glows).

> [!IMPORTANT]
> **Philosophy of v2:** White-gray canvas (≥85% of pixels), warm accents (≤15% of pixels). The user should perceive the page as “clean modern UI with bold yellow-orange-red highlights”, not “a cream-coloured page”.

---

## v2 Target Palette

### Neutral base (cool, ~85% of surface area)

| Token | New value | Role |
|---|---|---|
| `--bg-primary` | `#FAFAFA` | Page background — clean cool near-white |
| `--bg-secondary` | `#F1F2F4` | Section / sidebar / table-header background — light cool gray |
| `--bg-card` | `rgba(255, 255, 255, 0.98)` | Card / panel — pure white |
| `--bg-inactive-tile` *(new)* | `#D6D3CC` | Greige for explicitly inactive variant tiles only — slightly cooler than v1 `#C8C4B0` so it sits comfortably on a white background |
| `--border-subtle` *(new)* | `rgba(0, 0, 0, 0.08)` | Card outlines on the white canvas |

### Warm accents (~15% of surface area, used on highlights only)

| Token | Value | Where it appears |
|---|---|---|
| `--accent-gold` *(new)* | `#F5C400` | Active tile fill, gradient start, bold highlights |
| `--accent-amber` (= `--usage-color`) | `#E8860A` | Buttons, glows, active borders, dashboard chips |
| `--accent-burnt` *(new)* | `#C93D0A` | Gradient end, banner bars, table-header underline |
| `--accent-gradient` | `linear-gradient(135deg, #F5C400 0%, #C93D0A 100%)` | Title text, primary buttons |
| `--shadow-glow` | `0 0 30px rgba(232, 134, 10, 0.25)` | Hover/active glow on cards & buttons |

### Categorical (unchanged — semantic, not theme)

`--context-color #e11d48` · `--diversity-color #16a34a` · `--density-color #ea580c` · `--layout-color #0284c7`

---

## Proposed Changes

### 1. css/styles.css — `:root` neutral base **REVERT**

**Lines 6–11**

| Variable | Current (v1) | New (v2) | Reason |
|---|---|---|---|
| `--bg-primary` | `#FDFAF4` | `#FAFAFA` | Cool near-white, matches reference background |
| `--bg-secondary` | `#F5F1E8` | `#F1F2F4` | Cool light gray for sidebars / table headers |
| `--bg-card` | `rgba(253,250,244,0.95)` | `rgba(255,255,255,0.98)` | Pure white card surface |
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.08)` | *(unchanged)* | Subtle drop shadow already correct for white cards |

### 2. css/styles.css — `:root` add new accent tokens

**Insert after line 14 (`--accent-gradient`):**

```css
--accent-gold: #F5C400;
--accent-amber: #E8860A;   /* alias of --usage-color, for non-parameter contexts */
--accent-burnt: #C93D0A;
--bg-inactive-tile: #D6D3CC;
--border-subtle: rgba(0, 0, 0, 0.08);
```

> [!NOTE]
> Keeping `--usage-color: #E8860A` as-is preserves all existing parameter-button styling. The new `--accent-amber` is an alias that lets non-parameter UI (table borders, banners) reference the same colour without semantically tying it to "usage".

### 3. css/styles.css — **REVERT** parameter card greige backgrounds (Phase 9 of v1)

The previous plan painted every parameter card greige (`#C8C4B0`). In the reference image, greige is used **only on inactive variant tiles inside a grid**, not on full parameter cards. Our website's parameter cards are full panels and should be **white**.

**Selectors to revert (search styles.css for each):**

| Selector | Current (v1) | New (v2) |
|---|---|---|
| `.usage-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.context-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.density-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.layout-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.envelope-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.generation-card`, `.load-card`, `.demand-card` | `background: #C8C4B0` | `background: var(--bg-card)` |
| `.consumption-card` | `background: #C8C4B0` | `background: var(--bg-card)` |

> [!IMPORTANT]
> If any of these selectors do not currently set `#C8C4B0` (i.e. v1 missed them), leave them. The goal is **white parameter cards on a near-white page** — a clean modern look matching the reference.

### 4. css/styles.css — Subtler sidebar tinted sections

The v1 sidebar tints (`rgba(245,196,0,0.25)` etc.) bleed warm colour across large sidebar areas. Reduce opacity so they read as **subtle highlights**, not as backgrounds.

**Lines 2326–2332**

| Class | Current (v1) | New (v2) |
|---|---|---|
| `.sidebar-section--purple` | `background: rgba(245,196,0,0.25)` | `background: rgba(245,196,0,0.10)` (very subtle gold wash) |
| `.sidebar-section--pink` | `background: rgba(201,61,10,0.18)` | `background: rgba(201,61,10,0.08)` (very subtle burnt wash) |

### 5. css/styles.css — Strengthen the *active* highlight (so it pops on white)

On a white background, the warm "active" states need to be **bolder** so they read like the bright yellow tile in the reference. Increase the active fills and add a thicker accent border.

**Active states to strengthen** (search by selector):

| Selector | Current (v1) | New (v2) | Notes |
|---|---|---|---|
| `.usage-card.active` | `background: var(--usage-active)` ≈ `rgba(232,134,10,0.25)` + amber glow | `background: rgba(245,196,0,0.35)`; `border: 2px solid #E8860A`; keep glow | Bright gold fill, amber border |
| `.initial-btn.active` | amber glow only | add `background: rgba(245,196,0,0.30)`; `border-color: #E8860A` | Bold gold highlight |
| `.consumption-card.active` | `background: rgba(232,134,10,0.10)` | `background: rgba(245,196,0,0.30)`; `border-color: #E8860A` | |
| `.results-table tr.selected td` | `background: rgba(232,134,10,0.10)` | `background: rgba(245,196,0,0.20)`; keep burnt-red border-bottom | Selected row reads gold-on-white |

> [!IMPORTANT]
> Hover states (`*:hover`) should remain **lighter** than active states. Suggested hover fill: `rgba(245,196,0,0.12)`. The visual hierarchy is: **white (default) → faint gold (hover) → bold gold + amber border (active)**.

### 6. css/styles.css — Optional: Burnt-red banner accent strip

The reference has a prominent **burnt orange-red banner bar** ("Retrofit Methods"). Our website doesn't have a direct equivalent, but we can add a thin accent strip at the top of section headers to echo this visual rhythm.

**New rule (optional, low priority):**

```css
.section-title::before,
.layer-section h2::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 1em;
  background: var(--accent-burnt);
  margin-right: 0.5em;
  vertical-align: middle;
}
```

> [!NOTE]
> Skip this in v2 if it conflicts with existing section-title rules. Mark as "stretch goal".

### 7. css/styles.css — Keep these v1 changes intact ✅

Do **not** revert these — they are correct and matter for the warm-accent identity:

- `--accent-gradient` (golden→burnt) — title text, primary buttons
- `--usage-color: #E8860A` — parameter buttons, generic accent
- `--shadow-glow` amber — card/button hover glow
- All `rgba(102,126,234,…)` → `rgba(232,134,10,…)` replacements (button shadows, hover borders, sidebar active)
- LPV toggle button amber tints (Phase 4 of v1)
- Table header `border-bottom: 2px solid rgba(201,61,10,0.5)` — burnt-red underline
- Plain (non-gradient) table headers on EV/LPV pages (Phase 10 of v1)
- Categorical colours (context/diversity/density/layout) — semantic, not theme

---

## Files Changed Summary

| File | Change type | Scope |
|---|---|---|
| `css/styles.css` | MODIFY | ~20 colour edits: 3 base-token reverts, 5 new accent tokens, 7 card reverts, 2 sidebar opacity reductions, 4 active-state boosts |
| `css/styles.backup.css` | KEEP | v1 backup, do not delete |
| `js/data.js` | No change | Energy chart category colours stay |
| HTML files | No change | No theme-specific inline styles |

---

## Verification Plan

### Visual goal — does the page now match the reference?

After applying v2, each page should:

1. **Read as predominantly white/cool-gray** — not cream, not yellow.
2. **Yellow/orange/red appears only on accents** — title gradient, primary buttons, active card highlight, table-header underline, hover glow.
3. **Cards are crisp white** — clearly distinct from the page background via subtle shadow, not via colour difference.
4. **Active state pops** — selected card / button is bold golden-yellow with amber border, not a faint tint.
5. **Sidebar tints are barely-there washes** — you should notice them only on close inspection.

### Manual spot-checks (per page)

| Page | Check |
|---|---|
| `layer0_initial.html` | Background white-gray; title gradient gold→burnt; active button bold gold |
| `layer1_NUs_selection.html` | **White cards on white-gray bg**; LAND USE active card bold gold; submit button gradient |
| `layer1_output.html` | Table header has burnt-red underline; selected row is bold gold tint; bg white |
| `layer2_energy_selection.html` | Sidebar tint barely visible; cards white; consumption-card active = bold gold |
| `layer2_*` | Same as above |
| `layer3_mobility_selection.html` | White cards; bold gold active; submit gradient |
| `layer3_ev_v2g_*`, `layer3_ev_breakdown` | Plain (no gradient) table header; LPV toggle = subtle gold default → bold amber active |
| `layer4_green_selection.html` | White cards; gradient title |
| `layer4_lpv_breakdown.html` | LPV toggles bold amber active; plain table header |
| `layer4_output_selection.html` | White cards; gradient title; gradient submit |

### Side-by-side check
Place `colorPaletteExample.png` next to a screenshot of `layer1_NUs_selection.html` after the changes. The amount of white vs warm should look comparable (~85% white-gray base, ~15% warm accents).

---

## What v2 explicitly does NOT do

- Does **not** revert the warm gradient on titles / primary buttons.
- Does **not** revert the amber `--usage-color` or its derivatives.
- Does **not** revert the burnt-red border under table headers.
- Does **not** revert the sidebar-active amber glow.
- Does **not** revert Phase 10 (plain EV/LPV table headers).
- Does **not** touch categorical button colours, energy chart colours, or EUI bar gradient.

The goal of v2 is **surgical**: pull back the *base surfaces* to neutral, and let the existing warm accents do their job against a clean canvas.
