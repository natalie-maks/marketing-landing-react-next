import React from "react";
import Image from "next/image";
import social from "../assets/social.svg";
import ads from "@/assets/ads.svg";
import email from "@/assets/email.svg";
import seo from "@/assets/seo.svg";

const Services = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center gap-12 my-20">
      <div className="xl:w-1/2">
        <p className="py-2 px-4 rounded-2xl text-grey border-[1px] border-grey w-fit mb-10">
          SERVICES
        </p>
        <h2 className="text-5xl font-medium">Services we offer</h2>
        <p className="mt-10 mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil
          odio perspiciatis nisi veritatis eius consequuntur!
        </p>
        <button className="text-white py-3 px-6 rounded-full bg-blue mr-4 md:mr-8 hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
          Contact us
        </button>
      </div>
      <div className="xl:w-1/2 flex flex-col sm:flex-row gap-6">
        <div>
          <div className="bg-darkgrey rounded-3xl py-8 px-6 my-6">
            <div className=" p-3 w-fit rounded-3xl bg-blue/5 shadow-md shadow-black/20">
              <Image className="w-13 h-13 bg-blue rounded-full p-2" src={social} />
            </div>
            <h3 className="my-3 font-medium">Social Media Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis
            </p>
          </div>
          <div className="bg-darkgrey rounded-3xl py-8 px-6">
            <div className=" p-3 w-fit rounded-3xl bg-orange/5 shadow-md shadow-black/20">
              <Image className="w-13 h-13 bg-orange rounded-full p-2" src={email} />
            </div>
            <h3 className="my-3 font-medium">Email Marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis
            </p>
          </div>
        </div>
        <div>
          <div className="bg-darkgrey rounded-3xl py-8 px-6 mb-6">
            <div className=" p-3 w-fit rounded-3xl bg-yellow/5 shadow-md shadow-black/20">
              <Image className="w-13 h-13 bg-yellow rounded-full p-2" src={ads} />
            </div>
            <h3 className="my-3 font-medium">Paid Advertising</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis
            </p>
          </div>
          <div className="bg-darkgrey rounded-3xl py-8 px-6">
            <div className=" p-3 w-fit rounded-3xl bg-green/5 shadow-md shadow-black/20">
              <Image className="w-13 h-13 bg-green rounded-full p-2" src={seo} />
            </div>
            <h3 className="my-3 font-medium">SEO Optimization</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
