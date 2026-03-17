"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { motion } from "framer-motion";

interface DoodleConfig {
  className: string;
  width: number;
  height: number;
  delay: number;
  opacity?: number;
  draw: (rc: ReturnType<typeof rough.canvas>, ctx: CanvasRenderingContext2D) => void;
}

const BLUE = "#3B6FC0";

const DOODLES: DoodleConfig[] = [
  // ——— Large organic blob, left side ———
  {
    className: "top-[20%] -left-[4%]",
    width: 280,
    height: 340,
    delay: 0.2,
    opacity: 0.55,
    draw: (rc) => {
      rc.path(
        "M60,30 C120,-10 200,20 220,80 C240,140 260,200 220,260 C180,320 100,330 60,280 C20,230 -10,180 20,120 C50,60 30,50 60,30",
        { stroke: BLUE, strokeWidth: 2, roughness: 1.8, fill: "" }
      );
    },
  },
  // ——— Swirl, upper left ———
  {
    className: "top-[8%] left-[6%]",
    width: 60,
    height: 60,
    delay: 0.5,
    opacity: 0.6,
    draw: (rc) => {
      rc.path(
        "M30,30 C30,22 36,18 40,24 C44,30 38,40 30,40 C22,40 16,32 20,24 C24,16 34,12 42,18 C50,24 46,40 36,46 C26,52 14,44 14,32",
        { stroke: BLUE, strokeWidth: 2.2, roughness: 1.6 }
      );
    },
  },
  // ——— Diamond sparkle, left ———
  {
    className: "top-[38%] left-[8%]",
    width: 50,
    height: 50,
    delay: 0.7,
    opacity: 0.65,
    draw: (rc) => {
      // 4-point diamond star
      rc.path("M25,2 C27,18 27,18 25,25", { stroke: BLUE, strokeWidth: 2.2, roughness: 1 });
      rc.path("M25,25 C27,32 27,32 25,48", { stroke: BLUE, strokeWidth: 2.2, roughness: 1 });
      rc.path("M2,25 C18,27 18,27 25,25", { stroke: BLUE, strokeWidth: 2.2, roughness: 1 });
      rc.path("M25,25 C32,27 32,27 48,25", { stroke: BLUE, strokeWidth: 2.2, roughness: 1 });
    },
  },
  // ——— Small diamond sparkle, lower left ———
  {
    className: "top-[58%] left-[14%]",
    width: 30,
    height: 30,
    delay: 1.0,
    opacity: 0.55,
    draw: (rc) => {
      rc.path("M15,2 C16,11 16,11 15,15", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M15,15 C16,19 16,19 15,28", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M2,15 C11,16 11,16 15,15", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M15,15 C19,16 19,16 28,15", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
    },
  },
  // ——— Flowing line, bottom left going off edge ———
  {
    className: "bottom-[5%] -left-[2%]",
    width: 320,
    height: 120,
    delay: 0.9,
    opacity: 0.45,
    draw: (rc) => {
      rc.path(
        "M-10,100 C40,60 80,110 140,50 C200,0 240,80 300,40 C340,10 360,60 380,30",
        { stroke: BLUE, strokeWidth: 2, roughness: 1.8 }
      );
    },
  },
  // ——— Dots cluster, lower left ———
  {
    className: "bottom-[18%] left-[10%]",
    width: 30,
    height: 30,
    delay: 1.3,
    opacity: 0.5,
    draw: (rc) => {
      rc.circle(8, 8, 7, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
      rc.circle(22, 6, 5, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
      rc.circle(14, 22, 6, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
    },
  },

  // ——— Large organic blob, right side ———
  {
    className: "top-[10%] -right-[6%]",
    width: 320,
    height: 400,
    delay: 0.3,
    opacity: 0.5,
    draw: (rc) => {
      rc.path(
        "M240,20 C300,-20 340,60 320,140 C300,220 330,280 280,340 C230,400 140,380 100,320 C60,260 40,200 80,140 C120,80 180,100 200,60 C220,20 200,40 240,20",
        { stroke: BLUE, strokeWidth: 2, roughness: 1.8, fill: "" }
      );
    },
  },
  // ——— Flowing line, top right going off edge ———
  {
    className: "-top-[2%] right-[15%]",
    width: 300,
    height: 140,
    delay: 0.15,
    opacity: 0.5,
    draw: (rc) => {
      rc.path(
        "M-20,120 C30,80 60,140 120,80 C180,20 200,100 260,40 C300,0 320,-20 340,-10",
        { stroke: BLUE, strokeWidth: 2, roughness: 1.8 }
      );
    },
  },
  // ——— Swirl, upper right ———
  {
    className: "top-[12%] right-[22%]",
    width: 55,
    height: 55,
    delay: 0.6,
    opacity: 0.6,
    draw: (rc) => {
      rc.path(
        "M28,28 C28,20 34,16 38,22 C42,28 36,38 28,38 C20,38 14,30 18,22 C22,14 32,10 40,16 C48,22 44,38 34,44 C24,50 12,42 12,30",
        { stroke: BLUE, strokeWidth: 2.2, roughness: 1.6 }
      );
    },
  },
  // ——— Large diamond sparkle, right ———
  {
    className: "top-[32%] right-[8%]",
    width: 65,
    height: 65,
    delay: 0.4,
    opacity: 0.65,
    draw: (rc) => {
      rc.path("M32,2 C34,24 34,24 32,32", { stroke: BLUE, strokeWidth: 2.5, roughness: 1 });
      rc.path("M32,32 C34,40 34,40 32,62", { stroke: BLUE, strokeWidth: 2.5, roughness: 1 });
      rc.path("M2,32 C24,34 24,34 32,32", { stroke: BLUE, strokeWidth: 2.5, roughness: 1 });
      rc.path("M32,32 C40,34 40,34 62,32", { stroke: BLUE, strokeWidth: 2.5, roughness: 1 });
    },
  },
  // ——— Medium diamond sparkle, right mid ———
  {
    className: "top-[48%] right-[12%]",
    width: 40,
    height: 40,
    delay: 0.8,
    opacity: 0.55,
    draw: (rc) => {
      rc.path("M20,3 C21,15 21,15 20,20", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M20,20 C21,25 21,25 20,37", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M3,20 C15,21 15,21 20,20", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
      rc.path("M20,20 C25,21 25,21 37,20", { stroke: BLUE, strokeWidth: 2, roughness: 1 });
    },
  },
  // ——— Dots cluster, right side ———
  {
    className: "top-[18%] right-[4%]",
    width: 25,
    height: 25,
    delay: 1.1,
    opacity: 0.45,
    draw: (rc) => {
      rc.circle(6, 6, 6, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
      rc.circle(18, 8, 5, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
    },
  },
  // ——— Flowing line, bottom right going off edge ———
  {
    className: "bottom-[8%] -right-[3%]",
    width: 280,
    height: 130,
    delay: 1.2,
    opacity: 0.45,
    draw: (rc) => {
      rc.path(
        "M-20,30 C40,100 100,10 160,80 C220,150 260,40 300,90 C320,110 340,70 360,90",
        { stroke: BLUE, strokeWidth: 2, roughness: 1.8 }
      );
    },
  },
  // ——— Small dots, bottom right ———
  {
    className: "bottom-[20%] right-[6%]",
    width: 20,
    height: 30,
    delay: 1.4,
    opacity: 0.4,
    draw: (rc) => {
      rc.circle(10, 6, 5, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
      rc.circle(6, 20, 4, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
      rc.circle(16, 24, 3, { fill: BLUE, stroke: BLUE, fillStyle: "solid", roughness: 1 });
    },
  },
];

function DoodleCanvas({ config }: { config: DoodleConfig }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    config.draw(rc, ctx);
  }, [config]);

  return (
    <motion.div
      className={`absolute pointer-events-none ${config.className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: config.opacity ?? 0.55, scale: 1 }}
      transition={{ delay: 0.8 + config.delay, duration: 0.8, ease: "easeOut" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: config.width, height: config.height }}
      />
    </motion.div>
  );
}

export default function RoughDoodles() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {DOODLES.map((d, i) => (
        <DoodleCanvas key={i} config={d} />
      ))}
    </div>
  );
}
