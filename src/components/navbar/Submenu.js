import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
const Submenu = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" grid grid-cols-2  lg:hidden md:hidden pt-5 ">
      <div className="grid grid-cols-2 relative text-white">
        <div className="space-y-7">
          <HiMenu className="text-3xl" onClick={handleShow} />
          {show ? (
            <>
              <ul className=" lg:gap-14 space-y-4 cursor-pointer text-xl">
                <li>Product</li>
                <li> Solution</li>

                <li>Customer</li>

                <li>Pricing</li>
                <li>About </li>
              </ul>
            </>
          ) : (
            " "
          )}
        </div>
        <div className="ml-[-10px] ">
          <h1 className="text-xl ml-4">Saasify</h1>
        </div>
      </div>

      <ul className="text-white ml-10 text-xl">
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default Submenu;
