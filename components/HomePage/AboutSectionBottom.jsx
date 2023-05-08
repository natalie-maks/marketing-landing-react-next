import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutSectionMetricsCard from "./AboutSectionMetricsCard";

import yellow2 from "@/assets/yellow-2.png";

const metrics = [
  {
    title: "2000+",
    text: "Successful digital projects and marketing services delivered",
    id: "metric-1",
  },
  {
    title: "10+",
    text: "Years of delivering digital experience, since 2011",
    id: "metric-2",
  },
  { title: "25+", text: "Industry experts across various digital solutions", id: "metric-3" },
  {
    title: "30+",
    text: "Industry awards across various indusries",
    id: "metric-4",
  },
];

const MotionImage = motion(Image);

const AboutSectionBottom = ({ delay }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 w-full mt-40">
      <div className="grid sm:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <AboutSectionMetricsCard key={metric.id} metric={metric} index={index} />
        ))}
      </div>
      <MotionImage
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", type: "tween", duration: 0.5, delay: delay }}
        viewport={{ once: true, margin: "-20%" }}
        className="h-[300px] lg:h-[500px] xl:h-[450px] w-full rounded-full rounded-tl-none object-cover"
        src={yellow2}
        alt="smiling man"
        width="640"
        height="960"
      />
    </div>
  );
};

export default AboutSectionBottom;
