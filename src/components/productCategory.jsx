import Image from "next/image";
import React from "react";
import { Button } from "./button";
import headphone from "../../public/assets/categoryImages/mark-2-headphones.svg";
import Link from "next/link";

export const ProductCategory = ({
  nameOfProduct,
  description,
  classname,
  exchange,
  key,
  imgURL,
  id,
  category,
}) => {
  return (
    <div className="my-36">
      <div key={key} className=" grid md:gap-24 md:grid-cols-2">
        <div
          className={`p-12 md:p-16 bg-primary-gray-80 grid place-items-center w-full
            ${exchange ? "md:order-last" : " "} lg:p-24  ${classname}`}
        >
          <Image
            src={imgURL}
            alt="headphone"
            width={100}
            height={100}
            className="w-[50%] h-auto object-contain"
          />
        </div>
        <div className=" md:h-auto py-12 rounded-lgtext-center md:text-left">
          <h1 className="uppercase font-bold text-3xl md:text-4xl">
            {nameOfProduct}
          </h1>
          <p className="mt-7 lg:text-lg tracking-widest">{description}</p>

          <div className="  grid place-content-center md:justify-start mt-6 ">
            <Link href={`/${category}/product-detail?id=${id}`}>
              <Button
                text="see product"
                classname="mt-12 text-primary-white-100  bg-secondary-brown-100 border-secondary-brown-100"
                type="brown"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
