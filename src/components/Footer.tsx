import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Entity & Publisher Summary */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-sm">
                H
              </div>
              <span className="font-bold text-slate-900 text-base">{siteConfig.name}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              The official digital publishing platform, technical research archive, and verified entity knowledge portal for <strong className="text-slate-900 font-semibold">{siteConfig.person.name}</strong>.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>Verified Entity Registry</span>
            </div>
          </div>

          {/* Col 2: Entity Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Entity Profiles
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/harsh-sharma" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Harsh Sharma (Canonical Profile)
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/biography" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Biography &amp; Disambiguation
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/developer" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Developer &amp; Architecture Profile
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/projects" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Software Projects &amp; Tooling
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/skills" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Technical Competencies
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/photos" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Verified Photo Archive
                </Link>
              </li>
              <li>
                <Link href="/harsh-sharma/faq" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Entity FAQ (AEO Direct Answers)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Publications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Publishing &amp; Research
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/research" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Technical Research Papers
                </Link>
              </li>
              <li>
                <Link href="/white-papers" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Engineering White Papers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Digital Publishing Journal
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Press Releases &amp; Media Kit
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-600 hover:text-slate-900 hover:underline">
                  Verified Testimonials Policy
                </Link>
              </li>
              <li>
                <Link href="/hi/harsh-sharma" className="text-slate-600 hover:text-slate-900 hover:underline">
                  हिंदी संस्करण (Hindi Profile)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified External Networks & Indexing */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Verified Networks &amp; Indexing
            </h3>
            <p className="mt-4 text-xs text-slate-600 leading-relaxed">
              Official profiles authenticated via bidirectional canonical links (rel=&quot;me&quot;):
            </p>
            <div className="mt-3 space-y-2">
              {siteConfig.person.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <span>{social.platform}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name} · All rights reserved. Published for {siteConfig.person.name}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-slate-900 hover:underline">
              Sitemap (XML)
            </Link>
            <Link href="/robots.txt" className="hover:text-slate-900 hover:underline">
              Robots.txt
            </Link>
            <Link href="/harsh-sharma/faq" className="hover:text-slate-900 hover:underline">
              Identity Verification
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
