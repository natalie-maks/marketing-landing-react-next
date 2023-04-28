import React from "react";
import Link from "next/link";
import Image from "next/image";
import green from "../assets/green.png";
import yellow from "@/assets/yellow.png";
import orange from "@/assets/orange.png";
import blue from "@/assets/blue.png";

const Hero = () => {
  return (
    <section className="flex items-center flex-col lg:flex-row gap-20 lg:gap-32 pt-32 mb-40">
      <div className="lg:w-3/5 flex flex-col justify-center">
        <h1 className="text-5xl font-medium">Marketing solutions that grow your business.</h1>
        <p className="mt-10 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil
          odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto asperiores
          totam fugiat quaerat explicabo rem magnam incidunt.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block text-white py-3 px-6 rounded-full bg-blue mr-4 md:mr-8 hover:translate-y-[-2px] shadow-md hover:shadow-darkblue"
          >
            Our services
          </Link>
          <Link
            href="/"
            className="inline-block text-white py-3 px-6 rounded-full bg-grey hover:translate-y-[-2px] shadow-md hover:shadow-shadowgrey"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="lg:w-2/5 max-h-[460px] 2xl:max-h-[660px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 grid-rows-2 sm:grid-rows-none lg:grid-rows-3 lg:gap-x-12 gap-6">
        <Image
          width="640"
          height="960"
          alt="smiling woman with tablet"
          className="w-full h-full object-cover rounded-full rounded-br-none lg:row-span-2"
          src={green}
        />
        <Image
          width="640"
          height="960"
          alt="smiling man"
          className="w-full h-full object-cover rounded-full rounded-tr-none"
          src={blue}
        />
        <Image
          width="640"
          height="960"
          alt="smiling man in glasses"
          className="w-full h-full object-cover rounded-full rounded-tl-none lg:row-span-2"
          src={orange}
        />
        <Image
          width="640"
          height="960"
          alt="smiling woman"
          className="w-full h-full object-cover rounded-full rounded-bl-none "
          src={yellow}
        />
      </div>
    </section>
  );
};

export default Hero;
