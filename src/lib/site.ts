// Centrale bron voor de site-URL, met een duidelijk onderscheid tussen
// productie (het echte domein, zodra geregistreerd) en preview (Vercel-
// previewdeployments of lokaal draaien).
// "||" i.p.v. "??": een lege maar wel aanwezige env-var (bv.
// NEXT_PUBLIC_SITE_URL="" in .env.local) moet ook als "niet ingesteld"
// gelden, anders crasht `new URL(SITE_URL)` verderop op een lege string.
const PRODUCTION_URL = process.env.NEXT_PUBLIC_SITE_URL || undefined;
const VERCEL_PREVIEW_URL = process.env.NEXT_PUBLIC_VERCEL_URL || undefined;
export const SITE_URL =
  PRODUCTION_URL || (VERCEL_PREVIEW_URL ? `https://${VERCEL_PREVIEW_URL}` : "http://localhost:3000");

// `IS_PRODUCTION` bepaalt of de site crawlbaar/indexeerbaar is (zie
// robots.ts, sitemap.ts en layout.tsx). Bewust NIET afgeleid van alleen
// NEXT_PUBLIC_SITE_URL — die kan per ongeluk ook in een Preview-omgeving
// terechtkomen (bv. als "gedeeld over alle environments" in Vercel), en dan
// zou een previewdeployment zich alsnog als productie gedragen.
//
// Vereist daarom EXPLICIET:
// 1. NEXT_PUBLIC_ENABLE_INDEXING="true" — zet dit UITSLUITEND in de
//    Production-environment-variabelen van het Vercel-project (niet bij
//    Preview/Development). Dat is de eigenlijke garantie: Vercel scheidt
//    env-vars per environment, dus deze vlag kan niet per ongeluk meelekken
//    naar een preview-deployment.
// 2. Een echt ingestelde NEXT_PUBLIC_SITE_URL (geen placeholder/preview-URL).
// 3. Als extra vangnet: als Vercel's eigen NEXT_PUBLIC_VERCEL_ENV zichtbaar
//    is en expliciet "preview" of "development" aangeeft, wint dat altijd —
//    ook als vlag 1 en 2 al "aan" zouden staan.
//
// Zolang NEXT_PUBLIC_ENABLE_INDEXING niet is gezet, blijft indexering uit —
// dat is bewust de huidige staat, er wordt nu nog niets geïndexeerd.
const explicitlyEnabledForIndexing = process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true";
const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
const isKnownNonProductionDeployment = vercelEnv === "preview" || vercelEnv === "development";

export const IS_PRODUCTION =
  explicitlyEnabledForIndexing && Boolean(PRODUCTION_URL) && !isKnownNonProductionDeployment;

export const SITE_NAME = "Markweb";
export const CONTACT_EMAIL = "info@markweb.nl";
export const CONTACT_PHONE = "[TELEFOONNUMMER]";
export const CONTACT_ADDRESS = "[ADRESGEGEVENS]";
export const KVK_NUMBER = "[KVK-NUMMER]";
export const BTW_NUMBER = "[BTW-NUMMER]";
