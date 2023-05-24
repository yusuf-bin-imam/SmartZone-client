import React from "react";

const Feedback = ({ UserFeedback }) => {
  // console.log(UserFeedback);
  const { reviewerName, reviewerImage, reviewerEmail, feedback } = UserFeedback;
  return (
    <div className="w-full h-[198px] mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light ">
      <div className="w-full flex mb-3 gap-3  items-center">
        <div className="overflow-hidden ring ring-[#1b3764] ring-offset-base-100 ring-offset-2 rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src={reviewerImage} alt="reviewerImage" />
        </div>
        <div className="text-start">
          <h6 className="font-bold text-sm  ">{reviewerName}</h6>
          <h6 className="font-bold text-sm  ">{reviewerEmail}</h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm text-start">{feedback}</p>
      </div>
    </div>
  );
};

export default Feedback;
