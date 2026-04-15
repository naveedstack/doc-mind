"use client";

import React from "react";
import { PLACEHOLDER_CHAT_SESSIONS, PLACEHOLDER_MESSAGES } from "@/constants";

export default function ChatSessionPage() {
  return (
    <div className="flex h-[calc(100vh-6rem)] -mx-12 -mb-12 overflow-hidden">
      {/* Left Panel: Session History */}
      <section className="w-80 h-full bg-surface-container-low flex flex-col flex-shrink-0">
        <div className="p-6">
          <h2 className="font-headline font-bold text-on-surface text-lg mb-4">
            Chat History
          </h2>
          <div className="space-y-4 overflow-y-auto no-scrollbar pb-10">
            {PLACEHOLDER_CHAT_SESSIONS.map((session) => (
              <div
                key={session.id}
                className={`p-4 rounded-xl cursor-pointer transition-colors group ${
                  session.status === "active"
                    ? "bg-surface-container-lowest hover:bg-surface-container-highest"
                    : "bg-transparent hover:bg-surface-container-lowest"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold font-label ${
                      session.status === "active"
                        ? "text-secondary"
                        : "text-on-surface-variant/40"
                    }`}
                  >
                    {session.status === "active"
                      ? "Active Session"
                      : "Previous"}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-label">
                    {session.lastActiveAt}
                  </span>
                </div>
                <p
                  className={`text-sm font-semibold leading-tight font-headline ${
                    session.status === "active"
                      ? "text-on-surface"
                      : "text-on-surface/80"
                  }`}
                >
                  {session.title}
                </p>
                {session.lastMessage && (
                  <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">
                    {session.lastMessage}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Panel: Main Chat Area */}
      <section className="flex-1 flex flex-col relative bg-surface">
        {/* Chat Header */}
        <div className="px-10 py-4 flex items-center justify-between bg-surface/80 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[20px]">
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface leading-none">
                Atheneum AI
              </h3>
              <p className="text-xs text-on-surface-variant font-medium mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Refining &ldquo;The Ethics of Neural Networks&rdquo;
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg border-outline-variant/20 border text-xs font-bold text-primary hover:bg-surface-container-high transition-colors">
              Export Session
            </button>
            <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">
                more_vert
              </span>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-10 pt-4 pb-32 no-scrollbar">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* User Message */}
            <div className="flex flex-col items-end">
              <div className="bg-surface-container-high rounded-2xl rounded-tr-none px-6 py-4 max-w-[80%]">
                <p className="text-sm text-on-surface leading-relaxed">
                  {PLACEHOLDER_MESSAGES[0].content}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                  Scholar
                </span>
                <span className="text-[10px] text-on-surface-variant/50">
                  {PLACEHOLDER_MESSAGES[0].timestamp}
                </span>
              </div>
            </div>

            {/* AI Message */}
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
                    <p className="text-[15px] text-on-surface leading-relaxed mb-6">
                      The synthesis you&apos;re proposing is central to
                      contemporary digital sociology. In Bentham&apos;s original
                      framework, the{" "}
                      <span className="font-bold text-secondary">
                        unverifiable visibility
                      </span>{" "}
                      ensures that the subjects discipline themselves because
                      they <em>might</em> be watched.
                    </p>
                    <p className="text-[15px] text-on-surface leading-relaxed mb-8">
                      Translating this to data harvesting, the
                      &ldquo;watchtower&rdquo; is no longer a physical
                      architecture but an omnipresent, invisible computational
                      layer. Modern surveillance is even more profound because it
                      doesn&apos;t just watch behavior; it predicts and modifies
                      it through continuous algorithmic feedback loops.
                    </p>

                    {/* Citations */}
                    <div className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-secondary text-sm">
                          menu_book
                        </span>
                        <h4 className="text-xs font-bold text-on-surface tracking-tight uppercase">
                          Cited Sources
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PLACEHOLDER_MESSAGES[1].citations?.map((citation) => (
                          <div
                            key={citation.id}
                            className="bg-surface-container-lowest p-3 rounded-lg flex items-start gap-3 hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <div
                              className={`w-8 h-10 rounded flex items-center justify-center text-[10px] font-bold ${
                                citation.type === "pdf"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-indigo-500/10 text-indigo-700"
                              }`}
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
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Action Bar */}
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">
                        Atheneum AI
                      </span>
                      <span className="text-[10px] text-on-surface-variant/50">
                        {PLACEHOLDER_MESSAGES[1].timestamp}
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

            {/* Thinking State */}
            <div className="flex gap-4 items-center opacity-40">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-surface-variant animate-pulse"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <p className="text-xs font-medium italic text-on-surface-variant">
                Atheneum is processing the connection to your library...
              </p>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-surface via-surface/95 to-transparent">
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-surface-container-lowest rounded-2xl p-2 shadow-[0_8px_40px_-12px_rgba(42,52,57,0.12)] border border-outline-variant/10 flex items-end gap-3 group focus-within:border-secondary/30 transition-all">
              <button className="p-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <textarea
                className="flex-1 bg-transparent border-none focus:ring-0 py-3 text-sm resize-none font-body max-h-40 placeholder:text-on-surface-variant/50"
                placeholder="Deepen the research..."
                rows={1}
              />
              <div className="flex items-center gap-2 mb-1 mr-1">
                <button className="p-3 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <button className="bg-primary text-on-primary h-11 w-11 rounded-xl flex items-center justify-center shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
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
      </section>

      {/* Decorative Element */}
      <div className="fixed top-20 right-[-100px] w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0" />
    </div>
  );
}
