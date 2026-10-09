# NEXA-web Access System (Email and Password Gate)

Created 2026-10-01. Living plan: the checklist below is the state, the Progress Log (section 9)
is the history.

## 1. Goal

Restrict the live NEXA-web site (`https://carolinehvermette.github.io/NEXA-Web/`, served from
`CarolineHVermette/NEXA-Web`, this repo) to approved users. Access is requested from the RHlab
Tools page (`https://rhlab.encs.concordia.ca/tools.html`, NEXA-web section), approved by the lab,
and granted as an email and password, the same way Ahmed's URDM tool works.

## 2. Checklist

| # | Step | Status |
|---|------|--------|
| s01 | Dr. Hachem-Vermette approves building the system (email in `Emails/`) | Done (2026-10-06) |
| s02 | Decision D-1: protection level (gate only, or gate plus encrypted data) | Done: Level A |
| s03 | Access to the lab Google account (`Resilienthabitatlab@gmail.com`) confirmed | Done: Koral's account used instead |
| s04 | Google Sheet "NEXA-web User Verification" created in the RHlab Drive | Done (2026-10-06) |
| s05 | Apps Script written, deployed as web app, URL recorded | Done (2026-10-06) |
| s06 | `login.html` and `js/auth.js` built (includes the intended-use disclaimer) | Done (2026-10-06, local) |
| s07 | Gate wired into all 15 pages, cache stamp bumped | Done (2026-10-06, local) |
| s08 | Encrypted data (only if D-1 = gate plus encryption) | Skipped (D-1 = Level A) |
| s09 | RHlab Tools page: NEXA-web "Request access" button, modal, open link | Done (2026-10-07, live) |
| s10 | End-to-end tests (section 7) pass | Done (2026-10-07) |
| s11 | Launch: first accounts added, pushed to `CarolineHVermette/NEXA-Web` | Done (2026-10-07) |
| s12 | Admin runbook and invitation template handed to the lab | TODO |

## 3. Reference: how URDM does it (Ahmed)

Source: `resources/activation.py.txt`, `resources/Linking a sheet with google scripts to limit who uses a tool.pptx`.

- Google Sheet "UDMT User Verification" in the RHlab Drive, columns A Email, B Password, C HWID.
  The lab adds a row per approved user; HWID starts empty.
- Google Apps Script bound to the sheet, one `doPost(e)` deployed as a web app. It receives
  `{email, password, hwid}` as JSON and answers `{status: "success"}` or
  `{status: "error", message}`.
- Logic: email not found = error; wrong password = error; HWID empty = write it and allow (binds
  the first PC); HWID matches = allow; HWID differs = "already registered to a different computer".
- Client: PyQt dialog in `activation.py` posts the credentials plus the Windows `MachineGuid`.
- Request flow: Tools page modal (email plus message) posts to Web3Forms
  (`api.web3forms.com/submit`, subject "URDM Tool Access Request"), which emails
  `Resilienthabitatlab@gmail.com`. The lab adds the user to the sheet and sends a prepared draft
  email with the download link and the credentials.

## 4. Design for NEXA-web

The URDM design carries over almost unchanged. Differences come from NEXA-web being a static
website, not a desktop application.

### 4.1 Request (RHlab Tools page)

Add to the NEXA-web section of `tools.html` the same modal as URDM: email (required), message
prefilled "I am: [Name / Role]. I want to use NEXA-web for: [Project / Purpose]", button "Send
Request". Same Web3Forms key, subject "NEXA-web Access Request", so requests land in the same lab
inbox. Add an "Open NEXA-web" link to the live site next to it. This edits the RHlab site, not
this repo.

### 4.2 User list (Google Sheet)

A separate spreadsheet "NEXA-web User Verification" in the RHlab Drive, owned by the lab account,
so URDM and NEXA-web users stay independent. Columns:

| A Email | B Password | C DeviceID | D Status | E LastLogin | F Notes |

- A to C mirror URDM (DeviceID replaces HWID, see 4.4).
- D Status: `active` or `revoked`, so access can be withdrawn without deleting the row.
- E LastLogin: written by the script, gives simple usage tracking.
- Sheet stays private to the lab account. Passwords are plain text as in URDM; acceptable for a
  private lab sheet, can move to hashes later without changing the site.

