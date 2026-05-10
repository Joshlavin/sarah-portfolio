"use client";

import { motion } from "framer-motion";
import SectionColorWash from "@/components/SectionColorWash";

const socials = [
  {
    label: "Email",
    value: "sarahrlavin@gmail.com",
    href: "mailto:sarahrlavin@gmail.com",
  },
  {
    label: "Instagram",
    value: "@sarahrlavinart",
    href: "https://www.instagram.com/sarahrlavinart/",
  },
  {
    label: "Sketchbook",
    value: "@drawmylifeout",
    href: "https://www.instagram.com/drawmylifeout/",
  },
  {
    label: "LinkedIn",
    value: "sarah-lavin",
    href: "https://linkedin.com/in/sarah-lavin",
  },
];

export default function ContactPage() {
  return (
    <SectionColorWash index={3}>
      <section className="min-h-screen pt-32 pb-24 px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/50 mb-3">
              Contact
            </p>
            <h1 className="font-[family-name:var(--font-instrument-serif)] text-6xl md:text-7xl italic text-[var(--color-charcoal)] mb-4">
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-[var(--color-charcoal)]/50 font-light max-w-lg mb-16">
              Have a project, collaboration, or just want to say hi? I&apos;d
              love to hear from you.
            </p>
          </motion.div>

          {/* Contact links */}
          <div className="space-y-0">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-b border-[var(--color-charcoal)]/10 hover:border-[var(--color-coral)]/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 block mb-1">
                    {social.label}
                  </span>
                  <span className="font-[family-name:var(--font-instrument-serif)] text-2xl md:text-3xl italic text-[var(--color-charcoal)] group-hover:text-[var(--color-coral)] transition-colors">
                    {social.value}
                  </span>
                </div>
                <span className="text-[var(--color-charcoal)]/20 group-hover:text-[var(--color-coral)] transition-colors text-2xl">
                  &rarr;
                </span>
              </motion.a>
            ))}
          </div>

          {/* Availability */}
          <motion.div
            className="mt-16 p-8 rounded-2xl border border-[var(--color-charcoal)]/5 bg-white/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/40 mb-3">
              Currently available for
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Film & TV Production Design",
                "Premiere & Event Design",
                "Interior Design Rendering",
                "Freelance Set Design",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-[var(--color-charcoal)]/10 text-sm text-[var(--color-charcoal)]/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.p
            className="mt-16 text-sm text-[var(--color-charcoal)]/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Based in Los Angeles. Available for remote and on-site work.
          </motion.p>
        </div>
      </section>
    </SectionColorWash>
  );
}
