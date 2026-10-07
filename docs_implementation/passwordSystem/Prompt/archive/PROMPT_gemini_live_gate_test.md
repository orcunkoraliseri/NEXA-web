# Prompt: Gemini live test of the NEXA-web sign-in gate

The gate is live since 2026-10-07 (`935c837`, 7-day session `c9c62a8`). The Tools page request
was already tested (archive `PROMPT_gemini_live_test.md`, prompt 1). This prompt tests the gate
itself on the live site. It is written for the Gemini coding agent (the one that runs commands
in this folder), which opens and clicks the site in its own browser.

## What Koral does

1. Open the sheet "NEXA-web User Verification" and add two rows, never a real user:
   - `gate-test-a@nexa.test`, a password you invent, DeviceID empty, Status `active`
   - `gate-test-r@nexa.test`, another password you invent, DeviceID empty, Status `revoked`
2. Copy everything under "Prompt" below into the Gemini agent chat. Before sending, replace
   `[PASSWORD_A]` and `[PASSWORD_R]` with the two passwords. Do not write them in any file.
3. Wait for its report. Then delete both rows from the sheet and give the report to Claude for
   the Progress Log.

---

## Prompt

You are testing the sign-in gate of a research website, NEXA-web, on its live server. Act as a
careful QA tester.

How to work:
- Use your built-in browser tool to open the pages and click, type and read them like a person.
  Every PASS must come from what the browser showed. Reading the source code, `curl`,
  `Invoke-RestMethod` or `fetch` do not count as evidence; if you cannot use the browser for a
  step, mark it "NOT RUN" and say why.
- Do every step in order and report exactly what you see. Do not guess.
- Use only the email addresses and passwords written in this prompt. Do not try other accounts.
- Do not edit any file in this folder, do not commit, and never write the passwords to a file,
  log or report. In the report write "Account A" and "Account R", not the passwords.
- Take a screenshot at steps 1, 7, 11 and 13 if your browser tool can.

Site under test: `https://carolinehvermette.github.io/NEXA-Web/`

Test accounts:
- Account A, active: `gate-test-a@nexa.test` / `[PASSWORD_A]`
- Account R, revoked: `gate-test-r@nexa.test` / `[PASSWORD_R]`

Before step 1, make sure the browser is signed out: if a NEXA-web page opens without a login
prompt, click "Sign out" in its footer first.

1. Open `https://carolinehvermette.github.io/NEXA-Web/layer2_energy_selection.html`. Expected:
   redirected to `login.html` with `next=layer2_energy_selection.html` in the URL. Report the
   final URL.
2. On the login page check: NEXA title, an "Intended use" note (pre-feasibility, not detailed
   design), Email and Password fields, a "Sign in" button, and a link to the RHlab Tools page.
   Click that link. Expected: it opens `https://rhlab.encs.concordia.ca/tools.html`. Go back.
3. Click "Sign in" with both fields empty. Expected: "Enter both your email and your password."
4. Sign in with `nobody@nexa.test` and any password. Expected: a message saying the email has no
   NEXA-web access yet and to request access from the RHlab Tools page.
5. Sign in with Account A's email and a wrong password. Expected: "Invalid email or password."
6. Sign in with Account R. Expected: "This account is not active. Contact the Resilient Habitat
   Lab."
7. Sign in with Account A. Expected: the button shows "Checking...", then you land on
   `layer2_energy_selection.html`. Report how long it took.
8. Open `index.html`, `comparison.html` and `documentation.html`. Expected: no login prompt, and
   each page footer shows "Sign out" (on `comparison.html` the footer may be missing when no
   neighbourhood is selected; report it but it is not a failure). Then open `3dviewer.html`.
   Expected: no login prompt and the 3D model loads.
9. Click "Sign out" on `index.html`. Expected: back on `login.html`; opening `index.html` again
   redirects to login.
10. Sign in again as Account A. Expected: success.
11. Act as a second browser: open a new incognito or private window if your tool can; if it
    cannot, sign out, then on the NEXA-web site run `localStorage.clear()` in the page console
    (this deletes the browser's device ID, as a new browser would have none) and reload. Sign in
    as Account A. Expected: "This account is already registered to a different browser. Reply
    to your invitation email to have it reset." Say which of the two methods you used.
12. Sign out if signed in, then open
    `https://carolinehvermette.github.io/NEXA-Web/login.html?next=https://example.com` and sign
    in as Account A. Expected after step 11's `localStorage.clear()`: the "already registered"
    message again, which is fine; report it. If you used incognito in step 11, expected: you
    land on a NEXA-web page, never on example.com. Either way, report the final URL. Sign out.
13. Resize the browser to about 375 px wide (phone width) and repeat step 2. Report anything cut
    off or overlapping.

Report: a numbered list matching the steps, each line "PASS", "FAIL" or "NOT RUN", the observed
result in one sentence, and the URL where it ended. Then list any visual or wording problems you
noticed, with the page name and screen width. Finally list every method you used that was not
the browser.
