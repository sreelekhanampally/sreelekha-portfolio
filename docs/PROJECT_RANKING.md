# Project order and positioning

Reviewed on 4 November 2026 using the supplied resume, public repository content, and website checks. The default ordering weighs technical depth, available evidence, evaluation quality, clarity of the user problem, and relevance across the three target roles. It is an editorial choice for this portfolio.

## Overall order

| Rank | Project | Why it belongs here | Main evidence to discuss |
| --- | --- | --- | --- |
| 1 | Electricity Demand Forecasting | Combines a clear practical problem, baseline-driven ML evaluation, explainability, APIs, and a deployed interface. | 2.70% MAPE at a 24-hour horizon; 18.3% lower MAE than the seasonal-naive baseline; chronological holdout. |
| 2 | AnimeVerse | Strong broad software example: users, creators, content, auth, storage, discovery, and a retrieval feature in one product. | Working UI and public source; local embeddings, similarity thresholds, and complete application flows. |
| 3 | GrowthPilot | Connects data work to an understandable decision: whom to contact, what to recommend, and why. | Temporal features, customer profiles, recommendation paths, cited answers, and documented tests. Demo values are synthetic. |
| 4 | GPU CFD Solvers | Provides a distinctive research story and a measurable performance comparison from IIT Tirupati. | 6× CuPy/NumPy speedup on the cavity benchmark, plus analytical and published benchmark validation. |
| 5 | Exorank | Shows careful scientific ML evaluation, calibration, explanations, and a complete research workspace. | Host-grouped splits, 0.9748 test ROC-AUC, 0.9488 average precision, and clearly bounded interpretation of candidate scores. |
| 6 | ContextOps | Adds relevant AI engineering decisions around retrieval, SQL, traces, and actions. | Read-only SQL validation, pgvector retrieval, deterministic routing, citations, and approval-gated writes. |
| 7 | EmotionSense | Gives a clear NLP example with model comparisons and visible confidence. | TF-IDF and calibrated Linear SVM; comparisons with other classical models; version-specific negation limitations. |
| 8 | VestileFit | Demonstrates a computer-vision service boundary and explicit failure handling. | Normalized ResNet50 features, catalog identity validation, cosine retrieval, and a labelled fallback. |
| 9 | Semi-Infinite Optimization | Supports the mathematical background and a discussion of numerical correctness. | Objective/convergence plots, finite-LP comparison, dense constraint checks, and experiment CSVs. |
| 10 | Artist Marketplace | Rounds out software breadth through a familiar commerce workflow. | Verified Express routes for accounts, products, profiles and the cart; SQLite storage. The frontend reference and payment implementation were not independently available in the public snapshot. |

All ten are visible. The first three use detailed cards; the other seven use shorter entries with direct source links and full case studies. Role filters reorder and narrow the list.

## How role filters change the order

| Role view | Recommended sequence |
| --- | --- |
| Software development | AnimeVerse → Electricity Demand Forecasting → GrowthPilot → ContextOps → Exorank → Artist Marketplace → GPU CFD → EmotionSense → VestileFit |
| AI engineering | ContextOps → AnimeVerse → GrowthPilot → Electricity Demand Forecasting → Exorank → VestileFit → EmotionSense |
| Data science | Electricity Demand Forecasting → Exorank → GrowthPilot → EmotionSense → GPU CFD → VestileFit → Semi-Infinite Optimization |
| Research | GPU CFD → Semi-Infinite Optimization → Exorank |

## Decisions made for recruiter readability

1. The opening identifies the candidate, degree, graduation year, location, and target areas, with immediate project and contact links.
2. Claims carry their context: the forecast horizon, held-out data, and benchmark setup appear alongside the number.
3. Project cards use real application images or research outputs. Code-only entries use labelled component overviews.
4. The project notes answer five questions: what problem, what implementation, what evidence, what decision, and what limitation.
5. Skills link to a relevant project. No proficiency percentages or invented endorsements are used.
6. The 3D asset is optional, with a smaller screenshot-based first view and a working fallback.
7. Contact is direct: email, copy address, GitHub, LinkedIn, and LeetCode. The resume document is kept private.
8. Company logos and hiring promises are omitted. The portfolio stands on the work itself.

## Claims intentionally kept narrow

- GrowthPilot’s demo revenue and customer counts are not business impact measurements.
- Exorank scores are not confirmed planet discoveries or habitability estimates.
- Electricity results are historical; the interface is not live grid telemetry.
- GPU speedup applies to the reported benchmark, not every solver or machine.
- EmotionSense’s README contains different version-level accuracy figures, so the card uses its six-class scope instead of a combined accuracy headline.
- The optimization repository name mentions GPU, but the inspected script does not justify a new GPU performance claim.

The second review also added verified implementation links for every project and corrected Artist Marketplace to a backend-only public-source description. See `REVIEW.md` for the findings.
