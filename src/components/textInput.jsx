import React, { forwardRef } from "react";

export const TextInput = forwardRef(
  (
    { name, label, prefix, type = "text", inputClass, errorMessage, ...rest },
    ref
  ) => {
    return (
      <div className="w-full relative font-semibold">
        <label htmlFor={name} className={`mb-1 block text-sm `}>
          {label}
        </label>
        <div className=" items-center relative">
          <span
            className={`invalid-feedback absolute bottom-12 right-0 float-right text-xs mb-2 ${
              errorMessage && "text-secondary-red-100"
            }`}
          >
            {errorMessage}
          </span>
          <input
            {...rest}
            name={name}
            ref={ref}
            type={type}
            className={`border rounded-lg focus:outline-none p-4 w-full placeholder:pl-3 border-[#E5E6F2] ${inputClass} ${
              errorMessage && "border-2 border-secondary-red-100 "
            } focus:border-secondary-brown-100 `}
          />
        </div>
      </div>
    );
  }
);
