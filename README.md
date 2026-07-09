# Madhav Pradeep: Portfolio

Personal portfolio site built with React + Vite. Live at https://mad-hav-22-07.github.io/portfolio/

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` (or the next free port).

## Deploy

```bash
npm run deploy
```

Builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves automatically. Push to `main` first if you've made content changes, then run this.

## Editing content

All resume content (experience, projects, achievements, skills) lives in one place: `src/data/portfolio.js`. Update that file and every section re-renders, no need to touch component files unless you're changing layout.

To swap the resume PDF, replace `public/Madhav_Pradeep_Resume.pdf` and keep the same filename, or update `resumeUrl` in `src/data/portfolio.js`.
