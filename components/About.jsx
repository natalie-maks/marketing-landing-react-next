import React from "react";
import Image from "next/image";
import green2 from "../assets/green-2.png";
import yellow2 from "@/assets/yellow-2.png";
import orange2 from "@/assets/orange-2.png";
import check from "@/assets/check.svg";

const About = () => {
  return (
    <section className="my-40">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full md:h-[400px] lg:h-auto lg:w-1/2 lg:self-stretch flex space-x-4 lg:space-x-8">
          <Image
            className="w-3/5 h-auto object-cover rounded-full rounded-tr-none"
            width="612"
            height="853"
            alt="smiling woman"
            src={green2}
          />
          <Image
            className="w-2/5 h-auto lg:h-2/5 lg:self-end object-cover rounded-full rounded-bl-none"
            width="640"
            height="960"
            alt="smiling man"
            src={orange2}
          />
        </div>
        <div className="lg:w-1/2 lg:my-20">
          <p className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10">
            WHY CHOOSE US
          </p>
          <h2 className="text-5xl font-medium">
            We help great brands scale with content marketing
          </h2>
          <p className="mt-10 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur!
          </p>
          <ul className="flex flex-col space-y-3">
            <li className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </li>
            <li className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </li>
            <li className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </li>
            <li className="flex items-center">
              <Image className="w-10 h-10 bg-grey rounded-full p-1 block mr-4" alt="" src={check} />
              <span>Some text in here</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-16 mt-40">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-darkgrey rounded-3xl py-10 px-6">
            <h3 className="mb-8 text-4xl font-medium">1.2M+</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            </p>
          </div>
          <div className="bg-darkgrey rounded-3xl py-10 px-6">
            <h3 className="mb-8 text-4xl font-medium">3.4B</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            </p>
          </div>
          <div className="bg-darkgrey rounded-3xl py-10 px-6">
            <h3 className="mb-8 text-4xl font-medium">98%</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            </p>
          </div>
          <div className="bg-darkgrey rounded-3xl py-10 px-6">
            <h3 className="mb-8 text-4xl font-medium">10+</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            </p>
          </div>
        </div>
        <Image
          className="max-h-[520px] w-full  object-cover rounded-full rounded-tl-none"
          width="640"
          height="960"
          alt="smiling man"
          src={yellow2}
        />
      </div>
    </section>
  );
};

export default About;
