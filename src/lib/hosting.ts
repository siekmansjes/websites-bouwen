export type HostingPlan = {
  name: string;
  priceLabel: string;
  tagline: string;
  features: string[];
};

export const hostingPlan: HostingPlan = {
  name: "Hosting & onderhoud",
  priceLabel: "€19 / maand",
  tagline:
    "Komt bovenop elk pakket, vanaf livegang — zodat je site online, veilig en actueel blijft zonder dat je er zelf naar hoeft om te kijken.",
  features: [
    "Snelle, betrouwbare hosting en domeinbeheer",
    "Beveiligingsupdates en monitoring",
    "Automatische back-ups",
    "Kleine tekst- of inhoudswijzigingen op aanvraag",
  ],
};

export const HOSTING_PRICE_NOTE = "+ €19/mnd hosting & onderhoud";
