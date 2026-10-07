# Prompt: Gemini live test of NEXA-web access

Two prompts. Prompt 1 (Tools page) runs now: the NEXA-web request button is live on
rhlab.encs since 2026-10-07. Prompt 2 (sign-in gate) runs only after the gate is pushed to the
live NEXA-web site (s11); until then the live site has no login. Paste one prompt at a time into
Gemini in Chrome (with page access). Prompt 1 sends one real email to the lab inbox; Koral checks
that it arrived.

---

## Prompt 1: Tools page request (run now, nothing to fill in)

You are testing the access request form of a research website on its live server. Act as a
careful QA tester. Do every step in order, in this browser, and report exactly what you see. Do
not guess: if a step cannot be done, say so and why. Do not send any form except the one in
step 6, and send it only once. Do not change anything else on the site.

Page under test: `https://rhlab.encs.concordia.ca/tools.html`

1. Open the page and expand the section "NEXA-web: Neighbourhood Energy Planning &
   Decision-Support Platform". Expected: the heading reads "NEXA-web", not "LMN-web". At the end
   of the section there are two buttons, "Request NEXA-web Access" and "Open NEXA-web", and a
   short note under them that NEXA-web requires an account.
2. Click "Open NEXA-web". Expected: a new tab opens on
   `https://carolinehvermette.github.io/NEXA-Web/` and the NEXA-web home page loads. Report the
   URL. Close that tab and return to the Tools page.
3. Click "Request NEXA-web Access". Expected: a dialog titled "Request NEXA-web Access" with an
   "Your Email" field marked required, a "Message" box prefilled with two lines ("I am: [Your
   Name / Role]" and "I want to use NEXA-web for: [Your Project / Purpose]"), and a "Send
   Request" button. The URDM dialog ("Request URDM Tool Access") must not be the one shown.
4. Click the dark area outside the dialog. Expected: it closes. Open it again, then close it with
   the "×" button, then open it again.
5. Click "Send Request" with the email field empty. Expected: the browser blocks it and asks for
   an email; nothing is sent. Then type `not-an-email` and click again. Expected: blocked again.
6. Enter `nexa-gemini-test@example.org`, replace the whole message with
   "TEST - NEXA-web Gemini live test, please ignore", and click "Send Request" once. Expected: the
   button briefly shows "Sending...", then an alert "Thank you! Your request has been sent.",
   then the dialog closes and the form is cleared. Report the exact alert text.
7. Scroll to the URDM section ("URDM: Urban Resilience Decision Model"), expand it, click
   "Request / Download URDM Tool". Expected: its own dialog opens, titled "Request URDM Tool
   Access". Close it without sending.
8. Make the window narrow (about 375 px, phone width) or use device emulation. Repeat steps 1 and
   3 there. Report anything cut off, overlapping, or hard to read, then close the dialog.

Report: a numbered list matching the steps, each line "PASS" or "FAIL" and the observed result
in one sentence. Then list any visual or wording problems you noticed, with the screen width.

---

## Prompt 2: NEXA-web sign-in gate (run after s11; fill the four placeholders)

Use throwaway test accounts only, never a real user's password.

You are testing the sign-in gate of a research website, NEXA-web, on its live server. Act as a
careful QA tester. Do every step in order, in this browser, and report exactly what you see. Do
not guess: if a step cannot be done, say so and why. Use only the email addresses and passwords
written in this prompt; do not try any other accounts or emails. Do not change anything on the
site or in any account beyond what a step asks.

Site under test: `https://carolinehvermette.github.io/NEXA-Web/`

Test accounts (added to the lab's user sheet for this test):
- Account A, Status active: `[EMAIL_A]` / `[PASSWORD_A]`
- Account R, Status revoked: `[EMAIL_R]` / `[PASSWORD_R]`

1. Open `https://carolinehvermette.github.io/NEXA-Web/layer2_energy_selection.html`. Expected:
   redirected to `login.html` with `next=layer2_energy_selection.html`. Report the final URL.
2. On the login page check: NEXA title, an "Intended use" note (pre-feasibility, not detailed
   design), Email and Password fields, a "Sign in" button, and a link to the RHlab Tools page.
   Click that link. Expected: it opens the RHlab Tools page. Go back.
3. Click "Sign in" with both fields empty. Expected: "Enter both your email and your password."
4. Sign in with `[EMAIL_A]` and a wrong password. Expected: "Invalid email or password."
5. Sign in with `[EMAIL_R]` / `[PASSWORD_R]`. Expected: "This account is not active..."
6. Sign in with `[EMAIL_A]` / `[PASSWORD_A]`. Expected: the button shows "Checking...", then you
   land on `layer2_energy_selection.html`. Report how long it took.
7. Visit `index.html` and `documentation.html`. Expected: no login prompt, and each footer shows
   "Sign out". Then open `3dviewer.html`. Expected: no login prompt and the 3D model loads (this
   page has no footer).
8. Click "Sign out" (on `index.html`). Expected: back on `login.html`; opening `index.html` again
   redirects to login.
9. Sign in again as Account A in this same browser. Expected: success.
10. Open a private/incognito window and sign in as Account A. Expected: "This account is already
    registered to a different browser..." Close the private window.
11. In the first window sign out, then open
    `https://carolinehvermette.github.io/NEXA-Web/login.html?next=https://example.com` and sign
    in as Account A. Expected: you land on a NEXA-web page, never on example.com.
12. Repeat step 2 at a narrow phone width (about 375 px). Report anything cut off or overlapping.

Report: a numbered list matching the steps, each line "PASS" or "FAIL", the observed result in
one sentence, and the URL where it ended. Then list any visual or wording problems you noticed,
with the page name and screen width.
