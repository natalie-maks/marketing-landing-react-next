import React from "react";
import Link from "next/link";

const Button = ({ label, link, grey }) => {
  return (
    <Link
      href={link}
      className={`${grey ? "bg-grey hover:shadow-shadowgrey" : "bg-blue hover:shadow-darkblue"} 
        inline-block text-white text-center py-3 px-6 rounded-full  hover:translate-y-[-2px] shadow-md
        `}
      scroll={false}
    >
      {label}
    </Link>
  );
};

export default Button;
