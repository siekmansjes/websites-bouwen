import Link from "next/link";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

const columnHeadingStyle = {
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  color: "oklch(21% 0.015 265)",
};

const footerLinkStyle = { fontSize: 14, color: "oklch(52% 0.012 265)" };

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid oklch(90% 0.006 90)" }}>
      <div className="wrap footer-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 700, fontSize: 18 }}>{SITE_NAME}</span>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "oklch(52% 0.012 265)", maxWidth: 260 }}>
            Websites voor coaches die bezoekers helpen de stap naar een eerste gesprek te zetten.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={columnHeadingStyle}>Site</span>
          <Link href="/#cases" className="nav-link" style={footerLinkStyle}>
            Cases
          </Link>
          <Link href="/proces" className="nav-link" style={footerLinkStyle}>
            Proces
          </Link>
          <Link href="/diensten" className="nav-link" style={footerLinkStyle}>
            Diensten
          </Link>
          <Link href="/over-mij" className="nav-link" style={footerLinkStyle}>
            Over mij
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={columnHeadingStyle}>Diensten</span>
          <Link href="/diensten#pakketten" className="nav-link" style={footerLinkStyle}>
            Pakketten
          </Link>
          <Link href="/diensten#automatiseringen" className="nav-link" style={footerLinkStyle}>
            Automatiseringen
          </Link>
          <Link href="/contact" className="nav-link" style={footerLinkStyle}>
            Offerte aanvragen
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={columnHeadingStyle}>Contact</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="nav-link" style={footerLinkStyle}>
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE}`} className="nav-link" style={footerLinkStyle}>
            {CONTACT_PHONE}
          </a>
          <Link href="/contact" className="btn btn-secondary" style={{ padding: "8px 16px", fontSize: 13.5, alignSelf: "flex-start", marginTop: 4 }}>
            Gratis kennismaking
          </Link>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p style={{ fontSize: 13, color: "oklch(52% 0.012 265)" }}>© 2026 {SITE_NAME}</p>
        <Link href="/privacy" className="nav-link" style={{ fontSize: 13, color: "oklch(52% 0.012 265)" }}>
          Privacybeleid
        </Link>
      </div>
    </footer>
  );
}
