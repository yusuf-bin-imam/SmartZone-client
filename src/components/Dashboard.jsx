import React from "react";
import Lottie from "lottie-react";
import dash from "../../src/assets/dashboard.json";
const Dashboard = () => {
  return (
    <div>
      <Lottie className="w-1/2" animationData={dash}></Lottie>
    </div>
  );
};

export default Dashboard;
