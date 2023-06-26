import React from "react";
import { classNames } from "./classNames";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
import Image from "next/image";

export const Button = ({ text, classname, rounded, type, ...rest }) => {
  return (
    <button
      className={`flex gap-3 items-center  py-[.8em] px-[2em] uppercase tracking-widest hover:cursor-pointer transition ease-in-out delay-150 font-semibold  ${
        type === "brown" &&
        "  tracking-widest hover:bg-secondary-peach-90 border text-center hover:border-secondary-peach-90"
      } ${
        type === "transparent" &&
        "border-2 border-primary-black-100 text-primary-black-100 hover:text-primary-white-100 hover:bg-primary-black-100 "
      } ${
        type === "noBorder" &&
        "text-primary-black-90 text-sm hover:text-secondary-brown-100 md:text-base"
      }
    ${classname} `}
    >
      {text}
      {type === "noBorder" && <Image alt="image" src={arrowRight} />}
    </button>
  );
};
