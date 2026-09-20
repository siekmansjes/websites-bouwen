import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PreviewRequestForm } from "@/components/contact/PreviewRequestForm";

export const metadata: Metadata = {
  title: "Gratis voorbeeldwebsite",
  description: "Vertel in een paar zinnen wat je bedrijf doet, en krijg binnen 48 uur een echte, werkende voorbeeldwebsite — gratis en vrijblijvend.",
};

export default function GratisVoorbeeldPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section style={{ padding: "56px 0 24px" }}>
          <div className="wrap grid-2" style={{ alignItems: "start", gap: 56 }}>
            <div style={{ maxWidth: 480 }}>
              <span className="eyebrow">Gratis & vrijblijvend</span>
              <h1 style={{ fontSize: 38, marginTop: 10 }}>Zie eerst hoe jouw website eruit kan zien</h1>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "oklch(52% 0.012 265)", marginTop: 14 }}>
                Vertel in een paar zinnen wat je bedrijf doet. Binnen <strong>48 uur</strong> bouw ik een
                echte, werkende voorbeeldwebsite voor jouw bedrijf — geen mockup, een echte site die je zelf
                kan bekijken.
              </p>
              <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Kost niets, geen verplichtingen achteraf",
                  "Binnen 48 uur een link in je mailbox",
                  "Bevalt het? Dan bouwen we 'm samen verder af",
                  "Bevalt het niet? Dan kost het je niets",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, fontSize: 14.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(42% 0.08 148)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PreviewRequestForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
