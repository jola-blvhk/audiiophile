import React from "react";
import { Counter } from "./counter";
import Image from "next/image";
import {
 CiTrash
  
} from "react-icons/ci";

export const CartProducts = ({ image, name, price, trashClick}) => {
  return (
    <div className="flex justify-between gap-12 items-center font-semibold pb-5">
      <div className="flex place-items-center gap-2">
        <div className=" bg-primary-gray-100 w-16 h-16 md:w-20 md:h-20 rounded-lg">
          <Image
            src={image}
            alt="product image"
            width={40}
            height={40}
            className="w-30 h-30 md:w-16 md:h-16 flex place-items-center m-auto"
          />
        </div>
        <div>
          <h4 className="">{name}</h4>
          <p className="text-primary-gray-90">{"$" + " " + price}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Counter className="p-[0.5rem] w-20" />
        <CiTrash className="text-xl font-bold" onClick={() => trashClick()}/>
      </div>
    </div>
  );
};
