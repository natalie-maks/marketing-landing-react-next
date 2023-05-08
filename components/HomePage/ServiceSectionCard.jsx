import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceSectionCard = ({ service, index }) => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 640) setDelay(index * 0.15);
    if (window.innerWidth >= 1280) setDelay(0.8 + index * 0.15);
  }, []);

  let color;
  let colorShade;

  switch (service.color) {
    case "green":
      color = "bg-green";
      colorShade = "bg-green/5";
      break;
    case "orange":
      color = "bg-orange";
      colorShade = "bg-orange/5";
      break;
    case "yellow":
      color = "bg-yellow";
      colorShade = "bg-yellow/5";
      break;
    default:
      color = "bg-blue";
      colorShade = "bg-blue/5";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.4, type: "tween", delay: delay }}
      viewport={{ once: true, margin: "-20%" }}
      className={`py-8 px-6 rounded-3xl bg-darkgrey ${service.styles}`}
    >
      <div className={`w-fit p-3 rounded-3xl ${colorShade} shadow-md shadow-black/20`}>
        <Image
          className={`w-12 h-12 p-2 rounded-full ${color}`}
          src={service.img}
          alt={service.title}
          width="48"
          height="48"
        />
      </div>
      <h3 className="my-3 font-medium">{service.title}</h3>
      <p>{service.text}</p>
    </motion.div>
  );
};

export default ServiceSectionCard;
