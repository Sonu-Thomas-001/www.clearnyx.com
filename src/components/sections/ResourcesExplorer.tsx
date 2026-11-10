"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ResourceArticle } from "@/types";
import { Search, ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All Insights",
  "Clear Aligner Education",
  "Digital Orthodontics",
  "Treatment Planning",
  "Product Knowledge",
  "Dental Practice Insights",
] as const;

export function ResourcesExplorer({
  articles,
}: {
  articles: ResourceArticle[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Insights");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All Insights" ||
        article.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featured = articles[0];

  return (
    <div className="space-y-12">
      {/* Featured Editorial Article */}
      {featured && selectedCategory === "All Insights" && searchQuery === "" && (
        <div className="bg-surface-soft rounded-3xl border border-surface-border overflow-hidden shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="cyan">{featured.category.toUpperCase()}</Badge>
                <span className="text-xs text-slate-muted">Featured Editorial</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 leading-tight">
                <Link
                  href={`/resources/${featured.slug}`}
                  className="hover:text-cyan-brand transition-colors"
                >
                  {featured.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-slate-secondary leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-slate-muted pt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-brand" />
                  {featured.publishedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-brand" />
                  {featured.readingTime}
                </span>
                <span>By {featured.author.name}</span>
              </div>

              <div className="pt-2">
                <Link
                  href={`/resources/${featured.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-brand hover:text-cyan-electric transition-colors"
                >
                  Read Full Clinical Insight <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-surface-border">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-surface-border">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none",
                selectedCategory === cat
                  ? "bg-navy-900 text-white"
                  : "bg-surface-soft text-slate-secondary hover:text-navy-900 border border-surface-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-muted" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-surface-border text-xs text-navy-900 bg-white placeholder:text-slate-muted focus:border-cyan-brand outline-none"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-surface-soft rounded-2xl border border-surface-border">
          <BookOpen className="w-10 h-10 text-slate-muted mx-auto mb-3" />
          <h3 className="text-base font-bold text-navy-900">No articles found</h3>
          <p className="text-xs text-slate-secondary mt-1">
            Try adjusting your search terms or category selection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-surface-border overflow-hidden shadow-subtle hover:border-cyan-300 hover:shadow-card transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] bg-surface-soft overflow-hidden border-b border-surface-border">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-navy-900 border border-surface-border">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-muted">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 leading-snug group-hover:text-cyan-brand transition-colors">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-secondary leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/resources/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-brand hover:text-cyan-electric transition-colors"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

