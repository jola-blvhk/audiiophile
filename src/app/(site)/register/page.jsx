"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { Button, TextInput } from "@/components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Register = () => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const schema = yup.object().shape({
    name: yup.string().required("Your User Name is Required"),

    email: yup
      .string()
      .required("Email is required")
      .email(" Invalid Email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "password must be at least 6 characters")
      .max(20, "password must not exceed 15 characters"),
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Password must be match"),
  });

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerUser = async (data) => {
    console.log(data);
    let info = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    axios
      .post("/api/register", info)
      .then(() => {
        toast("User has been registered", {
          hideProgressBar: true,
          autoClose: 4000,
          type: "success",
          position: "top-right",
          className: "mt-16 ",
        });
       
      })
      .catch(
        () => () =>
          toast("Something went wrong", {
            hideProgressBar: true,
            autoClose: 4000,
            type: "error",
            position: "top-right",
            className: "mt-16",
          })
      );
  };

  return (
    <div className=" text-black pt-32">
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-5 tracking-wide  ">
                Sign Up
              </h1>
              <p>Please provide your details.</p>
              <form
                class="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(registerUser)}
              >
                <button
                  type="submit"
                  onClick={() => signIn("google")}
                  className=" gap-4 text-secondary-brown-100 hover:text-primary-white-100 bg-primary-white-100  hover:bg-secondary-brown-100 border-2 border-secondary-brown-100 rounded-lg   text-center flex items-center justify-center w-full py-[.8em] px-[2em] uppercase tracking-widest hover:cursor-pointer transition ease-in-out delay-150 font-semibold text-sm "
                >
                  <span className="text-xl">
                    <FcGoogle />
                  </span>
                  Sign in with google
                </button>
                <div className="flex items-center gap-3">
                  <span className="w-full h-[0.5px] bg-slate-600"></span>
                  <span className>OR</span>
                  <span className="w-full h-[0.5px] bg-slate-600"></span>
                </div>
                <div>
                  <TextInput
                    type="email"
                    name="email"
                    label="Email Address"
                    inputClass="text-xs"
                    placeholder="yourexample@gmail.com"
                    id="email"
                    {...register("email")}
                    errorMessage={errors.email?.message}
                  />
                </div>
                <div>
                  <TextInput
                    type="text"
                    name="name"
                    id="name"
                    {...register("name")}
                    errorMessage={errors.name?.message}
                    inputClass="text-xs"
                    placeholder="jola"
                    label="UserName"
                  />
                </div>

                <div className="">
                  <div className=" relative ">
                    <TextInput
                      type={`${show ? "text" : "password"}`}
                      name="password"
                      id="password"
                      {...register("password")}
                      errorMessage={errors.password?.message}
                      placeholder="••••••••"
                      inputClass="text-xs"
                      label="Password"
                    />

                    <span
                      className="absolute bottom-3 right-2 pt-4 flex items-center mr-[0.25rem] "
                      onClick={() => setShow(!show)}
                    >
                      <PiSmileyXEyesLight
                        className={`cursor-pointer text-2xl
                        ${
                          show === false
                            ? "hidden items-center "
                            : "text-gray-500 "
                        }`}
                      />
                      <BsEmojiHeartEyes
                        className={`cursor-pointer text-xl
                        ${
                          show === true
                            ? "hidden items-center "
                            : "text-gray-500 "
                        }`}
                      />
                    </span>
                  </div>
                  <p className="text-red-500 text-[0.75rem] text-right">
                    {/* Password must exceed 2 character */}
                    {/* {errors.password?.message} */}
                  </p>
                </div>
                <div className="">
                  <div className=" relative ">
                    <TextInput
                      type={`${confirmShow ? "text" : "password"}`}
                      name="password_confirmation"
                      {...register("password_confirmation")}
                      placeholder="••••••••"
                      inputClass="text-xs"
                      label="Repeat password"
                      errorMessage={errors.password_confirmation?.message}
                    />

                    <span
                      className="absolute bottom-3 right-2 pt-4 flex items-center mr-[0.25rem] "
                      onClick={() => setConfirmShow(!confirmShow)}
                    >
                      <PiSmileyXEyesLight
                        className={`cursor-pointer text-2xl
                        ${
                          confirmShow === false
                            ? "hidden items-center "
                            : "text-gray-500 "
                        }`}
                      />
                      <BsEmojiHeartEyes
                        className={`cursor-pointer text-xl
                        ${
                          confirmShow === true
                            ? "hidden items-center "
                            : "text-gray-500 "
                        }`}
                      />
                    </span>
                  </div>
                  <p className="text-red-500 text-[0.75rem] text-right">
                    {/* Password must exceed 2 character */}
                    {/* {errors.password?.message} */}
                  </p>
                </div>

                <Button
                  type="submit"
                  text="Continue"
                  classname=" text-primary-white-100  bg-secondary-brown-100 border-2 border-secondary-brown-100 hover:bg-primary-white-100 hover:text-secondary-brown-100 rounded-lg  font-semibold text-center flex items-center justify-center w-full text-sm "
                  colour="brown"
                />

                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline "
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
