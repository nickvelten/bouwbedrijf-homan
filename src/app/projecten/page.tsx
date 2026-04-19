import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations-css";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Bekijk de gerealiseerde projecten van Bouwbedrijf Homan: woningbouw, utiliteitsbouw, verbouwingen en renovaties in Twente.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/projecten" },
};

const woningbouw = [
  {
    title: "Woning in Bathmen",
    image: "/images/projecten/woningbouw/bathmen.jpg",
    client: "Particulier",
  },
  {
    title: "Woning met vijver",
    image: "/images/projecten/woningbouw/vijver.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Markelo",
    image: "/images/projecten/woningbouw/markelo.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Enter",
    image: "/images/projecten/woningbouw/enter-1.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Enter",
    image: "/images/projecten/woningbouw/enter-2.jpg",
    client: "Particulier",
  },
  {
    title: "Woningen in Raalte",
    image: "/images/projecten/woningbouw/raalte.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Wierden",
    image: "/images/projecten/woningbouw/wierden.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Lemele",
    image: "/images/projecten/woningbouw/lemele.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Holten",
    image: "/images/projecten/woningbouw/holten.jpg",
    client: "Particulier",
  },
  {
    title: "Woning in Enschede",
    image: "/images/projecten/woningbouw/enschede.jpg",
    client: "Particulier",
  },
  {
    title: "Badhuis in Haaksbergen",
    image: "/images/projecten/woningbouw/badhuis-haaksbergen.jpg",
    client: "Particulier",
  },
  {
    title: "Stijlvol landhuis",
    image: "/images/projecten/woningbouw/stijlvol-landhuis.jpg",
    client: "Particulier",
  },
];

const utiliteitsbouw = [
  {
    title: "Restauratieproject buitengebied Enter",
    image: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
    client: "Zakelijk",
  },
  {
    title: "Verbouwing kantoorpand in Enter",
    image: "/images/projecten/utiliteitsbouw/kantoorpand-enter.jpg",
    client: "Velten Invest",
    architect: "StudiodotNL",
  },
  {
    title: "Middenplein in Enter",
    image: "/images/projecten/utiliteitsbouw/middenplein-enter.jpg",
    client: "Middenplein VOF en Velten Invest",
  },
  {
    title: "Bedrijfspand in Enter",
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-koops.jpg",
    client: "Koops",
  },
  {
    title: "Bedrijfspand in Enter",
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-oostkraay.jpg",
    client: "OostKraay",
  },
  {
    title: "Seniorenwoningen in Enter",
    image: "/images/projecten/utiliteitsbouw/seniorenwoningen.jpg",
    client: "Woningcorporatie",
  },
  {
    title: "Centrumplan in Enter",
    image: "/images/projecten/utiliteitsbouw/centrumplan-enter.jpg",
    client: "CMG Investments",
  },
  {
    title: "Bedrijfspand in Enter",
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-slag.jpg",
    client: "Zakelijk",
  },
  {
    title: "Appartementencomplex in Markelo",
    image: "/images/projecten/utiliteitsbouw/appartementen-markelo.jpg",
    client: "Eigen ontwikkeling",
  },
];

function ProjectCard({
  project,
  category,
}: {
  project: { title: string; image: string; client: string; architect?: string };
  category: string;
}) {
  return (
    <div className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-xl">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <Badge className="mb-2 bg-accent text-accent-foreground">
            {category}
          </Badge>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-0.5 text-sm text-white/80">
            {project.client}
            {project.architect && ` · ${project.architect}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <Image
          src="/images/projecten/woningbouw/vijver.jpg"
          alt="Woning met vijver door Bouwbedrijf Homan"
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
                Portfolio
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Onze projecten
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Een greep uit onze gerealiseerde projecten. Van luxe villa&apos;s
                tot moderne bedrijfspanden — elk project vertelt zijn eigen
                verhaal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured project - large */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Uitgelicht project Bouwbedrijf Homan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
                preload
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <Badge className="mb-3 bg-accent text-accent-foreground text-sm px-4 py-1">
                  Uitgelicht
                </Badge>
                <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Meer dan 45 jaar bouwen in Twente
                </h2>
                <p className="mt-2 max-w-xl text-base text-white/80 sm:text-lg">
                  Van vergunning tot oplevering — vakmanschap waar u op kunt
                  vertrouwen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="woningbouw">
            <TabsList className="mb-10">
              <TabsTrigger value="woningbouw" className="gap-2 text-sm">
                <Home className="h-4 w-4" />
                Woningbouw
              </TabsTrigger>
              <TabsTrigger value="utiliteitsbouw" className="gap-2 text-sm">
                <Building2 className="h-4 w-4" />
                Utiliteitsbouw
              </TabsTrigger>
            </TabsList>

            <TabsContent value="woningbouw">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {woningbouw.map((project, i) => (
                  <ProjectCard
                    key={`${project.title}-${i}`}
                    project={project}
                    category="Woningbouw"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="utiliteitsbouw">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {utiliteitsbouw.map((project, i) => (
                  <ProjectCard
                    key={`${project.title}-${i}`}
                    project={project}
                    category="Utiliteitsbouw"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <Image
          src="/images/projecten/woningbouw/holten.jpg"
          alt="Woning in Holten"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
                      quality={60}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Wordt uw project de volgende?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Neem contact met ons op en bespreek de mogelijkheden voor uw
            bouwproject.
          </p>
          <LinkButton
            href="/contact"
            size="lg"
            className="mt-8 bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
          >
            Start uw project
            <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
