import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import facebook from "@/assets/facebook-icon.svg";
import insta from "@/assets/insta-icon.svg";
import linkedin from "@/assets/linkedin-icon.svg";
import twitter from "@/assets/twitter-icon.svg";
import youtube from "@/assets/youtube-icon.svg";

const Footer = () => {
  return (
    <footer className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-12 lg:gap-8 xl:gap-12 my-20 px-4 md:px-12">
      <div>
        <Image
          src={logo}
          alt="logo"
          width="250"
          height="80"
          className="h-10  w-fit object-scale-down"
        />
        <p className="my-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis obcaecati nihil
          odio perspiciatis nisi veritatis eius consequuntur!
        </p>
        <a
          className="inline-block mr-3 xl:mr-4 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Instagram"
        >
          <Image
            src={insta}
            width="56"
            height="56"
            className="w-full h-full opacity-50 group-hover:opacity-100"
            alt="Instagram"
          />
        </a>
        <a
          className="inline-block mr-3 xl:mr-4 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
          href="https://twitter.com/?lang=en/"
          target="_blank"
          aria-label="Twitter"
        >
          <Image
            src={twitter}
            width="56"
            height="56"
            className="w-full h-full opacity-50 group-hover:opacity-100"
            alt="Twitter"
          />
        </a>
        <a
          className="inline-block mr-3 xl:mr-4 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Facebook"
        >
          <Image
            src={facebook}
            width="56"
            height="56"
            className="w-full h-full opacity-50 group-hover:opacity-100"
            alt="Facebook"
          />
        </a>
        <a
          className="inline-block mr-3 xl:mr-4 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
          href="https://www.youtube.com/"
          target="_blank"
          aria-label="Youtube"
        >
          <Image
            src={youtube}
            width="56"
            height="56"
            className="w-full h-full opacity-50 group-hover:opacity-100"
            alt="Youtube"
          />
        </a>
        <a
          className="inline-block mr-3 w-11 h-11 p-3 rounded-full border-[1px] border-lightgrey hover:border-white transition-all group"
          href="https://www.linkedin.com/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <Image
            src={linkedin}
            width="56"
            height="56"
            className="w-full h-full opacity-50 group-hover:opacity-100"
            alt="LinkedIn"
          />
        </a>
      </div>
      <div>
        <h3 className="text-xl font-medium">Pages</h3>
        <ul className="pt-6 grid grid-cols-2 gap-3">
          <li>
            <Link className="hover:text-white transition-all" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-white transition-all" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-white transition-all" href="/">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-white transition-all" href="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-white transition-all" href="/">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
      <div className="sm:col-span-2 lg:col-span-1">
        <h3 className="text-xl font-medium">Subscribe to our newsletter</h3>
        <p className="my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <form className="flex flex-col sm:flex-row lg:flex-col xl:flex-row">
          <input
            className="py-3 px-6 mr-3 mb-4 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
            type="email"
            required
            placeholder="Your email address"
          />
          <button className="text-white py-3 px-6 mb-4 rounded-full bg-blue hover:translate-y-[-2px] shadow-md hover:shadow-darkblue">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
