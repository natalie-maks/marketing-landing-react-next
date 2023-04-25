import React from "react";
import Image from "next/image";
import star from "@/assets/star.svg";

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
          <button className="text-white block py-3 px-6 rounded-full bg-blue hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
            Get in touch
          </button>
        </div>
      </div>

      <div className="flex space-x-8 overflow-x-auto  mt-12">
        <article className="min-w-[288px] grow px-8 py-12 rounded-3xl bg-darkgrey overflow-hidden">
          <header className="flex space-x-4 items-center">
            <img
              className="w-16 h-16 object-cover rounded-full"
              width="100"
              height="100"
              src="/post1.jpg"
            />
            <div>
              <p className="text-xl mb-1 text-white">John Doe</p>
              <p>Company Name</p>
            </div>
          </header>

          <h3 className="text-3xl mt-4 mb-6">"I recommend this agency"</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum
          </p>
          <Image
            className="h-6 mt-6 w-auto object-cover rounded-full"
            width="500"
            height="100"
            src={star}
          />
        </article>
        <article className="min-w-[288px] grow px-8 py-12 rounded-3xl bg-darkgrey overflow-hidden">
          <header className="flex space-x-4 items-center">
            <img
              className="w-16 h-16 object-cover rounded-full"
              width="100"
              height="100"
              src="/post1.jpg"
            />
            <div>
              <p className="text-xl mb-1 text-white">John Doe</p>
              <p>Company Name</p>
            </div>
          </header>

          <h3 className="text-3xl mt-4 mb-6">"I recommend this agency"</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum
          </p>
          <Image
            className="h-6 mt-6 w-auto object-cover rounded-full"
            width="500"
            height="100"
            src={star}
          />
        </article>
        <article className="min-w-[288px] grow px-8 py-12 rounded-3xl bg-darkgrey overflow-hidden">
          <header className="flex space-x-4 items-center">
            <img
              className="w-16 h-16 object-cover rounded-full"
              width="100"
              height="100"
              src="/post1.jpg"
            />
            <div>
              <p className="text-xl mb-1 text-white">John Doe</p>
              <p>Company Name</p>
            </div>
          </header>

          <h3 className="text-3xl mt-4 mb-6">"I recommend this agency"</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum
          </p>
          <Image
            className="h-6 mt-6 w-auto object-cover rounded-full"
            width="500"
            height="100"
            src={star}
          />
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
