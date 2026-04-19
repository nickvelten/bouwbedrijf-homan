import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { MapFacade } from "@/components/map-facade";
import { FadeIn } from "@/components/animations-css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Bouwbedrijf Homan in Enter. Bel 0547 381 035 of mail info@bouwbedrijfhoman.nl voor een vrijblijvend gesprek.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <Image
          src="/images/hero/team.jpg"
          alt="Bouwbedrijf Homan"
          fill
          className="object-cover opacity-15"
          preload
          sizes="100vw"
          fetchPriority="high"
          quality={45}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
                Neem contact op
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Contact
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Heeft u een vraag of wilt u vrijblijvend de mogelijkheden
                bespreken? Neem gerust contact met ons op.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form with choice cards */}
            <ContactForm />

            {/* Contact info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold">Contactgegevens</h2>
                  <div className="mt-4 space-y-4">
                    <a
                      href="tel:0547381035"
                      className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                    >
                      <div className="rounded-lg bg-accent/10 p-2">
                        <Phone className="h-4 w-4 text-accent" />
                      </div>
                      0547 381 035
                    </a>
                    <a
                      href="mailto:info@bouwbedrijfhoman.nl"
                      className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                    >
                      <div className="rounded-lg bg-accent/10 p-2">
                        <Mail className="h-4 w-4 text-accent" />
                      </div>
                      info@bouwbedrijfhoman.nl
                    </a>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="rounded-lg bg-accent/10 p-2">
                        <MapPin className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        Vonderweg 19
                        <br />
                        7468 DC Enter
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="rounded-lg bg-accent/10 p-2">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p>Ma - Do: 08:30 - 17:00</p>
                        <p>Vrijdag: 08:30 - 16:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <MapFacade />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
