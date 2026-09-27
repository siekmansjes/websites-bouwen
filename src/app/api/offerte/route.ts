import { createLead, escapeHtml } from "@/lib/integrations/hubspot-crm";

function badRequest(message: string) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_PRIVATE_API_TOKEN;
  if (!token) {
    console.error("HUBSPOT_PRIVATE_API_TOKEN ontbreekt in de serveromgeving.");
    return Response.json({ ok: false, error: "Offerte kan momenteel niet worden verwerkt." }, { status: 500 });
  }

  let body: {
    naam?: string;
    email?: string;
    bedrijfsnaam?: string;
    opmerkingen?: string;
    pakket?: string;
    extras?: string[];
  };
  try {
    body = await request.json();
  } catch {
    return badRequest("Ongeldige aanvraag.");
  }

  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const bedrijfsnaam = String(body.bedrijfsnaam ?? "").trim();
  const opmerkingen = String(body.opmerkingen ?? "").trim();
  const pakket = String(body.pakket ?? "").trim();
  const extras = Array.isArray(body.extras) ? body.extras.filter((item) => typeof item === "string") : [];

  if (!naam) return badRequest("Naam is verplicht.");
  if (!email || !email.includes("@")) return badRequest("Een geldig e-mailadres is verplicht.");
  if (!pakket) return badRequest("Kies een pakket.");

  const noteParts = [
    "<strong>Offerteaanvraag via Markweb</strong><br><br>",
    `Pakket: ${escapeHtml(pakket)}<br>`,
  ];
  if (extras.length > 0) {
    noteParts.push(`Geselecteerde extra's: ${escapeHtml(extras.join(", "))}<br>`);
  }
  if (opmerkingen) {
    noteParts.push(`<br><strong>Opmerkingen</strong><br>${escapeHtml(opmerkingen).replace(/\n/g, "<br>")}`);
  }

  const result = await createLead(token, {
    naam,
    email,
    bedrijfsnaam: bedrijfsnaam || undefined,
    dealName: bedrijfsnaam
      ? `Markweb – Offerteaanvraag – ${bedrijfsnaam} – ${naam}`
      : `Markweb – Offerteaanvraag – ${naam}`,
    noteBody: noteParts.join(""),
  });

  if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: result.status });

  // pakket + extra_opties als losse contact-properties bijwerken, zodat ze
  // ook op het contact zelf zichtbaar zijn (niet alleen in de notitie).
  try {
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        inputs: [
          {
            idProperty: "email",
            id: email,
            properties: { pakket, extra_opties: extras.join(", ") },
          },
        ],
      }),
    });
  } catch (err) {
    console.error("Pakket/extra_opties bijwerken op contact gooide een fout:", err);
  }

  return Response.json({ ok: true });
}
