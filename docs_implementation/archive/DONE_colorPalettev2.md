# Palette Refinement v2 — Warm-Tech Banner Bars + Cool Subtle Accents

> **Scope:** Add filled section-banner bars (warm gradient / dark-gray / burnt-red / mobility / sage) to every `.parameter-label` element across the 5 selection pages, and introduce two subtle cool accent tokens (teal, sage) for secondary highlights. Page backgrounds, cards, and v2 active-state styling stay exactly as they are today.
>
> **Goal:** Match supervisor's "Warm-Tech" reference (see `colorPaletteExample.png` and `colorPaletteReference.png` at repo root) — deep orange→golden-yellow gradient for active/energy flows, neutral cool grays for fixed infrastructure, clean white bodies, white text on banner bars, subtle teal/sage for small-scale accents.
>
> **Reference palette (summary):**
> Base (cool, ~80% of pixels): White `#FAFAFA` · Light Gray `#F1F2F4` · Pure White cards `#FFFFFF`
> Warm banner fills: Gold→Amber→Burnt gradient · Dark charcoal `#4A4E57` · Burnt `#C93D0A`
> Subtle cool accents: Teal `#6BA8B8` (glass reflection) · Sage `#8AA88A` (landscape/trees)
> Text: Black on white surfaces, **white on banner bars**.

---

## Background — Why v2 Is Needed

v1 (warm replacement) and the previous v2 (cool-white base + warm accents) are both marked DONE in `docs_implementation/DONE_*`. They correctly:

1. Established the white page + white card base (`--bg-primary: #FAFAFA`, `--bg-secondary: #F1F2F4`, `--bg-card: rgba(255,255,255,0.98)`).
2. Built the warm gradient token (`--accent-gradient: linear-gradient(135deg, #F5C400 0%, #C93D0A 100%)`) and used it on page titles and primary buttons.
3. Strengthened active states to bold gold with amber border.

**What's still missing — diagnosed from the new reference images:**

The supervisor's "Warm-Tech" reference doesn't just use warm colour on *text*; it uses it on **filled horizontal banner bars** that divide each page into clearly labelled stripes:

- Gold→amber→burnt **gradient banner** at the top of "Envelope + Perimeter Zone (FRQ core)".
- **Dark charcoal-gray solid banner** at the top of "Active systems + microgrid (Schneider)" — a visual treatment the site currently lacks entirely.
- **Burnt orange-red solid banner** at the top of "Neighborhood archetypes (LMN)" and "Retrofit Methods".
- A **sage→orange→burnt gradient banner** on "Mobility" (the green→warm transition bar).
- White body text/content under each banner; white body text *inside* each banner.

In the current site every `.parameter-label` is just plain uppercase text on white — there is no coloured strip, no visual rhythm of sections. That's why the supervisor still feels the palette is "off": the *colours* are right, but the *banner-bar deployment* of those colours is missing.

> [!IMPORTANT]
> **Philosophy of v2:** v2's palette foundation (white page + white cards + warm text accents) is correct and stays. v2 **adds** filled banner bars on `.parameter-label` so every selection page gains the horizontal rhythm of coloured section strips the reference establishes. No base-surface reverts. No categorical-button-colour changes.

---

## v2 Target Additions

### New tokens (additive to `:root`)

| Token | Value | Role |
|---|---|---|
| `--banner-gradient-warm` | `linear-gradient(90deg, #F5C400 0%, #E8860A 50%, #C93D0A 100%)` | Default banner fill — active/energy/form sections |
| `--banner-infra` | `#4A4E57` | Solid dark-charcoal banner — system/hardware/infrastructure sections |
| `--banner-emphasis` | `#C93D0A` | Solid burnt-red banner — retrofit / critical-decision sections |
| `--banner-mobility` | `linear-gradient(90deg, #8AA88A 0%, #E8860A 70%, #C93D0A 100%)` | Sage→amber→burnt — mobility section (echoes reference Mobility bar) |
| `--banner-green` | `#8AA88A` | Solid sage — landscape / green-infrastructure sections |
| `--banner-text` | `#FFFFFF` | White text baked for all banner bars |
| `--accent-teal` | `#6BA8B8` | Subtle cool blue — image hover glow / glass-reflection cue |
| `--accent-sage` | `#8AA88A` | Subtle desaturated gray-green — tree/landscape icon tinting |

### Existing tokens — kept as-is (no revert)

