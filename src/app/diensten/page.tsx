import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bouwbedrijf Homan biedt woningbouw, utiliteitsbouw, verbouwingen, renovaties en onderhoud in Twente. Van vergunning tot oplevering.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/diensten" },
};

const diensten = [
  {
    id: "woningbouw",
    tag: "01",
    image: "/images/projecten/luxe-badhuis/01.jpg",
    title: "Woningbouw",
    subtitle: "Van droomhuis tot sleuteloverdracht",
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

const steps = [
  {
    step: "01",
    title: "Kennismaking",
    description:
      "Vrijblijvend gesprek waarin we uw wensen en de mogelijkheden in kaart brengen.",
  },
  {
    step: "02",
    title: "Ontwerp & offerte",
    description:
      "We maken een gedetailleerd plan met een heldere prijsopgave — zonder verrassingen.",
  },
  {
    step: "03",
    title: "Bouw",
    description:
      "Onze vakmensen gaan aan het werk, met regelmatige updates over de voortgang.",
  },
  {
    step: "04",
    title: "Oplevering",
    description:
      "Gezamenlijke inspectie en overdracht. U geniet — wij staan achter de nazorg.",
  },
];

export default function DienstenPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-3 w-[0.65rem] text-foreground" />
            Diensten
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.02em]">
            Vier disciplines,
            <br />
            <span className="text-accent">één handtekening.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Van vergunning tot oplevering begeleiden we u bij elke stap. Al
            bijna 50 jaar bieden we een compleet pakket bouwdiensten —
            steeds op dezelfde manier: zorgvuldig en transparant.
          </p>
        </div>
      </section>

      {/* SERVICES LIST — alternating */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32">
            {diensten.map((d, i) => (
              <article
                key={d.id}
                id={d.id}
                className="scroll-mt-32 grid items-start gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] sm:rounded-[36px]">
                    <Image
                      src={d.image}
                      alt={d.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      quality={70}
                    />
                  </div>
                </div>
                <div
                  className={`lg:col-span-6 lg:pt-6 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-1.5">
                      <BrandMark className="h-3 w-[0.65rem] text-foreground" />
                      {d.tag}
                    </span>
                    <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                      {d.title}
                    </h2>
                  </div>
                  <p className="mt-3 text-lg font-medium text-foreground/60">
                    {d.subtitle}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-foreground/70">
                    {d.description}
                  </p>
                  <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                    {d.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    <span>Vrijblijvende offerte</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 inline-flex items-center gap-2">
              <BrandMark className="h-3 w-[0.65rem] text-white" />
              Werkwijze
            </p>
            <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Helder proces — geen verrassingen onderweg.
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((s) => (
                <div key={s.step} className="border-t border-white/15 pt-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-1.5">
                    <BrandMark className="h-3 w-[0.65rem] text-white" />
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] tracking-tight lg:col-span-8">
              Benieuwd wat we voor u kunnen betekenen?
            </h2>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Contact opnemen</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:0547381035"
                className="inline-flex h-[60px] items-center gap-2 rounded-full border border-foreground/20 px-7 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Of bel 0547 38 10 35
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
