"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";

// De HubSpot-chatwidget is niet-functioneel en wordt pas geladen na een
// expliciete keuze hier — zie HubSpotChat.
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- eenmalige hydration-lezing bij mount, geen cascaderende update.
    setVisible(getConsent() === null);
  }, []);

  function choose(choice: "accepted" | "declined") {
    setConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        padding: 16,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        className="card"
        style={{
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          maxWidth: 720,
          boxShadow: "0 8px 24px oklch(21% 0.015 265 / 0.12)",
          pointerEvents: "auto",
        }}
      >
        <p style={{ fontSize: 13.5, lineHeight: 1.5, margin: 0, flex: "1 1 320px", color: "oklch(52% 0.012 265)" }}>
          Deze website gebruikt, alleen met uw toestemming, een chatfunctie (HubSpot) om uw vragen te
          beantwoorden. Zonder toestemming werkt de site gewoon, alleen zonder chat. Lees meer in ons{" "}
          <Link href="/privacy" style={{ textDecoration: "underline" }}>
            privacybeleid
          </Link>
          .
        </p>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <button type="button" onClick={() => choose("declined")} className="btn btn-secondary">
            Alleen noodzakelijk
          </button>
          <button type="button" onClick={() => choose("accepted")} className="btn btn-primary">
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
