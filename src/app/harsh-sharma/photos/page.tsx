import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Camera, ArrowRight, Info, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: `Harsh Sharma — Verified Photo Archive & Image Gallery`,
  description: `Official photo gallery and high-resolution image archive of Harsh Sharma (Software Developer & Technology Professional). Verified images with full metadata and EXIF context.`,
  alternates: {
    canonical: `${siteConfig.url}/harsh-sharma/photos`,
  },
};

export default function PhotosGalleryPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: siteConfig.person.name, url: "/harsh-sharma" },
            { name: "Photos", url: "/harsh-sharma/photos" },
          ]}
        />

        <div className="space-y-10">
          <header className="border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-800 mb-3">
              <Camera className="h-3.5 w-3.5 text-rose-600" />
              <span>Verified Image Gallery &amp; Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Photographs &amp; Visual Documentation
            </h1>
            <p className="mt-2 text-base text-slate-600 font-medium max-w-3xl">
              Official photographs and technical visual documentation for {siteConfig.person.name}. Each photograph includes descriptive metadata, dimensions, and dedicated landing pages for search engine discovery.
            </p>
          </header>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.photos.map((photo) => (
              <div
                key={photo.id}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                    <Image
                      src={photo.src}
                      alt={photo.altText}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 rounded bg-slate-900/80 px-2 py-0.5 text-[10px] font-mono text-white backdrop-blur">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h2 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      <Link href={`/harsh-sharma/photos/${photo.slug}`}>
                        {photo.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      {photo.width} × {photo.height}
                    </span>
                    <Link
                      href={`/harsh-sharma/photos/${photo.slug}`}
                      className="font-semibold text-sky-700 hover:underline flex items-center gap-1"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs font-semibold text-sky-700">
            <Link href="/harsh-sharma/media" className="hover:underline flex items-center gap-1">
              ← View Media &amp; Press
            </Link>
            <Link href="/harsh-sharma/faq" className="hover:underline flex items-center gap-1">
              View Frequently Asked Questions →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
