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
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum",
  },
  {
    id: 2345,
    name: "Alice Smith",
    company: "Company Name",
    img: "/review-2.png",
    title: "The support is awesome",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum",
  },
  {
    id: 3456,
    name: "James Brown",
    company: "Company Name",
    img: "/review-3.png",
    title: "A game changer for us",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum",
  },
];

const MotionTestimonialSectionCard = motion(TestimonialSectionCard);

const TestimonialsSection = () => {
  const paragraph =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecatim nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto asperiores totam fugiat quaerat explicabo rem magnam incidunt.";

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
