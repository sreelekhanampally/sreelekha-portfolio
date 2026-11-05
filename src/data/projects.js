// Project copy and links reviewed on 4 November 2026. See docs/REVIEW.md.
export const projects = [
  {
    id: "electricity",
    searchTerms: ["JavaScript", "MongoDB", "Node.js", "SHAP", "Nginx"],
    rank: 1,
    title: "Electricity Demand Forecasting",
    category: "Time-series forecasting",
    roles: ["software", "ai", "data"],
    accent: "mint",
    image: "images/electricity.webp",
    imageAlt:
      "Electricity demand dashboard with historical demand, forecasts and anomaly views",
    imageType: "Application screenshot",
    summary:
      "I built a dashboard to forecast electricity demand up to 24 hours ahead, inspect unusual readings and explain individual predictions.",
    stack: ["Python", "LightGBM", "React", "FastAPI", "Docker"],
    metric: "2.70% MAPE",
    metricContext: "24-hour forecasts on a chronological test set.",
    repo: "https://github.com/sreelekhanampally/electricity-demand-forecasting",
    live: "https://electricity-demand-forecasting-nsree.vercel.app/login",
    requiresLogin: true,
    problem:
      "A demand forecast needs to do better than repeating yesterday’s pattern. It also needs to show when an unusual reading is a data problem or an expected peak.",
    built: [
      "Trained LightGBM and XGBoost models for separate forecast horizons using past demand and calendar features.",
      "Connected the React dashboard to an Express API, a FastAPI inference service and MongoDB.",
      "Added anomaly views and SHAP explanations so a prediction can be inspected.",
    ],
    evidence:
      "On the historical test set, the 24-hour forecast reached 2.70% MAPE and 2,825 kW MAE. Its MAE was 18.3% lower than the seasonal-naive baseline. The final 15% of observations were reserved for testing.",
    decision:
      "I used chronological partitions and past-only features. Randomly mixing dates would let information from later demand readings influence the evaluation.",
    limitation:
      "The UCI data covers 2011 to 2014. These are historical backtest results; performance on a live grid has not been established.",
    flow: ["React dashboard", "Express API", "FastAPI models", "MongoDB"],
    source:
      "https://github.com/sreelekhanampally/electricity-demand-forecasting#results",
    secondaryImage: "images/electricity-forecast.webp",
    kind: "Personal project",
    context: "Historical backtest",
    decisionTitle: "Keep future data out of training",
    system:
      "The browser calls Express. Express handles accounts and saved application data in MongoDB, while FastAPI serves the trained models.",
    codeLinks: [
      {
        label: "Chronological data split",
        path: "ml-service/src/evaluation/splitter.py",
        url: "https://github.com/sreelekhanampally/electricity-demand-forecasting/blob/main/ml-service/src/evaluation/splitter.py",
      },
      {
        label: "Leakage checks",
        path: "ml-service/tests/test_leakage.py",
        url: "https://github.com/sreelekhanampally/electricity-demand-forecasting/blob/main/ml-service/tests/test_leakage.py",
      },
    ],
  },
  {
    id: "animeverse",
    searchTerms: ["JavaScript", "Express", "Cloudinary", "retrieval"],
    rank: 2,
    title: "AnimeVerse",
    category: "Full-stack application and search",
    roles: ["software", "ai"],
    accent: "lilac",
    image: "images/animeverse.webp",
    imageAlt:
      "AnimeVerse homepage with search, video collections and community navigation",
    imageType: "Application screenshot",
    summary:
      "I built a video platform for anime fans, with accounts, creator uploads, playlists and search that accepts a description of a story or scene.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "MiniLM"],
    metric: "Search by scene description",
    metricContext: "MiniLM embeddings combined with keyword matching.",
    repo: "https://github.com/sreelekhanampally/animeverse-ai",
    live: "https://animeverse-nsree.vercel.app",
    problem:
      "A viewer may remember a character or scene but forget the title. I wanted that description to be enough to start finding relevant videos.",
    built: [
      "Built the account, upload, playlist, dashboard and community flows.",
      "Stored MiniLM embeddings and combined semantic and keyword scores to rank relevant catalog items.",
      "Added an assistant that uses retrieved catalog information to answer questions and suggest videos.",
    ],
    evidence:
      "The live application and source show the account, catalog, upload and community features. Search ranks indexed videos using local embeddings and lexical signals. I have not published a large-scale search relevance benchmark.",
    decision:
      "I used a similarity threshold before passing retrieved information to the assistant. A low-quality match should lead to a limited answer or a request for more detail.",
    limitation:
      "Search depends on what is in the indexed catalog. The assistant depends on its external model provider, and a recommendation is not a guarantee that a viewer will like a video.",
    flow: ["React interface", "Express API", "MongoDB + embeddings", "Gemini"],
    source: "https://github.com/sreelekhanampally/animeverse-ai#readme",
    secondaryImage: "images/anime-search.webp",
    kind: "Personal project",
    context: "Working web application",
    decisionTitle: "Handle weak search matches explicitly",
    system:
      "React calls an Express API. MongoDB stores application data and embeddings; uploads use Cloudinary and the assistant uses Gemini.",
    codeLinks: [
      {
        label: "Semantic search",
        path: "backend/src/services/semanticSearch.service.js",
        url: "https://github.com/sreelekhanampally/animeverse-ai/blob/main/backend/src/services/semanticSearch.service.js",
      },
      {
        label: "Authentication middleware",
        path: "backend/src/middlewares/auth.middleware.js",
        url: "https://github.com/sreelekhanampally/animeverse-ai/blob/main/backend/src/middlewares/auth.middleware.js",
      },
    ],
  },
  {
    id: "growthpilot",
    searchTerms: ["Python", "TypeScript", "React", "SQL", "RFM", "Docker"],
    rank: 3,
    title: "GrowthPilot",
    category: "Customer analytics and recommendations",
    roles: ["software", "ai", "data"],
    accent: "peach",
    image: "images/growthpilot.webp",
    imageAlt:
      "GrowthPilot dashboard with customer segments, churn risk and suggested actions",
    imageType: "Application screenshot",
    summary:
      "I built a customer analytics app that groups shoppers by buying habits, estimates churn risk and suggests products. Its assistant answers questions with supporting sources.",
    stack: ["Python", "FastAPI", "PostgreSQL", "K-Means", "RAG"],
    metric: "Segments, churn and recommendations",
    metricContext: "The hosted demo uses synthetic transactions.",
    repo: "https://github.com/sreelekhanampally/growthpilot-ai",
    live: "https://growthpilot-web.onrender.com/dashboard",
    problem:
      "Transaction history can tell a team a lot about its customers, but deciding whom to contact and what to recommend takes several steps. I brought those steps into one application.",
    built: [
      "Created RFM features and K-Means customer segments, then added churn and purchase-propensity models.",
      "Combined item similarity, segment preferences and popularity to generate recommendations, including a path for new customers.",
      "Built customer profiles and an assistant that routes questions to analytics functions or retrieved playbooks.",
    ],
    evidence:
      "Customer features use an explicit cutoff date, and evaluation uses later snapshots than training. The source includes feature, recommendation and routing tests. The hosted dashboard shows the complete workflow on reproducible synthetic data.",
    decision:
      "I kept customer totals and other structured facts in SQL. Document retrieval is used for playbooks, so a numerical question does not depend on a model inventing a number.",
    limitation:
      "Demo revenue, customer counts and suggested opportunities come from synthetic data. No increase in real sales or customer retention is claimed.",
    flow: [
      "Retail transactions",
      "Features + models",
      "FastAPI",
      "React + copilot",
    ],
    source:
      "https://github.com/sreelekhanampally/growthpilot-ai#live-demo-snapshot",
    kind: "Personal project",
    context: "Synthetic retail demo",
    decisionTitle: "Use SQL for business numbers",
    system:
      "Offline Python pipelines prepare features and models. FastAPI serves analytics, recommendations and the assistant to the React interface.",
    codeLinks: [
      {
        label: "Customer feature pipeline",
        path: "src/growthpilot/features/builder.py",
        url: "https://github.com/sreelekhanampally/growthpilot-ai/blob/main/src/growthpilot/features/builder.py",
      },
      {
        label: "Recommendation logic",
        path: "src/growthpilot/recommendations/engine.py",
        url: "https://github.com/sreelekhanampally/growthpilot-ai/blob/main/src/growthpilot/recommendations/engine.py",
      },
    ],
  },
  {
    id: "gpu-cfd",
    searchTerms: ["CUDA", "CuPy", "NumPy"],
    rank: 4,
    title: "GPU CFD Solvers",
    category: "Scientific computing",
    roles: ["software", "data", "research"],
    accent: "sky",
    image: "images/gpu-cfd.webp",
    imageAlt: "Particle positions from the GPU cavity-flow research notebook",
    imageType: "Research figure",
    summary:
      "During my IIT Tirupati internship, I wrote GPU-based fluid-flow and Poisson solvers and compared the results with CPU calculations and reference solutions.",
    stack: ["Python", "CuPy / CUDA", "NumPy", "SciPy", "GFDM"],
    metric: "6x benchmark speedup",
    metricContext: "CuPy versus NumPy on lid-driven cavity flow.",
    repo: "https://github.com/sreelekhanampally/gpu-cfd-solvers",
    live: null,
    problem:
      "Fluid simulations repeat many calculations over a grid. I worked on moving that numerical work to the GPU while checking that the results still agreed with reference solutions.",
    built: [
      "Implemented incompressible Navier-Stokes and Poisson solvers using GFDM spatial derivatives.",
      "Used CuPy for GPU calculations and compared the cavity solver with the NumPy CPU version.",
      "Checked cavity flow, Couette flow and different Poisson boundary conditions against analytical and published results.",
    ],
    evidence:
      "In the cavity benchmark, the GPU version ran 6x faster than the NumPy CPU version. The repository contains separate CPU and GPU cavity notebooks, along with Couette and Poisson experiments.",
    decision:
      "I compared the solver output with analytical solutions and published benchmarks. Runtime was a separate comparison, so a faster calculation still had to produce a sensible solution.",
    limitation:
      "The speedup applies to the reported cavity experiment. Hardware, grid size and transfer overhead affect the comparison.",
    flow: [
      "Boundary conditions",
      "GFDM derivatives",
      "CuPy solver",
      "Benchmark checks",
    ],
    source: "https://github.com/sreelekhanampally/gpu-cfd-solvers#highlights",
    kind: "IIT Tirupati internship research",
    context: "Research benchmark",
    decisionTitle: "Check the numerical result before the runtime",
    system:
      "Python and SciPy support the numerical setup. CuPy carries out GPU calculations, with NumPy used for the CPU comparison and Matplotlib for results.",
    codeLinks: [
      {
        label: "GPU cavity notebook",
        path: "driven_cavity_flow/driven_cavity_flow_with_gpu.ipynb",
        url: "https://github.com/sreelekhanampally/gpu-cfd-solvers/blob/main/driven_cavity_flow/driven_cavity_flow_with_gpu.ipynb",
      },
      {
        label: "CPU comparison notebook",
        path: "driven_cavity_flow/driven_cavity_flow_with_cpu..ipynb",
        url: "https://github.com/sreelekhanampally/gpu-cfd-solvers/blob/main/driven_cavity_flow/driven_cavity_flow_with_cpu..ipynb",
      },
    ],
  },
  {
    id: "exorank",
    searchTerms: ["Python", "React", "Express", "Docker", "calibration"],
    rank: 5,
    title: "Exorank",
    category: "Scientific machine learning",
    roles: ["software", "ai", "data", "research"],
    accent: "lilac",
    image: "images/exorank.webp",
    imageAlt: "Exorank candidate ranking and model evaluation workspace",
    imageType: "Application screenshot",
    summary:
      "I built a workspace to rank unconfirmed Kepler objects, compare two classifiers and inspect the measurements behind each score.",
    stack: ["TypeScript", "XGBoost", "Random Forest", "FastAPI", "SHAP"],
    metric: "0.9748 ROC-AUC",
    metricContext: "XGBoost on 1,467 held-out labelled objects.",
    repo: "https://github.com/sreelekhanampally/exorank",
    live: https://exorank-nsreelekha.onrender.com,
    problem:
      "A ranked candidate list is more useful when the measurements, model comparison and uncertainty can be checked alongside it.",
    built: [
      "Trained XGBoost and Random Forest using twelve transit and stellar measurements, then ranked 1,873 unconfirmed objects.",
      "Kept host stars separate across train, validation and test partitions, with a separate calibration partition.",
      "Built candidate details, evaluation charts, CSV prediction and feature-contribution views.",
    ],
    evidence:
      "The calibrated XGBoost model reached 0.9748 ROC-AUC and 0.9488 average precision on 1,467 held-out labelled objects. Model selection used validation average precision.",
    decision:
      "Objects orbiting the same star share measurements. I kept each host in one partition and excluded catalog vetting labels and flags from the predictors.",
    limitation:
      "A high score means similarity to confirmed examples in this catalog task. It is not a confirmed discovery, a habitability estimate or a validated discovery probability.",
    flow: [
      "Kepler measurements",
      "Host-grouped splits",
      "Calibrated models",
      "Ranking workspace",
    ],
    source: "https://github.com/sreelekhanampally/exorank#measured-results",
    kind: "Personal project",
    context: "Held-out catalog experiment",
    decisionTitle: "Split by host star",
    system:
      "For local runs, React calls an Express gateway and FastAPI loads the trained models. The repository also includes a portable JavaScript inference path for the hosted workspace.",
    codeLinks: [
      {
        label: "Training and grouped splits",
        path: "services/ml/train.py",
        url: "https://github.com/sreelekhanampally/exorank/blob/main/services/ml/train.py",
      },
      {
        label: "Inference API tests",
        path: "services/ml/test_app.py",
        url: "https://github.com/sreelekhanampally/exorank/blob/main/services/ml/test_app.py",
      },
    ],
  },
  {
    id: "contextops",
    searchTerms: ["TypeScript", "Python", "PostgreSQL", "SQL", "MiniLM"],
    rank: 6,
    title: "ContextOps",
    category: "Retrieval and agent workflows",
    roles: ["software", "ai"],
    accent: "mint",
    image: "images/contextops.webp",
    imageAlt:
      "ContextOps interface for document questions, SQL analytics and action proposals",
    imageType: "Application screenshot",
    summary:
      "I built a document and operations assistant that combines retrieval with SQL queries and asks for human approval before a write action.",
    stack: ["LangGraph", "FastAPI", "pgvector", "React", "Gemini"],
    metric: "Approval before write actions",
    metricContext:
      "Cited retrieval, read-only SQL and visible execution traces.",
    repo: "https://github.com/sreelekhanampally/contextops-enterprise-agent-platform",
    live: "https://contextops-web.onrender.com/",
    problem:
      "An operational question can need both a policy document and a database query. A request to change data also needs a clear review step.",
    built: [
      "Used LangGraph to route requests to retrieval, SQL, combined reasoning or action planning.",
      "Added MiniLM embeddings, pgvector search, SQL validation and grounding checks.",
      "Kept write proposals pending until a person approves them, and showed the execution trace.",
    ],
    evidence:
      "The source contains routing, SQL safety, validator and action-proposal tests, along with a reproducible routing and retrieval evaluation set.",
    decision:
      "The assistant can prepare a write proposal, but approval is a separate step. Routing and safety checks use deterministic logic where possible.",
    limitation:
      "This is a demonstration application built around supplied documents. Retrieval and answer quality depend on the knowledge base and configured model.",
    flow: [
      "User request",
      "LangGraph router",
      "Evidence + validation",
      "Answer or proposal",
    ],
    source:
      "https://github.com/sreelekhanampally/contextops-enterprise-agent-platform#core-features",
    kind: "Personal project",
    context: "Demonstration application",
    decisionTitle: "Separate a proposed action from an executed action",
    system:
      "The React interface calls FastAPI. LangGraph selects the workflow; PostgreSQL and pgvector provide structured data and document evidence.",
    codeLinks: [
      {
        label: "SQL validation",
        path: "backend/app/services/sql_agent.py",
        url: "https://github.com/sreelekhanampally/contextops-enterprise-agent-platform/blob/main/backend/app/services/sql_agent.py",
      },
      {
        label: "Action approval",
        path: "backend/app/services/actions.py",
        url: "https://github.com/sreelekhanampally/contextops-enterprise-agent-platform/blob/main/backend/app/services/actions.py",
      },
    ],
  },
  {
    id: "emotionsense",
    searchTerms: ["Python", "JavaScript", "FastAPI", "Express", "NLP"],
    rank: 7,
    title: "EmotionSense",
    category: "Text classification",
    roles: ["software", "ai", "data"],
    accent: "peach",
    image: "images/emotionsense.webp",
    imageAlt: "EmotionSense text classifier with an emotion distribution view",
    imageType: "Application screenshot",
    summary:
      "I built a six-class emotion classifier with a web interface that shows the predicted label, confidence and alternative predictions.",
    stack: ["scikit-learn", "NLTK", "TF-IDF", "Linear SVM", "React"],
    metric: "Six emotion labels",
    metricContext: "TF-IDF features and a calibrated Linear SVM.",
    repo: "https://github.com/sreelekhanampally/text-emotion-classifier-nlp",
    live: "https://text-emotion-classifier-nlp-nsree.vercel.app/",
    problem:
      "A sentence can contain an emotion word without expressing that emotion. Negation and ambiguous text were useful cases to inspect beyond an overall accuracy score.",
    built: [
      "Compared Naive Bayes, Logistic Regression and Linear SVM using TF-IDF features.",
      "Built a React interface, an Express API and a separate FastAPI inference service.",
      "Displayed confidence and ranked predictions, and explored negation-aware text preprocessing.",
    ],
    evidence:
      "The source includes the training notebook, model-serving pipeline and version-specific results. Those versions have different accuracy figures, so I keep their results separate.",
    decision:
      "I made the prediction distribution visible so a close second choice is not hidden behind a single label.",
    limitation:
      "The classifier can miss sarcasm, mixed emotions and unfamiliar wording. It returns one label even when a sentence expresses several emotions.",
    flow: ["Input text", "NLTK + TF-IDF", "Calibrated SVM", "Ranked emotions"],
    source:
      "https://github.com/sreelekhanampally/text-emotion-classifier-nlp#readme",
    kind: "Personal project",
    context: "NLP model comparison",
    decisionTitle: "Show more than the top label",
    system:
      "React sends text through Express to FastAPI. The inference pipeline cleans the text, applies TF-IDF and runs the saved classifier.",
    codeLinks: [
      {
        label: "Training notebook",
        path: "notebooks/training.ipynb",
        url: "https://github.com/sreelekhanampally/text-emotion-classifier-nlp/blob/main/notebooks/training.ipynb",
      },
      {
        label: "Inference pipeline",
        path: "ai-service/app/inference/service.py",
        url: "https://github.com/sreelekhanampally/text-emotion-classifier-nlp/blob/main/ai-service/app/inference/service.py",
      },
    ],
  },
  {
    id: "vestilefit",
    searchTerms: ["Python", "PyTorch"],
    rank: 8,
    title: "VestileFit",
    category: "Computer vision and retrieval",
    roles: ["software", "ai", "data"],
    accent: "lilac",
    image: null,
    imageType: "Component overview",
    summary:
      "I built an outfit-matching app that extracts visual features from an image and finds similar items in a small catalog.",
    stack: ["Flask", "FastAPI", "PyTorch", "ResNet50", "NumPy"],
    metric: "30-item image catalog",
    metricContext: "ResNet50 features ranked with cosine similarity.",
    repo: "https://github.com/sreelekhanampally/VestileFit",
    live: null,
    problem:
      "An outfit photo contains visual information that is hard to capture with tags. The app also needs a usable response when image inference is unavailable.",
    built: [
      "Kept the Flask application separate from a FastAPI visual-retrieval service.",
      "Extracted normalized ResNet50 features and ranked catalog items using cosine similarity.",
      "Validated catalog IDs and returned a labelled rule-based fallback when the visual service failed.",
    ],
    evidence:
      "The repository includes catalog validation, embedding generation and contract/integration tests. It uses 2048-dimensional feature vectors for a 30-item catalog.",
    decision:
      "I mapped model results through stable item IDs. A change in file order should not attach a recommendation to the wrong outfit.",
    limitation:
      "The catalog is small. Similarity describes appearance, not fit, quality or a person’s styling preferences.",
    flow: [
      "Image upload",
      "Flask application",
      "Visual retrieval service",
      "Catalog item mapping",
    ],
    source: "https://github.com/sreelekhanampally/VestileFit#readme",
    kind: "Personal project",
    context: "Small-catalog prototype",
    decisionTitle: "Keep catalog identity stable",
    system:
      "Flask handles the browser upload and preferences. A FastAPI service extracts image features and retrieves catalog items, with a rule fallback if that service is unavailable.",
    codeLinks: [
      {
        label: "Catalog validation",
        path: "ai_service/app/catalog/catalog_store.py",
        url: "https://github.com/sreelekhanampally/VestileFit/blob/main/ai_service/app/catalog/catalog_store.py",
      },
      {
        label: "Recommendation service",
        path: "recommender/recommendation_service.py",
        url: "https://github.com/sreelekhanampally/VestileFit/blob/main/recommender/recommendation_service.py",
      },
    ],
    imageAlt: "",
  },
  {
    id: "optimization",
    searchTerms: ["Python", "RNN", "linear programming"],
    rank: 9,
    title: "Semi-Infinite Optimization",
    category: "Numerical optimization",
    roles: ["data", "research"],
    accent: "sky",
    image: "images/optimization.webp",
    imageAlt:
      "Saved primal-dual convergence plot from the optimization experiments",
    imageType: "Research figure",
    summary:
      "I compared numerical methods for semi-infinite optimization, recording convergence, constraint violations and primal-dual results.",
    stack: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib"],
    metric: "Dense feasibility checks",
    metricContext: "The script checks 100,001 constraint-grid points.",
    repo: "https://github.com/sreelekhanampally/linear-semi-infinite-program-with-gpu",
    live: null,
    problem:
      "An optimization result can satisfy sampled constraints while violating the original constraint family between those samples.",
    built: [
      "Explored recurrent-network dynamics and numerical optimization methods in notebooks and scripts.",
      "Compared a discretized formulation with an independent SciPy linear-program solution.",
      "Recorded parameter sensitivity, objective values, constraint violations and convergence plots.",
    ],
    evidence:
      "The public script checks the returned solution on a dense grid of 100,001 points. Result CSVs and primal-dual plots are included in the repository.",
    decision:
      "I kept constraint violations alongside the objective value. A lower objective is not enough if the returned solution breaks the constraints.",
    limitation:
      "The results cover the selected formulations and settings in the notebooks. A general GPU speedup has not been established for these experiments.",
    flow: [
      "Constraint family",
      "Discretized solver",
      "LP comparison",
      "Feasibility checks",
    ],
    source:
      "https://github.com/sreelekhanampally/linear-semi-infinite-program-with-gpu/blob/main/RNN_semi_infinite_paper_with_plots.py",
    kind: "Research experiments",
    context: "Notebook and script experiments",
    decisionTitle: "Check feasibility as well as the objective",
    system:
      "Python notebooks and scripts use NumPy and SciPy for the numerical experiments. Pandas stores results and Matplotlib produces the plots.",
    codeLinks: [
      {
        label: "Solver and feasibility checks",
        path: "RNN_semi_infinite_paper_with_plots.py",
        url: "https://github.com/sreelekhanampally/linear-semi-infinite-program-with-gpu/blob/main/RNN_semi_infinite_paper_with_plots.py",
      },
      {
        label: "Experiment notebook",
        path: "RNN_semi_infinite.ipynb",
        url: "https://github.com/sreelekhanampally/linear-semi-infinite-program-with-gpu/blob/main/RNN_semi_infinite.ipynb",
      },
    ],
  },
  {
    id: "artist-marketplace",
    searchTerms: ["JavaScript", "Node.js", "SQLite", "JWT"],
    rank: 10,
    title: "Artist Marketplace",
    category: "Marketplace API",
    roles: ["software"],
    accent: "peach",
    image: null,
    imageType: "Component overview",
    summary:
      "I built Express endpoints for artist profiles, product browsing, accounts and a shopping cart, using SQLite for storage.",
    stack: ["Node.js", "Express", "SQLite", "JWT"],
    metric: "Accounts, products and cart APIs",
    metricContext: "The public source exposes the backend implementation.",
    repo: "https://github.com/sreelekhanampally/artist-marketplace",
    live: null,
    problem:
      "An art marketplace needs accounts, product data and a cart before a customer can place an order.",
    built: [
      "Implemented account registration and authentication routes.",
      "Added product, profile and shopping-cart endpoints.",
      "Connected the Express application to SQLite storage.",
    ],
    evidence:
      "The reviewed source includes the Express entry point, SQLite setup, and authentication, product, profile and cart routes.",
    decision:
      "I separated authentication, products, profiles and the cart into route modules so each part can be followed in the code.",
    limitation:
      "I’m presenting the backend here. The frontend is an unresolved Git reference in the public repository; the complete UI and checkout source are not available in that snapshot.",
    flow: [
      "Account routes",
      "Product routes",
      "Profile and cart routes",
      "SQLite storage",
    ],
    source: "https://github.com/sreelekhanampally/artist-marketplace#readme",
    kind: "Backend project",
    context: "Public backend source",
    decisionTitle: "Organize the API by responsibility",
    system:
      "Express mounts separate route modules and uses SQLite for persistence. The visible source supports a backend review; a full purchase flow is not presented here.",
    codeLinks: [
      {
        label: "Authentication routes",
        path: "backend/routes/auth.js",
        url: "https://github.com/sreelekhanampally/artist-marketplace/blob/main/backend/routes/auth.js",
      },
      {
        label: "Cart routes",
        path: "backend/routes/cart.js",
        url: "https://github.com/sreelekhanampally/artist-marketplace/blob/main/backend/routes/cart.js",
      },
    ],
    imageAlt: "",
  },
];

