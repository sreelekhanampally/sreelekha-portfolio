// The standard clipboard API requires a secure context. Keep a fallback for local previews.
export async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // A browser can deny the API while still allowing a user-triggered copy action.
    }
  }
  const previousFocus = document.activeElement;
  const field = document.createElement("textarea");
  field.value = text;
  field.readOnly = true;
  field.tabIndex = -1;
  field.setAttribute("aria-label", "Copy text");
  Object.assign(field.style, {
    position: "fixed",
    opacity: "0",
    top: "0",
    left: "0",
    pointerEvents: "none",
  });
  const container = document.querySelector("dialog[open]") || document.body;
  container.appendChild(field);
  let copied = false;
  try {
    field.focus({ preventScroll: true });
    field.select();
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  } finally {
    field.remove();
    previousFocus?.focus?.({ preventScroll: true });
  }
  return copied;
}
