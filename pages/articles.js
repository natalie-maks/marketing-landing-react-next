import React from "react";
import { getArticles } from "../lib/localdata";
import ArticlesCard from "@/components/ArticlesCard";

const articles = ({ articles }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-12">All about Marketing, SEO etc.</h1>
      <p className="mt-6 mb-12 text-lg">
        The most interestng and articles on latest strategies, insights & tools for digital
        marketers. Follow our marketing blog to stay up to date on digital trends!"
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticlesCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  );
};

export default articles;

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
