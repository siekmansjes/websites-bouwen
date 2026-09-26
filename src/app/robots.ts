import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Laat crawlers altijd toe (nooit Disallow) — de noindex-status van
 * pagina's die nog niet productie-klaar zijn wordt via de per-pagina
 * `robots`-metadata (zie layout.tsx) geregeld, niet hier. Blokkeren op
 * robots.txt-niveau zou juist verhinderen dat crawlers die noindex-tag
 * ooit lezen.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