### 4.3 Verification (Apps Script)

Copy of Ahmed's `doPost` with three changes: read `deviceId` instead of `hwid`, reject rows whose
Status is not `active`, write LastLogin on success. Deployment: Execute as "Me" (lab account), Who
has access "Anyone". The deployed `/exec` URL goes into `js/auth.js`.

Browser call: `fetch(URL, {method: "POST", headers: {"Content-Type": "text/plain;charset=utf-8"},
body: JSON.stringify({...})})`. Plain text avoids the CORS preflight that Apps Script cannot
answer; the script still reads `e.postData.contents` as JSON.

### 4.4 Device binding (browser equivalent of HWID)

A browser cannot read the machine ID. On first visit `auth.js` creates a random ID
(`crypto.randomUUID()`) and keeps it in `localStorage`. It is sent as `deviceId` and bound on
first login exactly like the HWID. Consequence: a different browser, a private window, or
clearing site data counts as a new device. The admin fixes it by clearing cell C (same as a PC
change for URDM). The runbook says this.

### 4.5 Gate on the site

- New page `login.html`: NEXA-web title, short description, the intended-use disclaimer
  (early-stage pre-feasibility, not detailed design; same wording as the Tools page), email and
  password fields, link to the Tools page to request access. Dr. Hachem-Vermette asked for the
  disclaimer to appear when the user opens the tool; this is where it appears.
- New file `js/auth.js`, loaded first in the `<head>` of every page (15 pages). If no valid
  session is stored it redirects to `login.html?next=<current page>`. After a successful login it
  stores a session (email, expiry, 7 days) and returns to `next`.
- A "Sign out" link in the sidebar clears the session.
- One switch at the top of `auth.js` (`AUTH_ENABLED`) turns the gate off for rollback.
- When opened from disk (`file:` protocol, e.g. the archive on the DrCHV_Docs drive) the gate is
  skipped, so the offline copy keeps working without internet.
- No vendoring needed: Web Crypto and `fetch` are built into the browser. The Apps Script URL is
  a runtime API call, not a CDN asset; noted here as the one allowed external call.
- Cache stamp: all css/js references bump from `?v=35` to the next N in the same commit.

### 4.6 Protection level (decision D-1)

The repo `CarolineHVermette/NEXA-Web` is private (checked 2026-10-01: 404 to outsiders), but the
GitHub Pages site it serves is public. A login page alone stops normal visitors, yet every file
behind it stays downloadable by direct URL: checked 2026-10-01,
`https://carolinehvermette.github.io/NEXA-Web/js/data.js` returns 200 (1.8 MB, all simulated
results) with no login.

- **Level A, gate only.** Sections 4.1 to 4.5. Matches what URDM gives in practice, about a day
  of work, no change to how the site is built or published.
- **Level B, gate plus encrypted data.** `data.js` is published only in encrypted form (AES-GCM,
  Web Crypto). The Apps Script returns the decryption key with `success`; `auth.js` keeps it for
  the session and decrypts in the browser. Requires an encryption step at publish time (the site
  currently has no build step). Because the repo is already private, its git history does not
  expose the plain data; only the published files need to be encrypted.

**Decided 2026-10-01 (Koral): Level A.** The published site stays public; the front page gates
entry, and access requests go through the RHlab Tools page so Dr. Hachem-Vermette and the team
can see who is asking to use the website and why. The purpose is visibility of demand, not
protection of the data. Level B stays documented above in case that changes.

## 5. Files

This repo (NEXA-web):
- New: `login.html`, `js/auth.js` (plus login styles in an existing css file).
- Edited: the `<head>` of all 15 pages (one script tag), `js/sidebar.js` (Sign out), cache stamp.
- Level B only: encrypted `data.js` and the publish-time encryption script (needs approval, it is
  a build step).

Outside this repo:
- RHlab Drive: the sheet and its Apps Script (lab account).
- RHlab site: `tools.html` NEXA-web section (request modal, open link).

## 6. Preconditions

