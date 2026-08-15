import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cpu, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Verified Technical Skills & Competencies`,
  description: `Official breakdown of Harsh Sharma's technical competencies across TypeScript, React, Next.js, systems architecture, AI workflows, and OCR engineering.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/skills`,
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Skills & Competencies", url: "/harsh-sharma/skills" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <Cpu className="h-3.5 w-3.5 text-slate-600" />
              <span>Verified Competency Matrix</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Technical Skills &amp; Domain Expertise
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              An evidence-based taxonomy of engineering skills, frameworks, and architectural capabilities demonstrated across {siteConfig.person.name}&apos;s publications and software systems.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.skills.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{category.category}</h2>
                  <p className="text-xs text-slate-500 mt-1 mb-5">{category.description}</p>

                  <div className="space-y-4">
                    {category.skills.map((s) => (
                      <div key={s.name} className="rounded-lg bg-slate-50 p-3.5 border border-slate-100">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>{s.name}</span>
                          </span>
                          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                            {s.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 pl-5">{s.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/projects" className="hover:underline flex items-center gap-1">
              ← View Software Projects
            </Link>
            <Link href="/harsh-sharma/research" className="hover:underline flex items-center gap-1">
              View Research Focus →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
