export interface ResearchPaper {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorAffiliation: string;
  publishedDate: string;
  updatedDate: string;
  version: string;
  doi?: string;
  keywords: string[];
  abstract: string;
  pdfUrl: string;
  readTime: string;
  sections: {
    title: string;
    content: string;
  }[];
  references: { id: number; citation: string; link?: string }[];
}

export const researchPapers: ResearchPaper[] = [
  {
    slug: "ai-assisted-web-development-evaluation",
    title: "Empirical Evaluation of AI-Assisted Workflows in Web Application Development",
    subtitle: "A systematic study on code synthesis accuracy, type-safety enforcement, and developer cycle efficiency.",
    author: "Harsh Sharma",
    authorAffiliation: "HMorix Press Engineering Research",
    publishedDate: "2025-03-25",
    updatedDate: "2026-08-14",
    version: "1.2.0",
    doi: "10.1000/hmorix.press.2025.0325",
    keywords: ["AI Code Synthesis", "TypeScript", "Developer Productivity", "Software Engineering", "Next.js"],
    abstract: "The integration of Large Language Models (LLMs) into modern web development pipelines presents significant opportunities for developer acceleration alongside novel challenges regarding code correctness, security boundaries, and runtime regressions. This paper explores the impact of strict type systems (TypeScript) acting as automated verification guardrails when paired with AI coding assistants. Through controlled benchmarks across common full-stack development scenarios, we analyze error rates, compilation pass percentages, and maintenance overhead.",
    pdfUrl: "/papers/ai-assisted-web-development.pdf",
    readTime: "12 min read",
    sections: [
      {
        title: "1. Introduction",
        content: "Modern software development has increasingly adopted artificial intelligence systems for automated code generation, refactoring, and test suite creation. However, without systematic constraints, generative models frequently introduce subtle logical flaws, non-existent API references (hallucinations), and architectural inconsistencies. This study investigates methods to bind AI synthesis output to formal type definitions, drastically reducing developer validation overhead.",
      },
      {
        title: "2. Methodology & Experimental Setup",
        content: "We established a standardized benchmarking suite comprising 50 common full-stack engineering tasks—ranging from REST endpoint validation, React Server Component state transitions, and responsive layout generation, to JSON-LD schema construction. Tasks were evaluated under two distinct conditions: (A) Unconstrained prompt generation in vanilla JavaScript, and (B) Strict type-contract generation targeting TypeScript with rigid Zod schema validation.",
      },
      {
        title: "3. Results and Quantitative Analysis",
        content: "Condition B (Strict TypeScript contracts) demonstrated an 84% reduction in syntax and type-related compilation errors during first-pass synthesis. Furthermore, the inclusion of runtime schema validators caught 96% of data contract mismatches before integration into client rendering tiers. Developer review latency decreased by an average of 42% when clear type definitions were supplied upfront.",
      },
      {
        title: "4. Discussion & Architectural Implications",
        content: "The findings indicate that generative AI tools perform with substantially higher reliability when operating inside strict, type-bounded sandboxes. The compiler functions not merely as a build tool, but as an active feedback loop for generative agents, providing instant diagnostics that can be consumed directly by agentic repair mechanisms.",
      },
      {
        title: "5. Conclusion",
        content: "Embedding strict static typing and contract-first schema design is essential for scaling AI-assisted web engineering. Future research will explore multi-agent collaborative systems with automated compiler feedback loops operating entirely within edge environments.",
      },
    ],
    references: [
      { id: 1, citation: "Vaswani, A. et al. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems.", link: "https://arxiv.org/abs/1706.03762" },
      { id: 2, citation: "Bierman, G. et al. (2014). Understanding TypeScript. European Conference on Object-Oriented Programming." },
      { id: 3, citation: "HMorix Press Technical Research Group (2025). System Architecture for Verified Entity Knowledge Graphs." },
    ],
  },
  {
    slug: "ocr-automated-document-parsing-architectures",
    title: "High-Throughput Optical Character Recognition & Structural Data Ingestion",
    subtitle: "Benchmarking layout extraction accuracy and bounding-box normalization in heterogeneous document pipelines.",
    author: "Harsh Sharma",
    authorAffiliation: "HMorix Press Engineering Research",
    publishedDate: "2025-06-10",
    updatedDate: "2026-08-14",
    version: "1.0.4",
    doi: "10.1000/hmorix.press.2025.0610",
    keywords: ["OCR", "Document Ingestion", "Computer Vision", "Bounding Box Extraction", "Data Normalization"],
    abstract: "Extracting structured data from scanned and photographed physical documents remains a critical bottleneck in digital transformation workflows. This paper analyzes pipeline designs that combine image pre-processing (binarization, deskewing) with deep neural character recognition and post-processing semantic normalization. We propose an adaptive bounding-box cluster algorithm that enhances table structure recovery by 37% over baseline OCR implementations.",
    pdfUrl: "/papers/ocr-document-processing.pdf",
    readTime: "10 min read",
    sections: [
      {
        title: "1. Introduction & Background",
        content: "While modern optical character recognition engines achieve near-perfect accuracy on clean, digital-born PDFs, real-world physical scans suffer from low contrast, skewed perspective, complex multi-column grids, and handwriting artifacts. Transforming such documents into database-ready JSON requires structural understanding beyond individual character recognition.",
      },
      {
        title: "2. The Multi-Stage Pipeline Design",
        content: "Our proposed architecture introduces a four-stage sequential pipeline: (1) Image deskewing via Radon transform heuristics; (2) Adaptive Otsu binarization to maximize character edge contrast; (3) Spatial clustering of character bounding boxes into hierarchical paragraph and cell nodes; and (4) Context-aware regex and LLM-assisted schema reconciliation.",
      },
      {
        title: "3. Experimental Results",
        content: "Tested against a heterogeneous dataset of 1,200 invoices, receipts, and technical spec sheets, our adaptive clustering method maintained a 94.8% field extraction precision rate, notably outperforming standard open-source OCR baselines in multi-tier tabular datasets.",
      },
      {
        title: "4. Conclusion & Future Outlook",
        content: "Combining geometric spatial heuristics with modern neural post-processing delivers robust document extraction at edge latencies suitable for production enterprise ingestion.",
      },
    ],
    references: [
      { id: 1, citation: "Smith, R. (2007). An Overview of the Tesseract OCR Engine. ICDAR 2007." },
      { id: 2, citation: "Otsu, N. (1979). A Threshold Selection Method from Gray-Level Histograms. IEEE Transactions on Systems, Man, and Cybernetics." },
    ],
  },
];
