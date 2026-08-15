import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { pressReleases } from "@/data/pressReleases";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Radio, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Official Media, Announcements & Press Kit`,
  description: `Official media resources, verified press announcements, and media contact information for Harsh Sharma and HMorix Press.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/media`,
  },
};

export default function MediaPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Media & Press", url: "/harsh-sharma/media" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <Radio className="h-3.5 w-3.5 text-slate-600" />
              <span>Verified Media Kit &amp; Press</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Media, Press &amp; Official Announcements
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Authentic press releases, publication notices, and verified media guidelines for {siteConfig.person.name}.
            </p>
          </header>

          {/* Media Kit Overview */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Official Media Statement &amp; Guidelines</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              HMorix Press strictly adheres to factual accuracy in digital journalism and entity documentation. All quotes, biography references, and media attribution concerning Harsh Sharma should reference this canonical source and link to official verified URLs.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-800">
              <div>
                <strong>Canonical Name:</strong> {siteConfig.person.name}
              </div>
              <div>
                <strong>Official Title:</strong> {siteConfig.person.jobTitle}
              </div>
              <div>
                <strong>Publisher:</strong> {siteConfig.publisher.name}
              </div>
            </div>
          </section>

          {/* Press Releases */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Official Press Releases</h2>
              <Link href="/press" className="text-xs font-semibold text-sky-700 hover:underline">
                View All Press Releases →
              </Link>
            </div>

            <div className="space-y-4">
              {pressReleases.map((release) => (
                <div
                  key={release.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{release.source}</span>
                    <span>{release.publishedDate}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{release.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {release.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-700" />
              <h3 className="text-sm font-bold text-slate-900">Media Inquiries</h3>
            </div>
            <p className="text-xs text-slate-600">
              For interviews, technical commentaries, or editorial verification, contact the HMorix Press editorial desk at:
            </p>
            <p className="text-xs font-mono text-slate-900 font-semibold">{siteConfig.person.email}</p>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/publications" className="hover:underline flex items-center gap-1">
              ← View Publications
            </Link>
            <Link href="/harsh-sharma/photos" className="hover:underline flex items-center gap-1">
              View Photo Gallery →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
