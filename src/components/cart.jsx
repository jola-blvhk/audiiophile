import React from "react";
import { Button } from "./button";
import { CartProducts } from ".";

export const Cart = () => {
  return (
    <div className="maxWidthSection grid place-items-center lg:justify-end">
      <div className=" bg-primary-white-100 rounded-lg tracking-wider grid gap-4   p-4 max-w-2xl">
        <div className="flex justify-between">
          <h1>Cart</h1>
          <p>Remove all</p>
        </div>

        <div>
          <CartProducts name="YX1" price="1800" />
        </div>

        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <p className="uppercase text-primary-gray-90 ">Total</p>
            <p>Price</p>
          </div>
          <div className="flex justify-center w-full">
            <Button
              text="Checkout"
              classname=" text-primary-white-100  bg-secondary-brown-100  text-center flex items-center justify-center w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
