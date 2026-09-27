"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_EVENT, hasChatConsent } from "@/lib/consent";

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

// Laadt het HubSpot-embedscript (incl. de chatwidget, ingericht in HubSpot
// zelf onder Conversaties → Chatflows) pas na expliciete cookietoestemming.
// Dit portal is EU1-gehost, vandaar het eu1-subdomein.
export function HubSpotChat() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- eenmalige hydration-lezing bij mount, geen cascaderende update.
    setConsented(hasChatConsent());
    const onChange = () => setConsented(hasChatConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!consented || !HUBSPOT_PORTAL_ID) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`//js-eu1.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}