`--bg-primary #FAFAFA` · `--bg-secondary #F1F2F4` · `--bg-card rgba(255,255,255,0.98)` · `--accent-gradient` · `--accent-gold #F5C400` · `--accent-amber #E8860A` · `--accent-burnt #C93D0A` · `--usage-color` + derivatives · `--shadow-glow` · `--shadow-card` · all categorical colours (`--context-color`, `--diversity-color`, `--density-color`, `--layout-color`).

---

## Phase 0 — Backup

- `[x]` **0.1** Copy `css/styles.css` → `css/styles.v2.backup.css`. Preserves current v2 state before banner work. Do **not** overwrite `styles.backup.css` (original purple) or `styles.v1.backup.css` (v1 warm-cream).

---

## Phase 1 — Add new tokens to `:root`

> **Why:** Named tokens give banner variants a single source of truth. Insert after the existing `--border-subtle` line in `:root` (around line 16 of current `styles.css`).

- `[x]` **1.1** Insert this block immediately after `--border-subtle`:
  ```css
  --banner-gradient-warm: linear-gradient(90deg, #F5C400 0%, #E8860A 50%, #C93D0A 100%);
  --banner-infra: #4A4E57;
  --banner-emphasis: #C93D0A;
  --banner-mobility: linear-gradient(90deg, #8AA88A 0%, #E8860A 70%, #C93D0A 100%);
  --banner-green: #8AA88A;
  --banner-text: #FFFFFF;
  --accent-teal: #6BA8B8;
  --accent-sage: #8AA88A;
  ```

---

## Phase 2 — Transform `.parameter-label` into a banner bar

> **Why:** Currently `.parameter-label` is plain uppercase text centred over white (see `css/styles.css` lines 240–248). Convert it to a filled horizontal strip with white text, rounded corners, and the default warm gradient fill.

- `[x]` **2.1** Rewrite the `.parameter-label` rule to:
  ```css
  .parameter-label {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--banner-text);              /* white on banner */
    background: var(--banner-gradient-warm); /* default: warm gradient */
    padding: 0.6rem 1.25rem;
    border-radius: var(--radius-sm);
    margin: 0 auto var(--spacing-sm);
    text-align: left;                       /* labels read left-aligned like the reference */
    display: inline-block;                   /* tight-hugs text; or use block + max-width */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  ```
  > [!NOTE]
  > If the implementer finds `text-align: left` breaks the centred layout of `.parameter-group`, change `.parameter-label` to `display: block` + `width: fit-content` + `margin: 0 auto var(--spacing-sm)` so the banner hugs its content but stays centred inside its group.

- `[x]` **2.2** Preserve the `.initial-label` override (see `layer0_initial.html` line 18 — it has `style="margin-bottom: 0.75rem;"`). Either leave it alone or add a `.parameter-label.initial-label` rule that overrides `background: transparent; color: var(--text-primary); padding: 0; box-shadow: none;` so the welcome-page question "What do you have in mind?" does **not** become a banner bar. **Recommended: keep welcome-page label un-bannered.**

---

## Phase 3 — Banner variant modifier classes

> **Why:** Different section types need different banner colours per the reference (warm gradient for active/energy/form, dark-gray for system hardware, burnt-red for emphasis, sage/mobility for landscape & movement).

- `[x]` **3.1** Add these CSS rules immediately after the `.parameter-label` base rule:
  ```css
  .parameter-label--infra      { background: var(--banner-infra); }
  .parameter-label--emphasis   { background: var(--banner-emphasis); }
  .parameter-label--mobility   { background: var(--banner-mobility); }
  .parameter-label--green      { background: var(--banner-green); }
  ```

- `[x]` **3.2** Do **not** introduce a `.parameter-label--warm` class — the warm gradient is the default (no modifier needed).

---

## Phase 4 — HTML: apply variants to the 5 selection pages

> **Why:** Each `.parameter-label` element needs the right modifier class appended for its section's meaning. The mapping below is the final decision — apply it as-is, do not re-derive.

### Per-page mapping

