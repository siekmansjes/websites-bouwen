/**
 * CRM-koppeling — HubSpot. Gebruikt de publieke HubSpot Forms API — geen
 * geheime API-key nodig, portal-ID en form-ID zijn niet gevoelig, mag dus
 * rechtstreeks vanuit de browser aangeroepen worden.
 *
 * Dit portal (149249462) is EU1-gehost (zie de embedcode: js-eu1.hsforms.net)
 * — de Forms-API moet daarom via het eu1-endpoint, anders faalt de inzending.
 *
 * NEXT_PUBLIC_HUBSPOT_PORTAL_ID / NEXT_PUBLIC_HUBSPOT_FORM_ID in .env.local.
 */
const HUBSPOT_SUBMIT_BASE_URL = "https://api-eu1.hsforms.com/submissions/v3/integration/submit";

export async function submitToHubspot(fields: Record<string, string>) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    throw new Error("HubSpot niet geconfigureerd: NEXT_PUBLIC_HUBSPOT_PORTAL_ID / NEXT_PUBLIC_HUBSPOT_FORM_ID ontbreken.");
  }

  const response = await fetch(
    `${HUBSPOT_SUBMIT_BASE_URL}/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`HubSpot-aanvraag mislukt: ${response.status}`);
  }
}
