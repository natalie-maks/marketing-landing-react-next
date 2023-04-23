import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-12">
      <Hero />
      <Services />
      <div className="h-96"></div>
    </main>
  );
}
