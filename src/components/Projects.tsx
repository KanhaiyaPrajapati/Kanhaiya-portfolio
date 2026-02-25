"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode, HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="A collection of projects that showcase my skills and experience"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project list — full width alternating cards */}
        <div className="flex flex-col gap-20 lg:gap-28">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const isEven = index % 2 === 0;
              const projectNum = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group"
                >
                  <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center"
                  >
                    {/* Visual / Image side */}
                    <div className={cn("order-1", !isEven && "lg:order-2")}>
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-primary-400/10 dark:from-primary-500/5 dark:via-accent-500/[0.03] dark:to-primary-400/5 border border-gray-200/40 dark:border-white/5 aspect-[16/10] group-hover:shadow-2xl group-hover:shadow-primary-500/10 transition-all duration-700">
                        {/* Grid dots pattern */}
                        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle, #6366f1 1px, transparent 1px)",
                              backgroundSize: "24px 24px",
                            }}
                          />
                        </div>

                        {/* Center content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="w-20 h-20 rounded-2xl bg-white/80 dark:bg-dark/60 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-primary-500/20 mb-5 border border-white/50 dark:border-white/10"
                          >
                            <HiCode className="w-9 h-9 text-primary-500" />
                          </motion.div>
                          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-dark/60 backdrop-blur-md text-primary-600 dark:text-primary-400 border border-white/50 dark:border-white/10 tracking-wide uppercase">
                            {project.category}
                          </span>
                        </div>

                        {/* Gradient orbs */}
                        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary-500/15 dark:bg-primary-500/10 blur-3xl group-hover:bg-primary-500/25 transition-colors duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-accent-500/15 dark:bg-accent-500/10 blur-3xl group-hover:bg-accent-500/25 transition-colors duration-700" />

                        {/* Hover overlay with links */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-4 z-20">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 rounded-xl bg-white/15 backdrop-blur-md text-white text-sm font-medium hover:bg-white/25 transition-colors flex items-center gap-2 border border-white/10"
                          >
                            <FaGithub className="w-4 h-4" />
                            Source Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 rounded-xl bg-primary-500/80 backdrop-blur-md text-white text-sm font-medium hover:bg-primary-500 transition-colors flex items-center gap-2"
                          >
                            <HiExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className={cn("order-2", !isEven && "lg:order-1")}>
                      {/* Project number */}
                      <span className="text-7xl lg:text-8xl font-black text-gray-100 dark:text-white/[0.03] select-none leading-none block mb-4 -ml-1 tracking-tighter">
                        {projectNum}
                      </span>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description card */}
                      <div className="glass-card p-5 mb-6">
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2.5 mb-7">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm lg:text-[15px] text-gray-600 dark:text-gray-400"
                          >
                            <HiArrowRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200/50 dark:border-primary-500/15 tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action links — mobile visible */}
                      <div className="flex items-center gap-4 lg:hidden">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          Source Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors"
                        >
                          <HiExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
