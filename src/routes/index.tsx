import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Problem } from "@/components/Problem";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Willian Stumm Martin — Gestão Financeira para Pessoas e Empresas" },
      { name: "description", content: "Organize seu dinheiro, controle seus resultados e construa patrimônio com mais segurança e clareza." },
      { property: "og:title", content: "Willian Stumm Martin — Gestão Financeira" },
      { property: "og:description", content: "Gestão financeira para pessoas e empresas. Diagnóstico gratuito." },
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
      <Problem />
      <Method />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
