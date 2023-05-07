import React from "react";

const FormLabel = ({ title, forBlock }) => {
  return (
    <label className="block ml-3 pb-2 text-lg text-white" htmlFor={forBlock}>
      {title}
    </label>
  );
};

export default FormLabel;
