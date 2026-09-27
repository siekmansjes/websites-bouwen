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
- **Klaar**: eigen, dedicated formulier aangemaakt binnen dezelfde
  HubSpot-portal als Parkmade (`149249462`), niet meer het gedeelde
  Parkmade/merchmark-formulier (merchmark is gestopt, en dat formulier had
  toch al alleen naam/e-mail als velden). Form-ID en portal-ID staan in
  `.env.local` (zie `.env.example`).
- Dit portal is **EU1-gehost** — de Forms-API gebruikt daarom
  `api-eu1.hsforms.com` in plaats van het standaard `api.hsforms.com`
  (zie `HUBSPOT_SUBMIT_BASE_URL` in `hubspot.ts`).
- De naam per formulier wordt geprefixt met een label (`[Offerte]`,
  `[Gratis voorbeeld]`, `[Projectintake]`) zodat leads in HubSpot meteen
  herkenbaar zijn per formulier — dit is nu puur informatief, niet meer
  nodig om bedrijven uit elkaar te houden zoals bij het gedeelde formulier.
- Nog niet gecontroleerd: of het formulier in HubSpot zelf daadwerkelijk
  alle velden bevat die de code verstuurt (`naam`, `email`, `bericht`,
  `bedrijfsnaam`, `opmerkingen`, `pakket`, `extras`) — Mark heeft het
  formulier aangemaakt met die interne veldnamen, maar dit is niet
  operationeel getest met een echte inzending.
- Projectintake (`/contact?mode=intake`) staat bewust niet in het publieke
  contact-keuzemenu — die stuurt Mark zelf pas na een toezegging. Stuurt
  wel extra velden (praktijknaam, branche, etc.) die niet in de hierboven
  genoemde formulierveldenlijst zaten — nog te checken of die aankomen.
- **Nog te doen**: chatflow aanmaken in HubSpot (Conversaties → Chatflows),
  embedcode aanleveren zodat die net als bij Parkmade (`HubSpotChat.tsx`)
  ingebouwd kan worden.

Domein/Vercel:
- Naam wordt **Markweb** (markweb.nl, was nog vrij bij TransIP-check op
  26-09-2026 — nog te registreren). Logo staat al in `public/logo.png`.
  Zodra het domein geregistreerd is: `SITE_NAME`/`SITE_URL` in `site.ts`
  bijwerken, en `NEXT_PUBLIC_SITE_URL` in de Vercel-productieomgeving
  zetten (zie `.env.example` voor de indexering-stappen die daarbij horen).
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
