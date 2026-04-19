import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  Coffee,
  Wrench,
  HardHat,
} from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations-css";

export const metadata: Metadata = {
  title: "Werken bij",
  description:
    "Werken bij Bouwbedrijf Homan in Enter. Bekijk onze vacatures en word onderdeel van een hecht team vakmensen in Twente.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/werken-bij" },
};

const perks = [
  {
    icon: Users,
    title: "Hecht team",
    description: "Werk in een team van 35 betrokken collega's.",
  },
  {
    icon: TrendingUp,
    title: "Groei",
    description: "Opleidingen en doorgroeimogelijkheden.",
  },
  {
    icon: Wrench,
    title: "Afwisselend werk",
    description: "Diverse projecten van woningbouw tot utiliteitsbouw.",
  },
  {
    icon: Coffee,
    title: "Goede sfeer",
    description: "Informele werksfeer met korte lijnen.",
  },
];

export default function WerkenBijPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <Image
          src="/images/hero/team.jpg"
          alt="Team Bouwbedrijf Homan"
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
                Kom erbij
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Werken bij Bouwbedrijf Homan
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Word onderdeel van een hecht team vakmensen. Bij ons werk je aan
                uitdagende projecten in een prettige werksfeer.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
              Voordelen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Waarom werken bij Homan?
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                      <perk.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">{perk.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vacatures
            </h2>
            <p className="mt-4 text-muted-foreground">
              Staat jouw droombaan er niet bij? Stuur dan een open sollicitatie!
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {[
              {
                title: "Stagiair(e) bouwkunde",
                type: "Stage",
                icon: TrendingUp,
              },
            ].map((job) => (
              <Card key={job.title}>
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent/10 p-2">
                      <job.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.type} · Enter, Twente
                      </p>
                    </div>
                  </div>
                  <LinkButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                  >
                    Solliciteer
                  </LinkButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open sollicitatie CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto mb-4 h-10 w-10 text-accent" />
          <h2 className="text-3xl font-bold tracking-tight">
            Interesse? Neem contact op!
          </h2>
          <p className="mt-4 text-muted-foreground">
            Stuur je CV en motivatie naar{" "}
            <a
              href="mailto:info@bouwbedrijfhoman.nl"
              className="font-medium text-red-700 underline-offset-2 hover:underline"
            >
              info@bouwbedrijfhoman.nl
            </a>{" "}
            of bel ons op{" "}
            <a
              href="tel:0547381035"
              className="font-medium text-red-700 underline-offset-2 hover:underline"
            >
              0547 381 035
            </a>
            .
          </p>
          <LinkButton
            href="/contact"
            className="mt-6 bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
          >
            Neem contact op
            <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
          <p className="mt-8 text-xs text-muted-foreground">
            Acquisitie naar aanleiding van deze vacatures wordt niet op prijs gesteld.
          </p>
        </div>
      </section>
    </>
  );
}
