"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";
import Link from "next/link";
import Image from "next/image";
import SectionColorWash from "@/components/SectionColorWash";
import HiddenDoodles from "@/components/HiddenDoodles";
import CursorTrail from "@/components/CursorTrail";

const HOVER_COLOR = "var(--color-indigo)";

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

  useAnimationFrame(() => {
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
      <motion.span
        className="inline-block w-[2px] h-[1.1em] ml-1 align-middle rounded-full"
        style={{ backgroundColor: DISCIPLINES[currentIndex].color }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Horizontal marquee rows                                           */
/* ------------------------------------------------------------------ */

const TOP_ROW1 = [
  "/images/projects/fine-art/painting-1.jpeg",
  "/images/projects/the-bonsai/forest-1.jpg",
  "/images/projects/interior-renderings/theater.jpg",
  "/images/projects/photography/photo-3.jpeg",
  "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
  "/images/projects/graphic-design/growth-cover.jpg",
];

const TOP_ROW2 = [
  "/images/projects/sketchbook/sketch-1.jpg",
  "/images/projects/fine-art/painting-3.jpeg",
  "/images/projects/kissinger-takes-paris/kissinger-1.jpg",
  "/images/projects/interior-renderings/bathroom.jpg",
  "/images/projects/photography/photo-5.jpeg",
  "/images/projects/the-bonsai/dungeon-1.jpg",
];

const BOT_ROW1 = [
  "/images/projects/lost-city-of-zeloria/zeloria-3.jpg",
  "/images/projects/fine-art/painting-5.jpeg",
  "/images/projects/photography/photo-1.jpeg",
  "/images/projects/sketchbook/mexico.jpg",
  "/images/projects/graphic-design/album-1.jpg",
  "/images/projects/the-bonsai/hoarder-1.jpg",
];

const BOT_ROW2 = [
  "/images/projects/interior-renderings/night-render.jpg",
  "/images/projects/fine-art/painting-7.jpeg",
  "/images/projects/photography/photo-7.jpeg",
  "/images/projects/sketchbook/sketch-5.jpg",
  "/images/projects/fine-art/painting-4.jpeg",
  "/images/projects/the-bonsai/bts.jpeg",
];

function MarqueeRow({
  images,
  direction,
  speed,
  height,
}: {
  images: string[];
  direction: "left" | "right";
  speed: number;
  height: string;
}) {
  const doubled = [...images, ...images];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3"
        animate={{ x: [from, to] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-[300px] ${height} rounded-2xl overflow-hidden relative`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1 = "Sarah R.";
  const line2 = "Lavin";

  const line1Chars = useMemo(() => line1.split(""), []);
  const line2Chars = useMemo(() => line2.split(""), []);

  return (
    <SectionColorWash index={0}>
      <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M6 26L8 18L22 4L28 10L14 24L6 26Z' fill='%23CBE6C7' stroke='%2328536B' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M8 18L14 24' stroke='%2328536B' stroke-width='1' stroke-linecap='round'/%3E%3Cpath d='M6 26L4 28' stroke='%238FB78F' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 4 28, auto" }}>
        <CursorTrail />
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#8FB78F", top: "5%", left: "-10%" }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#B4CCCF", top: "20%", right: "-5%" }}
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full opacity-[0.06] blur-3xl"
            style={{ background: "#CBE6C7", bottom: "10%", left: "20%" }}
            animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "#28536B", bottom: "5%", right: "15%" }}
            animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Hidden doodles — revealed on hover */}
        <HiddenDoodles containerRef={containerRef} />

        {/* Center content */}
        <div className="relative z-20 text-center px-6 pt-32 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-poppins)] text-lg text-[var(--color-indigo)] font-medium tracking-wide mb-3">
              Hey, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-poppins)] font-semibold text-[16vw] md:text-[9vw] text-[var(--color-charcoal)] leading-[1] mb-4"
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
            className="font-[family-name:var(--font-poppins)] text-xl md:text-2xl font-light mb-8 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <TypingDiscipline />
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/work" className="px-8 py-3.5 bg-[var(--color-indigo)] text-white rounded-full text-sm tracking-wider font-medium hover:bg-[#1d4255] transition-colors shadow-lg shadow-[var(--color-indigo)]/20">
              See My Work
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-[var(--color-indigo)] text-[var(--color-indigo)] rounded-full text-sm tracking-wider font-medium hover:bg-[var(--color-indigo)] hover:text-white transition-colors">
              Say Hello
            </Link>
          </motion.div>
        </div>

        {/* Bottom 3 marquee rows */}
        <div className="relative z-10 flex flex-col gap-3 mt-6 mb-4">
          <MarqueeRow images={TOP_ROW1} direction="left" speed={35} height="h-[200px]" />
          <MarqueeRow images={BOT_ROW1} direction="right" speed={35} height="h-[200px]" />
          <MarqueeRow images={BOT_ROW2} direction="left" speed={35} height="h-[200px]" />
        </div>
      </section>
    </SectionColorWash>
  );
}
