import React from "react";
import Link from "next/link";

const ArticlesCard = ({ article }) => {
  return (
    <article className="rounded-3xl bg-darkgrey overflow-hidden flex flex-col">
      <img
        className="w-full h-52 object-cover"
        width="1280"
        height="853"
        src={article.img}
        alt={article.title}
      />
      <div className="grow p-8 flex flex-col">
        <Link className="font-medium block" href={`/articles/${article.slug}`}>
          <h3 className="text-lg hover:text-darkblue md:min-h-[56px]">{article.title}</h3>
        </Link>
        <p className="my-4 grow">{article.excerpt}</p>
        <time className="text-lightgrey/70 text-sm">{article.createdAt}</time>
      </div>
    </article>
  );
};

export default ArticlesCard;
