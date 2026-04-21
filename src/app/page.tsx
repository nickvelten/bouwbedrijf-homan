import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { projects } from "@/data/projects";
import { RecentWorkSlider } from "@/components/recent-work-slider";
import { TestimonialsSlider } from "@/components/testimonials-slider";

const FOUNDED_YEAR = 1982;

const services = [
  {
    tag: "01",
    title: "Woningbouw",
    description:
      "Van standaardwoning tot luxe villa. We bouwen uw droomhuis met oog voor detail en vakmanschap in elke hoek.",
    href: "/diensten#woningbouw",
    image: "/images/projecten/luxe-badhuis/01.jpg",
  },
  {
    tag: "02",
    title: "Utiliteitsbouw",
    description:
      "Bedrijfspanden, kantoren, appartementencomplexen. Functioneel en representatief — gebouwd om mee te groeien.",
    href: "/diensten#utiliteitsbouw",
    image: "/images/projecten/kantoor-bedrijfshal-enter/01.jpg",
  },
  {
    tag: "03",
    title: "Verbouw & renovatie",
    description:
      "Kleine verbouwing of complete renovatie. We bewaren het karakter van uw pand en geven het nieuw leven.",
    href: "/diensten#verbouw",
    image: "/images/projecten/restauratieproject-buitengebied-enter/01.jpg",
  },
  {
    tag: "04",
    title: "Onderhoud",
    description:
      "Preventief en correctief onderhoud door eigen vakmensen. Zo blijft uw pand jarenlang als nieuw.",
    href: "/diensten#onderhoud",
    image: "/images/projecten/landhuis-te-markelo/01.jpg",
  },
];


const werkgebied = [
  "Enter",
  "Wierden",
  "Rijssen",
  "Almelo",
  "Hengelo",
  "Borne",
  "Enschede",
  "Oldenzaal",
  "Haaksbergen",
  "Delden",
  "Goor",
  "Markelo",
  "Holten",
  "Bathmen",
  "Raalte",
  "Lemele",
  "Hellendoorn",
  "Nijverdal",
];

