export interface WhitePaper {
  slug: string;
  title: string;
  subtitle: string;
  executiveSummary: string;
  targetAudience: string;
  author: string;
  publishedDate: string;
  updatedDate: string;
  pdfUrl: string;
  readTime: string;
  topics: string[];
  chapters: {
    number: number;
    title: string;
    body: string;
  }[];
}

export const whitePapers: WhitePaper[] = [
  {
    slug: "modern-fullstack-web-architecture-blueprint",
    title: "Enterprise Full-Stack Architecture Blueprint for Edge Deployment",
    subtitle: "A comprehensive reference guide for building sub-second, highly accessible web applications on serverless and edge infrastructure.",
    executiveSummary: "This white paper details architectural patterns for architecting modern web applications that achieve high availability, strict type safety, zero unnecessary client-side JavaScript, and seamless compatibility with Vercel edge networks.",
    targetAudience: "Lead Software Engineers, Technical Architects, Full-Stack Developers",
    author: "Harsh Sharma, Software Developer",
    publishedDate: "2025-02-18",
    updatedDate: "2026-08-14",
    pdfUrl: "/papers/fullstack-architecture-whitepaper.pdf",
    readTime: "15 min read",
    topics: ["Next.js App Router", "Server Components", "Edge Architecture", "Zero-Database Initial Pattern", "Performance"],
    chapters: [
      {
        number: 1,
        title: "Executive Overview & Modern Web Realities",
        body: "Web applications in 2025 and beyond must balance complex interactive requirements with stringent performance budgets. The historical paradigm of shipping heavy client-side JavaScript bundles has proven detrimental to mobile conversion rates and search crawlability. This paper outlines an edge-first, server-component blueprint.",
      },
      {
        number: 2,
        title: "Decoupled Data Abstraction Layer",
        body: "To enable rapid prototyping without upfront infrastructure overhead, modern architectures should decouple business logic from data storage through repository interfaces. This allows teams to launch on static/mock configurations immediately and plug in enterprise databases (PostgreSQL, Supabase, Redis) down the line with zero view-layer rewrites.",
      },
      {
        number: 3,
        title: "Search Engine Knowledge Graph Integration",
        body: "Search engines and AI-driven retrieval systems (AEO/GEO) rely heavily on semantic HTML and verified JSON-LD graphs. By embedding Person, Organization, and ProfilePage schemas directly into server-rendered pages, sites gain massive visibility advantages.",
      },
      {
        number: 4,
        title: "Deployment & Edge Caching Strategies",
        body: "Deploying on serverless platforms such as Vercel enables automated global distribution. Leveraging stale-while-revalidate headers and Incremental Static Regeneration guarantees near-instant Time to First Byte (TTFB) globally.",
      },
    ],
  },
  {
    slug: "ocr-document-processing-at-scale",
    title: "Architecting Scalable OCR Document Ingestion Pipelines",
    subtitle: "Engineering resilient, low-latency character recognition and schema parsing workflows for unstructured business records.",
    executiveSummary: "An in-depth technical analysis on building production OCR pipelines, mitigating image skew, optimizing bounding-box spatial clustering, and generating structured JSON contracts from complex documents.",
    targetAudience: "Machine Learning Engineers, Backend Developers, Data Architects",
    author: "Harsh Sharma, Software Developer",
    publishedDate: "2025-05-15",
    updatedDate: "2026-08-14",
    pdfUrl: "/papers/ocr-document-processing-whitepaper.pdf",
    readTime: "12 min read",
    topics: ["OCR", "Computer Vision", "Node.js", "Data Normalization", "Distributed Pipelines"],
    chapters: [
      {
        number: 1,
        title: "Introduction to Document Ingestion Bottlenecks",
        body: "Physical and semi-structured documents represent critical business data trapped in non-searchable formats. Standard OCR solutions often fail on intricate tabular matrices and degraded mobile camera captures.",
      },
      {
        number: 2,
        title: "Image Pre-processing & Deskew Algorithms",
        body: "Applying grayscale thresholding, bilateral noise filters, and Radon transformation algorithms ensures maximum contrast and orthogonal character alignment before neural recognition begins.",
      },
      {
        number: 3,
        title: "Post-Processing Schema Reconciliation",
        body: "Raw character arrays must be normalized into validated schemas. Combining spatial clustering heuristics with strict TypeScript validators creates robust, self-healing ingestion pipelines.",
      },
    ],
  },
];
