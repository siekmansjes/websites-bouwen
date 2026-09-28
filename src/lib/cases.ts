export type CaseStudy = {
  slug: string;
  clientName: string;
  sector: string;
  /** Optioneel: leeg laten (nog niet zetten) zolang de inhoud nog niet is aangeleverd — toont dan een "volgt nog"-melding i.p.v. verzonnen tekst. */
  problem?: string;
  solution?: string;
  result?: string;
  /** Optioneel: overschrijft de standaardkop "Het probleem" (bv. "De wens" als er geen probleem maar een wensenlijst is). */
  problemHeading?: string;
  /** Optioneel: overschrijft de standaardkop "De oplossing" (bv. "De uitvoering"). */
  solutionHeading?: string;
  /** Alleen zetten als er een echte foto in public/cases/ staat. */
  image?: string;
  /** Optioneel: extra detailfoto's (bv. van het opgeleverde werk). Leeg tonen we een placeholder als de case geen voorbeeldcontent is. */
  detailImages?: string[];
  /** Doelgroep-label, gebruikt om cases te filteren op een doelgroep-landingspagina (bv. "coaches"). */
  audience: string;
  /** Markeert deze case als voorbeeldcontent — nog te vervangen door een echte case. */
  isExample: boolean;
  /** Concrete, zelf geobserveerde functionaliteiten — alleen items die ik op de live site heb gezien, niet alleen in code. */
  capabilities?: string[];
  /** Optioneel: link naar de publiek bereikbare website, alleen zetten als die daadwerkelijk live staat. */
  liveUrl?: string;
};

