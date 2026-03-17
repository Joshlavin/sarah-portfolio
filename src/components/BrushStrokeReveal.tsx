"use client";

import { motion } from "framer-motion";

export default function BrushStrokeReveal() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.9, duration: 0.3 }}
    >
      {/* Coral stroke */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-coral)]"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Warm cream stroke */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-pink)]"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Charcoal base */}
      <motion.div
        className="absolute inset-0 bg-[var(--color-charcoal)]"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}
