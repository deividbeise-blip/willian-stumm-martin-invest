import { motion } from "framer-motion";
import trading from "@/assets/trading.jpg";

export function Stats() {
  return (
    <section id="resultados" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img src={trading} alt="" className="h-full w-full object-cover opacity-20" style={{ filter: "hue-rotate(180deg) saturate(2) brightness(0.5)" }} />
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
            03 / Métricas em tempo real
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-bold gradient-text text-glow leading-[0.9]">
            Dados não <span className="italic font-light">mentem.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { v: "R$ 47M+", l: "Patrimônio sob orientação", c: "+12.4%" },
            { v: "320+", l: "Clientes ativos", c: "+8.1%" },
            { v: "97%", l: "Taxa de retenção", c: "+2.3%" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-strong p-10 group hover:border-neon/60 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-6">// {String(i + 1).padStart(2, "0")}</div>
              <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-4">{s.v}</div>
              <div className="text-muted-foreground text-sm mb-6">{s.l}</div>
              <div className="font-mono text-xs text-neon flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
                {s.c} este trimestre
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
