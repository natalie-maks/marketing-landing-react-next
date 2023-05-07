import React from "react";
import { motion } from "framer-motion";

const HomeParagraph = ({ text }) => {
  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  return (
    <motion.p variants={item} className="mt-10 mb-8">
      {text}
    </motion.p>
  );
};

export default HomeParagraph;
