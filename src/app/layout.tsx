import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { WishlistProvider } from "@/lib/wishlist/WishlistContext";
import { HubSpotChat } from "@/components/HubSpotChat";
import { CookieNotice } from "@/components/CookieNotice";
import { IS_PRODUCTION, SITE_URL } from "@/lib/site";
import "./globals.css";

const displayFont = Lora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "[BEDRIJFSNAAM], websites voor MKB'ers";
const description =
  "Websites voor MKB'ers die bezoekers helpen de stap naar een eerste gesprek te zetten, met automatisering waar het scheelt.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  // Zolang er geen productiedomein is ingesteld (IS_PRODUCTION), staat de
  // hele site standaard op noindex — elke pagina kan dit overschrijven via
  // zijn eigen `metadata.robots`, maar dat is nu nergens nodig.
  robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "[BEDRIJFSNAAM]",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${displayFont.variable} ${inter.variable}`}>
      <body>
        <WishlistProvider>{children}</WishlistProvider>
        <CookieNotice />
        <HubSpotChat />
      </body>
    </html>
  );
}
