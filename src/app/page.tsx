import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Repertoire from "@/components/Repertoire";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Repertoire />
      <Gallery />
      <Events />
      <CTA />
      <Footer />
    </main>
  );
}
