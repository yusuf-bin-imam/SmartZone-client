import React from "react";
import Lottie from "lottie-react";
import dash from "../../src/assets/dashboard.json";
const Dashboard = () => {
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_hx7ddrx9.json"
          background="transparent"
          speed="1"
          loop
          // controls
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Dashboard;
