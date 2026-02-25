"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                className="group glass-card overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
              >
                {/* Project Image / Placeholder */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-400/10 dark:from-primary-500/5 dark:via-accent-500/5 dark:to-primary-400/5 overflow-hidden">
                  {/* Abstract pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 opacity-20 dark:opacity-10">
                      {[0.65, 0.9, 0.45, 0.8, 0.5, 0.95, 0.7, 0.55, 0.85].map((opacity, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-lg bg-primary-500"
                          style={{
                            opacity,
                            transform: `rotate(${i * 5}deg)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project icon & category */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-dark/80 backdrop-blur-sm flex items-center justify-center shadow-xl mb-3">
                      <HiCode className="w-8 h-8 text-primary-500" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-dark/80 backdrop-blur-sm text-primary-600 dark:text-primary-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredId === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end justify-center pb-6 gap-4 z-20"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors flex items-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-primary-500/80 backdrop-blur-sm text-white text-sm font-medium hover:bg-primary-500 transition-colors flex items-center gap-2"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
