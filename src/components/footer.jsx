"use client";
import React, { useState } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";

import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";

import Image from "next/image";

export const Footer = () => {
  const navlist = ["home", "headphones", "speakers", "earphones"];
  const date = new Date().getFullYear();
  const [noHover, hover] = useState(false);

  return (
    <div className=" bg-primary-black-90 text-primary-white-100 grid gap-9 text-center px-9 md:px-12 lg:px-36 pb-6 lg:pb-10 md:text-left text-sm tracking-wider absolute inset-x-0">
      <div className="maxWidthSection">
        <div className="lg:flex justify-between">
          <div className="grid m-auto md:m-0 gap-12 mb-3">
            <div className=" bg-secondary-brown-100 w-24 h-1 m-auto md:m-0"></div>
            <div className="m-auto md:m-0">
              <Image alt="image" src={Logo} className="" />
            </div>
          </div>
          <div className="lg:flex mt-9 lg:mt-0 lg:items-end">
            <ul
              className="uppercase text-primary-white-100 space-y-6 md:flex md:space-y-0 space-x-4"
              id="nav"
            >
              {navlist.map((li, index) => (
                <li
                  key={index + 1}
                  className="hover:text-secondary-brown-100 hover:cursor-pointer transition ease-in-out delay-150"
                >
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-9">
          <div className=" text-primary-gray-100 lg:w-[40%]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </div>
          <div className="hidden lg:flex justify-between w-32 lg:items-end">
            <div>
              <Image
                alt="image"
                src={Facebook}
                className="hover:bg-secondary-brown-100"
              />
            </div>
            <div>
              <Image
                alt="image"
                src={Twitter}
                className="hover:bg-secondary-brown-100"
              />
            </div>
            <div>
              <Image
                alt="image"
                src={Instagram}
                className="hover:bg-secondary-brown-100"
              />
            </div>
          </div>
        </div>
        <div className="m-auto space-y-9 md:flex md:space-y-0 md:m-0 md:justify-between">
          <div className="text-primary-gray-100 mt-9 md:mt-16">
            Copyright {date}. All Rights Reserved
          </div>
          <div className="m-auto md:m-0 flex justify-between lg:hidden w-32 items-end">
            <div>
              <Image
                alt="image"
                src={Facebook}
                className="hover:bg-secondary-brown-100"
              />
            </div>
            <div>
              <Image
                alt="image"
                src={Twitter}
                className="hover:bg-secondary-brown-100"
              />
            </div>
            <div>
              <Image
                alt="image"
                src={Instagram}
                className="hover:bg-secondary-brown-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
