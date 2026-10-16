# Dunhill Dimaapi — Portfolio

This is the modern Astro version of my developer portfolio. It produces a fast static website that can be hosted on GitHub Pages now and moved to Hostinger later without rewriting the site.

## Start the site locally

Install the project once:

```sh
npm install
```

Start the local preview:

```sh
npm run dev
```

Astro will print a local address. Open that address in a browser. Changes to the source files will appear automatically.

## Build the production version

```sh
npm run build
```

The finished static website is created in `dist/`. That folder is generated and should not be edited by hand.

## Where to make updates

- `src/data/portfolio.ts` — project case studies, experience, and capabilities.
- `src/pages/index.astro` — homepage sections and primary writing.
- `src/pages/work/[slug].astro` — shared case-study page structure.
- `src/pages/resume/index.astro` — print-friendly résumé.
- `src/styles/global.css` — the complete visual and responsive system.
- `src/layouts/BaseLayout.astro` — page metadata and shared structure.

The older root-level HTML files and sample-site folders are kept as a reference for now. They are not included in the new production build.

## Add or update a project

Open `src/data/portfolio.ts` and find the `projects` list. Every project has:

- a unique `slug` used in its page address;
- title, category, role, client, and summary;
- an overview and contribution list;
- technologies and project images;
- an optional live URL;
- an optional `featured: true` setting for the homepage.

Because every case study uses the same reusable page, updating the project data automatically updates its card and detail page.

## GitHub Pages

The deployment workflow is in `.github/workflows/deploy-pages.yml`. In the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push changes to `main`.

GitHub will build and publish the site automatically.

## Hostinger later

The site is fully static. When moving to Hostinger, deploy the contents of `dist/` to `public_html`, or configure an automated workflow that builds the project in GitHub and uploads that folder.

## Information to review before publishing

- Confirm that “10 years of experience” is current.
- Confirm the 2023–Present employment and freelance dates.
- Confirm `dunhilldimaapi@gmail.com` as the preferred public email.
- Confirm availability for both full-time and freelance work.
- Add measurable project results when they are available.
