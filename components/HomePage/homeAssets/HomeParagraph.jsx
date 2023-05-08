import React from "react";
import { motion } from "framer-motion";

import { item } from "../../../assets/motionConst.js";

const HomeParagraph = ({ text }) => {
  return (
    <motion.p variants={item} className="mt-10 text-lg leading-normal">
      {text}
    </motion.p>
  );
};

export default HomeParagraph;
