"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionColorWash from "@/components/SectionColorWash";

const skills = [
  {
    title: "Fine Art",
    description: "Oil paintings, drawings, and explorations in color, light, and form.",
    link: "/work/category/fine-art",
    color: "#28536B",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4C13 4 6 10 6 20C6 26 10 30 16 30C18 30 19 29 19 27C19 26 18.5 25.5 18 25C17.5 24.5 17 24 17 23C17 21 19 19 21 19H24C30.6 19 36 13.6 36 7C36 5 34 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="13" cy="14" r="2.5" fill="currentColor" />
        <circle cx="20" cy="10" r="2.5" fill="currentColor" />
        <circle cx="27" cy="12" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Production Design",
    description: "From sketch to set. Film sets, events, and immersive spaces built from the ground up.",
    link: "/work/category/production-design",
    color: "#8FB78F",
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
  {
    title: "Visual Development",
    description: "World-building, environment design, and visual storytelling for film and animation.",
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
    title: "3D Visualization",
    description: "Custom 3D models in Rhino with photorealistic renders in Enscape.",
    link: "/work/category/3d-visualization",
    color: "#CBE6C7",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4L36 14V28L20 38L4 28V14L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 4L20 38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14L20 24L36 14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Photography",
    description: "Portraits, events, and documentary work through a thoughtful lens.",
    link: "/work/category/photography",
    color: "#28536B",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="22" r="3" fill="currentColor" />
        <rect x="14" y="6" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Album artwork, packaging, promotional materials, and brand collateral.",
    link: "/work/category/graphic-design",
    color: "#8FB78F",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="6" y="4" width="22" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="22" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 10L36 4V30L30 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          </motion.div>

          {/* Bento-ish layout: 2 big + 4 small */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {skills.map((skill, i) => {
              // First two span 2 cols each on desktop
              const isLarge = i < 2;
              return (
                <motion.div
                  key={skill.title}
                  className={isLarge ? "col-span-2" : "col-span-1 sm:col-span-1"}
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
