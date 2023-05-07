import React from "react";

const FormInput = React.forwardRef(({ type, id, placeholder }, inputRef) => {
  return (
    <input
      ref={inputRef}
      className="py-3 px-6 mr-3 mb-4 w-full bg-transparent border-[1px] border-lightgrey rounded-3xl"
      type={type}
      id={id}
      placeholder={placeholder}
      required
    />
  );
});

export default FormInput;
