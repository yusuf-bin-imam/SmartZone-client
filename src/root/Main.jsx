import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Main = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
