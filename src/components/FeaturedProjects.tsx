"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionColorWash from "@/components/SectionColorWash";
import { projects } from "@/data/projects";

const featuredSlugs = ["wake-up-dead-man", "the-bonsai", "frankenstein", "luxury-add-on", "oil-paintings"];

export default function FeaturedProjects() {
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug));
  const sortedFeatured = featuredSlugs
    .map((slug) => featured.find((p) => p.slug === slug))
    .filter(Boolean) as typeof featured;

  const heroProject = sortedFeatured[0];
  const secondaryProjects = sortedFeatured.slice(1);

  return (
    <SectionColorWash index={1}>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-end justify-between mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/50 mb-3">Selected Work</p>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-6xl italic text-[var(--color-charcoal)]">Featured Projects</h2>
            </div>
            <Link href="/work" className="hidden md:block text-sm text-[var(--color-charcoal)]/50 hover:text-[var(--color-coral)] transition-colors">View all &rarr;</Link>
          </motion.div>

          {heroProject && (
            <motion.div className="mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href={`/work/${heroProject.slug}`} className="group block relative">
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden" style={{ backgroundColor: heroProject.color }}>
                  {heroProject.thumbnail ? (
                    <Image
                      src={heroProject.thumbnail}
                      alt={heroProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  ) : heroProject.images && heroProject.images.length > 0 ? (
                    <Image
                      src={heroProject.images[0]}
                      alt={heroProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 1280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-[family-name:var(--font-instrument-serif)] text-white/60 text-5xl italic">{heroProject.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="px-3 py-1 rounded-full text-xs text-white/90 mb-3 inline-block" style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                      {heroProject.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-3xl md:text-5xl italic text-white mb-2">{heroProject.title}</h3>
                    <p className="text-white/70 text-sm md:text-base max-w-2xl line-clamp-2">{heroProject.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, i) => (
              <motion.div key={project.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/work/${project.slug}`} className="group block relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ backgroundColor: project.color }}>
                    {project.thumbnail && !project.thumbnail.includes("placeholder") ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-[family-name:var(--font-instrument-serif)] text-white/60 text-3xl italic">{project.title}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl md:text-2xl italic text-white drop-shadow-lg">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.category}{project.year ? ` · ${project.year}` : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/work" className="text-sm text-[var(--color-charcoal)]/50 hover:text-[var(--color-coral)] transition-colors">View all projects &rarr;</Link>
          </div>
        </div>
      </section>
    </SectionColorWash>
  );
}
