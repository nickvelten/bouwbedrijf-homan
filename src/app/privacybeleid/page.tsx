import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { CookieDeclaration } from "@/components/cookie-declaration";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees hoe Bouwbedrijf Homan omgaat met je persoonsgegevens: welke gegevens we verwerken, waarvoor en wat je rechten zijn volgens de AVG.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/privacybeleid" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Wie zijn wij?",
    body: (
      <>
        <p>
          Bouwbedrijf Homan B.V. is gevestigd aan de Vonderweg 19, 7468 DC in
          Enter en is verantwoordelijk voor de verwerking van persoonsgegevens
          zoals beschreven in dit privacybeleid.
        </p>
        <p>
          Vragen over dit beleid? Neem contact op via{" "}
          <a
            href="mailto:info@bouwbedrijfhoman.nl"
            className="underline underline-offset-4 hover:text-foreground"
          >
            info@bouwbedrijfhoman.nl
          </a>{" "}
          of bel{" "}
          <a
            href="tel:0547381035"
            className="underline underline-offset-4 hover:text-foreground"
          >
            0547 38 10 35
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "2. Welke gegevens verwerken we?",
    body: (
      <>
        <p>
          Wij verwerken alleen persoonsgegevens die je zelf aan ons verstrekt
          of die nodig zijn om de website goed te laten werken:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Contactformulier:</strong> je naam, e-mailadres, je bericht
            en — als je die invult — je telefoonnummer en onderwerp.
          </li>
          <li>
            <strong>Sollicitaties:</strong> de gegevens die je meestuurt als je
            reageert op een vacature.
          </li>
          <li>
            <strong>Websitebezoek:</strong> geanonimiseerde statistieken over
            het gebruik van de website (alleen na jouw toestemming via de
            cookiebanner).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Waarvoor gebruiken we je gegevens?",
    body: (
      <>
        <p>We gebruiken je gegevens uitsluitend om:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>contact met je op te nemen naar aanleiding van je bericht of aanvraag;</li>
          <li>je sollicitatie te behandelen;</li>
          <li>de website te verbeteren op basis van geanonimiseerde bezoekstatistieken.</li>
        </ul>
        <p>
          De grondslag hiervoor is de uitvoering van een (mogelijke)
          overeenkomst, jouw toestemming of ons gerechtvaardigd belang bij een
          goed functionerende website. We gebruiken je gegevens niet voor
          geautomatiseerde besluitvorming en verkopen ze nooit aan derden.
        </p>
      </>
    ),
  },
  {
    title: "4. Hoe lang bewaren we je gegevens?",
    body: (
      <p>
        We bewaren je gegevens niet langer dan nodig is voor het doel waarvoor
        je ze hebt verstrekt. Berichten via het contactformulier bewaren we
        zolang dat nodig is voor de afhandeling van je vraag of het project dat
        eruit voortkomt. Sollicitatiegegevens verwijderen we uiterlijk vier
        weken na afronding van de procedure, tenzij je toestemming geeft om ze
        langer te bewaren.
      </p>
    ),
  },
  {
    title: "5. Met wie delen we gegevens?",
    body: (
      <p>
        We delen je gegevens alleen met dienstverleners die nodig zijn om de
        website en onze communicatie te laten werken (zoals onze hosting- en
        e-mailprovider), en alleen voor zover dat noodzakelijk is. Met deze
        partijen zijn afspraken gemaakt over de beveiliging van je gegevens.
        Verder verstrekken we gegevens alleen aan derden als de wet ons
        daartoe verplicht.
      </p>
    ),
  },
  {
    title: "6. Jouw rechten",
    body: (
      <>
        <p>
          Op grond van de AVG heb je het recht om je persoonsgegevens in te
          zien, te laten corrigeren of te laten verwijderen. Ook kun je
          bezwaar maken tegen de verwerking, je toestemming intrekken of
          vragen om overdracht van je gegevens. Stuur daarvoor een bericht
          naar{" "}
          <a
            href="mailto:info@bouwbedrijfhoman.nl"
            className="underline underline-offset-4 hover:text-foreground"
          >
            info@bouwbedrijfhoman.nl
          </a>
          .
        </p>
        <p>
          Ben je niet tevreden over hoe wij met je gegevens omgaan? Dan kun je
          een klacht indienen bij de{" "}
          <a
            href="https://www.autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Autoriteit Persoonsgegevens
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "7. Beveiliging",
    body: (
      <p>
        We nemen passende technische en organisatorische maatregelen om je
        gegevens te beschermen tegen verlies of onrechtmatig gebruik. De
        website maakt gebruik van een beveiligde verbinding (HTTPS).
      </p>
    ),
  },
];

export default function PrivacybeleidPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-3 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl px-3 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
            <BrandMark className="h-2.5 w-3 text-foreground" />
            Privacybeleid
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.035em]">
            Zo gaan we met je gegevens om.
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/70">
            Bouwbedrijf Homan verwerkt zo min mogelijk persoonsgegevens, en
            alleen voor duidelijke doelen. Hieronder lees je precies welke
            gegevens we verwerken, waarom, en welke rechten je hebt volgens de
            Algemene Verordening Gegevensbescherming (AVG).
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground/40">
            Laatst bijgewerkt: juni 2026
          </p>
        </div>
      </section>

      <section className="px-3 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-3 sm:px-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-foreground/70">
                {section.body}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
              8. Cookies
            </h2>
            <div className="mt-4 space-y-4 text-foreground/70">
              <p>
                Deze website gebruikt cookies. Bij je eerste bezoek vragen we
                via de cookiebanner toestemming voor het plaatsen van
                niet-noodzakelijke cookies. Je kunt je voorkeuren op elk
                moment aanpassen. Hieronder vind je de actuele
                cookieverklaring met alle cookies die deze website gebruikt:
              </p>
              <CookieDeclaration />
            </div>
          </div>

          <p className="border-t border-foreground/10 pt-8 text-sm text-foreground/50">
            Dit privacybeleid kan van tijd tot tijd worden aangepast, bijvoorbeeld
            als de website of wetgeving verandert. De actuele versie vind je
            altijd op deze pagina. Vragen? Neem{" "}
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-foreground"
            >
              contact
            </Link>{" "}
            met ons op.
          </p>
        </div>
      </section>
    </div>
  );
}
