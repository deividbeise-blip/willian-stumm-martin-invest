import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contato" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, oklch(0.25 0.18 250 / 0.5), transparent 60%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="font-mono text-[11px] tracking-[0.4em] text-neon uppercase mb-8">
          06 / Próximo passo
        </div>
        <h2 className="font-display text-6xl md:text-9xl font-bold gradient-text text-glow leading-[0.9] mb-10">
          Vamos organizar suas<br /><span className="italic font-light">finanças?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Agende uma conversa e descubra quais são os principais pontos que podem estar limitando o seu crescimento financeiro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://wa.me/5551997093672?text=Ol%C3%A1%20Willian%2C%20quero%20agendar%20meu%20Diagn%C3%B3stico%20Financeiro%20Gratuito."
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase bg-neon text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10">🚀 Agendar Diagnóstico Gratuito →</span>
          </a>
          <a
            href="https://www.instagram.com/jovemdevalor_financas"
            target="_blank"
            rel="noreferrer"
            className="glass-strong px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase hover:border-neon/60 transition-all"
          >
            @jovemdevalor_financas
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 max-w-3xl mx-auto">
          {[
            { l: "WhatsApp", v: "+55 51 9709-3672" },
            { l: "Instagram", v: "@jovemdevalor_financas" },
            { l: "YouTube", v: "@jovemdevalor" },
          ].map((c) => (
            <div key={c.l} className="bg-background p-6">
              <div className="font-mono text-[10px] tracking-[0.3em] text-neon mb-2 uppercase">{c.l}</div>
              <div className="text-foreground text-sm">{c.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-10 px-6 md:px-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <div>© 2026 Willian Stumm Martin</div>
        <div className="text-neon/60">GESTÃO · ORGANIZAÇÃO · CRESCIMENTO</div>
        <div>Brasil</div>
      </div>
    </footer>
  );
}
