import React, { useState, useEffect } from "react";

import AboutSectionBottom from "./AboutSectionBottom";
import AboutSectionTop from "./AboutSectionTop";

const AboutSection = () => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1024) setDelay(0.5);
  }, []);

  return (
    <section id="about" className="mt-12 lg:mt-20 pt-28 lg:pt-20">
      <AboutSectionTop delay={delay} />
      <AboutSectionBottom delay={delay} />
    </section>
  );
};

export default AboutSection;
