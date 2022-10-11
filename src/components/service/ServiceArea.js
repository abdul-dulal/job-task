import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceArea = ({ img, title, description }) => {
  return (
    <div className="">
      <div className="flex flex-col  items-center justify-center  p-4  h-[374px] shadow-lg ">
        <img
          src={img}
          className="bg-[#E3E2FD] rounded-full p-3 h-16 w-16 mb-7"
          alt=""
        />
        <h1 className="md:text-2xl text-xl font-bold mb-5">{title}</h1>
        <p className="text-base  font-semibold px-5 text-center">
          {description}
        </p>
        <button className="flex items-center my-7 text-[#0F0BC7] text-base font-semibold">
          See More
          <span className="ml-3">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceArea;
