import React from "react";

import ServiceSectionCard from "./ServiceSectionCard";

import social from "@/assets/social.svg";
import ads from "@/assets/ads.svg";
import email from "@/assets/email.svg";
import seo from "@/assets/seo.svg";

const services = [
  {
    title: "Social Media Marketing",
    text: "Whether you want to launch your business on TikTok, run ads on Instagram or anything in between, we can help",
    id: "service-1",
    img: social,
    color: "blue",
    styles: "sm:row-start-2	sm:row-end-7",
  },
  {
    title: "Email Marketing",
    text: "Defining your target audience and researching your competitors to ensure your strategy is always several steps ahead",
    id: "service-2",
    img: email,
    color: "orange",
    styles: "sm:row-start-7 sm:row-end-[12]",
  },
  {
    title: "Paid Advertising",
    text: "We can help you get your business seen by your ideal audience using PPC marketing with Paid Search or Paid Social",
    id: "service-3",
    img: ads,
    color: "yellow",
    styles: "sm:row-start-1	sm:row-end-6",
  },
  {
    title: "SEO Optimization",
    text: "Boosting visibility, gaining trust and authority that keeps your website and your brand in top of search",
    id: "service-4",
    img: seo,
    color: "green",
    styles: "sm:row-start-6	sm:row-end-[11]",
  },
];

const ServiceSectionCards = () => {
  return (
    <div className="grid sm:grid-rows-11 gap-6 xl:w-1/2">
      {services.map((service, index) => (
        <ServiceSectionCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServiceSectionCards;
