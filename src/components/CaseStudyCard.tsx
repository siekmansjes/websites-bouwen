import Link from "next/link";
import { ExampleBadge } from "./ExampleBadge";
import type { CaseStudy } from "@/lib/cases";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/cases/${caseStudy.slug}`}
      className="card hover-card"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden", color: "inherit" }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          background: "oklch(93% 0.03 148)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="oklch(34% 0.075 148)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 4v14" />
        </svg>
      </div>
      <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <ExampleBadge />
        <h3 style={{ fontSize: 18 }}>{caseStudy.clientName}</h3>
        <span style={{ fontSize: 13, color: "oklch(52% 0.012 265)" }}>{caseStudy.sector}</span>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>{caseStudy.result}</p>
      </div>
    </Link>
  );
}
