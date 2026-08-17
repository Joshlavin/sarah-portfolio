"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/the-bonsai/stills/the-bonsai-stills-01.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/85" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
          Available for new projects
        </p>
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-5xl md:text-7xl italic text-white mb-6">
          Let&apos;s build something together.
        </h2>
        <p className="text-lg text-white/50 mb-12 max-w-md mx-auto font-light">
          Have a project in mind? Whether you need it concepted, rendered, drafted, or built, I&apos;d love to hear about it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-10 py-4 bg-[var(--color-coral)] text-white rounded-full text-sm tracking-wider hover:bg-white hover:text-[var(--color-charcoal)] transition-all duration-300"
          >
            Get in Touch
          </Link>
          <Link
            href="/work"
            className="px-10 py-4 border border-white/20 text-white/70 rounded-full text-sm tracking-wider hover:border-white/60 hover:text-white transition-all duration-300"
          >
            View Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
