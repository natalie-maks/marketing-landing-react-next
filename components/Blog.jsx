import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import BlogArticle from "./BlogArticle";
import Button from "./UI/Button";

const Blog = ({ articles, container, item, label }) => {
  const [number, setNumber] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 768) setNumber(4);
    if (window.innerWidth >= 1280) setNumber(3);
  };

  return (
    <section id="blog" className="pt-28 mt-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30%" }}
        className="flex flex-col lg:flex-row"
      >
        <div className="lg:w-2/3">
          <motion.p
            variants={label}
            className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10"
          >
            BLOG
          </motion.p>
          <motion.h2 variants={item} className="text-5xl font-medium">
            Read our articles & news
          </motion.h2>
          <motion.p variants={item} className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto
            asperiores totam fugiat quaerat explicabo rem magnam incidunt.
          </motion.p>
        </div>
        <div className="lg:w-1/3 lg:flex mt-8 items-end justify-end">
          <motion.div variants={item}>
            <Button label={"All posts"} link={"articles"} />
          </motion.div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {articles.map((article, index) => {
          for (let i = 0; index < number; i++) {
            return <BlogArticle key={article.slug} article={article} index={index} />;
          }
        })}
      </div>
    </section>
  );
};

export default Blog;
