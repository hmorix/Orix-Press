import React from "react";
import { siteConfig, PhotoItem } from "@/data/siteConfig";

export function ImageSchema({ photo }: { photo: PhotoItem }) {
  const imageUrl = `${siteConfig.url}${photo.src}`;
  const pageUrl = `${siteConfig.url}/harsh-sharma/photos/${photo.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${imageUrl}#image`,
    contentUrl: imageUrl,
    url: pageUrl,
    name: photo.title,
    caption: photo.caption,
    description: photo.contextDescription,
    width: `${photo.width} px`,
    height: `${photo.height} px`,
    datePublished: photo.dateTaken,
    author: {
      "@type": "Person",
      name: siteConfig.person.name,
      url: `${siteConfig.url}/harsh-sharma`,
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
