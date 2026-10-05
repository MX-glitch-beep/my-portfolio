import React from "react";
import Link from "next/link";
import Container from "@/app/components/layout/ui/Container";
import { NAV_ITEMS } from "@/app/data/navigation";
import { SOCIAL_LINKS } from "@/app/data/socials";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-muted/40 pt-16 pb-12 mt-32 sm:mt-40">
      <Container size="canvas">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-border-subtle/60">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground-primary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Michael Olorunfemi
            </Link>
            <p className="text-sm text-foreground-secondary max-w-sm leading-relaxed font-normal">
              Software engineering student focused on frontend development,
              scalable design systems, and modern web application craftsmanship.
            </p>
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-low border border-border-subtle text-xs text-foreground-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
              </span>
              <span>Available for select engineering roles & projects</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted font-medium">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-secondary hover:text-foreground-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted font-medium">
              Connect
            </h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-foreground-primary transition-colors focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
                  >
                    <span>{social.platform}</span>
                    <span className="text-foreground-muted text-xs group-hover:text-accent transition-colors">
                      ({social.username})
                    </span>
                    <svg
                      className="w-3 h-3 text-foreground-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted font-mono">
          <p>© {currentYear} Michael Olorunfemi. Built with Next.js 16 & React 19.</p>
          <p className="text-foreground-muted/60">
            Crafted with restraint, precision & modern web standards.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;