import React from "react";
import { siteConfig } from "@/data/siteConfig";

interface PersonSchemaProps {
  url?: string;
  isProfilePage?: boolean;
}

export function PersonSchema({ url, isProfilePage = false }: PersonSchemaProps) {
  const canonicalUrl = url || `${siteConfig.url}/harsh-sharma`;
  const personId = `${siteConfig.url}/harsh-sharma#person`;

  const personData = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.person.name,
    alternateName: siteConfig.person.nameVariations,
    jobTitle: siteConfig.person.jobTitle,
    description: siteConfig.person.description,
    url: canonicalUrl,
    image: `${siteConfig.url}${siteConfig.person.primaryImage}`,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.publisher.name,
      url: siteConfig.publisher.url,
    },
    sameAs: siteConfig.person.socialLinks.map((s) => s.url),
    knowsAbout: [
      "Software Development",
      "Web Engineering",
      "Next.js",
      "TypeScript",
      "React",
      "Artificial Intelligence",
      "Optical Character Recognition (OCR)",
      "Structured Data & SEO",
      "Systems Architecture",
    ],
  };

  const schemaData = isProfilePage
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: `${siteConfig.person.name} — Profile & Technical Entity`,
            description: siteConfig.person.description,
            dateModified: siteConfig.person.lastUpdated,
            mainEntity: { "@id": personId },
            publisher: {
              "@type": "Organization",
              name: siteConfig.publisher.name,
              url: siteConfig.publisher.url,
            },
          },
          personData,
        ],
      }
    : {
        "@context": "https://schema.org",
        ...personData,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
