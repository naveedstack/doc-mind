import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join the Academic Sanctuary. Create your personal study environment and track deep work milestones.",
};

export default function SignupPage() {
  return (
    <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[24px] bg-surface-container-lowest shadow-[0_32px_64px_-12px_rgba(42,52,57,0.06)]">
      {/* Form Section */}
      <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_stories
              </span>
            </div>
            <span className="font-headline font-extrabold text-xl tracking-tighter text-primary">
              Academic Sanctuary
            </span>
          </div>
          <h1 className="font-headline font-extrabold text-4xl text-on-surface tracking-tight mb-3">
            Begin your session.
          </h1>
          <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
            Enter your credentials to curate your personal study environment and
            track deep work milestones.
          </p>
        </header>

        <form className="space-y-6 max-w-md">
          <div className="space-y-2">
            <label
              className="block font-label text-sm font-semibold text-on-surface-variant ml-1"
              htmlFor="signup-name"
            >
              Full Name
            </label>
            <input
              className="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline focus:ring-0 transition-all duration-200"
              id="signup-name"
              placeholder="Elias Thorne"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label
              className="block font-label text-sm font-semibold text-on-surface-variant ml-1"
              htmlFor="signup-email"
            >
              Academic Email
            </label>
            <input
              className="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline focus:ring-0 transition-all duration-200"
              id="signup-email"
              placeholder="e.thorne@university.edu"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <label
              className="block font-label text-sm font-semibold text-on-surface-variant ml-1"
              htmlFor="signup-password"
            >
              Security Password
            </label>
            <input
              className="w-full bg-surface-container-high border-none rounded-xl py-4 px-5 text-on-surface placeholder:text-outline focus:ring-0 transition-all duration-200"
              id="signup-password"
              placeholder="••••••••••••"
              type="password"
            />
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all duration-300"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>

        <footer className="mt-12 pt-8 border-t border-outline-variant/10 max-w-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-surface-variant">
            Already have an account?
          </p>
          <Link
            className="text-sm font-bold text-on-secondary-container hover:underline underline-offset-4"
            href="/login"
          >
            Sign in to workspace
          </Link>
        </footer>
      </div>

      {/* Illustration Section */}
      <div className="hidden lg:flex lg:col-span-5 bg-surface-container-low relative flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale"
            alt="Academic desk setup"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDAgovh3JX64GLRktlrBxD_GZKA4FhanixyDKZE0me_lKfUl0EsSTzRnL7Ueucy8WpYBHQJjVoJdQQOqd7YKbyq7ijynS75PycsOVuxywgJu5C9DY2EFUqZ3Zzt3tkZvVaKt1plVyxKHLn9NjNE1nWkIji9IMc2SzuELalnCctQvb7E6JvsAtBwpYl3ua5eWG2I4E7_IBiqAU1-yULbpuw8KTSk0oC9snWS_chVuNjeXQUhGM7RRe_jMZPnrLAYRrLkdCRseOk5NBI"
          />
        </div>

        {/* Glass Testimonial Card */}
        <div className="relative z-10 glass-panel p-8 rounded-[32px] border border-white/20 shadow-2xl max-w-xs transform rotate-2">
          <span
            className="material-symbols-outlined text-secondary text-4xl mb-4"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <blockquote className="text-on-surface italic font-body text-lg leading-snug mb-6">
            &ldquo;Focus is not something you find, it&apos;s something you
            build. This space is your blueprint.&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center overflow-hidden border-2 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="Scholar portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnOOn6CHD3QoOGxjPJnmEJXJ1V_kQWVHsKAA-8VBHiFJbmvTAQ3jXcMRULdf4-fXlmU55TyTyDYofUTwSjU5-68YTd-u6PzfGY-ykA_Bi8RMIozo8Q6ml2UUWuYlSuqCMrlC4AcMqOvnj0sJ2RfTDl7oXeSnvT94XJKwyH3ahI8e1SwCYStXtTjFz8eJof0lFjibMeJfP1_bgZxhxaQ9b4Q20WVZPlKuH1ZjPBa5UlllsZKwzPD1ZdUDAc2OvZb43aOA6tgbb2PTz9"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">
                Dr. Julian Vane
              </p>
              <p className="text-xs text-on-surface-variant">
                Head of Research
              </p>
            </div>
          </div>
        </div>

        {/* Floating Geometric Accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-[-20px] w-48 h-48 bg-secondary-container/30 rounded-3xl blur-2xl" />
      </div>
    </div>
  );
}