| File | Line | Label text | Class to apply | Resulting banner |
|---|---|---|---|---|
| `layer0_initial.html` | 18 | `What do you have in mind?` | `.parameter-label.initial-label` — *leave un-bannered* (see Phase 2.2) | *no banner* |
| `layer1_NUs_selection.html` | 26 | `LAND USE` | `.parameter-label` (default) | warm gradient |
| `layer1_NUs_selection.html` | 49 | `Context` | `.parameter-label` (default) | warm gradient |
| `layer1_NUs_selection.html` | 68 | `Density` | `.parameter-label` (default) | warm gradient |
| `layer1_NUs_selection.html` | 87 | `Layout` | `.parameter-label` (default) | warm gradient |
| `layer1_NUs_selection.html` | 106 | `Envelope` | `.parameter-label` (default) | warm gradient |
| `layer2_energy_selection.html` | 40 | `Load` | `.parameter-label` (default) | warm gradient |
| `layer2_energy_selection.html` | 53 | `ENERGY SYSTEMS` | `.parameter-label.parameter-label--infra` | **dark charcoal** (system hardware) |
| `layer2_energy_selection.html` | 80 | `Energy Generation` | `.parameter-label` (default) | warm gradient |
| `layer3_mobility_selection.html` | 40 | `Transportation` | `.parameter-label.parameter-label--mobility` | **sage→amber→burnt gradient** |
| `layer3_mobility_selection.html` | 75 | `Mobility` | `.parameter-label.parameter-label--mobility` | **sage→amber→burnt gradient** |
| `layer4_green_selection.html` | 40 | `Infrastructure` | `.parameter-label.parameter-label--emphasis` | **burnt-red** (critical infrastructure section) |
| `layer4_green_selection.html` | 75 | `Urban Agriculture` | `.parameter-label.parameter-label--green` | **sage** |
| `layer4_green_selection.html` | 94 | `Energy-Integrated GI` | `.parameter-label.parameter-label--green` | **sage** |

### Edit instructions for the implementer

- `[x]` **4.1** `layer2_energy_selection.html:53` — change `<div class="parameter-label">` → `<div class="parameter-label parameter-label--infra">`.
- `[x]` **4.2** `layer3_mobility_selection.html:40` — change to `<div class="parameter-label parameter-label--mobility">`.
- `[x]` **4.3** `layer3_mobility_selection.html:75` — change to `<div class="parameter-label parameter-label--mobility">`.
- `[x]` **4.4** `layer4_green_selection.html:40` — change to `<div class="parameter-label parameter-label--emphasis">`.
- `[x]` **4.5** `layer4_green_selection.html:75` — change to `<div class="parameter-label parameter-label--green">`.
- `[x]` **4.6** `layer4_green_selection.html:94` — change to `<div class="parameter-label parameter-label--green">`.
- `[x]` **4.7** All other `.parameter-label` instances (layer1 five labels + layer2 two labels + layer0 one) — **no HTML change**; they inherit the default warm-gradient banner.

> [!NOTE]
> Output pages (`layer1_output.html`, `layer2_output_energy.html`, `layer2_pv_breakdown.html`, `layer2_energy_breakdown.html`, `layer3_ev_v2g_mobility_output.html`, `layer3_ev_breakdown.html`, `layer4_lpv_breakdown.html`, `layer4_output_selection.html`) contain **no `.parameter-label` elements** — they are data/table pages. No HTML edits needed on those 8 files.

> [!IMPORTANT]
> **Do NOT touch `3dviewer.html`.** The 3D viewer page is out of scope for this entire palette round — leave its markup and any viewer-specific inline styles exactly as they are. All palette changes apply to every other page (the 5 selection pages + 8 output/breakdown pages share `css/styles.css`, so the CSS work naturally skips `3dviewer.html` as long as no 3D-viewer-specific rules are edited).

---

## Phase 5 — Subtle cool accents (low priority, stretch)

> **Why:** The reference includes very small touches of teal (glass reflection) and sage (tree icons). These should be used **sparingly** — the dominant palette is still warm gradient + neutral gray + white.

- `[x]` **5.1** Add a teal hover glow on image thumbnails inside cards (picks up the "glass reflection" cue). Insert after the existing `.usage-card img` rule:
  ```css
  .usage-card:hover img,
  .context-card:hover img,
  .layout-card:hover img,
  .density-card:hover img,
  .envelope-card:hover img {
    box-shadow: 0 0 20px rgba(107, 168, 184, 0.35); /* --accent-teal @ 35% */
  }
  ```
- `[x]` **5.2** *(Optional)* If there are any tree / landscape icons or SVGs used on `layer4_green_selection.html`, tint them with `--accent-sage` via CSS `filter` or SVG `fill`. If none exist, skip — don't force this token.

---

## Phase 6 — Leave intact (do NOT revert)

> These are correct from v1/v2 and define the overall theme. Do not touch.

