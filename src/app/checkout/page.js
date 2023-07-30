"use client";

import { Button, CartProducts, RadioInput, TextInput } from "@/components";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCart } from "react-use-cart";
import Link from "next/link";

const Checkout = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().required("Email is Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
  const shippingAmount = 50;
  const vatAmount = 1079;
  const grandTotal = cartTotal + shippingAmount + vatAmount;
  return (
    <div className=" px-9 md:px-12 lg:px-36 ">
      <div className="maxWidthSection  my-36 tracking-widest space-y-8 xl:space-y-0 xl:grid xl:grid-cols-5  xl:gap-10">
        <form onSubmit={handleSubmit} className=" col-span-3">
          <div className=" bg-primary-white-100 rounded-lg p-9 grid gap-10">
            <h1 className="font-semibold text-2xl">CHECKOUT</h1>
            <div className="">
              <h3 className=" text-secondary-brown-100 mb-4 font-semibold">
                BILLING DETAILS
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <TextInput
                  label="Name"
                  errorMessage={errors.name?.message}
                  placeholder="Insert your name"
                  inputClass="text-sm"
                  {...register("name")}
                />

                <TextInput
                  label="Email Address"
                  errorMessage={errors.email?.message}
                  placeholder="alexei@gmail.com"
                  inputClass="text-sm"
                  {...register("email")}
                />
                <TextInput
                  label="Phone Number"
                  // errorMessage="Wrong format"
                  placeholder="+1 202-555-0136"
                  inputClass="text-sm"
                />
              </div>
            </div>
            <div className="">
              <h3 className=" text-secondary-brown-100 mb-4 font-semibold">
                SHIPPING INFO
              </h3>
              <div className="grid gap-8 ">
                <div>
                  <TextInput
                    label="Your Address"
                    // errorMessage="Wrong format"
                    placeholder="1137 Williams Avenue"
                    inputClass="text-sm "
                  />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <TextInput
                    label="ZIP Code"
                    // errorMessage="Wrong format"
                    placeholder="10001"
                    inputClass="text-sm"
                  />
                  <TextInput
                    label="City"
                    // errorMessage="Wrong format"
                    placeholder="New York"
                    inputClass="text-sm"
                  />
                  <TextInput
                    label="Country"
                    // errorMessage="Wrong format"
                    placeholder="United States"
                    inputClass="text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <h3 className=" text-secondary-brown-100 mb-4 font-semibold">
                PAYMENT DETAILS
              </h3>
              <div className="grid gap-8 ">
                <div>
                  <RadioInput
                    label="e-Money"
                    // errorMessage="Wrong format"
                    placeholder="Insert your name"
                  />
                  <RadioInput
                    label="Cash on Delivery"
                    // errorMessage="Wrong format"
                    placeholder="Insert your name"
                  />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <TextInput
                    label="e-Money Number"
                    // errorMessage="Wrong format"
                    placeholder="238521993"
                    inputClass="text-sm"
                  />
                  <TextInput
                    label="e-Money PIN"
                    // errorMessage="Wrong format"
                    placeholder="6891"
                    inputClass="text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
          {/* <Button colour="brown" type="submit" text="submit" /> */}
        </form>
        <div className="grid gap-5  bg-primary-white-100 rounded-lg p-9 col-span-2 h-fit">
          <h1 className="font-semibold  text-2xl">SUMMARY</h1>
          <div>
            {items.map((item, index) => {
              return (
                <CartProducts
                  type="summary"
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.categoryImage}
                  trashClick={() => removeItem(item.id)}
                  item={item}
                  itemQuantity={item.quantity}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-primary-gray-90 ">Total</p>
            <p className="font-bold text-lg">{"$" + " " + cartTotal}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-primary-gray-90 ">Shipping</p>
            <p className="font-bold text-lg">{"$" + " " + shippingAmount}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="uppercase text-primary-gray-90 ">VAT (INCLUDED)</p>
            <p className="font-bold text-lg">{"$" + " " + vatAmount}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="uppercase text-primary-gray-90 ">Grand Total</p>
            <p className="font-bold text-lg text-secondary-brown-100 ">{`$  ${grandTotal}`}</p>
          </div>
          <Link href="/pay">
            <div className="flex justify-center w-full">
              <Button
                text="Continue & Pay"
                classname=" text-primary-white-100  bg-secondary-brown-100  text-center flex items-center justify-center w-full "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
