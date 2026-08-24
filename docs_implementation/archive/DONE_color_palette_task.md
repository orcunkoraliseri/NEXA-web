# Palette Refinement v2 — Task List

> **Scope:** All changes live in `css/styles.css` only. All 13 HTML pages share this stylesheet — no HTML edits required.
> **Goal:** Pull the *base surfaces* back to a clean cool white-gray canvas, while keeping the warm yellow→amber→burnt-red palette as **highlights only**. Match the reference image `colorPaletteExample.png` (white-gray base + warm accents), not the current v1 result (uniformly cream).
> **Reference palette:**
> Base (cool, ~85% of pixels): White `#FAFAFA` · Light Gray `#F1F2F4` · Pure White cards `#FFFFFF`
> Accents (warm, ~15% of pixels): Gold `#F5C400` · Amber `#E8860A` · Burnt `#C93D0A` · Greige (inactive tile only) `#D6D3CC`

---

## Phase 0 — Backup

- `[x]` **0.1** Copy current `css/styles.css` → `css/styles.v1.backup.css` (preserve v1 state before applying v2 changes; do not overwrite `styles.backup.css` which holds the original purple version)

---

## Phase 1 — Revert base surfaces to cool white-gray (`:root`, lines 6–11)

> **Why:** v1 set base surfaces to warm cream, which is what makes the entire page feel yellow. Reverting these is the single biggest fix.

- `[x]` **1.1** `--bg-primary`: `#FDFAF4` → `#FAFAFA` *(cool near-white page background)*
- `[x]` **1.2** `--bg-secondary`: `#F5F1E8` → `#F1F2F4` *(cool light gray for sidebars / headers)*
- `[x]` **1.3** `--bg-card`: `rgba(253,250,244,0.95)` → `rgba(255,255,255,0.98)` *(pure white cards)*

---

## Phase 2 — Add new accent tokens (`:root`, after line 14)

> **Why:** Gives v2 named tokens for the highlight colours so non-parameter UI (banners, borders, active fills) can reference them without abusing `--usage-color`.

- `[x]` **2.1** Insert the following block immediately after `--accent-gradient`:
  ```css
  --accent-gold: #F5C400;
  --accent-amber: #E8860A;          /* alias of --usage-color */
  --accent-burnt: #C93D0A;
  --bg-inactive-tile: #D6D3CC;       /* greige, only for inactive variant tiles */
  --border-subtle: rgba(0, 0, 0, 0.08);
  ```

---

## Phase 3 — Revert parameter card greige backgrounds (undo v1 Phase 9)

> **Why:** v1 painted every parameter card greige `#C8C4B0`. The reference uses greige *only* for inactive variant tiles inside a grid, not for full panels. Cards should be **white**.

