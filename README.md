# Dunhill Dimaapi — Portfolio

Static HTML portfolio for Dunhill Dimaapi, positioned as a Senior Backend & Full-Stack Developer. The published site uses plain HTML, custom CSS, and minimal JavaScript so it can run directly on GitHub Pages without Astro or a Node.js build.

## Local preview

From the repository root, start any static web server. For example:

```sh
python3 -m http.server 4321
```

Then open `http://127.0.0.1:4321/`.

## Published files

- `index.html` — homepage, experience, capabilities, leadership, and contact
- `work/official-alumni/index.html` — Official Alumni case study
- `work/roadr/index.html` — Roadr case study
- `work/dcsc-malolos/index.html` — DCSC Malolos case study
- `src/styles/global.css` — shared design system and responsive styles
- `sitemap.xml`, `public/robots.txt`, and `404.html` — discoverability and graceful error handling
- `output/pdf/Dunhill_Dimaapi_Senior_Backend_Developer_CV.pdf` — source CV copied to the published root during deployment

## Content source of truth

Public claims must come from `requirements/Portfolio Website Requirements and Handoff.md`. Work-related confirmations are maintained in `data/Dunhill - Portfolio Working Profile.md`; SocCom confirmations are maintained separately in `data/Dunhill - SocCom Head Working Profile.md`.

Do not add inferred metrics, confidential banking details, private member data, private repository links, or unverified project claims. Project screenshots must be public-safe or carefully redacted.

## Editing content

1. Confirm the new fact with Dunhill.
2. Add the confirmed fact to the appropriate working profile.
3. Add the public-safe version to the requirements handoff.
4. Update the relevant HTML page.
5. Run `npm run validate`.

## Images and performance

The site uses WebP versions of the headshot and featured-project images with JPEG fallbacks. Keep meaningful alt text, explicit image dimensions, and lazy loading for below-the-fold images.

## Validation

```sh
npm run validate
```

The validation script checks the four published HTML pages, required metadata, local links and assets, heading structure, image alt text, case-study navigation, contact links, and the downloadable CV.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` assembles the static site into `_site`, copies the case studies, styles, optimized images, metadata files, and CV, then publishes the artifact through GitHub Pages.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Choose **GitHub Actions** as the build source.
3. Push the approved changes to `main`.

The production URL is `https://llihund19git.github.io/` and uses HTTPS through GitHub Pages.
