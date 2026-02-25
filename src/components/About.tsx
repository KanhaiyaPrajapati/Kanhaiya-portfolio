"use client";

import { motion } from "framer-motion";
import { HiLocationMarker, HiAcademicCap, HiCode, HiBriefcase } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { personalInfo, education, certifications } from "@/lib/data";

const infoCards = [
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Surat, Gujarat",
    detail: "Originally from Surat",
  },
  {
    icon: HiBriefcase,
    label: "Experience",
    value: "Frontend Developer",
    detail: "Koli Infotech Pvt. Ltd.",
  },
  {
    icon: HiCode,
    label: "Specialization",
    value: "React Ecosystem",
    detail: "React, Next.js, React Native",
  },
  {
    icon: HiAcademicCap,
    label: "Education",
    value: "B.C.A — CGPA 8.1",
    detail: "VNSGU, Surat",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                {personalInfo.bio}
              </p>
            </div>

            {/* Info grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {infoCards.map((card) => (
                <motion.div
                  key={card.label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-5 group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 transition-colors">
                      <card.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium">
                        {card.label}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
                        {card.value}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Education Card */}
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center">
                    <HiAcademicCap className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {education.degree}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {education.university}
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-2.5 py-1 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium">
                      CGPA: {education.cgpa}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">
                      {education.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {education.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center">
                  <FaCertificate className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="pl-4 border-l-2 border-accent-400/50"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {cert.title}
                    </p>
                    <p className="text-xs text-accent-600 dark:text-accent-400 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "6+" },
                  { label: "Technologies", value: "25+" },
                  { label: "Experience", value: "2+ Year" },
                  { label: "Methodologies", value: "Agile" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
