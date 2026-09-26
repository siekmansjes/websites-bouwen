// Centrale bron voor de site-URL, met een duidelijk onderscheid tussen
// productie (het echte domein, zodra geregistreerd) en preview (Vercel-
// previewdeployments of lokaal draaien).
const PRODUCTION_URL = process.env.NEXT_PUBLIC_SITE_URL;
const VERCEL_PREVIEW_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
export const SITE_URL =
  PRODUCTION_URL ?? (VERCEL_PREVIEW_URL ? `https://${VERCEL_PREVIEW_URL}` : "http://localhost:3000");

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

export const SITE_NAME = "[BEDRIJFSNAAM]";
export const CONTACT_EMAIL = "[E-MAILADRES]";
export const CONTACT_PHONE = "[TELEFOONNUMMER]";
export const CONTACT_ADDRESS = "[ADRESGEGEVENS]";
export const KVK_NUMBER = "[KVK-NUMMER]";
export const BTW_NUMBER = "[BTW-NUMMER]";

// Gebruikt om leads herkenbaar te maken in een gedeeld HubSpot-formulier
// (samen met Parkmade) — voor de naam geplakt, zodat het altijd zichtbaar
// is ongeacht welke velden het gedeelde formulier verder heeft. Wordt
// vermoedelijk overbodig zodra er een eigen formulier voor deze site komt
// (zie README, "HubSpot-koppeling").
export const LEAD_SOURCE_PREFIX = "[Websites Bouwen]";
