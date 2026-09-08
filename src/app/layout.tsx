import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { WishlistProvider } from "@/lib/wishlist/WishlistContext";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "[BEDRIJFSNAAM] — websites voor MKB'ers";
const description =
  "Websites voor MKB'ers die bezoekers helpen de stap naar een eerste gesprek te zetten, met automatisering waar het scheelt.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "[BEDRIJFSNAAM]",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <WishlistProvider>{children}</WishlistProvider>
      </body>
    </html>
  );
}
