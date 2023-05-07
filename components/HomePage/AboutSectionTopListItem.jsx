import Image from "next/image";
import { motion } from "framer-motion";

import check from "@/assets/check.svg";

import { item } from "../../assets/motionConst.js";

const AboutSectionTopListItem = ({ listItem }) => {
  return (
    <motion.li variants={item} className="flex items-center">
      <Image
        className="block w-10 h-10 mr-4 p-1 rounded-full bg-grey"
        src={check}
        alt="check sign"
        width="40"
        height="40"
      />
      <span>{listItem}</span>
    </motion.li>
  );
};

export default AboutSectionTopListItem;
