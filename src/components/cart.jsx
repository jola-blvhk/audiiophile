"use client";

import React from "react";
import { Button } from "./button";
import { CartProducts } from ".";
import Link from "next/link";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  console.warn(items);

  return (
    <div className="maxWidthSection lg:justify-end mt- lg:mt-0 ">
      <div className=" bg-primary-white-100 rounded-lg tracking-wider grid gap-4   p-4 max-w-2xl">
        <div className="flex justify-between">
          <h1>Cart ({totalUniqueItems})</h1>
          <p
            onClick={() => {
              emptyCart();
            }}
          >
            Remove all
          </p>
          {/* <p>Total Items:({totalItems})</p> */}
        </div>

        <div>
          {items.map((item, index) => {
            return (
              <CartProducts
                key={index}
                name={item.name}
                price={item.price}
                image={item.categoryImage}
                trashClick={() => removeItem(item.id)}
                item={item}
              />
            );
          })}
        </div>

        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <p className="uppercase text-primary-gray-90 ">Total</p>
            <p className="font-bold text-lg">{"$" + " " + cartTotal}</p>
          </div>
          <Link href="/checkout">
            <div className="flex justify-center w-full">
              <Button
                text="Checkout"
                classname=" text-primary-white-100  bg-secondary-brown-100  text-center flex items-center justify-center w-full "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
