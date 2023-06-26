"use client";
import React, { useState } from "react";

export const Counter = ({ classname, count, onAdd, onSubtract }) => {
  // const [count, setCount] = useState(0);

  var number = count;
  return (
    <div
      className={` flex justify-between w-36 items-center bg-primary-gray-80 align-items p-4 font-semibold ${classname}`}
    >
      <div
        className=" text-primary-gray-90  hover:text-secondary-brown-100 text-2xl font-bold"
        onClick={onSubtract}
      >
        -
      </div>
      <div className="text-2xl">{count}</div>
      <div
        className="text-primary-gray-90 hover:text-secondary-brown-100 text-xl font-bold"
        onClick={onAdd}
      >
        +
      </div>
    </div>
  );
};
