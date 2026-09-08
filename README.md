# websites-bouwen

Marketingsite voor het webbureau, gericht op coaches (loopbaan-/persoonlijke
coaching) als eerste doelgroep. Next.js (App Router) + TypeScript, inline
`style={{}}`-styling met `oklch()`-kleuren (Tailwind alleen voor de reset).

## Starten

```bash
npm install
npm run dev
```

Draait op [http://localhost:3000](http://localhost:3000).

## Nog in te vullen

Bedrijfsgegevens (`src/lib/site.ts`):
- `[BEDRIJFSNAAM]`, `[DOMEIN]`, `[E-MAILADRES]`, `[TELEFOONNUMMER]`,
  `[ADRESGEGEVENS]`, `[KVK-NUMMER]`, `[BTW-NUMMER]`

Cases (`src/lib/cases.ts`):
- De 3 voorbeeldcases zijn illustratief (`isExample: true`) — vervangen door
  echte klantverhalen zodra beschikbaar. De `ExampleBadge` op elke case kan
  dan weg.

Pakketten & automatiseringen (`src/lib/packages.ts`, `src/lib/addons.ts`):
- `[PRIJS]` per pakket/add-on invullen.
- `[AANTAL]` (levertijd Starter-pakket) invullen.
- De automatiseringenlijst is een voorbeeldset — aanvullen/aanpassen naar het
  definitieve aanbod.

Over mij (`src/app/over-mij/page.tsx`):
- `[Naam]` en de introductietekst invullen.

Privacybeleid (`src/app/privacy/page.tsx`):
- `[DATUM]` (laatst bijgewerkt) invullen.

Offerte-/contactformulier (`src/components/contact/ContactForm.tsx`,
`src/components/contact/OfferteBuilder.tsx`):
- Verstuurt nog niet echt iets door (gemarkeerd met `TODO`-comments) — wacht
  op een keuze: HubSpot in hetzelfde account als Parkmade (met een eigen
  pipeline/stage/eigenaar-ID) of een apart account/CRM voor dit bedrijf.

Domein/Vercel:
- Lokaal draait de site nu op localhost:3000. Deployen naar Vercel gebeurt
  in een latere stap, na goedkeuring van de lokale versie.