- `[x]` `--bg-primary #FAFAFA`, `--bg-secondary #F1F2F4`, `--bg-card rgba(255,255,255,0.98)` — cool white base.
- `[x]` `--accent-gradient` (135° gold→burnt) — page titles (`.header h1`) + primary buttons (`.submit-btn`) keep this.
- `[x]` `--usage-color #E8860A` + `--usage-bg` + `--usage-active` — parameter button styling.
- `[x]` `--shadow-glow 0 0 30px rgba(232,134,10,0.2)` — card/button hover amber glow.
- `[x]` All categorical button colours (`--context-color #e11d48`, `--diversity-color #16a34a`, `--density-color #ea580c`, `--layout-color #0284c7`).
- `[x]` Active-state bold gold fill + amber border on `.usage-card.active`, `.initial-btn.active`, `.consumption-card.active`, `.results-table tr.selected td`.
- `[x]` Burnt-red `border-bottom: 2px solid rgba(201,61,10,0.5)` under table headers.
- `[x]` EUI scale gradient (`linear-gradient(to right, #22c55e 0%, #eab308 50%, #ef4444 100%)`) — semantic performance indicator, not theme.
- `[x]` `ENERGY_COLORS` in `js/data.js`.
- `[x]` LPV toggle amber tints, EV toggle pinkish tints, PV input warm tint.

---

## Phase 7 — Verification (per page)

For each page, open in a browser and confirm against `colorPaletteExample.png` + `colorPaletteReference.png`:

- **(a)** Page background reads as **white / cool-gray**, NOT cream.
- **(b)** Cards AND variant tiles remain **crisp white** (Phase 9), distinct from the bg via subtle shadow only. NO greige/cream tile bodies anywhere.
- **(c)** Banner bars appear on every `.parameter-label` with the mapped colour (warm / infra / emphasis / mobility / green).
- **(d)** Banner text is **white**, readable, and tight-hugging the label text.
- **(e)** Active card state is still **bold golden-yellow with amber border** (unchanged from v2).
- **(f)** Page title gradient and primary button gradient are **gold→burnt** (unchanged from v2).
- **(g)** Layer 0 welcome label is **not** a banner — it stays plain text.
- **(h)** (If Phase 5 applied) card image hover glow is subtle teal.

| # | Page | File | Specific checks |
|---|---|---|---|
| 1 | Layer 0 | `layer0_initial.html` | (a)(e)(f)(g) — welcome label un-bannered |
| 2 | Layer 1 Selection | `layer1_NUs_selection.html` | (a)(b)(c)(d)(e)(f)(h) — 5 warm-gradient banners (LAND USE, Context, Density, Layout, Envelope) |
| 3 | Layer 1 Output | `layer1_output.html` | (a)(b)(e)(f) — no banners on output page; table styling unchanged |
| 4 | Layer 2 Energy Select | `layer2_energy_selection.html` | (a)(b)(c)(d)(e) — Load = warm, **ENERGY SYSTEMS = dark charcoal**, Energy Generation = warm |
| 5 | Layer 2 Energy Output | `layer2_output_energy.html` | (a)(b)(f) — no banners |
| 6 | Layer 2 PV Breakdown | `layer2_pv_breakdown.html` | (a)(b)(f) — no banners |
| 7 | Layer 2 Energy Break. | `layer2_energy_breakdown.html` | (a)(b) — no banners |
| 8 | Layer 3 Mobility | `layer3_mobility_selection.html` | (a)(b)(c)(d)(e) — Transportation + Mobility = **sage→amber→burnt gradient banner** |
| 9 | Layer 3 EV V2G | `layer3_ev_v2g_mobility_output.html` | (a)(b)(f) — no banners |
| 10 | Layer 3 EV Breakdown | `layer3_ev_breakdown.html` | (a)(b) — no banners |
| 11 | Layer 4 Green | `layer4_green_selection.html` | (a)(b)(c)(d)(e) — **Infrastructure = burnt-red**, Urban Agriculture = sage, Energy-Integrated GI = sage |
| 12 | Layer 4 LPV Break. | `layer4_lpv_breakdown.html` | (a)(b) — no banners |
| 13 | Layer 4 Output | `layer4_output_selection.html` | (a)(b)(e)(f) — no banners; gradient submit button still works |

---

## Phase 9 — Revert variant tile cards to WHITE (critical fix after supervisor review 2026-04-21)

