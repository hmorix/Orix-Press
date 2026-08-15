import { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { articles } from "@/data/articles";
import { researchPapers } from "@/data/research";
import { whitePapers } from "@/data/whitePapers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  // Static core routes
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/harsh-sharma", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/harsh-sharma/biography", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/developer", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/harsh-sharma/skills", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/research", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/publications", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/media", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/harsh-sharma/photos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/harsh-sharma/faq", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/research", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/white-papers", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/press", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/hi/harsh-sharma", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Dynamic Photo pages
  const photoEntries = siteConfig.photos.map((photo) => ({
    url: `${base}/harsh-sharma/photos/${photo.slug}`,
    lastModified: new Date(photo.dateTaken),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Article pages
  const articleEntries = articles.map((article) => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Research Paper pages
  const researchEntries = researchPapers.map((paper) => ({
    url: `${base}/research/${paper.slug}`,
    lastModified: new Date(paper.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic White Paper pages
  const whitePaperEntries = whitePapers.map((wp) => ({
    url: `${base}/white-papers/${wp.slug}`,
    lastModified: new Date(wp.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...photoEntries,
    ...articleEntries,
    ...researchEntries,
    ...whitePaperEntries,
  ];
}
