"use client";

import { motion } from "framer-motion";
import { useReducedMotion, staggerContainer, staggerItem } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  /** Optional 2-digit index shown as a premium eyebrow label, e.g. "01". */
  eyebrow?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
}: SectionHeadingProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : staggerContainer(0.12)}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <motion.div
          variants={reduced ? undefined : staggerItem}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary-400" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-500 dark:text-primary-400">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary-400" />
        </motion.div>
      )}

      <motion.h2 variants={reduced ? undefined : staggerItem} className="heading-lg mb-4">
        <span className="gradient-text">{title}</span>
      </motion.h2>

      <motion.p
        variants={reduced ? undefined : staggerItem}
        className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto text-balance"
      >
        {subtitle}
      </motion.p>

      <motion.div
        variants={reduced ? undefined : staggerItem}
        className="mt-6 flex justify-center"
      >
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      </motion.div>
    </motion.div>
  );
}
