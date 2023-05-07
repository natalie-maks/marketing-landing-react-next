import Image from "next/image";

import check from "@/assets/check.svg";

const NewsletterDialog = ({ clearMessage }) => {
  return (
    <div
      className="fixed inset-0 z-[2] p-4 bg-grey/40 flex items-center justify-center"
      onClick={(e) => clearMessage()}
    >
      <div className="rounded-3xl py-12 px-16 bg-bggrey flex flex-wrap items-center justify-center gap-10">
        <Image className="w-20 h-20 bg-grey rounded-full p-1" alt="check sign" src={check} />
        <h2 className="text-2xl font-semibold">Subscribed!</h2>
      </div>
    </div>
  );
};

export default NewsletterDialog;
