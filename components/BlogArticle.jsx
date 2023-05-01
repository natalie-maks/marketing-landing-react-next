import React from "react";
import Link from "next/link";

const BlogArticle = React.forwardRef(({ article }, blogArticleRef) => {
  return (
    <article ref={blogArticleRef} className="rounded-3xl bg-darkgrey overflow-hidden">
      <img
        className="w-full h-52 object-cover"
        width="1280"
        height="853"
        src={article.img}
        alt={article.title}
      />
      <div className="p-8">
        <time>{article.createdAt}</time>
        <h3 className="text-lg mt-4 mb-6">{article.title}</h3>
        <p>{article.excerpt}</p>
        <Link className="text-linkblue hover:text-darkblue mt-4 font-medium block" href="/">
          Read now
        </Link>
      </div>
    </article>
  );
});

export default BlogArticle;
