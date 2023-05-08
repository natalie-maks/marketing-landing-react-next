import React from "react";
import { motion } from "framer-motion";

import Button from "../UI/Button";

import { item, fadeItem } from "../../assets/motionConst.js";

const CallToAction = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, margin: "-30%" }}
      className="flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0 mt-40 py-12 px-12 rounded-3xl bg-darkgrey"
    >
      <div className="flex flex-col lg:w-1/2 max-w-[440px]">
        <motion.h2
          variants={fadeItem}
          className="pb-6 text-4xl text-center font-medium leading-tight"
        >
          Ready to start scaling your business now?
        </motion.h2>
        <motion.p variants={fadeItem} className="text-lg text-center">
          Get in touch and we will help to grow your business in the shortest time possible!
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:w-1/2 max-w-[440px]">
        <motion.div variants={item}>
          <Button label={"Contact us"} link={"/contact"} scroll={true} />
        </motion.div>
        <motion.div variants={item}>
          <Button label={"Our services"} grey={true} link={"/#services"} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
