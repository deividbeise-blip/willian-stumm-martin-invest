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
          Vamos organizar suas<br /><span className="italic font-light inline-block pb-3">finanças?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Agende uma conversa e descubra quais são os principais pontos que podem estar limitando o seu crescimento financeiro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://wa.me/5551997093672?text=Quero%20organizar%20minha%20vida%20financeira%20Willian"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden px-10 py-5 font-mono text-xs tracking-[0.3em] uppercase bg-neon text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10"> Agendar Diagnóstico Gratuito →</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 max-w-4xl mx-auto">
          {[
            { l: "WhatsApp", v: "+55 51 9709-3672", href: "https://wa.me/5551997093672?text=Quero%20organizar%20minha%20vida%20financeira%20Willian", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            ) },
            { l: "Instagram", v: "@jovemdevalor_financas", href: "https://www.instagram.com/jovemdevalor_financas", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            ) },
            { l: "YouTube", v: "@JovemdeValor-WillianMartin", href: "https://www.youtube.com/@JovemdeValor-WillianMartin", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            ) },
            { l: "TikTok", v: "@jovemdevalor_investir", href: "https://www.tiktok.com/@jovemdevalor_investir", icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            ) },
          ].map((c) => (
            <a key={c.l} href={c.href} target="_blank" rel="noreferrer" className="bg-background p-6 hover:bg-neon/5 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-neon">{c.icon}</span>
                <div className="font-mono text-[10px] tracking-[0.3em] text-neon uppercase">{c.l}</div>
              </div>
              <div className="text-foreground text-sm">{c.v}</div>
            </a>
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
