import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles, Article } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleSchema } from "@/components/schemas/ArticleSchema";
import { TableOfContents } from "@/components/TableOfContents";
import { SocialLinksBar } from "@/components/SocialLinksBar";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ShieldCheck, Tag } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | ${siteConfig.name}`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `${siteConfig.url}/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Generate Table of Contents items
  const tocItems = article.content
    .filter((c) => c.heading)
    .map((c, i) => ({
      id: `section-${i}`,
      title: c.heading!,
    }));

  const relatedArticles = articles.filter((a) =>
    article.relatedSlugs?.includes(a.slug)
  );

  return (
    <>
      <ArticleSchema article={article} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              { name: article.title, url: `/blog/${article.slug}` },
            ]}
          />

          <article className="space-y-8">
            {/* Header */}
            <header className="space-y-4 border-b border-slate-200 pb-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky-50 border border-sky-200 px-3 py-0.5 text-xs font-semibold text-sky-800">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">·</span>
                <span className="text-xs text-slate-500 font-medium">{article.readingTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-snug">
                {article.subtitle}
              </p>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  <span>By {article.author}</span>
                  <span className="text-slate-400 font-normal">({article.authorRole})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  <span>Published: {article.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Updated: {article.updatedAt}</span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* Main Content Body */}
            <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-800 leading-relaxed">
              {article.content.map((section, idx) => (
                <section key={idx} id={`section-${idx}`} className="space-y-3 pt-2">
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  <p className="whitespace-pre-line leading-relaxed text-slate-700">
                    {section.text}
                  </p>

                  {section.subsections && (
                    <div className="space-y-4 pt-2">
                      {section.subsections.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5"
                        >
                          <h3 className="text-base font-bold text-slate-900 mb-1">
                            {sub.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <Tag className="h-3.5 w-3.5 text-slate-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Profile Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-slate-300 bg-white">
                <Image
                  src={siteConfig.person.primaryImage}
                  alt={siteConfig.person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h3 className="text-base font-bold text-slate-900">{siteConfig.person.name}</h3>
                  <span className="text-xs text-slate-500 font-medium">({siteConfig.person.jobTitle})</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {siteConfig.person.bioShort}
                </p>
                <div className="pt-1">
                  <Link
                    href="/harsh-sharma"
                    className="text-xs font-semibold text-sky-700 hover:underline"
                  >
                    View canonical entity profile →
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedArticles.map((rel) => (
                    <div
                      key={rel.slug}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-slate-300 transition-colors"
                    >
                      <span className="text-[11px] font-semibold text-slate-400 uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        <Link href={`/blog/${rel.slug}`} className="hover:text-sky-700">
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{rel.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation back */}
            <div className="pt-6 border-t border-slate-200 flex justify-between text-xs font-semibold text-sky-700">
              <Link href="/blog" className="hover:underline flex items-center gap-1">
                ← Return to Blog Archive
              </Link>
              <Link href="/research" className="hover:underline flex items-center gap-1">
                Explore Research Papers →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
