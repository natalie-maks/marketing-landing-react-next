import React from "react";
import { motion } from "framer-motion";

import HeroSectionImages from "./HeroSectionImages";

import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";
import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const HeroSection = () => {
  const paragraph =
    "At WeGrow we help to scale your business and meet your business goals. We work with great range of digital tools including social media marketing, paid advertising, email marketing, SEO optimization.";
  return (
    <section className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32 mb-20 pt-12">
      <MotionDiv styles={"flex flex-col justify-center lg:w-3/5"} margin={"0px"}>
        <HomeHeaders text={"Marketing solutions that grow your business."} h1={true} />
        <HomeParagraph text={paragraph} />
        <div className="flex flex-wrap gap-6 mt-8">
          <motion.div variants={item}>
            <Button label={"Our services"} link={"/#services"} scroll={true} />
          </motion.div>
          <motion.div variants={item}>
            <Button label={"Contact us"} grey={true} link={"/contact"} />
          </motion.div>
        </div>
      </MotionDiv>
      <HeroSectionImages />
    </section>
  );
};

export default HeroSection;
