import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PlaceholderBadge } from "@/components/placeholder-badge";

export const metadata: Metadata = {
  title: "Voorstel A — Editorial-Architectural",
  robots: { index: false, follow: false },
};

const services = [
  {
    n: "i",
    title: "Woningbouw",
    body: "Nieuwbouw van vrijstaande woningen en kleine appartementencomplexen op maat.",
    img: "/images/projecten/woningbouw/stijlvol-landhuis.jpg",
  },
  {
    n: "ii",
    title: "Utiliteitsbouw",
    body: "Bedrijfspanden, kantoren en multifunctionele centra — van ontwerp tot oplevering.",
    img: "/images/projecten/utiliteitsbouw/bedrijfspand-koops.jpg",
  },
  {
    n: "iii",
    title: "Verbouwing",
    body: "Aanbouwen en uitbouwen die naadloos opgaan in de bestaande woning.",
    img: "/images/projecten/woningbouw/enter-1.jpg",
  },
  {
    n: "iv",
    title: "Renovatie",
    body: "Karakteristieke panden teruggebracht en toekomstbestendig gemaakt.",
    img: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
  },
];

const projects = [
  {
    n: "01",
    title: "Appartementen Markelo",
    type: "Woningbouw",
    loc: "Markelo",
    year: "2024",
    img: "/images/projecten/utiliteitsbouw/appartementen-markelo.jpg",
  },
  {
    n: "02",
    title: "Centrumplan Enter",
    type: "Utiliteitsbouw",
    loc: "Enter",
    year: "2023",
    img: "/images/projecten/utiliteitsbouw/centrumplan-enter.jpg",
  },
  {
    n: "03",
    title: "Bedrijfspand Koops",
    type: "Utiliteitsbouw",
    loc: "Rijssen",
    year: "2023",
    img: "/images/projecten/utiliteitsbouw/bedrijfspand-koops.jpg",
  },
  {
    n: "04",
    title: "Stijlvol Landhuis",
    type: "Woningbouw",
    loc: "Holten",
    year: "2022",
    img: "/images/projecten/woningbouw/stijlvol-landhuis.jpg",
  },
];

