"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white/50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 mb-20">
          <div className="max-w-sm">
            <span className="font-[family-name:var(--font-instrument-serif)] text-4xl text-white italic block mb-4">
              Sarah Lavin
            </span>
            <p className="text-sm leading-relaxed">
              Designer and visual artist based in Los Angeles. Currently available for film, events, and immersive experiences.
            </p>
          </div>

          <div className="flex gap-16 md:gap-20">
            {/* Navigation */}
            <div>
              <h4 className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-5">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/work" className="text-sm hover:text-[var(--color-coral)] transition-colors">Work</Link>
                <Link href="/about" className="text-sm hover:text-[var(--color-coral)] transition-colors">About</Link>
                <Link href="/contact" className="text-sm hover:text-[var(--color-coral)] transition-colors">Contact</Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white/25 text-[10px] uppercase tracking-[0.2em] mb-5">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sarahrlavin@gmail.com"
                  className="text-sm hover:text-[var(--color-coral)] transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://www.instagram.com/sarahlavin.creative/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[var(--color-coral)] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/sarah-lavin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[var(--color-coral)] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">&copy; {new Date().getFullYear()} Sarah Lavin</p>
          <p className="text-[11px] text-white/25">Los Angeles, California</p>
        </div>
      </div>
    </footer>
  );
}
