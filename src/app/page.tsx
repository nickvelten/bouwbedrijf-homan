import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  PaintBucket,
  ArrowRight,
  Phone,
  Star,
  Shield,
  Users,
  Clock,
  ChevronDown,
  MessageCircle,
  Ruler,
  FileCheck,
  HardHat,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChoiceCardsLinked } from "@/components/choice-helper";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations-css";
import { AnimatedCounter, KenBurnsHero } from "@/components/animations";
import { AreaServed } from "@/components/area-served";

const services = [
  {
    icon: Home,
    title: "Woningbouw",
    description:
      "Van standaardwoningen tot luxe villa's. Uw droomhuis met oog voor detail.",
    href: "/diensten#woningbouw",
    image: "/images/projecten/woningbouw/vijver.jpg",
  },
  {
    icon: Building2,
    title: "Utiliteitsbouw",
    description:
      "Bedrijfspanden, kantoren en appartementencomplexen. Functioneel en representatief.",
    href: "/diensten#utiliteitsbouw",
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-oostkraay.jpg",
  },
  {
    icon: Hammer,
    title: "Verbouw & Renovatie",
    description:
      "Van kleine verbouwing tot complete renovatie. Wij maken er iets moois van.",
    href: "/diensten#verbouw",
    image: "/images/projecten/utiliteitsbouw/restauratie-enter.jpg",
  },
  {
    icon: PaintBucket,
    title: "Onderhoud",
    description:
      "Preventief en correctief onderhoud. Vakkundig en met oog voor detail.",
    href: "/diensten#onderhoud",
    image: "/images/projecten/woningbouw/lemele.jpg",
  },
];

const stats = [
  { value: 45, suffix: "+", label: "Jaar ervaring" },
  { value: 35, suffix: "", label: "Vakmensen" },
  { value: 500, suffix: "+", label: "Projecten" },
  { value: 100, suffix: "%", label: "Bouwgarant" },
];

const testimonials = [
  {
    quote:
      "De communicatie was uitstekend en het resultaat overtreft onze verwachtingen. Echt vakmanschap.",
    author: "Familie De Vries",
    project: "Nieuwbouw woning Markelo",
  },
  {
    quote:
      "Professioneel, betrouwbaar en altijd bereikbaar. Ons bedrijfspand is precies geworden zoals we het voor ogen hadden.",
    author: "Reggehave B.V.",
    project: "Bedrijfspand Enter",
  },
  {
    quote:
      "Van tekening tot oplevering: alles verliep soepel. We zijn enorm blij met ons nieuwe huis.",
    author: "Familie Bakker",
    project: "Villa Blaricum",
  },
];

const featuredProjects = [
  {
    title: "Woning met vijver",
    image: "/images/projecten/woningbouw/vijver.jpg",
    category: "Woningbouw",
    description: "Luxe vrijstaande woning met geintegreerde waterpartij",
  },
  {
    title: "Woning in Holten",
    image: "/images/projecten/woningbouw/holten.jpg",
    category: "Woningbouw",
  },
  {
    title: "Bedrijfspand Enter",
    image: "/images/projecten/utiliteitsbouw/bedrijfspand-oostkraay.jpg",
    category: "Utiliteitsbouw",
  },
  {
    title: "Woning in Enschede",
    image: "/images/projecten/woningbouw/enschede.jpg",
    category: "Woningbouw",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Kennismaking",
    description: "Vrijblijvend gesprek over uw wensen en mogelijkheden.",
  },
  {
    icon: Ruler,
    title: "Ontwerp",
    description: "Samen met u werken we het plan tot in detail uit.",
  },
  {
    icon: FileCheck,
    title: "Vergunning",
    description: "Wij regelen alle benodigde vergunningen en papierwerk.",
  },
  {
    icon: HardHat,
    title: "Realisatie",
    description: "Onze vakmensen bouwen uw project met zorg en precisie.",
  },
  {
    icon: KeyRound,
    title: "Oplevering",
    description: "Sleutel in handen — samen inspecteren we het eindresultaat.",
  },
];

