import React from "react";
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

const MotionAboutMetrics = motion(AboutMetrics);
const MotionImage = motion(Image);

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.7, type: "tween" } },
  };

  const imgItem = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 1 },
    },
  };

  const imgItemLeft = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", type: "tween", duration: 1, delay: 0.7 },
    },
  };

  const label = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: "easeInOut", duration: 1.2 } },
  };

  return (
    <section id="about" className="my-40">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30%" }}
          className="w-full md:h-[400px] lg:h-auto lg:w-1/2 lg:self-stretch flex space-x-4 lg:space-x-8"
        >
          <MotionImage
            variants={imgItemLeft}
            className="w-3/5 h-auto object-cover rounded-full rounded-tr-none"
            width="612"
            height="853"
            alt="smiling woman"
            src={green2}
          />
          <MotionImage
            variants={imgItemLeft}
            className="w-2/5 h-auto lg:h-2/5 lg:self-end object-cover rounded-full rounded-bl-none"
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
          className="lg:w-1/2 lg:my-20"
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
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30%" }}
        className="flex flex-col lg:flex-row w-full gap-16 mt-40"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {metrics.map((metric) => (
            <MotionAboutMetrics variants={item} key={metric.id} metric={metric} />
          ))}
        </div>
        <MotionImage
          variants={imgItem}
          className="max-h-[520px] w-full  object-cover rounded-full rounded-tl-none"
          width="640"
          height="960"
          alt="smiling man"
          src={yellow2}
        />
      </motion.div>
    </section>
  );
};

export default About;
