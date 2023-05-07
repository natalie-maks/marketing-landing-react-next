import Image from "next/image";
import { motion } from "framer-motion";

import check from "@/assets/check.svg";

import { item } from "../../assets/motionConst.js";

const AboutSectionTopListItem = ({ listItem }) => {
  return (
    <motion.li variants={item} className="flex items-center">
      <Image
        className="w-10 h-10 bg-grey rounded-full p-1 block mr-4"
        alt="check sign"
        src={check}
      />
      <span>{listItem}</span>
    </motion.li>
  );
};

export default AboutSectionTopListItem;
