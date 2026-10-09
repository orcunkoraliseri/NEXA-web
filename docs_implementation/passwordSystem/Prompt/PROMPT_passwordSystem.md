# Prompt: NEXA-web Access System Session

Living file. Paste its path as the first message of a new session opened in
`C:\Users\o_iseri\Desktop\NEXA-web`. Update the "Current state" section at the end of every session.

---

## Task

Build an email and password gate for the live NEXA-web site
(`https://carolinehvermette.github.io/NEXA-Web/`, repo `CarolineHVermette/NEXA-Web`, remote
`lmn-web`). Users request access from the RHlab Tools page
(`https://rhlab.encs.concordia.ca/tools.html`); the lab approves them in a Google Sheet checked by
a Google Apps Script, the same model as Ahmed's URDM tool.

## Read first

1. `docs_implementation/passwordSystem/implementation_plan.md`: the checklist at its top is the
   state; section 4 is the design, section 7 the tests.
2. Its Progress Log (section 9) for what happened last.
3. Reference material from Ahmed: `docs_implementation/passwordSystem/resources/`
   (`activation.py.txt` and the pptx with the Apps Script `doPost`).

## Progress page

Live tracker: https://claude.ai/artifact/Bycv5m6LW4dugk7DqMDtJK (open it in Chrome for Koral).
Steps are documents `steps/s01` to `steps/s12` in the artifact's database, fields `status`
(`todo`, `active`, `waiting`, `done`, `blocked`, `skipped`), `note`, `updatedAt` (ISO time).
Update them with the `ArtifactData` tool (`collection: "steps"`), never by republishing the page.
A step with no document shows as To do. Step numbers match the plan's checklist.

## Rules for this task

- Do not start building until s01 (Dr. Hachem-Vermette's approval) is Done in the checklist.
  Do not start Level B work until decision D-1 says so.
- Ask Koral before anything outward-facing or hard to undo: pushing to
  `CarolineHVermette/NEXA-Web`, deploying or redeploying the Apps Script, editing the live RHlab
  site, sending any email, adding real users to the sheet.
- Never put real passwords, the sheet URL, or account credentials in this repo or in chat.
  The Apps Script `/exec` URL is the only Google identifier that goes in `js/auth.js`.
- Simulated values and `data.js` content are never edited by this task (Level B encrypts the
  file, it does not change its values).
- Cache stamp: any css/js change bumps `?v=N` on every page in the same commit.
- No CDN assets. The Apps Script call is the one allowed external request.
- Keep the offline copy (`file:` protocol) working without login.
- Findings go in the plan's Progress Log; chat gets one line. After each completed step tick it
  in the checklist, add a Progress Log row, and update the tracker step.
- Email to Dr. Hachem-Vermette opens "Dear Dr. Hachem-Vermette".

## Current state (2026-10-09, reviewer link live and sent to CHV, waiting on her s12 answer)

- Done: s01-s11 (s08 skipped). Gate live on all pages (`935c837`), 7-day session (`c9c62a8`,
  `?v=37`), Apps Script deployment @3, same `/exec` URL. Test rows and `Seed.gs` removed. Koral's
  own account is the only real row in the sheet.
- Tests: s10 gate tests pass; test 8 confirmed (requests reach the lab Gmail, Reply-To works).
  Gemini live gate test 2026-10-07: 12 of 13 PASS, step 6 (revoked) not run, accepted as is.
  Gemini used Koral's real account; Koral chose to keep the password.
- Handover Guide: new section 14.7 (site access gate) and Appendix D addendum row; md in
  `docs_implementation/DONE/DONE-documentation-revisions/Submission/`, docx in
  `docs_methodology/HandoverDocument/` (pages 48-49), checked page by page.
- s12 active: completion email sent 2026-10-07 to Dr. Hachem-Vermette, Cc Ahmed, guide attached
  (`Emails/email_to_Dr_Hachem-Vermette_completion.md`). It asks whether to share the sheet with
  them or transfer it to the lab account, and whether Ahmed can add new users.
- Docs committed and pushed to both remotes: `25b7e8a` (guide md and docx, this folder except
  `resources/`). `resources/` stays local on purpose: `activation.py.txt` holds URDM's live
  `/exec` URL and the repos are public. Never commit it. Unrelated local edits, not this task:
  `js/app.js`, `js/config.js`, `js/data.js`, the Part2 plan, `Templates/1983-National/`.
- To edit the script again, `clasp clone` it from the sheet's script ID into a new scratch
  folder, then update the existing deployment (never a new one).
- 2026-10-08: CHV asked by email for the password and whether the link alone could open NEXA.
  Answer sent by Koral (`Emails/email_to_Dr_Hachem-Vermette_password.md`, password kept as
  `[PASSWORD]` in the file): link alone not possible, she has a personal login, one browser per
  account to limit and track usage, full explanation of the system to follow "tomorrow"
  (2026-10-09, not drafted yet). Koral added her row to the sheet (Status `active`, DeviceID
  empty, Notes "CHV entrance"). Checked against the live script without binding: her email is
  found (wrong password gives "Invalid email or password"). Correct password not tested on
  purpose, her first sign-in binds her browser and is the real test.
- 2026-10-09: CHV asked for link-only access for reviewers (count unknown), Koral chose one
  shared link. Built and pushed (`0784dab`, `?v=38`): `?key=<key>` on any page signs in through
  sheet row `reviewer-link | <key> | * | active`; DeviceID `*` skips browser binding (Code.gs,
  live as deployment @4). Tested: API success from two device IDs, Koral confirmed on two
  computers. Link sent to CHV (`Emails/archive/email_to_Dr_Hachem-Vermette_reviewer_link.md`,
  key kept as `[KEY]`). Revoke: set the row inactive or change its password. RHlab server copy
  not redeployed (scp). Email files now live in `Emails/archive/` (moves not committed yet).

## On return

1. Ask Koral whether CHV signed in. If she is locked out, Koral clears her DeviceID cell. Draft
   the promised full explanation email if Koral asks (plain language, she is not technical).
2. Ask Koral for CHV's answer to the completion email. Then Koral shares the sheet (edit rights) or transfers it to the
   lab account; the script travels with the sheet. Mark s12 Done in the checklist, the Progress
   Log and the tracker.
3. Commit new log or prompt changes only when Koral asks (`[docs]: ...`), never `resources/`.
4. Koral has the lab Gmail login; never put any login in chat or the repo.
