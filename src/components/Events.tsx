"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const eventTypes = [
  {
    title: "Bodas",
    description:
      "Hacemos que el día más importante de tu vida suene exactamente como lo soñaste. Desde la ceremonia hasta el after party.",
    gradient: "from-zinc-500/20 to-zinc-600/20",
    border: "hover:border-zinc-500/40",
  },
  {
    title: "Corporativos",
    description:
      "Eventos empresariales con clase. La música perfecta para networking, galas, lanzamientos y celebraciones corporativas.",
    gradient: "from-zinc-400/20 to-zinc-500/20",
    border: "hover:border-zinc-500/40",
  },
  {
    title: "Cumpleaños",
    description:
      "¿XV años, 30, 50? No importa la edad, lo que importa es que la fiesta sea ÉPICA. Nosotros nos encargamos de eso.",
    gradient: "from-zinc-500/20 to-zinc-600/20",
    border: "hover:border-zinc-500/40",
  },
  {
    title: "Hoteles",
    description:
      "Experiencia en los mejores hoteles de Guatemala. Shows perfectos para huéspedes que merecen entretenimiento de primer nivel.",
    gradient: "from-zinc-400/20 to-zinc-500/20",
    border: "hover:border-zinc-500/40",
  },
  {
    title: "Eventos Privados",
    description:
      "Fiestas exclusivas con un toque personalizado. Adaptamos el setlist, la iluminación y la energía a tu visión.",
    gradient: "from-zinc-500/20 to-zinc-600/20",
    border: "hover:border-zinc-500/40",
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="eventos"
      ref={ref}
      className="relative overflow-hidden flex justify-center w-full"
      style={{ paddingTop: "6rem", paddingBottom: "8rem" }}
    >
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] -translate-x-1/3" />

      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 w-full mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
            Tipos de eventos
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center w-full"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Donde <span className="text-gradient">brillamos</span>
          </h2>
          <div className="section-divider" />

          <p 
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center"
            style={{ marginTop: "1rem", marginBottom: "2.5rem", padding: "0 1rem" }}
          >
            Nos adaptamos a cualquier tipo de evento. Tu visión, nuestra música.
          </p>
        </motion.div>

        {/* Event cards — flex wrap for perfect centering of 5 items */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
          {eventTypes.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className={`neon-card group cursor-default relative overflow-hidden flex flex-col items-center justify-center ${event.border}`}
              style={{ padding: "3rem 2rem", width: "100%", maxWidth: "350px" }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 text-center flex flex-col items-center w-full">
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
