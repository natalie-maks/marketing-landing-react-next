import React from "react";
import Image from "next/image";

import star from "@/assets/star.svg";

const TestimonialSectionCard = React.forwardRef(({ testimonial, index }, testimonialCardRef) => {
  let corner =
    index === 0 ? "rounded-tl-none" : index === 1 ? "rounded-tr-none" : "rounded-bl-none";

  return (
    <article
      ref={testimonialCardRef}
      className="flex-1 min-w-[288px] px-8 py-12 rounded-3xl bg-darkgrey overflow-hidden"
    >
      <header className="flex items-center space-x-4">
        <Image
          className={`w-16 h-16 rounded-full ${corner} object-cover`}
          src={testimonial.img}
          alt={testimonial.name}
          width="64"
          height="64"
        />
        <div>
          <p className="mb-1 text-xl text-white">{testimonial.name}</p>
          <p>{testimonial.company}</p>
        </div>
      </header>
      <h3 className="h-[72px] my-6 text-3xl">
        {`"`}
        {testimonial.title}
        {`"`}
      </h3>
      <p className="self-stretch">{testimonial.text}</p>
      <Image
        className="w-auto h-6 mt-6 rounded-full object-cover"
        src={star}
        alt="star icon"
        width="24"
        height="24"
      />
    </article>
  );
});

TestimonialSectionCard.displayName = "TestimonialSectionCard";

export default TestimonialSectionCard;
