import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

export const metadata: Metadata = {
  title: "Werken bij",
  description:
    "Werken bij Bouwbedrijf Homan in Enter. Bekijk onze vacatures en word onderdeel van een hecht team vakmensen in Twente.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/werken-bij" },
};

const perks = [
  {
    tag: "01",
    title: "Hecht team",
    description:
      "Werk in een team van 35 betrokken collega's. Korte lijnen, geen onzin — gewoon vakmensen onder elkaar.",
  },
  {
    tag: "02",
    title: "Groei",
    description:
      "Opleidingen en doorgroeimogelijkheden binnen het bedrijf. We investeren graag in wie blijft.",
  },
  {
    tag: "03",
    title: "Afwisselend werk",
    description:
      "Van villa's tot centrumplannen. Elke week een andere locatie, elke maand een nieuw detail.",
  },
  {
    tag: "04",
    title: "Goede sfeer",
    description:
      "Informele werksfeer, nuchter Twents. Vrijdagmiddag borrel hoort er gewoon bij.",
  },
];

const vacatures = [
  {
    title: "Metselaar",
    type: "Fulltime",
    period: "Doorlopend",
    summary:
      "Werk aan hoogwaardige nieuwbouwprojecten in Twente, dicht bij huis. Ruimte voor eigen initiatief en ontwikkeling, in een team met een goede mix van jonge en ervaren vakspecialisten.",
  },
  {
    title: "Stagiair(e) bouwkunde",
    type: "Stage",
    period: "Doorlopend",
    summary:
      "Leer het vak bij een familiebedrijf met korte lijnen tussen kantoor en bouwplaats. Ruimte voor eigen projecten onder begeleiding van ervaren collega's.",
  },
];

export default function WerkenBijPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-foreground" />
            Werken bij Homan
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.035em]">
            Bouw met ons aan
            <br />
            <span className="text-[var(--accent)]">iets moois.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Word onderdeel van een hecht team vakmensen. Bij ons werk je aan
            uitdagende projecten in Twente — van villa&apos;s tot centrumplannen — in
            een prettige, nuchtere werksfeer.
          </p>
        </div>
      </section>

      {/* ACQUISITIE — compact notice, up high */}
      <section className="px-3 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 rounded-[20px] border-2 border-accent/40 bg-accent/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent inline-flex shrink-0 items-center gap-2">
              <BrandMark className="h-2.5 w-2.5" />
              Let op
            </p>
            <p className="text-sm font-medium leading-snug text-foreground sm:text-base">
              Acquisitie naar aanleiding van deze vacatures wordt niet op prijs
              gesteld — we werven rechtstreeks, geen bureaus.
            </p>
          </div>
        </div>
      </section>

      {/* PERKS — dark rounded card */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-white" />
                Waarom Homan
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Wat je bij ons vindt.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Vier redenen om te kiezen voor Bouwbedrijf Homan — en om lang
                te blijven.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[24px] bg-white/5 p-7 backdrop-blur"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-1.5">
                    <BrandMark className="h-2.5 w-3 text-white" />
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VACATURES */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                Openstaande functies
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Vacatures
              </h2>
            </div>
            <p className="max-w-sm text-foreground/60">
              Staat jouw droombaan er niet bij? Stuur dan een open
              sollicitatie.
            </p>
          </div>

          <ol className="mt-12 border-t border-foreground/10">
            {vacatures.map((job, i) => (
              <li
                key={job.title}
                className="group flex flex-col gap-5 border-b border-foreground/10 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10 sm:py-10"
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-1.5 pt-2">
                    <BrandMark className="h-2.5 w-3 text-foreground" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {job.title}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                      {job.type} · Enter, Twente · {job.period}
                    </p>
                    {job.summary ? (
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
                        {job.summary}
                      </p>
                    ) : null}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="group/btn inline-flex h-[60px] shrink-0 items-center gap-2 self-start rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5 sm:self-auto"
                >
                  <span>Solliciteer</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OPEN SOLLICITATIE */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                Open sollicitatie
              </p>
              <h2 className="font-display mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-tight">
                Past niks — maar wel wat met Homan?
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
              <p className="text-lg leading-relaxed text-foreground/70">
                Stuur ons een mail of bel even. Als we klikken, vinden we wel
                een plek. Vakmensen met een goed verhaal zijn altijd welkom.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:info@bouwbedrijfhoman.nl"
                  className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  <span>info@bouwbedrijfhoman.nl</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
                <a
                  href="tel:0547381035"
                  className="inline-flex h-[60px] items-center gap-2 self-start rounded-full border border-foreground/20 px-7 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  Of bel 0547 38 10 35
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 sm:h-28" aria-hidden="true" />
    </div>
  );
}
