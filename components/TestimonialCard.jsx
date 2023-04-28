import React from "react";
import Image from "next/image";
import star from "@/assets/star.svg";

const TestimonialCard = ({ testimonial, index }) => {
  let corner =
    index === 0 ? "rounded-tl-none" : index === 1 ? "rounded-tr-none" : "rounded-bl-none";

  return (
    <article className="min-w-[288px] grow px-8 py-12 rounded-3xl  bg-darkgrey overflow-hidden">
      <header className="flex space-x-4 items-center">
        <img
          className={`${corner} w-16 h-16 object-cover rounded-full `}
          width="640"
          height="640"
          alt={testimonial.name}
          src={testimonial.img}
        />
        <div>
          <p className="text-xl mb-1 text-white">{testimonial.name}</p>
          <p>{testimonial.company}</p>
        </div>
      </header>
      <h3 className="text-3xl my-6">"{testimonial.title}"</h3>
      <p>{testimonial.text}</p>
      <Image
        className="h-6 mt-6 w-auto object-cover rounded-full"
        width="500"
        height="100"
        alt=""
        src={star}
      />
    </article>
  );
};

export default TestimonialCard;
