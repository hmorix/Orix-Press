import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/schemas/OrganizationSchema";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.person.name} | ${siteConfig.person.jobTitle} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Harsh Sharma",
    "Harsh Sharma developer",
    "Harsh Sharma coding",
    "Harsh Sharma tech",
    "Harsh Sharma biography",
    "Harsh Sharma information",
    "Harsh Sharma software developer",
    "Harsh Sharma web developer",
    "Harsh Sharma AI",
    "Harsh Sharma technology",
    "HMorix Press",
  ],
  authors: [{ name: siteConfig.person.name, url: `${siteConfig.url}/harsh-sharma` }],
  creator: siteConfig.person.name,
  publisher: siteConfig.publisher.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: `${siteConfig.url}/harsh-sharma`,
      "hi-IN": `${siteConfig.url}/hi/harsh-sharma`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.person.name} — ${siteConfig.person.jobTitle}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.person.name} - ${siteConfig.person.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.person.name} — ${siteConfig.person.jobTitle}`,
    description: siteConfig.description,
    images: ["/images/og-image.svg"],
    creator: "@harshsharma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
