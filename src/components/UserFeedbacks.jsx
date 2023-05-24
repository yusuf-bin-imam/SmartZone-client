import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";

const UserFeedbacks = () => {
  const [allFeedbacks, setFeedback] = useState([]);

  useEffect(() => {
    fetch(`https://smartzone-server.onrender.com/feedbacks`)
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);
  return (
    <div>
      <div
        id="userFeedbacks"
        className="min-w-screen min-h-screen  flex items-center justify-center py-5"
      >
        <div className="w-full bg-white  px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1
                id="title"
                className="mt-5  text-4xl font-bold  text-[#1b3764] mb-2"
              >
                Users Feedbacks
              </h1>
              <h3 id="txt" className="font-bold">
                Inspiring Success Stories from Our Customers
              </h3>
            </div>
            <div className="grid gap-3 lg:grid-cols-3 grid-cols-1 mt-20">
              {allFeedbacks?.map((feedback, i) => (
                <Feedback key={i} UserFeedback={feedback} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedbacks;
