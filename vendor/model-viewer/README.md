# vendor/model-viewer

`model-viewer-4.2.0.min.js` is Google's `<model-viewer>` web component, version
4.2.0, taken byte for byte from
`https://ajax.googleapis.com/ajax/libs/model-viewer/4.2.0/model-viewer.min.js`
on 2026-08-24. It is BSD-3-Clause, and the licence header is at the top of the
file itself.

It is vendored, not linked, so the site calls no external host. `3dviewer.html`
was the last page that did, DBG-044.

Two things a maintainer needs to know.

**The version is pinned and it is ours to move.** Nothing updates this file
automatically. Replacing it means downloading the new version from the same
place, keeping the same name pattern and repointing `3dviewer.html`.

**The bundle names `gstatic.com` internally**, for the Draco and Basis
transcoder decoders. Those requests only happen for a model that is Draco
compressed or carries KTX2 textures. **None of the 35 models in
`Content/Glb_Models/` is**, checked on 2026-08-24, so no request is made. A
future model that is compressed would reintroduce an external call, and the
decoders would then have to be vendored too.
