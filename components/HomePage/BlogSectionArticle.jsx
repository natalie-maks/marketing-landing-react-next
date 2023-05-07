import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogSectionArticle = ({ article, index }) => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 640) setDelay(index * 0.3);
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.7, type: "tween", delay: delay }}
      viewport={{ once: true, margin: "-30%" }}
      className="rounded-3xl bg-darkgrey overflow-hidden flex flex-col"
    >
      <img
        className="w-full h-52 object-cover"
        width="1280"
        height="853"
        src={article.img}
        alt={article.title}
      />
      <div className="grow p-8 flex flex-col">
        <time>{article.createdAt}</time>
        <h3 className="text-lg mt-4 mb-6 md:min-h-[56px]">{article.title}</h3>
        <p className="grow">{article.excerpt}</p>
        <Link
          className="text-linkblue hover:text-darkblue mt-4 font-medium block"
          href={`/articles/${article.slug}`}
        >
          Read now
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogSectionArticle;
