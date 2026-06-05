import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Diagnóstico", d: "Mapeamento completo da situação financeira atual — receitas, despesas, dívidas e oportunidades." },
  { n: "02", t: "Organização", d: "Estruturação do fluxo de caixa e implantação de controles financeiros claros e replicáveis." },
  { n: "03", t: "Acompanhamento", d: "Monitoramento constante dos números e suporte na tomada de decisões estratégicas." },
  { n: "04", t: "Crescimento", d: "Estratégias para aumentar patrimônio, lucro e segurança financeira de forma sustentável." },
];

export function Method() {
  return (
    <section id="método" className="relative py-32 px-6 md:px-12 overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-20"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-neon uppercase flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-neon shadow-glow" />
            03 / Método
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] gradient-text">
            Gestão Financeira em<br /><span className="italic font-light">quatro</span> etapas.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-background p-10 md:p-14 hover:bg-card transition-all duration-700 overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-neon/0 group-hover:bg-neon/10 blur-3xl transition-all duration-1000" />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-neon">{s.n}</span>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-neon transition-colors">
                    ◇ ETAPA
                  </span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 group-hover:text-neon transition-colors duration-500">
                  {s.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-md">{s.d}</p>
                <div className="mt-10 h-px w-0 group-hover:w-full bg-gradient-to-r from-neon to-transparent transition-all duration-1000 shadow-glow" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
