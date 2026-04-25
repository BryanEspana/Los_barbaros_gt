"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Los Bárbaros en vivo"
          fill
          className="object-cover object-center"
          priority
          loading="eager"
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,15,0.4) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,15,0.92) 100%)",
          }}
        />
        {/* Neon tint overlay */}
        <div
          className="absolute inset-0 mix-blend-color"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.1), transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 relative inline-block"
        >
          {/* Logo Circle Container */}
          <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.15)] flex items-center justify-center bg-black/40 backdrop-blur-sm group">
            <Image
              src="/images/logo.jpeg"
              alt="Los Bárbaros"
              width={420}
              height={420}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Inner glow/tint */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
          {/* Decorative outer rings */}
          <div className="absolute inset-0 -m-4 border border-white/5 rounded-full pointer-events-none animate-[pulse_4s_infinite]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Música en vivo que <br className="hidden md:block" />
          <span className="text-gradient">transforma</span> tu evento
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Energía, versatilidad y el mejor repertorio <br className="hidden md:block" />
          para una noche <span className="text-white font-bold underline decoration-zinc-500 underline-offset-4">inolvidable</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#contacto");
            }}
            className="glow-button text-lg px-10 py-4"
            id="hero-cta-button"
          >
           Cotizar evento
          </a>
          <a
            href="#nosotros"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#nosotros");
            }}
            className="text-[var(--text-secondary)] hover:text-white font-medium 
              transition-colors duration-300 flex items-center gap-2 group"
          >
            Conoce más
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-[5]" />
    </section>
  );
}
