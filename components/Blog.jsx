import Link from "next/link";
import Image from "next/image";
import React from "react";
import post1 from "@/assets/post1.jpg";

const Blog = () => {
  return (
    <section className="my-40">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <p className="py-2 px-4 rounded-2xl text-lightgrey border-[1px] border-lightgrey w-fit mb-10">
            BLOG
          </p>
          <h2 className="text-5xl font-medium">Read our articles & news</h2>
          <p className="mt-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
            nihil odio perspiciatis nisi veritatis eius consequuntur! Iusto nostrum architecto
            asperiores totam fugiat quaerat explicabo rem magnam incidunt.
          </p>
        </div>
        <div className="lg:w-1/3 lg:flex mt-8 items-end justify-end">
          <button className="text-white block py-3 px-6 rounded-full bg-blue hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
            All Posts
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-12">
        <article className="rounded-3xl bg-darkgrey overflow-hidden">
          <Image className="w-full h-52 object-cover" width="500" height="300" src={post1} />
          <div className="p-8">
            <time>August 28, 2022</time>
            <h3 className="text-lg mt-4 mb-6">How to use social proof in marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis nisi veritatis eius consequuntur
            </p>
            <Link className="text-linkblue mt-4 font-medium block" href="/">
              Read now
            </Link>
          </div>
        </article>
        <article className="rounded-3xl bg-darkgrey overflow-hidden">
          <Image className="w-full h-52 object-cover" width="500" height="300" src={post1} />
          <div className="p-8">
            <time>August 28, 2022</time>
            <h3 className="text-lg mt-4 mb-6">How to use social proof in marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis nisi veritatis eius consequuntur
            </p>
            <Link className="text-linkblue mt-4 font-medium block" href="/">
              Read now
            </Link>
          </div>
        </article>
        <article className="rounded-3xl bg-darkgrey overflow-hidden">
          <Image className="w-full h-52 object-cover" width="500" height="300" src={post1} />
          <div className="p-8">
            <time>August 28, 2022</time>
            <h3 className="text-lg mt-4 mb-6">How to use social proof in marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis nisi veritatis eius consequuntur
            </p>
            <Link className="text-linkblue mt-4 font-medium block" href="/">
              Read now
            </Link>
          </div>
        </article>
        <article className="rounded-3xl bg-darkgrey overflow-hidden">
          <Image className="w-full h-52 object-cover" width="500" height="300" src={post1} />
          <div className="p-8">
            <time>August 28, 2022</time>
            <h3 className="text-lg mt-4 mb-6">How to use social proof in marketing</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati
              nihil odio perspiciatis nisi veritatis eius consequuntur
            </p>
            <Link className="text-linkblue mt-4 font-medium block" href="/">
              Read now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;
