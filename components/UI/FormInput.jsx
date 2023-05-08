import React from "react";

const FormInput = React.forwardRef(({ type, id, placeholder }, inputRef) => {
  return (
    <input
      ref={inputRef}
      className="w-full mr-3 mb-4 py-3 px-6 rounded-3xl border-[1px] border-lightgrey bg-transparent"
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
  );
});

FormInput.displayName = "FormInput";

export default FormInput;
