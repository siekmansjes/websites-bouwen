import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PackageCard } from "@/components/PackageCard";
import { AddonCard } from "@/components/AddonCard";
import { packages } from "@/lib/packages";
import { addons } from "@/lib/addons";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Pakketten en losse automatiseringsopties voor je coachwebsite.",
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
