import React from "react";
import { getArticles } from "../lib/localdata";
import ArticlesCard from "@/components/ArticlesCard";
import { motion } from "framer-motion";
import AnimationPage from "@/components/AnimationPage";

const articles = ({ articles }) => {
  return (
    <AnimationPage>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold mt-12"
      >
        All about Marketing, SEO etc.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-6 mb-12 text-lg"
      >
        The most interestng and articles on latest strategies, insights & tools for digital
        marketers. Follow our marketing blog to stay up to date on digital trends!"
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {articles.map((article) => (
          <ArticlesCard key={article.slug} article={article} />
        ))}
      </motion.div>
    </AnimationPage>
  );
};

export default articles;

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
