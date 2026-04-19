import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  Hammer,
  PaintBucket,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations-css";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bouwbedrijf Homan biedt woningbouw, utiliteitsbouw, verbouwingen, renovaties en onderhoud in Twente. Van vergunning tot oplevering.",
  alternates: { canonical: "https://www.bouwbedrijfhoman.nl/diensten" },
};

const diensten = [
  {
    id: "woningbouw",
    icon: Home,
    image: "/images/projecten/woningbouw/enter-1.jpg",
    title: "Woningbouw",
    subtitle: "Van droomhuis tot sleuteloverdracht",
    description:
      "Of het nu gaat om een moderne stadswoning, een ruim landhuis of een luxe villa — wij realiseren uw droomhuis met oog voor detail. Van de eerste schets tot de sleuteloverdracht begeleiden wij u in het hele traject.",
    features: [
      "Vrijstaande woningen en villa's",
      "Twee-onder-één-kapwoningen",
      "Rijtjeswoningen en seriebouw",
      "Energiezuinig en duurzaam bouwen",
      "Compleet bouwmanagement",
      "Bouwtekeningen en vergunningen",
    ],
  },
  {
    id: "utiliteitsbouw",
    icon: Building2,
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-koops.jpg",
    title: "Utiliteitsbouw",
    subtitle: "Functioneel en representatief",
    description:
      "Een bedrijfspand dat past bij uw onderneming. Wij bouwen kantoren, bedrijfshallen, winkelpanden en appartementencomplexen die functioneel, duurzaam en representatief zijn.",
    features: [
      "Kantoorpanden en bedrijfshallen",
      "Winkelpanden",
      "Appartementencomplexen",
      "Scholen en zorginstellingen",
      "Maatwerk naar uw specificaties",
      "Turnkey oplevering",
    ],
  },
  {
    id: "verbouw",
    icon: Hammer,
    image: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
    title: "Verbouw & Renovatie",
    subtitle: "Nieuw leven voor uw pand",
    description:
      "Uw woning of bedrijfspand verdient een tweede leven. Of het nu gaat om een aanbouw, dakopbouw of complete renovatie — wij transformeren uw pand met respect voor het bestaande karakter.",
    features: [
      "Aanbouw en uitbouw",
      "Dakopbouw en dakkapellen",
      "Complete renovatie",
      "Keuken- en badkamerverbouwing",
      "Restauratie van monumentale panden",
      "Energetische verbetering",
    ],
  },
  {
    id: "onderhoud",
    icon: PaintBucket,
    image: "/images/projecten/woningbouw/markelo.jpg",
    title: "Onderhoud",
    subtitle: "Preventief en correctief",
    description:
      "Goed onderhoud verlengt de levensduur van uw pand en voorkomt grote kosten. Wij bieden zowel preventief als correctief onderhoud voor woningen en bedrijfspanden.",
    features: [
      "Periodieke inspecties",
      "Meerjarenonderhoudsplannen",
      "Schilderwerk en voegwerk",
      "Dakreparaties",
      "Houtrot en betonherstel",
      "Gevelreiniging",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
        <Image
          src="/images/projecten/utiliteitsbouw/restauratie-enter.jpg"
          alt="Diensten Bouwbedrijf Homan"
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
                Ons aanbod
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Onze diensten
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
                Van vergunning tot oplevering — wij begeleiden u bij elke stap.
                Met meer dan 45 jaar ervaring bieden wij een compleet pakket aan
                bouwdiensten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {diensten.map((dienst, index) => (
              <FadeIn
                key={dienst.id}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  id={dienst.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid items-start gap-12 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                        <dienst.icon className="h-8 w-8 text-accent" />
                      </div>
                    <h2 className="text-3xl font-bold tracking-tight">
                      {dienst.title}
                    </h2>
                    <p className="mt-1 text-lg font-medium text-accent">
                      {dienst.subtitle}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {dienst.description}
                    </p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {dienst.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <LinkButton
                      href="/contact"
                      className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Vrijblijvende offerte
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </LinkButton>
                  </div>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <Image
                      src={dienst.image}
                      alt={dienst.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={60}
                    />
                  </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
              Werkwijze
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ons werkproces
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Transparant, efficiënt en persoonlijk — zo pakken wij elk project aan.
            </p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.15}>
            {[
              {
                step: "01",
                title: "Kennismaking",
                description:
                  "Vrijblijvend gesprek om uw wensen en mogelijkheden te bespreken.",
              },
              {
                step: "02",
                title: "Ontwerp & Offerte",
                description:
                  "Wij maken een gedetailleerd plan met een heldere prijsopgave.",
              },
              {
                step: "03",
                title: "Bouw",
                description:
                  "Onze vakmensen gaan aan de slag met regelmatige updates over de voortgang.",
              },
              {
                step: "04",
                title: "Oplevering",
                description:
                  "Gezamenlijke inspectie en overdracht. U geniet van het resultaat.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <Card>
                  <CardContent className="p-6">
                    <span className="text-3xl font-bold text-accent/70">
                      {item.step}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <Image
          src="/images/projecten/woningbouw/holten.jpg"
          alt="Project Bouwbedrijf Homan"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
                      quality={60}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Benieuwd wat wij voor u kunnen betekenen?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Neem vrijblijvend contact op voor een persoonlijk adviesgesprek.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="/contact"
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25"
              >
                Contact opnemen
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton
                href="tel:0547381035"
                className="inline-flex items-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-2.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 h-9"
              >
                <Phone className="mr-2 h-4 w-4" />
                0547 381 035
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
