import ServiceSectionCard from "./ServiceSectionCard";

import social from "@/assets/social.svg";
import ads from "@/assets/ads.svg";
import email from "@/assets/email.svg";
import seo from "@/assets/seo.svg";

const services = [
  {
    title: "Social Media Marketing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-1",
    img: social,
    color: "blue",
    styles: "sm:row-start-2	sm:row-end-7",
  },
  {
    title: "Email Marketing",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-2",
    img: email,
    color: "orange",
    styles: "sm:row-start-7 sm:row-end-[12]",
  },
  {
    title: "Paid Advertising",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-3",
    img: ads,
    color: "yellow",
    styles: "sm:row-start-1	sm:row-end-6",
  },
  {
    title: "SEO Optimization",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihilodio perspiciatis",
    id: "service-4",
    img: seo,
    color: "green",
    styles: "sm:row-start-6	sm:row-end-[11]",
  },
];

const ServiceSectionCards = () => {
  return (
    <div className="xl:w-1/2 grid sm:grid-rows-11 gap-6">
      {services.map((service, index) => (
        <ServiceSectionCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServiceSectionCards;
