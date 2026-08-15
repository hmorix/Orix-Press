import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { hindiContent } from "@/data/hindiContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonSchema } from "@/components/schemas/PersonSchema";
import { SocialLinksBar } from "@/components/SocialLinksBar";
import { ShieldCheck, Globe, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: hindiContent.pageTitle,
  description: hindiContent.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/hi/harsh-sharma`,
    languages: {
      en: `${siteConfig.url}/harsh-sharma`,
      "hi-IN": `${siteConfig.url}/hi/harsh-sharma`,
    },
  },
  openGraph: {
    title: hindiContent.person.name,
    description: hindiContent.person.description,
    url: `${siteConfig.url}/hi/harsh-sharma`,
    locale: "hi_IN",
    images: [{ url: siteConfig.person.primaryImage }],
  },
};

export default function HindiProfilePage() {
  return (
    <>
      <PersonSchema url={`${siteConfig.url}/hi/harsh-sharma`} isProfilePage={true} />

      <main className="min-h-screen py-10 sm:py-14" lang="hi">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "हिंदी (Hindi)", url: "/hi/harsh-sharma" },
              { name: "हर्ष शर्मा", url: "/hi/harsh-sharma" },
            ]}
          />

          <div className="space-y-10">
            {/* Header with Bilingual Indicator */}
            <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 lg:col-span-3">
                  <div className="aspect-square relative w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
                    <Image
                      src={siteConfig.person.primaryImage}
                      alt={hindiContent.person.name}
                      width={500}
                      height={500}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-xs font-semibold text-emerald-800">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <span>आधिकारिक प्रामाणिक प्रोफ़ाइल (Verified Entity)</span>
                    </span>
                    <Link
                      href="/harsh-sharma"
                      className="text-xs text-sky-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Read in English</span>
                    </Link>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                    {hindiContent.person.name}
                  </h1>

                  <p className="text-base sm:text-lg font-semibold text-slate-700">
                    {hindiContent.person.jobTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {hindiContent.person.description}
                  </p>

                  <div className="pt-3 border-t border-slate-200">
                    <SocialLinksBar showHeading={false} />
                  </div>
                </div>
              </div>
            </header>

            {/* Identity Clarification in Hindi */}
            <div className="rounded-xl border border-sky-200 bg-sky-50/80 p-5 text-sky-950 space-y-2">
              <h2 className="text-sm font-bold text-sky-900">
                {hindiContent.person.identityClarificationHeading}
              </h2>
              <p className="text-xs sm:text-sm text-sky-800 leading-relaxed">
                {hindiContent.person.identityClarificationText}
              </p>
            </div>

            {/* About Section in Hindi */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {hindiContent.person.aboutHeading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {hindiContent.person.aboutText}
              </p>
            </section>

            {/* Key Focus Areas */}
            <section className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                प्रमुख तकनीकी कार्यक्षेत्र (Key Engineering Areas)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {hindiContent.person.keyAreas.map((area, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                    <h3 className="text-sm font-bold text-slate-900">{area.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ in Hindi */}
            <section className="space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-slate-600" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {hindiContent.person.faqHeading}
                </h2>
              </div>
              <div className="space-y-3">
                {hindiContent.person.faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Link back */}
            <div className="pt-6 border-t border-slate-200 flex justify-between text-xs font-semibold text-sky-700">
              <Link href="/harsh-sharma" className="hover:underline flex items-center gap-1">
                ← अंग्रेजी संस्करण पर लौटें (English Version)
              </Link>
              <Link href="/harsh-sharma/projects" className="hover:underline flex items-center gap-1">
                प्रोजेक्ट्स देखें (View Projects) →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
