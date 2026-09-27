/**
 * Server-only HubSpot CRM-koppeling (Private App, niet de publieke Forms
 * API). Zelfde bewezen patroon als bij Parkmade (zelfde portal, 149249462):
 * contact upserten, optioneel bedrijf koppelen, een Deal aanmaken in de
 * gedeelde "parkmade verkoop"-pipeline (eigen pipeline zou een betaalde
 * HubSpot-upgrade vereisen), en de aanvraag als notitie aan de Deal hangen.
 * Nooit vanuit de browser aanroepen — HUBSPOT_PRIVATE_API_TOKEN is een
 * geheime sleutel met schrijftoegang tot de hele CRM.
 */
const HUBSPOT_API_BASE = "https://api.hubapi.com";

// Gedeelde pipeline met Parkmade (eigen pipeline vereist een betaalde
// HubSpot-upgrade) — "Markweb" in elke dealnaam zodat ze uit elkaar te
// houden zijn tussen Parkmade- en Markweb-deals.
export const DEAL_PIPELINE_ID = "default"; // "parkmade verkoop"
export const DEAL_FIRST_STAGE_ID = "5992244466"; // "Nieuwe aanvraag"
export const DEAL_OWNER_ID = "98437228"; // Mark Siekmans

export function hubspotHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Koppelt twee objecten via HubSpot's default-associatie, zodat we geen
// specifieke associationTypeId hoeven te gokken/onderhouden.
export async function associateDefault(
  token: string,
  fromType: string,
  fromId: string,
  toType: string,
  toId: string,
  label: string,
) {
  const res = await fetch(
    `${HUBSPOT_API_BASE}/crm/v4/objects/${fromType}/${fromId}/associations/default/${toType}/${toId}`,
    { method: "PUT", headers: hubspotHeaders(token) },
  );
  if (!res.ok) {
    console.error(`Associatie mislukt (${label}):`, res.status, await res.text());
  }
}

// Bedrijf opzoeken op exacte naam, en aanmaken als het nog niet bestaat.
async function findOrCreateCompany(token: string, bedrijfsnaam: string): Promise<string | undefined> {
  const searchRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/companies/search`, {
    method: "POST",
    headers: hubspotHeaders(token),
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName: "name", operator: "EQ", value: bedrijfsnaam }] }],
      properties: ["name"],
      limit: 1,
    }),
  });

  if (!searchRes.ok) {
    console.error("HubSpot company-zoekopdracht mislukt:", searchRes.status, await searchRes.text());
    return undefined;
  }

  const searchData = await searchRes.json();
  const existingId: string | undefined = searchData?.results?.[0]?.id;
  if (existingId) return existingId;

  const createRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/companies`, {
    method: "POST",
    headers: hubspotHeaders(token),
    body: JSON.stringify({ properties: { name: bedrijfsnaam } }),
  });

  if (!createRes.ok) {
    console.error("HubSpot company aanmaken mislukt:", createRes.status, await createRes.text());
    return undefined;
  }

  const createData = await createRes.json();
  return createData?.id;
}

export type LeadInput = {
  naam: string;
  email: string;
  bedrijfsnaam?: string;
  dealName: string;
  noteBody: string;
};

export type LeadResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

/**
 * Contact upserten (op e-mail), optioneel bedrijf koppelen, Deal aanmaken
 * in de gedeelde pipeline, en de aanvraag als notitie aan de Deal hangen.
 * Contact/bedrijf-stappen zijn best-effort (falen ze, dan gaat de Deal
 * gewoon door); de Deal zelf mag niet stilzwijgend falen, dat is het hele
 * doel van een inzending.
 */
export async function createLead(token: string, input: LeadInput): Promise<LeadResult> {
  const properties: Record<string, string> = { email: input.email, firstname: input.naam };
  if (input.bedrijfsnaam) properties.company = input.bedrijfsnaam;

  let contactId: string | undefined;
  try {
    const upsertRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/contacts/batch/upsert`, {
      method: "POST",
      headers: hubspotHeaders(token),
      body: JSON.stringify({ inputs: [{ idProperty: "email", id: input.email, properties }] }),
    });
    if (!upsertRes.ok) {
      console.error("HubSpot contact-upsert mislukt:", upsertRes.status, await upsertRes.text());
      return { ok: false, status: 502, error: "Versturen is niet gelukt, probeer het later opnieuw." };
    }
    const upsertData = await upsertRes.json();
    contactId = upsertData?.results?.[0]?.id;
  } catch (err) {
    console.error("HubSpot contact-upsert gooide een fout:", err);
    return { ok: false, status: 502, error: "Versturen is niet gelukt, probeer het later opnieuw." };
  }

  let companyId: string | undefined;
  if (contactId && input.bedrijfsnaam) {
    try {
      companyId = await findOrCreateCompany(token, input.bedrijfsnaam);
      if (companyId) {
        await associateDefault(token, "contacts", contactId, "companies", companyId, "contact-company");
      }
    } catch (err) {
      console.error("Bedrijf aanmaken/koppelen gooide een fout:", err);
    }
  }

  let dealId: string | undefined;
  try {
    const dealRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/deals`, {
      method: "POST",
      headers: hubspotHeaders(token),
      body: JSON.stringify({
        properties: {
          dealname: input.dealName,
          pipeline: DEAL_PIPELINE_ID,
          dealstage: DEAL_FIRST_STAGE_ID,
          hubspot_owner_id: DEAL_OWNER_ID,
        },
      }),
    });
    if (!dealRes.ok) {
      console.error("HubSpot deal aanmaken mislukt:", dealRes.status, await dealRes.text());
      return { ok: false, status: 502, error: "Versturen is niet gelukt, probeer het later opnieuw." };
    }
    const dealData = await dealRes.json();
    dealId = dealData?.id;
  } catch (err) {
    console.error("HubSpot deal aanmaken gooide een fout:", err);
    return { ok: false, status: 502, error: "Versturen is niet gelukt, probeer het later opnieuw." };
  }

  if (dealId && contactId) {
    await associateDefault(token, "deals", dealId, "contacts", contactId, "deal-contact");
  }
  if (dealId && companyId) {
    await associateDefault(token, "deals", dealId, "companies", companyId, "deal-company");
  }

  if (dealId) {
    try {
      const noteRes = await fetch(`${HUBSPOT_API_BASE}/crm/v3/objects/notes`, {
        method: "POST",
        headers: hubspotHeaders(token),
        body: JSON.stringify({
          properties: { hs_note_body: input.noteBody, hs_timestamp: Date.now().toString() },
        }),
      });
      if (!noteRes.ok) {
        console.error("Notitie aanmaken mislukt:", noteRes.status, await noteRes.text());
      } else {
        const noteData = await noteRes.json();
        const noteId = noteData?.id;
        if (noteId) await associateDefault(token, "notes", noteId, "deals", dealId, "note-deal");
      }
    } catch (err) {
      console.error("Notitie toevoegen gooide een fout:", err);
    }
  }

  return { ok: true };
}
