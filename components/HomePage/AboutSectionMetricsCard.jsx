import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutSectionMetricsCard = ({ metric, index }) => {
  const [delay, setDelay] = useState(0.3);

  useEffect(() => {
    window.innerWidth >= 640 ? setDelay(index * 0.3) : setDelay(0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", duration: 0.7, type: "tween", delay: delay }}
      viewport={{ once: true, margin: "-20%" }}
      className="bg-darkgrey rounded-3xl py-10 px-6"
    >
      <h3 className="mb-8 text-4xl font-medium">{metric.title}</h3>
      <p>{metric.text}</p>
    </motion.div>
  );
};

export default AboutSectionMetricsCard;
