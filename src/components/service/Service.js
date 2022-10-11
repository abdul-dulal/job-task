import React from "react";
import task from "./../../assests/icon/Protect Cloud.svg";
import design from "./../../assests/icon/Protect Cloud (1).svg";
import practice from "./../../assests/icon/icon.png";

import ServiceArea from "./ServiceArea";
const Service = () => {
  return (
    <div className="  my-32">
      <h1 className="text-center  md:text-5xl text-4xl font-bold">
        Our services made <br />
        for you?
      </h1>
      <div className="grid grid-flow-row-dense lg:grid-cols-2 gap-10 md:grid-cols-2 xl:grid-cols-3 lg:px-28 md:px-22 px-12 justify-center">
        <ServiceArea
          img={task}
          title="Task Management"
          description="The process of managing a task through its life cycle. It involves
          planning, testing, tracking."
        />
        <ServiceArea
          img={design}
          title="Design System"
          description="The technology by which a process or procedure is performed with minimal human assistance."
        />
        <ServiceArea
          img={practice}
          title="Best Practices"
          description="Creating plan to spend your money, This spending planer is called a budgeting tool for business."
        />
      </div>
    </div>
  );
};

export default Service;
