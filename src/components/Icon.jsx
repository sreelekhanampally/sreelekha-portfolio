import React from "react";
export default function Icon({ name, size = 20 }) {
  const path =
    name === "close"
      ? "m6 6 12 12M6 18 18 6"
      : name === "menu"
        ? "M4 6h16M4 12h16M4 18h16"
        : null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path ? (
        <path d={path} />
      ) : (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      )}
    </svg>
  );
}
