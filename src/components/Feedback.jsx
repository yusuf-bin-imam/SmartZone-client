import React from "react";

const Feedback = ({ UserFeedback }) => {
  console.log(UserFeedback);
  const { reviewerName, reviewerImage, reviewerEmail, feedback } = UserFeedback;
  return (
    <div>
      <div>
        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
          <div class="w-full flex mb-4 items-center">
            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <img src={reviewerImage} alt="reviewerImage" />
            </div>
            <div class="flex-grow pl-3">
              <h6 class="font-bold text-sm uppercase text-gray-600">
                {reviewerName}
              </h6>
            </div>
          </div>
          <div class="w-full">
            <h6 class="font-bold text-sm uppercase text-gray-600">
              {reviewerEmail}
            </h6>
            <p class="text-sm leading-tight">
              <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                "
              </span>
              {feedback}
              <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                "
              </span>
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Feedback;
