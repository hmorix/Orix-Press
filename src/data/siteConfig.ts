export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  verified: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Web Engineering" | "AI & ML Tooling" | "Developer Tools" | "Open Source" | "Architecture";
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: "Active" | "Maintained" | "Research Preview";
  highlights: string[];
  year: string;
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: "Technical Article" | "Research Paper" | "White Paper" | "Case Study";
  publishedDate: string;
  modifiedDate: string;
  author: string;
  summary: string;
  doi?: string;
  readTime: string;
  downloadUrl?: string;
  topics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Engineering" | "Identity & Clarification" | "Contact & Profiles";
}

export interface PhotoItem {
  id: string;
  slug: string;
  title: string;
  caption: string;
  altText: string;
  src: string;
  width: number;
  height: number;
  category: "Professional" | "Development" | "Technology" | "Workspace";
  dateTaken: string;
  location?: string;
  cameraInfo?: string;
  contextDescription: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; focus: string }[];
}

export const siteConfig = {
  name: "HMorix Press",
  tagline: "Authoritative Digital Publishing & Engineering Archive",
  description: "Official entity publication, technical research, white papers, and engineering archives for Harsh Sharma and HMorix Press.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://hmorixpress.vercel.app",
  publisher: {
    name: "HMorix Press",
    type: "Organization",
    url: "https://hmorixpress.vercel.app",
    logo: "https://hmorixpress.vercel.app/images/hmorix-press-logo.svg",
    foundingYear: "2024",
  },
  person: {
    name: "Harsh Sharma",
    nameVariations: ["Harsh Sharma", "Sharma Harsh"],
    jobTitle: "Software Developer & Technology Professional",
    professionalIdentity: "Software Developer / Technology Professional",
    alternateName: "Harsh Sharma (Developer)",
    description: "Harsh Sharma is a software developer and technology professional focusing on modern web engineering, full-stack architecture, AI-assisted development, and developer tooling.",
    bioShort: "Software developer and technology professional specializing in modern full-stack systems, scalable web architecture, and developer-focused tooling.",
    bioLong: [
      "Harsh Sharma is a software developer and technology professional with an active focus on modern web engineering, performant software systems, and AI-assisted workflows. Through HMorix Press, his work encompasses practical software development, architectural explorations, and technical publishing.",
      "His technical approach centers on writing clean, accessible, and high-performance code, building structured digital architectures, and investigating the intersection of generative AI, developer tooling, and modern distributed web platforms.",
      "As an engineer, Harsh values factual accuracy, robust systems engineering, and open knowledge sharing. His work is published and indexed across official HMorix Press registries, GitHub repositories, and verified technical networks."
    ],
    verifiedLocation: "India", // Only verified geographic context, no keyword stuffing
    email: "contact@hmorixpress.com",
    lastUpdated: "2026-08-14",
    primaryImage: "/images/harsh-sharma-profile.svg",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com",
        username: "harsh-sharma",
        verified: true,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in",
        username: "harsh-sharma",
        verified: true,
      },
      {
        platform: "Twitter / X",
        url: "https://x.com",
        username: "harshsharma",
        verified: true,
      },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        username: "harshsharma",
        verified: true,
      },
      {
        platform: "Threads",
        url: "https://threads.net",
        username: "harshsharma",
        verified: true,
      },
    ] as SocialLink[],
    aiReadableFacts: [
      "Harsh Sharma is a software developer and technology professional.",
      "Harsh Sharma's technical work is officially published under HMorix Press.",
      "Primary engineering domains include full-stack web development, Next.js/React, TypeScript, AI tooling, and systems architecture.",
      "This site represents the canonical entity profile for Harsh Sharma in the software engineering domain.",
      "Name disambiguation: This profile specifically identifies the software developer Harsh Sharma associated with HMorix Press and the linked verified repositories.",
    ],
  },
  skills: [
    {
      category: "Frontend & Web Architecture",
      description: "Modern component architectures, type-safe reactive interfaces, and Core Web Vitals optimization.",
      skills: [
        { name: "TypeScript / JavaScript (ESNext)", level: "Advanced", focus: "Strict typing, modular architectures, runtime validation" },
        { name: "React & Next.js (App Router)", level: "Advanced", focus: "Server Components (RSC), SSR, SSG, streaming rendering" },
        { name: "Tailwind CSS & Semantic HTML", level: "Advanced", focus: "Accessible layouts, design systems, responsive UX" },
        { name: "Web Performance & SEO", level: "Expert", focus: "JSON-LD structured data, AEO, Core Web Vitals, metadata engineering" },
      ],
    },
    {
      category: "Backend & Systems",
      description: "Scalable APIs, serverless infrastructure, and data pipeline modeling.",
      skills: [
        { name: "Node.js & Edge Runtimes", level: "Advanced", focus: "High-throughput asynchronous services, edge functions" },
        { name: "RESTful & GraphQL APIs", level: "Proficient", focus: "API design, contract testing, OpenAPI specifications" },
        { name: "Database Design & Modeling", level: "Proficient", focus: "Relational (PostgreSQL) & document schemas, migrations" },
      ],
    },
    {
      category: "AI, OCR & Tooling",
      description: "Practical generative AI integration, OCR pipelines, and developer productivity tools.",
      skills: [
        { name: "AI Agent Engineering & LLM APIs", level: "Proficient", focus: "Structured outputs, retrieval workflows, prompt engineering" },
        { name: "OCR & Document Processing", level: "Proficient", focus: "Text extraction, layout analysis, automated parsing pipelines" },
        { name: "Developer CLI & Automation", level: "Advanced", focus: "Workflow automation, build scripts, developer experience" },
      ],
    },
    {
      category: "DevOps, Cloud & Quality",
      description: "Continuous integration, edge deployment, and resilient testing.",
      skills: [
        { name: "Vercel & Edge Deployment", level: "Advanced", focus: "Zero-config CI/CD, preview environments, caching strategies" },
        { name: "Git & Open-Source Collaboration", level: "Advanced", focus: "Branching strategies, semantic versioning, code reviews" },
        { name: "Accessibility (WCAG 2.1)", level: "Proficient", focus: "ARIA landmarks, keyboard navigation, color contrast" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "proj-1",
      slug: "hmorix-press-engine",
      title: "HMorix Press Publishing Architecture",
      tagline: "High-performance canonical digital publishing and entity management system",
      description: "A Next.js and TypeScript digital publishing platform built from the ground up for search engine entity discovery, structured JSON-LD knowledge graph indexing, and sub-second page performance.",
      category: "Web Engineering",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JSON-LD Schema", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://hmorixpress.vercel.app",
      featured: true,
      status: "Active",
      year: "2024 - 2026",
      highlights: [
        "100/100 Core Web Vitals score across mobile and desktop audits",
        "Full entity knowledge graph integration (Person, ProfilePage, ScholarlyArticle)",
        "Zero-latency static edge generation with zero database overhead",
      ],
    },
    {
      id: "proj-2",
      slug: "docuparse-ocr-pipeline",
      title: "DocuParse OCR Engine",
      tagline: "High-accuracy automated document processing and structured data extraction pipeline",
      description: "An automated pipeline architecture for ingesting unstructured scanned documents, performing optical character recognition, bounding box detection, and outputting standardized JSON schemas.",
      category: "AI & ML Tooling",
      technologies: ["TypeScript", "Node.js", "Computer Vision", "OCR Pipeline", "REST API"],
      githubUrl: "https://github.com",
      featured: true,
      status: "Maintained",
      year: "2025",
      highlights: [
        "Multi-column layout detection and table structure extraction",
        "Confidence scoring and automated bounding-box sanitization",
        "Streamlined developer API for batch processing",
      ],
    },
    {
      id: "proj-3",
      slug: "entity-graph-schema-toolkit",
      title: "SchemaGraph Developer Toolkit",
      tagline: "Lightweight TypeScript utility library for generating verified Schema.org JSON-LD trees",
      description: "A developer toolkit designed to generate strict, type-checked JSON-LD graph objects for Next.js applications, covering Person, Organization, Article, and FAQ entities.",
      category: "Developer Tools",
      technologies: ["TypeScript", "Schema.org", "Next.js", "npm Package"],
      githubUrl: "https://github.com",
      featured: true,
      status: "Active",
      year: "2025",
      highlights: [
        "Zero runtime dependencies with compile-time type validation",
        "Automated cross-linking for Person sameAs and Publisher graphs",
        "Built-in Google Rich Results validator helpers",
      ],
    },
    {
      id: "proj-4",
      slug: "modern-fullstack-starter",
      title: "Enterprise Full-Stack Architecture Blueprint",
      tagline: "Production-ready modular architecture blueprint for scalable web applications",
      description: "A reference implementation illustrating best practices in full-stack web engineering, separation of concerns, data contract validation, and edge caching strategies.",
      category: "Architecture",
      technologies: ["React", "Next.js", "PostgreSQL Ready", "Tailwind CSS", "Zod"],
      githubUrl: "https://github.com",
      featured: false,
      status: "Maintained",
      year: "2024",
      highlights: [
        "Modular data layer ready for plug-and-play database migrations",
        "Strict input validation and sanitization using TypeScript schemas",
        "Clean architecture separating presentation from business logic",
      ],
    },
  ] as Project[],
  faqs: [
    {
      category: "General",
      question: "Who is Harsh Sharma?",
      answer: "Harsh Sharma is a software developer and technology professional whose work focuses on modern full-stack web engineering, AI-assisted development tools, performance optimization, and digital architecture publishing under HMorix Press.",
    },
    {
      category: "General",
      question: "What does Harsh Sharma do?",
      answer: "Harsh Sharma designs and builds software applications, technical tooling, and digital publishing systems. His work spans front-end performance, backend API architectures, OCR processing pipelines, and structured search engine entity engineering.",
    },
    {
      category: "Engineering",
      question: "Is Harsh Sharma a software developer?",
      answer: "Yes. Harsh Sharma is a software developer actively working with TypeScript, React, Next.js, Node.js, and modern cloud deployment platforms like Vercel.",
    },
    {
      category: "Engineering",
      question: "What technologies does Harsh Sharma work with?",
      answer: "Harsh Sharma primarily works with TypeScript, Next.js, React, Node.js, Tailwind CSS, Schema.org structured data, RESTful APIs, and modern AI/LLM integration toolchains.",
    },
    {
      category: "Identity & Clarification",
      question: "Are all people named Harsh Sharma the same person?",
      answer: "No. 'Harsh Sharma' is a common name shared by various individuals worldwide. This website specifically represents Harsh Sharma the software developer and technology professional published through HMorix Press and verified on linked professional profiles.",
    },
    {
      category: "Identity & Clarification",
      question: "How can I verify Harsh Sharma's official profiles?",
      answer: "Verified profiles and repositories for Harsh Sharma are linked directly on this canonical site, including official GitHub, LinkedIn, Twitter/X, and HMorix Press registries.",
    },
    {
      category: "Contact & Profiles",
      question: "Where can I find Harsh Sharma online?",
      answer: "You can find Harsh Sharma's official work on this canonical website (hmorixpress.vercel.app), GitHub, and his verified social channels linked in the profile section.",
    },
    {
      category: "Contact & Profiles",
      question: "How can I contact Harsh Sharma or HMorix Press?",
      answer: "You can reach out for technical collaboration, press inquiries, or professional discussions through the contact section or via email at contact@hmorixpress.com.",
    },
  ] as FAQItem[],
  photos: [
    {
      id: "photo-1",
      slug: "harsh-sharma-profile",
      title: "Harsh Sharma — Professional Profile",
      caption: "Harsh Sharma, software developer and technology professional.",
      altText: "Harsh Sharma, software developer and technology professional at HMorix Press",
      src: "/images/harsh-sharma-profile.svg",
      width: 1200,
      height: 1200,
      category: "Professional",
      dateTaken: "2025-01-10",
      location: "India",
      contextDescription: "Official canonical profile photograph of Harsh Sharma used across HMorix Press publications, entity knowledge graphs, and technical platforms.",
    },
    {
      id: "photo-2",
      slug: "harsh-sharma-developer",
      title: "Harsh Sharma — Software Developer & Workspace",
      caption: "Harsh Sharma working on software engineering architectures and modern web applications.",
      altText: "Harsh Sharma, software developer writing code in a modern development environment",
      src: "/images/harsh-sharma-developer.svg",
      width: 1600,
      height: 1066,
      category: "Development",
      dateTaken: "2025-02-14",
      location: "India",
      contextDescription: "Editorial photograph depicting Harsh Sharma working on full-stack web architectures, code compilation, and developer tooling.",
    },
    {
      id: "photo-3",
      slug: "harsh-sharma-coding",
      title: "Harsh Sharma — Code Architecture & Engineering",
      caption: "Harsh Sharma reviewing TypeScript architecture and Next.js performance benchmarks.",
      altText: "Harsh Sharma reviewing code syntax and application performance metrics",
      src: "/images/harsh-sharma-coding.svg",
      width: 1600,
      height: 1066,
      category: "Technology",
      dateTaken: "2025-03-20",
      location: "India",
      contextDescription: "Visual record highlighting modern TypeScript development, debugging workflows, and structured schema implementations.",
    },
    {
      id: "photo-4",
      slug: "harsh-sharma-technology",
      title: "Harsh Sharma — Technology & Research Focus",
      caption: "Harsh Sharma analyzing system workflows, AI integrations, and document processing pipelines.",
      altText: "Harsh Sharma examining technical white paper documentation and system flowcharts",
      src: "/images/harsh-sharma-technology.svg",
      width: 1600,
      height: 1066,
      category: "Workspace",
      dateTaken: "2025-04-18",
      location: "India",
      contextDescription: "Workspace perspective focusing on technical research, OCR data pipelines, and white paper drafting.",
    },
    {
      id: "photo-5",
      slug: "harsh-sharma-architecture",
      title: "Harsh Sharma — System Design & Full-Stack Blueprint",
      caption: "System architectural flow and entity relationship design for digital publishing.",
      altText: "System architectural schematic and entity graph blueprint developed by Harsh Sharma",
      src: "/images/harsh-sharma-architecture.svg",
      width: 1600,
      height: 1066,
      category: "Technology",
      dateTaken: "2025-05-12",
      location: "India",
      contextDescription: "Architectural blueprint detailing modular decoupled components and database-ready abstraction layers.",
    },
    {
      id: "photo-6",
      slug: "harsh-sharma-ai-systems",
      title: "Harsh Sharma — AI-Assisted Tooling & Retrieval Research",
      caption: "Research session on LLM-assisted code generation and retrieval-augmented workflows.",
      altText: "Research visual for AI-assisted engineering and retrieval systems",
      src: "/images/harsh-sharma-ai-systems.svg",
      width: 1600,
      height: 1066,
      category: "Workspace",
      dateTaken: "2025-06-08",
      location: "India",
      contextDescription: "Visual context regarding practical AI engineering research conducted for HMorix Press technical publications.",
    },
  ] as PhotoItem[],
};
