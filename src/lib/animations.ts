"use client";

import { useEffect, useState } from "react";
import type { Variants, Transition } from "framer-motion";

/**
 * Detects the user's OS-level "reduce motion" preference and keeps it in sync.
 * Use this to disable or soften animations for accessibility.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/* ---------- Shared spring physics ---------- */

// A soft, natural spring — good for entrances and layout shifts.
export const softSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

// A snappier spring — good for hover/tap micro-interactions.
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

/* ---------- Reusable reveal variants ---------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: softSpring,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: softSpring },
};

export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: softSpring },
};

export const fromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: softSpring },
};

/**
 * A staggered container. Children using `staggerItem` reveal one after another.
 */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: softSpring },
};
