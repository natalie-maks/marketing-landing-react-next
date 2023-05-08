import React from "react";

import AboutSectionTopImages from "./AboutSectionTopImages";
import AboutSectionTopList from "./AboutSectionTopList";

import SectionLabel from "./homeAssets/SectionLabel";
import HomeHeaders from "./homeAssets/HomeHeaders";
import HomeParagraph from "./homeAssets/HomeParagraph";
import MotionDiv from "./homeAssets/MotionDiv";

const AboutSectionTop = ({ delay }) => {
  const paragraph =
    "We will help you to find best platforms and build successful campaings for you business, connect with your customers and meet your digital goals";

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
      <AboutSectionTopImages delay={delay} />

      <MotionDiv styles={"lg:w-2/3 xl:w-1/2 lg:my-20"} margin={"-30%"}>
        <SectionLabel text={"WHY CHOOSE US"} />
        <HomeHeaders text={"We help great brands scale with content marketing"} />
        <HomeParagraph text={paragraph} />
        <AboutSectionTopList />
      </MotionDiv>
    </div>
  );
};

export default AboutSectionTop;
