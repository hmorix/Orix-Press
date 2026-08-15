import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { researchPapers, ResearchPaper } from "@/data/research";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ResearchSchema } from "@/components/schemas/ResearchSchema";
import { TableOfContents } from "@/components/TableOfContents";
import { BookOpen, Calendar, Download, User, ArrowLeft, ArrowRight, ShieldCheck, Quote } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return researchPapers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const paper = researchPapers.find((p) => p.slug === params.slug);
  if (!paper) return { title: "Paper Not Found" };

  return {
    title: `${paper.title} | Research Paper`,
    description: paper.abstract,
    authors: [{ name: paper.author }],
    alternates: {
      canonical: `${siteConfig.url}/research/${paper.slug}`,
    },
    openGraph: {
      title: paper.title,
      description: paper.abstract,
      type: "article",
      publishedTime: paper.publishedDate,
    },
  };
}

export default function ResearchPaperDetailPage({ params }: Props) {
  const paper = researchPapers.find((p) => p.slug === params.slug);

  if (!paper) {
    notFound();
  }

  const tocItems = paper.sections.map((s, idx) => ({
    id: `sec-${idx}`,
    title: s.title,
  }));

  return (
    <>
      <ResearchSchema paper={paper} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Research", url: "/research" },
              { name: paper.title, url: `/research/${paper.slug}` },
            ]}
          />

          <article className="space-y-8">
            <header className="space-y-4 border-b border-slate-200 pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 font-semibold text-amber-800">
                  Scholarly Paper
                </span>
                <span className="font-mono text-slate-400">Version {paper.version}</span>
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
                <div>
                  Author: <strong className="text-slate-900">{paper.author}</strong> ({paper.authorAffiliation})
                </div>
                <div>Published: {paper.publishedDate}</div>
                <div className="font-mono text-slate-600">DOI: {paper.doi || "Pending Assignment"}</div>
              </div>
            </header>

            {/* Abstract Callout */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Abstract
              </h2>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                {paper.abstract}
              </p>
              <div className="pt-3 flex flex-wrap gap-1.5">
                {paper.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-mono text-slate-600"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Sections Content */}
            <div className="space-y-8 text-sm sm:text-base text-slate-800 leading-relaxed">
              {paper.sections.map((section, idx) => (
                <section key={idx} id={`sec-${idx}`} className="space-y-3 pt-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-100 pb-2">
                    {section.title}
                  </h2>
                  <p className="leading-relaxed text-slate-700 whitespace-pre-line">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>

            {/* References Section */}
            <section className="pt-8 border-t border-slate-200 space-y-4">
              <h2 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                <Quote className="h-5 w-5 text-slate-400" />
                <span>References &amp; Citations</span>
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-600 list-decimal pl-5">
                {paper.references.map((ref) => (
                  <li key={ref.id}>
                    <span>{ref.citation}</span>
                    {ref.link && (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-sky-700 hover:underline"
                      >
                        [Link]
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            {/* Author Attribution Box */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-semibold uppercase">Lead Author</span>
                <h3 className="text-base font-bold text-slate-900">{paper.author}</h3>
                <p className="text-xs text-slate-600">{paper.authorAffiliation}</p>
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
              <Link href="/research" className="hover:underline flex items-center gap-1">
                ← Return to Research Archive
              </Link>
              <Link href="/white-papers" className="hover:underline flex items-center gap-1">
                View White Papers →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
