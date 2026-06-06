import { motion } from "framer-motion";
import trading from "@/assets/trading.jpg";

const before = ["Dinheiro sem direção", "Decisões no achismo", "Falta de controle"];
const after = ["Clareza financeira", "Controle dos números", "Planejamento estratégico", "Crescimento sustentável"];

export function Stats() {
  return (
    <section id="resultados" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={trading} alt="" className="h-full w-full object-cover opacity-15" style={{ filter: "hue-rotate(180deg) saturate(2) brightness(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-neon uppercase mb-6">
            05 / Resultados
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold gradient-text text-glow leading-[0.95]">
            O que muda quando existe<br /><span className="italic font-light inline-block pb-3">gestão financeira</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="glass-strong p-10 md:p-12 relative overflow-hidden"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-destructive/80 mb-4">// ANTES</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 text-muted-foreground">Sem gestão</h3>
            <ul className="space-y-5">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-4 text-lg text-muted-foreground">
                  <span className="text-destructive/80 mt-0.5">✕</span>
                  <span className="line-through decoration-destructive/40">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="glass-strong p-10 md:p-12 relative overflow-hidden border-neon/40 shadow-glow"
          >
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon to-transparent" />
            <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-4">// DEPOIS</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-8 gradient-text">Com gestão</h3>
            <ul className="space-y-5">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-4 text-lg text-foreground">
                  <span className="text-neon mt-0.5">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
