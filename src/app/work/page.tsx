"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionColorWash from "@/components/SectionColorWash";
import { projects, categories, categoryColors } from "@/data/projects";
import type { Category } from "@/data/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "Projects">("Projects");

  const filtered =
    activeFilter === "Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionColorWash index={1}>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/50 mb-3">
              Portfolio
            </p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl md:text-7xl italic text-[var(--color-charcoal)] mb-4">
              Work
            </h1>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setActiveFilter("Projects")}
              className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
                activeFilter === "Projects"
                  ? "bg-[var(--color-charcoal)] text-white"
                  : "border border-[var(--color-charcoal)]/10 text-[var(--color-charcoal)]/50 hover:border-[var(--color-charcoal)]/30"
              }`}
            >
              Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
                  activeFilter === cat
                    ? "text-white"
                    : "border border-[var(--color-charcoal)]/10 text-[var(--color-charcoal)]/50 hover:border-[var(--color-charcoal)]/30"
                }`}
                style={
                  activeFilter === cat
                    ? { backgroundColor: categoryColors[cat] }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </SectionColorWash>
  );
}
