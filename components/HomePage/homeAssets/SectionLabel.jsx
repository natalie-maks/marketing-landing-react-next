import React from "react";
import { motion } from "framer-motion";

const SectionLabel = ({ text }) => {
  const label = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: "easeInOut", duration: 0.6 } },
  };
  return (
    <motion.p
      variants={label}
      className="w-fit mb-10 py-2 px-4 rounded-2xl border-[1px] border-lightgrey text-lightgrey"
    >
      {text}
    </motion.p>
  );
};

export default SectionLabel;
