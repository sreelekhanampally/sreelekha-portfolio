import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";
import { copyText } from "../utils/clipboard.js";
import { ProjectVisual } from "./ProjectCard.jsx";

export default function CaseStudy({ project: p, onClose }) {
  const [shareStatus, setShareStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function share() {
    clearTimeout(timer.current);
    const copied = await copyText(
      new URL(`#project-${p.id}`, window.location.href).href,
    );
    setShareStatus(
      copied
        ? "Project link copied."
        : "Copy the project address from your browser’s address bar.",
    );
    timer.current = setTimeout(() => setShareStatus(""), 5000);
  }
  return (
    <Modal titleId="case-title" onClose={onClose} className="case-modal">
      <div className="case-head">
        <p className="project-kind">{p.kind}</p>
        <h2 id="case-title">{p.title}</h2>
        <p>{p.summary}</p>
        <div className="case-actions">
          {p.live && (
            <a
              className="button primary"
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open website
            </a>
          )}
          <a
            className="button outline"
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
          <button className="text-link" onClick={share}>
            Copy project link
          </button>
        </div>
        <p className="share-status" role="status" aria-live="polite">
          {shareStatus}
        </p>
        {p.requiresLogin && (
          <p className="access-note">
            The website requires sign-in. The screenshots and source below are
            available without an account.
          </p>
        )}
        {!p.live && (
          <p className="access-note">
            Source and local setup are available in the repository.
          </p>
        )}
      </div>
      <figure className={`case-figure accent-${p.accent}`}>
        <ProjectVisual project={p} eager />
        <figcaption>
          {p.imageType}
          {p.id === "exorank"
            ? ". The planet illustrations are decorative."
            : ""}
        </figcaption>
      </figure>
      <div className="case-body">
        <div className="case-result">
          <strong>{p.metric}</strong>
          <p>{p.metricContext}</p>
        </div>
        <section>
          <h3>The problem</h3>
          <p>{p.problem}</p>
        </section>
        <section>
          <h3>My work</h3>
          <ul>
            {p.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Result and checks</h3>
          <p>{p.evidence}</p>
          <a
            className="text-link"
            href={p.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the evaluation notes
          </a>
        </section>
        <section>
          <h3>{p.decisionTitle}</h3>
          <p>{p.decision}</p>
        </section>
        <section>
          <h3>How it fits together</h3>
          <p>{p.system}</p>
          <ul className="system-parts">
            {p.flow.map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ul>
        </section>
        <section className="code-evidence">
          <h3>Source code</h3>
          <ul>
            {p.codeLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <strong>{link.label}</strong>
                  <span>{link.path}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="case-limit">
          <h3>Data and limits</h3>
          <p>{p.limitation}</p>
        </section>
        {p.secondaryImage && (
          <figure className="case-secondary">
            <img
              src={p.secondaryImage}
              alt={`${p.title}, additional application view`}
              loading="lazy"
              width="1400"
              height="850"
            />
            <figcaption>Additional application view</figcaption>
          </figure>
        )}
        <div className="tags">
          {p.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Modal>
  );
}
