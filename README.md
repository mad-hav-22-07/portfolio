# Madhav Pradeep — Portfolio

Personal portfolio site built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` (or the next free port).

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy

The `dist/` folder is a static site — drag it into [Netlify](https://app.netlify.com/drop), or connect the repo to [Vercel](https://vercel.com/new) / [GitHub Pages](https://pages.github.com/) and point the build command to `npm run build` with output directory `dist`.

## Editing content

All resume content (experience, projects, achievements, skills) lives in one place: `src/data/portfolio.js`. Update that file and every section re-renders — no need to touch component files unless you're changing layout.

To swap the resume PDF, replace `public/Madhav_Pradeep_Resume.pdf` and keep the same filename, or update `resumeUrl` in `src/data/portfolio.js`.
