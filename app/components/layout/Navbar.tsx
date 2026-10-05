"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/data/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-4 pointer-events-none">
      <div className="mx-auto max-w-canvas">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto mx-auto max-w-2xl rounded-full border transition-all duration-300 ease-editorial ${
            scrolled
              ? "border-white/10 bg-background/80 backdrop-blur-md shadow-2xl shadow-black/50 py-2.5 px-4 sm:px-6"
              : "border-white/[0.06] bg-surface-low/60 backdrop-blur-sm py-3 px-5 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Identity Logo Mark */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground-primary transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(217,119,6,0.6)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-foreground-primary">
                M. Olorunfemi
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden sm:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ease-editorial ${
                        isActive
                          ? "text-foreground-primary font-semibold"
                          : "text-foreground-secondary hover:text-foreground-primary hover:bg-white/[0.04]"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10 -z-10" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Navigation Trigger */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-1.5 text-foreground-secondary hover:text-foreground-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded-md"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Overlay Menu */}
          {mobileMenuOpen && (
            <div className="mt-3 pt-3 border-t border-white/10 sm:hidden">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "bg-white/[0.08] text-foreground-primary font-medium"
                            : "text-foreground-secondary hover:text-foreground-primary hover:bg-white/[0.04]"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;