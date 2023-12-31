"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Data from "../../../data.json";
import {
  BeforeFooter,
  Button,
  Counter,
  ShopProduct,
  Others,
  ProductDetails,
} from "@/components";
import Earphoness from "/assets/home/desktop/shopEarpiece.svg";
import Headphones from "/assets/home/desktop/shopHeadphone.svg";
import Speaker from "/assets/home/desktop/shopSpeaker.svg";
import Image from "next/image";

const ProductDetail = () => {
  const router = useRouter();
  const id = useSearchParams().get("id");


  const info = Data.filter((info) => {
    return info.id === +id;
  });
  const data = info[0];
  console.log();
  return (
    <div className="my-36 px-9 md:px-12 lg:px-36 tracking-wider">
      <p
        className="font-bold mb-10 maxWidthSection underline "
        onClick={() => router.back()}
      >
        Go Back
      </p>
      <ProductDetails
        ImgSrc={data.categoryImage}
        ImgAlt="Earphones"
        imgNew={data.new}
        name={data.name}
        description={data.description}
        price={data.price}
        item={data}
      />
      {/* <div className=" grid md:gap-24 md:grid-cols-2 maxWidthSection">
        <div
          className={`p-12 md:p-16 bg-primary-gray-80 grid place-items-center w-full
           `}
        >
          <Image
            src={data.categoryImage}
            alt="headphone"
            width={100}
            height={100}
            className="w-[50%] h-auto object-contain"
          />
        </div>
        <div className=" md:h-auto py-12 rounded-lg text-left ">
          <p
            className={`uppercase tracking-[.9rem] text-secondary-brown-100 mb-3 ${
              data.new ? "grid" : "hidden"
            }`}
          >
            New Product
          </p>
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            {data.name}
          </h1>
          <p className="mt-7 lg:text-lg tracking-widest">{data.description}</p>
          <p className="my-12 text-lg md:text-2xl tracking-widest font-bold ">
            {"$" + data.price * number}
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
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="grid gap-12 md:flex maxWidthSection mt-20">
        <div className=" md:w-[60%]">
          <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
            Features
          </h3>
          <p className="lg:text-lg whitespace-pre-line">{data.features}</p>
        </div>
        <div>
          <h3 className="uppercase font-bold text-xl md:text-2xl mb-4">
            In the box
          </h3>

          <div className="space-y-2">
            {data.includes.map((info, index) => {
              return (
                <p key={index + 1} className="lg:text-lg">
                  <span className="mr-4 font-bold text-secondary-brown-100 opacity-100">
                    {info.quantity + "x"}{" "}
                  </span>{" "}
                  {info.item}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 w-full my-12 maxWidthSection">
        <div className="space-y-12">
          <Image
            alt="image"
            src={data.gallery.first.desktop}
            className="w-full rounded-md"
            width={200}
            height={200}
          />
          <Image
            alt="image"
            src={data.gallery.second.desktop}
            className="w-full h-auto object-cover rounded-md"
            width={200}
            height={200}
          />
        </div>
        <div>
          <Image
            alt="image"
            src={data.gallery.third.desktop}
            className="w-full h-full object-cover rounded-md"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="mt-36 maxWidthSection">
        <h3 className="uppercase font-bold text-xl md:text-2xl text-center mb-6">
          You may also like
        </h3>
        <div className="grid md:grid-cols-3 md:gap-5 lg:gap-20">
          {data.others.map((info, index) => {
            return (
              <Others
                key={index + 1}
                name={info.name}
                image={info.image.desktop}
                link={info.slug}
              />
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between gap-20 md:gap-12 lg:gap-20 my-32 maxWidthSection">
        <ShopProduct name="Earphones" product={Headphones} />
        <ShopProduct name="Earphones" product={Speaker} />
        <ShopProduct name="Earphones" product={Earphoness} />
      </div>
      <div className="maxWidthSection">
        <BeforeFooter />
      </div>
    </div>
  );
};

export default ProductDetail;
