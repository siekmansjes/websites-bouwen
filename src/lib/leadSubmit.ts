"use client";

/**
 * Stuurt formuliergegevens naar een eigen server-route (bv. /api/contact),
 * die op zijn beurt via de HubSpot Private-App-CRM-API een contact, deal en
 * notitie aanmaakt. Vervangt de directe, publieke HubSpot Forms API-aanroep
 * — die kon geen Deal aanmaken.
 */
export async function submitLead(endpoint: string, payload: Record<string, unknown>) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Versturen mislukt: ${response.status}`);
  }
}
