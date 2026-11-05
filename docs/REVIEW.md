# Portfolio review

Reviewed on 4 November 2026. This is an editorial review from a recruiter’s and a technical interviewer’s perspective. It is not an assessment issued by Google, IBM or Microsoft.

The main question was: can a visitor identify the candidate, understand the strongest work and inspect the evidence without spending time decoding the presentation?

## Findings and changes

| Finding in the first version | Change in this version | Reason |
| --- | --- | --- |
| The largest text was a general statement about building software. The candidate’s full name was less prominent. | The first screen now leads with Sreelekha Nampally, NIT Mizoram and the 2027 graduation year. | Identity and graduate context are immediately visible. |
| Several headings used paired slogans such as “Different problems. The same care.” | Replaced them with Projects, Internships, Technical skills, Education and Contact. | The section names tell a recruiter what they will find. |
| Floating `build()` and “x: curiosity” labels looked like decorative code. | Removed the labels, orbit lines and animated monitor treatment. | The project screenshot now carries the visual evidence. |
| Secondary copy and labels were very small. | Reworked typography, contrast and spacing. | Project descriptions are easier to read during a quick review. |
| Six large cards appeared before the rest of the projects could be expanded. | Three detailed cards are followed by seven shorter entries. All ten are visible. | The work remains complete while the page is easier to scan. |
| Project links generally stopped at repository homepages. | Added two verified implementation links to every case study. | A technical reviewer can go straight to search logic, model training, tests or route code. |
| The project flow graphics could imply a strict sequence where components actually have different responsibilities. | Replaced the sequence with a plain description of the architecture and an unordered component list. | The forecasting app now clearly separates Express/MongoDB application work from Python model serving. |
| Some result statements sounded like marketing. | Replaced them with the measured result or a concrete implemented capability. | A synthetic dashboard or a working feature is not presented as business adoption or revenue impact. |
| GrowthPilot’s synthetic context was mostly inside the detailed explanation. | Synthetic data is identified directly on its card. | The visitor can interpret demo numbers correctly before opening the case study. |
| Artist Marketplace was described as a complete commerce implementation. | Changed it to the verified backend scope. | The current public tree exposes the backend and an unresolved frontend Git reference. A complete checkout implementation was not verified. |
| Closing a case study did not follow a normal browser history entry. | Added history entries for project links and retained close/Escape handling for both direct and in-page case studies. | Navigation behaves more naturally. |
| Sharing a specific project required explaining where to click. | Added Copy project link and retained direct fragment URLs. | A recruiter can share a particular case study. |
| The candidate wants to keep the resume file private. | Removed the PDF and all view/download links. Contact replaces the header and hero resume actions. | The website no longer distributes the document. |
| The introduction did not explicitly name AI engineering. | Added AI engineering and a short explanation of RAG assistants, grounded in the project work. | The opening reflects both software and AI interests without claiming an employment title. |
| A motion toggle had little visible effect, and the footer included a source/asset credits control. | Removed both footer controls and the credits dialog. Required model attribution is confined to the optional 3D view. | The footer is simpler, while asset notices remain with the relevant work. |
| Without JavaScript, the fallback was minimal. | Added a plain profile, email and selected project links in the HTML fallback. | Core information remains available if scripts are disabled. |

## What the project stories now establish

Each case study separates:

1. The problem the project addresses.
2. The work described by the candidate’s resume and source.
3. The result and how it was checked.
4. A specific engineering decision.
5. The responsibilities of the main components.
6. Direct implementation evidence.
7. Data limitations and the boundary of the claim.

For example, the forecasting result remains 2.70% MAPE at a 24-hour horizon on held-out historical data. It is not rewritten as “97.3% accuracy.” GrowthPilot’s demo is labelled synthetic. Exorank’s ranking score is not described as proof of a planet discovery. The GPU result stays tied to its cavity benchmark.

The source-code links were checked against all ten repositories’ Git trees on the review date. `code-evidence.json` records those paths and tree identifiers. Their presence was verified; the other projects’ complete test suites were not rerun as part of this portfolio edit.

## Remaining source-level follow-ups

The portfolio wording is corrected, but a presentation cannot supply missing project evidence.

- **Artist Marketplace:** the public tree contains `frontend/artistic-portfolio` as a Git link rather than included frontend files, and the entry point exposes auth, product, profile and cart routes. Publish the frontend and payment implementation when available before describing that public repository as a complete purchase flow.
- **GPU CFD:** the cavity README includes a 41 by 41 grid configuration and a 6x speedup statement. A timing table with the exact CPU/GPU, grid, warm-up policy and measured runs would make the result easier to reproduce. The README also contains an older clone URL; the portfolio itself links to the correct `sreelekhanampally/gpu-cfd-solvers` repository.
- **Exorank:** its current README still has an empty hosted-workspace link and describes private Site access. The portfolio supplies the repository and local setup instead of inventing a public URL. Add the real public URL to `src/data/projects.js` when it is ready.
- **Electricity demo:** the live deployment requires sign-in. Its case study supplies screenshots and implementation evidence before the visitor needs an account.
- **Benchmark and adoption claims:** retain their current context. Add measured deployment, usage or business-impact numbers only when that evidence exists.

No changes were pushed to these project repositories. Their verified public content informed the portfolio corrections.

## Guidance used for the review

These public sources informed the review principles; they do not prescribe a particular portfolio design.

- [Google resume-writing tips](https://services.google.com/fh/files/misc/resume-writing-tips-for-veterans-2021.pdf): make important information easy to locate, use a simple structure and put results in context. The document is written for veterans; its general readability advice was applied here.
- [Microsoft technical interviewing](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing): prepare to explain problem-solving, applied skills and testing. This supported adding concrete decisions and implementation/test links.
- [IBM entry-level developer guidance](https://www.ibm.com/careers/blog/entry-level-developer-the-secrets-to-becoming-a-successful-candidate): discuss work you understand, explain your approach and be honest about your knowledge. This supported narrowing unsupported claims and making the candidate’s contribution clearer.

The copy was rewritten in plain, project-specific language. No authorship score, plagiarism-detector outcome or hiring result is promised. Template provenance remains in the accompanying notices, and the model attribution is shown in the optional 3D view.

The automated browser Back operation later reached a browser error page. That operation is recorded as a verification limit, not a passed check. Closing through the application and Escape, including a direct project link, was verified on the permitted preview.
