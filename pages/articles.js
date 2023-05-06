import React from "react";
import { getArticles } from "../lib/localdata";
import BlogArticle from "@/components/BlogArticle";

const articles = ({ articles }) => {
  return (
    <main className="container mx-auto px-4 md:px-12 mt-20 overflow-x-hidden">
      <h1>All about Markeing, SEO etc.</h1>
      <p>The most interestng and articles</p>
      <div className="grid grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <BlogArticle key={article.slug} article={article} index={index} />
        ))}
      </div>
    </main>
  );
};

export default articles;

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}
