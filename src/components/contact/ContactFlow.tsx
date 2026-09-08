"use client";

import { useRouter } from "next/navigation";
import { ModeChoice } from "./ModeChoice";
import { ContactForm } from "./ContactForm";
import { OfferteBuilder } from "./OfferteBuilder";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

type Mode = "keuze" | "contact" | "offerte";

/**
 * De modus wordt bewust NIET in losse React state bijgehouden, maar afgeleid
 * van de `?mode=`-queryparam (server-side gelezen in page.tsx, hier als
 * `initialMode` binnengekomen). Elke wissel gebeurt via `router.push` naar
 * een nieuwe URL, zodat de browser een echte history-entry aanmaakt.
 */
export function ContactFlow({ initialMode, initialPackageId }: { initialMode?: string; initialPackageId?: string }) {
  const router = useRouter();

  const mode: Mode = initialMode === "contact" || initialMode === "offerte" ? initialMode : "keuze";

  function goToMode(next: Mode) {
    router.push(next === "keuze" ? "/contact" : `/contact?mode=${next}`);
  }

  function goBack() {
    router.push("/contact");
  }

  if (mode === "contact") return <ContactForm onBack={goBack} />;
  if (mode === "offerte") return <OfferteBuilder onBack={goBack} initialPackageId={initialPackageId} />;

  return (
    <div>
      <div style={{ maxWidth: 640, marginBottom: 40 }}>
        <span className="eyebrow">Contact</span>
        <h1 style={{ fontSize: 36, marginTop: 10 }}>Hoe wilt u contact opnemen?</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "oklch(52% 0.012 265)", marginTop: 10 }}>
          Kies wat het beste past — beide komen bij mij terecht.
        </p>
      </div>
      <ModeChoice onSelect={goToMode} />

      <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, fontSize: 14.5, color: "oklch(52% 0.012 265)" }}>
        <span>Liever meteen direct contact?</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <span>·</span>
        <a href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a>
      </div>
    </div>
  );
}
