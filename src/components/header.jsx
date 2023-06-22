"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/shared/desktop/logo.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Link from "next/link";

export const Header = () => {
  const [dropNav, setDropNav] = useState(false);
  const navlist = ["headphones", "speakers", "earphones"];
  return (
    <>
      <div className="fixed z-[10000] top-0 w-full ">
        <div
          className={`bg-primary-black-90 p-5 relative px-9 md:px-12 lg:px-36  `}
        >
          <div className="maxWidthSection">
            <div className="flex items-center justify-between ">
              <Image
                alt="image"
                src={Hamburger}
                className="md:hidden"
                onClick={() => {
                  setDropNav(!dropNav);
                }}
              />
              <Link href="/" className="md:hidden">
                <Image alt="image" src={Logo} />
              </Link>
              <div className="hidden md:flex gap-x-12 lg:gap-x-0 items-center ">
                <div>
                  <Image
                    alt="image"
                    src={Hamburger}
                    className="lg:hidden"
                    onClick={() => {
                      setDropNav(!dropNav);
                    }}
                  />
                </div>

                <div>
                  <Link href="/">
                    <Image alt="image" src={Logo} />
                  </Link>
                </div>
              </div>
              <ul
                className=" hidden uppercase text-primary-white-100 lg:flex items-center  space-x-6 "
                id="nav"
              >
                {navlist.map((li, index) => (
                  <Link key={index + 1} href={`/${li}`}>
                    <li className="hover:text-secondary-brown-100 hover:cursor-pointer transition ease-in-out delay-150">
                      {li}
                    </li>
                  </Link>
                ))}
              </ul>
              <Image alt="image" src={Cart} />
            </div>
            {dropNav ? (
              <div className="">
                <ul
                  className=" lg:hidden uppercase text-primary-white-100 lg:flex absolute top-full bg-primary-black-90 p-5 text-center mx-auto h-[100vh] z-[100000] w-full left-0"
                  id="nav"
                >
                  {navlist.map((li, index) => (
                    <Link key={index + 1} href={`/${li}`}>
                      <li className="mb-12 hover:text-secondary-brown-100 hover:cursor-pointer transition ease-in-out delay-150">
                        {li}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
