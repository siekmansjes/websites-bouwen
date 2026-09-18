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
  isExample: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "parkmade-configurator-en-koppelingen",
    audience: "mkb-algemeen",
    clientName: "Parkmade",
    sector: "Merchandise & promotiematerialen voor vakantieparken",
    problem:
      "Voor elke aanvraag moest een vakantiepark los contact opnemen om prijzen, opties en een eigen ontwerp te bespreken — geen manier om zelf een assortiment samen te stellen of meteen te zien wat het zou kosten.",
    solution:
      "Een website met live productprijzen, een configurator waarmee een klant zelf producten en een eigen 2D-ontwerp samenstelt, een wensenlijst om die selectie te bewaren, en volledige koppelingen met HubSpot (CRM), agenda (kennismakingsgesprekken) en Moneybird (facturatie) zodat een aanvraag direct compleet en verwerkbaar binnenkomt.",
    result:
      "Een klant stelt zelf een assortiment samen, ziet direct de prijs, en een aanvraag hoeft aan onze kant niet meer handmatig te worden aangevuld of nagevraagd.",
    image: "/cases/parkmade.svg",
    isExample: false,
  },
  {
    slug: "fysiotherapiepraktijk-automatische-intake",
    audience: "mkb-algemeen",
    clientName: "[Voorbeeldklant] — Fysiotherapiepraktijk",
    sector: "Fysiotherapie",
    problem:
      "Nieuwe patiënten belden vaak buiten praktijkuren of stuurden een mail die pas de volgende dag werd gelezen, waardoor de eerste afspraak soms dagen op zich liet wachten.",
    solution:
      "Een website met een intakeformulier en agenda-koppeling, zodat een patiënt direct een moment kan inplannen dat past — zonder telefoontje of wachten op een reactie.",
    result:
      "Sneller een eerste afspraak voor de patiënt, en minder tijd kwijt aan de telefoon voor de praktijk.",
    image: "/cases/fysiotherapiepraktijk.svg",
    isExample: true,
  },
  {
    slug: "klussenbedrijf-meer-aanvragen",
    audience: "mkb-algemeen",
    clientName: "[Voorbeeldklant] — Klussenbedrijf",
    sector: "Verbouw & renovatie",
    problem:
      "De oude website liet wel zien wát het bedrijf deed, maar gaf bezoekers geen duidelijke volgende stap — aanvragen kwamen sporadisch en vaak onvolledig binnen.",
    solution:
      "Een heldere site met duidelijke diensten, voorbeeldwerk en één centraal offerteformulier dat meteen de juiste vraag stelt, zodat elke aanvraag direct bruikbaar is.",
    result:
      "Meer volledige offerteaanvragen, en geen tijd meer kwijt aan doorvragen naar basisinformatie.",
    image: "/cases/klussenbedrijf.svg",
    isExample: true,
  },
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
