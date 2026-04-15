"use client";

import React from "react";
import { PLACEHOLDER_USER } from "@/constants";

export default function TopNav() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex items-center justify-between px-8 z-40 bg-slate-50/50 backdrop-blur-md">
      <div className="flex items-center gap-8">
        {/* Search */}
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            className="w-full bg-surface-container-high border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-0 focus:outline-none transition-all placeholder:text-slate-400"
            placeholder="Search resources..."
            type="text"
          />
        </div>

        {/* Top Tabs */}
        <nav className="flex gap-6">
          <a
            className="text-indigo-700 font-bold border-b-2 border-indigo-700 font-headline text-sm transition-all duration-300 ease-in-out pb-0.5"
            href="#"
          >
            Focus Mode
          </a>
          <a
            className="text-slate-500 font-headline text-sm hover:text-indigo-600 transition-all duration-300 pb-0.5"
            href="#"
          >
            Resources
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-lg transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-200/50 rounded-lg transition-colors">
          <span className="material-symbols-outlined">history</span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="User avatar"
          className="w-8 h-8 rounded-full object-cover"
          src={PLACEHOLDER_USER.avatarUrl}
        />
      </div>
    </header>
  );
}
