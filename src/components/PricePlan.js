import React from "react";
import vector from "../assests/icon/Vector 368.png";
import getSymbolFromCurrency from "currency-symbol-map";
import { RiCheckboxCircleLine } from "react-icons/ri";
const PricePlan = () => {
  return (
    <div className="lg:px-28 md:px-22 px-12 my-36">
      <h1 className="md:text-5xl text-3xl font-bold text-black text-center mb-14">
        Get results first. Pick a plan later.
      </h1>
      <div className="flex justify-center items-center mb-10">
        <button className="text-base bg-gradient-to-l from-[#0F0EC9] to-[#1F64F8]  font-medium rounded-full text-white h-8 w-20 p-1 outline-none">
          Monthly
        </button>
        <button className="ml-3">Annualy</button>
        <img src={vector} width="68" height="54" alt="" />
        <sup className="-mt-10 text-[12px] font-medium">Get 20% OFF</sup>
      </div>
      <div className="grid grid-flow-row-dense lg:grid-cols-2 gap-10 md:grid-cols-2 xl:grid-cols-3  ">
        <div className="space-y-5 flex flex-col h-[652px] shadow-lg px-6 pt-12 rounded-lg">
          <h1 className="text-2xl font-bold text-[#0F0EC9]">Pro</h1>
          <p className="text-5xl font-bold text-[#0F0EC9]">
            {getSymbolFromCurrency("USD")}30{" "}
            <sub className="text-base text-black font-medium">/month</sub>
          </p>
          <p>For Small Business</p>
          <hr />
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            3 Social profiles
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />{" "}
            12 Team members
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            5 Competitors per profile
          </p>
          <div className="pt-[200px] block mx-auto">
            <button className="uppercase  bg-gradient-to-l from-[#0F0EC9] to-[#1F64F8] text-white w-52 h-12 rounded-full">
              get started
            </button>
          </div>
        </div>
        <div className="space-y-5 flex flex-col h-[652px] shadow-lg px-6 bg-gradient-to-l from-[#0F0EC9] to-[#1F64F8] pt-12 text-white rounded-lg">
          <h1 className="text-2xl font-bold text-white">Popular</h1>
          <p className="text-5xl font-bold text-white">
            {getSymbolFromCurrency("USD")}60
            <sub className="text-base text-white font-medium">/month</sub>
          </p>
          <p>For Medium businessess</p>
          <hr />
          <p className="flex items-center gap-2 ">
            <RiCheckboxCircleLine className="bg-white text-[#0F0EC9] rounded-full" />
            3 Social profiles
          </p>
          <p className="flex items-center gap-2 ">
            <RiCheckboxCircleLine className="bg-white text-[#0F0EC9] rounded-full" />
            12 Team members
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-white text-[#0F0EC9] rounded-full" />
            5 Competitors per profile
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-white text-[#0F0EC9] rounded-full" />
            Hashtags per profile
          </p>
          <div className="pt-40 block mx-auto">
            <button className="uppercase   bg-white text-[#0F0EC9] text- w-52 h-12 rounded-full">
              get started
            </button>
          </div>
        </div>
        <div className="space-y-5 flex flex-col h-[652px] shadow-lg px-6 pt-12 rounded-lg">
          <h1 className="text-2xl font-bold text-[#0F0EC9]">Advanced</h1>
          <p className="text-5xl font-bold text-[#0F0EC9]">
            {getSymbolFromCurrency("USD")}100
            <sub className="text-base text-black font-medium">/month</sub>
          </p>
          <p>For Enterprices</p>
          <hr />
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            3 Social profiles
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />{" "}
            12 Team members
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            5 Competitors per profile
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            3 Social profiles
          </p>
          <p className="flex items-center gap-2">
            <RiCheckboxCircleLine className="bg-[#0F0EC9] text-white rounded-full" />
            12 Team members
          </p>
          <div className="pt-28 block mx-auto">
            <button className="uppercase  bg-gradient-to-l from-[#0F0EC9] to-[#1F64F8] text-white w-52 h-12 rounded-full">
              get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
