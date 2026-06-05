import { motion } from "framer-motion";

const pains = [
  "Falta de controle financeiro",
  "Caixa apertado",
  "Gastos desorganizados",
  "Mistura entre dinheiro pessoal e empresarial",
  "Falta de planejamento",
  "Dificuldade para investir",
  "Sensação de trabalhar muito e não ver resultado",
];

export function Problem() {
  return (
    <section id="problema" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, oklch(0.3 0.15 25 / 0.25), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:col-span-5"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-neon uppercase flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-neon shadow-glow" />
            02 / Diagnóstico
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] gradient-text text-balance">
            O dinheiro entra.<br />Mas <span className="italic font-light">para onde</span> ele vai?
          </h2>
          <p className="mt-8 text-muted-foreground text-lg max-w-md">
            Muitos empresários e pessoas enfrentam diariamente situações que travam o crescimento financeiro:
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border/40"
        >
          {pains.map((p) => (
            <motion.li
              key={p}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="bg-background p-6 group hover:bg-card transition-all relative"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-neon mt-1">✕</span>
                <span className="text-foreground/90 leading-relaxed">{p}</span>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-neon to-transparent transition-all duration-700" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
