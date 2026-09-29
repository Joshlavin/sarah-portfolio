"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Design reel: silent looping preview while on screen, full playback with sound on click. */
export default function ReelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [withSound, setWithSound] = useState(false);

  // Only run the silent preview while the reel is visible (saves data on phones).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (withSound) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [withSound]);

  const playWithSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.loop = false;
    setWithSound(true);
    v.play().catch(() => {});
  };

  return (
    <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-end justify-between gap-6 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-[family-name:var(--font-instrument-serif)] italic text-2xl md:text-3xl text-[var(--color-indigo)] mb-1">
              Watch
            </p>
            <h2 className="font-poster text-6xl md:text-[8.5rem] leading-[1.02] md:leading-[0.95] text-[var(--color-charcoal)]">
              The Reel
            </h2>
          </div>
          <p className="hidden md:block text-sm uppercase tracking-[0.2em] text-[var(--color-charcoal)]/50 pb-3">
            Film · TV · Experiential &nbsp;/&nbsp; 1:30
          </p>
        </motion.div>

        <motion.div
          className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-[var(--color-charcoal)] shadow-2xl shadow-[var(--color-charcoal)]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/Sarah-Lavin-Design-Reel-Widescreen-Under-25MB.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            controls={withSound}
            aria-label="Sarah Lavin production design reel"
          />

          {!withSound && (
            <button
              onClick={playWithSound}
              className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-black/10 to-transparent"
              aria-label="Play reel with sound"
            >
              <span className="flex items-center gap-3 md:gap-4 rounded-full bg-[var(--color-lime)] text-[var(--color-charcoal)] pl-2 pr-4 py-2 md:pl-4 md:pr-8 md:py-4 shadow-xl transition-transform duration-300 group-hover:scale-105">
                <span className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-full bg-[var(--color-charcoal)] text-[var(--color-lime)]">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-6 md:h-6 ml-0.5" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="font-poster text-lg md:text-3xl tracking-wide">Play with sound</span>
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
