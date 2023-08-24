import React, { forwardRef } from "react";

export const RadioInput = forwardRef(
  (
    {
      name,
      label,
      prefix,
      type = "radio",
      inputClass,
      errorMessage,
      placeholder,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full flex items-center relative font-semibold border rounded-lg focus:outline-none p-4 placeholder:pl-3 border-[#E5E6F2] bg-white my-4 hover:border-secondary-brown-100">
        <input
          {...rest}
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`${errorMessage && "border border-red-600"}  ${inputClass} accent-secondary-brown-100 w-4 h-4`}
        />
        <label htmlFor={name} className={`pl-3 inline text-sm $`}>
          {label}
        </label>
      </div>
    );
  }
);
