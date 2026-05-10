"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/work/${project.slug}`} className="group block relative">
        {/* Thumbnail */}
        <div
          className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4"
          style={{ backgroundColor: project.color }}
        >
          {project.thumbnail && !project.thumbnail.includes("placeholder") ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <span className="font-[family-name:var(--font-instrument-serif)] text-white/80 text-3xl italic text-center leading-tight">
                {project.title}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl text-[var(--color-charcoal)] italic group-hover:text-[var(--color-coral)] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-charcoal)]/60 mt-1">
              {project.category}
            </p>
          </div>
          {project.year && (
            <span className="text-xs text-[var(--color-charcoal)]/40 mt-1 shrink-0">
              {project.year}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
