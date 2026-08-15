export interface PressRelease {
  slug: string;
  title: string;
  summary: string;
  publishedDate: string;
  location: string;
  source: string;
  content: string[];
  contactEmail: string;
}

export const pressReleases: PressRelease[] = [
  {
    slug: "hmorix-press-announces-entity-portal-launch",
    title: "HMorix Press Announces the Official Launch of Canonical Digital Publishing and Entity Portal",
    summary: "HMorix Press establishes its official canonical web portal to publish verified software engineering documentation, research papers, and technical entity archives for Harsh Sharma.",
    publishedDate: "2025-01-20",
    location: "Online / Digital Press Release",
    source: "HMorix Press Editorial Office",
    content: [
      "HMorix Press has officially launched its high-performance digital publishing portal, designed to serve as the single source of truth for technical research, software projects, and official documentation authored by Harsh Sharma.",
      "The portal leverages Next.js App Router and semantic structured data (Schema.org) to provide transparent, accessible, and easily indexable technical publications for global developers, search engines, and academic researchers.",
      "Key initiatives for the upcoming year include publishing open white papers on full-stack architecture, empirical evaluations of AI-assisted engineering workflows, and developer productivity tooling.",
    ],
    contactEmail: "press@hmorixpress.com",
  },
  {
    slug: "research-paper-release-ai-assisted-development",
    title: "HMorix Press Releases Research Paper on AI-Assisted Engineering Guardrails",
    summary: "New empirical study examines the role of strict type systems and runtime schema validation in reducing hallucination rates during AI-assisted code synthesis.",
    publishedDate: "2025-03-28",
    location: "Online / Technical Publication",
    source: "HMorix Press Engineering Research",
    content: [
      "HMorix Press has published a comprehensive technical research paper titled 'Empirical Evaluation of AI-Assisted Workflows in Web Application Development', authored by software developer Harsh Sharma.",
      "The paper provides experimental evidence demonstrating that pairing large language models with rigorous TypeScript compiler constraints reduces code synthesis errors by over 80%.",
      "The full research paper is available for reading in HTML format with downloadable PDF versions accessible directly from the research section.",
    ],
    contactEmail: "research@hmorixpress.com",
  },
];
