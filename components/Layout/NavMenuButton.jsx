import { motion } from "framer-motion";

import { navItem } from "../../assets/motionConst.js";

const NavMenuButton = ({ changeClicked }) => {
  return (
    <motion.button
      variants={navItem}
      className="relative lg:hidden z-10 h-6 w-6"
      aria-label="menu"
      onClick={() => changeClicked()}
    >
      <span className="bg-white absolute top-0 left-0 w-6 h-[3px]"></span>
      <span className="bg-white absolute top-[9px] left-0 w-6 h-[3px]"></span>
      <span className="bg-white absolute top-[18px] left-0 w-6 h-[3px]"></span>
    </motion.button>
  );
};

export default NavMenuButton;
