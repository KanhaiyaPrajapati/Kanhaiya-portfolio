"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon: IconType | null;
  color: string;
  level: number;
  index: number;
}

function SkillBadge({ name, icon: Icon, color, level, index }: SkillBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div className="glass-card p-4 flex flex-col items-center gap-3 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 cursor-default hover:-translate-y-1">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: hovered ? `${color}15` : undefined,
          }}
        >
          {Icon ? (
            <Icon
              className="w-7 h-7 transition-all duration-300"
              style={{ color: hovered ? color : undefined }}
            />
          ) : (
            <span
              className="text-2xl font-bold transition-all duration-300"
              style={{ color: hovered ? color : undefined }}
            >
              SQL
            </span>
          )}
        </div>

        {/* Name */}
        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
          {name}
        </p>

        {/* Level bar */}
        <div className="w-full h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}88)`,
            }}
          />
        </div>

        {/* Level tooltip */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium pointer-events-none whitespace-nowrap"
        >
          {level}%
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className="section-padding relative bg-gray-50/50 dark:bg-dark-100/50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(rgba(168,85,247,0.06)_1px,transparent_1px)]" />

      <div className="section-container relative">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                activeCategory === i
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                  : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200/50 dark:border-white/5"
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills grid - show active category */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              level={skill.level}
              index={i}
            />
          ))}
        </motion.div>

        {/* All skills overview (compact) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glass-card p-6 md:p-8"
        >
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6 text-center">
            Methodologies & Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile Development",
              "Scrum",
              "Responsive Design",
              "RESTful APIs",
              "Mobile-First",
              "Component-Based Architecture",
              "State Management",
              "Server-Side Rendering",
              "SEO Optimization",
              "Cross-Browser Compatibility",
              "Unit Testing",
              "Version Control",
            ].map((method) => (
              <span
                key={method}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