- P-1: written approval from Dr. Hachem-Vermette (she asked to wait for the NRC meeting).
- P-2: login access to `Resilienthabitatlab@gmail.com` (Ahmed shared it with the professor), or
  the professor creates the sheet and script and shares edit access.
- P-3: push access to `CarolineHVermette/NEXA-Web` (exists, remote `lmn-web`).
- P-4: edit access to the RHlab site source (Koral already maintains the Tools page).

## 7. Tests (s10)

Run against a local server and then the live site:
1. Valid email and password: lands on the requested page; DeviceID written to the sheet.
2. Wrong password, unknown email, revoked user: correct error message, no access.
3. Same account from a second browser: "already registered to a different device".
4. Admin clears cell C: second browser can now log in.
5. Every one of the 15 pages redirects to login when signed out; deep link returns to it after
   login.
6. Sign out works; expired session redirects.
7. `file:` copy opens without login.
8. Tools page request form delivers "NEXA-web Access Request" to the lab inbox.
9. Level B only: `data.js` in the repo is unreadable; charts render after login.

## 8. Admin runbook (draft, finalised in s12)

1. A request email "NEXA-web Access Request" arrives in the lab inbox.
2. If approved: open the sheet "NEXA-web User Verification" (Drive folder "NEXA-web", owner
   `orcunkoraliseri@gmail.com`) and add a row: Email, a password, DeviceID empty, Status `active`.
   Leave LastLogin empty; the script fills it.
3. Send the invitation draft:

   > Subject: Your access to NEXA-web
   >
   > Dear [Name],
   >
   > Thank you for your interest in NEXA-web. You can now access the platform at
   > https://carolinehvermette.github.io/NEXA-Web/ with:
   > Email: [email]
   > Password: [password]
   >
   > Your account is linked to the first browser you sign in with. If you need to change
   > computer or browser, reply to this email and we will reset it.
   >
   > NEXA-web is intended for early-stage pre-feasibility exploration, not detailed design.
   >
   > Kind regards,
   > Resilient Habitat Lab, Concordia University

4. Device change: clear the user's DeviceID cell. Withdraw access: set Status to `revoked`
   (any value other than `active` blocks sign-in).
5. A private window, another browser, or cleared site data counts as a new device, so most
   "already registered" replies are fixed by step 4.
6. Changing `Code.gs`: push it to the script, then update the existing deployment to a new
   version (never a new deployment), so the `/exec` URL in `js/auth.js` stays valid.

## 9. Progress Log

- 2026-10-01: Plan created from Ahmed's URDM materials (`resources/`), his emails, and the live
  Tools page (request modal posts to Web3Forms). Approval email drafted in `Emails/`, session
  prompt in `Prompt/`. Nothing built yet; waiting on s01.
- 2026-10-01: Repo `CarolineHVermette/NEXA-Web` confirmed private; Pages site public. D-1
  decided by Koral: Level A (public site, front login page, requests via the Tools page for
  visibility of who asks). s08 skipped; encryption question removed from the approval email.
- 2026-10-01: Approval email sent to Dr. Hachem-Vermette by Koral. s01 waiting for her reply.
- 2026-10-06: Pre-execution review of the plan. Verified: 15 pages, all on `?v=35`; css loads in
  `<head>`, scripts at end of `<body>`, so `auth.js` must go in `<head>` before the stylesheet to
  avoid a flash of the page before redirect. Findings, none blocking:
  1. s01 still TODO here; record Dr. Hachem-Vermette's reply before s03.
  2. Git: `origin` has two push URLs, one is `CarolineHVermette/NEXA-Web`. A plain
     `git push origin` publishes to the live site, so s11 must be the first push after gate work.
  3. Working tree has unrelated uncommitted edits (`js/app.js`, `config.js`, `data.js`); keep them
     out of the gate commits.
  4. Level A gate is client-side: a session can be forged in `localStorage`. Accepted (purpose is
     visibility, D-1). For the same reason device binding gives little protection on the web but
     adds admin resets (new browser, private window, cleared data). It was promised in the
     approval email, so keep it unless the professor agrees to drop it.
  5. Apps Script: use `LockService` around the DeviceID/LastLogin write, compare emails trimmed
     and lowercased, return JSON via `ContentService` (fetch follows the 302 to
     googleusercontent, which allows CORS reads).
  6. Live Tools page still labels the section "LMN-web"; s09 should rename it to NEXA-web.
  7. Test 1 to 6 on `localhost` (gate active), test 7 on `file:`.
