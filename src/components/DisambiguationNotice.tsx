import React from "react";
import { Info } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function DisambiguationNotice({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-sky-200 bg-sky-50/70 p-4 sm:p-5 text-sky-950 ${className}`}
      role="region"
      aria-label="Name Disambiguation Notice"
    >
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-sky-700 mt-0.5 shrink-0" aria-hidden="true" />
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-sky-900">
            Entity Identification &amp; Disambiguation Notice
          </h3>
          <p className="text-xs text-sky-800 leading-relaxed">
            &quot;{siteConfig.person.name}&quot; is a widely shared name worldwide. This official canonical web portal represents the specific <strong>{siteConfig.person.jobTitle}</strong> published through HMorix Press, whose authentic projects, technical research papers, and verified accounts are cataloged on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
