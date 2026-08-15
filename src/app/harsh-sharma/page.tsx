import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { researchPapers } from "@/data/research";
import { whitePapers } from "@/data/whitePapers";
import { PersonSchema } from "@/components/schemas/PersonSchema";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SocialLinksBar } from "@/components/SocialLinksBar";
import { DisambiguationNotice } from "@/components/DisambiguationNotice";
import { AiReadableSection } from "@/components/AiReadableSection";
import {
  Code2,
  BookOpen,
  FileText,
  Layers,
  Camera,
  HelpCircle,
  ShieldCheck,
  Calendar,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: `${siteConfig.person.name} | ${siteConfig.person.jobTitle} — Canonical Profile`,
  description: `Official canonical entity profile and portfolio for ${siteConfig.person.name}. Explore verified software projects, engineering skills, research papers, white papers, and contact info.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma`,
    languages: {
      en: `${siteConfig.url}/harsh-sharma`,
      "hi-IN": `${siteConfig.url}/hi/harsh-sharma`,
    },
  },
  openGraph: {
    title: `${siteConfig.person.name} — ${siteConfig.person.jobTitle}`,
    description: siteConfig.person.description,
    url: `${siteConfig.url}/harsh-sharma`,
    type: "profile",
    images: [{ url: siteConfig.person.primaryImage }],
  },
};

export default function HarshSharmaProfilePage() {
  return (
    <>
      <PersonSchema isProfilePage={true} />
      <FAQSchema faqs={siteConfig.faqs} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ name: siteConfig.person.name, url: "/harsh-sharma" }]} />

          {/* Disambiguation Notice */}
          <div className="mb-8">
            <DisambiguationNotice />
          </div>

          {/* Primary Entity Header Block */}
          <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Profile Image with Image SEO semantics */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="aspect-square relative w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
                  <Image
                    src={siteConfig.person.primaryImage}
                    alt={`${siteConfig.person.name}, ${siteConfig.person.jobTitle}`}
                    width={500}
                    height={500}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Entity Overview */}
              <div className="md:col-span-8 lg:col-span-9 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-semibold text-emerald-800">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Canonical Entity Profile</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Published by {siteConfig.publisher.name}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                  {siteConfig.person.name}
                </h1>

                <p className="text-base sm:text-lg font-medium text-slate-700">
                  {siteConfig.person.jobTitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                  {siteConfig.person.bioShort}
                </p>

                {/* Quick Metadata Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>Location: {siteConfig.person.verifiedLocation}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>Last Updated: {siteConfig.person.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                    <span>{siteConfig.person.email}</span>
                  </div>
                </div>

                {/* Verified Social Channels */}
                <div className="pt-3 border-t border-slate-200">
                  <SocialLinksBar showHeading={false} />
                </div>
              </div>
            </div>
          </header>

          {/* Main Grid: Biography, Focus Areas, Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col (8 cols): Bio & Details */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: Detailed Biography */}
              <section aria-labelledby="bio-heading">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="bio-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                    Biography &amp; Background
                  </h2>
                  <Link
                    href="/harsh-sharma/biography"
                    className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Full Biography</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {siteConfig.person.bioLong.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Section 2: Technical Focus & Philosophy */}
              <section aria-labelledby="focus-heading" className="border-t border-slate-200 pt-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="focus-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                    Professional Focus &amp; Competencies
                  </h2>
                  <Link
                    href="/harsh-sharma/developer"
                    className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Developer Profile</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteConfig.skills.map((skillGroup) => (
                    <div
                      key={skillGroup.category}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{skillGroup.category}</h3>
                      <p className="text-xs text-slate-500 mb-3">{skillGroup.description}</p>
                      <div className="space-y-1.5">
                        {skillGroup.skills.slice(0, 3).map((s) => (
                          <div key={s.name} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span className="font-medium">{s.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Key Software Projects */}
              <section aria-labelledby="projects-heading" className="border-t border-slate-200 pt-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="projects-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                    Featured Software Projects
                  </h2>
                  <Link
                    href="/harsh-sharma/projects"
                    className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>All Projects</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {siteConfig.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-sky-700">{proj.category}</span>
                        <span className="text-xs font-mono text-slate-400">{proj.year}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{proj.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Technical Research & White Papers */}
              <section aria-labelledby="research-heading" className="border-t border-slate-200 pt-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="research-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                    Research &amp; Technical Publications
                  </h2>
                  <Link
                    href="/research"
                    className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Research Archive</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {researchPapers.map((paper) => (
                    <div
                      key={paper.slug}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>Research Paper · Version {paper.version}</span>
                        <span>{paper.publishedDate}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        <Link href={`/research/${paper.slug}`} className="hover:text-sky-700">
                          {paper.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {paper.abstract}
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">DOI: {paper.doi || "Pending"}</span>
                        <Link
                          href={`/research/${paper.slug}`}
                          className="font-semibold text-sky-700 hover:underline"
                        >
                          Read paper →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5: Frequently Asked Questions (AEO/GEO direct answers) */}
              <section aria-labelledby="faq-section-heading" className="border-t border-slate-200 pt-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 id="faq-section-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
                    Frequently Asked Questions
                  </h2>
                  <Link
                    href="/harsh-sharma/faq"
                    className="text-xs font-semibold text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Full FAQ Page</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {siteConfig.faqs.slice(0, 4).map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 sm:p-5"
                    >
                      <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Col (4 cols): Quick Links & Photo Cards */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Photo Showcase Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-slate-700" />
                    <h3 className="text-sm font-bold text-slate-900">Photo Archive</h3>
                  </div>
                  <Link href="/harsh-sharma/photos" className="text-xs text-sky-700 hover:underline">
                    View all ({siteConfig.photos.length})
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.photos.slice(0, 4).map((photo) => (
                    <Link
                      key={photo.id}
                      href={`/harsh-sharma/photos/${photo.slug}`}
                      className="group relative aspect-square overflow-hidden rounded-lg bg-slate-100 border border-slate-200"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.altText}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sub-Pages Directory Navigation */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Sub-Page Directory
                </h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/harsh-sharma/biography"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Biography &amp; Disambiguation</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/developer"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Developer &amp; Stack</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/projects"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Software Projects</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/skills"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Skills &amp; Competencies</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/research"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Research Focus</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/publications"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Publications Registry</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/media"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Media &amp; Press</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/photos"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Photo Gallery</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/harsh-sharma/faq"
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:underline py-1"
                    >
                      <span>Frequently Asked Questions</span>
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Direct Contact</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For official software inquiries, research collaborations, or press requests:
                </p>
                <div className="pt-2 text-xs font-mono text-slate-800">
                  <p>Email: {siteConfig.person.email}</p>
                  <p className="mt-1">Publisher: {siteConfig.publisher.name}</p>
                </div>
              </div>
            </aside>
          </div>

          {/* AI-Readable Facts */}
          <div className="mt-16">
            <AiReadableSection />
          </div>
        </div>
      </main>
    </>
  );
}
