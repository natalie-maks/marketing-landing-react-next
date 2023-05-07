import { motion } from "framer-motion";

import HeroSectionImages from "./HeroSectionImages";

import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";
import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const HeroSection = () => {
  const paragraph =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto asperiore  totam fugiat quaerat explicabo rem magnam incidunt.";
  return (
    <section className="flex items-center flex-col lg:flex-row gap-20 lg:gap-32 pt-12 mb-20">
      <MotionDiv styles={"lg:w-3/5 flex flex-col justify-center"} margin={"0px"}>
        <HomeHeaders text={"Marketing solutions that grow your business."} h1={true} />
        <HomeParagraph text={paragraph} />
        <div className="flex flex-wrap gap-6">
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
