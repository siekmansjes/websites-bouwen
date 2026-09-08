import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_NAME, CONTACT_EMAIL, KVK_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: `Hoe ${SITE_NAME} omgaat met persoonsgegevens die via deze website worden verzameld.`,
};

const sectionHeadingStyle = { fontSize: 21, marginTop: 40, marginBottom: 12 };
const paragraphStyle = { fontSize: 15.5, lineHeight: 1.65, color: "oklch(52% 0.012 265)" };
const listStyle = { ...paragraphStyle, margin: "8px 0 0", paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 4 };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <section style={{ padding: "56px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Privacybeleid</span>
          <h1 style={{ fontSize: 40, marginTop: 10 }}>Privacybeleid</h1>
          <p style={{ fontSize: 14, color: "oklch(52% 0.012 265)", marginTop: 10 }}>Laatst bijgewerkt: [DATUM]</p>

          <p style={{ ...paragraphStyle, marginTop: 24 }}>
            Dit privacybeleid legt uit welke persoonsgegevens {SITE_NAME} verzamelt via deze website, waarom,
            en wat uw rechten daarbij zijn.
          </p>

          <h2 style={sectionHeadingStyle}>1. Wie zijn wij</h2>
          <p style={paragraphStyle}>
            {SITE_NAME}, ingeschreven bij de KvK onder nummer {KVK_NUMBER}, is verantwoordelijk voor de
            verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Vragen? Neem contact op via{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2 style={sectionHeadingStyle}>2. Welke gegevens verzamelen wij</h2>
          <p style={paragraphStyle}>Via het contact- en offerteformulier op deze website kunnen de volgende gegevens worden verzameld:</p>
          <ul style={listStyle}>
            <li>Naam en (praktijk)naam</li>
            <li>E-mailadres</li>
            <li>Bericht, gekozen pakket en eventueel geselecteerde automatiseringsopties</li>
          </ul>

          <h2 style={sectionHeadingStyle}>3. Waarom verwerken wij deze gegevens</h2>
          <p style={paragraphStyle}>
            Om contact op te nemen naar aanleiding van uw bericht of offerteaanvraag, en om een passend
            voorstel te kunnen opstellen.
          </p>

          <h2 style={sectionHeadingStyle}>4. Bewaartermijn</h2>
          <p style={paragraphStyle}>
            Gegevens worden niet langer bewaard dan nodig voor het doel waarvoor ze zijn verzameld, of zolang
            de wet dit vereist.
          </p>

          <h2 style={sectionHeadingStyle}>5. Delen met derden</h2>
          <p style={paragraphStyle}>
            Uw gegevens worden niet verkocht aan derden. [Aan te vullen zodra bekend is welke tools/CRM
            worden gebruikt om aanvragen te verwerken.]
          </p>

          <h2 style={sectionHeadingStyle}>6. Uw rechten</h2>
          <p style={paragraphStyle}>
            U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen. Neem
            hiervoor contact op via <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2 style={sectionHeadingStyle}>7. Cookies</h2>
          <p style={paragraphStyle}>
            Deze website gebruikt momenteel geen analytische of trackingcookies.
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
