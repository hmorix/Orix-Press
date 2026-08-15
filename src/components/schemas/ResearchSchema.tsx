import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ResearchPaper } from "@/data/research";

export function ResearchSchema({ paper }: { paper: ResearchPaper }) {
  const paperUrl = `${siteConfig.url}/research/${paper.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${paperUrl}#scholarly-article`,
    headline: paper.title,
    description: paper.abstract,
    url: paperUrl,
    datePublished: paper.publishedDate,
    dateModified: paper.updatedDate,
    version: paper.version,
    keywords: paper.keywords.join(", "),
    sameAs: paper.doi ? `https://doi.org/${paper.doi}` : undefined,
    author: {
      "@type": "Person",
      name: paper.author,
      url: `${siteConfig.url}/harsh-sharma`,
      affiliation: {
        "@type": "Organization",
        name: paper.authorAffiliation,
        url: siteConfig.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.publisher.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
