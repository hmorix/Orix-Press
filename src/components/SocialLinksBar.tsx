import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Github, Linkedin, Twitter, CheckCircle } from "lucide-react";

export function SocialLinksBar({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <div className="space-y-3">
      {showHeading && (
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-emerald-600" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
            Verified External Profiles
          </h3>
        </div>
      )}
      <div className="flex flex-wrap gap-2.5">
        {siteConfig.person.socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors"
          >
            <span>{social.platform}</span>
            <span className="text-[11px] text-slate-400 font-mono">@{social.username}</span>
            <ArrowUpRight className="h-3 w-3 text-slate-400" />
          </a>
        ))}
      </div>
    </div>
  );
}
