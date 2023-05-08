import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import MotionDiv from "./homeAssets/MotionDiv";

import green2 from "@/assets/green-2.png";
import orange2 from "@/assets/orange-2.png";

const MotionImage = motion(Image);

const AboutSectionTopImages = ({ delay }) => {
  const imgItemLeft = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 0.5, delay: delay },
    },
  };

  return (
    <MotionDiv
      styles={"lg:self-stretch flex w-full lg:w-1/3 xl:w-1/2 max-h-[360px] lg:max-h-none"}
      margin={"-30%"}
    >
      <MotionImage
        variants={imgItemLeft}
        className="w-3/5 lg:w-full xl:w-3/5 h-auto pr-4 xl:pr-8 rounded-full rounded-tr-none object-cover"
        src={green2}
        alt="smiling woman"
        width="612"
        height="853"
      />
      <MotionImage
        variants={imgItemLeft}
        className="lg:self-end lg:hidden xl:flex w-2/5 h-auto lg:h-3/5 rounded-full rounded-bl-none object-cover"
        src={orange2}
        alt="smiling man"
        width="640"
        height="960"
      />
    </MotionDiv>
  );
};

export default AboutSectionTopImages;
