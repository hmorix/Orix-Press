import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: `Digital Publishing Journal — Technical Insights & Architecture Essays`,
  description: `Official technical writing and software engineering essays by Harsh Sharma published under HMorix Press. Topics include Next.js, TypeScript, AI tooling, and OCR.`,
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 mb-3">
              <BookOpen className="h-3.5 w-3.5 text-slate-600" />
              <span>HMorix Press Journal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Technical Publishing &amp; Engineering Journal
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Original technical articles, architectural guides, and software engineering insights authored by {siteConfig.person.name} and the HMorix Press editorial desk.
            </p>
          </header>

          {/* Featured Main Article */}
          {articles.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-slate-300 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded">
                        {articles[0].category}
                      </span>
                      <span>{articles[0].readingTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                      <Link href={`/blog/${articles[0].slug}`} className="hover:text-sky-700 transition-colors">
                        {articles[0].title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {articles[0].excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      <span>{articles[0].author}</span>
                    </div>
                    <Link
                      href={`/blog/${articles[0].slug}`}
                      className="font-bold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <span>Read full article</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-100 relative min-h-[240px] lg:min-h-full">
                  <Image
                    src={articles[0].heroImage}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {articles.slice(1).map((article) => (
              <article
                key={article.slug}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-100 border-b border-slate-200">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-700">{article.category}</span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span>{article.publishedAt}</span>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="font-semibold text-sky-700 hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
