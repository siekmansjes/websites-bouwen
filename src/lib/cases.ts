export type CaseStudy = {
  slug: string;
  clientName: string;
  sector: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  /** Doelgroep-label, gebruikt om cases te filteren op een doelgroep-landingspagina (bv. "coaches"). */
  audience: string;
  /** Markeert deze case als voorbeeldcontent — nog te vervangen door een echte case. */
  isExample: true;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loopbaancoach-website-met-intake",
    audience: "coaches",
    clientName: "[Voorbeeldklant] — Loopbaancoach",
    sector: "Loopbaancoaching",
    problem:
      "Potentiële klanten vonden de oude website via Google, maar wisten na het lezen niet goed hoe een traject eruitzag of wat het zou kosten — veel bezoekers haakten af zonder contact op te nemen.",
    solution:
      "Een nieuwe site met een helder stappenplan, drie duidelijke pakketten en een intakeformulier dat automatisch de eerste kennismaking inplant, zodat een bezoeker binnen twee minuten een afspraak in de agenda heeft staan.",
    result:
      "Meer aanvragen die meteen de juiste verwachtingen hebben over aanpak en investering, en minder tijd kwijt aan heen-en-weer mailen voor een eerste afspraak.",
    image: "/cases/loopbaancoach.svg",
    isExample: true,
  },
  {
    slug: "persoonlijk-coach-zichtbaarheid",
    audience: "coaches",
    clientName: "[Voorbeeldklant] — Persoonlijk coach",
    sector: "Coaching bij persoonlijke ontwikkeling",
    problem:
      "Een gedreven coach met sterke mond-tot-mondreclame, maar zonder online aanwezigheid die dat vertrouwen weerspiegelde — de site zag er gedateerd uit en werkte matig op mobiel.",
    solution:
      "Een moderne, rustige website die de werkwijze en persoonlijkheid van de coach centraal zet, met echte klantverhalen en een duidelijke eerste stap richting een kennismakingsgesprek.",
    result:
      "Een site die past bij het niveau van de coaching zelf, en die nieuwe klanten vertrouwen geeft nog vóór het eerste gesprek.",
    image: "/cases/persoonlijk-coach.svg",
    isExample: true,
  },
  {
    slug: "coachpraktijk-met-automatisering",
    audience: "coaches",
    clientName: "[Voorbeeldklant] — Coachpraktijk (2 coaches)",
    sector: "Loopbaan- en teamcoaching",
    problem:
      "Twee coaches deelden één agenda en verwerkten aanvragen nog volledig handmatig via e-mail, wat tijd kostte en soms tot dubbele boekingen leidde.",
    solution:
      "Een website met geautomatiseerde intake en agenda-koppeling, zodat een aanvraag automatisch bij de juiste coach terechtkomt en een voorstel voor een eerste gesprek al klaarstaat.",
    result:
      "Minder administratief werk per aanvraag, en meer tijd voor het coachen zelf in plaats van het plannen ervan.",
    image: "/cases/coachpraktijk.svg",
    isExample: true,
  },
];

/** Cases voor een specifieke doelgroep-landingspagina (bv. "coaches"). */
export function getCasesByAudience(audience: string): CaseStudy[] {
  return caseStudies.filter((caseStudy) => caseStudy.audience === audience);
}
