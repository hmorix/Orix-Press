import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema, BreadcrumbItem } from "@/components/schemas/BreadcrumbSchema";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
              title="Home"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" aria-hidden="true" />
                {isLast ? (
                  <span className="font-medium text-slate-900 line-clamp-1" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-500 hover:text-slate-900 transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
