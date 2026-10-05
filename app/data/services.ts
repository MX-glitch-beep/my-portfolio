export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  icon?: string;
  capabilities: string[];
  technologies?: string[];
  featured: boolean;
}

export const services: Service[] = [
  {
    id: "frontend-architecture",
    number: "01",
    title: "Frontend Architecture & Systems",
    description:
      "Designing scalable, maintainable frontend structures using modern React and Next.js paradigms. Focus on single-responsibility component design, type safety, and clean code principles.",
    capabilities: [
      "Next.js App Router Architecture",
      "TypeScript Interface Design",
      "State Management Strategy",
      "Design System Engineering",
    ],
    featured: true,
  },
  {
    id: "design-system-engineering",
    number: "02",
    title: "Design Systems & UI Engineering",
    description:
      "Crafting production-ready component libraries and design tokens that bridge design and code with meticulous attention to spacing, typography, accessibility, and consistency.",
    capabilities: [
      "Tailwind CSS v4 Token Architecture",
      "Accessible Component Primitives (ARIA)",
      "Design Token Management",
      "Responsive Layout Systems",
    ],
    featured: true,
  },
  {
    id: "web-application-development",
    number: "03",
    title: "High-Performance Web Applications",
    description:
      "Building fast, modern client interfaces optimized for Core Web Vitals, accessibility, and cross-browser stability with minimal client-side overhead.",
    capabilities: [
      "Server Component Optimization",
      "Core Web Vitals Engineering",
      "Client/Server Boundaries",
      "Semantic HTML & Accessibility",
    ],
    featured: true,
  },
];

/**
 * Named exports for both lowercase and uppercase naming conventions
 */
export const SERVICES = services;