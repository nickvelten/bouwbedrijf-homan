"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5!2d6.58!3d52.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVm9uZGVyd2VnIDE5LCBFbnRlcg!5e0!3m2!1snl!2snl!4v1";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Vonderweg+19,+7468+DC+Enter";

/**
 * Click-to-load map facade.
 * Avoids loading ~400KB of Google Maps tiles on initial paint.
 * On click, swaps in the iframe so users can interact with the map.
 */
export function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <iframe
          src={MAPS_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Locatie Bouwbedrijf Homan op Google Maps"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
      {/* Decorative grid pattern as map placeholder */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <MapPin
          className="h-10 w-10 text-accent drop-shadow-md"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-background via-background/95 to-background/0 p-4">
        <p className="text-center text-sm font-medium">
          Vonderweg 19, 7468 DC Enter
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex min-h-[var(--tap)] items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Toon kaart
          </button>
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
    </div>
  );
}
