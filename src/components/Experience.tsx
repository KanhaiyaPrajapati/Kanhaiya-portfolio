"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiLocationMarker, HiCalendar } from "react-icons/hi";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-gray-50/50 dark:bg-dark-100/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(rgba(99,102,241,0.06)_1px,transparent_1px)]" />

      <div className="section-container relative">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and key accomplishments"
        />

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 shrink-0">
                    <HiBriefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 md:p-8 hover:shadow-xl hover:shadow-primary-500/5 transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg mt-1">
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
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="flex gap-3 group"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary-400 shrink-0 group-hover:bg-accent-400 transition-colors" />
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech used bar */}
                  <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Redux",
                        "Material UI",
                        "Node.js",
                        "MongoDB",
                        "REST APIs",
                        "Agile",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
