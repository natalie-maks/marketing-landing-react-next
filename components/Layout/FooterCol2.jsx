import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { item, footerColCont } from "../../assets/motionConst.js";

const FooterCol2 = () => {
  return (
    <motion.div variants={footerColCont}>
      <motion.h3 variants={item} className="text-xl font-medium">
        Pages
      </motion.h3>
      <ul className="grid grid-cols-2 gap-3 pt-6">
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/" scroll={false}>
            Home
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/#about" scroll={false}>
            About
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/#services" scroll={false}>
            Services
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/articles" scroll={false}>
            Blog
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link className="hover:text-white transition-all" href="/contact" scroll={false}>
            Contacts
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default FooterCol2;
