import React from "react";
import Link from "next/link";

const Button = React.forwardRef(({ label, link, grey, scroll }, ref) => {
  return (
    <Link
      ref={ref}
      href={link}
      className={`${grey ? "bg-grey hover:shadow-shadowgrey" : "bg-blue hover:shadow-darkblue"} 
        inline-block text-white text-center py-3 px-6 rounded-full  hover:translate-y-[-2px] shadow-md
        `}
      scroll={scroll ? false : true}
    >
      {label}
    </Link>
  );
});

export default Button;
