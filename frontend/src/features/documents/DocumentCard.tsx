"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { Document } from "@/types";

interface DocumentCardProps {
  document: Document;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}

function formatFileSize(bytes: number): string {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  return `${(bytes / 1_000).toFixed(0)} KB`;
}

function getFileIcon(fileType: string): string {
  switch (fileType) {
    case "pdf": return "picture_as_pdf";
    case "docx": return "description";
    case "txt": return "auto_stories";
    case "epub": return "auto_stories";
    default: return "description";
  }
}

export default function DocumentCard({ document: doc, onView, onDelete }: DocumentCardProps) {
  return (
    <div className="group p-6 bg-surface-container-lowest rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full border border-outline-variant/5 relative overflow-hidden">
      {/* Processing Bar */}
      {doc.status === "processing" && (
        <div className="absolute bottom-0 left-0 h-1 bg-indigo-200 w-full">
          <div
            className="h-full bg-secondary transition-all duration-500"
            style={{ width: `${doc.progressPercent || 0}%` }}
          />
        </div>
      )}

      <div className="flex justify-between items-start mb-6">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            doc.status === "processing" ? "bg-indigo-50 text-secondary" : "bg-slate-100 text-primary"
          )}
        >
          <span className="material-symbols-outlined text-2xl">
            {doc.status === "processing" ? "sync" : getFileIcon(doc.fileType)}
          </span>
        </div>
        <span
          className={cn(
            "px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter",
            doc.status === "ready" ? "bg-green-50 text-green-700" :
            doc.status === "processing" ? "bg-indigo-50 text-secondary" :
            "bg-red-50 text-red-700"
          )}
        >
          {doc.status}
        </span>
      </div>

      <div className="mb-8 flex-1">
        <h4
          className={cn(
            "font-bold text-primary font-headline mb-1 truncate",
            doc.status === "ready" && "group-hover:text-secondary transition-colors"
          )}
        >
          {doc.title}
        </h4>
        <p className="text-xs text-on-surface-variant">
          Added {doc.addedAt} • {formatFileSize(doc.sizeBytes)}
        </p>
      </div>

      <div
        className={cn(
          "flex items-center justify-between pt-4 border-t border-outline-variant/10",
          doc.status === "processing" && "opacity-50 cursor-not-allowed"
        )}
      >
        <div className="flex gap-1">
          {doc.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2 py-0.5 text-[10px] rounded font-medium",
                doc.status === "processing"
                  ? "bg-surface-container-high text-on-surface-variant"
                  : "bg-secondary-fixed-dim text-on-secondary-fixed"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        {doc.status === "ready" && (
          <div className="flex gap-1">
            <button
              onClick={() => onView?.(doc.id)}
              className="p-2 text-outline hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">visibility</span>
            </button>
            <button
              onClick={() => onDelete?.(doc.id)}
              className="p-2 text-outline hover:text-error transition-colors"
            >
              <span className="material-symbols-outlined text-lg">delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