- 2026-10-06: Koral confirmed Dr. Hachem-Vermette approved the build. s01 Done. Next: s03 (lab
  account access, P-2).
- 2026-10-06: s05 code, s06 and s07 built locally, not committed. Built ahead of s03/s04 because
  none of it needs the lab account; the gate stays off until `AUTH_URL` in `js/auth.js` holds the
  `/exec` URL, so the site behaves as before.
  - `apps_script/Code.gs`: Ahmed's `doPost` plus `deviceId`, Status `active` check, LastLogin,
    `LockService`, first sheet by index (not the active one).
  - `js/auth.js`: loaded before the stylesheet in all 15 pages and `login.html`; skips on `file:`,
    `AUTH_ENABLED = false` or empty `AUTH_URL`; `next` accepts only `*.html` pages of the site;
    reports blocked site data instead of looping.
  - Deviation from 4.5: "Sign out" is added by `auth.js` to the page footer, not `js/sidebar.js`
    (the sidebar exists on 10 pages, a footer on 14). `3dviewer.html` has no footer, so no link
    there.
  - `login.html`: disclaimer uses the Tools page wording; request link points to `tools.html`
    without an anchor so the s09 rename cannot break it. Login styles appended to
    `css/styles.css`. Cache stamp `?v=35` to `?v=36` on all pages.
  - Checked: `node --check` on the three scripts. Not checked: anything in a browser.
- 2026-10-06: Ahmed's email ("Limiting usage of a tool") re-read with its two attachments, which are
  identical to the copies in `resources/`. It explains the mechanism only; it does not say which
  Google account holds the sheet or who has its login. The pptx screenshots show the Apps Script
  project "UDMT User Verification" owned by "Me", account avatar "R", shared: consistent with
  `Resilienthabitatlab@gmail.com`, not proof. s03 stays open; per P-2 the login was shared with
  Dr. Hachem-Vermette. Koral's personal Gmail has no Ahmed or URDM emails.
  Caution: the pptx screenshot shows a real URDM row (email, password, HWID). The
  `passwordSystem/` folder is untracked; do not commit `resources/` to either remote.
- 2026-10-06: Ahmed's email "URDM Tool" (to Dr. Hachem-Vermette and Koral) confirms P-2: the lab
  Gmail `Resilienthabitatlab@gmail.com` receives the Tools page requests, and Ahmed shared its
  login with Dr. Hachem-Vermette. He also keeps the invitation as a Gmail draft in that account.
  s03: ask Dr. Hachem-Vermette for the login (draft in `Emails/email_lab_account_access.md`).
- 2026-10-06: Correction from Koral: Dr. Hachem-Vermette does not have the lab Gmail login; Ahmed
  created the account and holds it. Koral will sign in. Draft in `Emails/` re-addressed to Ahmed.
- 2026-10-06: Ahmed's email "Urban Resilience Decision-making Tool": the URDM sheet lives in the
  RHlab Drive and its link was shared with Dr. Hachem-Vermette and Koral (each also added as a
  URDM user). No lab Gmail login was shared. Workaround for s03: if Koral has edit access to the
  RHlab Drive folder, create the NEXA-web sheet there under Koral's Google account and deploy the
  script as Koral; transfer ownership to the lab account later (redeploy after transfer; if the
  `/exec` URL changes, update `AUTH_URL`). Credentials in that email are not copied here.
- 2026-10-06: Candidate folders checked with the Drive connector: "RHLab-website" and "NEXA-web",
  both owned by Koral (`orcunkoraliseri@gmail.com`) inside Dr. Hachem-Vermette's "NU Full Work".
  Both are shared "anyone with the link: editor", which files inside inherit, so the user sheet
  must not go there. Decision proposed: create the sheet in Koral's My Drive (private) and share
  it by name with Dr. Hachem-Vermette and Ahmed only.
