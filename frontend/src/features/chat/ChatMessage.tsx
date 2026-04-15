"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ChatMessage, Citation } from "@/types";

interface ChatMessageBubbleProps {
  message: ChatMessage;
  aiContent?: React.ReactNode;
}

function CitationCard({ citation }: { citation: Citation }) {
  return (
    <div className="bg-surface-container-lowest p-3 rounded-lg flex items-start gap-3 hover:shadow-md transition-shadow cursor-pointer">
      <div
        className={cn(
          "w-8 h-10 rounded flex items-center justify-center text-[10px] font-bold",
          citation.type === "pdf"
            ? "bg-primary/10 text-primary"
            : citation.type === "web"
            ? "bg-indigo-500/10 text-indigo-700"
            : "bg-green-500/10 text-green-700"
        )}
      >
        {citation.type.toUpperCase()}
      </div>
      <div>
        <p className="text-[11px] font-bold text-on-surface line-clamp-1">
          {citation.author}
        </p>
        <p className="text-[9px] text-on-surface-variant italic">
          {citation.title}
        </p>
      </div>
    </div>
  );
}

export default function ChatMessageBubble({
  message,
  aiContent,
}: ChatMessageBubbleProps) {
  if (message.role === "user") {
    return (
      <div className="flex flex-col items-end">
        <div className="bg-surface-container-high rounded-2xl rounded-tr-none px-6 py-4 max-w-[80%]">
          <p className="text-sm text-on-surface leading-relaxed">
            {message.content}
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
            Scholar
          </span>
          <span className="text-[10px] text-on-surface-variant/50">
            {message.timestamp}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-4 items-start w-full">
        <div className="min-w-[40px] h-10 rounded-xl bg-secondary-container flex items-center justify-center mt-1">
          <span
            className="material-symbols-outlined text-on-secondary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            auto_awesome
          </span>
        </div>
        <div className="flex-1">
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl rounded-tl-none px-7 py-6 shadow-sm">
            {aiContent}

            {/* Citations */}
            {message.citations && message.citations.length > 0 && (
              <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    menu_book
                  </span>
                  <h4 className="text-xs font-bold text-on-surface tracking-tight uppercase">
                    Cited Sources
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {message.citations.map((citation) => (
                    <CitationCard key={citation.id} citation={citation} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">
                Atheneum AI
              </span>
              <span className="text-[10px] text-on-surface-variant/50">
                {message.timestamp}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="p-1 hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-sm">
                  thumb_up
                </span>
              </button>
              <button className="p-1 hover:text-error transition-colors">
                <span className="material-symbols-outlined text-sm">
                  thumb_down
                </span>
              </button>
              <button className="p-1 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">
                  content_copy
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
