import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { whitePapers, WhitePaper } from "@/data/whitePapers";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleSchema } from "@/components/schemas/ArticleSchema";
import { TableOfContents } from "@/components/TableOfContents";
import { FileText, Calendar, Clock, Download, ArrowLeft, ArrowRight, User, ShieldCheck } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return whitePapers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paper = whitePapers.find((p) => p.slug === params.slug);
  if (!paper) return { title: "White Paper Not Found" };

  return {
    title: `${paper.title} | Technical White Paper`,
    description: paper.executiveSummary,
    authors: [{ name: paper.author }],
    alternates: {
      canonical: `${siteConfig.url}/white-papers/${paper.slug}`,
    },
    openGraph: {
      title: paper.title,
      description: paper.executiveSummary,
      type: "article",
      publishedTime: paper.publishedDate,
    },
  };
}

export default function WhitePaperDetailPage({ params }: Props) {
  const paper = whitePapers.find((p) => p.slug === params.slug);

  if (!paper) {
    notFound();
  }

  const tocItems = paper.chapters.map((ch) => ({
    id: `chapter-${ch.number}`,
    title: `Chapter ${ch.number}: ${ch.title}`,
  }));

  // Schema adaptation for white paper
  const adaptedArticle = {
    slug: `white-papers/${paper.slug}`,
    title: paper.title,
    subtitle: paper.subtitle,
    excerpt: paper.executiveSummary,
    author: paper.author,
    authorRole: "Technical Author",
    publishedAt: paper.publishedDate,
    updatedAt: paper.updatedDate,
    readingTime: paper.readTime,
    category: "Architecture" as const,
    tags: paper.topics,
    heroImage: "/images/harsh-sharma-architecture.svg",
    content: [],
    relatedSlugs: [],
  };

  return (
    <>
      <ArticleSchema article={adaptedArticle} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "White Papers", url: "/white-papers" },
              { name: paper.title, url: `/white-papers/${paper.slug}` },
            ]}
          />

          <article className="space-y-8">
            <header className="space-y-4 border-b border-slate-200 pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-purple-50 border border-purple-200 px-3 py-0.5 font-semibold text-purple-800">
                  Engineering White Paper
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-500">{paper.readTime}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                {paper.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                {paper.subtitle}
              </p>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-xs text-slate-500">
                <div>Author: <strong className="text-slate-900">{paper.author}</strong></div>
                <div>Published: {paper.publishedDate}</div>
                <div>Audience: <strong>{paper.targetAudience}</strong></div>
              </div>
            </header>

            {/* Executive Summary */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Executive Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {paper.executiveSummary}
              </p>
              <div className="pt-3 flex flex-wrap gap-1.5">
                {paper.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-white border border-slate-200 px-2.5 py-0.5 text-[11px] font-mono text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Chapters */}
            <div className="space-y-10 text-sm sm:text-base text-slate-800 leading-relaxed">
              {paper.chapters.map((chapter) => (
                <section key={chapter.number} id={`chapter-${chapter.number}`} className="space-y-3 pt-4 border-t border-slate-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                    Chapter {chapter.number}: {chapter.title}
                  </h2>
                  <p className="leading-relaxed text-slate-700 whitespace-pre-line">
                    {chapter.body}
                  </p>
                </section>
              ))}
            </div>

            {/* Author Box */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Author</span>
                <h3 className="text-base font-bold text-slate-900">{paper.author}</h3>
                <p className="text-xs text-slate-600">Published under HMorix Press Architecture Series</p>
              </div>
              <Link
                href="/harsh-sharma"
                className="text-xs font-semibold text-sky-700 hover:underline"
              >
                View Author Profile →
              </Link>
            </div>

            {/* Navigation */}
            <div className="pt-6 border-t border-slate-200 flex justify-between text-xs font-semibold text-sky-700">
              <Link href="/white-papers" className="hover:underline flex items-center gap-1">
                ← Return to White Papers
              </Link>
              <Link href="/press" className="hover:underline flex items-center gap-1">
                View Press Releases →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
