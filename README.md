# websites-bouwen

Marketingsite voor het webbureau, generiek gericht op MKB'ers met coaches als
eerste doelgroep (aparte niche-uitwerking mogelijk, zie `/voor-coaches`).
Next.js (App Router) + TypeScript, inline `style={{}}`-styling met
`oklch()`-kleuren (Tailwind alleen voor de reset).

Voor het herbruikbare klant-sjabloon (koppelingen, themasysteem) zie de
aparte `sitekit`-repo.

## Starten

```bash
npm install
npm run dev
```

Draait op [http://localhost:3000](http://localhost:3000).

## Nog open

Bedrijfsgegevens (`src/lib/site.ts`):
- `[BEDRIJFSNAAM]`, `[E-MAILADRES]`, `[TELEFOONNUMMER]`, `[ADRESGEGEVENS]`,
  `[KVK-NUMMER]`, `[BTW-NUMMER]` — nog placeholders, alleen met echte
  bedrijfsgegevens in te vullen.
- `SITE_URL` staat nog op een placeholder-domein.

Cases (`src/lib/cases.ts`):
- 5 illustratieve cases (`isExample: true`) — 2 generiek MKB (fysiotherapie,
  klussenbedrijf) + 3 coach-cases voor `/voor-coaches`. Vervangen door echte
  klantverhalen zodra beschikbaar; `ExampleBadge` kan dan weg.

Privacybeleid (`src/app/privacy/page.tsx`):
- `[DATUM]` (laatst bijgewerkt) nog in te vullen.

HubSpot-koppeling (`src/lib/integrations/hubspot.ts`):
- **Keuze gemaakt**: het bestaande gedeelde Parkmade/merchmark-formulier
  hergebruiken, geen apart formulier. Dat formulier heeft alleen naam/e-mail
  (evt. bestand) als velden — bericht/bedrijfsnaam/pakket/extra's komen dus
  niet mee tenzij dat formulier later wordt uitgebreid.
- Om leads herkenbaar te houden tussen de bedrijven: de naam wordt geprefixt
  met `LEAD_SOURCE_PREFIX` (`src/lib/site.ts`, nu `"[Websites Bouwen]"`) vóór
  het versturen.
- Contact-, offerte- en intakeformulier roepen `submitToHubspot()` al
  daadwerkelijk aan — wacht nog op `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` en
  `NEXT_PUBLIC_HUBSPOT_FORM_ID` in `.env.local` (zie `.env.example`), zelfde
  waardes als bij het Parkmade-formulier.
- Projectintake (`/contact?mode=intake`) staat bewust niet in het publieke
  contact-keuzemenu — die stuurt Mark zelf pas na een toezegging.

Domein/Vercel:
- Naam wordt **Sitegilde** (sitegilde.nl, nog te registreren — beschikbaar
  bevonden bij TransIP). Zodra geregistreerd: `SITE_NAME`/`SITE_URL` in
  `site.ts` bijwerken.
- Lokaal draait de site nu op localhost:3000. Deployen naar Vercel gebeurt
  in een latere stap, na goedkeuring van de lokale versie.

Resend (automatische e-mailopvolging) — **bewust uitgesteld**:
- Doel: automatische opvolgmail(s) voor zowel Parkmade als Sitegilde, als
  goedkoper alternatief vóór een eventuele HubSpot-upgrade naar een betaald
  Marketing Hub-abonnement (nodig voor HubSpot's eigen workflows).
- Twee te bouwen niveaus, later samen te plannen: (1) simpele directe
  bevestigingsmail — snel te bouwen, geen nieuwe infrastructuur; (2) echte
  getimede reeks (dag 0/3/7 e.d.) — vraagt een database + geplande taak
  (Vercel Cron), groter werk.
- Nog nodig zodra dit opgepakt wordt: Resend-account, `RESEND_API_KEY`, een
  geverifieerd verzenddomein (Parkmade-domein + sitegilde.nl zodra
  geregistreerd).

## Al ingevuld (niet meer open)

- Pakketten & extra's (`src/lib/packages.ts`, `src/lib/addons.ts`): echte
  prijzen, getoetst aan de markt en onderling consistent.
- Over mij (`src/app/over-mij/page.tsx`): echte introductietekst.
- Hosting & onderhoud: apart geprijsd, staat bij elk pakket.
