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
      transition: { ease: "easeInOut", type: "tween", duration: 1, delay: delay },
    },
  };

  return (
    <MotionDiv
      styles={"w-full max-h-[360px] lg:max-h-none lg:w-1/3 xl:w-1/2 lg:self-stretch flex"}
      margin={"-30%"}
    >
      <MotionImage
        variants={imgItemLeft}
        className="w-3/5 lg:w-full xl:w-3/5 h-auto object-cover rounded-full rounded-tr-none pr-4 xl:pr-8"
        width="612"
        height="853"
        alt="smiling woman"
        src={green2}
      />
      <MotionImage
        variants={imgItemLeft}
        className="lg:hidden xl:flex w-2/5 h-auto lg:h-3/5 lg:self-end object-cover rounded-full rounded-bl-none"
        width="640"
        height="960"
        alt="smiling man"
        src={orange2}
      />
    </MotionDiv>
  );
};

export default AboutSectionTopImages;
