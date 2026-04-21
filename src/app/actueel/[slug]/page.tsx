import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { articles } from "@/data/articles";
import { BrandMark } from "@/components/brand-mark";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const categoryLabels: Record<string, string> = {
  algemeen: "Algemeen",
  utiliteit: "Utiliteit",
  woningbouw: "Woningbouw",
  vacature: "Vacature",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function firstParagraph(body: string, max = 200) {
  const lines = body.split("\n");
  for (const line of lines) {
    const stripped = line
      .replace(/^#+\s*/, "")
      .replace(/\*\*?/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();
    if (stripped.length > 20) {
      return stripped.length > max
        ? `${stripped.slice(0, max).trim()}…`
        : stripped;
    }
  }
  return "";
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel niet gevonden" };

  const description = firstParagraph(article.body);
  return {
    title: article.title,
    description,
    alternates: {
      canonical: `https://www.bouwbedrijfhoman.nl/actueel/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.date,
      images: [article.cover],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="px-3 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[880px] px-3 sm:px-6 lg:px-8">
          <Link
            href="/actueel"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Alle berichten
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em]">
            <span className="rounded-full border border-foreground/15 px-3 py-1 text-foreground/70">
              {categoryLabels[article.category] ?? article.category}
            </span>
            <span className="text-foreground/50">
              {formatDate(article.date)}
            </span>
          </div>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            {article.title}
          </h1>
        </div>
      </section>

      {/* COVER or VIDEO */}
      <section className="px-3 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
          {article.vimeoId ? (
            <div className="relative aspect-video overflow-hidden rounded-[28px] bg-black sm:rounded-[40px]">
              <iframe
                src={`https://player.vimeo.com/video/${article.vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
                title={article.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative aspect-[21/9] overflow-hidden rounded-[28px] sm:rounded-[40px]">
              <Image
                src={article.cover}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 1440px, 100vw"
                quality={80}
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* BODY */}
      <article className="px-3 pt-16 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[720px] px-3 sm:px-6">
          <div className="article-prose">
            <ReactMarkdown
              components={{
                img: ({ src, alt }) => {
                  const source = typeof src === "string" ? src : "";
                  if (!source) return null;
                  return (
                    <span className="my-10 block overflow-hidden rounded-[20px]">
                      <Image
                        src={source}
                        alt={alt ?? ""}
                        width={1440}
                        height={900}
                        className="h-auto w-full"
                        sizes="(min-width: 768px) 720px, 100vw"
                        quality={75}
                      />
                    </span>
                  );
                },
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href?.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {article.body}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="px-3 pt-24 sm:px-6 sm:pt-32">
          <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50 inline-flex items-center gap-2">
                  <BrandMark className="h-3 w-[0.65rem] text-foreground" />
                  Meer lezen
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Laatste berichten
                </h2>
              </div>
              <Link
                href="/actueel"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
              >
                Alle berichten
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/actueel/${a.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-[24px] border border-foreground/10 bg-white transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.cover}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={70}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                      {formatDate(a.date)}
                    </p>
                    <h3 className="text-lg font-semibold leading-tight tracking-tight">
                      {a.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-3 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[32px] bg-foreground px-8 py-16 text-white sm:rounded-[40px] sm:px-16 sm:py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              Uw project
            </p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              Ook iets moois
              <br />
              <span className="text-[var(--accent)]">in gedachten?</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-[60px] items-center gap-2 rounded-full bg-white pl-6 pr-2 text-base font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                <span>Plan een gesprek</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
