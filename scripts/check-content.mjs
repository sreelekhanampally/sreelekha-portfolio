import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  projects,
  roleFilters,
  roleOrder,
  selectProjects,
} from "../src/data/projects.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = resolve(root, "public");
const expected = [
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
];
assert.deepEqual(
  projects.map((p) => p.id),
  expected,
  "All ten reviewed projects must be present in the documented default order.",
);
assert.equal(
  new Set(projects.map((p) => p.repo)).size,
  10,
  "Each project needs its own repository.",
);
for (const p of projects) {
  for (const field of [
    "title",
    "summary",
    "problem",
    "evidence",
    "decision",
    "limitation",
    "source",
  ])
    assert.ok(p[field]?.trim(), `${p.id}: missing ${field}`);
  assert.ok(
    p.built.length >= 2 && p.flow.length === 4,
    `${p.id}: case study is incomplete`,
  );
  assert.equal(new URL(p.repo).hostname, "github.com");
  assert.equal(new URL(p.source).protocol, "https:");
  if (p.live) assert.equal(new URL(p.live).protocol, "https:");
  for (const img of [p.image, p.secondaryImage].filter(Boolean)) {
    assert.ok(
      existsSync(resolve(publicDir, img)),
      `${p.id}: missing image ${img}`,
    );
    assert.ok(
      statSync(resolve(publicDir, img)).size > 1000,
      `${p.id}: empty or invalid image ${img}`,
    );
  }
}
for (const role of roleFilters.map((x) => x.id)) {
  const result = selectProjects(role);
  assert.deepEqual(
    result.map((p) => p.id),
    roleOrder[role],
    `Incorrect ${role} order or scope`,
  );
}
assert.deepEqual(
  selectProjects("all", "  XGBOOST  ").map((p) => p.id),
  ["electricity", "exorank"],
);
assert.deepEqual(selectProjects("all", "nothingmatches777"), []);
assert.equal(selectProjects("software", "CUDA")[0].id, "gpu-cfd");
assert.equal(selectProjects("research", "shopping cart").length, 0);
assert.equal(selectProjects("all", "  ").length, 10);
assert.deepEqual(
  selectProjects("all", " Python XGBoost ").map((p) => p.id),
  ["electricity", "exorank"],
);
assert.ok(
  selectProjects("all", "JavaScript").some((p) => p.id === "animeverse"),
);
const evidence = JSON.parse(
  readFileSync(resolve(root, "docs/code-evidence.json"), "utf8"),
);
for (const project of projects) {
  const repo = project.repo.split("/").at(-1);
  assert.deepEqual(
    project.codeLinks,
    evidence.repositories[repo].codeLinks,
    `${project.id}: unverified source links`,
  );
  assert.ok(
    project.kind && project.context && project.system && project.decisionTitle,
  );
}
const artist = projects.find((p) => p.id === "artist-marketplace");
assert.equal(artist.kind, "Backend project");
assert.ok(!artist.stack.includes("Razorpay"));
assert.ok(artist.limitation.includes("unresolved Git reference"));
const appText = readFileSync(resolve(root, "src/App.jsx"), "utf8");
const stageText = readFileSync(
  resolve(root, "src/components/HeroStage.jsx"),
  "utf8",
);
assert.ok(
  !appText.includes("I make data") &&
    !stageText.includes("x: curiosity") &&
    !stageText.includes("build()"),
);
const { profile } = await import("../src/data/profile.js");
assert.equal(profile.name, "Sreelekha Nampally");
assert.equal(profile.education.graduation, "2027");
assert.ok(!existsSync(resolve(publicDir, "Sreelekha_Nampally_Resume.pdf")),
  "The private resume must not be part of the public website.");

const modelDir = resolve(publicDir, "desktop_pc");
const gltf = JSON.parse(readFileSync(resolve(modelDir, "scene.gltf"), "utf8"));
for (const entry of [...gltf.buffers, ...gltf.images]) {
  if (!entry.uri || entry.uri.startsWith("data:")) continue;
  const asset = resolve(modelDir, decodeURIComponent(entry.uri));
  assert.ok(
    existsSync(asset) && statSync(asset).size > 0,
    `3D dependency missing: ${entry.uri}`,
  );
}
assert.ok(
  readFileSync(resolve(modelDir, "license.txt"), "utf8").includes("Yolala1232"),
);
for (const name of ["manrope"]) {
  assert.ok(
    statSync(resolve(publicDir, "fonts", `${name}-latin.woff2`)).size > 1000,
  );
  assert.ok(existsSync(resolve(publicDir, "fonts", `${name}-LICENSE.txt`)));
}
const html = readFileSync(resolve(root, "index.html"), "utf8");
assert.ok(html.includes(profile.email));
assert.ok(!/\.pdf\b|profile\.resume|View resume|Download resume/i.test(html + appText),
  "Resume links must be removed from both the app and its HTML fallback.");
assert.ok(html.includes("Sreelekha Nampally - Software, AI and Data"));
assert.ok(!html.includes("Bhanu") && !html.includes("vite.svg"));
console.log(
  "PASS: 10 projects; role ordering; search edge cases; case-study content; images; resume privacy; all GLTF dependencies; fonts and attribution; page metadata.",
);
