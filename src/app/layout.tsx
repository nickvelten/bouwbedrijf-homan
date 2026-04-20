import type { Metadata } from "next";
import { Geist, Fraunces, Instrument_Serif, JetBrains_Mono, Archivo_Black, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChromeGate } from "@/components/chrome-gate";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-display-alt",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bouwbedrijfhoman.nl"),
  title: {
    default: "Bouwbedrijf Homan | Aannemer in Twente sinds 1982",
    template: "%s | Bouwbedrijf Homan",
  },
  description:
    "Bouwbedrijf Homan is uw betrouwbare aannemer in Twente voor woningbouw, utiliteitsbouw, verbouwingen en renovaties. Al meer dan 45 jaar vakmanschap in Enter en omgeving.",
  keywords: [
    "aannemer twente",
    "bouwbedrijf twente",
    "aannemer enter",
    "woningbouw twente",
    "utiliteitsbouw twente",
    "verbouwing twente",
    "renovatie twente",
    "nieuwbouw twente",
    "aanbouw twente",
    "bouwbedrijf homan",
    "aannemer hengelo",
    "aannemer almelo",
    "aannemer enschede",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.bouwbedrijfhoman.nl",
    siteName: "Bouwbedrijf Homan",
    title: "Bouwbedrijf Homan | Aannemer in Twente sinds 1982",
    description:
      "Uw betrouwbare aannemer in Twente voor woningbouw, utiliteitsbouw, verbouwingen en renovaties. Al meer dan 45 jaar vakmanschap.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouwbedrijf Homan | Aannemer in Twente sinds 1982",
    description:
      "Uw betrouwbare aannemer in Twente voor woningbouw, utiliteitsbouw, verbouwingen en renovaties.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bouwbedrijfhoman.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${fraunces.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} ${archivoBlack.variable} ${archivo.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              name: "Bouwbedrijf Homan B.V.",
              url: "https://www.bouwbedrijfhoman.nl",
              logo: "https://www.bouwbedrijfhoman.nl/logo.png",
              description:
                "Bouwbedrijf Homan is uw betrouwbare aannemer in Twente voor woningbouw, utiliteitsbouw, verbouwingen en renovaties. Al meer dan 45 jaar vakmanschap.",
              foundingDate: "1982",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: 35,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vonderweg 19",
                addressLocality: "Enter",
                postalCode: "7468 DC",
                addressRegion: "Overijssel",
                addressCountry: "NL",
              },
              telephone: "+31547381035",
              email: "info@bouwbedrijfhoman.nl",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:30",
                  closes: "12:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "13:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "13:00",
                  closes: "16:00",
                },
              ],
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 52.32,
                  longitude: 6.58,
                },
                geoRadius: "50000",
              },
              sameAs: [
                "https://www.instagram.com/bouwbedrijfhoman",
                "https://www.facebook.com/bouwbedrijfhoman",
                "https://www.linkedin.com/company/bouwbedrijf-homan/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        <a href="#main" className="skip-link">
          Spring naar hoofdinhoud
        </a>
        <ChromeGate>
          <Header />
        </ChromeGate>
        <main id="main" className="flex-1">
          {children}
        </main>
        <ChromeGate>
          <Footer />
        </ChromeGate>
      </body>
    </html>
  );
}
