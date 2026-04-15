"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconFill?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-primary to-primary-dim text-on-primary font-headline font-bold shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98]",
  secondary:
    "bg-secondary-container text-on-secondary-container font-bold hover:bg-secondary-fixed-dim",
  tertiary: "text-primary font-semibold hover:bg-surface-container-high",
  ghost:
    "text-on-surface-variant font-medium hover:bg-surface-container-high",
  danger:
    "text-error hover:bg-error-container/10 font-medium",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-xl gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconFill = false,
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && (
        <span
          className="material-symbols-outlined text-[20px]"
          style={
            iconFill
              ? { fontVariationSettings: "'FILL' 1" }
              : undefined
          }
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
