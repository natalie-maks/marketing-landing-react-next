import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import { getArticles } from "../lib/localdata";

export default function Home({ articles }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  const label = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: "easeInOut", duration: 1.2 } },
  };

  return (
    <>
      <Hero container={container} item={item} />
      <About container={container} item={item} label={label} />
      <Services container={container} item={item} label={label} />
      <Testimonials container={container} item={item} label={label} />
      <Blog articles={articles} container={container} item={item} label={label} />
      <CallToAction item={item} />
    </>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