- 2026-10-06: Koral decided to use the shared folders (Dr. Hachem-Vermette's area, lab members
  only); final location is her call. Fact for that decision: the folder setting is "anyone with
  the link", not named lab members. s04 goes ahead in the "NEXA-web" folder.
- 2026-10-06: s04 Done. Sheet "NEXA-web User Verification" created with the Drive connector in the
  "NEXA-web" folder, owner Koral, header row A1:F1 only (no user rows; Koral adds the test row so
  no password passes through chat). Sheet URL not recorded here by rule.
- 2026-10-06: s05 deployed with clasp 3.4.1 (Koral logged in as `orcunkoraliseri@gmail.com`,
  Apps Script API turned on). Script bound to the s04 sheet, `Code.gs` pushed, manifest
  `webapp: USER_DEPLOYING / ANYONE_ANONYMOUS`, deployment "NEXA-web gate v1" (@1). clasp project
  kept outside the repo (session scratchpad). Mishap: the first `create-script --type sheets`
  made a second empty sheet in My Drive root; it was trashed (recoverable from Bin). Probe of
  `/exec` returns Google's sign-in page until the owner authorizes the script once.
- 2026-10-06: s05 Done. Koral authorized the script (editor run, 15:50). Probe from curl returns
  the script's JSON ("no NEXA-web access yet" for an unknown email); `/exec` and the
  googleusercontent redirect both send `Access-Control-Allow-Origin: *`. `/exec` URL written to
  `AUTH_URL` in `js/auth.js`, so the gate is now active on `localhost` and, once pushed, live.
- 2026-10-06: s10 part 1, headless Chrome (puppeteer-core, scratchpad, not in repo) against
  `http://localhost:8080` and the live script: 24/24 pass. Covered: test 5 (all 15 pages and `/`
  redirect with `next` kept, query and hash included), login page content, empty form, test 2
  unknown email (live script reply), no session after a failed login, `next` rejects other
  sites, expired session redirects, test 7 (`file:` opens without login), no page script errors.
  Still open: tests 1, 2 (wrong password, revoked), 3, 4, 6 (sign out) need test rows in the
  sheet; test 8 needs s09. Gemini browser-test prompt: `Prompt/PROMPT_gemini_test.md`.
- 2026-10-06: s10 part 2, account tests (headless Chrome, two browser contexts, live script):
  12/13 pass. Pass: T2 wrong password and revoked; T1 valid login lands on `next` (about 1.9 s),
  DeviceID and LastLogin written; signed-in pages open with "Sign out"; T6 sign out and redirect
  after it; same browser signs in again; T3 second browser refused; T4 second browser signs in
  after DeviceID cleared. The one fail is not a gate bug: `comparison.html` opened with no
  selections replaces its whole `<main>` (footer included) with a notice, so no Sign out there in
  that state. Test rows `test-a@nexa.test` (active, DeviceID left empty) and `test-r@nexa.test`
  (revoked) added via a temporary token-protected `doGet` helper (`Seed.gs`, deployment @2, not in
  the repo). Cleanup pending: delete both rows, remove `Seed.gs`, redeploy.
- 2026-10-06: s09 check: `Desktop/RHLab_website` (origin `Ahmed-Nouby-Hassan/RHlabWebsite`) is
  behind the live Tools page: live has the URDM request modal (38 KB), repo `main` does not
  (33 KB). Editing the repo copy and publishing would drop Ahmed's modal. Need the live source.
- 2026-10-06: GitHub `Ahmed-Nouby-Hassan/RHlabWebsite` has one branch, `main` at 6053cb3
  (2026-08-14), identical to `Desktop/RHLab_website` (clean). The live site is newer: `tools.html`,
  `assets/css/styles.css` and `assets/js/main.js` all differ from GitHub. No local copy of the live
  version was found. The live site was published from a copy that never reached GitHub.
- 2026-10-06: Koral will not touch Ahmed's copy. Note to Ahmed drafted
  (`Emails/email_to_Ahmed_github.md`): thanks for the password system, asks him to push the live
  version to GitHub. s09 waits for his reply. `Emails/email_lab_account_access.md` is obsolete
  (lab Gmail no longer needed).
