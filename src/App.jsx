import React, { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./components/Icon.jsx";
import { copyText } from "./utils/clipboard.js";
import HeroStage from "./components/HeroStage.jsx";
import ProjectCard, { ProjectRow } from "./components/ProjectCard.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import { projects, roleFilters, selectProjects } from "./data/projects.js";
import { profile, skillGroups } from "./data/profile.js";

function projectFromHash() {
  return (
    projects.find((p) => `#project-${p.id}` === window.location.hash) || null
  );
}
export default function App() {
  const [role, setRole] = useState("all");
  const [query, setQuery] = useState("");
  const [project, setProject] = useState(projectFromHash);
  const [menu, setMenu] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const copyTimer = useRef(null);
  const projectReturnUrl = useRef(null);
  const matches = useMemo(() => selectProjects(role, query), [role, query]);
  const selected = matches.slice(0, 3);
  const remaining = matches.slice(3);
  const filter = roleFilters.find((item) => item.id === role);

  useEffect(() => {
    function sync() {
      const selectedProject = projectFromHash();
      setProject(selectedProject);
      if (!selectedProject) projectReturnUrl.current = null;
    }
    const escape = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener("keydown", escape);
      clearTimeout(copyTimer.current);
    };
  }, []);
  function openProject(p) {
    projectReturnUrl.current = window.location.href;
    window.history.pushState(
      { portfolioProject: p.id },
      "",
      `#project-${p.id}`,
    );
    setProject(p);
  }
  function closeProject() {
    setProject(null);
    if (projectReturnUrl.current && window.history.state?.portfolioProject)
      window.history.back();
    else window.history.replaceState(null, "", "#work");
    projectReturnUrl.current = null;
  }
  function chooseRole(id) {
    setRole(id);
    setQuery("");
  }
  async function copyEmail() {
    clearTimeout(copyTimer.current);
    const copied = await copyText(profile.email);
    setCopyStatus(
      copied
        ? "Email address copied."
        : "Select the email address above to copy it.",
    );
    copyTimer.current = setTimeout(() => setCopyStatus(""), 5000);
  }

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="Sreelekha Nampally home">
            <span className="monogram" aria-hidden="true">
              SN
            </span>
            <span>{profile.name}</span>
          </a>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={`nav-links ${menu ? "menu-open" : ""}`}
          >
            {["Work", "Experience", "Skills", "Education"].map((item) => (
              <a
                key={item}
                href={`#${item === "Education" ? "about" : item.toLowerCase()}`}
                onClick={() => setMenu(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="mobile-contact"
              href="#contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </a>
          </nav>
          <div className="nav-actions">
            <a className="nav-contact" href="#contact">
              Contact
            </a>
            <button
              className="menu-toggle"
              aria-controls="main-navigation"
              aria-expanded={menu}
              aria-label={menu ? "Close navigation" : "Open navigation"}
              onClick={() => setMenu((v) => !v)}
            >
              <span>{menu ? "Close" : "Menu"}</span>
              <Icon name={menu ? "close" : "menu"} size={19} />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section
          className="hero section-shell"
          id="top"
          aria-labelledby="hero-title"
        >
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">NIT Mizoram, Class of 2027</p>
              <h1 id="hero-title">
                Sreelekha
                <br />
                Nampally
              </h1>
              <p className="hero-role">
                Software development and AI engineering
              </p>
              <p className="hero-description">
                I’m a final-year Mathematics and Computing student with a minor
                in AI/ML. I build full-stack applications, machine learning models and AI assistants that
                retrieve relevant information before answering (RAG). My work
                also includes machine learning and GPU computing research at
                IIT Tirupati.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  View projects
                </a>
                <a className="button ghost" href="#contact">
                  Get in touch
                </a>
              </div>
              <div className="hero-details">
                <p>
                  Open to software development, AI engineering and data science
                  roles.
                </p>
                <p>Hyderabad, India</p>
                <div>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a href={`mailto:${profile.email}`}>Email</a>
                </div>
              </div>
            </div>
            <HeroStage projects={projects} onOpen={openProject} />
          </div>
          <div
            className="proof-strip"
            aria-label="Selected results and education"
          >
            <button
              onClick={() =>
                openProject(projects.find((p) => p.id === "gpu-cfd"))
              }
            >
              <strong>6x</strong>
              <span>
                Faster GPU simulation
                <small>CuPy vs NumPy, cavity-flow experiment</small>
              </span>
            </button>
            <button onClick={() => openProject(projects[0])}>
              <strong>2.70%</strong>
              <span>
                24-hour forecast error
                <small>MAPE on held-out historical data</small>
              </span>
            </button>
            <a href="#about">
              <strong>
                8.36<span>/10</span>
              </strong>
              <span>
                CGPA at NIT Mizoram<small>Through Semester 6</small>
              </span>
            </a>
          </div>
        </section>

        <section
          className="work-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Projects</p>
                <h2 id="work-title">What I’ve built</h2>
              </div>
              <p className="section-aside">
                Applications, models and research experiments.
                <br />
                Each case study links to the implementation.
              </p>
            </div>
            <div className="work-toolbar">
              <div className="filters" aria-label="Filter projects by role">
                {roleFilters.map((item) => (
                  <button
                    key={item.id}
                    aria-pressed={role === item.id}
                    onClick={() => chooseRole(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <label className="search-field">
                <Icon name="search" size={18} />
                <span className="sr-only">Search projects or technologies</span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects or tools"
                />
              </label>
            </div>
            <div className="filter-description">
              <p>{filter.description}</p>
              <span role="status" aria-live="polite">
                {matches.length} {matches.length === 1 ? "project" : "projects"}
              </span>
            </div>
            {matches.length > 0 ? (
              <>
                <div className="project-grid">
                  {selected.map((p, i) => (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      featured={i === 0}
                      onOpen={openProject}
                    />
                  ))}
                </div>
                {remaining.length > 0 && (
                  <div className="more-projects">
                    <h3>More projects</h3>
                    <div className="project-list">
                      {remaining.map((p) => (
                        <ProjectRow
                          key={p.id}
                          project={p}
                          onOpen={openProject}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="empty-state">
                <h3>No matching projects</h3>
                <p>Try a different technology or view all projects.</p>
                <button
                  className="button dark"
                  onClick={() => chooseRole("all")}
                >
                  Clear search and filters
                </button>
              </div>
            )}
            <p className="work-note">
              Screenshots are available in the case studies. Some hosted demos
              may take a moment to start.
            </p>
          </div>
        </section>

        <section
          className="experience-section section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="experience-title">Internships</h2>
            </div>
            <p className="section-aside">
              Research in numerical computing and practical work with
              classification models.
            </p>
          </div>
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-time">
                <span>May to July 2025</span>
                <small>Tirupati, India</small>
              </div>
              <div className="experience-main">
                <p className="experience-org">
                  Indian Institute of Technology, Tirupati
                </p>
                <h3>Research Intern</h3>
                <p className="experience-area">High Performance Computing</p>
                <p>
                  I wrote Python programs for fluid-flow simulations and Poisson
                  equations, then moved numerical calculations to the GPU using
                  CuPy.
                </p>
                <ul>
                  <li>
                    Achieved a 6x speedup over the NumPy CPU version on the
                    cavity-flow benchmark.
                  </li>
                  <li>
                    Compared results with analytical solutions and published
                    benchmark data.
                  </li>
                </ul>
                <div className="experience-bottom">
                  <p>Python, CuPy, NumPy, SciPy, GFDM</p>
                  <button
                    className="text-link"
                    onClick={() =>
                      openProject(projects.find((p) => p.id === "gpu-cfd"))
                    }
                  >
                    View the solver work
                  </button>
                </div>
              </div>
            </article>
            <article className="experience-item">
              <div className="experience-time">
                <span>January to March 2025</span>
                <small>Hyderabad, India</small>
              </div>
              <div className="experience-main">
                <p className="experience-org">Agratas EduTech</p>
                <h3>AI/ML Intern</h3>
                <p>
                  I prepared image datasets, applied data augmentation and
                  trained classification models. I also reviewed incorrect
                  predictions to understand where the models struggled.
                </p>
                <ul>
                  <li>
                    Implemented binary classification with gradient descent from
                    scratch.
                  </li>
                  <li>
                    Compared learning rates and model behaviour across datasets.
                  </li>
                </ul>
                <p className="experience-tools">
                  Python, image classification, data preparation, gradient
                  descent
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Technical skills</p>
                <h2 id="skills-title">Tools I use</h2>
              </div>
              <p className="section-aside">
                From my coursework, internships and projects.
                <br />
                Project-specific tools appear in each case study.
              </p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="skill-tags">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                  <button
                    className="text-link"
                    onClick={() =>
                      openProject(projects.find((p) => p.id === group.project))
                    }
                  >
                    {group.link}
                  </button>
                </article>
              ))}
            </div>
            <div className="foundations">
              <h3>Computer science and mathematics</h3>
              <p>
                Data structures and algorithms, object-oriented programming,
                DBMS, operating systems, probability, statistics, numerical
                methods and SDLC.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-section section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="education-card">
            <p className="eyebrow">Education</p>
            <h2 id="about-title">NIT Mizoram</h2>
            <p className="degree">{profile.education.degree}</p>
            <p>Minor in {profile.education.minor}</p>
            <p className="education-years">{profile.education.years}</p>
            <div className="education-score">
              <strong>{profile.education.cgpa}</strong>
              <span>
                CGPA<small>{profile.education.cgpaContext}</small>
              </span>
            </div>
            <p className="course-note">
              My coursework includes statistics, numerical methods and core
              computer science subjects.
            </p>
          </div>
          <div className="campus-work">
            <p className="eyebrow">Campus responsibilities</p>
            <h2>Beyond project work</h2>
            <article>
              <h3>Vice President</h3>
              <p>Mathematics and Computing Society</p>
              <small>August 2025 to present</small>
              <p>
                I help organize technical workshops, coding activities and
                student-faculty events.
              </p>
            </article>
            <article>
              <h3>Event Manager</h3>
              <p>Designing Club</p>
              <small>October 2025 to present</small>
              <p>
                I coordinate design competitions and technical events. I also
                hosted and judged a two-day UX/UI Design Bootcamp, mentoring
                participants and reviewing their projects.
              </p>
            </article>
            <a
              className="text-link"
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode profile
            </a>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-shell">
            <div className="contact-grid">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 id="contact-title">Get in touch</h2>
                <p>
                  For software development, AI engineering or data science
                  opportunities, email me.
                </p>
                <div className="role-links">
                  <a href="#work" onClick={() => chooseRole("software")}>
                    Software projects
                  </a>
                  <a href="#work" onClick={() => chooseRole("ai")}>
                    AI projects
                  </a>
                  <a href="#work" onClick={() => chooseRole("data")}>
                    Data science projects
                  </a>
                </div>
              </div>
              <div className="contact-details">
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <div className="contact-buttons">
                  <a
                    className="button contact-email"
                    href={`mailto:${profile.email}`}
                  >
                    Write an email
                  </a>
                  <button className="button contact-copy" onClick={copyEmail}>
                    Copy email address
                  </button>
                </div>
                <p className="copy-status" role="status" aria-live="polite">
                  {copyStatus}
                </p>
                <div className="social-links">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <footer className="site-footer">
              <span>2026 {profile.name}</span>
              <div>
                <a href="#top">Back to top</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
      {project && (
        <CaseStudy key={project.id} project={project} onClose={closeProject} />
      )}
    </div>
  );
}
