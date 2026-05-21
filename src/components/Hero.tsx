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
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Video */}
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 0%, oklch(0.08 0.02 250 / 0.7) 70%, var(--background) 100%)" }} />
      <div className="absolute inset-0 mix-blend-overlay" style={{ background: "linear-gradient(135deg, oklch(0.25 0.15 255 / 0.3), transparent 50%, oklch(0.35 0.2 240 / 0.25))" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      <div className="absolute inset-0 scan-lines opacity-30 pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent animate-scan opacity-60 shadow-glow" />

      <Particles count={50} />

      {/* HUD corners */}
      <div className="absolute top-24 left-6 md:left-12 font-mono text-[10px] tracking-[0.3em] text-neon/70 z-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-glow shadow-glow" />
          REC · 01:24:07
        </div>
      </div>
      <div className="absolute top-24 right-6 md:right-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground z-10 text-right">
        LAT -29.7°<br />LON -51.1°
      </div>
      <div className="absolute bottom-8 left-6 md:left-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground z-10">
        SCROLL ↓ TO DESCEND
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 font-mono text-[10px] tracking-[0.3em] text-muted-foreground z-10 text-right">
        FILE / W.M.S — 2026
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="font-mono text-[11px] tracking-[0.5em] text-neon/80 mb-8 uppercase"
        >
          [ Gestor Financeiro · Consultor de Investimentos ]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] text-balance gradient-text text-glow"
        >
          WILLIAN<br />
          <span className="italic font-light">STUMM</span> MARTIN
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
          className="max-w-xl text-base md:text-lg text-muted-foreground text-balance font-light"
        >
          Organize. Cresça. Invista melhor. Uma nova forma de
          <span className="text-foreground"> dominar seu patrimônio.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://wa.me/5551997093672"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden px-8 py-4 font-mono text-xs tracking-[0.3em] uppercase bg-neon text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10">Iniciar Consultoria →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon via-foreground to-neon bg-[length:200%_100%] opacity-0 group-hover:opacity-100" style={{ animation: "shimmer 2s linear infinite" }} />
          </a>
          <a href="#sobre" className="glass-strong px-8 py-4 font-mono text-xs tracking-[0.3em] uppercase hover:border-neon/60 transition-all">
            Conhecer o Método
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
