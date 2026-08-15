import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, PhotoItem } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImageSchema } from "@/components/schemas/ImageSchema";
import { Camera, Calendar, MapPin, Download, ArrowLeft, ShieldCheck, CheckCircle } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return siteConfig.photos.map((photo) => ({
    slug: photo.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const photo = siteConfig.photos.find((p) => p.slug === params.slug);
  if (!photo) return { title: "Photo Not Found" };

  return {
    title: `${photo.title} | Harsh Sharma Photo Archive`,
    description: photo.contextDescription,
    alternates: {
      canonical: `${siteConfig.url}/harsh-sharma/photos/${photo.slug}`,
    },
    openGraph: {
      title: photo.title,
      description: photo.caption,
      images: [
        {
          url: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.altText,
        },
      ],
    },
  };
}

export default function PhotoDetailPage({ params }: Props) {
  const photo = siteConfig.photos.find((p) => p.slug === params.slug);

  if (!photo) {
    notFound();
  }

  return (
    <>
      <ImageSchema photo={photo} />

      <main className="min-h-screen py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: siteConfig.person.name, url: "/harsh-sharma" },
              { name: "Photos", url: "/harsh-sharma/photos" },
              { name: photo.title, url: `/harsh-sharma/photos/${photo.slug}` },
            ]}
          />

          <div className="space-y-8">
            <header className="border-b border-slate-200 pb-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  {photo.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {photo.width} × {photo.height} px
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                {photo.title}
              </h1>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                {photo.caption}
              </p>
            </header>

            {/* High-Resolution Viewport Container */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-8 overflow-hidden shadow-sm">
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-white border border-slate-200 shadow-md">
                <Image
                  src={photo.src}
                  alt={photo.altText}
                  width={photo.width}
                  height={photo.height}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Caption & Accessibility Meta */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500 italic">
                  Caption: &ldquo;{photo.caption}&rdquo;
                </p>
              </div>
            </div>

            {/* Technical Metadata & Context */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-lg font-bold text-slate-900">Context &amp; Editorial Description</h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {photo.contextDescription}
                </p>
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3.5 text-xs text-emerald-900 flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>
                    This image is an authenticated asset of HMorix Press representing Harsh Sharma. Verified for indexing and attribution.
                  </span>
                </div>
              </div>

              {/* Sidebar: File Specs */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3 text-xs">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  File Specifications
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Dimensions:</span>
                    <span className="font-mono text-slate-900">{photo.width} × {photo.height} px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date Indexed:</span>
                    <span className="text-slate-900">{photo.dateTaken}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-slate-900">{photo.location || "India"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subject:</span>
                    <span className="text-slate-900 font-semibold">{siteConfig.person.name}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href={photo.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Open High-Res Asset</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Back Navigation */}
            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/harsh-sharma/photos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:underline"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Photo Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
