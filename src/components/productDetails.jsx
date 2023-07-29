"use client";

import { useState } from "react";
import { Counter } from "./counter";
import { Button } from "./button";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
export const ProductDetails = ({
  ImgSrc,
  ImgAlt,
  imgNew,
  name,
  description,
  price,
  item,
}) => {
  const [number, setNumber] = useState(1);
  const { addItem } = useCart();

  const onClick = () =>
    toast("Added to Cart", {
      hideProgressBar: true,
      autoClose: 4000,
      type: "success",
      position: "top-right",
      className: "mt-20 ",
    });
  return (
    <div className=" grid md:gap-24 md:grid-cols-2 maxWidthSection">
      <div
        className={`p-12 md:p-16 bg-primary-gray-80 grid place-items-center w-full
           `}
      >
        <Image
          src={ImgSrc}
          alt={ImgAlt}
          width={100}
          height={100}
          className="w-[50%] h-auto object-contain"
        />
      </div>
      <div className=" md:h-auto py-12 rounded-lg text-left ">
        <p
          className={`uppercase tracking-[.9rem] text-secondary-brown-100 mb-3 ${
            imgNew ? "grid" : "hidden"
          }`}
        >
          New Product
        </p>
        <h1 className="uppercase font-bold text-2xl md:text-4xl">{name}</h1>
        <p className="mt-7 lg:text-lg tracking-widest">{description}</p>
        <p className="my-12 text-lg md:text-2xl tracking-widest font-bold ">
          {"$" + price * number}
        </p>
        <div className="flex  gap-6  mt-6 ">
          <div>
            <Counter
              count={number}
              onSubtract={() => {
                setNumber(number - 1);
              }}
              onAdd={() => {
                setNumber(number + 1);
              }}
              classname=""
            />
          </div>
          <div>
            <Button
              text="add to cart"
              classname=" text-primary-white-100  bg-secondary-brown-100 border-secondary-brown-100 h-full"
              colour="brown"
              onClick={() => {
                addItem(item);
                onClick();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
