import React from "react";
import wavebackground from ".././../assests/img/Vector-366.svg";
import Submenu from "./Submenu";
const Navbar = () => {
  return (
    <div
      className="pb-[750px] lg:px-28 md:px-22 px-12 "
      style={{
        background: `url(${wavebackground})`,
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-primary lg:block md:block hidden  ">
        <div className="flex justify-between items-center   text-white  pt-10  ">
          <div className="cursor-pointer">
            <p className="text-xl">Saasify</p>
          </div>
          <ul className="flex lg:gap-14 gap-4 cursor-pointer text-xl">
            <li>Product</li>
            <li> Solution</li>

            <li>Customer</li>

            <li>Pricing</li>
            <li>About us</li>
          </ul>
          <div>
            <ul className="flex justify-end cursor-pointer	">
              <li className="text-white text-xl">Signup</li>
            </ul>
          </div>
        </div>
      </div>
      <Submenu />
      <div className="">
        <h1 className="md:text-5xl text-3xl sm:mt-16 mt-8 font-bold text-white text-center mb-10">
          The fastest way for startups <br /> to do any analysis
        </h1>

        <p className="text-center text-white sm:text-xl text-base sm:mb-10 mb-28  font-medium leading-9">
          Equals is the only spreadsheet with built-in connections to any <br />
          database, versioning, and collaboration.
        </p>

        <div className="hidden    sm:flex h-14  my-12 mx-auto   ">
          <input type="text" className="h-14 rounded-full  w-6/12 mx-auto" />
          <button className="absolute xl:right-[443px] lg:right-80 md:right-56   bg-gradient-to-l from-[#1F64F8] to-[#0F0EC9] rounded-full h-12 px-4 mt-1  text-white   ">
            Started for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
