"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { ImageSection } from "@/data/projects";
import { notFound } from "next/navigation";
import Lightbox from "@/components/Lightbox";
import ImageCompare from "@/components/ImageCompare";

function isVideo(src: string) {
  return /\.(mp4|mov|webm)$/i.test(src);
}

function MediaTile({
  src,
  alt,
  onClick,
  bgColor,
  className = "",
  sizes = "(max-width: 768px) 50vw, 370px",
  aspect = "aspect-square",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  bgColor: string;
  className?: string;
  sizes?: string;
  aspect?: string;
}) {
  const video = isVideo(src);
  return (
    <div
      className={`relative ${aspect} rounded-xl overflow-hidden ${onClick && !video ? "cursor-pointer" : ""} group ${className}`}
      style={{ backgroundColor: bgColor }}
      onClick={video ? undefined : onClick}
    >
      {video ? (
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    notFound();
  }

  // Build a flat list of all media for the lightbox + adjacent navigation
  const sections: ImageSection[] = project.sections ?? (project.images ? [{ label: "", images: project.images }] : []);
  const flatMedia: string[] = sections.flatMap((s) => [
    ...(s.images ?? []),
    ...(s.compares?.flatMap((c) => [c.before, c.after]) ?? []),
  ]);
  // Lightbox can only handle still images, not video — filter those out
  const lightboxImages = flatMedia.filter((m) => !isVideo(m));

  // Find adjacent projects for navigation
  const currentIndex = projects.indexOf(project);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Hero: prefer thumbnail, fall back to first media item
  const heroSrc = project.thumbnail || flatMedia[0];
  const heroIsVideo = heroSrc ? isVideo(heroSrc) : false;

  return (
    <>
      {/* Hero text */}
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

      {/* Hero image */}
      {heroSrc && (
        <motion.section
          className="px-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`relative aspect-video rounded-2xl overflow-hidden ${heroIsVideo ? "" : "cursor-pointer"}`}
              style={{ backgroundColor: project.color }}
              onClick={
                heroIsVideo
                  ? undefined
                  : () => {
                      const idx = lightboxImages.indexOf(heroSrc);
                      setLightboxIndex(idx >= 0 ? idx : 0);
                    }
              }
            >
              {heroIsVideo ? (
                <video
                  src={heroSrc}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={heroSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Details + sidebar */}
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

            {project.type && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
                  Type
                </h3>
                <p className="text-sm text-[var(--color-charcoal)]/70">
                  {project.type}
                </p>
              </div>
            )}

            {project.studio && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
                  Studio
                </h3>
                <p className="text-sm text-[var(--color-charcoal)]/70">
                  {project.studio}
                </p>
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

          {/* Details copy */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.details && (
              <p className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed">
                {project.details}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sectioned galleries */}
      {sections.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {sections.map((section) => {
              const sectionItemCount = (section.images?.length ?? 0) + (section.compares?.length ?? 0);
              const itemNoun = section.compares && section.compares.length > 0 ? "comparison" : "item";
              return (
                <div key={section.label || "main"}>
                  {section.label && (
                    <motion.div
                      className="mb-8 flex items-baseline gap-4"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-4xl italic text-[var(--color-charcoal)]">
                        {section.label}
                      </h2>
                      <span className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40">
                        {sectionItemCount} {sectionItemCount === 1 ? itemNoun : `${itemNoun}s`}
                      </span>
                      <div className="flex-1 h-px bg-[var(--color-charcoal)]/10" />
                    </motion.div>
                  )}

                  {/* Before/After compare blocks */}
                  {section.compares && section.compares.length > 0 && (
                    <div className="space-y-12 mb-12">
                      {section.compares.map((pair) => (
                        <motion.div
                          key={pair.before + pair.after}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <ImageCompare
                            before={pair.before}
                            after={pair.after}
                            beforeLabel={pair.beforeLabel ?? "Rendering"}
                            afterLabel={pair.afterLabel ?? "Built"}
                            alt={`${project.title}, ${pair.caption ?? "comparison"}`}
                          />
                          {pair.caption && (
                            <p className="mt-3 text-xs uppercase tracking-widest text-[var(--color-charcoal)]/50">
                              {pair.caption}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Standard image grid */}
                  {section.images && section.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.images.map((src, i) => (
                        <MediaTile
                          key={src}
                          src={src}
                          alt={`${project.title}${section.label ? ", " + section.label : ""} ${i + 1}`}
                          bgColor={project.color}
                          onClick={() => {
                            const idx = lightboxImages.indexOf(src);
                            if (idx >= 0) setLightboxIndex(idx);
                          }}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                          aspect={isVideo(src) ? "aspect-video" : "aspect-[4/3]"}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

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
      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          alt={project.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
