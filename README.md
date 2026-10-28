# RASHADOOZ OS website

Static site (HTML, CSS, one small JS file). No build step.

## Publish on GitHub Pages
1. Create a repository, for example `rashadooz-os`.
2. Put these files at the root of the repository (or in a `docs/` folder).
3. Settings > Pages > Deploy from a branch > `main`, folder `/ (root)` or `/docs`.
4. Open `config.js` and replace `YOUR_GITHUB_USERNAME/rashadooz-os` with your real repository.

## Publish the ISO
Do not commit the ISO into the repository. Use Releases:
1. Repository > Releases > Draft a new release, tag `v0.1.0`.
2. Attach `rashadooz.iso` (the file name must match `isoName` in `config.js`).
3. The download button points to `/releases/latest/download/rashadooz.iso`, so it always serves the newest release.

## Before publishing
- Add a LICENSE file to the repository (your choice of license).
- The ISO contains GRUB Legacy (GPL): link to GRUB's source from the release notes.
- Replace the sample `info` output in the hero with a real screenshot-based output if you like.
