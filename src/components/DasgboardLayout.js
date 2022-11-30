import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { authContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const DasgboardLayout = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navigation />
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
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 mt-4 text-base-content">
            {!isAdmin && !isSeller && (
              <>
                <li className="btn btn-outline mt-2 rounded-lg">
                  <Link to={"/dashboard"}>My Orders</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li className="btn btn-outline mt-2 rounded-lg">
                  <Link to={"/dashboard/allProduct"}>My Products</Link>
                </li>{" "}
                <li className="btn btn-outline mt-2 rounded-lg">
                  <Link to={"/dashboard/addProduct"}>Add A product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="btn btn-outline mt-2 rounded-lg">
                  <Link to={"/dashboard/allSeller"}>All Sellers</Link>
                </li>{" "}
                <li className="btn btn-outline mt-2 rounded-lg">
                  <Link to={"/dashboard/allBuyers"}>All Buyers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DasgboardLayout;
