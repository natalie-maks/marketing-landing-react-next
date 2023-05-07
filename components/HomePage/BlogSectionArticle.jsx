import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogSectionArticle = ({ article, index }) => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 640) setDelay(index * 0.25);
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.4, type: "tween", delay: delay }}
      viewport={{ once: true, margin: "-30%" }}
      className="flex flex-col rounded-3xl bg-darkgrey overflow-hidden"
    >
      <img
        className="w-full h-52 object-cover"
        src={article.img}
        alt={article.title}
        width="1280"
        height="853"
      />
      <div className="grow flex flex-col p-8">
        <time>{article.createdAt}</time>
        <h3 className="md:min-h-[56px] mt-4 mb-6 text-lg">{article.title}</h3>
        <p className="grow">{article.excerpt}</p>
        <Link
          className="block mt-4 text-linkblue hover:text-darkblue font-medium"
          href={`/articles/${article.slug}`}
          scroll={false}
        >
          Read now
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogSectionArticle;
