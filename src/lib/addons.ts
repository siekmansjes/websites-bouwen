export type AddonItem = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
};

/**
 * Voorbeeldlijst van losse automatiseringsopties — door de gebruiker later
 * te vervangen/aan te vullen met het definitieve aanbod.
 */
export const addons: AddonItem[] = [
  {
    id: "intakeformulier",
    name: "Automatisch intakeformulier",
    description:
      "Een slim intakeformulier dat de juiste vragen stelt en de antwoorden overzichtelijk naar je toestuurt, zodat je voorbereid aan een eerste gesprek begint.",
    priceLabel: "€[PRIJS]",
  },
  {
    id: "agenda-koppeling",
    name: "Agenda-koppeling",
    description:
      "Bezoekers plannen direct een kennismakingsgesprek in jouw agenda, zonder mailwisseling over beschikbaarheid.",
    priceLabel: "€[PRIJS]",
  },
  {
    id: "crm-koppeling",
    name: "CRM-koppeling",
    description:
      "Nieuwe aanvragen komen automatisch binnen in het CRM dat je al gebruikt, inclusief alle ingevulde intake-informatie.",
    priceLabel: "€[PRIJS]",
  },
  {
    id: "chatbot",
    name: "Chatbot / FAQ-assistent",
    description:
      "Beantwoordt veelgestelde vragen van bezoekers direct op de site, ook buiten kantooruren.",
    priceLabel: "Op aanvraag",
  },
  {
    id: "e-mailreeks",
    name: "Automatische e-mailreeks",
    description:
      "Een reeks opvolgmails na een aanvraag of intake, zodat niemand tussen wal en schip valt.",
    priceLabel: "€[PRIJS]",
  },
  {
    id: "facturatie-koppeling",
    name: "Facturatie-koppeling",
    description:
      "Na een geboekt traject wordt automatisch een conceptfactuur klaargezet in je boekhoudpakket.",
    priceLabel: "Op aanvraag",
  },
];
