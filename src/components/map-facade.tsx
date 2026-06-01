import { MapPin } from "lucide-react";

// Keyless Google Maps embed (no API key required). The maps.google.com/maps
// `output=embed` form is the battle-tested keyless iframe that renders a real,
// interactive map centred on the address.
const MAPS_URL =
  "https://maps.google.com/maps?q=Vonderweg%2019%2C%207468%20DC%20Enter&t=&z=15&ie=UTF8&iwloc=&output=embed";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Vonderweg+19,+7468+DC+Enter";

/**
 * Direct, interactive Google Maps embed of the office location.
 * Loads lazily (only when scrolled near) to keep initial paint light,
 * but renders the real map straight away — no click-to-load step.
 */
export function MapFacade() {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="aspect-[4/3]">
        <iframe
          src={MAPS_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Locatie Bouwbedrijf Homan op Google Maps"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 bg-card px-4 py-3">
        <p className="inline-flex items-center gap-2 text-sm font-medium">
          <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
          Vonderweg 19, 7468 DC Enter
        </p>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[var(--tap)] items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          Routebeschrijving
        </a>
      </div>
    </div>
  );
}
