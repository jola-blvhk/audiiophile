import {
  Button,
  TextInput,
  RadioInput,
  Counter,
  Footer,
  ShopProduct,
  BeforeFooter,
} from "@/components";
import Earphones from "../../assets/home/desktop/Headphone.svg";
import Earphoness from "../../public/assets/home/desktop/shopEarpiece.svg";
import Headphones from "../../public/assets/home/desktop/shopHeadphone.svg";
import Speaker from "../../public/assets/home/desktop/shopSpeaker.svg";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <Button text="shop" type="noBorder" />
      <TextInput
        label="Name"
        // errorMessage="Wrong format"
        placeholder="Insert your name"
        inputClass="text-sm"
      />
      <RadioInput
        label="Name"
        // errorMessage="Wrong format"
        placeholder="Insert your name"
      /> 
      <RadioInput
        label="Name"
        // errorMessage="Wrong format"
        placeholder="Insert your name"
      /> */}

      <section className="bg-[url('/assets/home/desktop/Headphone.svg')] bg-no-repeat bg-center bg-primary-black-90 px-9 md:px-12 lg:px-36 pt-[500px] lg:pt-20 pb-12 relative grid place-content-center lg:bg-none">
        <div className="maxWidthSection">
          <div className="md:flex ">
            <div className="maxWidthSection md:w-1/2 ">
              <div className=" text-primary-white-100 flex flex-col text-center m-auto relative bottom-60 lg:bottom-0 lg:text-left lg:m-0 ">
                <p className="uppercase tracking-[1rem] ">New Product</p>
                <h1 className="uppercase mt-7 font-bold text-4xl lg:text-6xl">
                  XX99 Mark II Headphone
                </h1>
                <p className="mt-7 lg:text-lg tracking-widest">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <div className="  grid place-content-center lg:justify-start ">
                  <Button
                    text="see product"
                    classname="mt-12 text-primary-white-100  bg-secondary-brown-100 border-secondary-brown-100"
                    type="brown"
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:w-1/2 lg:flex items-center justify-center  ">
              <Image
                src="assets/home/desktop/Headphone.svg"
                width={100}
                height={100}
                alt="headphone"
                className="w-[120%]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="px-9 md:px-12 lg:px-36 ">
        <div className="maxWidthSection flex flex-col md:flex-row justify-between gap-20 md:gap-12 lg:gap-20 my-32">
          <ShopProduct name="Earphones" product={Headphones} />
          <ShopProduct name="Earphones" product={Speaker} />
          <ShopProduct name="Earphones" product={Earphoness} />
        </div>
      </div>
      <div className="px-9 md:px-12 lg:px-36">
        <section className="  maxWidthSection mb-36 grid gap-20">
          <div className="bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-center bg-secondary-brown-100 pb-9 pt-9 px-9 md:px-20 lg:pb-9 text-center lg:text-left rounded-md lg:flex gap-6 lg:flex-row relative">
            <div className="w-full  ">
              <Image
                className="m-auto relative lg:top-2 w-[50%] md:w-[40%] lg:w-[70%] object-contain"
                src={Speaker}
              />
            </div>
            <div>
              <h1 className="uppercase mt-7 font-bold text-3xl md:text-4xl lg:text-5xl text-primary-white-100">
                ZX9 SPEAKER
              </h1>
              <p className="mt-7  md:text-lg lg:text-xl tracking-wider text-primary-white-100">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <div className="  grid place-content-center lg:justify-start ">
                <Button
                  text="see product"
                  classname="mt-12 text-sm md:text-base bg-primary-black-90 border border-primary-black-90 text-primary-white-100 hover:border-[#4C4C4C] hover:bg-[#4C4C4C]"
                  type="brown"
                />
              </div>
            </div>
          </div>

          <div
            className="bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')]  
        lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]  bg-no-repeat bg-cover p-12 md:p-16 lg:p-24"
          >
            <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-5xl text-primary-white-100">
              ZX9 SPEAKER
            </h1>

            <div className="">
              <Button
                text="see product"
                classname="mt-12 text-sm md:text-base bg-transparent border border-primary-black-100 text-primary-black-100  hover:bg-primary-black-100 hover:text-primary-white-100"
                type="brown"
              />
            </div>
          </div>

          <div className="grid gap-24 md:grid-cols-2">
            <div className="w-full md:h-auto ">
              <Image
                src={"/assets/home/tablet/image-earphones-yx1.jpg"}
                width={200}
                height={200}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
            <div className="h-[200px] md:h-auto bg-[#F2F2F2] p-12 rounded-md">
              <h1 className="uppercase font-bold text-3xl md:text-4xl lg:text-5xl ">
                ZX9 SPEAKER
              </h1>

              <div className="">
                <Button
                  text="see product"
                  classname="mt-12 text-sm md:text-base bg-transparent border border-primary-black-100 text-primary-black-100  hover:bg-primary-black-100 hover:text-primary-white-100"
                  type="brown"
                />
              </div>
            </div>
          </div>

          <BeforeFooter />
        </section>
      </div>

      {/* <Counter /> */}
    </main>
  );
}
