import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PlaceholderBadge } from "@/components/placeholder-badge";

export const metadata: Metadata = {
  title: "Voorstel C — Digital-native Bold",
  robots: { index: false, follow: false },
};

const projects = [
  {
    i: "01",
    title: "Appartementen Markelo",
    year: "2024",
    cat: "Woningbouw",
    img: "/images/projecten/utiliteitsbouw/appartementen-markelo.jpg",
  },
  {
    i: "02",
    title: "Centrumplan Enter",
    year: "2023",
    cat: "Utiliteitsbouw",
    img: "/images/projecten/utiliteitsbouw/centrumplan-enter.jpg",
  },
  {
    i: "03",
    title: "Bedrijfspand Koops",
    year: "2023",
    cat: "Utiliteitsbouw",
    img: "/images/projecten/utiliteitsbouw/bedrijfspand-koops.jpg",
  },
  {
    i: "04",
    title: "Stijlvol Landhuis",
    year: "2022",
    cat: "Woningbouw",
    img: "/images/projecten/woningbouw/stijlvol-landhuis.jpg",
  },
  {
    i: "05",
    title: "Kantoor Enter",
    year: "2022",
    cat: "Utiliteitsbouw",
    img: "/images/projecten/utiliteitsbouw/kantoorpand-enter.jpg",
  },
  {
    i: "06",
    title: "Restauratie Enter",
    year: "2022",
    cat: "Renovatie",
    img: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
  },
];

const services = [
  "Woningbouw",
  "Utiliteitsbouw",
  "Verbouwing",
  "Renovatie",
];

const INK = "#0A0A0A";
const CREAM = "#EEEEE8";
const ACID = "#E5FF3C";

