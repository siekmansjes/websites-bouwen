import { createLead, escapeHtml } from "@/lib/integrations/hubspot-crm";

function badRequest(message: string) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_PRIVATE_API_TOKEN;
  if (!token) {
    console.error("HUBSPOT_PRIVATE_API_TOKEN ontbreekt in de serveromgeving.");
    return Response.json({ ok: false, error: "Aanvraag kan momenteel niet worden verwerkt." }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return badRequest("Ongeldige aanvraag.");
  }

  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const bedrijfsnaam = String(body.bedrijfsnaam ?? "").trim();
  const omschrijving = String(body.omschrijving ?? "").trim();

  if (!naam) return badRequest("Naam is verplicht.");
  if (!email || !email.includes("@")) return badRequest("Een geldig e-mailadres is verplicht.");
  if (!bedrijfsnaam) return badRequest("Bedrijfsnaam is verplicht.");
  if (!omschrijving) return badRequest("Omschrijving is verplicht.");

  const result = await createLead(token, {
    naam,
    email,
    bedrijfsnaam,
    dealName: `Markweb – Gratis voorbeeld – ${bedrijfsnaam}`,
    noteBody: [
      "<strong>Aanvraag gratis voorbeeldwebsite via Markweb</strong><br><br>",
      `Bedrijf: ${escapeHtml(bedrijfsnaam)}<br><br>`,
      `<strong>Wat doet het bedrijf</strong><br>${escapeHtml(omschrijving).replace(/\n/g, "<br>")}`,
    ].join(""),
  });

  if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: result.status });
  return Response.json({ ok: true });
}
