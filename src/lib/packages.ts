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
    priceLabel: "Vanaf €395",
    tagline: "Een professionele, complete website om online zichtbaar te zijn.",
    features: [
      "Tot 5 pagina's",
      "Modern, mobielvriendelijk ontwerp",
      "Contactformulier",
      "Basis zoekmachine-optimalisatie",
      "Oplevering binnen 2 weken",
    ],
  },
  {
    id: "groei",
    name: "Groei",
    priceLabel: "Vanaf €695",
    tagline: "Voor bedrijven die actief nieuwe klanten willen werven.",
    features: [
      "Alles uit Starter",
      "Tot 10 pagina's, incl. cases/blog",
      "Geautomatiseerd intakeformulier",
      "Agenda-koppeling voor kennismakingsgesprekken",
      "Uitgebreide zoekmachine-optimalisatie",
      "Oplevering binnen 3 weken",
    ],
    highlighted: true,
  },
  {
    id: "op-maat",
    name: "Compleet",
    priceLabel: "Vanaf €1.195",
    tagline: "Voor een bedrijf met specifieke wensen of meerdere teamleden.",
    features: [
      "Alles uit Groei",
      "Volledig maatwerk ontwerp",
      "Koppelingen met je eigen CRM/tools",
      "Tot 3 teamleden/agenda's",
      "30 dagen gratis nazorg na livegang",
      "Oplevering in overleg, meestal 4-6 weken",
    ],
  },
];
