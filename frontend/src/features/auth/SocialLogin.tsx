"use client";

import React from "react";

interface SocialLoginProps {
  onBiometricClick?: () => void;
}

export default function SocialLogin({ onBiometricClick }: SocialLoginProps) {
  return (
    <div className="space-y-6">
      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full h-px bg-surface-container-high" />
        <span className="absolute px-4 bg-surface-container-lowest text-xs font-bold text-outline uppercase tracking-widest">
          or entry via
        </span>
      </div>

      {/* Biometric Passkey */}
      <button
        onClick={onBiometricClick}
        className="w-full flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container font-label font-bold py-4 rounded-xl hover:bg-secondary-fixed-dim transition-colors"
        type="button"
      >
        <span className="material-symbols-outlined text-[20px]">fingerprint</span>
        Biometric Passkey
      </button>
    </div>
  );
}