export default function PreviewC() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-geist-sans)",
        backgroundColor: INK,
        color: CREAM,
      }}
    >
      {/* Return bar */}
      <div
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{
          backgroundColor: "rgba(10,10,10,0.85)",
          borderColor: "rgba(255,255,255,0.1)",
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em]">
          <Link href="/design-preview" className="hover:opacity-60">
            ← Voorstellen
          </Link>
          <span style={{ color: ACID }}>Voorstel C — Digital-native Bold</span>
        </div>
      </div>

      {/* Nav */}
      <header className="mx-auto max-w-[1600px] px-6 pt-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-base"
              style={{ backgroundColor: ACID, color: INK }}
            >
              ★
            </span>
            Homan<span style={{ color: ACID }}>®</span>
          </div>
          <ul
            className="hidden gap-8 text-sm font-medium md:flex"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {["Werk", "Diensten", "Bureau", "Werken bij", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="uppercase tracking-[0.14em] transition-colors hover:text-[#E5FF3C]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="hidden rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-transform hover:scale-105 md:inline-block"
            style={{ backgroundColor: ACID, color: INK }}
          >
            Bouw met ons
          </a>
        </nav>
      </header>

      {/* Hero — oversized typography */}
      <section className="mx-auto max-w-[1600px] px-6 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="mb-8 flex items-center gap-4">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: ACID }}
          />
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8C8C83" }}
          >
            Bouwbedrijf sinds 1982 — Enter, Twente
          </p>
        </div>
        <h1 className="text-[clamp(4.5rem,16vw,16rem)] font-bold leading-[0.82] tracking-[-0.055em]">
          WE
          <br />
          BUILD{" "}
          <span
            className="inline-block rounded-full px-6 align-middle"
            style={{ backgroundColor: ACID, color: INK, fontSize: "0.6em" }}
          >
            things
          </span>
          <br />
          THAT <em className="italic" style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400 }}>last</em>.
        </h1>
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-end">
          <p className="max-w-lg text-lg leading-relaxed" style={{ color: "#B8B8B0" }}>
            Woningen, bedrijfspanden en renovaties in heel Twente.
            Vakmanschap dat niet in trend-cycles denkt.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full bg-[#EEEEE8] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#0A0A0A] transition-transform hover:-translate-y-1"
          >
            Start een project
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              style={{ backgroundColor: INK, color: ACID }}
            >
              →
            </span>
          </a>
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8C8C83" }}
          >
            of bel 0547 381 035
          </p>
        </div>
      </section>

      {/* Marquee ticker */}
      <div
        className="overflow-hidden border-y py-5"
        style={{
          backgroundColor: ACID,
          color: INK,
          borderColor: "rgba(10,10,10,0.2)",
        }}
      >
        <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap text-xl font-bold uppercase tracking-[0.05em] md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Nieuwbouw",
              "★",
              "Utiliteitsbouw",
              "★",
              "Verbouwing",
              "★",
              "Renovatie",
              "★",
              "Restauratie",
              "★",
              "40+ Jaar Vakmanschap",
              "★",
            ].map((t, i) => (
              <span key={`${k}-${i}`}>{t}</span>
            )),
          )}
        </div>
      </div>

      {/* Services as vertical stacked pills */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:py-40">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            Wat we doen.
          </h2>
          <p className="max-w-sm text-base" style={{ color: "#B8B8B0" }}>
            Vier pijlers. Eén team. Van eerste schets tot laatste oplevering.
          </p>
        </div>
        <ul className="space-y-4">
          {services.map((s, i) => (
            <li
              key={s}
              className="group flex items-center justify-between rounded-full border px-6 py-6 transition-all hover:bg-[#E5FF3C] hover:text-[#0A0A0A] md:px-10 md:py-8"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span
                  className="text-sm font-mono uppercase tracking-[0.2em]"
                  style={{ color: "#8C8C83" }}
                >
                  0{i + 1}
                </span>
                <span className="text-3xl font-bold tracking-tight md:text-5xl">
                  {s}
                </span>
              </div>
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full transition-transform group-hover:rotate-45 md:h-14 md:w-14"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                →
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Horizontal scroll projects */}
      <section style={{ backgroundColor: CREAM, color: INK }}>
        <div className="mx-auto max-w-[1600px] px-6 pt-24 md:pt-40">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em]">
              Recent werk.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors hover:bg-[#0A0A0A] hover:text-[#EEEEE8]"
              style={{ borderColor: INK }}
            >
              Alle projecten →
            </a>
          </div>
        </div>
        <div
          className="flex snap-x gap-6 overflow-x-auto pb-24 pl-6 pr-6 md:pb-40"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((p) => (
            <article
              key={p.i}
              className="group relative shrink-0 snap-start"
              style={{ width: "min(540px, 82vw)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 600px) 540px, 82vw"
                />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ backgroundColor: ACID, color: INK, fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {p.i}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <span
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8C8C83" }}
                >
                  {p.year}
                </span>
              </div>
              <p
                className="mt-1 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#666" }}
              >
                {p.cat}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats in yellow block */}
      <section style={{ backgroundColor: ACID, color: INK }}>
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:py-40">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { n: "40+", l: "Jaar actief" },
              { n: "700", l: "Projecten opgeleverd" },
              { n: "34", l: "Vaste vakmensen" },
            ].map((s) => (
              <div key={s.l} className="border-t-2 pt-6" style={{ borderColor: INK }}>
                <div className="text-[clamp(5rem,14vw,14rem)] font-bold leading-[0.82] tracking-[-0.05em]">
                  {s.n}
                </div>
                <p
                  className="mt-4 text-sm font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + team placeholder */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:py-40">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-[4/5]">
            <Image
              src="/images/projecten/woningbouw/enter-2.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 905px) 640px, 90vw"
            />
            <PlaceholderBadge label="Team — placeholder" />
          </div>
          <div>
            <p
              className="mb-6 text-xs uppercase tracking-[0.25em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8C8C83" }}
            >
              — Hallo
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              Laten we iets{" "}
              <span style={{ color: ACID }}>bouwen</span> dat er nog staat
              in 2060.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.18em]"
                style={{ backgroundColor: ACID, color: INK }}
              >
                Plan een kennismaking →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em]"
                style={{ borderColor: CREAM }}
              >
                Bel direct
              </a>
            </div>
            <div
              className="mt-14 grid grid-cols-2 gap-8 border-t pt-8 text-sm"
              style={{ borderColor: "rgba(255,255,255,0.15)", fontFamily: "var(--font-jetbrains-mono)" }}
            >
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em]" style={{ color: "#8C8C83" }}>
                  Kantoor
                </p>
                <p>Vonderweg 19, Enter</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em]" style={{ color: "#8C8C83" }}>
                  Direct
                </p>
                <p>0547 381 035</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.15)" }}
      >
        <div
          className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8C8C83" }}
        >
          <div>© 2026 Bouwbedrijf Homan®</div>
          <div className="flex flex-wrap gap-6">
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Instagram ↗</a>
          </div>
          <div style={{ color: ACID }}>KvK 08055832 · Bouwgarant</div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
