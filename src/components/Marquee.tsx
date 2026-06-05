import { motion } from "framer-motion";

const items = ["Organização", "Controle", "Fluxo de Caixa", "Planejamento", "Patrimônio", "Crescimento"];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-background/50 py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap font-display text-5xl md:text-7xl font-bold"
      >
        {[...items, ...items, ...items].map((w, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className={i % 2 === 0 ? "text-foreground/90" : "text-foreground/10 italic font-light"}>{w}</span>
            <span className="text-neon text-3xl">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
