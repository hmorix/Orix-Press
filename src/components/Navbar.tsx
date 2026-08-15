"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, FileText, BookOpen, Code2, User, HelpCircle, Layers } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Harsh Sharma", href: "/harsh-sharma", icon: User },
    { name: "Biography", href: "/harsh-sharma/biography" },
    { name: "Developer", href: "/harsh-sharma/developer", icon: Code2 },
    { name: "Projects", href: "/harsh-sharma/projects", icon: Layers },
    { name: "Research", href: "/research", icon: BookOpen },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Blog", href: "/blog" },
    { name: "Photos", href: "/harsh-sharma/photos" },
    { name: "FAQ", href: "/harsh-sharma/faq", icon: HelpCircle },
  ];

  const isHindi = pathname.startsWith("/hi");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand & Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="HMorix Press Homepage">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-lg shadow-sm group-hover:bg-slate-800 transition-colors">
            H
          </div>
          <div>
            <span className="block font-bold text-slate-900 leading-tight tracking-tight text-base sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Entity &amp; Publishing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navLinks.slice(0, 7).map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* More Dropdown or Direct Link for FAQ / Press */}
          <Link
            href="/harsh-sharma/faq"
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              pathname.includes("/faq")
                ? "bg-slate-100 text-slate-900 font-semibold"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            FAQ
          </Link>
        </nav>

        {/* Action Controls: Language Switcher & Verified Entity Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={isHindi ? "/harsh-sharma" : "/hi/harsh-sharma"}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            title={isHindi ? "Switch to English" : "हिंदी में पढ़ें (Read in Hindi)"}
            aria-label={isHindi ? "English Version" : "Hindi Version"}
          >
            <Globe className="h-3.5 w-3.5 text-sky-600" />
            <span>{isHindi ? "English" : "हिंदी"}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={isHindi ? "/harsh-sharma" : "/hi/harsh-sharma"}
            className="p-2 text-xs font-medium text-slate-700 border border-slate-200 rounded-md"
            aria-label="Language switch"
          >
            {isHindi ? "EN" : "HI"}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1">
          <div className="py-2 border-b border-slate-100 mb-2">
            <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
              Navigation
            </span>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 mt-2 space-y-2">
            <Link
              href="/press"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              Press Releases
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
