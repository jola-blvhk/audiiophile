"use client";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components";

const faqItems = [
  {
    heading: "What happens if a project does not reach its funding goal?  ",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading:
      "What is the minimum investment amount for participating in a project?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "Can I invest in multiple projects simultaneously?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu",
  },
  {
    heading: "Can I invest in multiple projects simultaneously?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
  {
    heading: "Can I invest in multiple projects simultaneously?",
    description:
      "Yes, you can invest in multiple projects simultaneously. Diversifying your investment portfolio across different projects allows you to spread risk and maximize potential returns. Our platform supports investing in multiple projects, giving you the flexibility to choose from various sectors and initiatives within Enugu.",
  },
];

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState(0);
  const showResult = (index) => {
    setFaqIndex(index);
  };
  const hideResult = () => {
    setFaqIndex(-1);
  };
  const onClick = () =>
    toast("Toast is good", {
      hideProgressBar: true,
      autoClose: 4000,
      type: "success",
      position: "top-right",
      className: 'mt-12 '
    });
  return (
    <div>
      <Button
        colour="brown"
        className="mt-48 border border-red-400 text-black"
        onClick={onClick}
        text="Click me"
    />
       
      <div className="p-3 border-b-[.08rem] border-gray-300 md:w-[750px]">
        <div className="text-[#008080] mb-6">Frequently Asked Questions</div>
        {/* <h1 className="font-bold">Have any Questions?</h1> */}
        {faqItems.map((item, idx) => (
          <div key={idx} className="border-b-[.35rem] border-gray-200 py-3">
            <div className="flex justify-between p-2">
              <h4 className="text-[16px] text-gray-700 text-left">
                {item.heading}
              </h4>
              <div className="text-center cursor-pointer">
                <AiOutlinePlusCircle
                  className={
                    faqIndex === idx
                      ? "hidden"
                      : "block text-[#FF8447] font-bold"
                  }
                  onClick={() => showResult(idx)}
                  size={20}
                />
                <AiOutlineMinusCircle
                  className={
                    faqIndex === idx
                      ? "text-[#FF8447]"
                      : "hidden text-black font-bold"
                  }
                  onClick={hideResult}
                  size={20}
                />
              </div>
            </div>
            <p
              className={
                faqIndex === idx ? "text-left p-2" : "hidden text-left p-2"
              }
            >
              <p className="text-[14px] text-left text-gray-700">
                {item.description}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
