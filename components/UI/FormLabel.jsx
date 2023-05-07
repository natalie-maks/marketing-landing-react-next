import React from "react";

const FormLabel = ({ title, forBlock }) => {
  return (
    <label className="block text-lg text-white pb-2 ml-3" htmlFor={forBlock}>
      {title}
    </label>
  );
};

export default FormLabel;
