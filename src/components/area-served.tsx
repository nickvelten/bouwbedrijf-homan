import { MapPin } from "lucide-react";

const CITIES = [
  "Enter",
  "Wierden",
  "Rijssen",
  "Holten",
  "Markelo",
  "Goor",
  "Almelo",
  "Hengelo",
  "Borne",
  "Enschede",
  "Oldenzaal",
  "Delden",
  "Nijverdal",
  "Hellendoorn",
] as const;

/**
 * AreaServed — visible representation of the JSON-LD areaServed field.
 * Reinforces local SEO (city names crawlable in HTML) and answers the
 * "werken jullie ook in mijn dorp?" question without forcing a click.
 *
 * Rendered as a server component — pure HTML, no hydration cost.
 */
export function AreaServed() {
  return (
    <section
      aria-labelledby="werkgebied-heading"
      className="py-[var(--spacing-fluid-xl)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-[var(--spacing-fluid-l)] lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-fluid-xs font-semibold uppercase tracking-widest text-red-600">
              Werkgebied
            </p>
            <h2
              id="werkgebied-heading"
              className="mt-2 text-fluid-xl font-bold tracking-tight"
            >
              Actief in heel Twente en omstreken
            </h2>
            <p className="mt-3 max-w-2xl text-fluid-base text-muted-foreground">
              Vanuit ons hoofdkantoor in Enter werken we binnen een straal van
              50&nbsp;km. Staat uw plaats er niet bij?{" "}
              <a
                href="/contact"
                className="font-medium text-red-600 underline-offset-4 hover:underline"
              >
                Neem contact op
              </a>{" "}
              — vaak is meer mogelijk dan u denkt.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <li key={city}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                    <MapPin
                      className="h-3.5 w-3.5 text-red-600"
                      aria-hidden="true"
                    />
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <div
              aria-hidden="true"
              className="relative h-64 w-64 rounded-full bg-gradient-to-br from-red-50 to-red-100/50 ring-1 ring-red-100"
            >
              <div className="absolute inset-8 rounded-full ring-1 ring-dashed ring-red-300/60" />
              <div className="absolute inset-16 rounded-full ring-1 ring-dashed ring-red-400/60" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">Enter</p>
                <p className="text-xs text-muted-foreground">50 km werkstraal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