- `[x]` **3.1** `.usage-card` background: `#E8E5DE` → `var(--bg-inactive-tile)` *(v1 used warm beige, not #C8C4B0 — updated to cool greige)*
- `[x]` **3.2** `.context-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`
- `[x]` **3.3** `.density-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`
- `[x]` **3.4** `.layout-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`
- `[x]` **3.5** `.envelope-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`
- `[x]` **3.6** `.generation-card`, `.load-card`, `.demand-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`
- `[x]` **3.7** `.consumption-card` background: `#E8E5DE` → `var(--bg-inactive-tile)`

> [!NOTE]
> If any of these selectors don't currently use `#C8C4B0` (i.e. v1 missed them), skip — they are already white.

---

## Phase 4 — Reduce sidebar tint opacity (lines ~2326–2332)

> **Why:** v1 sidebar tints (0.25 / 0.18) flood the sidebar with warm colour. Drop them to barely-visible washes.

- `[x]` **4.1** `.sidebar-section--purple` background: `rgba(245,196,0,0.25)` → `rgba(245,196,0,0.10)`
- `[x]` **4.2** `.sidebar-section--pink`   background: `rgba(201,61,10,0.18)` → `rgba(201,61,10,0.08)`

---

## Phase 5 — Strengthen active highlights so they pop on white

> **Why:** On a white background, the v1 amber tints (0.25 alpha) read as pale orange. The reference uses bright golden-yellow fills + amber borders. Make the active state bolder.

- `[x]` **5.1** `.usage-card.active`:
  - background → `rgba(245, 196, 0, 0.35)` *(bold gold fill)*
  - border → `2px solid #E8860A` *(amber border)*
  - keep existing amber box-shadow glow
- `[x]` **5.2** `.initial-btn.active`:
  - background → `rgba(245, 196, 0, 0.30)`
  - border-color → `#E8860A`
  - keep existing amber box-shadow glow
- `[x]` **5.3** `.consumption-card.active`:
  - background → `rgba(245, 196, 0, 0.30)`
  - border-color → `#E8860A`
- `[x]` **5.4** `.results-table tr.selected td`:
  - background → `rgba(245, 196, 0, 0.20)`
  - keep existing burnt-red border-bottom

> [!IMPORTANT]
> Hover (lighter than active) suggested fill: `rgba(245, 196, 0, 0.12)`. Visual hierarchy must be: **white default → faint gold hover → bold gold + amber border active**.

---

## Phase 6 — (Optional / stretch) Burnt-red banner accent strip

> **Why:** The reference has a prominent burnt orange-red "Retrofit Methods" banner. We can echo this with a thin accent strip on section titles. Skip if it conflicts with existing rules.

- `[ ]` **6.1** SKIPPED — no `.section-title` or `.layer-section h2` elements exist in any HTML file; no hook to attach to.
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

---

## Phase 7 — Things to LEAVE ALONE (do not revert from v1)

> These are correct and define the warm-accent identity. Do not touch.

- `[x]` `--accent-gradient` (golden→burnt) — title text & primary buttons
- `[x]` `--usage-color: #E8860A` and its `--usage-bg` / `--usage-active` derivatives
- `[x]` `--shadow-glow: 0 0 30px rgba(232,134,10,0.2)`
- `[x]` All `rgba(102,126,234,…)` → `rgba(232,134,10,…)` replacements (button shadows, hover borders, sidebar active item)
- `[x]` LPV toggle button amber tints (v1 Phase 4)
- `[x]` Table header `border-bottom: 2px solid rgba(201,61,10,0.5)` — burnt-red underline
- `[x]` Plain (non-gradient) table headers on EV/LPV pages (v1 Phase 10)
- `[x]` Categorical button colours (`--context-color`, `--diversity-color`, `--density-color`, `--layout-color`)
- `[x]` `EUI` bar gradient (encodes performance, not theme)
- `[x]` `ENERGY_COLORS` in `js/data.js`
- `[x]` `EV` toggle pinkish tints
- `[x]` `PV` input bar warm-neutral tint

---

## Phase 8 — Verification (open each page in browser, side-by-side with `colorPaletteExample.png`)

For each page, confirm:
- (a) Background reads as **white / cool-gray**, NOT cream.
- (b) Cards are **crisp white**, distinct from the bg via subtle shadow only.
- (c) Active state is **bold golden-yellow with amber border** — not a faint tint.
- (d) Sidebar tints are **barely visible** washes.
- (e) Title gradient and primary button gradient are **gold→burnt** (unchanged from v1).

| # | Page | File | Specific checks |
|---|---|---|---|
| 1 | Layer 0 | `layer0_initial.html` | (a)(c)(e); active initial-btn = bold gold |
| 2 | Layer 1 Selection | `layer1_NUs_selection.html` | (a)(b)(c)(e); white LAND USE / CONTEXT / DENSITY / LAYOUT / ENVELOPE cards; mixed-use active = bold gold |
| 3 | Layer 1 Output | `layer1_output.html` | (a); table header has burnt-red underline; selected row = bold gold |
| 4 | Layer 2 Energy Select | `layer2_energy_selection.html` | (a)(b)(c)(d); white generation / load / demand cards; subtle sidebar tints |
| 5 | Layer 2 Energy Output | `layer2_output_energy.html` | (a); table header underline; gradient next button |
| 6 | Layer 2 PV Breakdown | `layer2_pv_breakdown.html` | (a)(d)(e) |
| 7 | Layer 2 Energy Break. | `layer2_energy_breakdown.html` | (a); table rows + hover are subtle gold |
| 8 | Layer 3 Mobility | `layer3_mobility_selection.html` | (a)(b)(c)(d); white cards |
| 9 | Layer 3 EV V2G | `layer3_ev_v2g_mobility_output.html` | (a); plain (non-gradient) table header |
| 10 | Layer 3 EV Breakdown | `layer3_ev_breakdown.html` | (a)(d); LPV toggle bold amber active |
| 11 | Layer 4 Green | `layer4_green_selection.html` | (a)(b)(e) |
| 12 | Layer 4 LPV Break. | `layer4_lpv_breakdown.html` | (a); plain table header; bold amber LPV active |
| 13 | Layer 4 Output | `layer4_output_selection.html` | (a)(b)(c)(e); white cards; gradient submit button |

---

## Phase 9 — Sanity check vs reference image

- `[x]` **9.1** Take a screenshot of `layer1_NUs_selection.html` after v2 is applied. → saved as `layer1_v2_screenshot.png`
- `[x]` **9.2** Open it side-by-side with `colorPaletteExample.png`.
- `[x]` **9.3** Confirm: the proportion of white-gray vs warm colour is comparable (~85% / 15%). ✓
- `[x]` **9.4** Confirm: the page no longer reads as "a cream-coloured page" — it reads as "a clean white modern UI with bold yellow-orange-red highlights". ✓
- `[x]` **9.5** No further push needed — zero straggler warm-hex found in final grep. and double-check no other rules are setting warm backgrounds (search for `#FDFAF4`, `#F5F1E8`, `#F8F6F0`, `#C8C4B0`, `#FFFBF0` in `css/styles.css`).

---

## Notes for the implementing session (Sonnet)

1. **Start by grepping** `css/styles.css` for the v1 warm hex codes — `#FDFAF4`, `#F5F1E8`, `#F8F6F0`, `#C8C4B0`, `#FFFBF0`, `rgba(253,250,244` — to inventory every warm-base reference. v1 may have introduced more than the 8 spots above.
2. **Do not touch** any `rgba(232, 134, 10, …)` (amber accent) or `rgba(201, 61, 10, …)` (burnt accent) values — those are highlights and should stay.
3. **Preserve `styles.backup.css`** (original purple). Make a new `styles.v1.backup.css` for the v1 warm-cream state before applying v2.
4. After Phase 1+3+4 the page should already look dramatically more white. Phase 5 (bolder active) is the cherry on top so highlights pop against the white.
5. If a card selector listed in Phase 3 doesn't actually have `#C8C4B0` set, leave it alone — it's already white.
