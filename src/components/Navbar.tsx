"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#repertorio", label: "Repertorio" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center w-full transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div 
          className="w-full max-w-7xl px-6 flex items-center justify-between"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="relative z-10 flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/images/logo.jpeg"
                alt="Los Bárbaros"
                width={40}
                height={40}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-white font-bold tracking-tight hidden sm:block">LOS BÁRBAROS</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative px-4 py-2 text-[15px] font-medium text-[var(--text-secondary)] 
                  hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                  bg-gradient-to-r from-zinc-500 to-zinc-400 
                  group-hover:w-3/4 transition-all duration-300"
                />
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contacto");
            }}
            className="hidden lg:inline-flex glow-button !py-3 !px-8 !text-sm"
          >
            Cotizar evento
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
            id="mobile-menu-toggle"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[var(--bg-primary)]/95 backdrop-blur-xl 
              flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-3xl font-bold font-[var(--font-heading)] text-white 
                  hover:text-zinc-300 transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contacto");
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="glow-button mt-4"
            >
              Cotizar evento
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
