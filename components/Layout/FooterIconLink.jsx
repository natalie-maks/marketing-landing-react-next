import Image from "next/image";
import { motion } from "framer-motion";

import { fadeItem } from "../../assets/motionConst.js";

const FooterIconLink = ({ link }) => {
  return (
    <motion.a
      variants={fadeItem}
      className="inline-block w-11 h-11 p-3 mr-3 xl:mr-4 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
      href={link.target}
      target="_blank"
      aria-label={link.alt}
    >
      <Image
        className="w-full h-full opacity-50 group-hover:opacity-100"
        src={link.src}
        alt={link.alt}
        width="100"
        height="100"
      />
    </motion.a>
  );
};

export default FooterIconLink;