export default function HomePage() {
  const yearsOfCraft = new Date().getFullYear() - FOUNDED_YEAR;
  const stats = [
    { value: `${yearsOfCraft}+`, label: "Jaar vakmanschap" },
    { value: "35", label: "Eigen vakmensen" },
    { value: "900+", label: "Projecten opgeleverd" },
    { value: `${FOUNDED_YEAR}`, label: "Opgericht in Enter" },
  ];
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-3 pt-8 sm:px-6 sm:pt-12">
        {/* Watermark beeldmerk — subtle grey, to the right behind hero text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[-8%] z-0 flex items-start justify-end sm:right-[-4%] lg:right-[2%]"
        >
          <svg
            viewBox="0 0 220 220"
            className="h-[min(95vw,720px)] w-auto translate-y-6 text-foreground/[0.045]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="110,8 210,56 210,164 110,212 10,164 10,56"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
            />
            <rect x="10" y="102" width="200" height="16" />
            <rect x="50" y="48" width="46" height="46" />
            <rect x="124" y="48" width="46" height="46" />
            <rect x="50" y="126" width="46" height="46" />
            <rect x="124" y="126" width="46" height="46" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            Bouwbedrijf Homan — Enter, sinds 1982
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(3rem,7.5vw,7rem)] leading-[0.9] tracking-[-0.035em]">
            Bouwen met vakmanschap,
            <br />
            <span className="text-[var(--accent)]">op uw manier.</span>
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70 lg:col-span-6">
              Al bijna 50 jaar realiseren we woningen, bedrijfspanden en
              renovaties in Twente. Met dertig vaste vakmensen en korte lijnen
              — van eerste schets tot sleutel.
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Start uw project</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <Link
                href="/projecten"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full border border-foreground/20 px-7 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Bekijk projecten
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Hero image — landscape */}
          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[28px] sm:rounded-[40px]">
            <Image
              src="/images/projecten/luxe-badhuis/01.jpg"
              alt="Woning gerealiseerd door Bouwbedrijf Homan"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1440px, 100vw"
              priority
            />
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="rounded-full bg-white/90 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                Recent werk — 2026
              </span>
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm"
              >
                <Plus className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
                § Introductie
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Een familiebedrijf dat bouwt zoals het hoort — zorgvuldig,
                transparant, en met een duidelijke handtekening.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-foreground/70">
                Opgericht in 1982 in Enter, uitgegroeid tot dé vertrouwde
                aannemer van Twente. We werken met eigen vakmensen en vaste
                onderaannemers zodat we kwaliteit en planning zelf in de hand
                houden. Geen verrassingen — behalve die ene muur die mooier
                wordt dan verwacht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRAPLINE — display tagline */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            § Wat wij bouwen
          </p>
          <p className="font-display mt-6 max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
            Stijlvol wonen.
            <br />
            <span className="text-[var(--accent)]">Sfeervol werken.</span>
          </p>
        </div>
      </section>

      {/* IN CIJFERS — big stats */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              § In cijfers
            </p>
            <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-foreground/40 sm:block">
              Stand 2026
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-2 divide-y divide-foreground/10 border-t border-foreground/10 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-baseline gap-4 px-2 py-10 sm:block sm:px-8 sm:py-8 ${
                  i % 2 === 1 ? "border-l border-foreground/10 sm:border-l-0" : ""
                }`}
              >
                <dd className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.04em]">
                  {s.value}
                </dd>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 sm:mt-4 sm:block">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
                § Werkgebied
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl">
                Thuis in
                <br />
                <span className="text-[var(--accent)]">heel Twente.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-foreground/70">
                We bouwen uitsluitend in Twente en directe omgeving. Korte
                lijnen, vakmensen uit de buurt, en snel ter plekke bij vragen.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 content-start lg:col-span-8 lg:pt-3">
              {werkgebied.map((stad) => (
                <li key={stad}>
                  <span className="inline-flex items-center rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5">
                    {stad}
                  </span>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  + meer op aanvraag
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS — dark rounded card */}
      <section className="px-3 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-6 py-16 text-white sm:rounded-[40px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                  § Portfolio
                </p>
                <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                  Recente projecten in Twente.
                </h2>
              </div>
              <Link
                href="/projecten"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Alle projecten</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>

            <div className="mt-12">
              <RecentWorkSlider projects={projects.slice(0, 12)} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              § Diensten
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat we voor u maken.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Vier kerndiensten, elk met een eigen team en jarenlange ervaring.
              Van schetsontwerp tot onderhoud na oplevering.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-[28px] bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    quality={70}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-8">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                        §{service.tag}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-foreground/70">
                      {service.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / OVER ONS TEASER */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            § Over ons
          </p>
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.02] tracking-tight lg:col-span-7">
              Bouwen is voor ons geen project — het is een belofte van
              vakmanschap, afspraak en nazorg.
            </h2>
            <div className="lg:col-span-5 lg:pt-3">
              <p className="text-lg leading-relaxed text-foreground/70">
                We werken alleen in Twente omdat we geloven in korte lijnen en
                lange relaties. De meeste klanten vinden ons via
                mond-tot-mond, en de meeste vakmensen werken hier al tien jaar
                of langer. Dat zegt genoeg.
              </p>
              <Link
                href="/over-ons"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Leer ons kennen</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              § Klanten aan het woord
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat opdrachtgevers
              <br />
              <span className="text-[var(--accent)]">over ons zeggen.</span>
            </h2>
          </div>

          <div className="mt-14">
            <TestimonialsSlider items={testimonials} />
          </div>
        </div>
      </section>

      {/* CTA — cream to dark card */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-20 text-center text-white sm:rounded-[40px] sm:px-16 sm:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Start een project
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-6xl">
              Uw volgende bouwwerk
              <br />
              begint met <span className="text-[var(--accent)]">een gesprek.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Vrijblijvend kennismaken, ideeën delen, en kijken of het klikt.
              We bellen u binnen één werkdag terug.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Plan een gesprek</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:0547381035"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Of bel 0547 381 035
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
