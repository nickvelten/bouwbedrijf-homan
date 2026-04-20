export type Testimonial = {
  author: string;
  role?: string; // bijv. "Interieur Oost"
  quote: string; // volledige tekst
};

export const testimonials: Testimonial[] = [
  {
    author: "Milou Otten",
    quote:
      "Vakmanschap en kwaliteit zijn echt kernwaarden die wij hebben ervaren tijdens de bouw van onze fijne woning. Tijdens de bouw wordt er goed meegedacht, zodat ook de details kloppen en er wordt hard gewerkt om je wensen realiteit te laten worden. De bouwperiode was relatief stressvrij doordat ze bovenop het project zitten en niet beroerd zijn om extra inspanningen te leveren om de verschillende deadlines te halen. Wij kunnen dan ook niet anders dan Homan aanbevelen. Wij zijn super blij met onze mooie woning!",
  },
  {
    author: "Rudy Eggerink",
    quote:
      "Fantastisch fijn huis geworden. Genieten er nog elke dag van! Bouwen met Bouwbedrijf Homan is wat ons betreft een aanrader.",
  },
  {
    author: "Fam. van Otten",
    quote:
      "We kunnen terugkijken op een fijne bouwperiode. Er was, waar nodig, ruimte voor overleg en inspraak. Uitstekende vakmensen gecombineerd met hoogwaardige materialen hebben een prachtig eindresultaat opgeleverd. We hebben genoten van de bouw van onze woning!",
  },
  {
    author: "Michiel Fidan",
    quote:
      "Er is echt een topprestatie geleverd bij de bouw van ons prachtige huis. Gedurende het hele bouwproces konden we erop vertrouwen dat de bouw in goede handen was. Door heldere afspraken vooraf en duidelijke communicatie, kijken we terug op een fijne bouwperiode.",
  },
  {
    author: "Marc Lammertink",
    role: "Interieur Oost",
    quote:
      "Bij Interieur Oost staan we voor maatwerk, vakmanschap en efficiency. In Bouwbedrijf Homan hebben we een aannemer gevonden die deze kernwaarden deelt. Zowel het bouwpersoneel als de projectleiders op kantoor doen geen concessies aan de kwaliteit die ze leveren. We zijn dan ook enorm trots op ons nieuwe bedrijfspand!",
  },
  {
    author: "Erik Morsink",
    quote:
      "Vanaf het ontwerp tot en met de uitvoering was het zeer prettig bouwen met Bouwbedrijf Homan. Er wordt gewerkt met kwalitatieve materialen en dat zie je terug in het eindresultaat!",
  },
  {
    author: "Raymond Slag",
    quote:
      "Tijdens het bouwen werd er door de medewerkers van Bouwbedrijf Homan proactief meegedacht. Door korte lijnen kan er snel geschakeld worden. We zijn erg tevreden met de bouw van ons bedrijfspand!",
  },
];
