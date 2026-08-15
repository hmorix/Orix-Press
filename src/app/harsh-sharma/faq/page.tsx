import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSchema } from "@/components/schemas/FAQSchema";
import { DisambiguationNotice } from "@/components/DisambiguationNotice";
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma FAQ — Frequently Asked Questions & Entity Answers`,
  description: `Direct factual answers to common questions about Harsh Sharma: professional identity, software development stack, projects, publications, and verified profiles.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/faq`,
  },
};

export default function FAQPage() {
  const categories = ["All", "General", "Engineering", "Identity & Clarification", "Contact & Profiles"];

  return (
    <>
      <FAQSchema faqs={siteConfig.faqs} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: siteConfig.person.name, url: "/harsh-sharma" },
              { name: "FAQ", url: "/harsh-sharma/faq" },
            ]}
          />

          <div className="space-y-8">
            <header className="border-b border-slate-200 pb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
                <HelpCircle className="h-3.5 w-3.5 text-slate-600" />
                <span>Verified Entity Q&amp;A</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Frequently Asked Questions: {siteConfig.person.name}
              </h1>
              <p className="mt-2 text-base text-slate-600 font-medium max-w-2xl">
                Direct, factual answers regarding {siteConfig.person.name}&apos;s background, technical specialization, verified repositories, and official publications.
              </p>
            </header>

            <DisambiguationNotice />

            {/* Questions List */}
            <div className="space-y-4">
              {siteConfig.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    <span className="font-mono">FAQ #{index + 1}</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* AI Search Optimization Note */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Information Architecture &amp; Fact Attribution</span>
              </div>
              <p className="leading-relaxed">
                All answers in this registry are maintained directly in accordance with HMorix Press factual accuracy guidelines. This information is formatted to provide unambiguous entity data for both human readers and search engine retrieval algorithms.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
              <Link href="/harsh-sharma/photos" className="hover:underline flex items-center gap-1">
                ← View Photo Archive
              </Link>
              <Link href="/blog" className="hover:underline flex items-center gap-1">
                Explore Digital Publishing Journal →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
