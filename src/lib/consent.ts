// Simpele, lokale cookie-toestemming: geen consent-management-platform,
// alleen een keuze in localStorage die bepaalt of de HubSpot-chatwidget
// geladen mag worden (die zet niet-functionele cookies). Zelfde patroon als
// bij Parkmade.
export const CONSENT_STORAGE_KEY = "markweb:cookie-consent:v1";
export const CONSENT_EVENT = "markweb:consent-changed";

export type ConsentChoice = "accepted" | "declined";

export function getConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw === "accepted" || raw === "declined" ? raw : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Opslag niet beschikbaar: de keuze geldt dan alleen voor dit bezoek.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function hasChatConsent(): boolean {
  return getConsent() === "accepted";
}
