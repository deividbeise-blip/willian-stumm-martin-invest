import { motion } from "framer-motion";

const links = [
  { l: "Início", h: "#início" },
  { l: "Sobre", h: "#sobre" },
  { l: "Método", h: "#método" },
  { l: "Serviços", h: "#serviços" },
  { l: "Resultados", h: "#resultados" },
  { l: "Contato", h: "#contato" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-sm border border-neon/60 rotate-45" />
            <div className="absolute inset-1 rounded-sm bg-neon/20 rotate-45" />
            <div className="absolute inset-2 rounded-sm bg-neon rotate-45 shadow-glow" />
          </div>
          <div className="font-mono text-xs tracking-[0.3em] text-foreground/80">
            W<span className="text-neon">/</span>SM
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
          {links.map((l, i) => (
            <a key={l.l} href={l.h} className="group relative transition-colors hover:text-foreground">
              <span className="text-neon/60 mr-2">0{i + 1}</span>
              {l.l}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-neon transition-all duration-500 group-hover:w-full shadow-glow" />
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/5551997093672?text=Quero%20organizar%20minha%20vida%20financeira%20Willian"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden bg-neon text-primary-foreground shadow-glow px-5 py-2.5 font-mono text-[11px] tracking-[0.25em] uppercase hover:scale-105 transition-transform"
        >
          <span className="relative z-10">AGENDAR</span>
        </a>
      </div>
    </motion.nav>
  );
}
