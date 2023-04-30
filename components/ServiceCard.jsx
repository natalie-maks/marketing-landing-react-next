import React from "react";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className={`bg-darkgrey rounded-3xl py-8 px-6 ${service.styles}`}>
      <div className=" p-3 w-fit rounded-3xl bg-blue/5 shadow-md shadow-black/20">
        <Image
          width="48"
          height="48"
          alt={service.title}
          className={`w-12 h-12 bg-${service.color} rounded-full p-2`}
          src={service.img}
        />
      </div>
      <h3 className="my-3 font-medium">{service.title}</h3>
      <p>{service.text}</p>
    </div>
  );
};

export default ServiceCard;
