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
    const radius = 50;
    const ratio = dist / (radius / 2);
    const falloff = Math.exp(-(ratio * ratio) / 2);
    proximity.set(falloff);
  });

  const scale = useTransform(proximity, [0, 1], [1, 1.15]);
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
  { text: "Production Designer", color: "#28536B" },
  { text: "Illustrator", color: "#8FB78F" },
  { text: "Fine Artist", color: "#28536B" },
  { text: "Visual Storyteller", color: "#8FB78F" },
  { text: "Set Designer", color: "#28536B" },
  { text: "3D Artist", color: "#8FB78F" },
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
        className="inline-block w-[2px] h-[1.1em] ml-1 align-middle rounded-full animate-blink"
        style={{ backgroundColor: DISCIPLINES[currentIndex].color }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CSS-based marquee (much lighter than Framer Motion)               */
/* ------------------------------------------------------------------ */

const ROW1 = [
  "/images/projects/fine-art/painting-1.jpeg",
  "/images/projects/the-bonsai/forest-1.jpg",
  "/images/projects/interior-renderings/theater.jpg",
  "/images/projects/photography/photo-3.jpeg",
  "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
  "/images/projects/graphic-design/growth-cover.jpg",
];

const ROW2 = [
  "/images/projects/lost-city-of-zeloria/zeloria-3.jpg",
  "/images/projects/fine-art/painting-5.jpeg",
  "/images/projects/photography/photo-1.jpeg",
  "/images/projects/sketchbook/mexico.jpg",
  "/images/projects/graphic-design/album-1.jpg",
  "/images/projects/the-bonsai/hoarder-1.jpg",
];

const ROW3 = [
  "/images/projects/interior-renderings/night-render.jpg",
  "/images/projects/fine-art/painting-7.jpeg",
  "/images/projects/photography/photo-7.jpeg",
  "/images/projects/sketchbook/sketch-5.jpg",
  "/images/projects/fine-art/painting-4.jpeg",
  "/images/projects/the-bonsai/bts.jpeg",
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
  const line1 = "Sarah R.";
  const line2 = "Lavin";

  const line1Chars = useMemo(() => line1.split(""), []);
  const line2Chars = useMemo(() => line2.split(""), []);

  return (
    <SectionColorWash index={0}>
      <section
        ref={containerRef}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={!isMobile ? { cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M6 26L8 18L22 4L28 10L14 24L6 26Z' fill='%23CBE6C7' stroke='%2328536B' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M8 18L14 24' stroke='%2328536B' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M6 26L4 28' stroke='%238FB78F' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 4 28, auto" } : undefined}
      >
        {/* Cursor trail - desktop only, loaded dynamically */}
        {!isMobile && <CursorTrailLazy />}

        {/* Background blobs - static on mobile, animated on desktop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#8FB78F", top: "5%", left: "-10%" }}
          />
          <div
            className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#B4CCCF", top: "20%", right: "-5%" }}
          />
          <div
            className="absolute w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "#CBE6C7", bottom: "10%", left: "20%" }}
          />
          <div
            className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#28536B", bottom: "5%", right: "15%" }}
          />
        </div>

        {/* Hidden doodles - desktop only */}
        {!isMobile && <HiddenDoodlesLazy containerRef={containerRef} />}

        {/* Center content */}
        <div className="relative z-20 text-center px-6 pt-28 md:pt-32 pb-4 md:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-poppins)] text-base md:text-lg text-[var(--color-indigo)] font-medium tracking-wide mb-3">
              Hey, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-poppins)] font-semibold text-[14vw] md:text-[9vw] text-[var(--color-charcoal)] leading-[1] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          >
            <span className="block">
              {line1Chars.map((char, i) => (
                <ProximityLetter key={i} char={char} index={i} containerRef={containerRef} />
              ))}
            </span>
            <span className="block">
              {line2Chars.map((char, i) => (
                <ProximityLetter key={i} char={char} index={i + line1Chars.length} containerRef={containerRef} />
              ))}
            </span>
          </motion.h1>

          <motion.div
            className="font-[family-name:var(--font-poppins)] text-lg md:text-2xl font-light mb-6 md:mb-8 h-8 md:h-10"
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
            <Link href="/work" className="px-6 md:px-8 py-3 md:py-3.5 bg-[var(--color-indigo)] text-white rounded-full text-sm tracking-wider font-medium hover:bg-[#1d4255] transition-colors shadow-lg shadow-[var(--color-indigo)]/20">
              See My Work
            </Link>
            <Link href="/contact" className="px-6 md:px-8 py-3 md:py-3.5 border-2 border-[var(--color-indigo)] text-[var(--color-indigo)] rounded-full text-sm tracking-wider font-medium hover:bg-[var(--color-indigo)] hover:text-white transition-colors">
              Say Hello
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

/* Lazy-loaded desktop-only components */
import dynamic from "next/dynamic";

const CursorTrailLazy = dynamic(() => import("@/components/CursorTrail"), { ssr: false });
const HiddenDoodlesLazy = dynamic(() => import("@/components/HiddenDoodles"), { ssr: false });
