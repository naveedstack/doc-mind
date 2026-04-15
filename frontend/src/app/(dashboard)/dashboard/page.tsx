import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Study Sanctuary dashboard — track focus time, knowledge assets, and recent activity.",
};

export default function DashboardPage() {
  return (
    <div className="animate-fade-in">
      {/* Welcome Section */}
      <section className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-2 font-headline">
            Welcome back, Naveed.
          </h2>
          <p className="text-on-surface-variant text-lg">
            Your sanctuary is ready for some deep work today.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">upload_file</span>
            Upload Document
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold hover:shadow-lg transition-all">
            <span className="material-symbols-outlined">chat_bubble</span>
            Start New Chat
          </button>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Hero Stats: Sessions & Progress */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Stats Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col justify-between aspect-[16/9]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary-fixed rounded-2xl">
                  <span className="material-symbols-outlined text-primary">
                    analytics
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-secondary-fixed-dim text-on-secondary-container rounded-full">
                  +12% this week
                </span>
              </div>
              <h3 className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-1">
                Total Focus Time
              </h3>
              <p className="text-5xl font-extrabold text-primary tracking-tighter font-headline">
                42.5<span className="text-xl ml-1 text-slate-400">hrs</span>
              </p>
            </div>
            <div className="mt-8">
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4 rounded-full" />
              </div>
              <div className="flex justify-between mt-3 text-xs font-medium text-slate-400">
                <span>Goal: 60 hrs</span>
                <span>75% Achieved</span>
              </div>
            </div>
          </div>

          {/* Secondary Stats Card */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 flex flex-col justify-between aspect-[16/9]">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-secondary-fixed rounded-2xl">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    auto_stories
                  </span>
                </div>
              </div>
              <h3 className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-1">
                Knowledge Assets
              </h3>
              <p className="text-5xl font-extrabold text-primary tracking-tighter font-headline">
                128
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-semibold rounded-lg">
                PDFs (84)
              </span>
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-semibold rounded-lg">
                Notes (32)
              </span>
              <span className="px-3 py-1 bg-surface-container text-primary text-xs font-semibold rounded-lg">
                Videos (12)
              </span>
            </div>
          </div>
        </div>

        {/* Deep Work CTA */}
        <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 leading-tight font-headline">
              Ready for a Deep Work session?
            </h3>
            <p className="text-on-primary/70 text-sm leading-relaxed mb-8">
              Maximize cognitive output with our customized focus environments
              and AI distraction suppression.
            </p>
          </div>
          <button className="relative z-10 w-full py-4 bg-on-primary text-primary font-extrabold rounded-2xl hover:scale-[1.02] transition-transform font-headline">
            Enter Focus Mode
          </button>
          {/* Abstract Decorative Background */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-dim/30 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        </div>

        {/* Recent Activity */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low/50 p-10 rounded-[40px]">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-bold text-primary font-headline">
              Recent Activity
            </h3>
            <button className="text-sm font-semibold text-secondary hover:underline">
              View Full Journal
            </button>
          </div>
          <div className="space-y-6">
            {/* Activity Item 1 */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-slate-400">
                  description
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">
                  Advanced Neural Networks.pdf
                </h4>
                <p className="text-sm text-slate-500">
                  Document analyzed for key concept extraction
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400">2:45 PM</p>
                <span className="text-[10px] uppercase tracking-wider text-indigo-500 font-extrabold">
                  Completed
                </span>
              </div>
            </div>

            {/* Activity Item 2 */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-slate-400">
                  forum
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">
                  Quantum Theory Chat
                </h4>
                <p className="text-sm text-slate-500">
                  14-minute focus chat session regarding EPR paradox
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400">Yesterday</p>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold">
                  Archived
                </span>
              </div>
            </div>

            {/* Activity Item 3 */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-slate-400">
                  edit_note
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">
                  Synthesis: Cognitive Bias
                </h4>
                <p className="text-sm text-slate-500">
                  New smart-note generated from cross-document analysis
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-400">Oct 24</p>
                <span className="text-[10px] uppercase tracking-wider text-indigo-500 font-extrabold">
                  New
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tips & Targets */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Curator's Tip */}
          <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10">
            <h3 className="text-xl font-bold text-primary mb-6 font-headline">
              Curator&apos;s Tip
            </h3>
            <div className="flex gap-4 items-start">
              <div className="mt-1">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lightbulb
                </span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed italic">
                &ldquo;You seem to be most productive between 10:00 AM and 1:00
                PM. We recommend scheduling your next Deep Work session for that
                window tomorrow.&rdquo;
              </p>
            </div>
          </div>

          {/* Today's Targets */}
          <div className="bg-surface-container-high/40 p-8 rounded-3xl border border-outline-variant/5">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
              Today&apos;s Targets
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium text-primary">
                  Annotate Chapter 4
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium text-primary">
                  Review Logic Quiz
                </span>
              </li>
              <li className="flex items-center gap-3 opacity-40">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="text-sm font-medium text-primary line-through">
                  Group Study Prep
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
}
