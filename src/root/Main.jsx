import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import MobileNav from "../components/MobileNav";

const Main = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Header className="lg:block hidden" />
      <MobileNav className="block lg:hidden" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
