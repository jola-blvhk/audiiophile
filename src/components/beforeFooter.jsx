import Image from "next/image";
import React from "react";

export const BeforeFooter = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2 mb-24">
      <div
        className=" bg-[url('/assets/shared/mobile/image-best-gear.jpg')] md:bg-[url('/assets/shared/tablet/image-best-gear.jpg')]  
        lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] w-full h-[300px] lg:h-auto bg-no-repeat bg-cover "
      ></div>
      <div className="text-center lg:text-left lg:py-10">
        <h2 className="uppercase mt-7 font-bold text-3xl md:text-4xluppercase">
          Bringing you the
          <span className=" text-secondary-brown-100"> best </span>audio gear
        </h2>
        <p className="mt-7  md:text-lg  tracking-wider ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
