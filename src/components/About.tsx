import { motion } from "framer-motion";
import portrait from "@/assets/willian-suit.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-deep/30 blur-[120px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <div className="absolute inset-0 border border-neon/30 z-20 pointer-events-none" />
            <div className="absolute -top-px -left-px w-8 h-8 border-t-2 border-l-2 border-neon z-20" />
            <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-neon z-20" />
            <div className="absolute -bottom-px -left-px w-8 h-8 border-b-2 border-l-2 border-neon z-20" />
            <div className="absolute -bottom-px -right-px w-8 h-8 border-b-2 border-r-2 border-neon z-20" />
            <img src={portrait} alt="Willian Martin" className="h-full w-full object-cover" style={{ filter: "grayscale(0.3) contrast(1.1) brightness(0.85)" }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-deep/40 mix-blend-multiply" />
            <div className="absolute inset-0 scan-lines opacity-20" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] text-neon">
              WILLIAN MARTIN / GESTOR
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="md:col-span-7 space-y-8"
        >
          <div className="font-mono text-[11px] tracking-[0.4em] text-neon uppercase flex items-center gap-3">
            <span className="h-px w-12 bg-neon shadow-glow" />
            01 / Sobre
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] gradient-text text-balance">
            Quem está por trás<br />da <span className="italic font-light">gestão</span>?
          </h2>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>
              Meu nome é <span className="text-foreground font-medium">Willian Martin</span>. Ajudo pessoas e empresas a organizar suas finanças, controlar seus números e tomar decisões mais inteligentes com o próprio dinheiro.
            </p>
            <p>
              Meu trabalho vai além dos investimentos. Acompanho receitas, despesas, fluxo de caixa, metas financeiras e planejamento patrimonial para que cada cliente tenha clareza sobre sua situação e saiba exatamente qual o próximo passo.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-px bg-border/40">
            {[
              { v: "PF", l: "Pessoas físicas" },
              { v: "PJ", l: "Empresas" },
              { v: "360°", l: "Visão patrimonial" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-6 group hover:bg-card transition-colors">
                <div className="font-display text-4xl font-bold text-neon text-glow">{s.v}</div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
