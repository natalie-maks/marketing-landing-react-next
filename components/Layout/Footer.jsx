import { motion } from "framer-motion";

import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";
import FooterCol3 from "./FooterCol3";

const Footer = () => {
  const footer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      exit="exit"
      variants={footer}
      viewport={{ once: true, margin: "-20%" }}
      className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-12 lg:gap-8 xl:gap-12 mx-auto py-20 px-4 md:px-12"
    >
      <FooterCol1 />
      <FooterCol2 />
      <FooterCol3 />
    </motion.footer>
  );
};

export default Footer;
