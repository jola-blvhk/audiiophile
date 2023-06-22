import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Earphones from "../../public/assets/home/desktop/shopEarpiece.svg";
import Link from "next/link";

export const ShopProduct = ({ name, product }) => {
  const linkChecker = () => {
    switch (name) {
      case "Headphones":
        return "/headphones";
        break;
      case "Speakers":
        return "/speakers";
        break;
      default:
        return "/earphones";
        break;
    }
  };

  return (
    <div className=" bg-primary-gray-80 rounded-md  pt-16  grid gap-4 place-items-center w-full pb-5 px-5 text-center relative">
      <div className=" absolute bottom-[70%] ">
        <Image
          alt="image"
          className="m-auto w-[90%] object-fit"
          src={product}
        />
      </div>
      <h4 className=" font-bold uppercase tracking-widest text-base m-auto">
        {name}
      </h4>
      <Link href={linkChecker()}>
        <Button classname=" " text="shop" type="noBorder" />
      </Link>
    </div>
  );
};