/**
 * Interne verificatienotitie bij Parkmade (28-09-2026, niet publiek tonen):
 * live op https://vakantiepark-website.vercel.app/ (parkmade.nl zelf is nog
 * een geparkeerd TransIP-domein, niet de werkende site). Op de live site
 * zelf gezien en dus bevestigd: productoverzicht met per aantal zichtbare
 * staffelprijzen (/prijzen), wensenlijst/samplebox (ook bevestigd via de
 * eigen cookiemelding van de site), offerteformulier met naam/bedrijfsnaam/
 * e-mail/telefoon + optioneel logo-upload. NIET bevestigd, alleen in de
 * broncode van de vakantiepark-website-repo aangetroffen (dus niet
 * operationeel getest, daarom hier niet als functionaliteit vermeld): of de
 * formulieren daadwerkelijk in HubSpot binnenkomen. NIET in de code
 * aangetroffen (dus niet gebouwd): een 2D-ontwerpconfigurator, een
 * agenda-koppeling (Cal.com), een Moneybird-facturatiekoppeling.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "parkmade",
    audience: "mkb-algemeen",
    clientName: "Parkmade",
    sector: "Merchandise & promotiematerialen voor vakantieparken",
    isExample: false,
    liveUrl: "https://vakantiepark-website.vercel.app/",
    problemHeading: "De wens",
    solutionHeading: "De uitvoering",
    problem:
      "Vakantieparken moesten voor merchandise vaak op meerdere plekken zoeken en telkens los contact opnemen om prijzen en mogelijkheden te bespreken. De wens was om dat te vereenvoudigen: alles op één plek kunnen regelen, in plaats van overal apart naar prijzen en opties te moeten vragen. Ook moesten bestellen makkelijker en de prijzen transparanter worden dan bij bestaande aanbieders.",
    solution:
      "Een website met een productoverzicht waarin de prijzen per aantal direct zichtbaar zijn, een wensenlijst om producten te verzamelen, en een offerteformulier dat die volledige selectie in één keer als aanvraag verstuurt. Bij twijfel over de kwaliteit kan een vakantiepark eerst een samplebox bestellen, voordat er een grotere bestelling wordt geplaatst.",
    capabilities: [
      "Productoverzicht per categorie, met staffelprijzen per aantal direct zichtbaar, geen prijs hoeven opvragen",
      "Wensenlijst: producten verzamelen, bewaard per browser, blijft behouden tussen paginabezoeken",
      "Samplebox te bestellen bij twijfel over kwaliteit",
      "Offerteformulier dat de samengestelde productlijst in één keer als aanvraag verstuurt, met naam, bedrijfsnaam, e-mail en telefoon",
    ],
    result:
      "Een vakantiepark regelt nu alles op één plek: assortiment bekijken, prijzen direct zien, eventueel eerst een samplebox aanvragen, en de hele selectie in één keer als offerteaanvraag versturen in plaats van dat steeds apart te moeten navragen.",
    image: "/cases/parkmade-desktop-v2.png",
  },
  {
    slug: "leanne-vis-coaching-website",
    audience: "coaches",
    clientName: "Leanne Vis",
    sector: "Coaching",
    isExample: false,
    image: "/cases/leannevis-logo.webp",
    // leannevis.nl toont nu nog een geparkeerde TransIP-pagina, geen
    // werkende site (gecontroleerd 27-09-2026) — daarom geen liveUrl.
    // Probleem/oplossing/resultaat volgen zodra aangeleverd.
  },
  {
    slug: "fysiotherapiepraktijk-automatische-intake",
    audience: "mkb-algemeen",
    clientName: "[Voorbeeldklant], Fysiotherapiepraktijk",
    sector: "Fysiotherapie",
    problem:
      "Nieuwe patiënten belden vaak buiten praktijkuren of stuurden een mail die pas de volgende dag werd gelezen, waardoor de eerste afspraak soms dagen op zich liet wachten.",
    solution:
      "Een website met een intakeformulier en agenda-koppeling, zodat een patiënt direct een moment kan inplannen dat past, zonder telefoontje of wachten op een reactie.",
    result:
      "Sneller een eerste afspraak voor de patiënt, en minder tijd kwijt aan de telefoon voor de praktijk.",
    isExample: true,
  },
  {
    slug: "klussenbedrijf-meer-aanvragen",
    audience: "mkb-algemeen",
    clientName: "[Voorbeeldklant], Klussenbedrijf",
    sector: "Verbouw & renovatie",
    problem:
      "De oude website liet wel zien wát het bedrijf deed, maar gaf bezoekers geen duidelijke volgende stap. Aanvragen kwamen sporadisch en vaak onvolledig binnen.",
    solution:
      "Een heldere site met duidelijke diensten, voorbeeldwerk en één centraal offerteformulier dat meteen de juiste vraag stelt, zodat elke aanvraag direct bruikbaar is.",
    result:
      "Meer volledige offerteaanvragen, en geen tijd meer kwijt aan doorvragen naar basisinformatie.",
    isExample: true,
  },
  {
    slug: "loopbaancoach-website-met-intake",
    audience: "coaches",
    clientName: "[Voorbeeldklant], Loopbaancoach",
    sector: "Loopbaancoaching",
    problem:
      "Potentiële klanten vonden de oude website via Google, maar wisten na het lezen niet goed hoe een traject eruitzag of wat het zou kosten. Veel bezoekers haakten af zonder contact op te nemen.",
    solution:
      "Een nieuwe site met een helder stappenplan, drie duidelijke pakketten en een intakeformulier dat automatisch de eerste kennismaking inplant, zodat een bezoeker binnen twee minuten een afspraak in de agenda heeft staan.",
    result:
      "Meer aanvragen die meteen de juiste verwachtingen hebben over aanpak en investering, en minder tijd kwijt aan heen-en-weer mailen voor een eerste afspraak.",
    isExample: true,
  },
  {
    slug: "persoonlijk-coach-zichtbaarheid",
    audience: "coaches",
    clientName: "[Voorbeeldklant], Persoonlijk coach",
    sector: "Coaching bij persoonlijke ontwikkeling",
    problem:
      "Een gedreven coach met sterke mond-tot-mondreclame, maar zonder online aanwezigheid die dat vertrouwen weerspiegelde. De site zag er gedateerd uit en werkte matig op mobiel.",
    solution:
      "Een moderne, rustige website die de werkwijze en persoonlijkheid van de coach centraal zet, met echte klantverhalen en een duidelijke eerste stap richting een kennismakingsgesprek.",
    result:
      "Een site die past bij het niveau van de coaching zelf, en die nieuwe klanten vertrouwen geeft nog vóór het eerste gesprek.",
    isExample: true,
  },
  {
    slug: "coachpraktijk-met-automatisering",
    audience: "coaches",
    clientName: "[Voorbeeldklant], Coachpraktijk (2 coaches)",
    sector: "Loopbaan- en teamcoaching",
    problem:
      "Twee coaches deelden één agenda en verwerkten aanvragen nog volledig handmatig via e-mail, wat tijd kostte en soms tot dubbele boekingen leidde.",
    solution:
      "Een website met geautomatiseerde intake en agenda-koppeling, zodat een aanvraag automatisch bij de juiste coach terechtkomt en een voorstel voor een eerste gesprek al klaarstaat.",
    result:
      "Minder administratief werk per aanvraag, en meer tijd voor het coachen zelf in plaats van het plannen ervan.",
    isExample: true,
  },
];

/** Cases voor een specifieke doelgroep-landingspagina (bv. "coaches"). */
export function getCasesByAudience(audience: string): CaseStudy[] {
  return caseStudies.filter((caseStudy) => caseStudy.audience === audience);
}
