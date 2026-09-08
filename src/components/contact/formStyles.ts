import type { CSSProperties } from "react";

export const inputStyle: CSSProperties = {
  height: 42,
  padding: "0 12px",
  border: "1px solid oklch(90% 0.006 90)",
  borderRadius: 5,
  background: "oklch(100% 0 0)",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 15,
  width: "100%",
};

export const labelStyle: CSSProperties = {
  fontSize: 13.5,
  fontWeight: 600,
};
