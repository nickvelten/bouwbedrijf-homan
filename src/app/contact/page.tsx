import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MapFacade } from "@/components/map-facade";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Bouwbedrijf Homan in Enter. Bel 0547 381 035 of mail info@bouwbedrijfhoman.nl voor een vrijblijvend gesprek.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/contact" },
};

const quickActions = [
  {
    tag: "01",
    label: "Bel ons",
    value: "0547 381 035",
    helper: "Ma–Do 08:30–17:00 (pauze 12:30–13:00) · Vr tot 16:00",
    href: "tel:0547381035",
  },
  {
    tag: "02",
    label: "Mail ons",
    value: "info@bouwbedrijfhoman.nl",
    helper: "Reactie binnen één werkdag",
    href: "mailto:info@bouwbedrijfhoman.nl",
  },
  {
    tag: "03",
    label: "Kom langs",
    value: "Vonderweg 19, Enter",
    helper: "Koffie staat klaar",
    href: "https://maps.google.com/?q=Vonderweg+19+Enter",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
            § Contact
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.035em]">
            Laten we het eens
            <br />
            <span className="text-[var(--accent)]">hebben over bouwen.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Vrijblijvend kennismaken, ideeën delen of een concreet plan
            bespreken? Kies hieronder hoe u ons wilt bereiken. Bellen is het
            snelste — we nemen binnen één werkdag contact op.
          </p>
        </div>
      </section>

      {/* QUICK ACTIONS — three big pill cards */}
      <section className="px-3 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {quickActions.map((a) => (
              <a
                key={a.tag}
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  a.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group relative overflow-hidden rounded-[28px] border border-foreground/10 bg-white p-8 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    §{a.tag}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  {a.label}
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  {a.value}
                </p>
                <p className="mt-3 text-sm text-foreground/60">{a.helper}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO BLOCK */}
      <section className="px-3 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: copy + form */}
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                § Formulier
              </p>
              <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Of stuur ons
                <br />
                <span className="text-[var(--accent)]">een bericht.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                Vul het formulier in met uw situatie. We nemen binnen één
                werkdag contact met u op — vaak sneller.
              </p>

              <div className="mt-12 rounded-[32px] border border-foreground/10 bg-white p-6 sm:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Right: sticky info card */}
            <aside className="lg:col-span-5">
              <div className="sticky top-40 space-y-5">
                {/* Dark rounded info card */}
                <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-10 text-white sm:p-10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-10 select-none text-[10rem] font-bold leading-none tracking-[-0.04em] text-white/[0.04]"
                  >
                    H.
                  </span>
                  <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    § Contactgegevens
                  </p>
                  <ul className="relative mt-6 space-y-5">
                    <li>
                      <a
                        href="tel:0547381035"
                        className="group flex items-start gap-4"
                      >
                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent ring-1 ring-white/10">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                            Telefoon
                          </span>
                          <span className="mt-1 block text-lg font-semibold tracking-tight">
                            0547 381 035
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@bouwbedrijfhoman.nl"
                        className="group flex items-start gap-4"
                      >
                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent ring-1 ring-white/10">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                            E-mail
                          </span>
                          <span className="mt-1 block text-lg font-semibold tracking-tight">
                            info@bouwbedrijfhoman.nl
                          </span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent ring-1 ring-white/10">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                          Adres
                        </span>
                        <span className="mt-1 block text-lg font-semibold tracking-tight">
                          Vonderweg 19
                          <br />
                          7468 DC Enter
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent ring-1 ring-white/10">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                          Openingstijden
                        </span>
                        <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs text-white/90">
                          <dt className="text-white/50">Ma–Do</dt>
                          <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 17:00</dd>
                          <dt className="text-white/50">Vrijdag</dt>
                          <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 16:00</dd>
                        </dl>
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/werken-bij"
                    className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <span>Bekijk ook: werken bij</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>

                {/* Map card */}
                <div className="overflow-hidden rounded-[32px] border border-foreground/10 bg-white">
                  <MapFacade />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA — promise strip */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                § Onze belofte
              </p>
              <h2 className="font-display mt-5 text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] tracking-tight">
                Binnen één werkdag
                <br />
                <span className="text-[var(--accent)]">horen we van elkaar.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-3">
              <p className="text-lg leading-relaxed text-foreground/70">
                Geen wachtrijen, geen afdeling-call-back-after-call. U spreekt
                direct iemand van Homan die uw vraag begrijpt — en u het juiste
                antwoord kan geven.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:0547381035"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2.5 pl-6 pr-2 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  <span>Bel direct</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
