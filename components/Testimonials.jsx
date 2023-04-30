import React from "react";
import TestimonialCard from "./TestimonialCard";
import Button from "./UI/Button";

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

const Testimonials = () => {
  return (
    <section className="my-40">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <p className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10">
            TESTIMONIALS
          </p>
          <h2 className="text-5xl font-medium">See what our clients say</h2>
          <p className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto
            asperiores totam fugiat quaerat explicabo rem magnam incidunt.
          </p>
        </div>
        <div className="lg:w-1/3 lg:flex mt-8 items-end justify-end">
          <Button label={"Get in touch"} link={"/contact"} />
        </div>
      </div>

      <div className="flex space-x-8 overflow-x-auto  mt-12">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
