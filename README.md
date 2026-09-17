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
- **Keuze gemaakt**: apart HubSpot-formulier voor dit bedrijf, niet het
  gedeelde Parkmade/merchmark-formulier hergebruiken (andere velden, andere
  pipeline).
- Contact-, offerte- en intakeformulier roepen `submitToHubspot()` al
  daadwerkelijk aan — wacht nog op `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` en
  `NEXT_PUBLIC_HUBSPOT_FORM_ID` in `.env.local` (zie `.env.example`) zodra
  het formulier in HubSpot is aangemaakt.
- Projectintake (`/contact?mode=intake`) staat bewust niet in het publieke
  contact-keuzemenu — die stuurt Mark zelf pas na een toezegging.

Domein/Vercel:
- Lokaal draait de site nu op localhost:3000. Deployen naar Vercel gebeurt
  in een latere stap, na goedkeuring van de lokale versie.

## Al ingevuld (niet meer open)

- Pakketten & extra's (`src/lib/packages.ts`, `src/lib/addons.ts`): echte
  prijzen, getoetst aan de markt en onderling consistent.
- Over mij (`src/app/over-mij/page.tsx`): echte introductietekst.
- Hosting & onderhoud: apart geprijsd, staat bij elk pakket.
