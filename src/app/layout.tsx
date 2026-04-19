import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeferredWidgets } from "@/components/deferred-widgets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="nl" className={`${geistSans.variable} h-full antialiased`}>
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
                  ],
                  opens: "08:30",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "08:30",
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
      <body className="min-h-full flex flex-col pb-[calc(env(safe-area-inset-bottom)+64px)] md:pb-0">
        <a href="#main" className="skip-link">
          Spring naar hoofdinhoud
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <DeferredWidgets />
      </body>
    </html>
  );
}
