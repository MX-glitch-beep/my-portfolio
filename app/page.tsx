"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Container from "@/app/components/layout/ui/Container";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiNodedotjs 
} from "react-icons/si";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

function IconArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconMenu({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  );
}

function IconClose({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 4.5l-4.5 15" />
    </svg>
  );
}

function IconServer({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3.75" y="4.5" width="16.5" height="6" rx="1.5" />
      <rect x="3.75" y="13.5" width="16.5" height="6" rx="1.5" />
      <path strokeLinecap="round" d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  );
}

function IconCompass({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5l-1.8 4.7-4.7 1.8 1.8-4.7z" />
    </svg>
  );
}

function IconReact({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconNextjs({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M15 9v6M9 9v6l5.5-6" />
    </svg>
  );
}

function IconTypeScript({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path strokeLinecap="round" d="M7 11h4M9 11v6M14 13.5c0-.8.7-1.5 1.5-1.5h1.5v2h-1.5a.5.5 0 0 0 0 1h1.5v2h-1.5c-.8 0-1.5-.7-1.5-1.5v-2z" />
    </svg>
  );
}

function IconNodejs({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25l7.5 4.33v8.66L12 19.57l-7.5-4.33V6.58L12 2.25z" />
    </svg>
  );
}

function IconPostgreSQL({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path strokeLinecap="round" d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

function IconGraphQL({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" />
    </svg>
  );
}

function IconAWS({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25c2.25 2.25 6.75 3 13.5 0M17.25 15.75l2.25.75-1.5-2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l3-6 3 6M12 9l3-6 3 6" />
    </svg>
  );
}

function IconDocker({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="12" width="18" height="7" rx="2" />
      <rect x="5" y="8" width="3" height="3" rx="0.5" />
      <rect x="9" y="8" width="3" height="3" rx="0.5" />
      <rect x="13" y="8" width="3" height="3" rx="0.5" />
    </svg>
  );
}

function IconChevronUp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
];

const ROTATING_WORDS = [
  { word: "ships", bg: "bg-[#FFE600]", text: "text-neutral-950" },
  { word: "builds", bg: "bg-[#FF5C00]", text: "text-white" },
  { word: "scales", bg: "bg-[#00E5FF]", text: "text-neutral-950" },
  { word: "launches", bg: "bg-[#FF007A]", text: "text-white" },
  { word: "converts", bg: "bg-[#10B981]", text: "text-white" },
];

const PROJECTS = [
  {
    name: "Web Development",
    path: "/projects/web-development",
    image: "/webdesign.jpg",
    link: "#",
    description: "A real-time analytics dashboard rebuilt for speed — load time cut from 4.2s to 600ms.",
    tags: ["Next.js", "PostgreSQL", "Redis"],
  },
  {
    name: "Ui/UX Design",
    path: "/projects/ui-ux-design",
    image: "/ui.jpg",
    link: "#",
    description: "A checkout redesign and API overhaul that lifted conversion by 18%.",
    tags: ["TypeScript", "Stripe", "Node.js"],
  },
  {
    name: "Mobile App development",
    path: "/projects/mobile-app",
    image: "/mobile.jpg",
    link: "#",
    description: "An offline-first field service app used by 40+ crews across three states.",
    tags: ["React Native", "GraphQL", "AWS"],
  },
];

const PROCESS = [
  { step: "01", title: "Discover", description: "We align on goals, users, and constraints before a single line of code is written." },
  { step: "02", title: "Design & Build", description: "I architect the solution and ship in focused, reviewable increments — no black boxes." },
  { step: "03", title: "Test & Refine", description: "Real usage, edge cases, and performance budgets — checked, not assumed." },
  { step: "04", title: "Launch & Support", description: "Deploy with confidence, then stick around for monitoring, fixes, and the next iteration." },
];

const STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind-CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
];

const TESTIMONIALS = [
  {
    quote: "Michael rebuilt our checkout flow in under three weeks and conversion went up almost immediately. He communicates like an engineer who has also run a product.",
    name: "Alex Rivera",
    role: "Head of Product, Insightancer",
  },
  {
    quote: "We handed him a messy legacy codebase and got back something we could actually maintain. No drama, just steady, well-documented progress.",
    name: "Priya Nandakumar",
    role: "CTO, Northwind",
  },
  {
    quote: "He caught a scaling issue in our architecture before it became a production incident. That review paid for itself in the first month.",
    name: "Daniel Osei",
    role: "Founder, Fieldwork",
  },
];

const FAQS = [
  {
    q: "What's your typical project timeline?",
    a: "Most engagements run 4–10 weeks depending on scope. I'll give you a realistic estimate after a short discovery call, and flag early if something looks bigger than it first appears.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes — a good share of my work is stepping into an existing codebase, whether that's a full audit, a targeted feature, or an ongoing maintenance arrangement.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope work is quoted as a project fee; open-ended or ongoing work is billed weekly or monthly. You'll always see the number before we start.",
  },
  {
    q: "Are you available for long-term or contract work?",
    a: "Yes, I take on both short, well-scoped projects and longer embedded engagements. Tell me what you have in mind and I'll tell you honestly if it's a fit.",
  },
];

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // UX Enhancement States
  const [pageLoading, setPageLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Reduced motion preference check
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener?.("change", handleMotionChange);

    // Initial page load hydration timer
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 300);

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener?.("change", handleMotionChange);
    };
  }, []);

  // Word rotating interval
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Scroll Progress & Back to Top listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [prefersReducedMotion, pageLoading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleImageLoad = (id: string) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const currentWord = ROTATING_WORDS[wordIndex];

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} font-[family-name:var(--font-body)] relative bg-[#FAFAF7] text-[#15171C] min-h-screen selection:bg-[#E8531F] selection:text-white overflow-x-hidden`}
    >
      {/* Custom Scrollbar Dynamic CSS Injection */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0f0f10;
        }
        ::-webkit-scrollbar-thumb {
          background: #333336;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #e8531f;
        }
      `}</style>

      {/* Scroll Progress Indicator Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#E8531F] z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Route / Page Hydration Loading Overlay */}
      {pageLoading && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 bg-[#FAFAF7] z-[99] flex items-center justify-center transition-opacity duration-300"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#E8531F] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-[family-name:var(--font-mono)] text-neutral-500 uppercase tracking-widest">
              Loading...
            </span>
          </div>
        </div>
      )}

      {/* 1. FLOATING NAVIGATION BAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <div className="bg-[#121316]/95 backdrop-blur-md border border-white/10 rounded-full px-6 sm:px-8 py-3.5 flex items-center justify-between text-sm shadow-xl">
          <Link href="/" className="font-[family-name:var(--font-display)] font-bold text-white text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F] rounded-md">
            VertexWebs
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-neutral-300 font-medium">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F] rounded-md">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-block px-5 sm:px-6 py-2 bg-[#E8531F] hover:bg-[#CF4614] text-white font-medium rounded-full transition-all duration-300 shadow-md shadow-[#E8531F]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Contact Me
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 active:scale-90 transition-transform"
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="md:hidden mt-3 bg-[#121316] border border-white/10 rounded-3xl px-6 py-5 shadow-xl transition-all duration-200">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-neutral-200 hover:text-white py-2.5 text-sm font-medium border-b border-white/5 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F] rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-[#E8531F] hover:bg-[#CF4614] text-white font-medium rounded-full transition-colors active:scale-95"
              >
                Contact Me
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-20 pt-40 scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Left: copy */}
            <div className="space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-4">
                {/* Portfolio Badge */}
                <div className="flex items-center justify-center gap-4">
                  {/* Left Line */}
                  <div className="h-px w-10 rounded-full bg-gradient-to-l from-[#B7D99A]/90 to-[#B7D99A]/30" />

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#B7D99A] px-5 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5 text-black"
                      aria-hidden="true"
                    >
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>

                    <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-black">
                      Portfolio
                    </span>
                  </div>

                  {/* Right Line */}
                  <div className="h-px w-10 rounded-full bg-gradient-to-r from-[#B7D99A]/90 to-[#B7D99A]/30" />
                </div>
              </div>

              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.2] sm:leading-[1.18] [perspective:1000px]">
                Hi, I&apos;m Michael.
                <br />
                I build software that{" "}
                <span
                  key={currentWord.word}
                  className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 mx-1 font-extrabold rounded-lg border-2 sm:border-[3px] border-neutral-900 shadow-[3px_3px_0px_0px_#15171C] sm:shadow-[4px_4px_0px_0px_#15171C] -rotate-1 cursor-default animate-flip ${currentWord.bg} ${currentWord.text} transition-all duration-300`}
                >
                  {currentWord.word}
                </span>
                .
              </h1>

              {/* TECH STACK STRIP */}
             <div className="py-8 bg-[#F2EFE9] border-y border-[#E6E3DC] rounded-2xl overflow-hidden">
  {/* Embedded keyframes for seamless marquee animation */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-infinite {
      display: flex;
      width: max-content;
      animation: marquee 25s linear infinite;
    }
    .animate-marquee-infinite:hover {
      animation-play-state: paused;
    }
  `}</style>

  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
    {/* Powered By Header */}
    <div className="flex items-center gap-4 shrink-0 z-10 bg-[#F2EFE9] sm:pr-2">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-400 font-semibold shrink-0">
        Powered by
      </span>
      <div className="hidden sm:block h-4 w-px bg-neutral-300" />
    </div>

    {/* Marquee Track with Smooth Edge Fades */}
    <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {STACK && STACK.length > 0 ? (
        <div className="animate-marquee-infinite gap-8 pr-8">
          {/* Render original list + duplicated list for seamless looping */}
          {[...STACK, ...STACK].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2.5 text-neutral-600 hover:text-neutral-900 transition-colors shrink-0"
              >
                <Icon
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  style={{ color: item.color || "currentColor" }}
                />
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider font-medium whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <span className="text-xs text-neutral-400 font-mono">Stack unavailable</span>
      )}
    </div>
  </div>
</div>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Full-stack engineering for founders and teams who need production-ready web and mobile products — from first commit to launch day.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
                <Link
                  href="#work"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E8531F] hover:bg-[#CF4614] text-white font-semibold text-sm transition-all shadow-lg shadow-[#E8531F]/25 active:scale-95 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F]"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-800 font-semibold text-sm transition-all shadow-sm text-center active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: photo frame */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_1px_1px,#E6E3DC_1px,transparent_0)] [background-size:16px_16px] -z-10" />

              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl bg-white">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-50 border-b border-neutral-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] text-neutral-400">michael.tsx</span>
                </div>

                <div className="relative w-full aspect-[4/5] bg-neutral-100">
                  {!imagesLoaded["hero-profile"] && (
                    <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
                  )}
                  <Image
                    src="/profile.jpeg"
                    alt="Michael, software engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={`object-cover object-top transition-opacity duration-500 ${
                      imagesLoaded["hero-profile"] ? "opacity-100" : "opacity-0"
                    }`}
                    priority
                    onLoad={() => handleImageLoad("hero-profile")}
                  />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white border border-neutral-100 p-4 rounded-2xl shadow-xl text-left hover:scale-105 transition-transform">
                <span className="block text-2xl font-[family-name:var(--font-display)] font-bold text-neutral-900">3+ yrs</span>
                <span className="text-xs text-neutral-500 font-medium">Experience</span>
              </div>
              <div className="absolute -top-5 -right-5 bg-white border border-neutral-100 p-4 rounded-2xl shadow-xl text-left hover:scale-105 transition-transform">
                <span className="block text-2xl font-[family-name:var(--font-display)] font-bold text-neutral-900">50+</span>
                <span className="text-xs text-neutral-500 font-medium">Projects Shipped</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SECONDARY TECH STACK STRIP */}
      <section className="py-8 bg-[#F2EFE9] border-y border-[#E6E3DC] scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-4xl mx-auto">
            {STACK && STACK.length > 0 ? (
              STACK.map((tool) => (
                <span key={tool.name} className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-neutral-500 font-medium hover:text-neutral-900 transition-colors cursor-default">
                  {tool.name}
                </span>
              ))
            ) : (
              <span className="text-xs text-neutral-400 font-mono">No tech stack items available</span>
            )}
          </div>
        </Container>
      </section>

      {/* 4. ABOUT SECTION
      <section id="about" className="py-24 bg-white scroll-mt-28 scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[#E8531F]">
                  About
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
                  Why teams bring me in
                </h2>
              </div>

              <div className="space-y-4 text-neutral-600 leading-relaxed text-sm">
                <p>
                  I&apos;m a full-stack software engineer based in New York with three years building web and mobile products for startups and growing teams. I care about shipping fast without cutting corners — clean code, clear communication, and software that still makes sense a year later.
                </p>
                <p>
                  I combine hands-on technical execution with product thinking, so what you get isn&apos;t just code that works — it&apos;s software your team can build on.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8531F]" /> Full-Stack Depth
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal">
                    Seamless integration from database schema design to responsive UI components.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8531F]" /> Clean Architecture
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal">
                    Maintainable, testable code bases built for long-term developer velocity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8531F]" /> Product-Minded
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal">
                    Translating business goals into technical requirements and clear user value.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <h3 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8531F]" /> Async-First
                  </h3>
                  <p className="text-xs text-neutral-500 leading-normal">
                    Transparent updates, detailed documentation, and low-friction syncs.
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block font-[family-name:var(--font-mono)]">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
                  {["TypeScript", "React / Next.js", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "AWS / GCP", "Docker"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-neutral-100 border border-neutral-200/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#E8531F] hover:bg-[#CF4614] text-white font-semibold text-sm transition-all shadow-md shadow-[#E8531F]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F]"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E8531F] block">3+</span>
                <span className="text-xs font-semibold text-neutral-800 block">Years Experience</span>
                <p className="text-[11px] text-neutral-500 leading-tight">Building scalable digital platforms.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E8531F] block">100+</span>
                <span className="text-xs font-semibold text-neutral-800 block">Deploys Shipped</span>
                <p className="text-[11px] text-neutral-500 leading-tight">Production-ready features & tools.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E8531F] block">99.9%</span>
                <span className="text-xs font-semibold text-neutral-800 block">System Reliability</span>
                <p className="text-[11px] text-neutral-500 leading-tight">Focus on uptime & optimization.</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E8531F] block">20+</span>
                <span className="text-xs font-semibold text-neutral-800 block">Teams Advised</span>
                <p className="text-[11px] text-neutral-500 leading-tight">From early seed to Series B.</p>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* 5. WORK SECTION */}
     <section id="work" className="py-20 scroll-mt-28 bg-[#0F0F10] scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
  <Container size="canvas">
    <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#18181A] px-6 py-10 sm:px-12 sm:py-14 border border-white/5 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-12 border-b border-white/10">
        <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold tracking-tight text-white">
          My <span className="text-[#FF451D]">Services</span>
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 max-w-sm md:text-right leading-relaxed">
          Selected projects engineered for speed, scalability, and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS && PROJECTS.length > 0 ? (
          PROJECTS.map((project, i) => {
            // Set all cards to uniform dark background
            const isFeatured = false;
            const cardBg = "bg-[#2A2A2D]";
            const imgId = `proj-${i}`;

            return (
              <div
                key={project.name}
                className={`rounded-[2.25rem] sm:rounded-[2.5rem] pt-7 pb-5 px-4 sm:px-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${cardBg}`}
              >
                <div className="pb-6 mb-6 border-b border-white/10 px-3">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="relative pt-6">
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-[76%] h-7 rounded-t-2xl transition-colors ${
                      isFeatured ? "bg-white/20" : "bg-white/10"
                    }`}
                  />

                  <div
                    className={`absolute top-3 left-1/2 -translate-x-1/2 w-[88%] h-7 rounded-t-2xl transition-colors ${
                      isFeatured ? "bg-white/35" : "bg-white/15"
                    }`}
                  />

                  <div className="relative z-10 aspect-[4/3.4] rounded-[2rem] overflow-hidden bg-[#ECECEC] shadow-md">
                    {!imagesLoaded[imgId] && (
                      <div className="absolute inset-0 bg-neutral-300 animate-pulse" />
                    )}
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      onLoad={() => handleImageLoad(imgId)}
                      className={`object-cover object-top transition-opacity duration-500 ${
                        imagesLoaded[imgId] ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <div
                      aria-hidden="true"
                      className={`absolute bottom-[4.85rem] right-0 w-4 h-4 rounded-br-full pointer-events-none z-30 ${
                        isFeatured ? "shadow-[4px_4px_0_0_#FF451D]" : "shadow-[4px_4px_0_0_#2A2A2D]"
                      }`}
                    />

                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 right-[4.85rem] w-4 h-4 rounded-br-full pointer-events-none z-30 ${
                        isFeatured ? "shadow-[4px_4px_0_0_#FF451D]" : "shadow-[4px_4px_0_0_#2A2A2D]"
                      }`}
                    />

                    <div
                      className={`absolute bottom-0 right-0 w-[5rem] h-[5rem] rounded-tl-[2rem] z-20 flex items-center justify-center p-2 ${cardBg}`}
                    >
                      <a
                        href={project.link}
                        aria-label={`View ${project.name} details`}
                        className="w-12 h-12 rounded-full bg-white text-neutral-900 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                      >
                        <IconArrow className="w-5 h-5 -rotate-45 stroke-[2.5]" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-3 pt-4 space-y-3">
                  <p className={`text-xs sm:text-sm ${isFeatured ? "text-white/90" : "text-neutral-300"} leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-[family-name:var(--font-mono)] px-2.5 py-1 rounded-md ${
                          isFeatured ? "bg-white/20 text-white" : "bg-white/5 text-neutral-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center text-neutral-400">
            No projects available at the moment.
          </div>
        )}
      </div>
    </div>
  </Container>
</section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-[#FAFAF7] scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[#E8531F]">
                Process
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-neutral-900">
                How we work together
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS && PROCESS.length > 0 ? (
                PROCESS.map((step) => (
                  <div key={step.step} className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-4 hover:shadow-md transition-all">
                    <span className="font-[family-name:var(--font-mono)] text-2xl font-bold text-[#E8531F]">
                      {step.step}
                    </span>
                    <h3 className="font-semibold text-neutral-900 text-lg">{step.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-neutral-500">Process steps unavailable.</div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-20 bg-white border-y border-neutral-200/80 scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3">
              <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[#E8531F]">
                Testimonials
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-neutral-900">
                What people say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS && TESTIMONIALS.length > 0 ? (
                TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FAFAF7] border border-neutral-200/80 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all">
                    <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-sm">{t.name}</h4>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-neutral-500">Testimonials unavailable.</div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. FAQ SECTION */}
      <section id="faqs" className="py-20 bg-[#FAFAF7] scroll-mt-28 scroll-reveal transition-all duration-700 opacity-0 translate-y-6">
        <Container size="canvas">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-[#E8531F]">
                FAQ
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-neutral-900">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS && FAQS.length > 0 ? (
                FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-neutral-200/80 rounded-2xl bg-white overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        id={`faq-btn-${idx}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${idx}`}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between font-semibold text-neutral-900 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8531F] active:bg-neutral-50"
                      >
                        <span>{faq.q}</span>
                        <IconChevronDown
                          className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#E8531F]" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div
                          id={`faq-panel-${idx}`}
                          role="region"
                          aria-labelledby={`faq-btn-${idx}`}
                          className="px-6 pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4"
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-neutral-500">No questions available.</div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer className="relative bg-[#0F0F10] text-neutral-400 border-t border-white/10 pt-16 pb-8 overflow-hidden">
  {/* Ambient Ambient Glow */}
  <div 
    aria-hidden="true" 
    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#FF451D]/10 blur-[100px] pointer-events-none rounded-full" 
  />

  <Container size="canvas">
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Top Section: CTA + Live Status */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
        <div className="space-y-4 max-w-xl">
          
          <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Have a project in mind? <br />
            <span className="text-[#FF451D]">Let's build something great.</span>
          </h3>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF451D] text-white font-medium text-sm hover:bg-[#e03a15] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#FF451D]/20 self-start md:self-auto shrink-0"
        >
          <span>Get in Touch</span>
          <svg className="w-4 h-4 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Middle Section: Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10 text-xs">
        {/* Brand Column */}
        <div className="sm:col-span-2 space-y-3">
          <span className="font-[family-name:var(--font-display)] font-bold text-white text-xl tracking-tight block">
            VertexWebs
          </span>
          <p className="text-neutral-400 max-w-sm leading-relaxed">
            Engineering high-performance, responsive digital experiences designed for speed, scalability, and conversion.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-3">
          <p className="font-[family-name:var(--font-mono)] uppercase tracking-wider text-white font-semibold">
            Navigation
          </p>
          <ul className="space-y-2">
            {NAV_LINKS && NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF451D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials / Connect Column */}
        <div className="space-y-3">
          <p className="font-[family-name:var(--font-mono)] uppercase tracking-wider text-white font-semibold">
            Socials
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} VertexWebs. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF451D] rounded-md px-2 py-1"
        >
          <span>Back to top</span>
          <svg className="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>
  </Container>
</footer>
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#E8531F] hover:bg-[#CF4614] text-white rounded-full shadow-2xl transition-all duration-300 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <IconChevronUp className="w-5 h-5" />
        </button>
      )}
    </main>
  );
}