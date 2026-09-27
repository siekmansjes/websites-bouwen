import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/Hero";
import { ProcessPreview } from "@/components/ProcessPreview";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PackageCard } from "@/components/PackageCard";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { Faq } from "@/components/Faq";
import { caseStudies } from "@/lib/cases";
import { packages } from "@/lib/packages";
import { addons } from "@/lib/addons";

function ComingSoonCaseCard() {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderStyle: "dashed",
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          background: "oklch(96% 0.006 90)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="oklch(70% 0.006 90)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 4v14" />
        </svg>
      </div>
      <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <span
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 999,
            background: "oklch(96% 0.006 90)",
            color: "oklch(52% 0.012 265)",
          }}
        >
          Volgt binnenkort
        </span>
        <h3 style={{ fontSize: 18, color: "oklch(52% 0.012 265)" }}>Nog een praktijkcase</h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(52% 0.012 265)" }}>
          Hier komt binnenkort een volgend project bij.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const realCases = caseStudies.filter((caseStudy) => !caseStudy.isExample).slice(0, 3);
  const placeholderCount = Math.max(0, 3 - realCases.length);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          eyebrow="Websites voor MKB'ers"
          title="Een professionele website voor je bedrijf, met een pakket dat past"
          description="Ik bouw websites voor MKB-bedrijven: drie duidelijke pakketten, eerlijke prijzen en optionele automatisering die je tijd scheelt, zodat jij je kan focussen op je bedrijf in plaats van op administratie."
          primaryCta={{ label: "Vraag een voorstel aan", href: "/contact?mode=offerte" }}
          secondaryCta={{ label: "Bekijk pakketten", href: "#pakketten" }}
        />

        {realCases.length > 0 && (
          <section id="cases" style={{ padding: "0 0 72px" }}>
            <div className="wrap">
              <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 36px" }}>
                <span className="eyebrow">Cases</span>
                <h2 style={{ fontSize: 32, marginTop: 10 }}>Zo ziet dat er in de praktijk uit</h2>
              </div>
              <div className="grid-3">
                {realCases.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
                {Array.from({ length: placeholderCount }).map((_, index) => (
                  <ComingSoonCaseCard key={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: "0 0 72px", background: "oklch(93% 0.03 148 / 0.25)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 36px" }}>
              <span className="eyebrow">Waarom</span>
              <h2 style={{ fontSize: 32, marginTop: 10 }}>Wat je van mij mag verwachten</h2>
            </div>
            <BenefitsGrid />
          </div>
        </section>

        <section id="pakketten" style={{ padding: "72px 0 40px" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow">Pakketten</span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Kies wat bij je bedrijf past</h2>
              <p style={{ fontSize: 14.5, color: "oklch(52% 0.012 265)", marginTop: 12 }}>
                Drie pakketten, eenmalig geprijsd. Hosting & onderhoud komt daar apart bovenop.
              </p>
            </div>
            <div className="grid-3">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "24px 0 72px" }}>
          <div className="wrap">
            <div className="card" style={{ padding: "26px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: "1 1 320px" }}>
                <h3 style={{ fontSize: 18 }}>Extra mogelijkheden: losse automatiseringen</h3>
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

        <section className="ink-band" style={{ padding: "64px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 44px" }}>
              <span className="eyebrow" style={{ color: "oklch(93% 0.03 148)" }}>
                Hoe het werkt
              </span>
              <h2 style={{ fontSize: 34, marginTop: 10 }}>Van kennismaking tot livegang</h2>
            </div>
            <ProcessPreview />
            <div style={{ textAlign: "center", marginTop: 32, fontSize: 14, color: "oklch(85% 0.02 150)" }}>
              Benieuwd wie er achter deze website-bouw zit?{" "}
              <Link href="/over-mij">Lees meer over mij</Link>.
            </div>
          </div>
        </section>

        <section id="faq" style={{ padding: "72px 0" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 36px" }}>
              <span className="eyebrow">Veelgestelde vragen</span>
              <h2 style={{ fontSize: 32, marginTop: 10 }}>Wat je vooraf wil weten</h2>
            </div>
            <Faq />
          </div>
        </section>

        <section style={{ padding: "0 0 72px" }}>
          <div className="wrap">
            <div
              className="card"
              style={{
                padding: "26px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1 1 380px" }}>
                <span className="eyebrow">Gratis & vrijblijvend</span>
                <h3 style={{ fontSize: 19, marginTop: 6 }}>Liever eerst zien hoe het eruitziet?</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 6 }}>
                  Vertel in een paar zinnen wat je bedrijf doet, en binnen 48 uur staat er een echte, werkende
                  voorbeeldwebsite in je mailbox. Kost niets, geen verplichtingen.
                </p>
              </div>
              <Link href="/gratis-voorbeeld" className="btn btn-secondary" style={{ flexShrink: 0 }}>
                Vraag je gratis voorbeeld aan
              </Link>
            </div>
          </div>
        </section>

        <section className="ink-band" style={{ padding: "64px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 style={{ fontSize: 32, marginBottom: 16 }}>Klaar voor een website die voor je werkt?</h2>
            <p style={{ fontSize: 15, color: "oklch(93% 0.03 148)", marginBottom: 28, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Vraag een voorstel aan, of stuur eerst een bericht als je nog vragen hebt.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact?mode=offerte" className="btn btn-primary">
                Vraag een voorstel aan
              </Link>
              <Link href="/contact?mode=contact" className="btn btn-secondary" style={{ borderColor: "oklch(98% 0.004 90)", color: "oklch(98% 0.004 90)" }}>
                Stuur een bericht
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
