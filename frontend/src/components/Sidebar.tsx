"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  APP_NAME,
  APP_TAGLINE,
  NAV_ITEMS,
  SECONDARY_NAV_ITEMS,
  PLACEHOLDER_USER,
} from "@/constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col p-4 bg-slate-50/80 backdrop-blur-xl z-50">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold tracking-tighter text-slate-800 font-headline">
          {APP_NAME}
        </h1>
        <p className="text-xs text-on-surface-variant font-medium tracking-tight">
          {APP_TAGLINE}
        </p>
      </div>

      {/* New Chat CTA */}
      <Link
        href="/chat/new"
        className="mb-8 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-on-primary rounded-xl font-semibold transition-all duration-200 active:opacity-80 shadow-sm hover:opacity-90"
      >
        <span className="material-symbols-outlined text-sm">add</span>
        <span className="font-headline text-sm">New Chat</span>
      </Link>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 font-headline text-sm font-medium tracking-tight transition-all duration-200",
                isActive
                  ? "bg-indigo-50 text-indigo-900 rounded-xl font-semibold"
                  : "text-slate-500 hover:bg-slate-200/50"
              )}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 space-y-1 border-t border-slate-200/50">
        {SECONDARY_NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-200/50 transition-colors font-headline text-sm font-medium tracking-tight"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}

        {/* User Profile */}
        <div className="flex items-center gap-3 px-4 py-4 mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100"
            src={PLACEHOLDER_USER.avatarUrl}
          />
          <div className="overflow-hidden">
            <span className="text-sm font-bold text-slate-800 block truncate">
              {PLACEHOLDER_USER.name}
            </span>
            <span className="text-xs text-slate-500 block truncate">
              Premium Scholar
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
