import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PackageCard } from "@/components/PackageCard";
import { caseStudies } from "@/lib/cases";
import { packages } from "@/lib/packages";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />

        <section className="ink-band" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow" style={{ color: "oklch(93% 0.03 148)" }}>
                Hoe het werkt
              </span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Van kennismaking tot livegang</h2>
            </div>
            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              <ProcessTimeline />
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/proces" className="btn btn-secondary" style={{ borderColor: "oklch(98% 0.004 90)", color: "oklch(98% 0.004 90)" }}>
                Bekijk het volledige proces
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "72px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow">Waarom</span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Wat je van mij mag verwachten</h2>
            </div>
            <BenefitsGrid />
          </div>
        </section>

        <section style={{ padding: "72px 0", background: "oklch(93% 0.03 148 / 0.3)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow">Cases</span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Voorbeelden van trajecten</h2>
              <p style={{ fontSize: 14.5, color: "oklch(52% 0.012 265)", marginTop: 12 }}>
                Deze cases zijn illustratief en worden binnenkort vervangen door echte klantverhalen.
              </p>
            </div>
            <div className="grid-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
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
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/diensten" className="nav-link" style={{ fontSize: 14, fontWeight: 600 }}>
                Bekijk ook de losse automatiseringsopties →
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
