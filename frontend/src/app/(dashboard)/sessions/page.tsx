import type { Metadata } from "next";
import Link from "next/link";
import { PLACEHOLDER_SESSIONS } from "@/constants";

export const metadata: Metadata = {
  title: "Sessions",
  description: "Your archive of deep work sessions. Review insights, resume active workflows, or curate your progress.",
};

export default function SessionsPage() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface">
            Sessions History
          </h2>
          <p className="mt-2 text-on-surface-variant max-w-md">
            Your archive of deep work sessions. Review insights, resume active
            workflows, or curate your progress.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">
              filter_list
            </span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-sm">download</span>
            Export
          </button>
        </div>
      </div>

      {/* Dashboard Stats Grid */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-8 bg-primary rounded-3xl p-8 text-on-primary relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">
              Focus Capacity
            </p>
            <h3 className="text-5xl font-extrabold font-headline tracking-tighter">
              124.5 Hours
            </h3>
          </div>
          <div className="mt-8 flex gap-4 relative z-10">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
              <p className="text-[10px] uppercase font-bold opacity-60">
                This Week
              </p>
              <p className="text-lg font-bold">+12%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
              <p className="text-[10px] uppercase font-bold opacity-60">
                Avg Depth
              </p>
              <p className="text-lg font-bold">88/100</p>
            </div>
          </div>
          {/* Decorative Gradient */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-dim rounded-full blur-3xl opacity-50" />
        </div>

        <div className="col-span-4 bg-surface-container-low rounded-3xl p-8 flex flex-col justify-center text-center">
          <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span
              className="material-symbols-outlined text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
          </div>
          <h4 className="font-headline font-bold text-xl">Current Streak</h4>
          <p className="text-4xl font-extrabold text-secondary mt-1 font-headline">
            14 Days
          </p>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-6">
        {PLACEHOLDER_SESSIONS.map((session) => (
          <div
            key={session.id}
            className="group bg-surface-container-lowest rounded-3xl p-6 flex items-center gap-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 relative"
          >
            {/* Active indicator */}
            {session.status === "in_progress" && (
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
                    {session.status === "in_progress" ? "code" : "article"}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${
                    session.status === "in_progress"
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-surface-container-high text-on-surface-variant"
                  }`}
                >
                  {session.status === "in_progress"
                    ? "In Progress"
                    : "Completed"}
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
              {session.status === "in_progress" ? (
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
              <button className="p-2.5 text-on-surface-variant hover:bg-error-container/10 hover:text-error rounded-xl transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex justify-between items-center px-6">
        <p className="text-sm font-medium text-on-surface-variant">
          Showing 4 of 128 sessions
        </p>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors">
            3
          </button>
          <span className="text-on-surface-variant px-2">...</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
