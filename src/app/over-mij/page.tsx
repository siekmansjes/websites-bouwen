import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BenefitsGrid } from "@/components/BenefitsGrid";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Waarom ik websites bouw voor MKB'ers.",
  alternates: { canonical: "/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 64px" }}>
          <div className="wrap" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Over mij</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>Mark, websites voor MKB&apos;ers</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                Ik bouw al jaren websites, en zet die ervaring nu gericht in voor het MKB. Want een website
                hoort niet al snel duizenden euro&apos;s te kosten, en je hoort al helemaal geen abonnement
                nodig te hebben om je eigen website te mogen blijven gebruiken. Bij mij blijft je website
                gewoon van jou.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                Vooral bij startende bedrijven is die grote investering vooraf onnodig. Je wilt gewoon
                professioneel online kunnen, zonder dat het meteen een risico wordt. Daarom werk ik met
                heldere pakketten en eerlijke prijzen, zodat je precies weet waar je aan toe bent.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                Ik werk bewust met een beperkt aantal klanten tegelijk, zodat er echt tijd is voor
                persoonlijke aandacht. Geen ontwerp uit een sjabloon, maar een site die past bij hoe jij werkt
                en wat jouw klanten nodig hebben, of je nu coach bent, een praktijk runt of een ander
                MKB-bedrijf hebt.
              </p>
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/contact?mode=contact" className="btn btn-primary">
                Stuur een bericht
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
