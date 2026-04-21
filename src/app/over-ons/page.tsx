import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

const FOUNDED_YEAR = 1982;

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Bouwbedrijf Homan: al bijna 50 jaar uw betrouwbare aannemer in Twente. 35 vakmensen, Bouwgarant gecertificeerd, gevestigd in Enter.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/over-ons" },
};

const values = [
  {
    tag: "01",
    title: "Vakmanschap",
    description:
      "Traditioneel ambacht gecombineerd met moderne technieken. Onze vakmensen werken met passie en oog voor detail.",
  },
  {
    tag: "02",
    title: "Communicatie",
    description:
      "Korte lijnen tussen bouwplaats en kantoor. U heeft altijd een vast aanspreekpunt en bent op de hoogte van de voortgang.",
  },
  {
    tag: "03",
    title: "Betrokkenheid",
    description:
      "Elk project is uniek en verdient onze volle aandacht. Wij bouwen mee aan uw droom alsof het de onze is.",
  },
  {
    tag: "04",
    title: "Betrouwbaarheid",
    description:
      "Afspraken zijn afspraken. Met Bouwgarant certificering bieden wij u extra zekerheid.",
  },
];

const timeline = [
  {
    year: "1982",
    title: "Oprichting",
    description:
      "Bouwbedrijf Homan wordt opgericht in Enter met een kleine maar gedreven ploeg.",
  },
  {
    year: "1995",
    title: "Groei",
    description:
      "Het team groeit en de eerste grote utiliteitsprojecten worden gerealiseerd.",
  },
  {
    year: "2005",
    title: "Certificering",
    description:
      "Bouwgarant certificering behaald als bewijs van kwaliteit en betrouwbaarheid.",
  },
  {
    year: "2022",
    title: "40 jaar",
    description:
      "Viering van 40 jaar vakmanschap met inmiddels 35 medewerkers en honderden projecten.",
  },
];

export default function OverOnsPage() {
  const yearsOfCraft = new Date().getFullYear() - FOUNDED_YEAR;
  const stats = [
    { value: `${yearsOfCraft}+`, label: "Jaar ervaring" },
    { value: "35", label: "Vakmensen" },
    { value: "100%", label: "Bouwgarant" },
    { value: "900+", label: "Tevreden klanten" },
  ];
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-3 w-[0.65rem] text-foreground" />
            Over ons — sinds {FOUNDED_YEAR}
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.035em]">
            Een familiebedrijf
            <br />
            met <span className="text-[var(--accent)]">handschrift.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Al bijna 50 jaar bouwen wij aan dromen in Twente. Met vakmanschap,
            betrokkenheid en een persoonlijke aanpak — van eerste schets tot
            sleutel.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-3 w-[0.65rem] text-foreground" />
                Wie wij zijn
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Hoogwaardige woning- en utiliteitsbouw, met oog voor detail.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-foreground/70">
                Bouwbedrijf Homan is gespecialiseerd in hoogwaardige woning- en
                utiliteitsbouw. Met een team van 35 ervaren vakmensen realiseren
                wij projecten van standaardwoningen tot luxe villa&apos;s en van
                kantoorpanden tot appartementencomplexen.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-foreground/70">
                Onze kracht zit in de combinatie van traditioneel vakmanschap en
                moderne bouwtechnieken. Korte lijnen tussen bouwplaats en
                kantoor houden u altijd op de hoogte.
              </p>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-foreground/15 px-5 py-2.5">
                <Image
                  src="/images/bouwgarant-logo.png"
                  alt="Bouwgarant gecertificeerd"
                  width={40}
                  height={33}
                  className="h-7 w-auto"
                />
                <span className="text-sm font-medium">
                  Bouwgarant gecertificeerd
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT PHOTO */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative overflow-hidden rounded-[28px] bg-muted aspect-[4/5] sm:aspect-[4/3] lg:col-span-7 lg:aspect-[4/3]">
              <Image
                src="/images/over-ons/management.jpg"
                alt="Luc Velten en Justin Hoek — het management van Bouwbedrijf Homan"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
                quality={80}
              />
            </div>
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-3 w-[0.65rem] text-foreground" />
                Management
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Luc Velten &amp; Justin Hoek.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/70">
                Algemeen directeur Luc Velten en operationeel directeur Justin
                Hoek sturen samen het bedrijf aan. Luc focust op ontwikkeling en
                klantenbegeleiding in het voortraject, Justin coördineert alle
                lopende projecten — van bouwplaats tot oplevering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — dark rounded card */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-2">
                <BrandMark className="h-3 w-[0.65rem] text-white" />
                Kernwaarden
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Waar wij voor staan.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Vier waarden die de basis vormen van alles wat wij doen — op de
                bouwplaats én daarbuiten.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-[24px] bg-white/5 p-7 backdrop-blur"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-1.5">
                    <BrandMark className="h-3 w-[0.65rem] text-white" />
                    {v.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-3 w-[0.65rem] text-foreground" />
                Geschiedenis
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Vier decennia
                <br />
                <span className="text-accent">in het kort.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">
                Van kleine ploeg in Enter tot vertrouwde bouwpartner in heel
                Twente.
              </p>
            </div>
            <ol className="lg:col-span-7">
              {timeline.map((item, i) => (
                <li
                  key={item.year}
                  className={`flex gap-6 border-foreground/10 py-8 sm:gap-10 ${
                    i !== 0 ? "border-t" : ""
                  }`}
                >
                  <span className="shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent sm:text-base">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-y-10 border-t border-foreground/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  {s.label}
                </dt>
                <dd className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] lg:col-span-8">
              Wilt u <span className="text-accent">ons team</span> ontmoeten?
            </h2>
            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Kom langs</span>
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
