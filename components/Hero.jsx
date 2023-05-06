import React from "react";
import { motion } from "framer-motion";

import HeroImages from "./HeroImages";
import Button from "./UI/Button";

import green from "../assets/green.png";
import yellow from "@/assets/yellow.png";
import orange from "@/assets/orange.png";
import blue from "@/assets/blue.png";

const images = [
  {
    id: `hero image 1`,
    color: green,
    styles: `rounded-br-none lg:row-start-1 lg:row-end-3`,
    alt: `smiling woman with tablet`,
  },
  {
    id: `hero image 2`,
    color: yellow,
    styles: `rounded-bl-none lg:row-start-3 lg:row-end-4`,
    alt: `smiling woman`,
  },
  {
    id: `hero image 3`,
    color: blue,
    styles: `rounded-tr-none lg:row-start-1 lg:row-end-2`,
    alt: `smiling man`,
  },
  {
    id: `hero image 4`,
    color: orange,
    styles: `rounded-tl-none lg:row-start-2 lg:row-end-4`,
    alt: `smiling man in glasses`,
  },
];

const Hero = ({ container, item }) => {
  return (
    <section className="flex items-center flex-col lg:flex-row gap-20 lg:gap-32 pt-12 mb-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:w-3/5 flex flex-col justify-center"
      >
        <motion.h1 variants={item} className="text-5xl font-medium">
          Marketing solutions that grow your business.
        </motion.h1>
        <motion.p variants={item} className="mt-10 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil
          odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto asperiores
          totam fugiat quaerat explicabo rem magnam incidunt.
        </motion.p>
        <div className="flex flex-wrap gap-6">
          <motion.div variants={item}>
            <Button label={"Our services"} link={"/#services"} scroll={true} />
          </motion.div>
          <motion.div variants={item}>
            <Button label={"Contact us"} grey={true} link={"/contact"} />
          </motion.div>
        </div>
      </motion.div>
      <div className="lg:w-2/5 max-h-[460px] 2xl:max-h-[660px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-none grid-rows-2 sm:grid-rows-none lg:grid-rows-3 lg:gap-x-12 gap-6">
        {images.map((image, index) => (
          <HeroImages key={image.id} image={image} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
