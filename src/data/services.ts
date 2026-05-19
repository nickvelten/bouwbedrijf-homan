import { projects, type Project } from "@/data/projects";

export type Service = {
  /** URL slug and anchor id on the /diensten overview. */
  id: string;
  tag: string;
  image: string;
  title: string;
  subtitle: string;
  /** One-liner used on the homepage services grid. */
  teaser: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "woningbouw",
    tag: "01",
    image: "/images/projecten/luxe-badhuis/01.jpg",
    title: "Woningbouw",
    subtitle: "Van droomhuis tot sleuteloverdracht",
    teaser:
      "Van standaardwoning tot luxe villa. We bouwen uw droomhuis met oog voor detail en vakmanschap in elke hoek.",
    description:
      "Een moderne stadswoning, een ruim landhuis of een luxe villa — wij bouwen uw droomhuis met oog voor detail. Van eerste schets tot sleutel begeleiden we u in het volledige traject.",
    features: [
      "Vrijstaande woningen en villa's",
      "Twee-onder-één-kapwoningen",
      "Rijtjeswoningen en seriebouw",
      "Energiezuinig en duurzaam bouwen",
      "Compleet bouwmanagement",
      "Bouwtekeningen en vergunningen",
    ],
  },
  {
    id: "utiliteitsbouw",
    tag: "02",
    image: "/images/projecten/kantoor-bedrijfshal-enter/01.jpg",
    title: "Utiliteitsbouw",
    subtitle: "Functioneel en representatief",
    teaser:
      "Bedrijfspanden, kantoren, appartementencomplexen. Functioneel en representatief — gebouwd om mee te groeien.",
    description:
      "Een bedrijfspand dat past bij uw onderneming. We bouwen kantoren, bedrijfshallen, winkelpanden en appartementencomplexen — functioneel, duurzaam, en gemaakt om mee te groeien.",
    features: [
      "Kantoorpanden en bedrijfshallen",
      "Winkelpanden",
      "Appartementencomplexen",
      "Scholen en zorginstellingen",
      "Maatwerk naar uw specificaties",
      "Turnkey oplevering",
    ],
  },
  {
    id: "verbouw",
    tag: "03",
    image: "/images/projecten/restauratieproject-buitengebied-enter/01.jpg",
    title: "Verbouw & renovatie",
    subtitle: "Nieuw leven voor uw pand",
    teaser:
      "Kleine verbouwing of complete renovatie. We bewaren het karakter van uw pand en geven het nieuw leven.",
    description:
      "Uw woning of bedrijfspand verdient een tweede leven. Aanbouw, dakopbouw of complete renovatie — we transformeren het pand met respect voor het bestaande karakter.",
    features: [
      "Aanbouw en uitbouw",
      "Dakopbouw en dakkapellen",
      "Complete renovatie",
      "Keuken- en badkamerverbouwing",
      "Restauratie van monumentale panden",
      "Energetische verbetering",
    ],
  },
  {
    id: "onderhoud",
    tag: "04",
    image: "/images/projecten/landhuis-te-markelo/01.jpg",
    title: "Onderhoud",
    subtitle: "Preventief en correctief",
    teaser:
      "Preventief en correctief onderhoud door eigen vakmensen. Zo blijft uw pand jarenlang als nieuw.",
    description:
      "Goed onderhoud verlengt de levensduur van uw pand en voorkomt grote kosten later. We bieden zowel preventief als correctief onderhoud voor woningen én bedrijfspanden.",
    features: [
      "Periodieke inspecties",
      "Meerjarenonderhoudsplannen",
      "Schilderwerk en voegwerk",
      "Dakreparaties",
      "Houtrot en betonherstel",
      "Gevelreiniging",
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

/** Related portfolio work shown on a service detail page. */
export function projectsForService(id: string): Project[] {
  if (id === "woningbouw") {
    return projects.filter(
      (p) => p.category === "woningbouw" || p.category === "beide",
    );
  }
  if (id === "utiliteitsbouw") {
    return projects.filter(
      (p) => p.category === "utiliteit" || p.category === "beide",
    );
  }
  if (id === "verbouw") {
    return projects.filter((p) => /(verbouw|renovat|restaurat)/i.test(p.title));
  }
  return [];
}
