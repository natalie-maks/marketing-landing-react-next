import { motion } from "framer-motion";

import NavLinksLink from "./NavLinksLink";

import { navItem } from "../../assets/motionConst.js";

const NavLinks = ({ router, clicked, changeClicked }) => {
  const blogTarget = router.route === "/" ? "/#blog" : "/articles";

  const navLinks = [
    { title: "Home", target: "/", styles: "" },
    { title: "About", target: "/#about", styles: "" },
    { title: "Services", target: "/#services", styles: "" },
    { title: "Blog", target: blogTarget, styles: "" },
    { title: "Contacts", target: "/contact", styles: "lg:hidden" },
    { title: "Button" },
  ];

  return (
    <motion.ul
      variants={navItem}
      className={`${clicked ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          absolute lg:relative top-20 lg:top-0 w-full lg:w-auto left-0 lg:h-full py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-end lg:justify-center space-y-6 lg:space-y-0 lg:space-x-2 text-2xl md:text-lg text-white font-sans font-medium bg-grey lg:bg-inherit transition-all origin-top lg:scale-y-100 lg:opacity-100`}
    >
      {navLinks.map((link) => (
        <NavLinksLink key={link.title} link={link} changeClicked={changeClicked} router={router} />
      ))}
    </motion.ul>
  );
};

export default NavLinks;
