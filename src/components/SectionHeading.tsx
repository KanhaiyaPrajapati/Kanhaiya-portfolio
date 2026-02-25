"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="heading-lg mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      </div>
    </motion.div>
  );
}
