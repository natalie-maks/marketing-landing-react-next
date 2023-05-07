import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavMenuButton from "./NavMenuButton";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const router = useRouter();

  const navbar = {
    hidden: { opacity: 0, y: `-100%` },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        type: "tween",
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const changeClicked = () => {
    setClicked(!clicked);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navbar}
      className="fixed top-0 z-10 w-full h-20 bg-darkgrey shadow-md shadow-bggrey"
    >
      <div className="container flex items-center justify-between h-full mx-auto px-4">
        <NavLogo router={router} />
        <NavLinks router={router} clicked={clicked} changeClicked={changeClicked} />
        <NavMenuButton changeClicked={changeClicked} />
      </div>
    </motion.nav>
  );
};

export default Nav;
