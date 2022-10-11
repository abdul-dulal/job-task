import React from "react";
import man from "../assests/img/digital-service2 1.png";
import chat from "../assests/img/chart1.png";
const Banner = () => {
  return (
    <div className="bg-[#F6F5FF] lg:pt-56 pt-16 pb-16">
      <div className="grid lg:grid-cols-2   gap-16 md:px-28 px-12">
        <div>
          <h1 className=" xl:text-5xl text-3xl font-bold">
            Powerful and easy to <br /> use SaaS platform
          </h1>
          <p className="text-[18px] font-medium my-9">
            Use marketing automation to identify hot leads and email your <br />{" "}
            sales team telling them to follow up. Nurture and contact <br />
            leads at the opportune time to maximize.
          </p>
          <button className="w-52 h-16 bg-gradient-to-l from-[#1F64F8] to-[#0F0EC9] rounded-full text-white  font-bold uppercase outline-none">
            Get Started
          </button>
        </div>
        <div className="lg:mt-0 mt-28 ">
          <div className="relative bg-gradient-to-l from-[#1F64F8] to-[#0F0EC9]    rounded-2xl">
            <img
              src={man}
              className="w-full inline-block -mt-20 xl:-mt-40 md:-mt-36 lg:-mt-24 "
              alt=""
            />
            <img
              src={chat}
              className=" sm:w-7/12 w-8/12 absolute bottom-9 -left-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
