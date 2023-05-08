import Image from "next/image";
import { motion } from "framer-motion";

import FooterIconLink from "./FooterIconLink";

import { item, footerColCont } from "../../assets/motionConst.js";

import logo from "@/assets/logo.png";
import facebook from "@/assets/facebook-icon.svg";
import insta from "@/assets/insta-icon.svg";
import linkedin from "@/assets/linkedin-icon.svg";
import twitter from "@/assets/twitter-icon.svg";
import youtube from "@/assets/youtube-icon.svg";

const links = [
  { src: insta, alt: "Instagram", target: "https://www.instagram.com/" },
  { src: twitter, alt: "Twitter", target: "https://twitter.com/?lang=en/" },
  { src: facebook, alt: "Facebook", target: "https://www.facebook.com/" },
  { src: youtube, alt: "Youtube", target: "https://www.youtube.com/" },
  { src: linkedin, alt: "LinkedIn", target: "https://www.linkedin.com/" },
];

const FooterCol1 = () => {
  return (
    <motion.div variants={footerColCont}>
      <motion.div variants={item}>
        <Image
          className="w-fit h-10 object-scale-down"
          src={logo}
          alt="logo"
          width="250"
          height="80"
        />
      </motion.div>
      <motion.p variants={item} className="my-8">
        WeGrow is a marketing agency that helps brands scale with digital tools including social
        media marketing, paid advertising, email marketing, SEO optimization!
      </motion.p>
      {links.map((link) => (
        <FooterIconLink key={link.target} link={link} />
      ))}
    </motion.div>
  );
};

export default FooterCol1;
