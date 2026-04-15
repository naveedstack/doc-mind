import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "elevated" | "flat" | "outlined";
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  variant = "elevated",
  padding = "md",
}: CardProps) {
  const variantStyles = {
    elevated:
      "bg-surface-container-lowest shadow-sm border border-outline-variant/10",
    flat: "bg-surface-container-low",
    outlined: "bg-surface-container-lowest border border-outline-variant/20",
  };

  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
