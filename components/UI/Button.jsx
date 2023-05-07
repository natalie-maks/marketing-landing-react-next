import React from "react";
import Link from "next/link";

const Button = ({ label, link, grey }) => {
  return (
    <Link
      className={`${grey ? "bg-grey hover:shadow-shadowgrey" : "bg-blue hover:shadow-darkblue"} 
        inline-block py-3 px-6 rounded-full shadow-md text-center text-white hover:translate-y-[-2px]`}
      href={link}
      scroll={false}
    >
      {label}
    </Link>
  );
};

export default Button;
