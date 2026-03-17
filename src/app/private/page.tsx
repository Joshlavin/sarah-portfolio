"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { privateProjects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

const PASSWORD = "sarahlavin2025";

export default function PrivatePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!authenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl italic text-[var(--color-charcoal)] mb-4">
            Private Work
          </h1>
          <p className="text-[var(--color-charcoal)]/50 text-sm mb-8">
            This section is password protected. Enter the password to view.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className="w-full px-5 py-3.5 rounded-full border border-[var(--color-charcoal)]/15 bg-transparent text-[var(--color-charcoal)] text-sm tracking-wider text-center focus:outline-none focus:border-[var(--color-coral)] transition-colors"
              autoFocus
            />
            {error && (
              <p className="text-sm text-red-500">
                Incorrect password. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-[var(--color-charcoal)] text-[var(--color-cream)] rounded-full text-sm tracking-wider hover:bg-[var(--color-coral)] transition-colors"
            >
              View Work
            </button>
          </form>
          <Link
            href="/"
            className="inline-block mt-8 text-xs uppercase tracking-widest text-[var(--color-charcoal)]/30 hover:text-[var(--color-coral)] transition-colors"
          >
            &larr; Back to portfolio
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/"
              className="text-sm uppercase tracking-widest text-[var(--color-charcoal)]/40 hover:text-[var(--color-coral)] transition-colors mb-8 inline-block"
            >
              &larr; Back to portfolio
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/50 mb-3">
              Private Work
            </p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-7xl italic text-[var(--color-charcoal)] mb-4">
              Netflix Premiere Events
            </h1>
            <p className="text-lg text-[var(--color-charcoal)]/50 font-light max-w-2xl">
              Production design for Netflix premiere events. Immersive sets and
              environments designed from concept through 3D rendering to on-site
              installation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {privateProjects.map((project, projectIndex) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: projectIndex * 0.1 }}
            >
              {/* Project header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-3">
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
                <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl italic text-[var(--color-charcoal)] mb-4">
                  {project.title}
                </h2>
                <p className="text-lg text-[var(--color-charcoal)]/60 font-light max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Main image */}
              {project.images && project.images.length > 0 && (
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden mb-6 cursor-pointer"
                  style={{ backgroundColor: project.color }}
                  onClick={() =>
                    setLightboxState({ images: project.images!, index: 0 })
                  }
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1152px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Details + tools */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  {project.tools && project.tools.length > 0 && (
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
                        Tools
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
                </div>
                <div className="md:col-span-2">
                  {project.details && (
                    <p className="text-[var(--color-charcoal)]/60 leading-relaxed">
                      {project.details}
                    </p>
                  )}
                </div>
              </div>

              {/* Image grid */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      style={{ backgroundColor: project.color }}
                      onClick={() =>
                        setLightboxState({
                          images: project.images!,
                          index: i + 1,
                        })
                      }
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
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxState && (
          <Lightbox
            images={lightboxState.images}
            initialIndex={lightboxState.index}
            alt="Private project"
            onClose={() => setLightboxState(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
