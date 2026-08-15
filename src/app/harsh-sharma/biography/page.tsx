import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisambiguationNotice } from "@/components/DisambiguationNotice";
import { SocialLinksBar } from "@/components/SocialLinksBar";
import { ShieldCheck, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma Biography — Software Developer & Technology Professional`,
  description: `Official biography and background of Harsh Sharma. Read verified details on his software development focus, engineering principles, and name disambiguation.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/biography`,
  },
};

export default function BiographyPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Biography", url: "/harsh-sharma/biography" },
          ]}
        />

        <div className="space-y-8">
          {/* Header */}
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <UserCheck className="h-3.5 w-3.5 text-slate-600" />
              <span>Official Biography &amp; Record</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Biography: {siteConfig.person.name}
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium">
              Software Developer &amp; Technology Professional · Published by {siteConfig.publisher.name}
            </p>
          </header>

          <DisambiguationNotice />

          {/* Biography Article */}
          <article className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">1. Overview and Engineering Focus</h2>
              <p>
                Harsh Sharma is an active software developer and technology professional whose technical focus centers on modern full-stack web engineering, scalable edge architectures, automated optical character recognition (OCR) systems, and developer productivity tooling.
              </p>
              <p>
                Through the official publishing imprint <strong className="text-slate-900">HMorix Press</strong>, his engineering research, white papers, and open-source contributions are cataloged and made accessible to the wider software development community.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">2. Development Principles and Methodology</h2>
              <p>
                Harsh Sharma&apos;s development methodology is grounded in fundamental engineering discipline:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Strict Type Contracts:</strong> Utilizing TypeScript and runtime validation (such as Zod schemas) to establish inviolable interfaces across server and client tiers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Accessible &amp; Semantic Web:</strong> Structuring web applications with strict HTML5 semantics, comprehensive ARIA landmarks, and valid Schema.org knowledge graphs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Performance-First Delivery:</strong> Engineering for sub-second Core Web Vitals, zero unnecessary client-side bundle bloat, and static edge generation.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">3. Name Variations and Search Disambiguation</h2>
              <p>
                Because &quot;Harsh Sharma&quot; is a common personal name across India and globally, search engines frequently encounter queries with varying transliterations and word orders.
              </p>
              <p>
                Searches such as <em>&quot;Sharma Harsh&quot;</em> or <em>&quot;Harsh Sharma developer&quot;</em> reference this verified canonical entity in relation to software engineering, Next.js development, and HMorix Press technical publications.
              </p>
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600">
                <strong className="text-slate-900">Policy on Verified Facts:</strong> In accordance with HMorix Press editorial guidelines, only verified technical credentials, authentic repositories, and publicly confirmed facts are published. Personal rumors, unverified private details, or unverified claims are excluded.
              </div>
            </section>

            <section className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">4. Official Profiles and Connectivity</h2>
              <p>
                Verified representations of Harsh Sharma are linked directly below. These accounts represent the only authenticated external presences associated with this entity.
              </p>
              <div className="pt-2">
                <SocialLinksBar />
              </div>
            </section>
          </article>

          {/* Quick Navigation Footer */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma" className="hover:underline flex items-center gap-1">
              ← Return to Entity Hub
            </Link>
            <Link href="/harsh-sharma/developer" className="hover:underline flex items-center gap-1">
              Explore Developer Profile →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
