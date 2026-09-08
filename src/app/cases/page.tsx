import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Cases",
  description: "Voorbeelden van websites gebouwd voor coaches.",
};

export default function CasesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 24px" }}>
          <div className="wrap">
            <span className="eyebrow">Cases</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>Voorbeelden van trajecten</h1>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 14, maxWidth: 560 }}>
              Deze cases zijn illustratief en laten zien hoe een traject eruit kan zien — ze worden binnenkort
              vervangen door echte klantverhalen.
            </p>
          </div>
        </section>
        <section style={{ padding: "24px 0 72px" }}>
          <div className="wrap grid-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
