export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Alleen vragen met een antwoord dat letterlijk terug te voeren is op al
 * gepubliceerde pakket-/hosting-/beloftetekst elders in de codebase (niet op
 * eigen aannames over hoe dat beleid er in de praktijk uit zou zien).
 * Bewust weggelaten, ook al lijken ze voor de hand liggend: zelf inhoud
 * aanpassen (geen bevestigd CMS-/wijzigingsbeleid), softwarekosten van
 * gekoppelde systemen (geen vastgelegde afspraak), domein/e-mail bij
 * overdracht, wie teksten/foto's aanlevert — die staan in de
 * beslissingenlijst totdat er een keuze is gemaakt.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Wat zijn de kosten — eenmalig en terugkerend?",
    answer:
      "Je betaalt één keer voor de bouw van de website (afhankelijk van het pakket), en daarnaast €19 per maand voor hosting, beveiligingsupdates, back-ups en kleine inhoudswijzigingen op aanvraag. Losse automatiseringen zijn eenmalig geprijsd.",
  },
  {
    question: "Wat is het verschil tussen de pakketten?",
    answer:
      "Starter is een compacte, professionele eerste indruk. Groei voegt meer pagina's toe plus een geautomatiseerd intakeformulier en agenda-koppeling. Compleet is voor maatwerk: eigen ontwerp, koppelingen met je eigen tools en ruimte voor meerdere teamleden. Bekijk de volledige vergelijking op de pakkettenpagina.",
  },
  {
    question: "Wat gebeurt er met eigendom, en als ik met onderhoud stop?",
    answer:
      "De website en de broncode zijn en blijven jouw eigendom. Stop je ooit met hosting & onderhoud bij mij, dan blijft de site gewoon jouw eigendom — er is geen abonnement dat je moet aanhouden om je eigen website te kunnen gebruiken.",
  },
  {
    question: "Word ik beter vindbaar in Google?",
    answer:
      "Elk pakket bevat SEO-basis (Starter) of uitgebreide SEO (Groei/Compleet): technisch correct, snel en goed gestructureerd. Dat is de basis om vindbaar te kunnen zijn — ik geef geen garanties over een positie in Google of een vermelding in AI-antwoorden, dat hangt van veel meer factoren af.",
  },
  {
    question: "Kan ik later uitbreiden?",
    answer:
      "Ja. Je begint met wat je nu nodig hebt en breidt later uit met extra pagina's, losse automatiseringen of een hoger pakket.",
  },
];
