import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ProcessPreview } from "@/components/ProcessPreview";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PackageCard } from "@/components/PackageCard";
import { getCasesByAudience } from "@/lib/cases";
import { packages } from "@/lib/packages";
import { addons } from "@/lib/addons";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME} — websites voor coaches`,
  description:
    "Websites voor loopbaan- en persoonlijke coaches die bezoekers helpen de stap naar een eerste gesprek te zetten, met automatisering waar het scheelt.",
};

export default function VoorCoachesPage() {
  const coachCases = getCasesByAudience("coaches");

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="Websites voor coaches"
          title="Een website die mensen helpt de stap naar jou te zetten"
          description="Voor loopbaan- en persoonlijke coaches: een heldere website met een duidelijk proces, eerlijke pakketten en automatisering die je scheelt in administratie — zodat jij weer tijd hebt om te coachen."
        />

        <section id="cases" style={{ padding: "24px 0 72px" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow">Cases</span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Zo ziet dat er in de praktijk uit</h2>
              <p style={{ fontSize: 14.5, color: "oklch(52% 0.012 265)", marginTop: 12 }}>
                Deze cases zijn illustratief en worden binnenkort vervangen door echte klantverhalen.
              </p>
            </div>
            <div className="grid-3">
              {coachCases.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <section className="ink-band" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow" style={{ color: "oklch(93% 0.03 148)" }}>
                Hoe het werkt
              </span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Van kennismaking tot livegang</h2>
            </div>
            <ProcessPreview />
          </div>
        </section>

        <section id="pakketten" style={{ padding: "72px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow">Pakketten</span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Kies wat bij je praktijk past</h2>
            </div>
            <div className="grid-3">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
            <div className="card" style={{ marginTop: 40, padding: "26px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: "1 1 320px" }}>
                <h3 style={{ fontSize: 18 }}>Vul aan met losse automatiseringen</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {addons.slice(0, 4).map((addon) => (
                    <span
                      key={addon.id}
                      style={{
                        fontSize: 13,
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: "oklch(93% 0.03 148)",
                        color: "oklch(34% 0.075 148)",
                      }}
                    >
                      {addon.name}
                    </span>
                  ))}
                  <span style={{ fontSize: 13, padding: "5px 4px", color: "oklch(52% 0.012 265)" }}>en meer</span>
                </div>
              </div>
              <Link href="/diensten#automatiseringen" className="btn btn-secondary" style={{ flexShrink: 0 }}>
                Bekijk automatiseringen
              </Link>
            </div>
          </div>
        </section>

        <section className="ink-band" style={{ padding: "64px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: 32, marginBottom: 16 }}>Klaar voor een website die voor je werkt?</h2>
            <p style={{ fontSize: 15, color: "oklch(93% 0.03 148)", marginBottom: 28, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Plan een gratis, vrijblijvende kennismaking — dan bekijken we samen wat bij jouw praktijk past.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Plan een gratis kennismaking
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
