"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/cases", label: "Cases" },
  { href: "/proces", label: "Proces" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          background: "none",
          border: "none",
          padding: 6,
          cursor: "pointer",
          display: "flex",
          color: "oklch(21% 0.015 265)",
        }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 76,
            left: 0,
            right: 0,
            background: "oklch(100% 0 0)",
            borderBottom: "1px solid oklch(90% 0.006 90)",
            padding: "8px 20px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: "oklch(21% 0.015 265)", fontSize: 16, fontWeight: 500, padding: "10px 0" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ justifyContent: "center", marginTop: 8 }}
          >
            Gratis kennismaking
          </Link>
        </div>
      )}
    </div>
  );
}
