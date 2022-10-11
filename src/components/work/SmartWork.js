import React from "react";
import SmratworkArea from "./SmratworkArea";
const SmartWork = () => {
  return (
    <div className=" bg-gradient-to-l from-[#0F0EC9] to-[#1F64F8] md:px-28 px-12 py-32  ">
      <div className="flex justify-between justfi-center items-center ">
        <h1 className="md:text-4xl text-2xl font-bold text-white">
          Work smarter <br /> with easy access for user..
        </h1>
        <button className="w-52  md:h-16 h-12 bg-white rounded-full text-[#0F0EC9] font-bold uppercase outline-none">
          get started
        </button>
      </div>
      <div className="mt-20 grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        <div>
          <SmratworkArea title="Create Account" count="1" />
          <SmratworkArea title="Install tracking code" count="2" />
          <SmratworkArea title="Tracking analytics" count="3" />
        </div>
        <div className="">
          <iframe
            height="387"
            width="100%"
            className="rounded-lg   "
            src="https://www.youtube.com/embed/lTxn2BuqyzU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SmartWork;
