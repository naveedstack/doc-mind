"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  rightAction?: React.ReactNode;
  error?: string;
}

export default function Input({
  label,
  icon,
  rightAction,
  error,
  id,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          className="block font-label text-sm font-semibold text-on-surface-variant px-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "soft-inset-input flex items-center bg-surface-container-high rounded-xl transition-all duration-300",
          error && "border-b-2 border-error",
          className
        )}
      >
        {icon && (
          <div className="pl-4 text-outline">
            <span className="material-symbols-outlined text-[20px]">
              {icon}
            </span>
          </div>
        )}
        <input
          id={id}
          className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline font-body"
          {...props}
        />
        {rightAction && <div className="pr-2">{rightAction}</div>}
      </div>
      {error && (
        <p className="text-xs text-error font-medium px-1">{error}</p>
      )}
    </div>
  );
}
