import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  padding = "md",
  className = "",
  as: Component = "div",
  ...props
}) => {
  const baseStyles =
    "rounded-lg border transition-all duration-200 ease-editorial overflow-hidden";

  const variants = {
    default: "bg-surface-low border-border-subtle",
    muted: "bg-background-muted border-border-subtle",
    interactive:
      "bg-surface-low border-border-subtle hover:border-border-focus hover:bg-surface-high/50 cursor-pointer",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;