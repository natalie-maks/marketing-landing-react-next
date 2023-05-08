import { motion } from "framer-motion";

import TestimonialSectionCard from "./TestimonialSectionCard";

import SectionLabel from "./homeAssets/SectionLabel";
import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";
import Button from "../UI/Button";

import { item } from "../../assets/motionConst.js";

const testimonials = [
  {
    id: 1234,
    name: "Sophia Miller",
    company: "Company Name",
    img: "/review-1.png",
    title: "I recommend this agency",
    text: "In the time that I have been using WeGrow services, the experience has been a breath of fresh air. WeGrow stands out from the rest!",
  },
  {
    id: 2345,
    name: "Alice Smith",
    company: "Company Name",
    img: "/review-2.png",
    title: "The support is awesome",
    text: "Passionate marketers and customer centric. Haven't seen much of the agencies who are passionate about customer service.",
  },
  {
    id: 3456,
    name: "James Brown",
    company: "Company Name",
    img: "/review-3.png",
    title: "The best results",
    text: "We have been working with WeGrow for over a year and have been really impressed with the results the team is delivering.",
  },
];

const MotionTestimonialSectionCard = motion(TestimonialSectionCard);

const TestimonialsSection = () => {
  const paragraph =
    "The review of our clients is the best way to show what WeGrow can do. We are not only building campaings and optimize websites. We deliver outstanding experince of digital world to our clients!";

  return (
    <section>
      <MotionDiv styles={"flex flex-col lg:flex-row"} margin={"-30%"}>
        <div className="lg:w-2/3">
          <SectionLabel text={"TESTIMONIALS"} />
          <HomeHeaders text={"See what our clients say"} />
          <HomeParagraph text={paragraph} />
        </div>
        <div className="lg:w-1/3 lg:flex lg:items-end lg:justify-end mt-8">
          <motion.div variants={item}>
            <Button label={"Get in touch"} link={"/contact"} />
          </motion.div>
        </div>
      </MotionDiv>

      <MotionDiv styles={"flex space-x-8 pt-12 overflow-x-auto"} margin={"-40%"}>
        {testimonials.map((testimonial, index) => (
          <MotionTestimonialSectionCard
            key={testimonial.id}
            variants={item}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </MotionDiv>
    </section>
  );
};

export default TestimonialsSection;
