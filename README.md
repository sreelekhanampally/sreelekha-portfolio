# Portfolio 

A responsive portfolio built with React and Vite to present software development, AI engineering and data science projects. Visitors can browse work by role, search technologies, inspect technical case studies and follow links to source code and deployed applications.

The website runs in the browser and deploys as static files. Project content is maintained separately from the UI components.

## Features

- Ten projects presented as three detailed cards followed by seven compact entries.
- Filters for software development, AI engineering, data science and research, with a separate project order for each role.
- Search across project descriptions, technologies and implementation details.
- Case studies covering the problem, implementation, results, engineering decisions, architecture and limitations.
- Shareable project links, repository links and website links where available.
- Screenshot previews and an optional interactive 3D desk.
- Internship, skills, education and contact sections.
- Mobile navigation, keyboard controls, reduced-motion support and a no-JavaScript fallback.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 18.3.1 and React DOM |
| Language | JavaScript with ES modules and JSX |
| Styling | CSS with responsive breakpoints |
| Build tooling | Vite 8.3.5 and the React plugin |
| 3D rendering | Three.js, React Three Fiber and Drei |
| State | React hooks: `useState`, `useMemo`, `useEffect` and `useRef` |
| Validation | Node.js assertions and filesystem checks |
| Deployment | Static assets generated in `dist/` |

## How it works

### Content and rendering

`src/data/projects.js` contains the project entries, role filters, role-specific ordering and search function. `src/data/profile.js` holds contact links, education and skill groups.

`App.jsx` manages the selected role, search text, active project and mobile menu. It derives the matching projects with `useMemo`, then passes them to reusable card, row and case-study components. The same project data supplies all three views.

### Filtering and search

`selectProjects()` filters by role, trims whitespace and compares search text without case sensitivity. Each search word must appear in the searchable project content. Results are sorted using the selected role's configured order.

### Project navigation

Opening a case study adds a fragment such as `#project-exorank` to the URL through the History API. Hash and navigation listeners keep the selected project in sync with the address. Case studies use a native HTML `<dialog>` with close and Escape handling.

Email and project-link copying share one clipboard utility, which includes a fallback for local previews.

### Optional 3D preview

The initial view shows application screenshots. The 3D component is imported through `React.lazy` only after the visitor selects **View 3D desk**. `Suspense` supplies its loading state, and an error boundary provides a way back to screenshots when the scene cannot render.

The canvas uses `frameloop="demand"`, a device pixel ratio capped at 1.5 and manual rotation controls. The model assets total approximately 16 MB, so loading them is an explicit visitor choice.

### Accessibility and page assets

The interface includes a skip link, labelled controls, keyboard-accessible dialogs and CSS that respects `prefers-reduced-motion`. Project images use local WebP files, and the Manrope font is self-hosted. The HTML includes search/social metadata and a plain profile, contact and project fallback when JavaScript is disabled.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/App.jsx` | Page sections, filters, search and project navigation |
| `src/data/projects.js` | Project content, links, role ordering and search logic |
| `src/data/profile.js` | Profile links, education and skills |
| `src/components/ProjectCard.jsx` | Detailed cards, compact rows and project visuals |
| `src/components/CaseStudy.jsx` | Technical project details and sharing controls |
| `src/components/Modal.jsx` | Native dialog wrapper |
| `src/components/HeroStage.jsx` | Screenshot selection and optional 3D entry |
| `src/components/canvas/Computers.jsx` | Three.js scene and controls |
| `src/utils/clipboard.js` | Clipboard API and local-preview fallback |
| `src/index.css` | Layout, typography, breakpoints and print styles |
| `public/` | Images, fonts, model files and asset notices |
| `scripts/check-content.mjs` | Content and asset validation |
| `docs/` | Source evidence, ranking rationale and verification records |

## Run locally

Use **Node.js 24.x**. Open a terminal in the folder containing `package.json`. In the downloaded ZIP, this is the inner `sreelekha-portfolio` folder.

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal. Windows users can also run `START_WINDOWS.bat` after installing Node.

The portfolio requires no API keys, database or environment variables. Contact actions open an email client or copy the email address.

## Validation and production build

```bash
npm run check
npm run build
npm run preview
```

| Command | What it does |
| --- | --- |
| `npm run check` | Checks project entries, role ordering, search cases, recorded source links, images, model dependencies, fonts and metadata |
| `npm run build` | Clears old generated files and creates the production build in `dist/` |
| `npm run preview` | Serves the production build for local review |

Recorded browser checks cover widths of 320, 390, 768, 1024 and 1440 pixels, along with mobile navigation, contact actions, dialogs and copy feedback. Coverage and remaining limits are documented in [docs/VERIFICATION.md](docs/VERIFICATION.md).

## Update the content

- Edit project text, screenshots, repository links and website URLs in `src/data/projects.js`.
- Edit profile links, education and skills in `src/data/profile.js`.
- Edit internship and page-section text in `src/App.jsx`.
- Edit metadata and the no-JavaScript fallback in `index.html`.

For example, Exorank's website link is configured with:

```js
live: "https://exorank-nsreelekha.onrender.com/",
```

A `live: null` value hides the website action. Keep private documents outside `public/` and `dist/`, since those files are included in the published site.

## Deployment

Run `npm ci` and `npm run build`, then publish the contents of **`dist/`** using a static-site host. Configure `dist` as the output directory.

Project case studies use URL fragments, so their direct links do not need server-side route rewrites. Rebuild and redeploy after changing project data or public assets.

## Attribution

The optional workstation component was adapted from [Bhanu-1233's portfolio reference](https://github.com/Bhanu-1233/project_3D_developer_portfolio). The **Gaming Desktop PC** model is by **Yolala1232**, licensed under **CC BY 4.0**. Source and asset details are retained in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

---
# 📜 License

This project is licensed under the **MIT License**.

---

## Author

**Sreelekha Nampally**

Full-Stack Developer and aspiring AI/ML Engineer.

* GitHub: [@sreelekhanampally](https://github.com/sreelekhanampally)
* LinkedIn: [sreelekha-nampally](https://www.linkedin.com/in/sreelekha-nampally)
* Email: sreelekhanampally27@gmail.com
