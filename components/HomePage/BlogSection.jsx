import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import BlogSectionArticle from "./BlogSectionArticle";

import SectionLabel from "./homeAssets/SectionLabel";
import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";
import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const BlogSection = ({ articles }) => {
  const [number, setNumber] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 768) setNumber(4);
    if (window.innerWidth >= 1280) setNumber(3);
  };

  const paragraph =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architect asperiores totam fugiat quaerat explicabo rem magnam incidunt.";

  return (
    <section id="blog" className="pt-28 mt-12">
      <MotionDiv styles={"flex flex-col lg:flex-row"} margin={"-30%"}>
        <div className="lg:w-2/3">
          <SectionLabel text={"BLOG"} />
          <HomeHeaders text={"Read our articles & news"} />
          <HomeParagraph text={paragraph} />
        </div>
        <div className="lg:w-1/3 lg:flex mt-8 items-end justify-end">
          <motion.div variants={item}>
            <Button label={"All posts"} link={"articles"} />
          </motion.div>
        </div>
      </MotionDiv>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        {articles.map((article, index) => {
          for (let i = 0; index < number; i++) {
            return <BlogSectionArticle key={article.slug} article={article} index={index} />;
          }
        })}
      </div>
    </section>
  );
};

export default BlogSection;
