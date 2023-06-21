import Image from "next/image";
import React from "react";
import { Button } from "./button";
import Earphones from "../../public/assets/home/desktop/shopEarpiece.svg";

export const ShopProduct = ({ name, product }) => {
  return (
    <div className=" bg-primary-gray-80 rounded-md  pt-16  grid gap-4 place-items-center w-full pb-5 px-5 text-center relative">
      <div className=" absolute bottom-[70%] ">
        <Image className="m-auto w-[90%] object-fit" src={product} />
      </div>
      <h4 className=" font-bold uppercase tracking-widest text-base m-auto">{name}</h4>
      <Button classname=" " text="shop" type="noBorder" />
    </div>
  );
};
