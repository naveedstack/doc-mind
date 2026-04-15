import React from "react";

interface SessionStatsProps {
  totalHours: number;
  weeklyChange: string;
  avgDepth: string;
  currentStreak: number;
}

export default function SessionStats({
  totalHours,
  weeklyChange,
  avgDepth,
  currentStreak,
}: SessionStatsProps) {
  return (
    <div className="grid grid-cols-12 gap-6 mb-12">
      {/* Focus Capacity */}
      <div className="col-span-8 bg-primary rounded-3xl p-8 text-on-primary relative overflow-hidden flex flex-col justify-between">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">
            Focus Capacity
          </p>
          <h3 className="text-5xl font-extrabold font-headline tracking-tighter">
            {totalHours} Hours
          </h3>
        </div>
        <div className="mt-8 flex gap-4 relative z-10">
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
            <p className="text-[10px] uppercase font-bold opacity-60">This Week</p>
            <p className="text-lg font-bold">{weeklyChange}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl">
            <p className="text-[10px] uppercase font-bold opacity-60">Avg Depth</p>
            <p className="text-lg font-bold">{avgDepth}</p>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-dim rounded-full blur-3xl opacity-50" />
      </div>

      {/* Current Streak */}
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
          {currentStreak} Days
        </p>
      </div>
    </div>
  );
}
