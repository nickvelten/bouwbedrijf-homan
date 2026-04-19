import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Users,
  Clock,
  Award,
  Heart,
  MessageCircle,
} from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations-css";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Bouwbedrijf Homan: al meer dan 45 jaar uw betrouwbare aannemer in Twente. 35 vakmensen, Bouwgarant gecertificeerd, gevestigd in Enter.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/over-ons" },
};

const values = [
  {
    icon: Award,
    title: "Vakmanschap",
    description:
      "Traditioneel ambacht gecombineerd met moderne technieken. Onze vakmensen werken met passie en oog voor detail.",
  },
  {
    icon: MessageCircle,
    title: "Communicatie",
    description:
      "Korte lijnen tussen bouwplaats en kantoor. U heeft altijd een vast aanspreekpunt en bent op de hoogte van de voortgang.",
  },
  {
    icon: Heart,
    title: "Betrokkenheid",
    description:
      "Elk project is uniek en verdient onze volle aandacht. Wij bouwen mee aan uw droom alsof het de onze is.",
  },
  {
    icon: Shield,
    title: "Betrouwbaarheid",
    description:
      "Afspraken zijn afspraken. Met Bouwgarant certificering bieden wij u extra zekerheid.",
  },
];

const timeline = [
  {
    year: "1982",
    title: "Oprichting",
    description:
      "Bouwbedrijf Homan wordt opgericht in Enter met een kleine maar gedreven ploeg.",
  },
  {
    year: "1995",
    title: "Groei",
    description:
      "Het team groeit en de eerste grote utiliteitsprojecten worden gerealiseerd.",
  },
  {
    year: "2005",
    title: "Certificering",
    description:
      "Bouwgarant certificering behaald als bewijs van kwaliteit en betrouwbaarheid.",
  },
  {
    year: "2022",
    title: "40 jaar",
    description:
      "Viering van 40 jaar vakmanschap met inmiddels 35 medewerkers en honderden projecten.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <Image
          src="/images/hero/team.jpg"
          alt="Het team van Bouwbedrijf Homan"
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
                Sinds 1982
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Over Bouwbedrijf Homan
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Al meer dan 45 jaar bouwen wij aan dromen in Twente. Met
                vakmanschap, betrokkenheid en een persoonlijke aanpak.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                Wie wij zijn
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Hoogwaardige woning- en utiliteitsbouw
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Bouwbedrijf Homan is gespecialiseerd in hoogwaardige woning- en
                utiliteitsbouw. Met een team van 35 ervaren vakmensen realiseren
                wij projecten van standaardwoningen tot luxe villa&apos;s en van
                kantoorpanden tot appartementencomplexen.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Onze kracht zit in de combinatie van traditioneel vakmanschap en
                moderne bouwtechnieken. Met korte communicatielijnen tussen
                bouwplaats en kantoor houden wij u altijd op de hoogte van de
                voortgang van uw project.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Heeft u al een bouwplan? Dan maken wij graag een vrijblijvende
                offerte. Heeft u een kavel maar nog geen plan? Dan denken wij
                graag met u mee over het ontwerp.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-3 rounded-lg border px-4 py-2">
                  <Image
                    src="/images/bouwgarant-logo.png"
                    alt="Bouwgarant gecertificeerd"
                    width={40}
                    height={33}
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-medium">Bouwgarant gecertificeerd</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/projecten/woningbouw/enter-2.jpg"
                  alt="Project gerealiseerd door Bouwbedrijf Homan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
              Waar wij voor staan
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Onze kernwaarden
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Deze waarden vormen de basis van alles wat wij doen.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card>
                  <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Onze geschiedenis
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative space-y-8 border-l-2 border-accent/20 pl-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-sm font-bold text-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="bg-primary py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Clock, value: "45+", label: "Jaar ervaring" },
            { icon: Users, value: "35", label: "Vakmensen" },
            { icon: Shield, value: "100%", label: "Bouwgarant" },
            { icon: Heart, value: "500+", label: "Tevreden klanten" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
              <p className="text-3xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <Image
          src="/images/hero/team.jpg"
          alt="Team Bouwbedrijf Homan"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Wilt u ons team ontmoeten?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Kom langs op de Vonderweg 19 in Enter of neem contact met ons op.
            </p>
            <LinkButton
              href="/contact"
              className="mt-8 bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
            >
              Neem contact op
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
