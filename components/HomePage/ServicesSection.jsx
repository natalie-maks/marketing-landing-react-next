import { motion } from "framer-motion";

import ServiceSectionCards from "./ServiceSectionCards";

import SectionLabel from "./homeAssets/SectionLabel";
import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";
import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const ServicesSection = () => {
  const paragraph =
    "We can help you gain new clients, boost your website in search results, communicate with your customers. All the wonderful things of the digital world!";

  return (
    <section
      id="services"
      className="flex flex-col xl:flex-row items-center gap-12 mt-12 mb-40 pt-28"
    >
      <MotionDiv styles={"xl:w-1/2"} margin={"-30%"}>
        <SectionLabel text={"SERVICES"} />
        <HomeHeaders text={"Services we offer"} />
        <HomeParagraph text={paragraph} />
        <motion.div variants={item} className="mt-8">
          <Button label={"Contact us"} link={"/contact"} />
        </motion.div>
      </MotionDiv>

      <ServiceSectionCards />
    </section>
  );
};

export default ServicesSection;
