# Prompt: Gemini test of the NEXA-web front-page pathways

Paste everything below the line into Gemini (Chrome, with page access). Fill the placeholder
first. The site must be signed in already, or auth disabled on the local copy.

---

You are testing the first page of a research website, NEXA-web. Act as a careful QA tester. Do every step in order, in this browser, and report exactly what you see. Do not guess: if a step cannot be done, say so and why. Use a fresh tab (empty session) for step 1.

Site under test: `[SITE_URL]` (local copy: `http://localhost:8080/`).

How it should behave:
- The first page shows two pathway buttons: "Existing Neighborhood" and "New Neighborhoods". Both are clickable. Neither shows "Not modelled yet".
- "Get Started" is disabled, with the hint "Choose a pathway above to continue.", until a pathway is chosen.
- Get Started opens `layer1_NUs_selection.html`. Clicking a climate zone card there opens a popup "Select Performance Level".
- Existing pathway popup: "Standard" only, plus "1983" for Montreal (NECB Zone 6) only. No High-Performance Envelope option, no HPerf definition note.
- New pathway popup: "High-Performance Envelope (HPerf)" only, with its definition note. No Standard, no 1983.
- Opening Layer 1 directly (not through the first page, empty session) shows every tier the zone has.
- Switching pathway on the first page must not carry the earlier envelope choice forward.

Steps:
1. Open `[SITE_URL]index.html`. Check both buttons are present, readable, not greyed, and Get Started is disabled with its hint. Report anything cut off or overlapping, at desktop width and at a narrow phone width.
2. Click "Existing Neighborhood". Expected: it looks selected, Get Started enables, hint disappears.
3. Click Get Started. Click the Montreal (Zone 6) card. Report the options in the popup. Close it, click Zone 5, report the options.
4. Pick "Standard" for Zone 6, finish the Layer 1 selections, continue to the results, then use the browser Back button until you are on the first page.
5. Click "New Neighborhoods", then Get Started. Report the options for Zone 6, Zone 5 and Zone 4. Confirm no earlier envelope choice is still shown as selected.
6. Pick HPerf for Zone 6, finish the Layer 1 selections, open one neighbourhood result and continue through Layer 2. Confirm the results page names a high-performance envelope and the page loads without errors.
7. Go back to the first page, choose "Existing Neighborhood" again and open Layer 1. Confirm the HPerf choice is gone and the HPerf option is not offered.
8. Open a new tab and go directly to `[SITE_URL]layer1_NUs_selection.html`. Click Zone 6 and report the options (expected: 1983, Standard, HPerf).
9. Open the browser console on each page you visited. Report any red errors.

Report format: one line per step, "Step N: PASS or FAIL, what you saw". Then a short list of anything that looked wrong or confusing even if it matched the expectations. Do not suggest redesigns.
