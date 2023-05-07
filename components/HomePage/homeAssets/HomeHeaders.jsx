import React from "react";
import { motion } from "framer-motion";

import { item } from "../../../assets/motionConst.js";

const HomeHeaders = ({ text, h1 }) => {
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
