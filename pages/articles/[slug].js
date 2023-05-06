import React from "react";
import { getArticles } from "../../lib/localdata";

import Link from "next/link";

const Article = ({ article }) => {
  function formateBody(item, i) {
    for (const property in item) {
      switch (property) {
        case "h2":
          return (
            <h2 key={i} className="text-lg font-semibold my-4">
              {item[property]}
            </h2>
          );
        case "p":
          return (
            <p key={i} className="font-serif text-md my-1">
              {item[property]}
            </p>
          );

        default:
          return item[property];
      }
    }
  }

  return (
    <main className="container mx-auto px-4 md:px-12 mt-20 overflow-x-hidden">
      <img
        className="w-full h-64 mt-10 object-cover rounded-3xl"
        width="1280"
        height="853"
        src={article.img}
        alt={article.title}
      />

      <time>{article.createdAt}</time>
      <h1 className="text-3xl mt-4 mb-6">{article.title}</h1>
      <p>{article.excerpt}</p>

      {article.body.map((item, i) => {
        return formateBody(item, i);
      })}

      <Link className="text-linkblue hover:text-darkblue mt-4 font-medium block" href={`/articles`}>
        Go to articles
      </Link>
    </main>
  );
};

export default Article;

export async function getStaticProps({ params }) {
  const articles = await getArticles();

  let article = articles.find((element) => element.slug == params.slug);

  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const articles = await getArticles();

  return {
    paths: articles.map((article) => {
      let slug = article.slug;

      return `/articles/${slug}`;
    }),
    fallback: true,
  };
}
