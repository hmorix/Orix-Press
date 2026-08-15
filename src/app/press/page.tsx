import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { pressReleases } from "@/data/pressReleases";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Radio, Mail, Calendar, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Press Releases & Official Announcements | ${siteConfig.name}`,
  description: `Official press releases, media statements, and publishing announcements from HMorix Press concerning Harsh Sharma and technology releases.`,
  alternates: {
    canonical: `${siteConfig.url}/press`,
  },
};

export default function PressArchivePage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Press", url: "/press" }]} />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <Radio className="h-3.5 w-3.5 text-slate-600" />
              <span>Official Press &amp; Media Room</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Press Releases &amp; Official Communications
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Official media releases from HMorix Press. Strictly verified news regarding technical papers, platform launches, and software engineering releases.
            </p>
          </header>

          <div className="space-y-6">
            {pressReleases.map((release) => (
              <article
                key={release.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                    {release.source}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{release.publishedDate}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{release.location}</span>
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {release.title}
                </h2>

                <p className="text-xs sm:text-sm font-medium text-slate-600">
                  {release.summary}
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                  {release.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                  <div>
                    Press Contact: <span className="font-mono text-slate-900">{release.contactEmail}</span>
                  </div>
                  <span className="text-slate-400">HMorix Press Official Record</span>
                </div>
              </article>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/white-papers" className="hover:underline flex items-center gap-1">
              ← View White Papers
            </Link>
            <Link href="/testimonials" className="hover:underline flex items-center gap-1">
              View Testimonials Policy →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
