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
    tagline: "Een simpele, professionele eerste indruk online.",
    features: [
      "Tot 3 pagina's",
      "Modern, mobielvriendelijk ontwerp",
      "Contactformulier",
      "Basis zoekmachine-optimalisatie",
      "Oplevering binnen 2 weken",
    ],
  },
  {
    id: "groei",
    name: "Groei",
    priceLabel: "Vanaf €749",
    tagline: "Wat de meeste MKB'ers nodig hebben om actief nieuwe klanten te werven.",
    features: [
      "Alles uit Starter",
      "Tot 10 pagina's, incl. cases/blog",
      "Geautomatiseerd intakeformulier",
      "Agenda-koppeling (Cal.com) voor kennismakingsgesprekken",
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
