import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Reset your Study Sanctuary workspace access credentials.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md relative z-10">
      {/* Brand Header */}
      <div className="mb-10 text-center md:text-left md:pl-2">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dim flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">auto_stories</span>
          </div>
          <span className="font-headline font-extrabold text-xl tracking-tighter text-primary">
            Academic Sanctuary
          </span>
        </div>
        <h1 className="font-headline font-bold text-3xl text-on-surface tracking-tight mb-3">
          Restore Focus
        </h1>
        <p className="text-on-surface-variant leading-relaxed max-w-xs mx-auto md:mx-0">
          Enter your email and we&apos;ll send instructions to reset your
          workspace access.
        </p>
      </div>

      {/* Auth Card */}
      <div className="bg-surface-container-lowest rounded-[24px] p-8 md:p-10 premium-glow relative overflow-hidden">
        {/* Subtle Tonal Background Element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary-container/30 rounded-full blur-3xl opacity-50" />

        <form className="space-y-8 relative z-10">
          <div>
            <label
              className="block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-3 ml-1"
              htmlFor="reset-email"
            >
              Work Email Address
            </label>
            <div className="relative group">
              <input
                className="w-full bg-surface-container-high border-none rounded-xl px-5 py-4 text-on-surface placeholder:text-outline focus:ring-0 focus:outline-none transition-all duration-300 soft-inset-shadow peer"
                id="reset-email"
                name="email"
                placeholder="curator@sanctuary.edu"
                required
                type="email"
              />
              {/* Focus Indigo Bottom Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary transition-all duration-300 peer-focus:w-full" />
            </div>
          </div>

          <div className="pt-2">
            <button
              className="w-full bg-gradient-to-br from-primary to-primary-dim text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Send Reset Link</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-surface-variant/30 text-center">
          <Link
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary font-medium transition-colors duration-200 group"
            href="/login"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
              keyboard_backspace
            </span>
            <span className="text-sm">Back to login</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-xs text-outline font-medium tracking-wide">
          © 2024 Study Sanctuary • Secure Protocol 4.2
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            className="text-xs text-on-surface-variant/60 hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs text-on-surface-variant/60 hover:text-primary transition-colors"
            href="#"
          >
            Support Center
          </a>
        </div>
      </footer>
    </div>
  );
}
