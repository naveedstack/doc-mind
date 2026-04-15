import type { Metadata } from "next";
import { PLACEHOLDER_DOCUMENTS } from "@/constants";

export const metadata: Metadata = {
  title: "Library",
  description: "Organize your academic assets. Every document serves as context for deep work sessions.",
};

function formatFileSize(bytes: number): string {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  return `${(bytes / 1_000).toFixed(0)} KB`;
}

function getFileIcon(fileType: string): string {
  switch (fileType) {
    case "pdf": return "picture_as_pdf";
    case "docx": return "description";
    case "txt": return "auto_stories";
    default: return "description";
  }
}

export default function LibraryPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-tighter font-headline text-primary mb-3">
            Knowledge Library
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            Organize your academic assets. Every document here serves as context
            for your deep work sessions and AI-assisted research.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-outline font-bold mb-1">
              Storage used
            </span>
            <div className="w-48 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[64%]" />
            </div>
            <span className="text-xs mt-1 font-medium text-on-surface-variant">
              1.2 GB of 2.0 GB
            </span>
          </div>
        </div>
      </div>

      {/* Upload Zone */}
      <section className="mb-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-[2rem] blur opacity-75" />
          <div className="relative flex flex-col items-center justify-center p-16 bg-surface-container-lowest border-2 border-dashed border-outline-variant/20 rounded-[2rem] transition-all hover:border-secondary/40 hover:bg-surface-container-low/30">
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
            <button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10">
              Select Files
            </button>
          </div>
        </div>
      </section>

      {/* Document Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold font-headline text-primary">
            Recent Documents
          </h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant px-3 py-1.5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-base">
                filter_list
              </span>
              Filter
            </button>
            <button className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant px-3 py-1.5 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-base">sort</span>
              Date
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="group p-6 bg-surface-container-lowest rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full border border-outline-variant/5 relative overflow-hidden"
            >
              {/* Processing Progress Bar */}
              {doc.status === "processing" && (
                <div className="absolute bottom-0 left-0 h-1 bg-indigo-200 w-full">
                  <div
                    className="h-full bg-secondary"
                    style={{ width: `${doc.progressPercent || 0}%` }}
                  />
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    doc.status === "processing"
                      ? "bg-indigo-50 text-secondary"
                      : "bg-slate-100 text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {doc.status === "processing"
                      ? "sync"
                      : getFileIcon(doc.fileType)}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                    doc.status === "ready"
                      ? "bg-green-50 text-green-700"
                      : doc.status === "processing"
                      ? "bg-indigo-50 text-secondary"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {doc.status}
                </span>
              </div>

              <div className="mb-8 flex-1">
                <h4
                  className={`font-bold text-primary font-headline mb-1 truncate ${
                    doc.status === "ready"
                      ? "group-hover:text-secondary transition-colors"
                      : ""
                  }`}
                >
                  {doc.title}
                </h4>
                <p className="text-xs text-on-surface-variant">
                  Added {doc.addedAt} • {formatFileSize(doc.sizeBytes)}
                </p>
              </div>

              <div
                className={`flex items-center justify-between pt-4 border-t border-outline-variant/10 ${
                  doc.status === "processing"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <div className="flex -space-x-2">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-[10px] rounded font-medium ${
                        doc.status === "processing"
                          ? "bg-surface-container-high text-on-surface-variant"
                          : "bg-secondary-fixed-dim text-on-secondary-fixed"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {doc.status === "ready" && (
                  <div className="flex gap-1">
                    <button className="p-2 text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                    <button className="p-2 text-outline hover:text-error transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        delete
                      </span>
                    </button>
                  </div>
                )}
                {doc.status === "processing" && (
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-lg p-2">
                      more_horiz
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
