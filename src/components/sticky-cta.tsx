"use client";

import { Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const TEL = "0547381035";
const TEL_DISPLAY = "0547 381 035";
// 31 6 52488… is a placeholder; replace with the real WhatsApp business number when known.
const WHATSAPP = "31652488000";

/**
 * Mobile-only sticky bottom CTA bar.
 * Two thumb-reachable primary actions: bellen + WhatsApp.
 * Hidden on desktop (≥ md) — header carries the phone CTA there.
 * Hidden on /contact (form already inline).
 */
export function StickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div
      role="region"
      aria-label="Snel contact"
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md shadow-[0_-4px_16px_rgb(0_0_0_/_0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-2 gap-px bg-border">
        <a
          href={`tel:${TEL}`}
          className="tap flex items-center justify-center gap-2 bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors active:bg-muted"
        >
          <Phone className="h-5 w-5 text-red-600" aria-hidden="true" />
          <span>
            Bel direct
            <span className="sr-only"> — {TEL_DISPLAY}</span>
          </span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tap flex items-center justify-center gap-2 bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors active:bg-muted"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden="true" />
          <span>
            WhatsApp
            <span className="sr-only"> — open chat met Bouwbedrijf Homan</span>
          </span>
        </a>
      </div>
    </div>
  );
}
