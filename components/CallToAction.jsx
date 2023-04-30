import React from "react";
import Button from "./UI/Button";

const CallToAction = () => {
  return (
    <div className="my-40 bg-darkgrey py-12 px-12 rounded-3xl flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0">
      <div className="lg:w-1/2 max-w-[440px] flex flex-col">
        <h2 className="text-4xl text-center pb-6 font-medium leading-tight">
          Ready to start scaling your business now?
        </h2>
        <p className="text-center text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ratione quis !
        </p>
      </div>
      <div className="lg:w-1/2 max-w-[440px] flex flex-wrap justify-center gap-6">
        <Button label={"Our services"} link={"/#services"} scroll={true} />
        <Button label={"Contact us"} grey={true} link={"/contact"} />
      </div>
    </div>
  );
};

export default CallToAction;
