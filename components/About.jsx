import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AboutMetrics from "./AboutMetrics";
import Image from "next/image";
import green2 from "../assets/green-2.png";
import yellow2 from "@/assets/yellow-2.png";
import orange2 from "@/assets/orange-2.png";
import check from "@/assets/check.svg";

const metrics = [
  {
    title: "1.2M+",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati",
    id: "metric-1",
  },
  {
    title: "3.4B",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati",
    id: "metric-2",
  },
  {
    title: "98%",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati",
    id: "metric-3",
  },
  {
    title: "10+",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati",
    id: "metric-4",
  },
];

const MotionImage = motion(Image);

const About = ({ container, item, label }) => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1024) setDelay(0.7);
  }, []);

  const imgItem = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 1, delay: delay },
    },
  };

  const imgItemLeft = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 1, delay: delay },
    },
  };

  return (
    <section id="about" className="pt-20 mb-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30%" }}
          className="w-full max-h-[360px] lg:max-h-none lg:w-1/3 xl:w-1/2 lg:self-stretch flex"
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
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30%" }}
          className="lg:w-2/3 xl:w-1/2 lg:my-20"
        >
          <motion.p
            variants={label}
            className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10"
          >
            WHY CHOOSE US
          </motion.p>
          <motion.h2 variants={item} className="text-5xl font-medium">
            We help great brands scale with content marketing
          </motion.h2>
          <motion.p variants={item} className="mt-10 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur!
          </motion.p>
          <ul className="flex flex-col space-y-3">
            <motion.li variants={item} className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </motion.li>
            <motion.li variants={item} className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </motion.li>
            <motion.li variants={item} className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-16 mt-40">
        <div className="grid sm:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <AboutMetrics variants={item} key={metric.id} metric={metric} index={index} />
          ))}
        </div>
        <MotionImage
          initial="hidden"
          whileInView="show"
          variants={imgItem}
          viewport={{ once: true, margin: "-20%" }}
          className="h-[300px] lg:h-auto max-h-[520px] w-full object-cover rounded-full rounded-tl-none"
          width="640"
          height="960"
          alt="smiling man"
          src={yellow2}
        />
      </div>
    </section>
  );
};

export default About;
