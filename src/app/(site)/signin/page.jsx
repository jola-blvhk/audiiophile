"use client";

import { useState, useEffect } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Button, TextInput } from "@/components";
// import { BiHide, BiShow } from "react-icons/bi";
import { PiSmileyXEyesLight } from "react-icons/pi";
import {BsEmojiHeartEyes} from "react-icons/bs"
import Link from "next/link";
const SignIn = () => {
  const session = useSession();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/");
  //     }
  //   });

  const logout = () => {
    signOut();
    toast("User logout successful", {
      hideProgressBar: true,
      autoClose: 4000,
      type: "success",
      position: "top-right",
      className: "mt-20 ",
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback.error) {
        toast(callback.error, {
          hideProgressBar: true,
          autoClose: 4000,
          type: "error",
          position: "top-right",
          className: "mt-20 ",
        });
      }
      if (callback?.ok && !callback?.error) {
        toast("User login successful", {
          hideProgressBar: true,
          autoClose: 4000,
          type: "success",
          position: "top-right",
          className: "mt-20 ",
        });
      }
    });
  };

  return (
    <div className="  pt-32">
      <div onClick={() => logout()} className="bg-red-500 text-white">
        Sign Out
      </div>
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-5 tracking-wide ">
                Sign In
              </h1>
              <p>Please enter your details.</p>
              <form class="space-y-4 md:space-y-6" onSubmit={loginUser}>
                <div>
                  <TextInput
                    type="email"
                    name="email"
                    label="Email Address"
                    inputClass="text-xs"
                    placeholder="yourexample@gmail.com"
                    id="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                
                <div className="mt-[0.63rem]">
                  <div className=" relative text-epps-gray-200">
                    <TextInput
                      name="password"
                      id="password"
                      label="Password"
                      inputClass="text-xs"
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      type={`${show ? "text" : "password"}`}
                      placeholder="••••••••"
                      // {...register("password")}
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
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-4">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-3 h-3 border border-gray-300 rounded   "
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-xs">
                      <label for="remember" class="">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  text="Sign in"
                  classname=" text-primary-white-100  bg-secondary-brown-100 border-2 border-secondary-brown-100 hover:bg-primary-white-100 hover:text-secondary-brown-100 rounded-lg  font-semibold text-center flex items-center justify-center w-full text-sm "
                  colour="brown"
                />
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
                <p className="text-sm font-light tracking-wide">
                  Don’t have an account yet?{" "}
                  <Link href="/register" class="font-medium  hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
