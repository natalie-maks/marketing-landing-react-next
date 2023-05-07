import Image from "next/image";
import { motion } from "framer-motion";

import { fadeItem } from "../../assets/motionConst.js";

const FooterIconLink = ({ link }) => {
  return (
    <motion.a
      variants={fadeItem}
      className="inline-block mr-3 xl:mr-4 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
      href={link.target}
      target="_blank"
      aria-label={link.alt}
    >
      <Image
        src={link.src}
        width="56"
        height="56"
        className="w-full h-full opacity-50 group-hover:opacity-100"
        alt={link.alt}
      />
    </motion.a>
  );
};

export default FooterIconLink;
