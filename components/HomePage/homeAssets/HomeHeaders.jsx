import React from "react";
import { motion } from "framer-motion";

const HomeHeaders = ({ text, h1 }) => {
  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  if (h1) {
    return (
      <motion.h1 variants={item} className="text-5xl font-medium">
        {text}
      </motion.h1>
    );
  } else {
    return (
      <motion.h2 variants={item} className="text-5xl font-medium">
        {text}
      </motion.h2>
    );
  }
};

export default HomeHeaders;
