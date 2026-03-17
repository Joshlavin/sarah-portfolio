"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/projects/the-bonsai/forest-1.jpg", alt: "The Bonsai forest set" },
  { src: "/images/projects/fine-art/painting-1.jpeg", alt: "Oil painting" },
  { src: "/images/projects/interior-renderings/bathroom.jpg", alt: "Interior rendering" },
  { src: "/images/projects/photography/photo-1.jpeg", alt: "Photography" },
  { src: "/images/projects/lost-city-of-zeloria/zeloria-1.jpg", alt: "Lost City of Zeloria" },
  { src: "/images/projects/graphic-design/growth-cover.jpg", alt: "Album artwork" },
  { src: "/images/projects/sketchbook/sketch-1.jpg", alt: "Sketchbook illustration" },
  { src: "/images/projects/fine-art/painting-3.jpeg", alt: "Oil painting" },
  { src: "/images/projects/kissinger-takes-paris/kissinger-1.jpg", alt: "Kissinger Takes Paris" },
  { src: "/images/projects/interior-renderings/theater.jpg", alt: "Theater rendering" },
  { src: "/images/projects/photography/photo-5.jpeg", alt: "Photography" },
  { src: "/images/projects/the-bonsai/dungeon-1.jpg", alt: "The Bonsai dungeon" },
  { src: "/images/projects/fine-art/painting-5.jpeg", alt: "Oil painting" },
  { src: "/images/projects/graphic-design/flight-school.png", alt: "Promotional design" },
  { src: "/images/projects/photography/photo-3.jpeg", alt: "Photography" },
  { src: "/images/projects/lost-city-of-zeloria/zeloria-3.jpg", alt: "Lost City of Zeloria" },
  { src: "/images/projects/the-bonsai/hoarder-1.jpg", alt: "The Bonsai hoarder house" },
  { src: "/images/projects/interior-renderings/night-render.jpg", alt: "Night rendering" },
  { src: "/images/projects/sketchbook/mexico.jpg", alt: "Mexico illustration" },
  { src: "/images/projects/fine-art/painting-7.jpeg", alt: "Oil painting" },
  { src: "/images/projects/photography/photo-7.jpeg", alt: "Photography" },
  { src: "/images/projects/the-bonsai/bts.jpeg", alt: "Behind the scenes" },
  { src: "/images/projects/graphic-design/album-1.jpg", alt: "Album artwork" },
  { src: "/images/projects/sketchbook/sketch-5.jpg", alt: "Sketchbook illustration" },
];

function MarqueeRow({
  images,
  direction,
  duration,
  width,
  height,
}: {
  images: typeof galleryImages;
  direction: "left" | "right";
  duration: number;
  width: string;
  height: string;
}) {
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative mb-4 last:mb-0">
      <motion.div
        className="flex gap-4"
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className={`flex-shrink-0 ${width} ${height} rounded-xl overflow-hidden relative`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 200px, 300px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GalleryMarquee() {
  const row1 = galleryImages.slice(0, 8);
  const row2 = galleryImages.slice(8, 16);
  const row3 = galleryImages.slice(16, 24);

  return (
    <section className="py-16 overflow-hidden">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal)]/40 mb-3">A Glimpse</p>
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl italic text-[var(--color-charcoal)]">Across the studio</h2>
      </motion.div>

      <MarqueeRow images={row1} direction="left" duration={40} width="w-64" height="h-44" />
      <MarqueeRow images={row2} direction="right" duration={45} width="w-72" height="h-48" />
      <MarqueeRow images={row3} direction="left" duration={50} width="w-56" height="h-40" />
    </section>
  );
}
