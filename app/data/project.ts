export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  summary: string;
  description: string[];
  technologies: string[];
  role: string;
  featured: boolean;
  links: {
    github?: string;
    live?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "modern-portfolio-engine",
    title: "Modern Portfolio Engine",
    subtitle: "Editorial Design System & Next.js App Router Architecture",
    category: "Frontend Architecture",
    year: "2026",
    summary:
      "A high-performance personal portfolio built with modern Next.js 16, React 19, and Tailwind CSS v4, focusing on editorial typography, strict accessibility, and zero visual noise.",
    description: [
      "Designed and implemented a modular, server-first portfolio shell engineered with single-responsibility principles.",
      "Built a custom Tailwind CSS v4 CSS-first design token system incorporating strict typography scale, dark mode depth, and accessible contrast ratios.",
      "Achieved zero Layout Shift (CLS = 0) through self-hosted Google Fonts integration via next/font.",
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    role: "Lead Frontend Engineer & Designer",
    featured: true,
    links: {
      github: "https://github.com/michaelolorunfemi/portfolio",
      live: "https://michaelolorunfemi.com",
    },
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Hydration Cost", value: "Minimal JS" },
    ],
  },
];

export const PROJECTS = projects;