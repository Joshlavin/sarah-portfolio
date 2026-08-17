"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionColorWash from "@/components/SectionColorWash";

const skills = [
  {
    title: "Ideate",
    description: "Concept art, research, and world-building: deciding how a place should feel before anything exists.",
    link: "/work/category/visual-development",
    color: "#B4CCCF",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M20 4C20 4 28 14 28 20C28 26 24.4 32 20 36" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 4C20 4 12 14 12 20C12 26 15.6 32 20 36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="13" x2="34" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="6" y1="27" x2="34" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Visualize",
    description: "3D models, textures, and photoreal renders that show a client exactly what they are getting.",
    link: "/work/category/3d-visualization",
    color: "#8FB78F",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4L36 14V28L20 38L4 28V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 4L20 38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14L20 24L36 14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Build",
    description: "Build drawings, cut files, in-world graphics, and on-site install, through to the finished set.",
    link: "/work/category/production-design",
    color: "#28536B",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M15 28L12 34M25 28L28 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14L18 20H10L14 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 16L28 20H20L24 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="30" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function CapabilitiesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionColorWash index={2}>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-poppins)] font-semibold text-4xl md:text-5xl text-[var(--color-charcoal)]">
              What I Do
            </h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-charcoal)]/50 font-light max-w-2xl mx-auto">
              I work across the art department: concept, set design, drafting,
              graphics, and build. Most projects I take from first sketch to
              finished install.
            </p>
          </motion.div>

          {/* 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {skills.map((skill, i) => {
              return (
                <motion.div
                  key={skill.title}
                  className="col-span-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link href={skill.link} className="block h-full">
                    <motion.div
                      className="relative h-full rounded-3xl p-6 flex flex-col justify-between overflow-hidden border border-[var(--color-charcoal)]/5 cursor-pointer"
                      animate={{
                        backgroundColor: hovered === i ? skill.color : "#ffffff",
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* Background glow */}
                      <AnimatePresence>
                        {hovered === i && (
                          <motion.div
                            className="absolute inset-0 opacity-20"
                            initial={{ scale: 0, borderRadius: "100%" }}
                            animate={{ scale: 2.5, borderRadius: "0%" }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ backgroundColor: skill.color, transformOrigin: "center" }}
                          />
                        )}
                      </AnimatePresence>

                      <div className="relative z-10">
                        <motion.div
                          animate={{ color: hovered === i ? "#ffffff" : skill.color }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.icon}
                        </motion.div>
                      </div>

                      <div className="relative z-10">
                        <motion.h3
                          className="font-[family-name:var(--font-poppins)] font-semibold text-base mb-1"
                          animate={{ color: hovered === i ? "#ffffff" : "var(--color-charcoal)" }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.title}
                        </motion.h3>
                        <motion.p
                          className="text-xs leading-relaxed"
                          animate={{ color: hovered === i ? "rgba(255,255,255,0.8)" : "rgba(26,26,26,0.45)" }}
                          transition={{ duration: 0.3 }}
                        >
                          {skill.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionColorWash>
  );
}
