"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { useReducedMotion } from "@/lib/animations";

/**
 * A floating button that appears after the user scrolls down and returns them
 * to the top. Includes a circular scroll-progress ring around the arrow.
 */
export default function BackToTop() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          whileHover={reduced ? undefined : { scale: 1.1 }}
          whileTap={reduced ? undefined : { scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 dark:bg-dark-100/80 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/10 flex items-center justify-center text-primary-600 dark:text-primary-400 group"
        >
          {/* Circular progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              className="stroke-gray-200 dark:stroke-white/10"
              strokeWidth="2"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              className="stroke-primary-500"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
              style={{ pathLength: progress }}
            />
          </svg>
          <HiArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
