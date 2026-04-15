"use client";

import React from "react";

interface ChatInputProps {
  onSend?: (message: string) => void;
  onAttach?: () => void;
}

export default function ChatInput({ onSend, onAttach }: ChatInputProps) {
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSend?.(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-surface via-surface/95 to-transparent">
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-surface-container-lowest rounded-2xl p-2 shadow-[0_8px_40px_-12px_rgba(42,52,57,0.12)] border border-outline-variant/10 flex items-end gap-3 group focus-within:border-secondary/30 transition-all">
          <button
            onClick={onAttach}
            className="p-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined">attach_file</span>
          </button>
          <textarea
            className="flex-1 bg-transparent border-none focus:ring-0 py-3 text-sm resize-none font-body max-h-40 placeholder:text-on-surface-variant/50"
            placeholder="Deepen the research..."
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="flex items-center gap-2 mb-1 mr-1">
            <button
              className="p-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined">mic</span>
            </button>
            <button
              onClick={handleSubmit}
              className="bg-primary text-on-primary h-11 w-11 rounded-xl flex items-center justify-center shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
              type="button"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                send
              </span>
            </button>
          </div>
        </div>

        {/* Context Indicator */}
        <div className="mt-3 px-2 flex justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-bold text-on-surface-variant">
                Library Context: ON
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary-dim" />
              <span className="text-[10px] font-bold text-on-surface-variant">
                Advanced Logic Active
              </span>
            </div>
          </div>
          <p className="text-[10px] text-on-surface-variant/40 italic">
            Command + Enter to send
          </p>
        </div>
      </div>
    </div>
  );
}
