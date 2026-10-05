import React from "react";

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 sm:mb-16 max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-medium mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-foreground-primary tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-foreground-secondary leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;