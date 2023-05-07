import Image from "next/image";

import check from "@/assets/check.svg";

const MessageDialog = ({ clearMessage }) => {
  return (
    <div
      className="fixed inset-0 z-[2] flex items-center p-4 justify-center bg-darkgrey/70"
      onClick={(e) => clearMessage()}
    >
      <div className="flex flex-col items-center p-12 rounded-3xl bg-bggrey">
        <Image
          className="w-20 h-20 p-2 rounded-full bg-grey"
          src={check}
          alt="check sign"
          width="80"
          height="80"
        />
        <h2 className="mt-6 text-xl text-center">Your message has been sent!</h2>
      </div>
    </div>
  );
};

export default MessageDialog;
