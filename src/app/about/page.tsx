"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionColorWash from "@/components/SectionColorWash";

const filmography = [
  {
    title: "Lies We Follow",
    role: "Graphic Designer & Art Dept PA",
    type: "Feature Film",
    year: "2026",
  },
  {
    title: "Real Housewives of Beverly Hills Season 21 Reunion",
    role: "Design Contractor, Studio Connelly",
    type: "Television",
    year: "2025",
  },
  {
    title: "America's Most Wanted",
    role: "Design Contractor, Studio Connelly",
    type: "Television",
    year: "2025",
  },
  {
    title: "Double Time",
    role: "Production Designer",
    type: "Short Film",
    year: "2024",
  },
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
    year: "2024",
  },
  {
    title: "Coop",
    role: "Production Designer",
    type: "Short Film",
    year: "2023",
  },
  {
    title: "Back to Me",
    role: "Production Designer",
    type: "Short Film",
    year: "2022",
  },
];

const events = [
  {
    title: "Apple TV Emmy Activation",
    role: "Junior Production Designer",
    type: "Century City Mall",
    year: "2026",
  },
  {
    title: "Palm Royale",
    role: "Junior Production Designer",
    type: "FYC Event, Apple TV",
    year: "2026",
  },
  {
    title: "Stick",
    role: "Junior Production Designer",
    type: "FYC Event, Apple TV",
    year: "2026",
  },
  {
    title: "Margo's Got Money Troubles",
    role: "Junior Production Designer",
    type: "New York Premiere, Apple TV",
    year: "2026",
  },
  {
    title: "The Last Thing He Told Me",
    role: "Junior Production Designer",
    type: "Bookmarked Live Event, Reese's Book Club",
    year: "2026",
  },
  {
    title: "Severance Immersive Fan Experience & Cast Q&A",
    role: "Junior Production Designer",
    type: "Bell Works, Apple TV",
    year: "2025",
  },
  {
    title: "F1 The Movie",
    role: "Junior Production Designer",
    type: "FYC Event, Apple TV",
    year: "2025",
  },
  {
    title: "The Morning Show Season 4",
    role: "Junior Production Designer",
    type: "New York Premiere, Apple TV",
    year: "2025",
  },
  {
    title: "iHeart Radio × The Lumineers",
    role: "Design Contractor, Studio Connelly",
    type: "Live Event",
    year: "2025",
  },
  {
    title: "iHeart Radio Podcast Awards",
    role: "Design Contractor, Studio Connelly",
    type: "Live Event",
    year: "2025",
  },
  {
    title: "Goonies House Restoration",
    role: "Design Contractor, Studio Connelly",
    type: "Restoration",
    year: "2025",
  },
  {
    title: "Jay Kelly",
    role: "Junior Production Designer",
    type: "Los Angeles Premiere, Netflix",
    year: "2025",
  },
  {
    title: "Frankenstein",
    role: "Junior Production Designer",
    type: "Los Angeles Premiere, Netflix",
    year: "2025",
  },
  {
    title: "Frankenstein Halloween Experience",
    role: "Junior Production Designer",
    type: "Brand Activation, Netflix",
    year: "2025",
  },
  {
    title: "Wake Up Dead Man: A Knives Out Mystery",
    role: "Junior Production Designer",
    type: "Los Angeles Premiere, Netflix",
    year: "2025",
  },
  {
    title: "Apple TV Emmy House",
    role: "Junior Production Designer",
    type: "Brand Activation, Apple TV",
    year: "2025",
  },
  {
    title: "Happy Gilmore 2",
    role: "Junior Production Designer",
    type: "New York Premiere, Netflix",
    year: "2025",
  },
];

const tools = [
  "Rhino",
  "Enscape",
  "Lumion",
  "SketchUp",
  "Photoshop",
  "Illustrator",
  "Procreate",
  "Lightroom",
  "Premiere",
  "Figma",
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
              <div className="relative aspect-[3/4] rounded-2xl bg-[var(--color-warm-gray)] overflow-hidden">
                <Image
                  src="/images/sarah/sarah-about.jpg"
                  alt="Sarah Lavin"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover"
                  priority
                />
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
                  I&apos;m a Los Angeles–based designer and visual artist
                  bouncing between film sets, 3D worlds, paintings, and
                  whatever medium lets me tell the story best.
                </p>
                <p>
                  I work across the art department: concept art and
                  world-building, set design and drafting, in-world graphics,
                  and build drawings. On most projects I&apos;m doing all of
                  it: modeling and texturing a space in Rhino, rendering it in
                  Enscape so everyone can see it before it exists, then
                  drafting it out and seeing it through install.
                </p>
                <p>
                  No matter the medium, I&apos;m drawn to projects that
                  blend atmosphere, storytelling, and strong visual identity,
                  and I&apos;m usually sketching ideas somewhere between
                  deadlines, dog walks, and an iced vanilla latte.
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

          {/* Events and Brand Activations */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl italic text-[var(--color-charcoal)] mb-12">
              Events &amp; Brand Activations
            </h2>
            <div className="space-y-0">
              {events.map((event, i) => (
                <motion.div
                  key={event.title}
                  className="py-6 border-b border-[var(--color-charcoal)]/10 grid grid-cols-12 gap-4 items-baseline"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="col-span-1">
                    <span className="text-sm text-[var(--color-charcoal)]/40 font-mono">
                      {event.year}
                    </span>
                  </div>
                  <div className="col-span-6 md:col-span-5">
                    <h3 className="font-[family-name:var(--font-instrument-serif)] text-xl italic text-[var(--color-charcoal)]">
                      {event.title}
                    </h3>
                  </div>
                  <div className="col-span-3 md:col-span-3">
                    <span className="text-sm text-[var(--color-charcoal)]/60">
                      {event.role}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-right">
                    <span className="text-xs text-[var(--color-charcoal)]/40 uppercase tracking-wider">
                      {event.type}
                    </span>
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
