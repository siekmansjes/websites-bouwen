"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WishlistIndicator } from "./WishlistIndicator";
import { MobileNav } from "./MobileNav";
import { SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        borderBottom: "1px solid oklch(90% 0.006 90)",
        background: "oklch(100% 0 0)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        boxShadow: scrolled ? "0 4px 16px oklch(21% 0.015 265 / 0.08)" : "0 0 0 transparent",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 700,
            fontSize: 21,
            color: "oklch(21% 0.015 265)",
          }}
        >
          {SITE_NAME}
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <nav
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14, fontWeight: 500 }}
          >
            <Link href="/cases" className="nav-link" style={{ color: "oklch(21% 0.015 265)" }}>
              Cases
            </Link>
            <Link href="/proces" className="nav-link" style={{ color: "oklch(21% 0.015 265)" }}>
              Proces
            </Link>
            <Link href="/diensten" className="nav-link" style={{ color: "oklch(21% 0.015 265)" }}>
              Diensten
            </Link>
            <Link href="/over-mij" className="nav-link" style={{ color: "oklch(21% 0.015 265)" }}>
              Over mij
            </Link>
            <Link href="/contact" className="nav-link" style={{ color: "oklch(21% 0.015 265)" }}>
              Contact
            </Link>
          </nav>
          <WishlistIndicator />
          <Link href="/contact" className="btn btn-primary header-cta" style={{ padding: "10px 18px", fontSize: 13.5 }}>
            Gratis kennismaking
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
