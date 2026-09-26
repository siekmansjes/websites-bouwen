import type { MetadataRoute } from "next";
import { IS_PRODUCTION, SITE_URL } from "@/lib/site";
import { caseStudies } from "@/lib/cases";

const STATIC_PATHS = ["/", "/diensten", "/proces", "/over-mij", "/contact", "/gratis-voorbeeld", "/privacy"];

/**
 * Zolang er geen echt productiedomein is ingesteld (`NEXT_PUBLIC_SITE_URL`),
 * bevat de sitemap bewust niets — er is dan nog niets dat bedoeld is om
 * publiek geïndexeerd te worden.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_PRODUCTION) return [];

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const caseEntries = caseStudies
    .filter((caseStudy) => !caseStudy.isExample)
    .map((caseStudy) => ({
      url: `${SITE_URL}/cases/${caseStudy.slug}`,
      lastModified: new Date(),
    }));

  return [...staticEntries, ...caseEntries];
}
