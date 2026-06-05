import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <section ref={ref} id="início" className="relative h-screen w-full overflow-hidden bg-background">
      <motion.div style={{ scale, y, filter }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.5) contrast(1.15) saturate(0.85) hue-rotate(200deg)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 0%, oklch(0.08 0.02 250 / 0.7) 70%, var(--background) 100%)" }} />
      <div className="absolute inset-0 mix-blend-overlay" style={{ background: "linear-gradient(135deg, oklch(0.25 0.15 255 / 0.3), transparent 50%, oklch(0.35 0.2 240 / 0.25))" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      <div className="absolute inset-0 scan-lines opacity-30 pointer-events-none" />

      <Particles count={50} />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="font-mono text-[11px] tracking-[0.5em] text-neon/80 mb-8 uppercase"
        >
          [ Willian Stumm Martin · Gestor Financeiro ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.03em" }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance gradient-text text-glow max-w-5xl"
        >
          Gestão Financeira para<br />
          <span className="italic font-light">Pessoas e Empresas</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="h-px w-32 my-8 bg-gradient-to-r from-transparent via-neon to-transparent shadow-glow"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="max-w-2xl text-base md:text-lg text-muted-foreground text-balance font-light"
        >
          Organize seu dinheiro, controle seus resultados e construa
          <span className="text-foreground"> patrimônio com mais segurança e clareza.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/5551997093672?text=Ol%C3%A1%20Willian%2C%20quero%20agendar%20meu%20Diagn%C3%B3stico%20Financeiro%20Gratuito."
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden px-8 py-4 font-mono text-xs tracking-[0.3em] uppercase bg-neon text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10">✅ Agendar Diagnóstico Gratuito →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon via-foreground to-neon bg-[length:200%_100%] opacity-0 group-hover:opacity-100" style={{ animation: "shimmer 2s linear infinite" }} />
          </a>
          <a href="#método" className="glass-strong px-8 py-4 font-mono text-xs tracking-[0.3em] uppercase hover:border-neon/60 transition-all">
            Conhecer o Método
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.6 }}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { label: "WhatsApp", href: "https://wa.me/5551997093672", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            ) },
            { label: "Instagram", href: "https://www.instagram.com/jovemdevalor_financas", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            ) },
            { label: "YouTube", href: "https://www.youtube.com/@jovemdevalor", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            ) },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group relative h-11 w-11 grid place-items-center glass-strong hover:border-neon/60 hover:text-neon transition-all duration-500 hover:shadow-glow"
            >
              {s.icon}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{s.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
