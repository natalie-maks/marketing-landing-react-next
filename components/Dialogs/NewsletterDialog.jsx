import React from "react";
import Image from "next/image";

import check from "@/assets/check.svg";

const NewsletterDialog = ({ clearMessage }) => {
  return (
    <div
      className="fixed inset-0 z-[2] flex items-center p-4 justify-center bg-darkgrey/70"
      onClick={(e) => clearMessage()}
    >
      <div className="flex flex-wrap items-center justify-center gap-10 py-12 px-16 rounded-3xl bg-bggrey">
        <Image
          className="w-20 h-20 p-2 rounded-full bg-grey"
          src={check}
          alt="check sign"
          width="80"
          height="80"
        />
        <h2 className="text-2xl font-semibold">Subscribed!</h2>
      </div>
    </div>
  );
};

export default NewsletterDialog;
