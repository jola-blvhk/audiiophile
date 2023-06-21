import React from "react";
import { Button } from "./button";
import Image from "next/image";

export const Others = ({ image, name }) => {
  return (
    <div className="grid place-items-center gap-6  my-8">
      <div
        className={`bg-primary-gray-80 grid place-items-center w-full
           `}
      >
        <Image
          src={image}
          alt="headphone"
          width={100}
          height={100}
          className="w-[80%] h-auto object-contain"
        />
      </div>
      <h4 className="font-bold text-lg uppercase ">{name}</h4>
      <Button
        text="see product"
        classname=" text-primary-white-100  bg-secondary-brown-100 border-secondary-brown-100 "
        type="brown"
      />
    </div>
  );
};
