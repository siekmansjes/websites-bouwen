import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          // next/og (Satori) kan geen oklch() parsen — hex-benaderingen van
          // dezelfde merkkleuren, alleen voor deze gegenereerde afbeelding.
          background: "#1a1d24",
          color: "#fafaf8",
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#cfe8d6",
          }}
        >
          Websites voor MKB&apos;ers
        </span>
        <span style={{ fontSize: 64, fontWeight: 700, marginTop: 24, lineHeight: 1.15 }}>{SITE_NAME}</span>
        <span style={{ fontSize: 26, marginTop: 24, color: "#cdded1" }}>
          Heldere pakketten, eerlijke prijzen en automatisering die tijd scheelt.
        </span>
      </div>
    ),
    { ...size },
  );
}
