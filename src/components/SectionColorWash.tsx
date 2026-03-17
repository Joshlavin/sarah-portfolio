"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const washes = [
  "radial-gradient(ellipse at 20% 50%, rgba(196, 83, 60, 0.05) 0%, transparent 70%)",
  "radial-gradient(ellipse at 80% 30%, rgba(184, 196, 168, 0.08) 0%, transparent 70%)",
  "radial-gradient(ellipse at 50% 80%, rgba(232, 180, 162, 0.06) 0%, transparent 70%)",
  "radial-gradient(ellipse at 30% 20%, rgba(212, 168, 67, 0.05) 0%, transparent 70%)",
];

export default function SectionColorWash({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: washes[index % washes.length],
          opacity,
        }}
      />
      {children}
    </div>
  );
}
