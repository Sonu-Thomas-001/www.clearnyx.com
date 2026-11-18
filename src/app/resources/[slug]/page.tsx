import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESOURCE_ARTICLES } from "@/content/resources";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return RESOURCE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | CLEARNYX Aligner Provider Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.clearnyx.com/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = RESOURCE_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: article.title, url: `/resources/${article.slug}` },
        ]}
      />

      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        url={`/resources/${article.slug}`}
        image={article.coverImage}
        datePublished={article.publishedAt}
        authorName={article.author.name}
      />

      <article className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-secondary hover:text-cyan-brand transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Insights
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4 mb-10">
            <Badge variant="cyan">{article.category.toUpperCase()}</Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.18]">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-muted pt-2 border-b border-surface-border pb-6">
              <span className="flex items-center gap-1.5 font-medium text-navy-900">
                {article.author.name} ({article.author.role})
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-brand" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-brand" />
                {article.readingTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-surface-border shadow-card mb-12 bg-surface-soft">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-slate max-w-none space-y-8 text-base text-slate-secondary leading-relaxed">
            <p className="text-lg font-medium text-navy-900 leading-relaxed bg-surface-soft p-6 rounded-2xl border-l-4 border-cyan-brand">
              {article.content.introduction}
            </p>

            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
                  {sec.heading}
                </h2>
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {/* Key Clinical Takeaways */}
            <div className="mt-12 p-8 rounded-2xl bg-surface-soft border border-surface-border space-y-4">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-brand" />
                Key Clinical & Practice Takeaways
              </h3>
              <ul className="space-y-2.5 pt-2">
                {article.content.takeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand shrink-0 mt-2" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div className="mt-12 p-5 rounded-xl bg-ice-soft/40 border border-cyan-200 text-xs text-slate-secondary flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-cyan-brand shrink-0 mt-0.5" />
            <span>
              <strong>Professional Editorial Notice:</strong> The information presented in this article is provided solely for educational and clinical reference by licensed dental practitioners. It does not replace individualized diagnosis, patient consultation, or medical decision-making by the treating clinician.
            </span>
          </div>

          {/* Article Footer & CTA */}
          <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/resources"
              className="text-xs font-bold text-navy-900 hover:text-cyan-brand flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Return to All Resources
            </Link>
            <Button
              href="/become-a-partner"
              variant="cyan"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Partner with CLEARNYX
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}

