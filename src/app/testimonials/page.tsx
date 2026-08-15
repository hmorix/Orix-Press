import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldAlert, CheckCircle2, MessageSquare, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: `Verified Testimonials & Endorsement Policy | ${siteConfig.name}`,
  description: `Official testimonials policy of HMorix Press and Harsh Sharma. Zero-tolerance policy on synthetic reviews and verified endorsement criteria.`,
  alternates: {
    canonical: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Testimonials", url: "/testimonials" }]} />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800 mb-3">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Authenticity &amp; Verification Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Testimonials &amp; Professional Endorsement Registry
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-2xl">
              HMorix Press maintains strict verification standards. Only authorized, verified testimonials from real collaborating engineers or verified client contacts are published.
            </p>
          </header>

          {/* Verification Policy Notice */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <ShieldAlert className="h-5 w-5 text-amber-600" />
              <h2>Editorial Policy on Endorsements</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              In strict accordance with search engine quality rater guidelines and HMorix Press editorial ethics:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>No Synthetic Feedback:</strong> Fabricated quotes, placeholder reviews, or automated testimonials are strictly forbidden on this domain.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Explicit Consent:</strong> All testimonials must feature confirmed identity, verified professional role, and documented publication consent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Verifiable Traceability:</strong> Endorsements are mapped to public repositories, verified GitHub collaborations, or direct professional partnerships.</span>
              </li>
            </ul>
          </div>

          {/* Current Status Box */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-center space-y-3">
            <MessageSquare className="h-8 w-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">
              Testimonial Registry Status
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Collaborator testimonials and peer code reviews are currently undergoing official administrative verification. Verified entries will be listed here following authorization.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.person.email}?subject=Testimonial Submission`}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Submit Endorsement for Review</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/press" className="hover:underline flex items-center gap-1">
              ← View Press Releases
            </Link>
            <Link href="/harsh-sharma" className="hover:underline flex items-center gap-1">
              Return to Entity Hub →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
