"use client";

import React, { useState, useEffect } from "react";

export interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-surface-low border border-border-subtle ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-low border border-border-subtle text-foreground-secondary hover:text-foreground-primary hover:border-border-focus transition-all duration-150 ease-editorial focus-visible:outline-2 focus-visible:outline-accent cursor-pointer ${className}`}
      aria-label="Theme fixed to obsidian dark mode"
      title="Dark Mode Default"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;