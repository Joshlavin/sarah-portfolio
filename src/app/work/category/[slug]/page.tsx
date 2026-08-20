"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SectionColorWash from "@/components/SectionColorWash";
import { projects, categoryMeta } from "@/data/projects";
import { notFound } from "next/navigation";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categoryMeta.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const filtered = projects.filter((p) => p.category === category.name);

  return (
    <SectionColorWash index={1}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/90 via-[var(--color-cream)]/80 to-[var(--color-cream)]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
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

            <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl md:text-8xl italic text-[var(--color-charcoal)] mt-4 mb-6">
              {category.name}
            </h1>

            <p className="text-xl md:text-2xl text-[var(--color-charcoal)]/50 font-light max-w-2xl">
              {category.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other categories */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-3xl italic text-[var(--color-charcoal)] mb-8">
            Explore other work
          </h2>
          <div className="flex flex-wrap gap-3">
            {categoryMeta
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/category/${c.slug}`}
                  className="px-5 py-2.5 rounded-full border border-[var(--color-charcoal)]/10 text-sm text-[var(--color-charcoal)]/60 hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SectionColorWash>
  );
}
