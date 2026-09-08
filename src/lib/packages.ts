export type PackageTier = {
  id: string;
  name: string;
  priceLabel: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const packages: PackageTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "Vanaf €[PRIJS]",
    tagline: "Een professionele, complete website om online zichtbaar te zijn.",
    features: [
      "Tot 5 pagina's",
      "Modern, mobielvriendelijk ontwerp",
      "Contactformulier",
      "Basis zoekmachine-optimalisatie",
      "Oplevering binnen [AANTAL] weken",
    ],
  },
  {
    id: "groei",
    name: "Groei",
    priceLabel: "Vanaf €[PRIJS]",
    tagline: "Voor coaches die actief nieuwe klanten willen werven.",
    features: [
      "Alles uit Starter",
      "Tot 10 pagina's, incl. cases/blog",
      "Geautomatiseerd intakeformulier",
      "Agenda-koppeling voor kennismakingsgesprekken",
      "Uitgebreide zoekmachine-optimalisatie",
    ],
    highlighted: true,
  },
  {
    id: "op-maat",
    name: "Op maat",
    priceLabel: "Op aanvraag",
    tagline: "Voor een praktijk met specifieke wensen of meerdere coaches.",
    features: [
      "Alles uit Groei",
      "Volledig maatwerk ontwerp",
      "Koppelingen met je eigen CRM/tools",
      "Meerdere coaches/agenda's",
      "Doorlopende ondersteuning na livegang",
    ],
  },
];
