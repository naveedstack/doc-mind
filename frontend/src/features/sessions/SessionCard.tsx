"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Session } from "@/types";

interface SessionCardProps {
  session: Session;
  onDelete?: (id: string) => void;
}

export default function SessionCard({ session, onDelete }: SessionCardProps) {
  const isActive = session.status === "in_progress";

  return (
    <div className="group bg-surface-container-lowest rounded-3xl p-6 flex items-center gap-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 relative">
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-secondary rounded-r-full" />
      )}

      {/* Thumbnail */}
      <div className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden">
        {session.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="w-full h-full object-cover"
            alt={session.title}
            src={session.thumbnailUrl}
          />
        ) : (
          <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-outline">
              article
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span
            className={cn(
              "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded",
              isActive
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-surface-container-high text-on-surface-variant"
            )}
          >
            {isActive ? "In Progress" : "Completed"}
          </span>
          <span className="text-xs text-on-surface-variant font-medium">
            {session.startedAt}
          </span>
        </div>
        <h4 className="text-xl font-bold font-headline tracking-tight text-on-surface">
          {session.title}
        </h4>
        {session.description && (
          <p className="text-sm text-on-surface-variant mt-1">
            {session.description}
          </p>
        )}
        {(session.durationMinutes || session.insightsCount) && (
          <div className="flex items-center gap-4 mt-2">
            {session.durationMinutes && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs text-on-surface-variant">
                  timer
                </span>
                <span className="text-xs font-semibold text-on-surface-variant">
                  {session.durationMinutes} min
                </span>
              </div>
            )}
            {session.insightsCount && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs text-on-surface-variant">
                  auto_awesome
                </span>
                <span className="text-xs font-semibold text-on-surface-variant">
                  {session.insightsCount} Key Insights
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {isActive ? (
          <Link
            href={`/chat/${session.id}`}
            className="px-6 py-2.5 bg-secondary text-on-secondary font-semibold rounded-xl text-sm transition-transform active:scale-95"
          >
            Resume Session
          </Link>
        ) : (
          <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold rounded-xl text-sm hover:bg-surface-container-highest transition-colors">
            View Summary
          </button>
        )}
        <button
          onClick={() => onDelete?.(session.id)}
          className="p-2.5 text-on-surface-variant hover:bg-error-container/10 hover:text-error rounded-xl transition-colors"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}
