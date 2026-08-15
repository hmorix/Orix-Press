import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Code2, Cpu, CheckCircle2, Layers, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Software Developer & Technology Stack Profile`,
  description: `Technical profile of Harsh Sharma. Explore his engineering toolchain (TypeScript, Next.js, Node.js), system design principles, and architecture philosophy.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/developer`,
  },
};

export default function DeveloperProfilePage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Developer Profile", url: "/harsh-sharma/developer" },
          ]}
        />

        <div className="space-y-10">
          {/* Header */}
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 mb-3">
              <Code2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Engineering &amp; Architecture Profile</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Software Developer Profile: {siteConfig.person.name}
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              A comprehensive technical overview of software architecture paradigms, toolchains, and development standards practiced by Harsh Sharma.
            </p>
          </header>

          {/* Core Architectural Tenets */}
          <section aria-labelledby="tenets-heading" className="space-y-4">
            <h2 id="tenets-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
              Core Engineering Tenets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Edge-First &amp; Static Generation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Leveraging server components and static edge revalidation to eliminate runtime database latency and deliver sub-100ms TTFB.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Strict Contract Typing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Treating TypeScript interfaces and runtime Zod schemas as the single source of truth across service boundaries.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">Knowledge Graph Integrity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Embedding authentic Schema.org JSON-LD microdata matching 100% of visible content for seamless search engine and AI agent comprehension.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Stack Breakdown */}
          <section aria-labelledby="stack-heading" className="space-y-6 pt-6 border-t border-slate-200">
            <h2 id="stack-heading" className="text-xl sm:text-2xl font-bold text-slate-900">
              Verified Technical Stack &amp; Tooling
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.skills.map((category) => (
                <div
                  key={category.category}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-1">{category.category}</h3>
                  <p className="text-xs text-slate-500 mb-4">{category.description}</p>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="border-t border-slate-100 pt-2.5">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                          <span>{skill.name}</span>
                          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{skill.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps / Related Hubs */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/biography" className="hover:underline flex items-center gap-1">
              ← View Biography
            </Link>
            <Link href="/harsh-sharma/projects" className="hover:underline flex items-center gap-1">
              Explore Software Projects →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
