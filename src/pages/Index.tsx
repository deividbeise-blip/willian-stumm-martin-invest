import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Problem } from "@/components/Problem";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Contact, Footer } from "@/components/Contact";

export default function Index() {
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
