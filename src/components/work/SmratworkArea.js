import React from "react";

const SmratworkArea = ({ count, title }) => {
  return (
    <div>
      <div className="flex space-x-7 mb-10 ">
        <p className="h-24 w-24  bg-white rounded-full text-[#0F0EC9] flex items-center justify-center text-5xl font-bold">
          {count}
        </p>
        <div className="mt-1">
          <h1 className="text-2xl font-bold text-white ">{title}</h1>
          <p className="text-[18px] lg:text-sm xl:text-[18px]  font-medium text-white leading-9 lg:leading-8">
            After learning about your customer <br />
            service needs, we will get you up
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmratworkArea;
