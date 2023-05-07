import Link from "next/link";
import { motion } from "framer-motion";

import { item, footerColCont } from "../../assets/motionConst.js";

const FooterCol2 = () => {
  return (
    <motion.div variants={footerColCont}>
      <motion.h3 variants={item} className="text-xl font-medium">
        Pages
      </motion.h3>
      <ul className="pt-6 grid grid-cols-2 gap-3">
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/">
            Home
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/#about">
            About
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/#services">
            Services
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/articles">
            Blog
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/contact">
            Contacts
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default FooterCol2;
