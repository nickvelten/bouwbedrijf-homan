import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { places } from "@/data/places";
import { RecentWorkSlider } from "@/components/recent-work-slider";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { BrandMark } from "@/components/brand-mark";
import { HeroBeeldmerk } from "@/components/hero-beeldmerk";

const FOUNDED_YEAR = 1982;

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
        <HeroBeeldmerk />
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
            Bouwbedrijf Homan · Enter, sinds 1982
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em]">
            Sfeervol wonen,
            <br />
            <span className="text-[var(--accent)]">stijlvol werken.</span>
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="max-w-xl text-lg leading-relaxed text-foreground/70 lg:col-span-6">
              Al bijna 50 jaar realiseren we woningen, bedrijfspanden en
              renovaties in Twente. Met 30 vaste vakmensen en korte lijnen,
              van eerste schets tot sleutel.
            </p>
            <div className="flex flex-wrap items-start gap-3 lg:col-span-6 lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-foreground pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <span>Laten we kennismaken</span>
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

          {/* Hero image — sfeerfoto gerealiseerde woning */}
          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[28px] sm:rounded-[40px]">
            <Image
              src="/images/projecten/woning-in-holten-2/01.jpg"
              alt="Door Bouwbedrijf Homan gerealiseerde woning in Holten"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1440px, 100vw"
              priority
            />
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="rounded-full bg-white/90 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
                Gerealiseerd door Homan
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
                Introductie
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Een familiebedrijf dat bouwt zoals het hoort: zorgvuldig,
                transparant, en met een duidelijke handtekening.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-foreground/70">
                Opgericht in 1982 in Enter, uitgegroeid tot dé vertrouwde
                aannemer van Twente. We werken met eigen vakmensen en vaste
                onderaannemers zodat we kwaliteit en planning zelf in de hand
                houden. Geen verrassingen, behalve die ene muur die mooier
                wordt dan verwacht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRAPLINE — display tagline */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Wat wij bouwen
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
              <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
              In cijfers
            </p>
            <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-foreground/40 sm:block">
              Stand 2026
            </p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-y-10 border-t border-foreground/10 pt-10 sm:grid-cols-4">
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

      {/* WERKGEBIED */}
      <section className="px-3 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
                Werkgebied
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
              {places.filter((p) => p.featured).map((plaats) => (
                <li key={plaats.slug}>
                  <Link
                    href={`/werkgebied/${plaats.slug}`}
                    className="inline-flex items-center rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-foreground/5"
                  >
                    {plaats.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/werkgebied"
                  className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  + heel ons werkgebied
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
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 inline-flex items-center gap-2">
                  <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
                  Portfolio
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
              <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
              Diensten
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat we voor je maken.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Vier kerndiensten, elk met een eigen team en jarenlange ervaring.
              Van schetsontwerp tot onderhoud na oplevering.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/diensten/${service.id}`}
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
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] inline-flex items-center gap-1.5">
                        <BrandMark className="h-2.5 w-3" />
                        {service.tag}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-foreground/70">
                      {service.teaser}
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
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
            Over ons
          </p>
          <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.02] tracking-tight lg:col-span-7">
              &ldquo;Bouwen is voor ons geen project &mdash; het is een belofte
              van vakmanschap, afspraak en nazorg.&rdquo;
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
              <BrandMark className="h-2.5 w-3 text-[var(--accent)]" />
              Klanten aan het woord
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Wat klanten waarderen
              <br />
              <span className="text-[var(--accent)]">aan onze manier van bouwen.</span>
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
              Vrijblijvend kennismaken
            </p>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Een plek die écht bij je past
              <br />
              begint met <span className="text-[var(--accent)]">een gesprek.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Vrijblijvend kennismaken, ideeën delen, en kijken of het klikt.
              We bellen je binnen één werkdag terug.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-white pl-6 pr-2 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Plan een gesprek</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:0547381035"
                className="inline-flex h-[60px] items-center gap-2 rounded-full border border-white/20 px-7 text-base font-medium text-white transition-colors hover:bg-white/5"
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
