"use client";
import React, { useState } from "react";

export const Counter = ({ classname }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className={` flex justify-between w-36 items-center bg-primary-gray-80 align-items p-4 font-semibold ${classname}`}
    >
      <div
        className=" text-primary-gray-90  hover:text-secondary-brown-100 text-2xl font-bold"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </div>
      <div className="text-2xl">{count}</div>
      <div
        className="text-primary-gray-90 hover:text-secondary-brown-100 text-xl font-bold"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
};
