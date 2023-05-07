import Image from "next/image";

import check from "@/assets/check.svg";

const MessageDialog = ({ clearMessage }) => {
  return (
    <div
      className="fixed inset-0 z-[2] p-4 bg-darkgrey/70 flex items-center justify-center"
      onClick={(e) => clearMessage()}
    >
      <div className="rounded-3xl p-12 bg-bggrey flex flex-col items-center">
        <Image className="w-20 h-20 bg-grey rounded-full p-1" alt="check sign" src={check} />
        <h2 className="text-xl mt-6 text-center">Your message has been sent!</h2>
      </div>
    </div>
  );
};

export default MessageDialog;
