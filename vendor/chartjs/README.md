# vendor/chartjs

`chart-4.4.3.umd.js` is Chart.js, version 4.4.3, the UMD build that defines the
global `Chart`. It is MIT, and the licence line is in the header at the top of
the file itself.

The copy is byte for byte the one taken on 2026-08-21 for the Comparison Mode
review copies, kept at
`docs_implementation/DONE/DONE_ComparisonMode/verify/vendor/chart.umd.js`.
Only `comparison.html` loads it.

It is vendored, not linked, for the same reason `model-viewer` and the two fonts
are: the site calls no external host. `comparison.html` had carried
`<script src="vendor/chartjs/chart.umd.js">` since Stage 10 against a file that
was never committed, so the request returned 404, `Chart` was never defined, and
both canvases stayed blank behind the library guard in `js/comparison.js`.
That is DBG-052, fixed 2026-09-09 by adding the file the tag had always named.

**The version is pinned and it is ours to move.** Nothing updates this file.
Replacing it means keeping the same name pattern, `chart-<version>.umd.js`, and
repointing the tag in `comparison.html` with its `?v=` stamp.
