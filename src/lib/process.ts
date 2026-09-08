export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Kennismaking",
    description:
      "Een kort, vrijblijvend gesprek over je praktijk, je doelgroep en wat je met een nieuwe website wil bereiken. Hier bepalen we samen welk pakket en welke automatiseringen echt zinvol zijn voor jou.",
  },
  {
    step: 2,
    title: "Ontwerp",
    description:
      "Ik werk een ontwerp uit dat past bij jouw manier van coachen — rustig en professioneel waar dat nodig is, persoonlijk waar dat past. We bepalen samen wat bij je past en wat je mooi vindt, bijvoorbeeld met een moodboard of voorbeelden van websites, en bespreken ook welke functionaliteiten je nodig hebt.",
  },
  {
    step: 3,
    title: "Bouw",
    description:
      "Na akkoord bouw ik de website, inclusief de gekozen automatiseringen zoals een intakeformulier of agenda-koppeling. Je krijgt tussentijds een link om de voortgang te bekijken.",
  },
  {
    step: 4,
    title: "Review & aanscherpen",
    description:
      "Samen lopen we de site door en verwerk ik je feedback, tot alles precies klopt — teksten, werking van formulieren, weergave op telefoon en tablet.",
  },
  {
    step: 5,
    title: "Livegang",
    description:
      "Na jouw goedkeuring op de review gaat de site live op je eigen domein. Ik zorg dat alles goed werkt: formulieren, koppelingen, en de basisinstellingen voor vindbaarheid in Google.",
  },
  {
    step: 6,
    title: "Nazorg",
    description:
      "Ook na livegang kun je bij me terecht voor aanpassingen, uitbreidingen of nieuwe automatiseringen naarmate je praktijk groeit.",
  },
];
