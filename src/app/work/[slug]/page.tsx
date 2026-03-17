"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Lightbox from "@/components/Lightbox";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    notFound();
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.indexOf(project);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/work"
              className="text-sm uppercase tracking-widest text-[var(--color-charcoal)]/40 hover:text-[var(--color-coral)] transition-colors mb-8 inline-block"
            >
              &larr; All Work
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span
                className="px-3 py-1 rounded-full text-xs text-white"
                style={{ backgroundColor: project.color }}
              >
                {project.category}
              </span>
              {project.year && (
                <span className="text-sm text-[var(--color-charcoal)]/40">
                  {project.year}
                </span>
              )}
            </div>

            <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-7xl italic text-[var(--color-charcoal)] mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-[var(--color-charcoal)]/60 font-light max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main image */}
      <motion.section
        className="px-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {project.images && project.images.length > 0 ? (
            <div
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              style={{ backgroundColor: project.color }}
              onClick={() => setLightboxIndex(0)}
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div
              className="aspect-video rounded-2xl overflow-hidden"
              style={{ backgroundColor: project.color }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-[family-name:var(--font-instrument-serif)] text-white/60 text-4xl italic">
                  Project Images
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Details */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {project.tools && project.tools.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
                  Tools & Software
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full border border-[var(--color-charcoal)]/10 text-xs text-[var(--color-charcoal)]/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
                Category
              </h3>
              <p className="text-sm text-[var(--color-charcoal)]/70">
                {project.category}
              </p>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.details && (
              <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed mb-8">
                {project.details}
              </p>
            )}

            {/* Image grid */}
            {project.images && project.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    style={{ backgroundColor: project.color }}
                    onClick={() => setLightboxIndex(i + 1)}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - ${i + 2}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 370px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="aspect-square rounded-xl"
                    style={{
                      backgroundColor: project.color,
                      opacity: 0.3 + n * 0.15,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="px-6 py-16 border-t border-[var(--color-charcoal)]/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group"
            >
              <span className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 block mb-1">
                Previous
              </span>
              <span className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-[var(--color-charcoal)] group-hover:text-[var(--color-coral)] transition-colors">
                &larr; {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group text-right"
            >
              <span className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 block mb-1">
                Next
              </span>
              <span className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-[var(--color-charcoal)] group-hover:text-[var(--color-coral)] transition-colors">
                {nextProject.title} &rarr;
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && project.images && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIndex}
          alt={project.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
