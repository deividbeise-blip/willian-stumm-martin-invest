import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    t: "Gestão Financeira Empresarial",
    items: [
      "Fluxo de caixa",
      "Controle financeiro",
      "Análise de resultados",
      "Planejamento financeiro",
      "Organização dos números da empresa",
    ],
  },
  {
    n: "02",
    t: "Gestão Financeira Pessoal",
    items: [
      "Organização financeira",
      "Planejamento de metas",
      "Controle de gastos",
      "Construção de patrimônio",
    ],
  },
  {
    n: "03",
    t: "Planejamento Patrimonial",
    items: [
      "Reserva de emergência",
      "Estratégia de investimentos",
      "Organização patrimonial",
    ],
  },
];

export function Services() {
  return (
    <section id="serviços" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, oklch(0.25 0.18 250 / 0.35), transparent 60%)" }} />

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
            04 / Serviços
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] gradient-text">
            Áreas de <span className="italic font-light inline-block pb-3">atuação.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative glass-strong p-10 hover:border-neon/60 transition-all duration-700 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-6">// {s.n}</div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 leading-tight group-hover:text-neon transition-colors duration-500">
                {s.t}
              </h3>
              <ul className="space-y-3 flex-1">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    <span className="text-neon mt-1.5 text-[10px]">◆</span>
                    <span className="text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5551997093672?text=quero%20organizar%20minha%20vida%20financeira"
                target="_blank"
                rel="noreferrer"
                className="mt-8 font-mono text-[10px] tracking-[0.3em] uppercase text-neon hover:text-foreground transition-colors flex items-center gap-2"
              >
                Solicitar →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
