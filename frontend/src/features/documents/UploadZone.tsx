"use client";

import React, { useCallback } from "react";

interface UploadZoneProps {
  onFilesSelected?: (files: FileList) => void;
}

export default function UploadZone({ onFilesSelected }: UploadZoneProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer.files.length > 0) {
        onFilesSelected?.(e.dataTransfer.files);
      }
    },
    [onFilesSelected]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <section className="mb-16">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[2rem] blur opacity-75" />
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="relative flex flex-col items-center justify-center p-16 bg-surface-container-lowest border-2 border-dashed border-outline-variant/20 rounded-[2rem] transition-all hover:border-secondary/40 hover:bg-surface-container-low/30"
        >
          <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center text-on-secondary-container mb-6">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              upload_file
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline text-primary mb-2">
            Ingest New Knowledge
          </h3>
          <p className="text-on-surface-variant text-center max-w-sm mb-8">
            Drag and drop PDFs, EPUBs, or text files. Our curator will
            automatically index them for your sessions.
          </p>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            multiple
            accept=".pdf,.epub,.txt,.docx"
            onChange={(e) => {
              if (e.target.files) onFilesSelected?.(e.target.files);
            }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-8 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
            type="button"
          >
            Select Files
          </button>
        </div>
      </div>
    </section>
  );
}
