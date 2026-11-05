import React from "react";

export function ProjectVisual({ project: p, eager = false }) {
  if (p.image)
    return (
      <img
        src={p.image}
        alt={p.imageAlt}
        width="1400"
        height="850"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={
          ["optimization", "gpu-cfd"].includes(p.id) ? "research-image" : ""
        }
      />
    );
  return (
    <div className="component-overview">
      <p>{p.title}</p>
      <strong>Application components</strong>
      <ul>
        {p.flow.map((part) => (
          <li key={part}>{part}</li>
        ))}
      </ul>
      <small>Code available on GitHub</small>
    </div>
  );
}

export function ProjectLinks({ project: p, onOpen, compact = false }) {
  return (
    <div className={`project-links ${compact ? "compact-links" : ""}`}>
      <button
        className="text-link"
        onClick={() => onOpen(p)}
        aria-label={`Read ${p.title} case study`}
      >
        Read case study
      </button>
      <a
        className="text-link"
        href={p.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${p.title} source code on GitHub`}
      >
        GitHub
      </a>
      {p.live && (
        <a
          className="text-link"
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${p.title} website${p.requiresLogin ? ", sign-in required" : ""}`}
        >
          {p.requiresLogin ? "Website (sign-in)" : "Website"}
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project: p, featured = false, onOpen }) {
  return (
    <article
      className={`project-card ${featured ? "project-featured" : ""}`}
      data-project={p.id}
    >
      <button
        className={`project-image accent-${p.accent}`}
        onClick={() => onOpen(p)}
        aria-label={`Read case study: ${p.title}`}
      >
        <ProjectVisual project={p} eager={featured} />
      </button>
      <div className="project-content">
        <p className="project-kind">{p.kind}</p>
        <h3>{p.title}</h3>
        <p className="project-summary">{p.summary}</p>
        <div className="tags" aria-label={`${p.title} technologies`}>
          {p.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-result">
          <strong>{p.metric}</strong>
          <p>{p.metricContext}</p>
        </div>
        <div className="project-context">{p.context}</div>
        <ProjectLinks project={p} onOpen={onOpen} />
      </div>
    </article>
  );
}

export function ProjectRow({ project: p, onOpen }) {
  return (
    <article className="project-row" data-project={p.id}>
      <button
        className={`row-image accent-${p.accent}`}
        onClick={() => onOpen(p)}
        aria-label={`Read case study: ${p.title}`}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.imageAlt}
            width="250"
            height="180"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span>
            {p.id === "vestilefit" ? "Image retrieval" : "Backend API"}
          </span>
        )}
      </button>
      <div className="row-content">
        <div className="row-heading">
          <h3>
            <button onClick={() => onOpen(p)}>{p.title}</button>
          </h3>
          <span>{p.kind}</span>
        </div>
        <p>{p.summary}</p>
        <div className="row-meta">
          <span>{p.context}</span>
          <span>{p.stack.slice(0, 3).join(", ")}</span>
        </div>
      </div>
      <ProjectLinks project={p} onOpen={onOpen} compact />
    </article>
  );
}