- 2026-10-06: Gemini run of `Prompt/PROMPT_gemini_test.md` (placeholders left unfilled) on
  `localhost:8080`: steps 1 to 4 pass, step 12 `next` guard verified, no layout issues at 1280 and
  375 px; steps 5 to 11 not run (no test accounts given). Those steps are covered by the s10
  part 2 run above. Side note: Gemini read Claude's paste-cache, which holds Ahmed's email with
  URDM logins, and probed the script with real lab emails (wrong password, no effect).
- 2026-10-06: Koral sent the GitHub note to Ahmed. s09 waits for his reply.
- 2026-10-07: Ahmed pushed the live site to GitHub (`main` at 5c312f2). `Desktop/RHLab_website`
  fast-forwarded (was clean); `tools.html`, `assets/css/styles.css`, `assets/js/main.js` now
  match the live site byte for byte.
- 2026-10-07: s09 built in `Desktop/RHLab_website/tools.html` only (uncommitted, not pushed):
  "Request NEXA-web Access" button and "Open NEXA-web" link at the end of the LMN chapter, a
  separate `nexa-modal` (email, message "I am: ... / I want to use NEXA-web for: ...", "Send
  Request") and its own inline script posting to Web3Forms with the same key and subject
  "NEXA-web Access Request". Ahmed's `main.js` and URDM modal untouched. Section `h2` and logo
  alt renamed LMN-web to NEXA-web; section id `lmn-web` kept so anchors still work; LMN
  framework wording left as is. Headless check (Chrome, 1280 and 375 px, Web3Forms mocked): modal
  opens without the URDM one, posts the NEXA subject, closes after success, no JS errors. Test 8
  (real request reaching the lab inbox) not run: it emails the lab, needs Koral's go, and is best
  done on the live page after the push.
- 2026-10-07: With Koral's go, s09 committed (`e031c6f`, `tools.html` only) and pushed to
  `Ahmed-Nouby-Hassan/RHlabWebsite` `main` as a fast-forward on Ahmed's `5c312f2` (remote
  re-fetched first, nothing new). The live RHlab site does not deploy from GitHub: it still lacks
  the button, so Ahmed must upload it. Live test prompt for Gemini:
  `Prompt/PROMPT_gemini_live_test.md` (Part A Tools page incl. test 8, Part B gate); it needs
  Ahmed's deploy and the s11 push first.
- 2026-10-07: Correction to the entry above: the live RHlab site is ours and deploys by `scp`
  through `speed` (ssh host `speed.encs.concordia.ca`) to the ENCS webroots (see
  `RHLab_website/communication/2026-07-14_email-ahmed-corrected-paths.md`); Ahmed's GitHub repo
  is a backup. Before upload, main webroot `/groups/r/rhlab/www/tools.html` matched `5c312f2`;
  users.encs `/www/groups/r/rhlab/tools.html` is an older copy and was not touched. With Koral's
  go, `e031c6f:tools.html` uploaded to the main webroot only; md5 matches on the server and as
  served by `https://rhlab.encs.concordia.ca/tools.html`. Previous server copy kept in the
  session scratchpad. s09 Done.
- 2026-10-07: Test 8 on the live Tools page: one request sent (email
  `nexa-live-test@example.org`, message starting "TEST - NEXA-web live test"). Web3Forms answered
  200 `success: true` with subject "NEXA-web Access Request"; alert and modal close as expected.
  Headless Chrome fails with "Failed to fetch" (Web3Forms blocks it), headed Chrome works, so use
  a visible browser for this test. Arrival in the lab inbox still to be confirmed by Koral.
- 2026-10-07: Koral sent a real request from the live Tools page with a personal side address.
  Arrival of the three requests (Claude's headed test, Gemini/Koral's) in the lab inbox not yet
  confirmed: the connected Gmail is not the lab account. Koral asked Ahmed for the
  `Resilienthabitatlab@gmail.com` login (Ahmed holds it). Paused until he replies.
- 2026-10-07: Koral signed in to the lab Gmail and shared an inbox screenshot: the three
  "NEXA-web Access Request" notifications are there. Test 8 passes, s10 Done (the one remaining
  fail, `comparison.html` footer with nothing selected, is not a gate bug). Koral pasted the lab
  login in chat; it is not stored anywhere in the repo.
