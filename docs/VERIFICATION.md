# Verification record

Reviewed version: 1.2.0. Date: 4 November 2026.

The 1.2.0 update rechecked the content/assets, production build, resume removal, introduction, contact navigation, mobile menu, footer, 3D fallback and responsive fit. The unchanged project interaction checks below also retain the earlier 1.1.0 review results.

## Completed checks

| Area | Result |
| --- | --- |
| Content and asset checks | `npm run check` passed after the final code changes. |
| Build | `npm run build` passed. The static build was opened independently of the development server. |
| Production page | The compiled entry script loaded, the name and primary screenshot rendered, and all ten projects were present. |
| Role views | Software, AI engineering, data science and research scopes and orders were checked. The AI view was also exercised in the production build. |
| Project visibility | Three detailed cards and seven compact entries show all ten projects on the default page. |
| Search | Case/whitespace handling, multiple search words, a no-result state and reset were checked. `python XGBoost` returns Electricity Demand Forecasting and Exorank. |
| Source evidence | Two implementation links per project were checked against the current Git trees. The paths and tree identifiers are in `code-evidence.json`. |
| Claim correction | Static checks confirm Artist Marketplace is presented as a backend project and does not list Razorpay as a verified implementation. |
| Responsive fit | Same-origin iframe widths of 320, 390, 768, 1024 and 1440 pixels were inspected. Scroll width equalled client width at each size, with all ten project entries present. |
| Desktop fit | The production document had equal client and scroll widths at the available desktop viewport. |
| Mobile controls | Navigation opened and closed; choosing a role updated the project list; a case study opened correctly. |
| Case study controls | Close and Escape worked, a Tab check retained focus inside the native dialog, and the direct `#project-exorank` link opened the correct case study. |
| Copying | Email copying and project-link copying produced confirmed success messages after adding the shared local-preview fallback. |
| Footer and attribution | The motion toggle and source/asset credits control are absent. The footer contains only the candidate’s name/year and Back to top. Model attribution is visible only after opening the optional 3D view; model and font license files remain included. |
| 3D fallback | With WebGL unavailable, the new fallback appeared and Back to screenshots restored the normal preview. |
| Resume privacy | The resume PDF is absent from `public/`, `dist/` and the ZIP. No resume or PDF links appear in the app, HTML fallback or built entry. Runtime checks found zero resume links at every tested width. |
| Stale build files | Set `build.emptyOutDir` explicitly to `true`; rebuilding removed the previous PDF and old hashed entry files from `dist/`. |
| Introduction | The rendered heading names software development and AI engineering. The paragraph describes RAG assistants, machine learning and GPU research without claiming an AI engineering employment title. |
| Contact actions | Get in touch and the header Contact link point to the contact section. The mobile menu’s Contact link closed the menu and showed the contact section. |
| Motion | Removed the unused preference state and footer toggle; the CSS still honors the system’s `prefers-reduced-motion` setting. The 3D scene has no automatic rotation or inertial damping. |
| Cleanup | Decorative code labels, paired slogans and the old unused display font were removed. The temporary responsive test page is excluded from the deliverable. |

## Build footprint

The final build reports approximately 196 kB entry JavaScript (62 kB gzip), 43 kB CSS (9 kB gzip), and an optional 904 kB workstation JavaScript chunk (242 kB gzip). The original workstation model assets total approximately 16 MB and remain conditional on the 3D control. These are build sizes, not a measured load-time score.

Project images use local WebP files, with lazy loading for lower entries. The Manrope font is self-hosted and preloaded. The HTML also supplies a plain profile, contact and project links when JavaScript is disabled. The production layout was checked in same-origin iframes set to 320, 390, 768, 1024 and 1440 pixels. After accounting for the vertical scrollbar, client and scroll widths matched at all five sizes, and all ten projects were present.

## Verification limits

- The cloud browser has WebGL disabled. The 3D asset references, bundle and fallback passed their checks; visual rendering of the model could not be verified here.
- The automated browser Back operation reached a browser error page. It is not counted as a passed check. Close/Escape, direct case links and application-driven closing worked on the permitted preview. Browser Back behaviour should also be tried in a normal local browser.
- Responsive iframe checks do not replace tests on physical devices or every browser engine. No Lighthouse score or universal accessibility certification is claimed.
- Source review establishes the presence of the linked implementations. It does not independently reproduce the training results or rerun every project’s test suite.
- Public demo availability can change. Exorank’s current README does not provide a public URL, and the electricity demo requires sign-in. No external service, repository or account was modified to change that access.

The final ZIP contains source, the lockfile, public assets, notices, review notes and `dist/`. It excludes dependency folders, Git metadata, environment files and the temporary test page.
