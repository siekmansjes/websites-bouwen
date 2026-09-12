export type AddonItem = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
};

export const addons: AddonItem[] = [
  {
    id: "intakeformulier",
    name: "Automatisch intakeformulier",
    description:
      "Een slim intakeformulier dat de juiste vragen stelt en de antwoorden overzichtelijk naar je toestuurt, zodat je voorbereid aan een eerste gesprek begint.",
    priceLabel: "€150",
  },
  {
    id: "agenda-koppeling",
    name: "Agenda-koppeling",
    description:
      "Bezoekers plannen direct een kennismakingsgesprek in jouw agenda, zonder mailwisseling over beschikbaarheid.",
    priceLabel: "€125",
  },
  {
    id: "crm-koppeling",
    name: "CRM-koppeling",
    description:
      "Nieuwe aanvragen komen automatisch binnen in het CRM dat je al gebruikt, inclusief alle ingevulde intake-informatie.",
    priceLabel: "Vanaf €225",
  },
  {
    id: "chatbot",
    name: "Chatbot / FAQ-assistent",
    description:
      "Beantwoordt veelgestelde vragen van bezoekers direct op de site, ook buiten kantooruren.",
    priceLabel: "Vanaf €275",
  },
  {
    id: "e-mailreeks",
    name: "Automatische e-mailreeks",
    description:
      "Een reeks opvolgmails na een aanvraag of intake, zodat niemand tussen wal en schip valt.",
    priceLabel: "€125",
  },
  {
    id: "facturatie-koppeling",
    name: "Facturatie-koppeling",
    description:
      "Na een geboekt traject wordt automatisch een conceptfactuur klaargezet in je boekhoudpakket.",
    priceLabel: "Vanaf €225",
  },
];
