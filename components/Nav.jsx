import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Button from "./UI/Button";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="fixed top-0 z-10 h-20 w-full bg-darkgrey shadow-md shadow-bggrey">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <Link
          href="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          scroll={false}
          aria-label="Main page"
        >
          <Image
            src={logo}
            alt="logo"
            width="100"
            height="50"
            className="h-12 w-28 object-scale-down"
          />
        </Link>
        <ul
          className={`${clicked ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          absolute lg:relative top-20 lg:top-0 w-full lg:w-auto left-0 lg:h-full py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-end lg:justify-center space-y-6 lg:space-y-0 lg:space-x-2 text-2xl md:text-lg text-white font-sans font-medium bg-grey lg:bg-inherit transition-all origin-top lg:scale-y-100 lg:opacity-100`}
        >
          <li
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link
              href="/"
              scroll={false}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/#about" scroll={false}>
              About
            </Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/#services" scroll={false}>
              Services
            </Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-darkblue transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/#blog" scroll={false}>
              Blog
            </Link>
          </li>
          <li className="hidden lg:block pl-6">
            <Button label={"Get started"} link={"/contact"} />
          </li>
        </ul>
        <button
          className="relative lg:hidden z-10 h-6 w-6"
          aria-label="menu"
          onClick={() => setClicked(!clicked)}
        >
          <span className="bg-white absolute top-0 left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[9px] left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[18px] left-0 w-6 h-[3px]"></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
