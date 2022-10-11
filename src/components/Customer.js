import React from "react";
import slack from "../assests/customer/image 3 (1).png";
import airbnb from "../assests/customer/image 8.png";
import amaozn from "../assests/customer/image 4.png";
import google from "../assests/customer/image 5.png";
import netflix from "../assests/customer/image 7.png";
const Customer = () => {
  const customer = [slack, airbnb, amaozn, google, netflix];
  return (
    <div className=" flex lg:px-28 md:px-22 px-12 flex-wrap justify-between mt-12 ">
      {customer.map((img) => (
        <img src={img} className="w-24 h-10" alt="" />
      ))}
    </div>
  );
};

export default Customer;
