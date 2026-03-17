"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
  ox: number;
  oy: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const animFrame = useRef<number>(0);
  const inHero = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const section = canvas.parentElement;
    if (!section) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseEnter = () => { inHero.current = true; };
    const handleMouseLeave = () => { inHero.current = false; };
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseMove = (e: MouseEvent) => {
      if (!inHero.current) return;
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        ox: (Math.random() - 0.5) * 4,
        oy: (Math.random() - 0.5) * 4,
      });
      if (points.current.length > 80) {
        points.current.shift();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 1; i < points.current.length; i++) {
        const prev = points.current[i - 1];
        const curr = points.current[i];
        prev.age += 0.5;
        curr.age += 0.5;

        const opacity = Math.max(0, 1 - curr.age / 50);
        if (opacity <= 0) continue;

        const width = Math.max(1, 6 * opacity);

        ctx.beginPath();
        ctx.moveTo(prev.x + prev.ox, prev.y + prev.oy);
        ctx.lineTo(curr.x + curr.ox, curr.y + curr.oy);
        ctx.strokeStyle = `rgba(143, 183, 143, ${opacity * 0.25})`;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(prev.x - prev.ox * 0.7, prev.y - prev.oy * 0.7);
        ctx.lineTo(curr.x - curr.ox * 0.7, curr.y - curr.oy * 0.7);
        ctx.strokeStyle = `rgba(143, 183, 143, ${opacity * 0.12})`;
        ctx.lineWidth = width * 0.6;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      if (points.current.length > 0) {
        points.current[0].age += 0.5;
      }

      points.current = points.current.filter((p) => p.age < 50);

      animFrame.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cursor-trail"
      className="hidden md:block fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
