import { motion } from "framer-motion";

import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const CallToAction = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.7,
        delayChildren: 0.5,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, margin: "-30%" }}
      className="mt-40 bg-darkgrey py-12 px-12 rounded-3xl flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0"
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
        <motion.div variants={item}>
          <Button label={"Our services"} link={"/#services"} scroll={true} />
        </motion.div>
        <motion.div variants={item}>
          <Button label={"Contact us"} grey={true} link={"/contact"} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
