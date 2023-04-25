import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-12">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <CallToAction />
    </main>
  );
}
