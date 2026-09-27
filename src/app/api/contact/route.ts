import { createLead, escapeHtml } from "@/lib/integrations/hubspot-crm";

function badRequest(message: string) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const token = process.env.HUBSPOT_PRIVATE_API_TOKEN;
  if (!token) {
    console.error("HUBSPOT_PRIVATE_API_TOKEN ontbreekt in de serveromgeving.");
    return Response.json({ ok: false, error: "Formulier kan momenteel niet worden verwerkt." }, { status: 500 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return badRequest("Ongeldige aanvraag.");
  }

  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const bericht = String(body.bericht ?? "").trim();

  if (!naam) return badRequest("Naam is verplicht.");
  if (!email || !email.includes("@")) return badRequest("Een geldig e-mailadres is verplicht.");
  if (!bericht) return badRequest("Bericht is verplicht.");

  const result = await createLead(token, {
    naam,
    email,
    dealName: `Markweb – Bericht – ${naam}`,
    noteBody: `<strong>Bericht via het contactformulier op Markweb</strong><br><br>${escapeHtml(bericht).replace(/\n/g, "<br>")}`,
  });

  if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: result.status });
  return Response.json({ ok: true });
}
