import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { researchPapers } from "@/data/research";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookOpen, Download, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Technical Research Papers & Empirical Studies | ${siteConfig.name}`,
  description: `Official repository of technical research papers, benchmarking studies, and architectural investigations by Harsh Sharma and HMorix Press.`,
  alternates: {
    canonical: `${siteConfig.url}/research`,
  },
};

export default function ResearchArchivePage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Research", url: "/research" }]} />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
              <BookOpen className="h-3.5 w-3.5 text-amber-600" />
              <span>HMorix Press Research Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Engineering Research &amp; Scholarly Papers
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Empirical investigations, software benchmarking, and system architecture studies. All papers are published under open access standards with HTML views and downloadable documents.
            </p>
          </header>

          {/* Research Papers Listing */}
          <div className="space-y-6">
            {researchPapers.map((paper) => (
              <div
                key={paper.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded">
                      Research Paper
                    </span>
                    <span className="font-mono">v{paper.version}</span>
                  </div>
                  <span>Published: {paper.publishedDate}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  <Link href={`/research/${paper.slug}`} className="hover:text-sky-700 transition-colors">
                    {paper.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {paper.subtitle}
                </p>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Abstract
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {paper.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-600"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-slate-500">
                    <span>Author: <strong>{paper.author}</strong> ({paper.authorAffiliation})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-slate-400">DOI: {paper.doi || "Pending"}</span>
                    <Link
                      href={`/research/${paper.slug}`}
                      className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <span>Read Paper &amp; Citations</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/blog" className="hover:underline flex items-center gap-1">
              ← View Technical Articles
            </Link>
            <Link href="/white-papers" className="hover:underline flex items-center gap-1">
              Access Engineering White Papers →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