- 2026-10-07: Opened one request (Koral's, 9:47 AM): all form fields arrive (email, "I am",
  "I want to use NEXA-web for"), Reply-To is the requester, so the lab can answer with Reply.
- 2026-10-07: s11 cleanup and push. Test rows deleted through the helper (sheet back to header
  only), `Seed.gs` removed, script pushed and the same deployment updated to @3 ("test helper
  removed"); `/exec` URL unchanged, `doGet` now absent, `doPost` still answers. Commit `935c837`
  (15 pages, `css/styles.css`, `js/auth.js`, `login.html`, `?v=36`) pushed to both remotes;
  unrelated `js/app.js`, `js/config.js`, `js/data.js` edits and this docs folder left uncommitted.
  GitHub Pages had not rebuilt at push time (`login.html` 404): check the live gate next. No real
  users in the sheet yet.
- 2026-10-07: First real account: Koral added a row for `orcunkoraliseri@gmail.com` by hand and
  signed in on the live site. Live gate confirmed working.
- 2026-10-07: Session shortened from 30 to 7 days at Koral's request (`SESSION_DAYS = 7`,
  `?v=37`), commit `c9c62a8` pushed to both remotes. Existing sessions keep their stored expiry.
- 2026-10-07: s12 part 1. Admin guidance written into the Handover and Maintenance Guide as
  section 14.7 "Site access gate" (seventh addendum in Appendix D), source `.md` in
  `DONE-documentation-revisions/Submission/`, `.html` and `.docx` rebuilt with `tools/build.sh`,
  `.docx` copied to `docs_methodology/HandoverDocument/`. Still open: share the sheet with the
  approver (or transfer it) and tell the lab.
- 2026-10-07: Guide checked page by page (Word export, 69 pages, rendered and reviewed). Text diff
  against the previous build: additions only. New section 14.7 (pages 48-49) and the seventh
  addendum row (page 61) render clean after the invitation block was split into paragraphs (it
  had stretched justified lines). Older layout issues seen, not touched (not this task): stretched
  justified lines on pages 2, 20, 22, 50; narrow table columns breaking words on 14-17, 26, 28,
  53; rows split across pages on 33, 55-56, 58; inline list on 57; header offset on 67.
- 2026-10-07: Gemini live gate test prompt written, `Prompt/PROMPT_gemini_live_gate_test.md`
  (needs two throwaway sheet rows that Koral adds and deletes; passwords stay out of Claude).
- 2026-10-07: Partial gate test by another agent (no browser). Steps 1-3 and 12 judged PASS from
  reading `auth.js`/`login.html`, not live clicks; step 4 PASS live (`nobody@nexa.test` got the
  "no NEXA-web access yet" reply from `/exec`). Steps 5-11 and 13 not run: the throwaway rows
  `gate-test-a`/`gate-test-r` were not in the sheet yet. Still to run in Chrome with Gemini.
- 2026-10-07: Gemini live gate test, run with Playwright (headless Chromium). Steps 1-5, 7-13
  PASS, step 6 (revoked) NOT RUN. Caveats: Gemini used Koral's real account instead of the
  throwaway rows, and set Koral's device ID in the test browser's storage to sign in, so the
  real password went into its command log and the chat (Koral chose to keep it). The
  3D viewer note "RC-I1.glb not found" comes from a model code Gemini made up, not the gate.
- 2026-10-07: Completion email sent to Dr. Hachem-Vermette, Cc Ahmed, with the Handover Guide
  attached. s12 waits on their answer: share the sheet or transfer it to the lab account.
- 2026-10-07: Docs pushed to both remotes (`25b7e8a`). `resources/` kept out of git: Ahmed's
  `activation.py.txt` contains URDM's live `/exec` URL.
- 2026-10-09: Shared reviewer link added at Dr. Hachem-Vermette's request (one link for all
  reviewers, count unknown). `?key=<key>` on any page signs in through sheet row
  `reviewer-link | <key> | * | active`; DeviceID `*` skips browser binding (Code.gs). Revoke by
  setting Status to inactive or changing the key. Anyone the link is forwarded to gets in.
