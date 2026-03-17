"use client";

import { motion } from "framer-motion";
import SectionColorWash from "@/components/SectionColorWash";

const filmography = [
  {
    title: "The Bonsai",
    role: "Production Designer",
    type: "Short Film",
    year: "2024",
  },
  {
    title: "Kissinger Takes Paris",
    role: "Production Designer",
    type: "Proof of Concept",
    year: "2023",
  },
];

const experience = [
  {
    role: "Production Designer",
    company: "Film & Live Events",
    period: "2021 - Present",
    description:
      "Set design, art direction, and hands-on build work for narrative short films and live events. Designed and built multi-environment sets including hand-carved foam structures, detailed interiors, and immersive environments.",
  },
  {
    role: "Visual Artist & Illustrator",
    company: "Personal & Commission Work",
    period: "2019 - Present",
    description:
      "Oil paintings, illustrations, and visual development work. World-building, character design, and visual storytelling for film and animation projects.",
  },
  {
    role: "Freelance Designer",
    company: "Various Clients",
    period: "2019 - Present",
    description:
      "3D rendering, interior design visualization, graphic design, album artwork, packaging, and promotional materials for brands, musicians, and individuals.",
  },
];

const tools = [
  "Rhino",
  "Enscape",
  "SketchUp",
  "Photoshop",
  "Illustrator",
  "Procreate",
  "Lightroom",
  "InDesign",
  "After Effects",
  "Premiere Pro",
];

export default function AboutPage() {
  return (
    <SectionColorWash index={2}>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 mb-24">
            {/* Photo */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[3/4] rounded-2xl bg-[var(--color-warm-gray)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-[family-name:var(--font-instrument-serif)] text-[var(--color-charcoal)]/30 text-2xl italic">
                    Photo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/50 mb-3">
                About
              </p>
              <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl md:text-7xl italic text-[var(--color-charcoal)] mb-8">
                Hi, I&apos;m Sarah.
              </h1>
              <div className="space-y-4 text-lg text-[var(--color-charcoal)]/60 font-light leading-relaxed">
                <p>
                  I&apos;m a designer and visual artist based in California.
                  I work across production design, illustration, fine art,
                  3D rendering, and graphic design.
                </p>
                <p>
                  I design and build immersive sets for film and live events,
                  create world-building illustrations, paint in oils, render
                  photorealistic interiors in Rhino and Enscape, and design
                  album artwork and packaging.
                </p>
                <p>
                  I make my own textures, build custom 3D models, and can take
                  a project from first sketch to finished piece. Whether
                  it&apos;s a film set, an oil painting, or a brand identity,
                  I bring the same eye for detail and storytelling.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Filmography */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl italic text-[var(--color-charcoal)] mb-12">
              Filmography
            </h2>
            <div className="space-y-0">
              {filmography.map((film, i) => (
                <motion.div
                  key={film.title}
                  className="py-6 border-b border-[var(--color-charcoal)]/10 grid grid-cols-12 gap-4 items-baseline"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="col-span-1">
                    <span className="text-sm text-[var(--color-charcoal)]/40 font-mono">
                      {film.year}
                    </span>
                  </div>
                  <div className="col-span-6 md:col-span-5">
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-[var(--color-charcoal)]">
                      {film.title}
                    </h3>
                  </div>
                  <div className="col-span-3 md:col-span-3">
                    <span className="text-sm text-[var(--color-charcoal)]/60">
                      {film.role}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-right">
                    <span className="text-xs text-[var(--color-charcoal)]/40 uppercase tracking-wider">
                      {film.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl italic text-[var(--color-charcoal)] mb-12">
              Experience
            </h2>
            <div className="space-y-0">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className="py-8 border-b border-[var(--color-charcoal)]/10 grid md:grid-cols-3 gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-1">
                      {exp.period}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-[var(--color-charcoal)] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--color-coral)] mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--color-charcoal)]/50 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl italic text-[var(--color-charcoal)] mb-8">
              Tools & Software
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-[var(--color-charcoal)]/10 text-sm text-[var(--color-charcoal)]/60 hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SectionColorWash>
  );
}
