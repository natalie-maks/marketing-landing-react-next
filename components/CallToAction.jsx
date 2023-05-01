import React from "react";
import Button from "./UI/Button";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const CallToAction = () => {
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };
  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 1, type: "tween" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30%" }}
      className="my-40 bg-darkgrey py-12 px-12 rounded-3xl flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0"
    >
      <div className="lg:w-1/2 max-w-[440px] flex flex-col">
        <motion.h2
          variants={fadeItem}
          className="text-4xl text-center pb-6 font-medium leading-tight"
        >
          Ready to start scaling your business now?
        </motion.h2>
        <motion.p variants={fadeItem} className="text-center text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis !
        </motion.p>
      </div>
      <div className="lg:w-1/2 max-w-[440px] flex flex-wrap justify-center gap-6">
        <MotionButton variants={item} label={"Our services"} link={"/#services"} scroll={true} />
        <MotionButton variants={item} label={"Contact us"} grey={true} link={"/contact"} />
      </div>
    </motion.div>
  );
};

export default CallToAction;