export const roleFilters = [
  {
    id: "all",
    label: "All projects",
    description:
      "Three detailed projects first, followed by the rest of my work.",
  },
  {
    id: "software",
    label: "Software development",
    description: "Applications, APIs, authentication, storage and testing.",
  },
  {
    id: "ai",
    label: "AI engineering",
    description:
      "Model serving, retrieval, recommendations and agent workflows.",
  },
  {
    id: "data",
    label: "Data science",
    description:
      "Data preparation, baselines, evaluation and model interpretation.",
  },
  {
    id: "research",
    label: "Research",
    description: "Numerical methods, scientific computing and validation.",
  },
];

export const roleOrder = {
  all: [
    "electricity",
    "animeverse",
    "growthpilot",
    "gpu-cfd",
    "exorank",
    "contextops",
    "emotionsense",
    "vestilefit",
    "optimization",
    "artist-marketplace",
  ],
  software: [
    "animeverse",
    "electricity",
    "growthpilot",
    "contextops",
    "exorank",
    "artist-marketplace",
    "gpu-cfd",
    "emotionsense",
    "vestilefit",
  ],
  ai: [
    "contextops",
    "animeverse",
    "growthpilot",
    "electricity",
    "exorank",
    "vestilefit",
    "emotionsense",
  ],
  data: [
    "electricity",
    "exorank",
    "growthpilot",
    "emotionsense",
    "gpu-cfd",
    "vestilefit",
    "optimization",
  ],
  research: ["gpu-cfd", "optimization", "exorank"],
};

export function selectProjects(role = "all", query = "") {
  const order = roleOrder[role] || roleOrder.all;
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return projects
    .filter((p) => {
      if (role !== "all" && !p.roles.includes(role)) return false;
      const text = [
        p.title,
        p.category,
        p.summary,
        p.problem,
        p.evidence,
        p.system,
        ...(p.searchTerms || []),
        ...p.built,
        ...p.stack,
      ]
        .join(" ")
        .toLowerCase();
      return words.every((word) => text.includes(word));
    })
    .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}
