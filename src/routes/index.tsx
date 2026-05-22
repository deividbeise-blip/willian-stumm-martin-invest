import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
import { Stats } from "@/components/Stats";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Willian Stumm Martin — Gestor Financeiro Social e Empresarial" },
      { name: "description", content: "Organize, cresça e invista melhor. Gestão estratégica de patrimônio com método e resultado." },
      { property: "og:title", content: "Willian Stumm Martin" },
      { property: "og:description", content: "Uma nova forma de dominar seu patrimônio." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Method />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
