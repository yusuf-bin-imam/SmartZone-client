import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

const UserFeedbacks = () => {
  const [allFeedbacks, setFeedback] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks`)
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);
  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                What people are saying.
              </h1>
              <h3 class="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
            <div class="-mx-3 md:flex items-start">
              <div class="px-3 md:w-1/3">
                {allFeedbacks?.map((feedback) => (
                  <Feedback UserFeedback={feedback} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedbacks;