> **Why:** Despite Phase 1 setting `--bg-card` to pure white, the actual variant tiles on every selection page (`.usage-card`, `.context-card`, `.layout-card`, `.density-card`, `.envelope-card`, `.consumption-card`, `.demand-card` and related) were painted `background: var(--bg-inactive-tile)` — currently `#ECEAE3`, a warm greige. That is what makes Layer 1 still read as **cream**, not white, in `Screenshot 2026-04-21 at 12.01.16.png`. The reference requires WHITE variant tiles on a white-gray page, with greige reserved only for an explicitly-inactive / disabled modifier (if used at all).
>
> Also note: `--bg-inactive-tile` is declared as `#ECEAE3` in the current file (not `#D6D3CC` as the older task doc claimed) — this is the v1-era warm greige that was never cleaned up.

### Discovery — locations that currently set `var(--bg-inactive-tile)` as the **default** tile background

(from grep in `css/styles.css` — line numbers as of 2026-04-21)

| Line | Selector | Current | Target |
|---|---|---|---|
| 17 | `--bg-inactive-tile` token | `#ECEAE3` | `#FFFFFF` (or leave token, but redirect it) |
| 305 | `.usage-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 386 | `.context-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 440 | `.layout-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 494 | `.density-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 550 | `.envelope-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 678 | `.consumption-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |
| 749 | `.demand-card` | `background: var(--bg-inactive-tile)` | `background: var(--bg-card)` |

> [!NOTE]
> The implementer should **re-grep** `var(--bg-inactive-tile)` before editing — other card rules (`.generation-card`, `.load-card`) may also reference it. Apply the same fix to every DEFAULT-state rule that uses it.

### Tasks

- `[ ]` **9.1** In `:root`, change `--bg-inactive-tile: #ECEAE3;` → `--bg-inactive-tile: #F1F2F4;` (cool light-gray, matches `--bg-secondary`). This is a defensive change for any future inactive-variant modifier; do it even though the default-tile rules are being re-pointed to `--bg-card`.

- `[ ]` **9.2** Change every default-state variant tile rule listed above from `background: var(--bg-inactive-tile)` → `background: var(--bg-card)`. Seven rules confirmed by grep; re-run `grep -n "var(--bg-inactive-tile)" css/styles.css` after editing to make sure no stragglers remain on **default** tile selectors.

- `[ ]` **9.3** Tile definition now reads as: **white default** → (existing) faint amber hover → (existing) bold gold + amber-border active. Verify the inactive state still has a visible outline — if white cards blend into the white-gray page too much, add `border: 1px solid var(--border-subtle)` to `.usage-card`, `.context-card`, `.layout-card`, `.density-card`, `.envelope-card`, `.consumption-card`, `.demand-card` (only if needed; the existing `--shadow-card` box-shadow may already be enough).

- `[ ]` **9.4** **Do NOT** touch the `.X-card.active` rules — bold gold fill + amber border from v2 Phase 5 must stay as the only bold fill state.

- `[ ]` **9.5** **Do NOT** touch `#F5A742` at line 1023 (unrelated — that is an EUI / status color, not a tile background).

### Verification for Phase 9

- `[ ]` **9.6** Open `layer1_NUs_selection.html` in the browser. All 14 tiles (4 land-use + 3 context + 3 density + 3 layout) must now appear **white/near-white**, not cream. Selected tile alone carries the bold gold fill + amber border.
- `[ ]` **9.7** Repeat the white-tile check on `layer2_energy_selection.html` (generation/load/demand), `layer3_mobility_selection.html`, and `layer4_green_selection.html`.
- `[ ]` **9.8** Place the new Layer 1 screenshot next to `colorPaletteExample.png`. Tile bodies must read the same tone as the page — clean white on white-gray — NOT a darker greige band across the middle of the page.

---

## Phase 8 — Progress log

Fill this in as each phase is executed. One row per material change.

