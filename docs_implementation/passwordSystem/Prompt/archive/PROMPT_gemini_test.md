# Prompt: Gemini test of the NEXA-web sign-in gate

Paste everything below the line into Gemini (Chrome, with page access). Fill the three
placeholders first. Use throwaway test accounts only, never a real user's password.

---

You are testing the sign-in gate of a research website, NEXA-web. Act as a careful QA tester.
Do every step in order, in this browser, and report exactly what you see. Do not guess: if a
step cannot be done, say so and why.

Site under test: `[SITE_URL]` (local copy: `http://localhost:8080/`; live:
`https://carolinehvermette.github.io/NEXA-Web/`).

Test accounts (added to the lab's user sheet for this test):
- Account A, Status active: `[EMAIL_A]` / `[PASSWORD_A]`
- Account R, Status revoked: `[EMAIL_R]` / `[PASSWORD_R]`

How the gate should behave:
- Every page sends a signed-out visitor to `login.html?next=<the page they asked for>`.
- `login.html` shows the NEXA title, an "Intended use" note (pre-feasibility, not detailed
  design), Email and Password fields, a "Sign in" button, and a link to the RHlab Tools page to
  request access.
- A correct login returns the visitor to the page in `next` and lasts 30 days in that browser.
- Each account is tied to the first browser that signs in with it.
- Pages with a footer show a "Sign out" link that ends the session.

Steps:
1. Open `[SITE_URL]layer2_energy_selection.html`. Expected: redirected to `login.html` with
   `next=layer2_energy_selection.html`. Report the final URL.
2. On the login page, check every element listed above is present and readable. Report anything
   missing, cut off, overlapping, or hard to read, at desktop width and at a narrow phone width.
3. Click "Sign in" with both fields empty. Expected: "Enter both your email and your password."
4. Sign in with `nobody@example.com` / `test`. Expected: a message that the email has no access
   yet and points to the RHlab Tools page. You stay on the login page.
5. Sign in with `[EMAIL_A]` and a wrong password. Expected: "Invalid email or password."
6. Sign in with `[EMAIL_R]` / `[PASSWORD_R]`. Expected: "This account is not active..."
7. Sign in with `[EMAIL_A]` / `[PASSWORD_A]`. Expected: the button shows "Checking...", then you
   land on `layer2_energy_selection.html`. Report how long it took.
8. Visit three other pages (`index.html`, `documentation.html`, `comparison.html`). Expected: no
   login prompt. Check the footer of each shows "Sign out".
9. Click "Sign out". Expected: back on `login.html`; opening `index.html` again redirects to
   login.
10. Sign in again as Account A in this same browser. Expected: success (same browser).
11. Open a private/incognito window and sign in as Account A. Expected: "This account is already
    registered to a different browser..." (a private window counts as a new browser).
12. Try to bypass the gate: open `[SITE_URL]login.html?next=https://example.com` and sign in as
    Account A in the first window. Expected: you land on a NEXA page, never on example.com.

Report format: a numbered list matching the steps, each line "PASS" or "FAIL", the observed
result in one sentence, and the URL where it ended. Then list any visual or wording problems you
noticed, with the page name. Do not change anything on the site or in any account.
