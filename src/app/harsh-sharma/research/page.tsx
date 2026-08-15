import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { researchPapers } from "@/data/research";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookOpen, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Research Focus & Academic Papers`,
  description: `Explore Harsh Sharma's technical research initiatives, empirical evaluations on AI-assisted coding, and OCR spatial parsing architectures.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/research`,
  },
};

export default function EntityResearchPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Research Focus", url: "/harsh-sharma/research" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
              <BookOpen className="h-3.5 w-3.5 text-amber-600" />
              <span>Technical Research Focus</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Engineering Research &amp; Investigations
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              An overview of active research tracks conducted by {siteConfig.person.name} in collaboration with HMorix Press.
            </p>
          </header>

          {/* Research Areas */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Active Research Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">AI-Assisted Code Synthesis Guardrails</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluating how strict type systems (TypeScript) and compile-time feedback loops prevent hallucinations and regression in generative AI workflows.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">OCR &amp; Spatial Document Normalization</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Developing spatial clustering algorithms to reconstruct multi-column tabular records from physical document scans with minimal latency.
                </p>
              </div>
            </div>
          </section>

          {/* Published Papers List */}
          <section className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Published Research Papers</h2>
              <Link href="/research" className="text-xs font-semibold text-sky-700 hover:underline">
                View in Research Archive →
              </Link>
            </div>

            <div className="space-y-4">
              {researchPapers.map((paper) => (
                <div
                  key={paper.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono">Version {paper.version}</span>
                    <span>{paper.publishedDate}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    <Link href={`/research/${paper.slug}`} className="hover:text-sky-700">
                      {paper.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {paper.abstract}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400">DOI: {paper.doi || "Pending"}</span>
                    <Link
                      href={`/research/${paper.slug}`}
                      className="font-semibold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <span>Read full paper</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/skills" className="hover:underline flex items-center gap-1">
              ← View Technical Skills
            </Link>
            <Link href="/harsh-sharma/publications" className="hover:underline flex items-center gap-1">
              View Publications Registry →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
