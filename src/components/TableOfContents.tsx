import React from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-5 mb-8">
      <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm">
        <List className="h-4 w-4 text-slate-700" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2 text-xs sm:text-sm">
        {items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-slate-600 hover:text-slate-900 hover:underline flex items-center gap-2"
            >
              <span className="font-mono text-[11px] text-slate-400">0{idx + 1}.</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
