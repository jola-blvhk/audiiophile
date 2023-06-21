import React from "react";

export const Banner = ({ name }) => {
  return (
    <div className="h-32 md:h-36 lg:h-40 mt-16 bg-primary-black-90 text-primary-white-100 uppercase grid place-items-center text-2xl font-semibold ">
      {name}
    </div>
  );
};
