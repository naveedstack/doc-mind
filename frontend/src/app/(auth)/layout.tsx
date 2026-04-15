import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden bg-surface font-body text-on-surface">
      {/* Asymmetric Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary-container/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-secondary-container/10 blur-[100px]" />
      {children}
    </main>
  );
}
