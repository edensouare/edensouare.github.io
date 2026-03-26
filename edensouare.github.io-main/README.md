### edensouare.github.io — React + Vite SPA

This project converts the static site into a modern React app powered by Vite, inspired by the structure and interactions from `SBleeyouk.github.io`.

What you get:
- React + Vite setup with fast local dev and optimized prod build
- Client-side routing with animated transitions (Framer Motion)
- Clean layout and bento-style cards carried over from the original design
- GitHub Pages deployment via GitHub Actions (including SPA deep-link support)

Folder layout (relevant bits):
- `src/` — React application
  - `main.jsx` — entry point
  - `App.jsx` — routes and transitions
  - `components/Layout.jsx` — sidebar + shell
  - `pages/` — `Home.jsx`, `Projects.jsx`, `Research.jsx`, `ProjectDetail.jsx`
  - `content.js` — simple data for projects/research
  - `index.css` — global styles (ported from the previous `style.css`)

How to run locally:
1. Install Node.js 18+ (20 recommended).
2. Open a terminal at the repo root, then:
   - `cd edensouare.github.io-main`
   - `npm install`
   - `npm run dev`
3. Open the printed local URL (usually `http://localhost:5173`).

Build for production:
- From `edensouare.github.io-main` run: `npm run build`
- The output will be in `dist/`

Deploy to GitHub Pages (via Actions):
- A workflow is provided at `.github/workflows/deploy.yml` that builds this subfolder and publishes to GitHub Pages.
- Make sure in your repository Settings → Pages:
  - Build and deployment: Source = GitHub Actions
- On every push to `main`, the site will build and deploy automatically.
- The workflow also creates a `404.html` in the build output so deep links (client-side routes) work on Pages.

Editing content:
- Update lists in `src/content.js` to add/remove items for Projects/Research.
- For richer detail pages, extend `content.js` with fields (e.g., images, sections) and render them in `pages/ProjectDetail.jsx`.

Legacy URLs preserved (no extra files needed):
- Legacy paths like `/lookism.html`, `/alzheimers-mri.html`, etc., are handled by React Router redirects defined in `src/App.jsx`.
- On GitHub Pages, the workflow copies `dist/index.html` to `dist/404.html`, so direct visits to those legacy `.html` URLs load the SPA and you’re redirected to the new routes (e.g., `/projects/lookism`).
- The old standalone HTML redirect files were removed to keep the repo clean.

Notes:
- If you host at `https://<username>.github.io/` (user site), the Vite `base` is already set to `/` and everything should resolve correctly.
- If you move this app into a project page (e.g., `https://<username>.github.io/<repo>`), update `vite.config.js` `base` to `'/<repo>/'`.
- Cleanup: the inspiration folder `SBleeyouk.github.io-main` and unused static files (legacy `.html` redirects, root `style.css`) were removed.