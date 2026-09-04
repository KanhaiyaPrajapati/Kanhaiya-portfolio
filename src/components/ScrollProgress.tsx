"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/animations";

/**
 * A thin gradient bar fixed to the top of the viewport that fills as the
 * user scrolls the page. Uses a spring so the fill feels physical, not linear.
 */
export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400"
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
    />
  );
}
