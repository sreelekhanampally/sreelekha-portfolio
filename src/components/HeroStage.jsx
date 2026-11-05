import React, { Component, Suspense, lazy, useState } from "react";
const ComputersCanvas = lazy(() => import("./canvas/Computers.jsx"));
const previewIds = ["electricity", "animeverse", "growthpilot"];
const previewLabels = ["Forecasting", "AnimeVerse", "GrowthPilot"];

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="scene-message" role="status">
        <p>This browser cannot display the 3D desk.</p>
        <p>Use Back to screenshots to continue.</p>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default function HeroStage({ onOpen, projects }) {
  const [index, setIndex] = useState(0);
  const [scene, setScene] = useState(false);
  const [rotation, setRotation] = useState(0);
  const p = projects.find((item) => item.id === previewIds[index]);
  return (
    <div className="hero-stage">
      <div className="preview-top">
        <span>Project preview</span>
        <span>{scene ? "3D desk" : `${index + 1} of 3`}</span>
      </div>
      {scene ? (
        <>
          <div className="scene-viewport">
            <SceneBoundary>
              <Suspense
                fallback={
                  <div className="scene-message" role="status">
                    Loading the 3D desk...
                  </div>
                }
              >
                <ComputersCanvas rotation={rotation} />
              </Suspense>
            </SceneBoundary>
          </div>
          <p className="model-credit">
            3D model:{" "}
            <a
              href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gaming Desktop PC
            </a>{" "}
            by{" "}
            <a
              href="https://sketchfab.com/Yolala1232"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yolala1232
            </a>{" "}
            (
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY 4.0
            </a>
            ). Lighting, framing and controls adapted.
          </p>
          <div className="scene-controls">
            <button onClick={() => setRotation((v) => v - 0.4)}>
              Rotate left
            </button>
            <button onClick={() => setRotation((v) => v + 0.4)}>
              Rotate right
            </button>
            <button
              onClick={() => {
                setScene(false);
                setRotation(0);
              }}
            >
              Back to screenshots
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="preview-tabs" aria-label="Choose a project preview">
            {previewIds.map((id, i) => (
              <button
                key={id}
                aria-pressed={index === i}
                onClick={() => setIndex(i)}
              >
                {previewLabels[i]}
              </button>
            ))}
          </div>
          <button
            className="preview-image"
            onClick={() => onOpen(p)}
            aria-label={`View ${p.title} case study`}
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              width="1400"
              height="850"
              fetchpriority="high"
            />
          </button>
          <div className="preview-caption">
            <div>
              <strong>{p.title}</strong>
              <p>{p.context}</p>
            </div>
            <button className="text-link" onClick={() => onOpen(p)}>
              Read case study
            </button>
          </div>
          <div className="preview-extra">
            <span>Screenshot from the application</span>
            <button
              onClick={() => setScene(true)}
              title="Loads the original 16 MB workstation model"
            >
              View 3D desk <span>(16 MB)</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
