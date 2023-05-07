import { getArticles } from "../lib/localdata";

import AnimationPage from "@/components/AnimationPage";
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import BlogSection from "@/components/HomePage/BlogSection";
import HomePageCallToAction from "@/components/HomePage/HomePageCallToAction";

export default function Home({ articles }) {
  return (
    <AnimationPage>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection articles={articles} />
      <HomePageCallToAction />
    </AnimationPage>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
