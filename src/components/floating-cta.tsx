"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/design-preview")) return null;
  if (pathname?.startsWith("/contact")) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 md:bottom-10">
      <Link
        href="/contact"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-2 pr-5 text-sm font-medium text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white ring-1 ring-white/10"
        >
          <span className="font-serif text-base italic">H</span>
        </span>
        <span className="tracking-tight">Even sparren?</span>
        <ArrowUpRight
          className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
