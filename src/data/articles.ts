export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  category: "Identity & Profile" | "Web Engineering" | "AI & Tooling" | "Architecture";
  tags: string[];
  heroImage: string;
  content: {
    heading?: string;
    text: string;
    subsections?: { title: string; body: string }[];
  }[];
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: "who-is-harsh-sharma",
    title: "Who Is Harsh Sharma? Software Developer Profile & Entity Overview",
    subtitle: "A verified summary of Harsh Sharma's professional focus, engineering background, and work published under HMorix Press.",
    excerpt: "Harsh Sharma is a software developer and technology professional focusing on modern web engineering, full-stack architecture, and developer tooling.",
    author: "HMorix Press Editorial",
    authorRole: "Technical Publisher",
    publishedAt: "2025-01-15",
    updatedAt: "2026-08-14",
    readingTime: "5 min read",
    category: "Identity & Profile",
    tags: ["Harsh Sharma", "Developer Profile", "HMorix Press", "Software Engineering"],
    heroImage: "/images/harsh-sharma-profile.svg",
    relatedSlugs: ["harsh-sharma-software-developer-profile", "modern-web-development-architecture"],
    content: [
      {
        heading: "Direct Entity Summary",
        text: "Harsh Sharma is an active software developer and technology professional. His primary work centers on modern web development (TypeScript, React, Next.js), backend systems architecture, developer automation tools, and practical artificial intelligence workflows. All official publications and technical projects are documented through HMorix Press.",
      },
      {
        heading: "Professional Identity & Focus Areas",
        text: "In the evolving landscape of software engineering, Harsh Sharma concentrates on building reliable, accessible, and high-performance digital systems. Rather than treating web applications as mere cosmetic layers, his work emphasizes structured data, strict type safety, predictable state management, and optimized Core Web Vitals.",
        subsections: [
          {
            title: "Core Web Engineering",
            body: "Designing scalable front-end and full-stack applications with Next.js, TypeScript, and modern component systems.",
          },
          {
            title: "Developer Productivity & Tooling",
            body: "Creating CLI utilities, automated extraction scripts, and structured schema generators to streamline engineering workflows.",
          },
          {
            title: "Entity & Technical Publishing",
            body: "Publishing verified technical white papers, research summaries, and engineering blueprints via HMorix Press.",
          },
        ],
      },
      {
        heading: "Ambiguous Name Disambiguation",
        text: "Because 'Harsh Sharma' is a widely shared name, this canonical portal exists to establish clear entity attribution. This site specifically concerns Harsh Sharma, the software developer associated with HMorix Press and the verified GitHub, LinkedIn, and social repositories linked across these pages.",
      },
      {
        heading: "Where to Learn More",
        text: "To explore Harsh Sharma's verified projects, technical skills, white papers, and research documents, navigate through the canonical sections of this portal or review the official source code repositories on GitHub.",
      },
    ],
  },
  {
    slug: "harsh-sharma-software-developer-profile",
    title: "Harsh Sharma — Software Developer & Technology Professional Profile",
    subtitle: "An in-depth look at Harsh Sharma's technical toolchain, engineering philosophy, and architectural principles.",
    excerpt: "Explore the core technologies, development methodologies, and engineering values guiding Harsh Sharma's software projects.",
    author: "Harsh Sharma",
    authorRole: "Software Developer",
    publishedAt: "2025-02-10",
    updatedAt: "2026-08-14",
    readingTime: "6 min read",
    category: "Identity & Profile",
    tags: ["Harsh Sharma", "Engineering Stack", "TypeScript", "Next.js"],
    heroImage: "/images/harsh-sharma-developer.svg",
    relatedSlugs: ["who-is-harsh-sharma", "modern-web-development-architecture"],
    content: [
      {
        heading: "Engineering Philosophy",
        text: "Writing software is an exercise in clarity, maintainability, and empathy for both users and future engineers. My approach prioritizes type-safety, semantic accessibility, zero unnecessary dependencies, and fast static delivery wherever feasible.",
      },
      {
        heading: "The Modern Technical Stack",
        text: "My primary development stack is built on rock-solid web primitives and modern TypeScript tooling:",
        subsections: [
          {
            title: "Type-Safe Modern JavaScript",
            body: "Leveraging TypeScript for compile-time guarantees, clean interface contracts, and seamless refactoring across large codebases.",
          },
          {
            title: "Next.js App Router & React Server Components",
            body: "Utilizing server-first rendering paradigms to eliminate client bundle bloat, maximize SEO crawlability, and achieve instant page transitions.",
          },
          {
            title: "Structured Data & Knowledge Graph Engineering",
            body: "Embedding comprehensive Schema.org JSON-LD trees so search engines and AI agents can accurately parse entities and relationships.",
          },
        ],
      },
      {
        heading: "Commitment to Performance and Standards",
        text: "High performance is not an afterthought; it is a fundamental user right. Every application under HMorix Press is engineered to pass Core Web Vitals with flying colors, maintaining fast Largest Contentful Paint (LCP), minimal Cumulative Layout Shift (CLS), and instantaneous Interaction to Next Paint (INP).",
      },
    ],
  },
  {
    slug: "modern-web-development-architecture",
    title: "Modern Full-Stack Web Development Architecture",
    subtitle: "A practical guide to structuring Next.js, React Server Components, and decoupled data layers for enterprise reliability.",
    excerpt: "Analyzing the shift toward server-first component architecture, edge runtimes, and database abstraction in modern web applications.",
    author: "Harsh Sharma",
    authorRole: "Software Developer",
    publishedAt: "2025-03-05",
    updatedAt: "2026-08-14",
    readingTime: "7 min read",
    category: "Web Engineering",
    tags: ["Web Architecture", "Next.js", "Server Components", "Performance"],
    heroImage: "/images/harsh-sharma-coding.svg",
    relatedSlugs: ["who-is-harsh-sharma", "ai-assisted-web-development-architecture"],
    content: [
      {
        heading: "The Shift Towards Server-Centric Web Apps",
        text: "For years, the JavaScript ecosystem trended toward heavy client-side SPAs that shipped megabytes of framework code to mobile browsers. React Server Components and modern Next.js architectures have fundamentally flipped this model back to server-driven execution with selective client hydration.",
      },
      {
        heading: "Decoupling the Data Layer",
        text: "A hallmark of resilient web architecture is separating presentation from data persistence. By wrapping data access behind clean TypeScript service abstractions, an application can launch statically or serverlessly today and seamlessly connect to PostgreSQL, Supabase, or Prisma tomorrow without rewriting UI components.",
      },
      {
        heading: "Edge Caching and Incremental Static Regeneration",
        text: "Combining static site generation (SSG) with on-demand edge revalidation gives developers the best of both worlds: zero-millisecond static page delivery for global users alongside up-to-the-minute freshness when content changes.",
      },
    ],
  },
  {
    slug: "ai-assisted-web-development-architecture",
    title: "Architecting Web Systems for AI-Assisted Engineering",
    subtitle: "How modern developers leverage LLMs, structured prompting, and type systems to accelerate software delivery safely.",
    excerpt: "An engineering perspective on integrating artificial intelligence into software development lifecycles while maintaining strict quality gates.",
    author: "Harsh Sharma",
    authorRole: "Software Developer",
    publishedAt: "2025-04-12",
    updatedAt: "2026-08-14",
    readingTime: "8 min read",
    category: "AI & Tooling",
    tags: ["AI Engineering", "LLM Tooling", "Developer Productivity", "TypeScript"],
    heroImage: "/images/harsh-sharma-ai-systems.svg",
    relatedSlugs: ["ocr-and-document-processing-pipeline", "modern-web-development-architecture"],
    content: [
      {
        heading: "Beyond Simple Autocomplete",
        text: "Artificial intelligence has graduated from simple code suggestions to comprehensive agentic workflows. When properly configured, AI assistants can draft unit test suites, generate boilerplate schemas, and assist in refactoring complex legacy algorithms.",
      },
      {
        heading: "Type Systems as the Primary Guardrail",
        text: "The secret to reliable AI-assisted coding is a rigid type system. When TypeScript compiler rules and strict linting configurations are enforced, hallucinations and subtle runtime bugs are immediately caught during the synthesis step.",
      },
      {
        heading: "Structured Outputs & Verification",
        text: "Building AI-enhanced web apps requires treating model outputs as untrusted user inputs. Always validate LLM responses through Zod schemas or JSON Schema validators before passing them into downstream business logic.",
      },
    ],
  },
  {
    slug: "ocr-and-document-processing-pipeline",
    title: "Building High-Throughput OCR and Document Processing Pipelines",
    subtitle: "Architectural considerations for ingesting, extracting, and standardizing unstructured physical document data.",
    excerpt: "A deep dive into optical character recognition, layout detection algorithms, and automated schema normalization in TypeScript and Node.js.",
    author: "Harsh Sharma",
    authorRole: "Software Developer",
    publishedAt: "2025-05-20",
    updatedAt: "2026-08-14",
    readingTime: "7 min read",
    category: "Architecture",
    tags: ["OCR", "Document Processing", "Node.js", "Computer Vision"],
    heroImage: "/images/harsh-sharma-technology.svg",
    relatedSlugs: ["ai-assisted-web-development-architecture", "modern-web-development-architecture"],
    content: [
      {
        heading: "The Challenge of Unstructured Document Ingestion",
        text: "Scanned documents and PDF invoices present immense variance in resolution, font kerning, skewed angles, and tabular layouts. A production-grade OCR pipeline must combine pre-processing image sanitization with multi-stage text extraction.",
      },
      {
        heading: "Pipeline Stages: Pre-Processing to Extraction",
        text: "1. Binarization & Deskewing: Normalizing contrast and correcting orientation angle.\n2. Layout Analysis: Identifying bounding boxes, paragraphs, headers, and table grids.\n3. Character Recognition: Applying neural OCR models for high-confidence character detection.\n4. Schema Normalization: Transforming raw string matrices into validated, strongly typed JSON payloads.",
      },
      {
        heading: "Error Handling & Confidence Thresholds",
        text: "Never trust raw OCR output blindly. Implementing confidence scoring metrics enables the system to route low-confidence segments to automated validation rules or human-in-the-loop review queues.",
      },
    ],
  },
  {
    slug: "building-developer-tools-and-automation",
    title: "Building Developer Tools: CLI Engineering and DX Optimization",
    subtitle: "Key lessons learned from designing command-line utilities, schema generators, and automation scripts for modern teams.",
    excerpt: "How thoughtful developer tooling reduces cognitive load, prevents configuration drift, and speeds up product delivery.",
    author: "Harsh Sharma",
    authorRole: "Software Developer",
    publishedAt: "2025-06-18",
    updatedAt: "2026-08-14",
    readingTime: "6 min read",
    category: "AI & Tooling",
    tags: ["Developer Tools", "CLI", "Automation", "DevEx"],
    heroImage: "/images/harsh-sharma-architecture.svg",
    relatedSlugs: ["harsh-sharma-software-developer-profile", "modern-web-development-architecture"],
    content: [
      {
        heading: "The Importance of Developer Experience (DX)",
        text: "A developer tool is only as good as its usability. Fast execution, clear error messages with actionable suggestions, and minimal configuration overhead make the difference between a beloved tool and an abandoned script.",
      },
      {
        heading: "Building Type-Safe CLI Utilities",
        text: "Using modern Node.js and TypeScript ecosystems allows developers to build cross-platform command-line tools with rich interactive prompts, structured flag parsing, and zero runtime surprises.",
      },
      {
        heading: "Automating the Monotonous",
        text: "Automating schema synchronization, sitemap generation, and image optimization saves hundreds of hours across project lifecycles while guaranteeing that standards are consistently maintained.",
      },
    ],
  },
];
