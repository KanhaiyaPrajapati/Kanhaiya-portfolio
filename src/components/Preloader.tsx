"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleComplete = () => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 700);
    };

    if (document.readyState === "complete") {
      setTimeout(handleComplete, 800);
    } else {
      const onLoad = () => setTimeout(handleComplete, 300);
      window.addEventListener("load", onLoad);
      const fallback = setTimeout(handleComplete, 3500);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }

    const fallback = setTimeout(handleComplete, 3500);
    return () => clearTimeout(fallback);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f23] ${
        fadeOut ? "preloader-exit" : ""
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#6366f1]/10 blur-[120px] animate-pulse" />
      <div
        className="absolute w-56 h-56 rounded-full bg-[#a855f7]/8 blur-[100px] animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="relative flex flex-col items-center">
        {/* Main loader circle */}
        <div className="relative w-32 h-32">
          {/* Outer spinning gradient ring */}
          <svg
            className="absolute inset-0 w-full h-full preloader-spin"
            viewBox="0 0 120 120"
          >
            <defs>
              <linearGradient
                id="ring-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(99,102,241,0.06)"
              strokeWidth="1.5"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="url(#ring-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="100 240"
              className="preloader-arc"
            />
          </svg>

          {/* Inner dashed ring spinning reverse */}
          <svg
            className="absolute inset-0 w-full h-full preloader-spin-reverse"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="42"
              fill="none"
              stroke="rgba(168,85,247,0.12)"
              strokeWidth="1"
              strokeDasharray="6 10"
            />
          </svg>

          {/* Innermost subtle ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="32"
              fill="none"
              stroke="rgba(99,102,241,0.08)"
              strokeWidth="0.5"
            />
          </svg>

          {/* Center KP initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#818cf8] bg-clip-text text-transparent preloader-text-glow">
                KP
              </span>
              <div className="absolute -inset-3 bg-[#6366f1]/15 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="mt-10 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#6366f1] rounded-full preloader-progress" />
        </div>

        {/* Loading text */}
        <p className="mt-5 text-[11px] text-gray-600 tracking-[0.35em] uppercase font-light preloader-text-fade">
          Loading
        </p>
      </div>
    </div>
  );
}
