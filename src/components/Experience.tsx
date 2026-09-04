"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiLocationMarker, HiCalendar } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";
import {
  useReducedMotion,
  fadeUp,
  softSpring,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="section-padding relative bg-gray-50/50 dark:bg-dark-100/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)]" />

      <div className="section-container relative">
        <SectionHeading
          eyebrow="02 · Career"
          title="Experience"
          subtitle="My professional journey and key accomplishments"
        />

        <div className="max-w-4xl mx-auto">
          {/* Continuous animated timeline spine */}
          <div className="relative">
            <motion.div
              initial={reduced ? false : { scaleY: 0 }}
              whileInView={reduced ? undefined : { scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute left-6 top-4 bottom-4 w-px origin-top bg-gradient-to-b from-primary-500 via-accent-500 to-primary-400/40 hidden md:block"
            />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={reduced ? undefined : fadeUp}
                initial={reduced ? false : "hidden"}
                whileInView={reduced ? undefined : "show"}
                viewport={{ once: true, margin: "-60px" }}
                className="relative mb-10 last:mb-0"
              >
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center relative z-10">
                    <motion.div
                      whileInView={
                        reduced || !exp.current
                          ? undefined
                          : {
                              boxShadow: [
                                "0 0 0 0 rgba(99,102,241,0.4)",
                                "0 0 0 10px rgba(99,102,241,0)",
                              ],
                            }
                      }
                      transition={{ duration: 1.8, repeat: Infinity }}
                      whileHover={reduced ? undefined : { scale: 1.12, rotate: 6 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 shrink-0"
                    >
                      <HiBriefcase className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={reduced ? undefined : { y: -4 }}
                    transition={softSpring}
                    className="flex-1 glass-card p-6 md:p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-shadow duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-500/15 text-green-700 dark:text-green-400">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                              </span>
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold text-base mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <HiCalendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <motion.ul
                      variants={reduced ? undefined : staggerContainer(0.08, 0.15)}
                      initial={reduced ? false : "hidden"}
                      whileInView={reduced ? undefined : "show"}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={reduced ? undefined : staggerItem}
                          className="flex gap-3 group"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-primary-400 shrink-0 group-hover:bg-accent-400 group-hover:scale-125 transition-all" />
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Tech used bar — per-entry */}
                    <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={reduced ? undefined : { y: -2, scale: 1.05 }}
                            transition={softSpring}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
