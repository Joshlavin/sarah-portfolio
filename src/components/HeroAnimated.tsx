"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";
import Link from "next/link";
import Image from "next/image";
import SectionColorWash from "@/components/SectionColorWash";

const HOVER_COLOR = "var(--color-indigo)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
  }, []);
  return isMobile;
}

function ProximityLetter({
  char,
  index,
  containerRef,
}: {
  char: string;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const mouseRef = useMousePositionRef(containerRef);
  const proximity = useMotionValue(0);
  const isMobile = useIsMobile();

  useAnimationFrame(() => {
    if (isMobile) return;
    if (!letterRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = letterRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2 - containerRect.left;
    const cy = rect.top + rect.height / 2 - containerRect.top;
    const dist = Math.sqrt(
      (mouseRef.current.x - cx) ** 2 + (mouseRef.current.y - cy) ** 2
    );
    const radius = 90;
    const ratio = dist / (radius / 2);
    const falloff = Math.exp(-(ratio * ratio) / 2);
    proximity.set(falloff);
  });

  const scale = useTransform(proximity, [0, 1], [1, 1.12]);
  const yOffset = useTransform(proximity, [0, 1], [0, -8]);
  const rotate = useTransform(proximity, [0, 1], [0, (index % 2 === 0 ? 1 : -1) * 6]);
  const color = useTransform(
    proximity,
    [0, 0.3, 1],
    ["var(--color-charcoal)", "var(--color-charcoal)", HOVER_COLOR]
  );

  if (char === " ") return <span className="inline-block w-[0.25em]" />;

  if (isMobile) {
    return <span className="inline-block text-[var(--color-charcoal)]">{char}</span>;
  }

  return (
    <motion.span
      ref={letterRef}
      className="inline-block cursor-default will-change-transform"
      style={{ scale, y: yOffset, rotate, color }}
    >
      {char}
    </motion.span>
  );
}

const DISCIPLINES = [
  { text: "Production Designer", color: "#2966E3" },
  { text: "Set Designer", color: "#111349" },
  { text: "Concept Artist", color: "#2966E3" },
  { text: "3D Visualizer", color: "#111349" },
  { text: "Graphic Designer", color: "#2966E3" },
];

function TypingDiscipline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = DISCIPLINES[currentIndex].text;

    if (!isDeleting && displayed === word) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % DISCIPLINES.length);
      return;
    }

    const speed = isDeleting ? 40 : 70;
    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? word.slice(0, displayed.length - 1)
          : word.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, currentIndex]);

  return (
    <span style={{ color: DISCIPLINES[currentIndex].color }}>
      {displayed}
      <span
        className="inline-block w-[4px] h-[0.85em] ml-1.5 align-[-0.05em] rounded-full animate-blink"
        style={{ backgroundColor: DISCIPLINES[currentIndex].color }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CSS-based marquee (much lighter than Framer Motion)               */
/* ------------------------------------------------------------------ */

// ROW 1 — production design + paintings (warm, story-rich)
const ROW1 = [
  "/images/projects/the-bonsai/stills/the-bonsai-stills-01.jpg",
  "/images/projects/wake-up-dead-man/wake-up-dead-man-11.jpg",
  "/images/projects/apple-tv-emmy-house/apple-tv-emmy-house-severance-lounge.jpg",
  "/images/projects/inside-out/inside-out-01.jpg",
  "/images/projects/happy-gilmore-2/happy-gilmore-2-01.jpg",
  "/images/projects/all-summer-in-a-day/all-summer-in-a-day-01.jpg",
];

// ROW 2 — visdev + production design + 3D (cool, atmospheric)
const ROW2 = [
  "/images/projects/apple-tv-century-city/renderings/apple-tv-century-city-render-01.jpg",
  "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-01.jpg",
  "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-03.jpg",
  "/images/projects/luxury-add-on/luxury-add-on-10.jpg",
  "/images/projects/double-time/stills/double-time-stills-01.jpg",
  "/images/projects/victorian-house/studies/victorian-house-studies-01.jpg",
  "/images/projects/album-artwork/album-artwork-01.jpg",
];

// ROW 3 - built work: events, sets, renders
const ROW3 = [
  "/images/projects/apple-tv-century-city/event-photos/apple-tv-century-city-event-04.jpg",
  "/images/projects/back-to-me/stills/back-to-me-stills-04.jpg",
  "/images/projects/apple-tv-emmy-house/apple-tv-emmy-house-the-studio-screening-room.jpg",
  "/images/projects/wake-up-dead-man/wake-up-dead-man-13.jpg",
  "/images/projects/luxury-add-on/luxury-add-on-07.jpg",
  "/images/projects/the-bonsai/stills/the-bonsai-stills-02.jpg",
];

function MarqueeRow({
  images,
  reverse,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] h-[140px] md:w-[300px] md:h-[200px] rounded-2xl overflow-hidden relative"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 200px, 300px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const line1 = "Sarah";
  const line2 = "Lavin";

  const line1Chars = useMemo(() => line1.split(""), []);
  const line2Chars = useMemo(() => line2.split(""), []);

  return (
    <SectionColorWash index={0}>
      <section
        ref={containerRef}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      >
        {/* Background blobs - static on mobile, animated on desktop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#111349", top: "5%", left: "-10%" }}
          />
          <div
            className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#63D5F2", top: "20%", right: "-5%" }}
          />
          <div
            className="absolute w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "#CFEF69", bottom: "10%", left: "20%" }}
          />
          <div
            className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#2966E3", bottom: "5%", right: "15%" }}
          />
        </div>

        {/* Center content */}
        <div className="relative z-20 text-center px-6 pt-28 md:pt-32 pb-4 md:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-instrument-serif)] italic text-2xl md:text-3xl text-[var(--color-indigo)] mb-2">
              Hey, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            className="font-poster text-[26vw] md:text-[15vw] text-[var(--color-charcoal)] leading-[0.82] mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          >
            <span className="block md:inline">
              {line1Chars.map((char, i) => (
                <ProximityLetter key={i} char={char} index={i} containerRef={containerRef} />
              ))}
            </span>
            <span className="block md:inline md:ml-[0.18em]">
              {line2Chars.map((char, i) => (
                <ProximityLetter key={i} char={char} index={i + line1Chars.length} containerRef={containerRef} />
              ))}
            </span>
          </motion.h1>

          <motion.div
            className="font-poster text-3xl md:text-5xl mb-7 md:mb-9 h-9 md:h-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <TypingDiscipline />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/work" className="px-7 md:px-9 py-3.5 md:py-4 bg-[var(--color-indigo)] text-white rounded-full text-sm md:text-base tracking-wider font-semibold hover:bg-[var(--color-charcoal)] transition-colors shadow-lg shadow-[var(--color-indigo)]/20">
              See My Work
            </Link>
            <Link href="/contact" className="px-7 md:px-9 py-3.5 md:py-4 border-2 border-[var(--color-indigo)] text-[var(--color-indigo)] rounded-full text-sm md:text-base tracking-wider font-semibold hover:bg-[var(--color-indigo)] hover:text-white transition-colors">
              Say Hi
            </Link>
          </motion.div>
        </div>

        {/* Bottom marquee rows - CSS animated */}
        <div className="relative z-10 flex flex-col gap-2 md:gap-3 mt-4 md:mt-6 mb-2 md:mb-4">
          <MarqueeRow images={ROW1} />
          <MarqueeRow images={ROW2} reverse />
          <MarqueeRow images={ROW3} />
        </div>
      </section>
    </SectionColorWash>
  );
}
