import { NextResponse } from "next";
import { siteConfig } from "@/data/siteConfig";

export async function GET() {
  const base = siteConfig.url;

  const xmlUrls = siteConfig.photos
    .map((photo) => {
      const pageLoc = `${base}/harsh-sharma/photos/${photo.slug}`;
      const imageLoc = `${base}${photo.src}`;
      const escapeXml = (unsafe: string) =>
        unsafe.replace(/[<>&'"]/g, (c) => {
          switch (c) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "&":
              return "&amp;";
            case "'":
              return "&apos;";
            case '"':
              return "&quot;";
            default:
              return c;
          }
        });

      return `  <url>
    <loc>${pageLoc}</loc>
    <image:image>
      <image:loc>${imageLoc}</image:loc>
      <image:title>${escapeXml(photo.title)}</image:title>
      <image:caption>${escapeXml(photo.caption)}</image:caption>
    </image:image>
  </url>`;
    })
    .join("\n");

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${xmlUrls}
</urlset>`;

  return new NextResponse(xmlContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
