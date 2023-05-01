import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import green from "../assets/green.png";
import yellow from "@/assets/yellow.png";
import orange from "@/assets/orange.png";
import blue from "@/assets/blue.png";
import Button from "./UI/Button";

const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  const imgContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.35,
      },
    },
  };

  const imgItem = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 1 },
    },
  };

  return (
    <section className="flex items-center flex-col lg:flex-row gap-20 lg:gap-32 pt-32 mb-40">
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
          <MotionButton variants={item} label={"Our services"} link={"/#services"} scroll={true} />
          <MotionButton variants={item} label={"Contact us"} grey={true} link={"/contact"} />
        </div>
      </motion.div>
      <motion.div
        variants={imgContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:w-2/5 max-h-[460px] 2xl:max-h-[660px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-none grid-rows-2 sm:grid-rows-none lg:grid-rows-3 lg:gap-x-12 gap-6"
      >
        <MotionImage
          variants={imgItem}
          width="640"
          height="960"
          alt="smiling woman with tablet"
          className="h-full w-full object-cover rounded-full rounded-br-none lg:row-start-1 lg:row-end-3"
          src={green}
        />
        <MotionImage
          variants={imgItem}
          width="640"
          height="960"
          alt="smiling woman"
          className="h-full w-full object-cover rounded-full rounded-bl-none lg:row-start-3 lg:row-end-4"
          src={yellow}
        />
        <MotionImage
          variants={imgItem}
          width="640"
          height="960"
          alt="smiling man"
          className="h-full w-full object-cover rounded-full rounded-tr-none lg:row-start-1 lg:row-end-2"
          src={blue}
        />
        <MotionImage
          variants={imgItem}
          width="640"
          height="960"
          alt="smiling man in glasses"
          className="h-full w-full object-cover rounded-full rounded-tl-none lg:row-start-2 lg:row-end-4"
          src={orange}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
