"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Diensten", href: "/diensten" },
  { name: "Projecten", href: "/projecten" },
  { name: "Actueel", href: "/actueel" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Werken bij", href: "/werken-bij" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-32 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-36 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground"
          aria-label="Bouwbedrijf Homan — naar home"
        >
          <Image
            src="/images/logo.png"
            alt="Bouwbedrijf Homan"
            width={420}
            height={240}
            sizes="(min-width: 768px) 360px, 260px"
            className="h-[84px] w-auto md:h-[104px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {navigation.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-6 py-3 text-lg font-medium tracking-tight transition-colors ${
                  active
                    ? "bg-foreground/5 text-foreground"
                    : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-foreground py-3 pl-7 pr-2.5 text-lg font-medium text-background transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <span>Contact</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Menu openen"
              className="inline-flex min-h-[var(--tap)] min-w-[var(--tap)] items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background p-8">
              <div className="mt-6 mb-10">
                <Image
                  src="/images/logo.png"
                  alt="Bouwbedrijf Homan"
                  width={160}
                  height={92}
                  className="h-10 w-auto"
                />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobiele navigatie">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  Home
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-foreground/5"
                  >
                    {item.name}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group mt-8 inline-flex w-full items-center justify-between gap-2 rounded-full bg-foreground py-2 pl-5 pr-2 text-sm font-medium text-background"
              >
                <span>Contact</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
