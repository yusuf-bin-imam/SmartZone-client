import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { authContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Header from "../components/Header";
import { SiSellfy } from "react-icons/si";
import {
  BsCartCheckFill,
  BsDatabaseFillAdd,
  BsFillHouseAddFill,
} from "react-icons/bs";
import { FaBuysellads, FaProductHunt } from "react-icons/fa";

const DasgboardLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const navStyle = ({ isActive }) => {
    return {
      // backgroundColour: "#F5F0BB",
      background: isActive ? "#1b3764" : "none",
      padding: "12px",
      borderRadius: "0px",
    };
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-64 mt-4 text-base-content">
              {!isAdmin && !isSeller && (
                <>
                  <li>
                    <NavLink
                      id="title"
                      className="rounded-none font-bold"
                      style={navStyle}
                      to={"/dashboard/myOrders"}
                    >
                      <BsCartCheckFill />
                      My Orders
                    </NavLink>
                  </li>
                </>
              )}
              {isSeller && (
                <>
                  <li>
                    <NavLink
                      id="title"
                      className="rounded-none font-bold"
                      style={navStyle}
                      to={"/dashboard/myOrders"}
                    >
                      <BsCartCheckFill />
                      My Orders
                    </NavLink>
                  </li>
                  <li className="  mt-2 ">
                    <NavLink
                      id="title"
                      className="rounded-none font-bold"
                      style={navStyle}
                      to={"/dashboard/allProduct"}
                    >
                      <FaProductHunt />
                      My Products
                    </NavLink>
                  </li>{" "}
                  <li className="mt-2">
                    <NavLink
                      id="title"
                      className="rounded-none font-bold"
                      style={navStyle}
                      to={"/dashboard/addProduct"}
                    >
                      <BsDatabaseFillAdd />
                      Add Product
                    </NavLink>
                  </li>
                </>
              )}

              {isAdmin && (
                <>
                  <li>
                    <NavLink
                      id="title"
                      className="rounded-none font-bold"
                      style={navStyle}
                      to={"/dashboard/myOrders"}
                    >
                      <BsCartCheckFill />
                      My Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      id="title"
                      className="rounded-none mt-2 font-bold"
                      style={navStyle}
                      to={"/dashboard/allSeller"}
                    >
                      <SiSellfy />
                      All Sellers
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      id="title"
                      className="rounded-none mt-2 font-bold"
                      style={navStyle}
                      to={"/dashboard/allBuyers"}
                    >
                      <FaBuysellads />
                      All Buyers
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasgboardLayout;
