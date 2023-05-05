import React from "react";
import { motion } from "framer-motion";

import social from "../assets/social.svg";
import ads from "@/assets/ads.svg";
import email from "@/assets/email.svg";
import seo from "@/assets/seo.svg";
import Button from "./UI/Button";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Social Media Marketing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-1",
    img: social,
    color: "blue",
    styles: "sm:row-start-2	sm:row-end-7",
  },
  {
    title: "Email Marketing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-2",
    img: email,
    color: "orange",
    styles: "sm:row-start-7 sm:row-end-[12]",
  },
  {
    title: "Paid Advertising",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-3",
    img: ads,
    color: "yellow",
    styles: "sm:row-start-1	sm:row-end-6",
  },
  {
    title: "SEO Optimization",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-4",
    img: seo,
    color: "green",
    styles: "sm:row-start-6	sm:row-end-[11]",
  },
];

const Services = ({ container, item, label }) => {
  return (
    <section id="services" className="flex flex-col xl:flex-row items-center gap-12 pt-20 mb-40">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-30%" }}
        className="xl:w-1/2"
      >
        <motion.p
          variants={label}
          className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10"
        >
          SERVICES
        </motion.p>
        <motion.h2 variants={item} className="text-5xl font-medium">
          Services we offer
        </motion.h2>
        <motion.p variants={item} className="mt-10 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil
          odio perspiciatis nisi veritatis eius consequuntur!
        </motion.p>
        <motion.div variants={item}>
          <Button label={"Contact us"} link={"/contact"} />
        </motion.div>
      </motion.div>
      <div className="xl:w-1/2 grid sm:grid-rows-11 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
