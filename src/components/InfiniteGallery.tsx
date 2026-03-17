"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ROW1 = [
  "/images/projects/the-bonsai/forest-1.jpg",
  "/images/projects/fine-art/painting-1.jpeg",
  "/images/projects/interior-renderings/bathroom.jpg",
  "/images/projects/photography/photo-1.jpeg",
  "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
  "/images/projects/graphic-design/growth-cover.jpg",
  "/images/projects/sketchbook/sketch-1.jpg",
  "/images/projects/fine-art/painting-3.jpeg",
];

const ROW2 = [
  "/images/projects/kissinger-takes-paris/kissinger-1.jpg",
  "/images/projects/interior-renderings/theater.jpg",
  "/images/projects/photography/photo-5.jpeg",
  "/images/projects/the-bonsai/dungeon-1.jpg",
  "/images/projects/fine-art/painting-5.jpeg",
  "/images/projects/photography/photo-3.jpeg",
  "/images/projects/lost-city-of-zeloria/zeloria-3.jpg",
  "/images/projects/graphic-design/album-1.jpg",
];

const ROW3 = [
  "/images/projects/the-bonsai/hoarder-1.jpg",
  "/images/projects/interior-renderings/night-render.jpg",
  "/images/projects/sketchbook/mexico.jpg",
  "/images/projects/fine-art/painting-7.jpeg",
  "/images/projects/photography/photo-7.jpeg",
  "/images/projects/the-bonsai/bts.jpeg",
  "/images/projects/sketchbook/sketch-5.jpg",
  "/images/projects/fine-art/painting-4.jpeg",
];

function MarqueeRow({
  images,
  direction,
  speed,
}: {
  images: string[];
  direction: "left" | "right";
  speed: number;
}) {
  const doubled = [...images, ...images];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: [from, to] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[280px] h-[200px] md:w-[340px] md:h-[240px] rounded-2xl overflow-hidden relative group"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="340px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function InfiniteGallery() {
  return (
    <section className="py-12 flex flex-col gap-4 overflow-hidden">
      <MarqueeRow images={ROW1} direction="left" speed={40} />
      <MarqueeRow images={ROW2} direction="right" speed={40} />
      <MarqueeRow images={ROW3} direction="left" speed={40} />
    </section>
  );
}
