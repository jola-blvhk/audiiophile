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
  keyy,
  imgURL,
  id,
  category,
}) => {
  return (
    <div className="my-36">
      <div key={keyy} className=" grid md:gap-24 md:grid-cols-2">
        <div
          className={`p-12 md:p-16 bg-primary-gray-80  w-full
            ${
              exchange ? "md:order-last" : " "
            } lg:p-24 rounded-lg  ${classname}`}
        >
          <div className="relative grid  place-items-center">
            <Image
              src={imgURL}
              alt="headphone"
              width={100}
              height={100}
              className=" w-[60%] sm:w-[40%] md:w-[70%] h-auto object-contain"
            />
          </div>
        </div>
        <div className=" md:h-auto py-12 rounded-lg text-center md:text-left">
          <h1 className="uppercase font-bold text-2xl md:text-3xl">
            {nameOfProduct}
          </h1>
          <p className="mt-7 lg:text-lg tracking-widest">{description}</p>

          <div className="  grid place-content-center md:justify-start mt-6 ">
            <Link href={`/${category}/product-detail?id=${id}`}>
              <Button
                text="see product"
                classname="mt-12 text-primary-white-100  bg-secondary-brown-100 border-secondary-brown-100"
                colour="brown"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
