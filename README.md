# RASHADOOZ OS website

Static site (HTML, CSS, one small JS file). No build step.

## Publish on GitHub Pages
1. Create a repository, for example `rashadooz-os`.
2. Put these files at the root of the repository (or in a `docs/` folder).
3. Settings > Pages > Deploy from a branch > `main`, folder `/ (root)` or `/docs`.
4. Open `config.js` and replace `YOUR_GITHUB_USERNAME/rashadooz-os` with your real repository.

## The ISO
The download button points to `rashadooz.iso` at the root of the `main` branch (`isoUrl` in `config.js`).
To ship a new version, commit a new `rashadooz.iso` with the same name. GitHub blocks files over 100 MB; if the ISO grows past that, switch to Releases.

## Before publishing
- Add a LICENSE file to the repository (your choice of license).
- The ISO contains GRUB Legacy (GPL): link to GRUB's source from the release notes.
- Replace the sample `info` output in the hero with a real screenshot-based output if you like.