const heroImages = [
  { src: "/images/hero/team.jpg", alt: "Het team van Bouwbedrijf Homan" },
  { src: "/images/projecten/woningbouw/vijver.jpg", alt: "Woning met vijver" },
  {
    src: "/images/projecten/woningbouw/holten.jpg",
    alt: "Woningbouw in Holten",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Ken Burns effect */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
        <KenBurnsHero images={heroImages} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          {/* Hero text — no framer-motion in the LCP critical path. CSS animations only. */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm border border-white/20 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
            <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-xs font-medium text-white">
              Bouwgarant gecertificeerd
            </span>
          </div>
          <h1 className="max-w-3xl text-fluid-3xl font-bold tracking-tight text-white motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 motion-safe:delay-100">
            Stijlvol wonen.
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Sfeervol werken.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-fluid-md leading-relaxed text-white/80 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 motion-safe:delay-200">
            Al meer dan 45 jaar bouwt Bouwbedrijf Homan aan dromen in Twente.
            Van luxe villa&apos;s tot moderne bedrijfspanden — met vakmanschap
            waar u op kunt vertrouwen.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500 motion-safe:delay-300">
            <LinkButton
              href="#keuzehulp"
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/25 text-base px-8 py-3 h-auto min-h-[var(--tap)]"
            >
              Wat wilt u bouwen?
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </LinkButton>
            <LinkButton
              href="/projecten"
              className="inline-flex items-center rounded-lg border-2 border-white/30 bg-transparent px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 h-auto min-h-[var(--tap)]"
            >
              Bekijk onze projecten
            </LinkButton>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* Stats — Animated counters */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/10 lg:grid-cols-4"
            staggerDelay={0.1}
          >
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="px-6 py-8 text-center transition-colors hover:bg-muted/50">
                  <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent sm:text-4xl">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services — Card grid with images */}
      <section className="py-24 sm:py-32" id="diensten">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
              Onze expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Wat wij voor u kunnen betekenen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Van vergunning tot oplevering — wij begeleiden u bij elke stap van
              het bouwproces.
            </p>
          </FadeIn>

          <StaggerContainer
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            staggerDelay={0.15}
          >
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        quality={60}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-white/20 p-2.5 backdrop-blur-sm">
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-red-600 transition-colors group-hover:text-red-700">
                        Meer informatie
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process — "Zo werken wij" (angled + textured) */}
      <section className="angle-both noise-texture relative bg-primary py-28 sm:py-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
              Van plan tot sleutel
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Zo werken wij
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Een helder proces van begin tot eind — zodat u altijd weet waar u
              aan toe bent.
            </p>
          </FadeIn>

          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent lg:block" />

            <StaggerContainer
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
              staggerDelay={0.12}
            >
              {processSteps.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="relative z-10 mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-red-600/80 group-hover:ring-red-500/50 group-hover:scale-105">
                      <step.icon className="h-8 w-8 text-white/80 transition-colors group-hover:text-white" />
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white ring-2 ring-primary">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Featured projects — Bigger showcase */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                  Portfolio
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Recente projecten
                </h2>
              </div>
              <LinkButton
                href="/projecten"
                className="hidden items-center rounded-lg bg-gradient-to-r from-red-600 to-red-700 border-0 font-medium text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/20 sm:inline-flex"
              >
                Alle projecten
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </FadeIn>

          {/* Hero project — full width */}
          <FadeIn className="mt-12">
            <Link href="/projecten" className="group block">
              <div className="relative overflow-hidden rounded-3xl aspect-[21/9]">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="100vw"
                  quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <Badge className="mb-3 bg-red-600/90 text-white border-0 text-sm px-4 py-1">
                    {featuredProjects[0].category}
                  </Badge>
                  <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {featuredProjects[0].title}
                  </h3>
                  {featuredProjects[0].description && (
                    <p className="mt-2 max-w-lg text-lg text-white/70">
                      {featuredProjects[0].description}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                    Bekijk project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Secondary projects — 3 column grid */}
          <StaggerContainer
            className="mt-6 grid gap-6 sm:grid-cols-3"
            staggerDelay={0.1}
          >
            {featuredProjects.slice(1).map((project) => (
              <StaggerItem key={project.title}>
                <Link href="/projecten" className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      quality={60}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2 bg-red-600/90 text-white border-0">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-8 text-center sm:hidden">
            <LinkButton
              href="/projecten"
              className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/20"
            >
              Alle projecten bekijken
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </FadeIn>
        </div>
      </section>

      {/* Werkgebied — local SEO + answers "do you work here?" */}
      <AreaServed />

      {/* About preview — Split layout */}
      <section className="angle-top noise-texture relative bg-muted/80 py-28 sm:py-36">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
                Over ons
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Vakmanschap met een{" "}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  persoonlijke aanpak
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Sinds 1982 staat Bouwbedrijf Homan bekend om hoogwaardige
                woning- en utiliteitsbouw. Met 35 ervaren vakmensen en korte
                communicatielijnen zorgen wij ervoor dat uw project soepel
                verloopt.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-8">
                {[
                  { icon: Shield, label: "Garantie" },
                  { icon: Users, label: "Eigen team" },
                  { icon: Clock, label: "Op tijd" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-3 rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-3">
                      <item.icon className="h-7 w-7 text-red-600" />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
              <LinkButton
                href="/over-ons"
                className="mt-10 bg-gradient-to-r from-red-600 to-red-700 border-0 text-white hover:from-red-700 hover:to-red-800 shadow-lg shadow-red-600/20"
              >
                Leer ons kennen
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/projecten/woningbouw/enter-1.jpg"
                    alt="Woning gerealiseerd door Bouwbedrijf Homan in Enter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/bouwgarant-logo.png"
                      alt="Bouwgarant"
                      width={48}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <div>
                      <p className="text-sm font-bold">Bouwgarant</p>
                      <p className="text-xs text-muted-foreground">
                        Gecertificeerd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-700">
              Ervaringen
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Wat onze klanten zeggen
            </h2>
          </FadeIn>

          <StaggerContainer
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.15}
          >
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <Card className="h-full border-0 shadow-lg transition-shadow hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-red-500 text-red-500"
                        />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-base leading-relaxed text-foreground/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <Separator className="my-6" />
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.project}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — Keuzehulp (angled + textured) */}
      <section
        id="keuzehulp"
        className="angle-top noise-texture relative overflow-hidden py-28 sm:py-36 scroll-mt-20"
      >
        <Image
          src="/images/projecten/woningbouw/holten.jpg"
          alt="Project Bouwbedrijf Homan"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Klaar om te bouwen
              <br />
              aan uw droom?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Vertel ons wat u zoekt en wij nemen persoonlijk contact met u op.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-12">
              <ChoiceCardsLinked />
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href="tel:0547381035"
                className="inline-flex items-center rounded-lg border-2 border-white/30 bg-transparent px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Of bel direct: 0547 381 035
              </LinkButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
