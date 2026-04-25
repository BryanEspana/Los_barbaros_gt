"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const genres = [
  {
    title: "Pop Latino",
    artists: ["Juanes", "Carlos Vives", "Shakira", "Maná"],
    color: "from-zinc-400 to-zinc-500",
  },
  {
    title: "Rock en Español",
    subtitle: "80s / 90s",
    artists: ["Enanitos Verdes", "Hombres G", "Elefante", "Soda Stereo"],
    color: "from-zinc-500 to-zinc-600",
  },
  {
    title: "Baladas Románticas",
    artists: ["Luis Miguel", "Ricardo Arjona", "Sin Bandera", "Reik"],
    color: "from-zinc-600 to-zinc-700",
  },
  {
    title: "Hits Internacionales",
    subtitle: "Inglés & Español",
    artists: ["Coldplay", "Bruno Mars", "The Killers", "Maroon 5"],
    color: "from-zinc-300 to-zinc-400",
  },
];

export default function Repertoire() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="repertorio"
      ref={ref}
      className="relative overflow-hidden flex justify-center w-full"
      style={{ paddingTop: "var(--section-padding)", paddingBottom: "var(--section-padding)" }}
    >
      {/* Parallax divider background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/gallery-1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[var(--bg-primary)]/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center mb-20 md:mb-24 w-full mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
            Nuestro repertorio
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center w-full"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            La música que{" "}
            <span className="text-gradient">prende</span> tu fiesta
          </h2>
          <p 
            className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center"
            style={{ marginTop: "1.5rem", marginBottom: "2.5rem", padding: "0 1rem" }}
          >
            Un repertorio amplio y cuidadosamente seleccionado para cada momento de tu evento.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Genre grid */}
        <div className="flex justify-center w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl w-full">
            {genres.map((genre, i) => (
            <motion.div
              key={genre.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="neon-card group relative overflow-hidden flex flex-col items-center justify-center h-full"
              style={{ padding: "2rem 1.5rem" }}
            >
              {/* Background glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col items-center w-full">
                {/* Title */}
                <div className="flex flex-col items-center gap-2 mb-6 text-center">
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {genre.title}
                    </h3>
                    {genre.subtitle && (
                      <span className="text-sm md:text-base text-zinc-400 font-medium tracking-wide">
                        {genre.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Artists */}
                <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
                  {genre.artists.map((artist) => (
                    <span
                      key={artist}
                      className="text-sm md:text-base rounded-full bg-white/5 text-[var(--text-secondary)]
                        border border-white/10 hover:border-zinc-500/40 
                        hover:bg-zinc-500/10 hover:text-white
                        transition-all duration-300 cursor-default"
                      style={{ padding: "0.2rem 0.5rem" }}
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center text-[var(--text-muted)] mt-16 text-sm md:text-base"
        >
           Y mucho más... Nuestro repertorio se adapta a tus gustos y los de tus invitados
        </motion.p>
      </div>
    </section>
  );
}
