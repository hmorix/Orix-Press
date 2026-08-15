import React from "react";
import { siteConfig } from "@/data/siteConfig";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.publisher.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/hmorix-press-logo.svg`,
        description: siteConfig.description,
        founder: {
          "@type": "Person",
          name: siteConfig.person.name,
          url: `${siteConfig.url}/harsh-sharma`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}#organization`,
        },
        inLanguage: ["en", "hi-IN"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
