import React from "react";

const AboutMetrics = ({ metric }) => {
  return (
    <div className="bg-darkgrey rounded-3xl py-10 px-6">
      <h3 className="mb-8 text-4xl font-medium">{metric.title}</h3>
      <p>{metric.text}</p>
    </div>
  );
};

export default AboutMetrics;
