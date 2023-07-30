"use client";

import React, { useEffect, useState } from "react";
import {
  Banner,
  ProductCategory,
  BeforeFooter,
  ShopProduct,
} from "@/components";
import Data from "../../data.json";
import Earphoness from "/assets/home/desktop/shopEarpiece.svg";
import Headphones from "/assets/home/desktop/shopHeadphone.svg";
import Speaker from "/assets/home/desktop/shopSpeaker.svg";

const Earphone = () => {
  const headPhones = [];
  headPhones.push(Data[0]);

  return (
    <div className="">
      <Banner name=" Earphones" />
      <div className="px-9 md:px-12 lg:px-36">
        <div className="maxWidthSection">
          {headPhones.map((headphone, index) => {
            return (
              <div key={index}>
                <ProductCategory
                  keyy={index}
                  nameOfProduct={headphone.name}
                  description={headphone.description}
                  imgURL={headphone.categoryImage}
                  exchange={headphone.new}
                  category={headphone.category}
                  id={headphone.id}
                 
                />
              </div>
            );
          })}

          <div className=" flex flex-col md:flex-row justify-between gap-20 md:gap-12 lg:gap-20 my-32">
            <ShopProduct name="Headphones" product={Headphones} />
            <ShopProduct name="Speakers" product={Speaker} />
            <ShopProduct name="Earphones" product={Earphoness} />
          </div>
          <BeforeFooter />
        </div>
      </div>
    </div>
  );
};

export default Earphone;
