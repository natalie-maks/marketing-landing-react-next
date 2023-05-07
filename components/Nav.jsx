import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Button from "./UI/Button";

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
        duration: 0.7,
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.5, type: "tween", staggerChildren: 0.1 },
    },
  };
  const list = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.4, type: "tween" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navbar}
      className="fixed top-0 z-10 h-20 w-full bg-darkgrey shadow-md shadow-bggrey"
    >
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <motion.div variants={item}>
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
              src={logo}
              alt="logo"
              width="100"
              height="50"
              className="h-12 w-28 object-scale-down"
            />
          </Link>
        </motion.div>

        <motion.ul
          variants={item}
          className={`${clicked ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          absolute lg:relative top-20 lg:top-0 w-full lg:w-auto left-0 lg:h-full py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-end lg:justify-center space-y-6 lg:space-y-0 lg:space-x-2 text-2xl md:text-lg text-white font-sans font-medium bg-grey lg:bg-inherit transition-all origin-top lg:scale-y-100 lg:opacity-100`}
        >
          <motion.li
            variants={list}
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link
              href="/"
              scroll={false}
              onClick={() => {
                if (router.route === "/") {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            variants={list}
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/#about" scroll={false}>
              About
            </Link>
          </motion.li>
          <motion.li
            variants={list}
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/#services" scroll={false}>
              Services
            </Link>
          </motion.li>
          <motion.li
            variants={list}
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href={router.route === "/" ? "/#blog" : "/articles"} scroll={false}>
              Blog
            </Link>
          </motion.li>
          <motion.li variants={list} className="hidden lg:block pl-6">
            <Button label={"Get started"} link={"/contact"} />
          </motion.li>
        </motion.ul>
        <button
          className="relative lg:hidden z-10 h-6 w-6"
          aria-label="menu"
          onClick={() => setClicked(!clicked)}
        >
          <span className="bg-white absolute top-0 left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[9px] left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[18px] left-0 w-6 h-[3px]"></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
