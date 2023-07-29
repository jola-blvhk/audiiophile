"use client";

import { Button, RadioInput, TextInput } from "@/components";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  return (
    <div className=" px-9 md:px-12 lg:px-36 ">
      <div className="maxWidthSection  my-36 tracking-widest ">
        <form onSubmit={handleSubmit}>
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
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
