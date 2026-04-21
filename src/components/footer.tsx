import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const nav = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Projecten", href: "/projecten" },
  { name: "Actueel", href: "/actueel" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Werken bij", href: "/werken-bij" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
];

export function Footer() {
  return (
    <footer className="bg-background px-3 pb-3 pt-16 sm:px-6 sm:pb-6 sm:pt-24">
      <div className="relative overflow-hidden rounded-[32px] bg-foreground text-white sm:rounded-[40px]">
        {/* Watermark logotype */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-2vw] select-none text-center text-[28vw] font-semibold leading-none tracking-[-0.04em] text-white/[0.04] sm:text-[22vw]"
        >
          Homan.
        </span>

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          {/* Lead */}
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Klaar voor iets moois?
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Laten we samen bouwen.
            </h2>
            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <span>Start een gesprek</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Contact block */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="tel:0547381035"
                  className="inline-flex items-center gap-2 rounded hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  0547 38 10 35
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bouwbedrijfhoman.nl"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@bouwbedrijfhoman.nl
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
                <span>
                  Vonderweg 19
                  <br />
                  7468 DC Enter
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs">
                  <dt className="text-white/50">Maandag</dt>
                  <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 17:00</dd>
                  <dt className="text-white/50">Dinsdag</dt>
                  <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 17:00</dd>
                  <dt className="text-white/50">Woensdag</dt>
                  <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 17:00</dd>
                  <dt className="text-white/50">Donderdag</dt>
                  <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 17:00</dd>
                  <dt className="text-white/50">Vrijdag</dt>
                  <dd className="tabular-nums">08:30 – 12:30 · 13:00 – 16:00</dd>
                </dl>
              </li>
            </ul>
          </div>

          {/* Nav block */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Site
            </p>
            <nav className="mt-5 flex flex-col gap-2 text-sm" aria-label="Footer navigatie">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom strip */}
          <div className="lg:col-span-12">
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/bouwgarant-logo.png"
                  alt="Bouwgarant gecertificeerd"
                  width={60}
                  height={50}
                  className="h-8 w-auto brightness-0 invert opacity-70"
                />
                <span>Bouwgarant gecertificeerd</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {legal.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="transition-colors hover:text-white"
                  >
                    {l.name}
                  </Link>
                ))}
                <span aria-hidden="true">©</span>
                <span>{new Date().getFullYear()} Bouwbedrijf Homan B.V.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
