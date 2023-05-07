import { motion } from "framer-motion";

import { navItem } from "../../assets/motionConst.js";

const NavMenuButton = ({ changeClicked }) => {
  return (
    <motion.button
      variants={navItem}
      className="relative z-10 lg:hidden w-6 h-6"
      aria-label="menu"
      onClick={() => changeClicked()}
    >
      <span className="absolute top-0 left-0 w-6 h-[3px] bg-white"></span>
      <span className="absolute top-[9px] left-0 w-6 h-[3px] bg-white"></span>
      <span className="absolute top-[18px] left-0 w-6 h-[3px] bg-white"></span>
    </motion.button>
  );
};

export default NavMenuButton;
