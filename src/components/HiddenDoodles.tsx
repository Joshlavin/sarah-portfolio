"use client";

import { useEffect, useRef, useCallback } from "react";
import rough from "roughjs";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";

/**
 * Hidden sketchy doodles scattered around the hero name area.
 * They start invisible and reveal when the mouse gets close —
 * like uncovering pencil drawings hidden on the page.
 */

interface HiddenDoodleConfig {
  /** Tailwind positioning classes */
  className: string;
  width: number;
  height: number;
  /** Reveal radius in px — how close the mouse needs to get */
  radius?: number;
  draw: (rc: ReturnType<typeof rough.canvas>) => void;
}

const MATCHA = "#8FB78F";
const INDIGO = "#28536B";
const AZURE = "#B4CCCF";
const PISTACHIO = "#CBE6C7";

const DOODLES: HiddenDoodleConfig[] = [
  // --- Around "Sarah" line ---

  // Small flower, left of S
  {
    className: "top-[22%] left-[6%] md:top-[28%] md:left-[10%]",
    width: 70,
    height: 70,
    radius: 120,
    draw: (rc) => {
      // Petals
      rc.ellipse(35, 25, 20, 12, { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      rc.ellipse(25, 35, 12, 20, { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      rc.ellipse(45, 35, 12, 20, { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      rc.ellipse(35, 45, 20, 12, { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      // Center
      rc.circle(35, 35, 8, { fill: MATCHA, stroke: MATCHA, fillStyle: "solid", roughness: 1.5 });
      // Stem
      rc.path("M35,52 C34,58 36,64 34,70", { stroke: MATCHA, strokeWidth: 1.5, roughness: 2 });
    },
  },

  // Star burst, above the R.
  {
    className: "top-[18%] left-[40%] md:top-[22%] md:left-[42%]",
    width: 50,
    height: 50,
    radius: 100,
    draw: (rc) => {
      const cx = 25, cy = 25;
      for (let a = 0; a < 360; a += 45) {
        const rad = (a * Math.PI) / 180;
        const len = 18 + (a % 90 === 0 ? 4 : 0);
        rc.line(
          cx + Math.cos(rad) * 5, cy + Math.sin(rad) * 5,
          cx + Math.cos(rad) * len, cy + Math.sin(rad) * len,
          { stroke: INDIGO, strokeWidth: 1.8, roughness: 2 }
        );
      }
    },
  },

  // Swirl, right of the period
  {
    className: "top-[26%] right-[8%] md:top-[30%] md:right-[14%]",
    width: 60,
    height: 60,
    radius: 110,
    draw: (rc) => {
      rc.path(
        "M30,30 C30,22 36,18 40,24 C44,30 38,40 30,40 C22,40 16,32 20,24 C24,16 34,12 42,18 C50,24 46,40 36,46",
        { stroke: AZURE, strokeWidth: 2, roughness: 1.8 }
      );
    },
  },

  // --- Around "Lavin" line ---

  // Little house sketch, left of L
  {
    className: "top-[42%] left-[4%] md:top-[42%] md:left-[16%]",
    width: 55,
    height: 55,
    radius: 110,
    draw: (rc) => {
      // Walls
      rc.rectangle(10, 28, 35, 25, { stroke: INDIGO, strokeWidth: 1.8, roughness: 2 });
      // Roof
      rc.path("M8,28 L27,8 L47,28", { stroke: INDIGO, strokeWidth: 2, roughness: 2 });
      // Door
      rc.rectangle(22, 38, 12, 15, { stroke: INDIGO, strokeWidth: 1.5, roughness: 2 });
      // Window
      rc.rectangle(14, 32, 7, 7, { stroke: INDIGO, strokeWidth: 1.2, roughness: 2 });
    },
  },

  // Paint palette, right of n
  {
    className: "top-[42%] right-[4%] md:top-[42%] md:right-[16%]",
    width: 65,
    height: 55,
    radius: 120,
    draw: (rc) => {
      // Palette shape
      rc.path(
        "M32,8 C50,4 60,16 58,30 C56,44 44,52 28,50 C12,48 4,36 8,22 C12,8 20,8 32,8",
        { stroke: MATCHA, strokeWidth: 2, roughness: 1.8 }
      );
      // Paint blobs
      rc.circle(22, 20, 8, { fill: INDIGO, stroke: INDIGO, fillStyle: "solid", roughness: 1.5 });
      rc.circle(38, 16, 6, { fill: AZURE, stroke: AZURE, fillStyle: "solid", roughness: 1.5 });
      rc.circle(44, 28, 7, { fill: PISTACHIO, stroke: PISTACHIO, fillStyle: "solid", roughness: 1.5 });
      rc.circle(30, 36, 6, { fill: MATCHA, stroke: MATCHA, fillStyle: "solid", roughness: 1.5 });
    },
  },

  // Mountain landscape, below and left
  {
    className: "top-[54%] left-[8%] md:top-[52%] md:left-[22%]",
    width: 80,
    height: 45,
    radius: 110,
    draw: (rc) => {
      // Mountains
      rc.path("M5,40 L25,10 L40,30 L55,8 L75,40", { stroke: INDIGO, strokeWidth: 2, roughness: 2 });
      // Sun
      rc.circle(65, 14, 10, { stroke: MATCHA, strokeWidth: 1.5, roughness: 2 });
      // Ground line
      rc.line(2, 40, 78, 40, { stroke: INDIGO, strokeWidth: 1.5, roughness: 2 });
    },
  },

  // Film clapperboard, below and right
  {
    className: "top-[54%] right-[8%] md:top-[52%] md:right-[22%]",
    width: 55,
    height: 50,
    radius: 110,
    draw: (rc) => {
      // Board body
      rc.rectangle(5, 18, 45, 28, { stroke: AZURE, strokeWidth: 2, roughness: 2 });
      // Top clapper
      rc.path("M5,18 L12,6 L50,6 L50,18", { stroke: AZURE, strokeWidth: 2, roughness: 2 });
      // Diagonal stripes on clapper
      rc.line(18, 6, 14, 18, { stroke: AZURE, strokeWidth: 1.5, roughness: 2 });
      rc.line(28, 6, 24, 18, { stroke: AZURE, strokeWidth: 1.5, roughness: 2 });
      rc.line(38, 6, 34, 18, { stroke: AZURE, strokeWidth: 1.5, roughness: 2 });
    },
  },

  // Pencil, upper right corner
  {
    className: "top-[18%] right-[3%] md:top-[24%] md:right-[8%]",
    width: 50,
    height: 70,
    radius: 100,
    draw: (rc) => {
      // Pencil body (rotated)
      rc.path("M20,8 L30,8 L30,50 L20,50 Z", { stroke: PISTACHIO, strokeWidth: 1.8, roughness: 2, fill: PISTACHIO, fillStyle: "hachure", fillWeight: 1 });
      // Tip
      rc.path("M20,50 L25,65 L30,50", { stroke: INDIGO, strokeWidth: 1.8, roughness: 2 });
      // Eraser
      rc.rectangle(20, 4, 10, 6, { stroke: MATCHA, strokeWidth: 1.5, roughness: 2, fill: MATCHA, fillStyle: "solid" });
    },
  },

  // Cat face, lower left area
  {
    className: "bottom-[46%] left-[2%] md:bottom-[44%] md:left-[6%]",
    width: 50,
    height: 50,
    radius: 100,
    draw: (rc) => {
      // Face
      rc.circle(25, 28, 20, { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      // Ears
      rc.path("M14,16 L10,4 L20,14", { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      rc.path("M36,16 L40,4 L30,14", { stroke: MATCHA, strokeWidth: 1.8, roughness: 2 });
      // Eyes
      rc.circle(20, 26, 4, { fill: INDIGO, stroke: INDIGO, fillStyle: "solid", roughness: 1 });
      rc.circle(30, 26, 4, { fill: INDIGO, stroke: INDIGO, fillStyle: "solid", roughness: 1 });
      // Nose
      rc.path("M25,30 L23,33 L27,33 Z", { fill: MATCHA, stroke: MATCHA, fillStyle: "solid", roughness: 1.5 });
      // Whiskers
      rc.line(10, 30, 18, 29, { stroke: MATCHA, strokeWidth: 1, roughness: 2 });
      rc.line(10, 34, 18, 33, { stroke: MATCHA, strokeWidth: 1, roughness: 2 });
      rc.line(32, 29, 40, 30, { stroke: MATCHA, strokeWidth: 1, roughness: 2 });
      rc.line(32, 33, 40, 34, { stroke: MATCHA, strokeWidth: 1, roughness: 2 });
    },
  },

  // Lightning bolt, scattered
  {
    className: "top-[34%] right-[2%] md:top-[36%] md:right-[6%]",
    width: 35,
    height: 50,
    radius: 90,
    draw: (rc) => {
      rc.path("M22,2 L8,22 L18,22 L12,48 L28,24 L18,24 L22,2", {
        stroke: AZURE,
        strokeWidth: 2,
        roughness: 2,
        fill: AZURE,
        fillStyle: "hachure",
        fillWeight: 0.8,
        hachureGap: 4,
      });
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Single hidden doodle — canvas + proximity-based opacity           */
/* ------------------------------------------------------------------ */

function HiddenDoodle({
  config,
  containerRef,
}: {
  config: HiddenDoodleConfig;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseRef = useMousePositionRef(containerRef);
  const revealed = useMotionValue(0);
  const peakRevealed = useRef(0);

  // Draw the roughjs doodle once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = config.width * dpr;
    canvas.height = config.height * dpr;
    canvas.style.width = `${config.width}px`;
    canvas.style.height = `${config.height}px`;
    ctx.scale(dpr, dpr);

    const rc = rough.canvas(canvas);
    config.draw(rc);
  }, [config]);

  // Track mouse proximity on every frame
  useAnimationFrame(() => {
    if (!wrapperRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2 - containerRect.left;
    const cy = rect.top + rect.height / 2 - containerRect.top;
    const dist = Math.sqrt(
      (mouseRef.current.x - cx) ** 2 + (mouseRef.current.y - cy) ** 2
    );
    const radius = config.radius ?? 120;
    const ratio = dist / radius;
    // Smooth gaussian-ish falloff
    const proximity = Math.exp(-(ratio * ratio) * 2);

    // Ratchet up — once revealed, stay revealed (slowly fade if mouse leaves)
    const target = Math.max(proximity, peakRevealed.current * 0.992);
    peakRevealed.current = target;
    revealed.set(target);
  });

  const opacity = useTransform(revealed, [0, 0.3, 1], [0, 0.15, 0.7]);
  const scale = useTransform(revealed, [0, 0.3, 1], [0.7, 0.9, 1]);
  const rotate = useTransform(revealed, [0, 1], [-8, 0]);

  return (
    <motion.div
      ref={wrapperRef}
      className={`absolute pointer-events-none ${config.className}`}
      style={{ opacity, scale, rotate }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: config.width, height: config.height }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mouse position hook (relative to container)                       */
/* ------------------------------------------------------------------ */

function useMousePositionRef(containerRef: React.RefObject<HTMLDivElement | null>) {
  const pos = useRef({ x: -1000, y: -1000 });

  const handleMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    pos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return pos;
}

/* ------------------------------------------------------------------ */
/*  Exported wrapper                                                  */
/* ------------------------------------------------------------------ */

export default function HiddenDoodles({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden hidden md:block">
      {DOODLES.map((d, i) => (
        <HiddenDoodle key={i} config={d} containerRef={containerRef} />
      ))}
    </div>
  );
}
