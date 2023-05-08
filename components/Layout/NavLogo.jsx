import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import logo from "@/assets/logo.png";

import { navItem } from "../../assets/motionConst.js";

const NavLogo = ({ router }) => {
  return (
    <motion.div variants={navItem}>
      <Link
        href="/"
        onClick={() => {
          if (router.route === "/") {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
        scroll={false}
        aria-label="Main page"
      >
        <Image
          className="h-12 w-28 object-scale-down"
          src={logo}
          alt="logo"
          width="250"
          height="80"
        />
      </Link>
    </motion.div>
  );
};

export default NavLogo;
