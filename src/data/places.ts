import { projects, type Project } from "@/data/projects";

export type Place = {
  slug: string;
  name: string;
  /** Short SEO/UX intro shown on the place landing page. */
  intro: string;
};

// Werkgebied — also rendered as chips on the homepage. Order matters there.
export const places: Place[] = [
  {
    slug: "enter",
    name: "Enter",
    intro:
      "Enter is onze thuisbasis sinds 1982. Vanuit ons kantoor aan de rand van het dorp bouwen en verbouwen we hier al ruim veertig jaar woningen, landhuizen en bedrijfspanden.",
  },
  {
    slug: "wierden",
    name: "Wierden",
    intro:
      "Wierden ligt op nog geen tien minuten van ons kantoor in Enter. Korte lijnen, vakmensen uit de buurt en snel ter plekke bij vragen.",
  },
  {
    slug: "rijssen",
    name: "Rijssen",
    intro:
      "In Rijssen realiseren we woningbouw, utiliteit en renovaties met dezelfde zorgvuldige aanpak waar Bouwbedrijf Homan om bekendstaat.",
  },
  {
    slug: "almelo",
    name: "Almelo",
    intro:
      "Almelo valt ruim binnen onze werkstraal van 50 km. Van particuliere woningbouw tot bedrijfspanden — we bouwen er met oog voor detail.",
  },
  {
    slug: "hengelo",
    name: "Hengelo",
    intro:
      "Hengelo is een vast onderdeel van ons werkgebied in Twente. We bouwen, verbouwen en onderhouden er woningen en utiliteit.",
  },
  {
    slug: "borne",
    name: "Borne",
    intro:
      "In Borne staan we klaar voor nieuwbouw, verbouw en renovatie — met eigen vakmensen en korte communicatielijnen.",
  },
  {
    slug: "enschede",
    name: "Enschede",
    intro:
      "In Enschede realiseerden we onder meer herenhuizen en stadswoningen. Stedelijk bouwen met hetzelfde vakmanschap als op het platteland.",
  },
  {
    slug: "oldenzaal",
    name: "Oldenzaal",
    intro:
      "Oldenzaal ligt binnen onze werkstraal vanuit Enter. Woningbouw, utiliteit, verbouw en onderhoud — alles onder één dak.",
  },
  {
    slug: "haaksbergen",
    name: "Haaksbergen",
    intro:
      "In Haaksbergen bouwden we onder andere een luxe badhuis en diverse woningen. Maatwerk met respect voor het landschap.",
  },
  {
    slug: "delden",
    name: "Delden",
    intro:
      "Delden hoort bij ons vertrouwde werkgebied in Twente. Van schetsontwerp tot oplevering begeleiden we het hele traject.",
  },
  {
    slug: "goor",
    name: "Goor",
    intro:
      "In Goor realiseerden we onder meer een dubbele woning. Vakmanschap, heldere afspraken en nazorg na oplevering.",
  },
  {
    slug: "markelo",
    name: "Markelo",
    intro:
      "Markelo is een van onze meest actieve plaatsen: landhuizen, woningen en een appartementencomplex dragen hier onze handtekening.",
  },
  {
    slug: "holten",
    name: "Holten",
    intro:
      "In Holten bouwen we woningen op maat, ingepast in de bosrijke omgeving aan de voet van de Holterberg.",
  },
  {
    slug: "bathmen",
    name: "Bathmen",
    intro:
      "Bathmen ligt aan de westrand van ons werkgebied. Ook hier bouwen we met eigen vakmensen en vaste onderaannemers.",
  },
  {
    slug: "raalte",
    name: "Raalte",
    intro:
      "In Raalte realiseerden we meerdere woningen. Energiezuinig, duurzaam en gebouwd om generaties mee te gaan.",
  },
  {
    slug: "lemele",
    name: "Lemele",
    intro:
      "In Lemele bouwden we een vrijstaande woning, zorgvuldig ingepast in het Sallandse landschap.",
  },
  {
    slug: "hellendoorn",
    name: "Hellendoorn",
    intro:
      "Hellendoorn valt binnen onze werkstraal vanuit Enter. Nieuwbouw, verbouw en onderhoud met een duidelijke handtekening.",
  },
  {
    slug: "nijverdal",
    name: "Nijverdal",
    intro:
      "In Nijverdal realiseerden we onder meer een kantoor met bedrijfshal. Functioneel, representatief en gebouwd om mee te groeien.",
  },
];

export function getPlace(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}

/**
 * Projects are not tagged with a location field — the place is derived from
 * the project title (e.g. "Landhuis te Markelo"). Word-boundary, case
 * insensitive so "Enter" doesn't match inside another word.
 */
export function projectsInPlace(name: string): Project[] {
  const re = new RegExp(`\\b${name}\\b`, "i");
  return projects.filter((p) => re.test(p.title));
}
