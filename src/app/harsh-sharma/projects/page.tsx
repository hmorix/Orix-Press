import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Layers, CheckCircle2, ArrowUpRight, Github, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Software Projects & Open Source Tooling`,
  description: `Showcase of verified software projects, digital publishing engines, OCR pipelines, and developer tools created and maintained by Harsh Sharma.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Projects", url: "/harsh-sharma/projects" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-800 mb-3">
              <Layers className="h-3.5 w-3.5 text-indigo-600" />
              <span>Engineering Registry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Software Projects &amp; Developer Tools
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Curated software systems, publishing architectures, OCR extraction pipelines, and TypeScript toolkits engineered by Harsh Sharma.
            </p>
          </header>

          {/* Project Cards Grid */}
          <div className="space-y-6">
            {siteConfig.projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-xs font-semibold text-sky-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Status: {project.status}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{project.title}</h2>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">{project.tagline}</p>
                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Highlights &amp; Architecture Notes
                  </h3>
                  <div className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies and Links */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-slate-100 px-2.5 py-1 text-xs font-mono font-medium text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="me noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Repository</span>
                        <ArrowUpRight className="h-3 w-3 text-slate-400" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>Live Deployment</span>
                        <ArrowUpRight className="h-3 w-3 text-sky-500" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/developer" className="hover:underline flex items-center gap-1">
              ← View Developer Stack
            </Link>
            <Link href="/harsh-sharma/skills" className="hover:underline flex items-center gap-1">
              View Verified Skills →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
