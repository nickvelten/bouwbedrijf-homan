import { projects, type Project } from "@/data/projects";

export type Place = {
  slug: string;
  name: string;
  /** Custom SEO/UX intro. When omitted a templated intro is generated. */
  intro?: string;
  /** Featured places are shown as chips on the homepage werkgebied section. */
  featured?: boolean;
};

// Featured werkgebied — also rendered as chips on the homepage. Order matters there.
const featured: Place[] = [
  {
    slug: "enter",
    name: "Enter",
    featured: true,
    intro:
      "Enter is onze thuisbasis sinds 1982. Vanuit ons kantoor aan de rand van het dorp bouwen en verbouwen we hier al ruim veertig jaar woningen, landhuizen en bedrijfspanden.",
  },
  {
    slug: "wierden",
    name: "Wierden",
    featured: true,
    intro:
      "Wierden ligt op nog geen tien minuten van ons kantoor in Enter. Korte lijnen, vakmensen uit de buurt en snel ter plekke bij vragen.",
  },
  {
    slug: "rijssen",
    name: "Rijssen",
    featured: true,
    intro:
      "In Rijssen realiseren we woningbouw, utiliteit en renovaties met dezelfde zorgvuldige aanpak waar Bouwbedrijf Homan om bekendstaat.",
  },
  {
    slug: "almelo",
    name: "Almelo",
    featured: true,
    intro:
      "Almelo valt ruim binnen onze werkstraal van 50 km. Van particuliere woningbouw tot bedrijfspanden, we bouwen er met oog voor detail.",
  },
  {
    slug: "hengelo",
    name: "Hengelo",
    featured: true,
    intro:
      "Hengelo is een vast onderdeel van ons werkgebied in Twente. We bouwen, verbouwen en onderhouden er woningen en utiliteit.",
  },
  {
    slug: "borne",
    name: "Borne",
    featured: true,
    intro:
      "In Borne staan we klaar voor nieuwbouw, verbouw en renovatie, met eigen vakmensen en korte communicatielijnen.",
  },
  {
    slug: "enschede",
    name: "Enschede",
    featured: true,
    intro:
      "In Enschede realiseerden we onder meer herenhuizen en stadswoningen. Stedelijk bouwen met hetzelfde vakmanschap als op het platteland.",
  },
  {
    slug: "oldenzaal",
    name: "Oldenzaal",
    featured: true,
    intro:
      "Oldenzaal ligt binnen onze werkstraal vanuit Enter. Woningbouw, utiliteit, verbouw en onderhoud, alles onder één dak.",
  },
  {
    slug: "haaksbergen",
    name: "Haaksbergen",
    featured: true,
    intro:
      "In Haaksbergen bouwden we onder andere een luxe badhuis en diverse woningen. Maatwerk met respect voor het landschap.",
  },
  {
    slug: "delden",
    name: "Delden",
    featured: true,
    intro:
      "Delden hoort bij ons vertrouwde werkgebied in Twente. Van schetsontwerp tot oplevering begeleiden we het hele traject.",
  },
  {
    slug: "goor",
    name: "Goor",
    featured: true,
    intro:
      "In Goor realiseerden we onder meer een dubbele woning. Vakmanschap, heldere afspraken en nazorg na oplevering.",
  },
  {
    slug: "markelo",
    name: "Markelo",
    featured: true,
    intro:
      "Markelo is een van onze meest actieve plaatsen: landhuizen, woningen en een appartementencomplex dragen hier onze handtekening.",
  },
  {
    slug: "holten",
    name: "Holten",
    featured: true,
    intro:
      "In Holten bouwen we woningen op maat, ingepast in de bosrijke omgeving aan de voet van de Holterberg.",
  },
  {
    slug: "bathmen",
    name: "Bathmen",
    featured: true,
    intro:
      "Bathmen ligt aan de westrand van ons werkgebied. Ook hier bouwen we met eigen vakmensen en vaste onderaannemers.",
  },
  {
    slug: "raalte",
    name: "Raalte",
    featured: true,
    intro:
      "In Raalte realiseerden we meerdere woningen. Energiezuinig, duurzaam en gebouwd om generaties mee te gaan.",
  },
  {
    slug: "lemele",
    name: "Lemele",
    featured: true,
    intro:
      "In Lemele bouwden we een vrijstaande woning, zorgvuldig ingepast in het Sallandse landschap.",
  },
  {
    slug: "hellendoorn",
    name: "Hellendoorn",
    featured: true,
    intro:
      "Hellendoorn valt binnen onze werkstraal vanuit Enter. Nieuwbouw, verbouw en onderhoud met een duidelijke handtekening.",
  },
  {
    slug: "nijverdal",
    name: "Nijverdal",
    featured: true,
    intro:
      "In Nijverdal realiseerden we onder meer een kantoor met bedrijfshal. Functioneel, representatief en gebouwd om mee te groeien.",
  },
];

// Aanvullend werkgebied rondom Enter en omstreken (bron: Bouwbedrijf Homan).
// Krijgen een gegenereerde SEO-intro via placeIntro().
const extraNames = [
  "Aadorp",
  "Bornerbroek",
  "Hulsen",
  "Mariaparochie",
  "Harbrinkhoek",
  "Vriezenveen",
  "Albergen",
  "Fleringen",
  "Zenderen",
  "Hertme",
  "Haarle",
  "Heeten",
  "Nieuw Heeten",
  "Luttenberg",
  "Mariënheem",
  "Daarlerveen",
  "Daarle",
  "Lemelerveld",
  "Heino",
  "Reutum",
  "Rossum",
  "Denekamp",
  "Weerselo",
  "De Lutte",
  "Saasveld",
  "Ootmarsum",
  "Oud Ootmarsum",
  "Geesteren",
  "Tubbergen",
  "Agelo",
  "Dijkerhoek",
  "Laren Gld.",
  "Gelselaar",
  "Lonneker",
  "Losser",
  "Beckum",
  "Boekelo",
  "Deurningen",
  "Diepenheim",
  "St. Isidorushoeve",
  "Hengevelde",
  "Borculo",
  "Geesteren Gld.",
  "Noordijk",
  "Haarlo",
  "Neede",
  "Rietmolen",
  "Buurse",
] as const;

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip accents (Mariënheem -> marienheem)
    .replace(/\./g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const extra: Place[] = extraNames.map((name) => ({
  slug: toSlug(name),
  name,
}));

export const places: Place[] = [...featured, ...extra];

export function getPlace(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}

/** Custom intro when present, otherwise a templated SEO intro. */
export function placeIntro(place: Place): string {
  return (
    place.intro ??
    `Bouwbedrijf Homan is ook actief in ${place.name}. Vanuit ons kantoor in Enter realiseren we hier woningbouw, utiliteitsbouw, verbouw, renovatie en onderhoud, met eigen vakmensen en korte lijnen.`
  );
}

/**
 * Projects are not tagged with a location field — the place is derived from
 * the project title (e.g. "Landhuis te Markelo"). Word-boundary, case
 * insensitive so "Enter" doesn't match inside another word.
 */
export function projectsInPlace(name: string): Project[] {
  const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  return projects.filter((p) => re.test(p.title));
}
