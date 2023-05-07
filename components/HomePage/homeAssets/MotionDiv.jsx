import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children, margin, styles }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: margin }}
      variants={container}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
