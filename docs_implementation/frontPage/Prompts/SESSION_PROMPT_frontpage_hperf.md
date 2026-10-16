# Session prompt: HPerf pathway on the front page

**Open a new session by pasting this file's path and nothing else.** Written 2026-10-14 after the feasibility check. Task doc: `docs_implementation/frontPage/frontpage_hperf_feasibility.md`.

## 0. Rules for this session

* Read the project rules file at the repo root first. Chat in English, 1 to 3 sentences, no em dash, max ~80 words per reply. Findings go in the task doc, not chat.
* Do only what is asked. No new files beyond the Progress Log in the task doc. No refactors. If it works, do not touch it.
* No CDN, no build step. Any css/js change bumps the `?v=N` cache stamp on all pages in the same commit. Commit only when Koral asks.
* Cheap models (haiku or sonnet) for scanning and file peeks. Never read `js/data.js` or `documentation.html` whole. Use Grep, then Read with offsets.
* No simulated value is typed or changed. This task moves UI only.

## 1. Goal

Supervisor request: replace the disabled "New Neighborhood / Not modelled yet" front-page button with the HPerf (HPENV) selection, and for existing neighbourhoods offer only 1983 and Standard (NECB 2017).

## 2. Status and gate

* 2026-10-14: Koral emailed CHV the proposal (`email/EMAIL-01_frontpage_hperf.md`): HPENV shown in one place only. The second front-page button becomes "High-Performance Envelope (HPENV)", replacing "Not modelled yet". Existing neighbourhoods get 1983 and Standard only.
* **CHV replied (2026-10-14), gate cleared.** She agrees to take HPENV out of the existing-neighbourhood path, but it stays under new neighbourhoods: "the first page should still show new neighborhoods". The label "High-Performance Envelope (HPENV)" is superseded. The second front-page button keeps the label "New Neighborhoods", is enabled (no "Not modelled yet"), and leads to the HPENV selection. Do not ask again.

* **Executed 2026-10-14, not committed.** Steps 1 to 5 are done (see the Progress Log in the task doc). `?v=40` on all pages. Headless Chrome checks passed. Gemini browser test prompt: `Prompts/PROMPT_gemini_frontpage_hperf.md`, shared by Koral, results pending. Next: read Gemini's report, fix only real failures, then commit when Koral asks. Sections 3 and 4 below describe the state before execution.

* **State at session close, 2026-10-14 (supersedes the bullet above).** Gemini passed 9 of 9. The first button now reads "Existing Neighborhoods" (Koral: both labels plural). Koral considers the interface side done. Walkthrough deck: `NEXA_pathway_walkthrough.html` in this folder (also a private claude.ai artifact).
* **Commit is scheduled, do not commit by hand.** Windows task "NEXA-web Friday commit", 2026-10-16 09:00, script `C:\Users\o_iseri\ScheduledTasks\nexa_web_friday_commit.ps1`, log `nexa_web_friday_commit.log` beside it. Message `[ui]: Add New Neighborhoods pathway to the front page`, no push. Contents: all pages (stamp v40), `index.html`, `docs_implementation/frontPage`, and only the pathway hunk of `js/app.js` (`app_pathway.patch`). **Not committed, by Koral's decision:** the hidden 1983 Zones 4, 5, 7A, 7B work (`data.js`, `config.js`, the 1983 hunks of `app.js`, `Templates/1983-National`, Part2 docs). Only Montreal 1983 is live. The script aborts if anything is staged or the patch no longer applies. After Friday, read the log first.

## 3. Current state (verified 2026-10-14, local repo, before execution)

* `index.html:49-56`: second button hard-coded `disabled`, class `is-unavailable`, `data-permanently-disabled`, label "Not modelled yet". Get Started enables only for `existing` (`index.html:133-139`). Navigation is a plain link (`index.html:154`), nothing is passed on.
* `js/app.js:326-369` (`setupEnvelopeCards`): popup with 1983, Standard, HPerf. 1983 shows only for `HISTORICAL_TIER_REGIONS` (`app.js:205`, `:352-355`). Tier click builds the key via `getEnvelopeValue` (`app.js:210-224`), stored in `activeFilters.envelope` and sessionStorage `activeFilters` / `selectedEnvelope` (`app.js:580-583`).
* `layer1_NUs_selection.html:228-261`: popup markup. Later pages read the envelope key only, so they need no change.
* `app.js`, `config.js`, `data.js` carry uncommitted edits. Run `git status` and tell Koral before touching them.

## 4. Steps

1. `index.html`: enable the second button, drop the "Not modelled yet" label, keep the label "New Neighborhoods" (CHV's answer). Get Started enables for either choice. On click, write `nexaPathway` (`existing` or `new`) to sessionStorage inside try/catch, then navigate.
2. `js/app.js` popup: read `nexaPathway`. `existing`: show Standard, plus 1983 where the region is in `HISTORICAL_TIER_REGIONS`, hide HPerf. `new`: show HPerf only (optionally auto-select it). Missing value: current behaviour, all tiers.
3. Clear `selectedEnvelope` and `activeFilters.envelope` when the pathway differs from the one stored, so a stale HPerf key cannot carry into the existing pathway.
4. Bump the `?v=N` stamp on every page.
5. Append a Progress Log row to the task doc per step. Do not reformat earlier text.

## 5. Checks

* Existing, Montreal: popup shows 1983 and Standard, no HPerf.
* Existing, other zone: Standard only (1983 hidden until released). Say in one line if this feels wrong, do not fix it.
* Second pathway: popup shows HPerf only, and the chosen key reaches Layers 2 to 4 and comparison unchanged (`high-performance-z6`).
* Direct visit to Layer 1 and the `?key=` reviewer link still work, all tiers shown.
* Back from Layer 1 to the front page and switching pathway leaves no stale envelope.
* State in one line what was not tested in a browser.

## 6. Out of scope

Data changes, new zones for 1983, the `config.js:1779` DEFAULT-row comment mismatch (note only), `documentation.html` text.

## 7. Open after close (2026-10-14)

* **60.6 on both pathways.** `necb-z*` EEM1 to EEM4 in `data.js` come from the HPENV diagonal, so Existing and New converge. The simulations are a 16-cell factorial, and the Standard-envelope runs exist (Z6 RC-R: HVAC_ONLY 101.7, HVAC_DHW 89.0, HVAC_DHW_EEM4 68.6). Fix later: point the Existing pathway's Layer 2 at the env=0 runs. This is a data change, traced to the masters. Details: task doc, "Correction: Combination Runs".
* **408 missing runs.** 17 multifamily NUs x 4 Standard + EEM4 tags x 6 zones (12.1%), skipped by the EEM4 gate, confirmed absent locally, in `docs_LMN_web` and on Speed. Handed to NEXA-desktop: `docs_ACTIVE/MissingSims/PROMPT_missing408_standard_EEM4.md`. Koral: ignore these on the web side until they land.
* **Fan-fix rerun** of the 1983 arms on Speed: 253 of 2,048 at 2026-10-14 19:10 (jobs 1457956, 1457957, 1457974, 1457975), about 5 to 6 days left. Speed is reachable through the `speed` SSH alias.
* **Site text list** (task doc, "Site Text to Update"): pending, depends on the 60.6 decision.
* **Emails:** EMAIL-01 and the cancelled EMAIL-02 are in `email/archive/`. Koral edits emails by hand. Do not edit them unless asked.
