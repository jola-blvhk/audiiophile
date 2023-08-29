"use client";

import { Button, CartProducts, RadioInput, TextInput } from "@/components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import PaystackPop from "@paystack/inline-js";
// const PaystackPop = dynamic(import("@paystack/inline-js"), { ssr: false });
const Checkout = () => {
  const [isClient, setIsClient] = useState(false);
  const [payStackTest, setPaystackTest] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required"),
    phone_number: yup.string().required("Required"),
    address: yup.string().required("Address is is required"),
    zipCode: yup.string().required("Zip Code is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    paymentMethod: yup
      .string()
      .oneOf(["eMoney", "cash"])
      .required("Please select a payment method"),
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

  // const paystack = new PaystackPop();

  // const paystackTest = (data) => {
  //   paystack?.newTransaction({
  //     key: "pk_test_abcfefe9fdc9e5d5a70d2ad0bee3fe2390ce12dd",
  //     amount: grandTotal * 80000,
  //     email: data.email,
  //     firstname: data.name,
  //     onSuccess(transaction) {
  //       let message = `Payment Complete! Reference ${transaction.reference}`;
  //     },
  //     onCancel() {
  //       toast("You have canceled the transaction", {
  //         hideProgressBar: true,
  //         autoClose: 4000,
  //         type: "error",
  //         position: "top-right",
  //         className: "mt-20 text-sm",
  //       });
  //     },
  //   });
  // };

  useEffect(() => {
    setIsClient(true);
  }, [grandTotal]);
  const onSubmitHandler = (data) => {
    // paystackTest(data);
  };

  return (
    <div className=" px-9 md:px-12 lg:px-36 ">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="maxWidthSection  my-36 tracking-widest space-y-8 xl:space-y-0 xl:grid xl:grid-cols-5  xl:gap-10"
      >
        <div className=" col-span-3">
          <div className=" bg-primary-white-100 rounded-lg p-4 md:p-9 grid gap-10">
            <h1 className="font-semibold text-xl md:text-2xl">CHECKOUT</h1>
            <div className="">
              <h3 className=" text-secondary-brown-100 mb-4 font-semibold">
                BILLING DETAILS
              </h3>
              <div className="grid gap-8 md:grid-cols-2">
                <TextInput
                  label="Name"
                  name="name"
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
                  name="phone_number"
                  errorMessage={errors.phone_number?.message}
                  placeholder="+1 202-555-0136"
                  inputClass="text-sm"
                  {...register("phone_number")}
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
                    errorMessage={errors.address?.message}
                    placeholder="1137 Williams Avenue"
                    inputClass="text-sm "
                    {...register("address")}
                  />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <TextInput
                    label="ZIP Code"
                    errorMessage={errors.zipCode?.message}
                    placeholder="10001"
                    inputClass="text-sm"
                    {...register("zipCode")}
                  />
                  <TextInput
                    label="City"
                    errorMessage={errors?.city?.message}
                    placeholder="New York"
                    inputClass="text-sm"
                    {...register("city")}
                  />
                  <TextInput
                    label="Country"
                    errorMessage={errors.country?.message}
                    placeholder="United States"
                    inputClass="text-sm"
                    {...register("country")}
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
                  {errors.paymentMethod && (
                    <p className="text-red-600 text-xs ">
                      {errors.paymentMethod.message}
                    </p>
                  )}
                  <RadioInput
                    label="e-Money"
                    name="paymentMethod"
                    value="eMoney"
                    {...register("paymentMethod", { required: true })}
                  />
                  <RadioInput
                    label="Cash on Delivery"
                    name="paymentMethod"
                    value="cash"
                    {...register("paymentMethod", { required: true })}
                  />
                </div>
                {/* <div className="grid gap-8 md:grid-cols-2">
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
                </div> */}
              </div>
            </div>
          </div>
          {/* <button type="submit">Submit</button> */}
          {/* <Button colour="brown" type="submit" text="submit" /> */}
        </div>
        <div className="grid gap-5  bg-primary-white-100 rounded-lg p-4 md:p-9 col-span-2 h-fit">
          <h1 className="font-semibold text-xl  md:text-2xl">SUMMARY</h1>
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

          <div className="flex justify-center w-full">
            <Button
              text="Continue & Pay"
              classname=" text-primary-white-100  bg-secondary-brown-100  text-center flex items-center justify-center w-full "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
