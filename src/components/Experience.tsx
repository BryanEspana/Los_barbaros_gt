"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Energía en vivo",
    description:
      "Cada show es una descarga de adrenalina. Nos entregamos al 100% en cada canción para que tu evento vibre con una energía contagiosa.",
    color: "from-zinc-400 to-zinc-500",
    glow: "rgba(255, 255, 255, 0.15)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Repertorio variado",
    description:
      "Desde rock clásico hasta pop latino actual. Nos adaptamos a cada momento: cena, brindis, fiesta. Siempre la canción perfecta.",
    color: "from-zinc-500 to-zinc-600",
    glow: "rgba(255, 255, 255, 0.15)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Experiencia en eventos",
    description:
      "Años de experiencia en bodas, corporativos, hoteles y eventos privados. Sabemos leer al público y crear la atmósfera perfecta.",
    color: "from-zinc-300 to-zinc-400",
    glow: "rgba(255, 255, 255, 0.15)",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Adaptación al público",
    description:
      "Leemos la energía de tu evento en tiempo real. Si la pista pide más rock, subimos la intensidad. Si necesita romance, bajamos las luces.",
    color: "from-zinc-400 to-zinc-600",
    glow: "rgba(255, 255, 255, 0.15)",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 flex justify-center w-full"
      style={{ paddingBottom: "10rem", paddingTop: "6rem" }}
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] translate-x-1/3" />

      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center mb-20 md:mb-24 w-full mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
            ¿Por qué elegirnos?
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center w-full"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            La <span className="text-gradient">experiencia</span> que buscas
          </h2>
          <p 
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center"
            style={{ marginTop: "1.5rem", marginBottom: "2.5rem", padding: "0 1rem" }}
          >
            No somos solo una banda. Somos la garantía de que tu evento será recordado por siempre.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="neon-card text-center group flex flex-col items-center h-full"
              style={{ padding: "3rem 2rem" }}
            >
              {/* Icon circle */}
              <div
                className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center shrink-0
                  bg-gradient-to-br ${feature.color} text-white
                  group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                style={{
                  boxShadow: `0 0 30px ${feature.glow}`,
                }}
              >
                {feature.icon}
              </div>

              <h3
                className="text-xl font-bold mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
