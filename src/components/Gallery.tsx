"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/hero.jpeg", alt: "Los Bárbaros en concierto", span: "col-span-2 md:row-span-2" },
  { src: "/images/gallery-1.jpeg", alt: "Guitarrista en acción", span: "col-span-2" },
  { src: "/images/gallery-2.jpeg", alt: "Público disfrutando", span: "col-span-1" },
  { src: "/images/gallery-3.jpeg", alt: "Baterista en vivo", span: "col-span-1" },
  { src: "/images/gallery-4.jpeg", alt: "Evento corporativo", span: "col-span-2" },
  { src: "/images/about.jpeg", alt: "Banda en evento", span: "col-span-2" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section
        id="galeria"
        ref={ref}
        className="relative overflow-hidden flex justify-center w-full"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center text-center mb-16 md:mb-20 w-full mx-auto"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
              Galería
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-center w-full"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Momentos{" "}
              <span className="text-gradient">inolvidables</span>
            </h2>
            <p 
              className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center"
              style={{ marginTop: "1rem", marginBottom: "2.5rem", padding: "0 1rem" }}
            >
              Cada evento es una historia. Aquí algunas de las que hemos creado juntos.
            </p>
            <div className="section-divider" />
          </motion.div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 
                    group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    flex items-end p-4"
                >
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
                {/* Zoom icon */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-12 h-12 rounded-full glass flex items-center justify-center
                    opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100
                    transition-all duration-500"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <Image
                src={lightbox}
                alt="Galería Los Bárbaros"
                width={1200}
                height={800}
                className="rounded-lg object-contain max-h-[90vh] w-auto"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(null);
                }}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass
                  flex items-center justify-center text-white hover:bg-white/20 
                  transition-colors duration-300"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
