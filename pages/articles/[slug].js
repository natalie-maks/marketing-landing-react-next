import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { getArticles } from "../../lib/localdata";

import Meta from "@/components/Layout/Meta";
import AnimationPage from "@/components/AnimationPage";
import Button from "@/components/UI/Button";

const Article = ({ article, recomendedArticles }) => {
  console.log(article);
  console.log(recomendedArticles);

  function formateBody(item, i) {
    for (const property in item) {
      switch (property) {
        case "h2":
          return (
            <h2 key={i} className="text-2xl font-semibold my-4">
              {item[property]}
            </h2>
          );
        case "h3":
          return (
            <h3 key={i} className="text-xl font-semibold my-4">
              {item[property]}
            </h3>
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
    <AnimationPage>
      <Meta title={article.title} description={article.excerpt} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          className="w-full h-64 mt-10 mb-4 rounded-3xl object-cover"
          src={article.img}
          alt={article.title}
          width="1280"
          height="853"
        />

        <time>{article.createdAt}</time>
        <h1 className="mt-8 mb-6 text-3xl font-semibold">{article.title}</h1>
        <p>{article.excerpt}</p>

        {article.body.map((item, i) => {
          return formateBody(item, i);
        })}

        <h2 className="mt-12 mb-6 text-3xl font-semibold">See also</h2>
        {recomendedArticles.map((article, index) => {
          for (let i = 0; index < 3; i++) {
            return (
              <Link
                className="block my-4 text-xl text-white hover:text-darkblue"
                href={`/articles/${article.slug}`}
                scroll={false}
                key={article.slug}
              >
                {article.title}
              </Link>
            );
          }
        })}
        <div className="mt-12 mb-2">
          <Button label={"Go to articles"} link={"/articles"} />
        </div>
      </motion.div>
    </AnimationPage>
  );
};

export default Article;

export async function getStaticProps({ params }) {
  const articles = await getArticles();

  let article = articles.find((element) => element.slug == params.slug);

  let recomendedArticles = articles.filter((element) => element.slug !== params.slug);

  return {
    props: { article, recomendedArticles },
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
