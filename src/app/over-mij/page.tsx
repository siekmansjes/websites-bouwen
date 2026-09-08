import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Over mij",
  description: "Waarom ik me richt op websites voor coaches.",
};

export default function OverMijPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 72px" }}>
          <div className="wrap" style={{ maxWidth: 680 }}>
            <span className="eyebrow">Over mij</span>
            <h1 style={{ fontSize: 40, marginTop: 10 }}>[Naam] — websites voor coaches</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                [Hier komt een persoonlijke introductie: achtergrond, waarom de keuze voor coaches als
                doelgroep, en wat de aanpak onderscheidt van een algemeen webbureau.]
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(21% 0.015 265)" }}>
                [Ruimte voor een korte alinea over werkwijze: bijvoorbeeld dat er bewust wordt samengewerkt
                met een klein aantal klanten tegelijk, zodat er echt tijd is voor persoonlijke aandacht.]
              </p>
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href="/contact" className="btn btn-primary">
                Plan een gratis kennismaking
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
