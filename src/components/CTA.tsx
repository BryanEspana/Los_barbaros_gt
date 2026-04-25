"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative flex justify-center w-full overflow-hidden"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Background parallax image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/gallery-3.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[var(--bg-primary)]/85 backdrop-blur-sm" />
      </div>

      {/* Neon glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-500/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] bg-zinc-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-6 block">
            ¿Listo para vivir la experiencia?
          </span>

          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Haz de tu evento algo{" "}
            <span className="text-gradient">inolvidable</span>
          </h2>

          <p 
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto text-center leading-relaxed"
            style={{ marginTop: "1rem", marginBottom: "3rem", padding: "0 1rem" }}
          >
            Contáctanos hoy y asegura la mejor música en vivo para tu próximo evento.
            Cotización sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/50212345678?text=Hola!%20Me%20interesa%20cotizar%20un%20evento%20con%20Los%20Bárbaros"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button text-lg px-10 py-5 !bg-gradient-to-r !from-zinc-200 !to-white !text-black
                hover:!shadow-[0_0_30px_rgba(255,255,255,0.5),0_0_80px_rgba(255,255,255,0.2)]"
              id="whatsapp-cta-button"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar ahora
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => handleScroll("#inicio")}
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold
                hover:border-zinc-500/50 hover:bg-zinc-500/10 
                transition-all duration-300 backdrop-blur-sm"
            >
              Ver más sobre nosotros
            </button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center text-[var(--text-muted)] text-sm"
            style={{ marginTop: "3.5rem", gap: "1.5rem" }}
          >
            <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10" style={{ padding: "0.5rem 1.5rem" }}>
              <span className="text-zinc-400">✓</span> Cotización sin compromiso
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10" style={{ padding: "0.5rem 1.5rem" }}>
              <span className="text-zinc-400">✓</span> Respuesta en 24 horas
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10" style={{ padding: "0.5rem 1.5rem" }}>
              <span className="text-zinc-400">✓</span> Disponibilidad inmediata
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
