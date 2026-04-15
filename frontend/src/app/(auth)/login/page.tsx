import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Study Sanctuary workspace to continue your academic journey.",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-[1100px] grid md:grid-cols-12 gap-0 bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(42,52,57,0.06)] relative z-10">
      {/* Visual/Editorial Column */}
      <div className="hidden md:flex md:col-span-5 bg-primary relative overflow-hidden flex-col justify-end p-12">
        <div className="absolute inset-0 opacity-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Academic Sanctuary"
            className="w-full h-full object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSCRKZv-eGe-4Xn6KC0DFK9_iSGvtSgInoKYxrp2OFngeC2PML1MZd5qCNqEQIzmsT1yTsgd-tQ2wDuoU7DleilpVqYJ20ciXq4bBW1_zmFoDJ6zWcfZt6B74Z_pNd91Pi95N0U5oax3PahRO9kELAQHvlhsy9YxRJx-nseQywzZhajxiTaaz0KAlNzpQAjyx6XNd721bBbK6S3-a5IoDG4Gifzt8azIyPISI4jby8gjzhVgJOGil3ltfWBAj8KY7zHVT3Za9Sdzbz"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl font-extrabold text-on-primary tracking-tighter mb-4 leading-tight">
            Cultivate your focus.
          </h2>
          <p className="text-on-primary/80 font-body text-lg leading-relaxed max-w-xs">
            Enter a space designed for cognitive depth and uninterrupted discovery.
          </p>
        </div>
      </div>

      {/* Interaction/Login Column */}
      <div className="md:col-span-7 p-8 md:p-20 flex flex-col justify-center">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-dim rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                auto_stories
              </span>
            </div>
            <span className="font-headline font-extrabold text-2xl tracking-tighter text-on-surface">
              Study Sanctuary
            </span>
          </div>
          <h1 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-on-surface-variant font-body">
            Continue your curated academic journey.
          </p>
        </header>

        <form className="space-y-8">
          <div className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label
                className="block font-label text-sm font-semibold text-on-surface-variant px-1"
                htmlFor="login-email"
              >
                Institutional Email
              </label>
              <div className="soft-inset-input flex items-center bg-surface-container-high rounded-xl transition-all duration-300">
                <div className="pl-4 text-outline">
                  <span className="material-symbols-outlined text-[20px]">
                    alternate_email
                  </span>
                </div>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline font-body"
                  id="login-email"
                  placeholder="name@university.edu"
                  type="email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label
                  className="font-label text-sm font-semibold text-on-surface-variant"
                  htmlFor="login-password"
                >
                  Password
                </label>
                <Link
                  className="text-xs font-semibold text-secondary hover:text-secondary-dim transition-colors"
                  href="/forgot-password"
                >
                  Forgot key?
                </Link>
              </div>
              <div className="soft-inset-input flex items-center bg-surface-container-high rounded-xl transition-all duration-300">
                <div className="pl-4 text-outline">
                  <span className="material-symbols-outlined text-[20px]">
                    lock
                  </span>
                </div>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 text-on-surface placeholder:text-outline font-body"
                  id="login-password"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="pr-4 text-outline hover:text-primary transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 px-1">
            <input
              className="w-5 h-5 rounded-md border-outline-variant text-secondary focus:ring-secondary/20 bg-surface-container-high"
              id="remember"
              type="checkbox"
            />
            <label
              className="text-sm text-on-surface-variant font-medium select-none cursor-pointer"
              htmlFor="remember"
            >
              Keep session active
            </label>
          </div>

          <div className="space-y-6 pt-2">
            {/* Primary CTA */}
            <button
              className="w-full bg-gradient-to-br from-primary to-primary-dim text-white font-headline font-bold py-4 rounded-xl shadow-[0_12px_24px_-8px_rgba(81,95,116,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              type="submit"
            >
              Begin Study Session
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="w-full h-px bg-surface-container-high" />
              <span className="absolute px-4 bg-surface-container-lowest text-xs font-bold text-outline uppercase tracking-widest">
                or entry via
              </span>
            </div>

            {/* Secondary Action */}
            <button
              className="w-full flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container font-label font-bold py-4 rounded-xl hover:bg-secondary-fixed-dim transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                fingerprint
              </span>
              Biometric Passkey
            </button>
          </div>
        </form>

        <footer className="mt-12 text-center">
          <p className="text-on-surface-variant text-sm">
            New to the Sanctuary?{" "}
            <Link
              className="text-secondary font-bold hover:underline underline-offset-4 ml-1"
              href="/signup"
            >
              Create an account
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
