import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Article } from "@/data/articles";

export function ArticleSchema({ article }: { article: Article }) {
  const articleUrl = `${siteConfig.url}/blog/${article.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.excerpt,
    url: articleUrl,
    image: `${siteConfig.url}${article.heroImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.person.name,
      url: `${siteConfig.url}/harsh-sharma`,
      jobTitle: siteConfig.person.jobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.publisher.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/hmorix-press-logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    keywords: article.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
