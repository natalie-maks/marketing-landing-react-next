import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children, margin, styles }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: margin }}
      className={styles}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
