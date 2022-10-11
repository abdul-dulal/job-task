import React from "react";
import user1 from "../../assests/img/Image (1).png";
import user2 from "../../assests/img/Image.png";
import user3 from "../../assests/img/Image (2).png";
import FeedbackArea from "./FeedbackArea";
const UserFeedback = () => {
  return (
    <div className="lg:px-28 md:px-22 px-12">
      <h1 className="md:text-5xl text-3xl  font-bold text-black text-center mb-16">
        What people are saying about us
      </h1>
      <div className="grid  lg:grid-cols-2 gap-10 md:grid-cols-2 xl:grid-cols-3   ">
        <FeedbackArea
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
          image={user3}
          name="Kartik Bansal"
          place="Kota, Rajasthan"
        />
        <FeedbackArea
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
          image={user1}
          name="Anil Dvivedi  "
          place="New Delli"
        />
        <FeedbackArea
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna"
          image={user2}
          name="Srijan Sirasikar"
          place="KBhadrak"
        />
      </div>
    </div>
  );
};

export default UserFeedback;
