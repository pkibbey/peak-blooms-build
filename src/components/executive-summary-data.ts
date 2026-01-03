import type { ReactNode } from "react";

interface ArchitecturalDecision {
  title: string;
  description: ReactNode;
}

interface NonFeature {
  title: string;
  details: string;
}

interface ExecutiveSummaryData {
  projectName: string;
  tagline: string;
  timeline: {
    startDate: string;
    endDate: string;
    durationDays: number;
  };
  scope: {
    platform: string;
    features: string[];
  };
  architecturalDecisions: ArchitecturalDecision[];
  nonFeatures: NonFeature[];
  keyMetrics: {
    label: string;
    value: string;
  }[];
}

export const executiveSummaryData: ExecutiveSummaryData = {
  projectName: "Peak Blooms",
  tagline: "A modern e-commerce platform built with Next.js 16",
  timeline: {
    startDate: "November 22, 2025",
    endDate: "December 18, 2025",
    durationDays: 27,
  },
  scope: {
    platform:
      "Full-stack e-commerce application with admin dashboard, product catalog, shopping cart, and order management",
    features: [
      "Product catalog with filtering, pagination, and global search",
      "Shopping cart and checkout workflow",
      "Order history and management",
      "User authentication with magic links",
      "Admin panel for product and collection management",
      "Metrics system for tracking performance",
      "Database indexing and optimization",
    ],
  },
  nonFeatures: [
    {
      title: "Theme Toggle",
      details:
        "A single light theme was prioritized to ensure visual consistency and reduce the maintenance and testing burden for the MVP.",
    },
    {
      title: "Product Variants",
      details:
        "The data model was simplified to core attributes instead of full multi-SKU variants to reduce schema complexity and admin overhead.",
    },
    {
      title: "Payment Processing",
      details:
        "Full payment gateway integration was postponed to avoid introducing significant complexity into the initial checkout workflow.",
    },
    {
      title: "Inventory Syncing",
      details:
        "Real-time, webhook-based inventory syncing was deferred, as manual and batch updates were sufficient for initial operational needs.",
    },
    {
      title: "Multi-user Sign-in",
      details:
        "Single-account, role-based access was deemed sufficient for the MVP, avoiding the complexity of company-level permissions.",
    },
  ],
  architecturalDecisions: [
    {
      title: "Next.js 16 + Server Functions",
      description:
        "Next.js gives us routing and performance at a modest cost. Server Functions reduce network round trips making the application feel more responsive.",
    },
    {
      title: "BaseUI + TailwindCSS",
      description:
        "Standardized on BaseUI for consistent, accessible components. TailwindCSS provides a utility-driven system for rapid, consistent styling.",
    },
    {
      title: "Prisma ORM + TypeScript",
      description:
        "Prisma simplified database access and migrations. Its generated types provide robust compile-time safety across the stack. Local database runs with Docker with automatic seed scripts, so that dev work is fast and deterministic.",
    },
    {
      title: "AI + MCP",
      description:
        "Used AI (with project scoped MCP servers) to generate test scaffolds and boilerplate code while applying human architectural judgment to ensure correctness and maintainability.",
    },
    {
      title: "GitHub Actions + Vercel",
      description:
        "Combining Vercel with GitHub Actions makes it easy to run fully tested builds on every push and validate production-like builds early.",
    },
    {
      title: "Vitest + Jest",
      description:
        "Jest provides readable test patterns and Vitest's fast mocks speed test runs, enabling rapid iteration and high coverage.",
    },
    {
      title: "Automatic Clean Up",
      description:
        "Thanks to Biome and Knip, linting, code formatting, and dead code removal are handled automatically. This lightens the load on the developer and the codebase stays clean and consistent.",
    },
  ],
  keyMetrics: [
    { label: "Pages / Routes", value: "50+" },
    { label: "Type-Safe APIs", value: "100%" },
    { label: "Test Coverage", value: "90%" },
    { label: "Development Time", value: "27 days" },
  ],
};
