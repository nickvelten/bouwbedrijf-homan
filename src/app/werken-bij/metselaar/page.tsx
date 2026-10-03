import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

export const metadata: Metadata = {
  title: "Vacature metselaar",
  description:
    "Vacature metselaar bij Bouwbedrijf Homan in Enter. Werk aan hoogwaardige nieuwbouwprojecten in Twente, dicht bij huis, met veel ruimte voor eigen initiatief.",
  alternates: {
    canonical: "https://www.bouwbedrijfhoman.nl/werken-bij/metselaar",
  },
};

const taken = [
  "Bestuderen van (technische) bouwtekeningen.",
  "Bestellen van bouwmaterialen in overleg met de projectleider of werkvoorbereider.",
  "Metselen van binnenwanden en buitenmetselwerk.",
  "Vakkundig uitvoeren van gedetailleerd metselwerk zoals rollagen, hanekammen en boerenvlechtwerk.",
  "Metselwerk voorzien van doorstrijkmortel.",
];

const profiel = [
  "Je hebt ervaring als metselaar of bent bereid deze ervaring bij ons op te doen.",
  "Je hebt rijbewijs B of BE, of je bent bereid dit te halen.",
  "Je kunt zowel in teamverband als zelfstandig werken.",
  "Je hebt passie voor de bouw en gaat met plezier naar je werk.",
  "Je bent leergierig en wilt met ons team werken aan de toekomst van jezelf en ons bedrijf.",
];

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Metselaar",
  description:
    "Als metselaar bij Bouwbedrijf Homan werk je aan mooie en hoogwaardige nieuwbouwprojecten in de regio Twente. Je werkt dus altijd dicht bij huis. Er is veel ruimte voor eigen initiatief en ontwikkeling.",
  employmentType: "FULL_TIME",
  datePosted: "2026-10-03",
  hiringOrganization: {
    "@type": "Organization",
    name: "Bouwbedrijf Homan",
    sameAs: "https://www.bouwbedrijfhoman.nl",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vonderweg 19",
      postalCode: "7468 DC",
      addressLocality: "Enter",
      addressCountry: "NL",
    },
  },
};

function Lijst({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 border-t border-foreground/10">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4 border-b border-foreground/10 py-5 text-lg leading-relaxed text-foreground/80"
        >
          <BrandMark className="mt-2.5 h-2.5 w-3 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function VacatureMetselaarPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-12 sm:px-6 sm:pt-20">
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Link
            href="/werken-bij"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Alle vacatures
          </Link>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.9] tracking-[-0.035em]">
            Vacature
            <br />
            <span className="text-[var(--accent)]">metselaar.</span>
          </h1>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            Fulltime · Enter, Twente · Doorlopend
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Als metselaar bij Bouwbedrijf Homan werk je aan mooie en
            hoogwaardige nieuwbouwprojecten in de regio Twente. Je werkt dus
            altijd dicht bij huis. Er is veel ruimte voor eigen initiatief en
            ontwikkeling.
          </p>
        </div>
      </section>

      {/* TAKEN + PROFIEL */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-3 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
              <BrandMark className="h-2.5 w-3 text-foreground" />
              01
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat je bij ons gaat doen.
            </h2>
            <Lijst items={taken} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
              <BrandMark className="h-2.5 w-3 text-foreground" />
              02
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat je meebrengt.
            </h2>
            <Lijst items={profiel} />
          </div>
        </div>
      </section>

      {/* AANBOD — dark rounded card */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-white" />
                03
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Wat wij jou bieden.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Je werkt aan hoogwaardige (nieuw)bouwprojecten in de regio
                Twente, in een gemotiveerd team met een goede mix van jonge en
                ervaren vakspecialisten. De lijnen zijn kort, doordat je snel
                kunt schakelen met onze opdrachtgevers en collega&apos;s op
                kantoor. Natuurlijk hebben we ook aandacht voor je persoonlijke
                ontwikkeling binnen onze groeiende organisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLLICITEREN */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-foreground" />
                Solliciteren
              </p>
              <h2 className="font-display mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-tight">
                We zijn benieuwd naar jou.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
              <p className="text-lg leading-relaxed text-foreground/70">
                Past deze baan bij jou? Laat het ons weten! Stuur een mail naar
                info@bouwbedrijfhoman.nl ter attentie van Luc Velten, of bel
                ons.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:info@bouwbedrijfhoman.nl?subject=Sollicitatie%20metselaar%20t.a.v.%20Luc%20Velten"
                  className="group inline-flex h-[60px] items-center gap-2 self-start rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  <span>Mail je sollicitatie</span>
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
              <p className="mt-6 text-xs leading-snug text-foreground/40">
                Acquisitie naar aanleiding van deze vacature wordt niet op prijs
                gesteld. We werven rechtstreeks, geen bureaus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 sm:h-28" aria-hidden="true" />
    </div>
  );
}
