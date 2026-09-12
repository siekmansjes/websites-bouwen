import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PackageCard } from "@/components/PackageCard";
import { AddonCard } from "@/components/AddonCard";
import { packages } from "@/lib/packages";
import { addons } from "@/lib/addons";
import { hostingPlan } from "@/lib/hosting";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Pakketten en losse automatiseringsopties voor je website.",
};

export default function DienstenPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 24px" }}>
          <div className="wrap">
            <span className="eyebrow">Diensten</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>Pakketten & automatiseringen</h1>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 14, maxWidth: 620 }}>
              Kies een basispakket, en vul dat naar wens aan met losse automatiseringsopties. De prijzen
              hieronder zijn indicatief — de definitieve prijs bepalen we samen tijdens de kennismaking.
            </p>
          </div>
        </section>

        <section id="pakketten" style={{ padding: "24px 0 72px" }}>
          <div className="wrap grid-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        <section id="hosting" style={{ padding: "0 0 72px" }}>
          <div className="wrap">
            <div
              className="card"
              style={{
                padding: "30px 28px",
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: "1 1 320px" }}>
                <span className="eyebrow">Bij elk pakket</span>
                <h2 style={{ fontSize: 22, marginTop: 8 }}>{hostingPlan.name}</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 8, maxWidth: 480 }}>
                  {hostingPlan.tagline}
                </p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: "1 1 280px" }}>
                {hostingPlan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", gap: 8, fontSize: 14, alignItems: "flex-start" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(42% 0.08 148)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span style={{ color: "oklch(21% 0.015 265)" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div style={{ fontFamily: "var(--font-display), serif", fontSize: 26, fontWeight: 700, flexShrink: 0 }}>
                {hostingPlan.priceLabel}
              </div>
            </div>
          </div>
        </section>

        <section id="automatiseringen" style={{ padding: "24px 0 72px", background: "oklch(93% 0.03 148 / 0.25)" }}>
          <div className="wrap">
            <div style={{ maxWidth: 620, marginBottom: 36 }}>
              <span className="eyebrow">Losse opties</span>
              <h2 style={{ fontSize: 30, marginTop: 10 }}>Automatiseringen</h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
                Voeg toe wat voor jouw praktijk zinvol is — via de knop &ldquo;Wensenlijst&rdquo; kun je een
                selectie maken en die direct meesturen bij je offerteaanvraag.
              </p>
            </div>
            <div className="grid-3">
              {addons.map((addon) => (
                <AddonCard key={addon.id} addon={addon} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
