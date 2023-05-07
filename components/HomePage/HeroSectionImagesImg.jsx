import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const HeroSectionImagesImg = ({ image, index }) => {
  const [delay, setDelay] = useState(index * 0.3);

  useEffect(() => {
    if (window.innerWidth >= 640) setDelay(0.8 + index * 0.2);
  }, []);

  return (
    <MotionImage
      initial={{ opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.5, type: "tween", delay: delay }}
      viewport={{ once: true, margin: "-10%" }}
      width="640"
      height="960"
      alt={image.alt}
      className={`h-full w-full object-cover rounded-full ${image.styles} `}
      src={image.color}
    />
  );
};

export default HeroSectionImagesImg;
