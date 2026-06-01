import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const nav = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Projecten", href: "/projecten" },
  { name: "Werkgebied", href: "/werkgebied" },
  { name: "Actueel", href: "/actueel" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Werken bij", href: "/werken-bij" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy", href: "/privacy" },
  { name: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
];

// Brand glyphs (simple-icons paths) — lucide-react in this version doesn't
// ship social brand icons, so we render them as inline SVG.
const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bouwbedrijfhoman/",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bouwbedrijfhoman",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bouwbedrijf-homan/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
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
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
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
              <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
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
                <div className="flex items-center gap-2">
                  {social.map(({ name, href, path }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
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
