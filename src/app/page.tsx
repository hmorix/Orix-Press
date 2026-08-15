import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { researchPapers } from "@/data/research";
import { whitePapers } from "@/data/whitePapers";
import { SocialLinksBar } from "@/components/SocialLinksBar";
import { DisambiguationNotice } from "@/components/DisambiguationNotice";
import { AiReadableSection } from "@/components/AiReadableSection";
import {
  ArrowRight,
  Code2,
  BookOpen,
  FileText,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Camera,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.person.name} — ${siteConfig.person.jobTitle}`,
  description: `Official digital publishing platform and canonical technical archive for ${siteConfig.person.name}. Access software projects, research papers, white papers, and developer documentation.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section: Editorial & Entity Hub */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text & Bio Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>HMorix Press · Canonical Entity Publication</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                {siteConfig.person.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                {siteConfig.person.jobTitle}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Welcome to HMorix Press, the official digital publishing archive and technical repository for {siteConfig.person.name}. Explore verified software engineering projects, open technical white papers, empirical research evaluations, and structured knowledge documentation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/harsh-sharma"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800 transition-colors"
                >
                  <span>View Entity Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/harsh-sharma/developer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <Code2 className="h-4 w-4 text-slate-600" />
                  <span>Developer Profile</span>
                </Link>

                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <BookOpen className="h-4 w-4 text-slate-600" />
                  <span>Research &amp; Papers</span>
                </Link>
              </div>

              {/* Verified Socials Bar */}
              <div className="pt-4 border-t border-slate-200">
                <SocialLinksBar showHeading={false} />
              </div>
            </div>

            {/* Right: Profile Visual & Entity Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="aspect-square relative w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                  <Image
                    src={siteConfig.person.primaryImage}
                    alt={`${siteConfig.person.name}, ${siteConfig.person.jobTitle}`}
                    width={600}
                    height={600}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Primary Entity
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{siteConfig.person.name}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Software engineering, full-stack web architecture, OCR processing pipelines, and AI-assisted workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disambiguation Banner */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <DisambiguationNotice />
      </div>

      {/* Primary Navigation Hub / Ecosystem */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Information Architecture
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Entity Exploration &amp; Technical Archives
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              Navigate structured documentation, technical case studies, research papers, and verified media archives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Entity Hub */}
            <Link
              href="/harsh-sharma"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  Harsh Sharma (Entity Hub)
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Canonical profile containing complete biography, core competencies, projects overview, and official verification links.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-sky-700">
                <span>Explore Profile</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2: Developer & Architecture */}
            <Link
              href="/harsh-sharma/developer"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center mb-4">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Developer &amp; Stack
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Deep dive into Harsh Sharma&apos;s development methodology, TypeScript engineering standards, and Next.js architectural patterns.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-emerald-700">
                <span>View Engineering Stack</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 3: Software Projects */}
            <Link
              href="/harsh-sharma/projects"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 flex items-center justify-center mb-4">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  Software Projects
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Curated showcase of full-stack web platforms, OCR document processing engines, and developer productivity tooling.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-indigo-700">
                <span>View Projects</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 4: Research Papers */}
            <Link
              href="/research"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Research Papers
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Empirical studies, benchmarking evaluations on AI-assisted development guardrails, and OCR layout clustering.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-amber-700">
                <span>Read Research</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 5: Technical White Papers */}
            <Link
              href="/white-papers"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-purple-50 border border-purple-200 text-purple-800 flex items-center justify-center mb-4">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  Technical White Papers
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Comprehensive architectural guides for building enterprise full-stack web systems and scalable document ingestion engines.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-purple-700">
                <span>Access White Papers</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 6: Photo Archive & Gallery */}
            <Link
              href="/harsh-sharma/photos"
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-center justify-center mb-4">
                  <Camera className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                  Verified Photo Archive
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  High-resolution photo gallery with descriptive image metadata, EXIF context, and dedicated image landing pages for Google Image SEO.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-rose-700">
                <span>Browse Gallery</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Featured Engineering
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Selected Software Projects
              </h2>
            </div>
            <Link
              href="/harsh-sharma/projects"
              className="mt-4 sm:mt-0 text-xs font-bold text-slate-900 hover:underline flex items-center gap-1"
            >
              <span>View all projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500">{project.category}</span>
                    <span className="text-[11px] font-mono text-slate-400">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles & Research */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Digital Publishing Journal
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Latest Publications &amp; Technical Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 sm:mt-0 text-xs font-bold text-slate-900 hover:underline flex items-center gap-1"
            >
              <span>View publishing archive</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <article
                key={article.slug}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span>{article.category}</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{article.publishedAt}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-semibold text-sky-700 hover:underline"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Readable Facts & Direct Answers */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <AiReadableSection />
      </div>
    </main>
  );
}
