import Link from "next/link";
import type { PackageTier } from "@/lib/packages";

export function PackageCard({ pkg }: { pkg: PackageTier }) {
  return (
    <div
      className="card"
      style={{
        padding: "30px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        borderColor: pkg.highlighted ? "oklch(42% 0.08 148)" : "oklch(90% 0.006 90)",
        borderWidth: pkg.highlighted ? 2 : 1,
        position: "relative",
      }}
    >
      {pkg.highlighted && (
        <span
          style={{
            position: "absolute",
            top: -12,
            left: 26,
            background: "oklch(42% 0.08 148)",
            color: "oklch(98% 0.004 90)",
            fontSize: 11.5,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 999,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
          }}
        >
          Meest gekozen
        </span>
      )}
      <div>
        <h3 style={{ fontSize: 21 }}>{pkg.name}</h3>
        <p style={{ fontSize: 13.5, color: "oklch(52% 0.012 265)", marginTop: 4 }}>{pkg.tagline}</p>
      </div>
      <div style={{ fontFamily: "var(--font-display), serif", fontSize: 28, fontWeight: 700 }}>{pkg.priceLabel}</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {pkg.features.map((feature) => (
          <li key={feature} style={{ display: "flex", gap: 8, fontSize: 14, alignItems: "flex-start" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(42% 0.08 148)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span style={{ color: "oklch(21% 0.015 265)" }}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={`/contact?mode=offerte&pakket=${pkg.id}`} className={pkg.highlighted ? "btn btn-primary" : "btn btn-secondary"} style={{ justifyContent: "center" }}>
        Kies {pkg.name}
      </Link>
    </div>
  );
}
