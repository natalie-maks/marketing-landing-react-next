import React from "react";
import { motion } from "framer-motion";

import { getArticles } from "../lib/localdata";

import Meta from "@/components/Layout/Meta";
import ArticlesPageCard from "@/components/ArticlesPage/ArticlesPageCard";
import AnimationPage from "@/components/AnimationPage";

const Articles = ({ articles }) => {
  return (
    <AnimationPage>
      <Meta
        title={`All about marketing, SEO and content creation - WeGrow`}
        description={`The most interestng and articles on latest strategies, insights & tools for digital marketers. Follow our marketing blog to stay up to date on digital trends!`}
      />
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut", type: "tween" }}
        viewport={{ once: true }}
        className="mt-12 text-3xl font-semibold"
      >
        All about Marketing, SEO etc.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.65, ease: "easeInOut", type: "tween" }}
        viewport={{ once: true }}
        className="mt-6 mb-12 text-lg"
      >
        The most interestng and articles on latest strategies, insights & tools for digital
        marketers. Follow our marketing blog to stay up to date on digital trends!"
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut", type: "tween" }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {articles.map((article) => (
          <ArticlesPageCard key={article.slug} article={article} />
        ))}
      </motion.div>
    </AnimationPage>
  );
};

export default Articles;

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
