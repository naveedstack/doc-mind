"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ChatSession } from "@/types";

interface ChatHistoryProps {
  sessions: ChatSession[];
  activeSessionId?: string;
  onSelectSession?: (sessionId: string) => void;
}

export default function ChatHistory({
  sessions,
  activeSessionId,
  onSelectSession,
}: ChatHistoryProps) {
  return (
    <section className="w-80 h-full bg-surface-container-low flex flex-col flex-shrink-0">
      <div className="p-6">
        <h2 className="font-headline font-bold text-on-surface text-lg mb-4">
          Chat History
        </h2>
        <div className="space-y-4 overflow-y-auto no-scrollbar pb-10">
          {sessions.map((session) => {
            const isActive = session.id === activeSessionId || session.status === "active";
            return (
              <button
                key={session.id}
                onClick={() => onSelectSession?.(session.id)}
                className={cn(
                  "w-full text-left p-4 rounded-xl cursor-pointer transition-colors group",
                  isActive
                    ? "bg-surface-container-lowest hover:bg-surface-container-highest"
                    : "bg-transparent hover:bg-surface-container-lowest"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-widest font-bold font-label",
                      isActive ? "text-secondary" : "text-on-surface-variant/40"
                    )}
                  >
                    {isActive ? "Active Session" : "Previous"}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-label">
                    {session.lastActiveAt}
                  </span>
                </div>
                <p
                  className={cn(
                    "text-sm font-semibold leading-tight font-headline",
                    isActive ? "text-on-surface" : "text-on-surface/80"
                  )}
                >
                  {session.title}
                </p>
                {session.lastMessage && (
                  <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">
                    {session.lastMessage}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
