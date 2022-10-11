import React from "react";
import { FaStar } from "react-icons/fa";
const FeedbackArea = ({ description, name, image, place }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="shadow-lg bg-white px-10 pt-10 ">
      <div className="flex gap-1 py-8">
        {stars.map((_, index) => {
          return <FaStar key={index} className="text-[#0F0EC9]" />;
        })}
      </div>
      <p className="text-[18px] font-medium"> {description}</p>
      <div className="flex  items-center  space-x-6 my-12">
        <img src={image} className="mt-0" alt="" />
        <div>
          <h1 className="text-base font-bold">{name}</h1>
          <p className="text-sm font-medium">{place}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackArea;
