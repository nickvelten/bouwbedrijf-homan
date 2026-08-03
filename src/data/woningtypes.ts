import { projects, type Project } from "@/data/projects";

export type Woningtype = {
  /** URL slug onder /woningbouw/. */
  slug: string;
  /** "Schuurwoning", "Villa", ... */
  name: string;
  /** Korte kwalificatie onder de paginatitel. */
  subtitle: string;
  /** Hero-intro, afgestemd op de zoekintentie van de advertentie. */
  intro: string;
  /** Twee inhoudelijke tekstblokken op de pagina. */
  body: { title: string; text: string }[];
  features: string[];
  image: string;
  imageAlt: string;
  /** Matcht projecttitels voor het portfolio-blok. */
  titlePattern: RegExp;
  faq: { q: string; a: string }[];
};

export const woningtypes: Woningtype[] = [
  {
    slug: "schuurwoning",
    name: "Schuurwoning",
    subtitle: "Landelijk wonen in een strakke vorm",
    intro:
      "Eén heldere hoofdvorm, een royale kap en veel glas: de schuurwoning combineert landelijk bouwen met modern wooncomfort. Wij bouwen schuurwoningen op maat, van eerste schets tot sleuteloverdracht.",
    body: [
      {
        title: "Waarom een schuurwoning?",
        text: "De schuurwoning dankt zijn naam aan de archetypische vorm van de boerenschuur: één langgerekt volume met een doorlopende kap. Binnen die eenvoudige vorm is bijna alles mogelijk. Open leefruimtes met grote overspanningen, een vide, veel glas en een naadloze overgang naar de tuin. Materialen als zwart hout, riet en gebakken steen laten de woning vanzelfsprekend in het landschap passen.",
      },
      {
        title: "Zo bouwen wij jouw schuurwoning",
        text: "Of je nu al een kavel hebt of nog zoekt: we denken vanaf het eerste gesprek met je mee. Schuurwoningen staan vaak in het buitengebied, en dat vraagt om ervaring met bestemmingsplannen en welstand. Samen met jouw architect, of met ons eigen tekenwerk, vertalen we je wensen naar een ontwerp dat gebouwd kan worden. Onze eigen timmerlieden en metselaars werken 'm vervolgens tot in de details af.",
      },
    ],
    features: [
      "Ontwerp en bouw onder één dak",
      "Ervaring met bouwen in het buitengebied",
      "Riet, zwart hout en gebakken steen",
      "Grote overspanningen en vides",
      "Energiezuinig en gasloos",
      "Vergunningstraject uit handen genomen",
    ],
    image: "/images/projecten/schuurwoning-te-olst/01.jpg",
    imageAlt: "Door Bouwbedrijf Homan gebouwde schuurwoning in Olst",
    titlePattern: /schuurwoning/i,
    faq: [
      {
        q: "Wat kost het bouwen van een schuurwoning?",
        a: "Dat hangt af van het formaat, de materialen en het afwerkingsniveau: een rieten kap of veel glas maakt verschil. In het voortraject rekenen we graag met je mee, zodat je vroeg weet waar je aan toe bent. Met heldere afspraken, zonder verrassingen achteraf.",
      },
      {
        q: "Mag ik overal een schuurwoning bouwen?",
        a: "Niet overal: het bestemmingsplan en de welstandsnota bepalen wat er op jouw kavel mogelijk is, zeker in het buitengebied. We hebben ruime ervaring met deze trajecten en kijken vrijblijvend met je mee naar de mogelijkheden van je kavel.",
      },
      {
        q: "Hebben jullie ervaring met schuurwoningen?",
        a: "Zeker. We bouwen sinds 1982 woningen in en om Twente, waaronder schuurwoningen zoals die in Olst. Onze metselaars en timmerlieden zijn gek op de details die dit type bouw vraagt.",
      },
      {
        q: "Kan een schuurwoning energiezuinig gebouwd worden?",
        a: "Ja. We bouwen schuurwoningen standaard gasloos en goed geïsoleerd, met bijvoorbeeld een warmtepomp, vloerverwarming en triple glas. Landelijk uiterlijk, modern comfort.",
      },
    ],
  },
  {
    slug: "villa",
    name: "Villa",
    subtitle: "Luxe wonen, tot in het kleinste detail",
    intro:
      "Een villa laten bouwen doe je maar één keer. Onze eigen vakmensen bouwen luxe villa's waarin ontwerp, materiaal en afwerking tot in de details kloppen. In heel Twente, en als het project erom vraagt ook daarbuiten.",
    body: [
      {
        title: "Maatwerk van fundering tot nok",
        text: "Geen villa die we bouwen is hetzelfde. Jouw wensen en de plek bepalen het ontwerp: van moderne villa met veel glas tot klassieke villa met ambachtelijk metselwerk. Doordat we werken met eigen timmerlieden en metselaars, en materieel in eigen beheer hebben, houden we grip op kwaliteit én planning.",
      },
      {
        title: "Eén aanspreekpunt, het hele traject",
        text: "Van eerste schets tot sleuteloverdracht heb je bij ons één vast aanspreekpunt. We begeleiden het ontwerp, verzorgen bouwtekeningen en vergunningen en bouwen de villa af tot en met de laatste plint. Zo weet je altijd waar je aan toe bent.",
      },
    ],
    features: [
      "Volledig maatwerk naar jouw wensen",
      "Hoogwaardige materialen en detaillering",
      "Eigen timmerlieden en metselaars",
      "Bouwtekeningen en vergunningen geregeld",
      "Energiezuinig en toekomstbestendig",
      "Vast aanspreekpunt, heldere afspraken",
    ],
    image: "/images/projecten/villa-te-enter-4/01.jpg",
    imageAlt: "Door Bouwbedrijf Homan gebouwde villa in Enter",
    titlePattern: /villa/i,
    faq: [
      {
        q: "Wat kost het bouwen van een villa?",
        a: "Dat verschilt sterk per ontwerp, kavel en afwerkingsniveau. In het voortraject maken we de kosten inzichtelijk, zodat je onderbouwde keuzes kunt maken. Kwaliteit staat bij ons voorop, met marktconforme prijzen.",
      },
      {
        q: "Kunnen jullie ook het ontwerp verzorgen?",
        a: "Ja. We werken graag samen met jouw architect, maar verzorgen ook zelf bouwtekeningen en het vergunningstraject. Ontwerp en bouw onder één dak scheelt afstemming, tijd en verrassingen.",
      },
      {
        q: "Bouwen jullie alleen in Twente?",
        a: "Ons werkgebied ligt rondom ons kantoor in Enter, maar voor bijzondere projecten bouwen we ook verder weg. Zo realiseerden we onder meer een villa in Blaricum.",
      },
    ],
  },
  {
    slug: "herenhuis",
    name: "Herenhuis",
    subtitle: "Statig wonen met karakter",
    intro:
      "Hoge plafonds, een statige gevel en rijke detaillering in het metselwerk: een herenhuis vraagt om echt vakmanschap. Precies het werk waar onze metselaars en timmerlieden op hun best zijn.",
    body: [
      {
        title: "Ambacht zie je in de details",
        text: "Een herenhuis onderscheidt zich in de gevel: rollagen, hanekammen, sierlijk voegwerk en royale raampartijen. Seriematige woningbouw kan iedereen; zodra het lastig wordt, komen wij in beeld. Onze metselaars zijn gek op dit soort details en dat zie je terug in het resultaat.",
      },
      {
        title: "Klassieke uitstraling, modern comfort",
        text: "Achter de klassieke gevel bouwen we een woning van nu: gasloos, goed geïsoleerd en met een indeling die bij jouw leven past. Ook op stedelijke kavels, zoals ons herenhuis in Enschede, voelen we ons thuis.",
      },
    ],
    features: [
      "Ambachtelijk metselwerk: rollagen en hanekammen",
      "Hoge verdiepingen en royale raampartijen",
      "Klassiek ontwerp met modern comfort",
      "Ook op stedelijke kavels",
      "Energiezuinig en gasloos",
      "Van schets tot sleuteloverdracht",
    ],
    image: "/images/projecten/herenhuis-te-enschede/01.jpg",
    imageAlt: "Door Bouwbedrijf Homan gebouwd herenhuis in Enschede",
    titlePattern: /herenhuis/i,
    faq: [
      {
        q: "Wat kost het bouwen van een herenhuis?",
        a: "Dat hangt af van het ontwerp, de kavel en vooral het niveau van detaillering in gevel en afwerking. We rekenen in het voortraject graag met je mee, zodat je vroeg weet waar je aan toe bent.",
      },
      {
        q: "Kan een herenhuis ook in de stad gebouwd worden?",
        a: "Juist daar komt het herenhuis tot zijn recht. We hebben ervaring met bouwen op stedelijke kavels, waar logistiek en inpassing om extra aandacht vragen. Bekijk bijvoorbeeld ons herenhuis in Enschede.",
      },
      {
        q: "Is een klassiek herenhuis wel energiezuinig?",
        a: "Ja. De uitstraling is klassiek, de bouwkundige schil is van nu: gasloos, goed geïsoleerd en klaar voor de toekomst. Zo combineer je karakter met laag verbruik.",
      },
    ],
  },
  {
    slug: "landhuis",
    name: "Landhuis",
    subtitle: "Riant wonen in het landschap",
    intro:
      "Van rietgedekt landhuis tot landhuis met koetshuis: we bouwden er tientallen, in Twente en daarbuiten. Ruim opgezet, vakkundig gedetailleerd en gebouwd om generaties mee te gaan.",
    body: [
      {
        title: "Thuis in het buitengebied",
        text: "Een landhuis staat zelden op een standaardkavel. Bouwen in het buitengebied vraagt om kennis van bestemmingsplannen, welstand en landschappelijke inpassing. Die ervaring hebben we ruimschoots: landhuizen vormen al jaren een groot deel van ons portfolio.",
      },
      {
        title: "Compleet, inclusief bijgebouwen",
        text: "Vaak bouwen we naast het landhuis ook een koetshuis, schuur of kapschuur mee, in dezelfde stijl en materialen. Met rieten kappen, ambachtelijk metselwerk en houten gevels zorgen we dat het geheel klopt, tot aan de erfinrichting toe.",
      },
    ],
    features: [
      "Tientallen landhuizen gerealiseerd",
      "Rieten kappen en ambachtelijk metselwerk",
      "Ook koetshuizen en bijgebouwen",
      "Ervaring met bouwen in het buitengebied",
      "Energiezuinig en toekomstbestendig",
      "Eigen vakmensen, korte lijnen",
    ],
    image: "/images/projecten/landhuis-te-gorssel/01.jpg",
    imageAlt: "Door Bouwbedrijf Homan gebouwd landhuis in Gorssel",
    titlePattern: /landhuis/i,
    faq: [
      {
        q: "Wat kost het bouwen van een landhuis?",
        a: "Dat hangt af van formaat, materialen (zoals een rieten kap) en eventuele bijgebouwen. In het voortraject maken we de kosten inzichtelijk, zodat je onderbouwde keuzes kunt maken.",
      },
      {
        q: "Kunnen jullie ook een koetshuis of schuur meebouwen?",
        a: "Ja, dat doen we regelmatig. Een koetshuis of kapschuur in dezelfde stijl maakt het erf compleet. Bekijk in ons portfolio bijvoorbeeld de landhuizen met koetshuis in Enter en Markelo.",
      },
      {
        q: "Wat komt er kijken bij bouwen in het buitengebied?",
        a: "Meer dan bij een reguliere kavel: denk aan bestemmingsplannen, welstand en soms rood-voor-rood-regelingen. We kennen die trajecten goed en nemen je het vergunningswerk uit handen.",
      },
    ],
  },
];

export function getWoningtype(slug: string): Woningtype | undefined {
  return woningtypes.find((t) => t.slug === slug);
}

/**
 * Portfolio voor een woningtype: eerst projecten waarvan de titel matcht,
 * bij minder dan drie aangevuld met overige woningbouwprojecten zodat het
 * blok nooit leeg oogt.
 */
export function projectsForWoningtype(type: Woningtype, max = 6): Project[] {
  const matched = projects.filter((p) => type.titlePattern.test(p.title));
  if (matched.length >= 3) return matched.slice(0, max);
  const filler = projects.filter(
    (p) => p.category === "woningbouw" && !type.titlePattern.test(p.title),
  );
  return [...matched, ...filler].slice(0, Math.max(3, matched.length));
}