export default function PreviewA() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-geist-sans)",
        backgroundColor: "#F3F0EA",
        color: "#141410",
      }}
    >
      {/* Sticky return bar */}
      <div
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{
          backgroundColor: "rgba(243,240,234,0.85)",
          borderColor: "rgba(20,20,16,0.1)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          <Link href="/design-preview" className="hover:opacity-60">
            ← Voorstellen
          </Link>
          <span className="opacity-50">Voorstel A — Editorial-Architectural</span>
        </div>
      </div>

      {/* Top nav */}
      <header className="mx-auto max-w-[1400px] px-6 pt-10 pb-16 md:pt-14 md:pb-24">
        <nav className="flex items-center justify-between">
          <div
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-2xl font-medium tracking-tight"
          >
            Homan
            <span style={{ color: "#2D3B30" }}>.</span>
          </div>
          <ul
            className="hidden gap-10 text-sm md:flex"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            {["Werk", "Diensten", "Bureau", "Vacatures", "Contact"].map((l) => (
              <li key={l} className="uppercase tracking-[0.14em]">
                <a href="#" className="hover:opacity-60">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="hidden rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-[#141410] hover:text-[#F3F0EA] md:inline-block"
            style={{ fontFamily: "var(--font-jetbrains-mono)", borderColor: "#141410" }}
          >
            Start een gesprek
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="mb-6 text-xs uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
            >
              § Bouwbedrijf — Enter, Twente — est. 1982
            </p>
            <h1
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-[clamp(4rem,13vw,11rem)] font-normal leading-[0.88] tracking-[-0.03em]"
            >
              Bouwen<span style={{ color: "#2D3B30" }}>.</span>
              <br />
              Blijft<span style={{ color: "#8B7B5E" }}>.</span>
              <br />
              Staan<span style={{ color: "#A94B2B" }}>.</span>
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-end lg:col-span-4">
            <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden lg:mb-0">
              <Image
                src="/images/projecten/woningbouw/stijlvol-landhuis.jpg"
                alt="Stijlvol landhuis"
                fill
                className="object-cover"
                sizes="(min-width: 1240px) 380px, 90vw"
              />
              <PlaceholderBadge label="Placeholder" />
              <div
                className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.16em] text-white"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                → Landhuis, Holten — 2022
              </div>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed" style={{ color: "#3C3830" }}>
              Al meer dan veertig jaar realiseert Bouwbedrijf Homan vakmanschap
              in heel Twente. Woningen, bedrijfspanden en restauraties — gebouwd
              om te blijven.
            </p>
          </div>
        </div>
      </section>

      {/* § 01 Discipline */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(20,20,16,0.15)" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="mb-16 flex items-baseline justify-between gap-10">
            <p
              className="text-xs uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
            >
              § 01 — Discipline
            </p>
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="max-w-2xl text-right text-[clamp(1.5rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-tight"
            >
              Vier praktijken, onder één dak georganiseerd.
            </h2>
          </div>
          <ul>
            {services.map((s) => (
              <li
                key={s.title}
                className="group grid grid-cols-12 items-center gap-6 border-t py-8"
                style={{ borderColor: "rgba(20,20,16,0.15)" }}
              >
                <span
                  className="col-span-2 text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
                >
                  {s.n}.
                </span>
                <h3
                  className="col-span-10 text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[0.95] tracking-[-0.02em] md:col-span-4"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="col-span-10 col-start-3 text-base leading-relaxed md:col-span-4 md:col-start-7"
                  style={{ color: "#3C3830" }}
                >
                  {s.body}
                </p>
                <div className="col-span-12 relative hidden aspect-[4/3] overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:col-span-2 md:block">
                  <Image src={s.img} alt="" fill className="object-cover" sizes="200px" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* § 02 Werk */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(20,20,16,0.15)" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="mb-16">
            <p
              className="mb-4 text-xs uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
            >
              § 02 — Werk
            </p>
            <h2
              style={{ fontFamily: "var(--font-fraunces)" }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.95] tracking-[-0.02em]"
            >
              Een selectie.
            </h2>
          </div>
          <div className="grid gap-20 lg:gap-28">
            {projects.map((p, i) => (
              <article
                key={p.n}
                className={`grid grid-cols-12 gap-6 ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}
              >
                <figure className="relative col-span-12 aspect-[4/3] overflow-hidden lg:col-span-7">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1240px) 780px, 100vw"
                  />
                </figure>
                <div className="col-span-12 flex flex-col justify-end lg:col-span-5 lg:pb-4 lg:pl-8">
                  <p
                    className="mb-4 text-xs uppercase tracking-[0.22em]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
                  >
                    № {p.n} — {p.type} — {p.loc} — {p.year}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1] tracking-[-0.02em]"
                  >
                    {p.title}
                  </h3>
                  <a
                    href="#"
                    className="mt-6 inline-block border-b pb-1 text-sm uppercase tracking-[0.18em] hover:opacity-60"
                    style={{ fontFamily: "var(--font-jetbrains-mono)", borderColor: "#141410" }}
                  >
                    Zie project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* § 03 Cijfers */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(20,20,16,0.15)", backgroundColor: "#141410", color: "#F3F0EA" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <p
            className="mb-16 text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", opacity: 0.6 }}
          >
            § 03 — Cijfers
          </p>
          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {[
              { n: "40+", label: "Jaar vakmanschap" },
              { n: "700", label: "Opgeleverde projecten" },
              { n: "34", label: "Vaste medewerkers" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{ fontFamily: "var(--font-fraunces)" }}
                  className="text-[clamp(5rem,13vw,11rem)] font-normal leading-[0.85] tracking-[-0.03em]"
                >
                  {s.n}
                </div>
                <p
                  className="mt-4 text-sm uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", opacity: 0.7 }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 04 Woord */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-32 md:py-48 text-center">
          <p
            className="mb-12 text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
          >
            § 04 — Woord
          </p>
          <blockquote
            style={{ fontFamily: "var(--font-instrument-serif)" }}
            className="text-[clamp(1.75rem,3.5vw,3rem)] italic leading-[1.25]"
          >
            &ldquo;Homan bouwt niet de snelste, maar wel de stilste en
            degelijkste huizen van Twente. Twintig jaar later staat alles nog
            exact zoals opgeleverd.&rdquo;
          </blockquote>
          <p
            className="mt-8 text-xs uppercase tracking-[0.22em]"
            style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#8B7B5E" }}
          >
            — Familie De Vries, opdrachtgever
          </p>
        </div>
      </section>

      {/* Footer colophon */}
      <footer
        className="border-t"
        style={{ borderColor: "rgba(20,20,16,0.15)" }}
      >
        <div
          className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 text-sm md:grid-cols-4"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#8B7B5E" }}>
              Kantoor
            </p>
            <p>Vonderweg 19</p>
            <p>7468 DC Enter</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#8B7B5E" }}>
              Contact
            </p>
            <p>0547 381 035</p>
            <p>info@bouwbedrijfhoman.nl</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#8B7B5E" }}>
              Uren
            </p>
            <p>Ma–Do 08:30–17:00</p>
            <p>Vr 08:30–16:00</p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em]" style={{ color: "#8B7B5E" }}>
              Colophon
            </p>
            <p>© 2026 Bouwbedrijf Homan B.V.</p>
            <p>KvK 08055832 · Bouwgarant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
