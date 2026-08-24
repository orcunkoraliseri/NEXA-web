# Vendored fonts

Inter and Outfit, served from this repository instead of from Google.

| | |
|---|---|
| Source | `https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap`, requested with a current Chrome user agent so the modern `woff2` files are returned, then each file downloaded from `fonts.gstatic.com` byte for byte |
| Taken on | 2026-08-24 |
| Licence | SIL Open Font License 1.1, both faces. Redistribution is allowed, including inside a repository like this one |
| Files | Four. Each face is a **variable** font covering weights 100 to 900 in one file, which is why there is no file per weight |
| Subsets | `latin` and `latin-ext` only. Together they carry English and French, including `œ`, the accented vowels and the currency signs. Cyrillic, Greek and Vietnamese were not taken |
| Total size | About 180 KB |

## Why they are here at all

`css/styles.css` used to carry a single `@import` of `fonts.googleapis.com`, and
it sat at line 3258, well after the first rule in the file. **CSS ignores an
`@import` that follows a rule**, so the browser discarded it and neither face
ever loaded. Every page had been rendering in the `sans-serif` fallback named at
the end of `--font-primary`.

That left two problems in one line: the fonts did not load, and the site called
an external host on every page view. Moving the `@import` to the top would have
fixed the first and kept the second. Vendoring fixes both, and it is the same
decision already taken for `model-viewer`. **DBG-048, 2026-08-24.**

## What updating involves

The version is pinned and it is ours to move. Nothing fetches a newer one. To
update, repeat the request above, download the four `latin` and `latin-ext`
files, replace them here, and leave `css/styles.css` alone — the `@font-face`
blocks name the files, not the version.

## What to watch

The site now calls **no external host at all**. If a future change reintroduces
one, it will be visible as a request to a domain that is not the Pages domain in
the browser's Network tab.
