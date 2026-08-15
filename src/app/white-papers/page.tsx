import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { whitePapers } from "@/data/whitePapers";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileText, ArrowRight, Download, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Technical White Papers & Architecture Guides | ${siteConfig.name}`,
  description: `Official engineering white papers on full-stack web architecture, OCR processing systems, and developer tooling authored by Harsh Sharma.`,
  alternates: {
    canonical: `${siteConfig.url}/white-papers`,
  },
};

export default function WhitePapersArchivePage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "White Papers", url: "/white-papers" }]} />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-semibold text-purple-800 mb-3">
              <FileText className="h-3.5 w-3.5 text-purple-600" />
              <span>Engineering White Papers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Technical White Papers &amp; System Architecture
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Comprehensive architectural guides designed for software engineers and technology leaders. Deep dives into decoupled edge systems, OCR pipelines, and AI engineering workflows.
            </p>
          </header>

          <div className="space-y-6">
            {whitePapers.map((paper) => (
              <div
                key={paper.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded">
                    Technical White Paper
                  </span>
                  <span>Published: {paper.publishedDate} · {paper.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  <Link href={`/white-papers/${paper.slug}`} className="hover:text-sky-700 transition-colors">
                    {paper.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {paper.subtitle}
                </p>

                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Executive Summary
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {paper.executiveSummary}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {paper.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-slate-500">
                    Target Audience: <strong>{paper.targetAudience}</strong>
                  </div>
                  <Link
                    href={`/white-papers/${paper.slug}`}
                    className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Read White Paper</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/research" className="hover:underline flex items-center gap-1">
              ← View Research Papers
            </Link>
            <Link href="/press" className="hover:underline flex items-center gap-1">
              View Press Releases →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
