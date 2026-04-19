"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Projecten", href: "/projecten" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Werken bij", href: "/werken-bij" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background transition-all duration-300">
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "h-16" : "h-28"}`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Bouwbedrijf Homan"
            width={188}
            height={108}
            sizes="188px"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12 sm:h-14" : "h-24 sm:h-[108px]"}`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-5 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted"
            >
              {item.name}
            </Link>
          ))}
          <LinkButton
            href="/contact"
            className="ml-3 bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            0547 381 035
          </LinkButton>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Menu openen"
            className="inline-flex min-h-[var(--tap)] min-w-[var(--tap)] items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="mt-6 mb-8">
              <Image
                src="/images/logo.png"
                alt="Bouwbedrijf Homan"
                width={160}
                height={92}
                className="h-10 w-auto"
              />
            </div>
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted"
                >
                  {item.name}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-3">
              <LinkButton
                href="tel:0547381035"
                aria-label="Bel Bouwbedrijf Homan op 0547 381 035"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                0547 381 035
              </LinkButton>
              <LinkButton
                href="https://wa.me/31652488000"
                aria-label="Open WhatsApp-gesprek met Bouwbedrijf Homan"
                className="w-full bg-[#25D366] text-white hover:bg-[#1FB855]"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                WhatsApp
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Contact opnemen
              </LinkButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
