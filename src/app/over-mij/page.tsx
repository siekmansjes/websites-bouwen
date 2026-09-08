import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BenefitsGrid } from "@/components/BenefitsGrid";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Waarom ik websites bouw voor MKB'ers.",
};

export default function OverMijPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 64px" }}>
          <div className="wrap" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Over mij</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>Mark — websites voor MKB&apos;ers</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                Voordat ik websites voor anderen bouwde, bouwde ik ze voor mezelf. Met Parkmade lever ik
                bedrukte merchandise en verkoopdisplays aan meer dan 15 vakantieparken, en eerder werkte ik
                als merchandise-professional voor onder meer de Efteling en grote retailers als Jumbo en
                Albert Heijn. Die achtergrond leerde me wat een website voor een klein bedrijf eigenlijk moet
                doen. Niet mooi zijn om mooi te zijn, maar aanvragen opleveren en tijd schelen. Precies dat
                neem ik mee naar elk traject dat ik voor een klant bouw.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                Ik werk bewust met een beperkt aantal klanten tegelijk, zodat er echt tijd is voor
                persoonlijke aandacht. Geen ontwerp uit een sjabloon, maar een site die past bij hoe jij werkt
                en wat jouw klanten nodig hebben. Ik begin met coaches als doelgroep, en breid van daaruit uit
                naar andere MKB&apos;ers.
              </p>
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/contact" className="btn btn-primary">
                Plan een gratis kennismaking
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "24px 0 72px", background: "oklch(93% 0.03 148 / 0.25)" }}>
          <div className="wrap">
            <div style={{ maxWidth: 620, marginBottom: 36 }}>
              <span className="eyebrow">Waarom</span>
              <h2 style={{ fontSize: 28, marginTop: 10 }}>Wat je van mij mag verwachten</h2>
            </div>
            <BenefitsGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
