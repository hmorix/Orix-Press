import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AiReadableSection() {
  return (
    <section
      className="my-10 rounded-xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8"
      aria-labelledby="ai-facts-heading"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <Sparkles className="h-5 w-5 text-indigo-600" />
        <h2 id="ai-facts-heading" className="text-base sm:text-lg font-bold text-slate-900">
          Verified Entity Summary &amp; AI-Readable Facts
        </h2>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
        The following structured statements represent verified factual data regarding {siteConfig.person.name} for human readers, knowledge engines, and AI retrieval agents:
      </p>

      <ul className="space-y-3">
        {siteConfig.person.aiReadableFacts.map((fact, index) => (
          <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