| Date | Phase | File | Change | Result | Notes |
|---|---|---|---|---|---|
| 2026-04-21 | 0.1 | css/styles.css | Copied to css/styles.v2.backup.css | ✓ | Backup confirmed |
| 2026-04-21 | 1.1 | css/styles.css | Added 8 banner/accent tokens after --border-subtle in :root | ✓ | Lines 21-28 |
| 2026-04-21 | 2.1 | css/styles.css | Rewrote .parameter-label: filled banner bar, white text, warm gradient, display:block, width:fit-content | ✓ | Used block+fit-content per fallback note |
| 2026-04-21 | 2.2 | css/styles.css | Added .parameter-label.initial-label override — transparent bg, primary text, no shadow | ✓ | Layer0 welcome label un-bannered |
| 2026-04-21 | 3.1 | css/styles.css | Added 4 modifier rules: --infra, --emphasis, --mobility, --green | ✓ | Lines 279-282 |
| 2026-04-21 | 4.1 | layer2_energy_selection.html | ENERGY SYSTEMS → parameter-label--infra | ✓ | Dark charcoal banner |
| 2026-04-21 | 4.2 | layer3_mobility_selection.html | Transportation → parameter-label--mobility | ✓ | Sage→amber→burnt banner |
| 2026-04-21 | 4.3 | layer3_mobility_selection.html | Mobility → parameter-label--mobility | ✓ | Sage→amber→burnt banner |
| 2026-04-21 | 4.4 | layer4_green_selection.html | Infrastructure → parameter-label--emphasis | ✓ | Burnt-red banner |
| 2026-04-21 | 4.5 | layer4_green_selection.html | Urban Agriculture → parameter-label--green | ✓ | Sage banner |
| 2026-04-21 | 4.6 | layer4_green_selection.html | Energy-Integrated GI → parameter-label--green | ✓ | Sage banner |
| 2026-04-21 | 5.1 | css/styles.css | Added teal hover glow on usage/context/layout/density/envelope card images | ✓ | rgba(107,168,184,0.35) |
| 2026-04-21 | 7 | all 5 selection pages | Verification pass 1 — curl confirmed correct classes on all pages; CSS tokens and rules grep-verified | ✓ | No mismatches found |
|  | 7 |  | Verification pass 2 (after fixes) |  |  |
| 2026-04-21 | 9.1 | css/styles.css | `--bg-inactive-tile` token: `#ECEAE3` → `#F1F2F4` (cool light-gray, reserved for inactive-variant modifier) | ✓ | Line 17 |
| 2026-04-21 | 9.2 | css/styles.css | `background: var(--bg-inactive-tile)` → `background: var(--bg-card)` on 7 default-state rules: `.usage-card` (L305), `.context-card` (L386), `.layout-card` (L440), `.density-card` (L494), `.envelope-card` (L550), `.consumption-card` (L678), `.generation-card/.load-card/.demand-card` (L749); grep confirmed 0 straggler default-tile uses remain | ✓ | All variant tiles now pure white |
| 2026-04-21 | 9.3 | css/styles.css | Added `border: 1px solid var(--border-subtle)` to same 7 selectors — white tiles (`rgba(255,255,255,0.98)`) on `#FAFAFA` page have negligible contrast without it; active rules retain `border: 2px solid #E8860A` override | ✓ | Subtle gray outline separates tile from page |

---

## Notes for the implementing session

1. **Start with Phase 0** — do not skip the backup. `css/styles.v2.backup.css` is the roll-back anchor.
2. **CSS edits** live entirely in `css/styles.css`. One new token block in `:root`, one rewrite of `.parameter-label`, four new modifier rules, optional teal hover. That's it.
3. **HTML edits** are exactly 6 class-attribute changes on 3 files (see Phase 4.1–4.6). No structural HTML changes.
4. **Do not touch** any `rgba(232,134,10,…)` amber or `rgba(201,61,10,…)` burnt-red rgba values elsewhere in the file — those are v2 accent tints on hover states / borders / glows and must stay.
5. **Do not touch** categorical parameter-button colours (`--context-color`, `--diversity-color`, `--density-color`, `--layout-color`). `--accent-sage` is **additive**, not a replacement for `--diversity-color`.
6. **Centring check.** If default `text-align: center` on `.parameter-group` causes the new banner to stretch full-width and look too heavy, switch `.parameter-label` from `display: inline-block` to `display: block; width: fit-content; margin: 0 auto var(--spacing-sm)` so the banner hugs its text and stays centred.
7. **Smoke test.** Serve the site locally (any static server, e.g. `python3 -m http.server 8000` from the repo root), open each of the 5 selection pages plus `layer0_initial.html`, and walk through the Phase 7 checklist. Take one screenshot of `layer1_NUs_selection.html` and one of `layer4_green_selection.html` and place them next to `colorPaletteExample.png` — the horizontal rhythm of coloured banner strips should now match the reference.
8. **Model recommendation.** Sonnet 4.6 or 4.7 is sufficient. No Opus needed — the scope is surgical and fully specified.
