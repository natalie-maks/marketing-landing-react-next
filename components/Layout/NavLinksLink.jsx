import Link from "next/link";
import { motion } from "framer-motion";

import Button from "../UI/Button";

const NavLinksLink = ({ link, changeClicked, router }) => {
  const list = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.4, type: "tween" },
    },
  };

  if (link.title === "Button") {
    return (
      <motion.li variants={list} className="hidden lg:block pl-6">
        <Button label={"Get started"} link={"/contact"} />
      </motion.li>
    );
  } else {
    return (
      <motion.li
        variants={list}
        onClick={() => changeClicked()}
        className={`${link.styles} hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400`}
      >
        <Link
          href={link.target}
          scroll={false}
          onClick={() => {
            if (link.title === "Home") {
              if (router.route === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          {link.title}
        </Link>
      </motion.li>
    );
  }
};

export default NavLinksLink;
