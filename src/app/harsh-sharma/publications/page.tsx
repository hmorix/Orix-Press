import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { researchPapers } from "@/data/research";
import { whitePapers } from "@/data/whitePapers";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookOpen, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Technical Publications & Papers Registry`,
  description: `Official registry of technical articles, research papers, and engineering white papers authored by Harsh Sharma under HMorix Press.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/publications`,
  },
};

export default function PublicationsRegistryPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Publications Registry", url: "/harsh-sharma/publications" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <BookOpen className="h-3.5 w-3.5 text-slate-600" />
              <span>Official Publishing Registry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Technical Publications &amp; Writing Registry
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              A comprehensive index of research papers, white papers, and technical articles authored by {siteConfig.person.name}.
            </p>
          </header>

          {/* Section 1: Research Papers */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Research Papers</h2>
              <span className="text-xs font-mono text-slate-500">Peer-Reviewed / Preprints</span>
            </div>
            <div className="space-y-3">
              {researchPapers.map((paper) => (
                <div key={paper.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{paper.publishedDate}</span>
                    <span className="font-mono">DOI: {paper.doi || "Pending"}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    <Link href={`/research/${paper.slug}`} className="hover:text-sky-700">
                      {paper.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">{paper.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: White Papers */}
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Technical White Papers</h2>
              <span className="text-xs font-mono text-slate-500">Architecture Guides</span>
            </div>
            <div className="space-y-3">
              {whitePapers.map((wp) => (
                <div key={wp.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{wp.publishedDate}</span>
                    <span>{wp.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    <Link href={`/white-papers/${wp.slug}`} className="hover:text-sky-700">
                      {wp.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">{wp.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Technical Articles */}
          <section className="space-y-4 pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Technical Articles &amp; Essays</h2>
              <span className="text-xs font-mono text-slate-500">HMorix Press Journal</span>
            </div>
            <div className="space-y-3">
              {articles.map((art) => (
                <div key={art.slug} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>{art.publishedAt}</span>
                    <span>{art.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    <Link href={`/blog/${art.slug}`} className="hover:text-sky-700">
                      {art.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">{art.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/research" className="hover:underline flex items-center gap-1">
              ← View Research Focus
            </Link>
            <Link href="/harsh-sharma/media" className="hover:underline flex items-center gap-1">
              View Media &amp; Press →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
