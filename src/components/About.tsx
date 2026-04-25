"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { 
      text: "Banda versátil", 
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg> 
    },
    { 
      text: "Shows dinámicos", 
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> 
    },
    { 
      text: "Conexión con el público", 
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> 
    },
  ];

  return (
    <section
      id="nosotros"
      ref={ref}
      className="relative pt-24 md:pt-40 pb-40 md:pb-60 overflow-hidden flex justify-center w-full"
    >

      <div className="w-full max-w-6xl px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center mb-16 w-full mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
            Sobre la banda
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center w-full"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Somos{" "}
            <span className="text-gradient">Los Bárbaros</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two column layout - Restored and Refined */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group lg:col-span-5"
            style={{ marginBottom: "2rem" }}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Los Bárbaros en evento"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-zinc-500/10 blur-3xl rounded-full -z-10" />
          </motion.div>
 
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8 lg:col-span-7"
          >
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-white font-medium leading-tight">
                Llevamos la <span className="text-gradient">energía del rock</span> y la emoción del pop latino a tu evento.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                <span className="text-white font-semibold">Los Bárbaros</span> es mucho más que una banda de covers. Somos un equipo apasionado por crear experiencias inolvidables a través de la música en vivo en Guatemala.
              </p>
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Nuestra versatilidad nos permite adaptarnos a cualquier ambiente, desde la sobriedad de un evento corporativo hasta la euforia de una boda, garantizando siempre la máxima calidad y conexión con tu público.
              </p>
            </div>
 
            {/* Highlight cards - Refined elegant list */}
            <div className="flex flex-col gap-6 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-4 pl-6 py-2 border-l-2 border-zinc-500/30 hover:border-zinc-300 transition-all duration-300 group cursor-default"
                >
                  <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                  <span className="text-white font-medium text-lg tracking-wide">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
