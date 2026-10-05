import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "reading" | "grid" | "canvas";
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "canvas",
  className = "",
  as: Component = "div",
  ...props
}) => {
  const sizeClasses = {
    reading: "max-w-reading",
    grid: "max-w-grid",
    canvas: "max-w-canvas",
  };

  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;