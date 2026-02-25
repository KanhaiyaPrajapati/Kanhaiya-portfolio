"use client";

import { motion } from "framer-motion";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "@/lib/data";

const PARTICLES = [
  { id: 0, size: 4.2, x: 12, y: 8, duration: 5.1, delay: 0.3 },
  { id: 1, size: 2.8, x: 85, y: 15, duration: 6.4, delay: 1.2 },
  { id: 2, size: 5.5, x: 42, y: 72, duration: 4.8, delay: 0.7 },
  { id: 3, size: 3.1, x: 68, y: 35, duration: 7.2, delay: 1.8 },
  { id: 4, size: 4.8, x: 25, y: 90, duration: 5.6, delay: 0.1 },
  { id: 5, size: 2.3, x: 91, y: 55, duration: 6.1, delay: 1.5 },
  { id: 6, size: 5.1, x: 7, y: 48, duration: 4.3, delay: 0.9 },
  { id: 7, size: 3.6, x: 53, y: 22, duration: 7.8, delay: 0.4 },
  { id: 8, size: 4.4, x: 78, y: 82, duration: 5.3, delay: 1.1 },
  { id: 9, size: 2.6, x: 35, y: 63, duration: 6.7, delay: 1.9 },
  { id: 10, size: 5.8, x: 62, y: 5, duration: 4.5, delay: 0.6 },
  { id: 11, size: 3.3, x: 18, y: 38, duration: 7.1, delay: 1.3 },
  { id: 12, size: 4.1, x: 95, y: 71, duration: 5.9, delay: 0.2 },
  { id: 13, size: 2.9, x: 48, y: 95, duration: 6.3, delay: 1.7 },
  { id: 14, size: 5.3, x: 72, y: 18, duration: 4.7, delay: 0.8 },
  { id: 15, size: 3.7, x: 5, y: 85, duration: 7.5, delay: 1.4 },
  { id: 16, size: 4.6, x: 58, y: 42, duration: 5.2, delay: 0.5 },
  { id: 17, size: 2.4, x: 82, y: 58, duration: 6.8, delay: 1.6 },
  { id: 18, size: 5.0, x: 30, y: 12, duration: 4.1, delay: 1.0 },
  { id: 19, size: 3.4, x: 45, y: 78, duration: 7.3, delay: 0.0 },
];

function FloatingParticles() {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-400/20 dark:bg-primary-400/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-16"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gradient-orb absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary-500/20 dark:bg-primary-500/10" />
        <div className="gradient-orb-2 absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-500/20 dark:bg-accent-500/10" />
        <div className="gradient-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-300/10 dark:bg-primary-500/5" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)]" />

      <FloatingParticles />

      <div className="relative z-10 section-container text-center px-4">
        {/* Profile image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block cursor-pointer group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1 mx-auto animate-pulse-glow group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-shadow duration-300">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-100 flex items-center justify-center overflow-hidden">
                <span className="text-4xl md:text-5xl font-bold gradient-text">
                  KP
                </span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/30 dark:border-primary-500/20 animate-[spin_20s_linear_infinite]" style={{ margin: "-8px" }} />
          </a>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        {/* Title with typing effect look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-balance"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="/Kanhaiya_frontend_Enginner.pdf"
            download
            className="btn-primary"
          >
            <HiDownload className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            View Projects
            <HiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
            { icon: HiOutlineMail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
