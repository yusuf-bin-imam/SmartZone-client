import React, { useContext } from "react";
import logo from "../../src/assets/smartphone.png";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { FaBuysellads, FaProductHunt, FaSignOutAlt } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import noUser from "../../src/assets/default avater.png";
import { BsCartCheckFill, BsDatabaseFillAdd } from "react-icons/bs";

const MobileNav = () => {
  const { user, logOut, logUser } = useContext(authContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <header class=" text-white  bg-[#1b3764] block lg:hidden body-font">
        <div class="container mx-auto flex justify-around flex-wrap p-5   items-center">
          <Link
            to={"/"}
            className="mr-4 flex  cursor-pointer py-1.5 font-bold text-4xl"
          >
            <img className="  w-14 h-14 -mt-1" src={logo} alt="" />

            <span className="text-4xl">SmartZone</span>
          </Link>
          {user?.uid && (
            <>
              <img
                className="w-12 h-12 avatar mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                alt="userImage"
                src={user?.photoURL}
              />
            </>
          )}
          {!user && (
            <>
              <div className="dropdown  dropdown-hover">
                <label tabIndex={0}>
                  <img
                    className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    alt="NoUser"
                    src={noUser}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 -ml-32 shadow bg-[#1b3764] rounded-box w-52"
                >
                  <li>
                    <NavLink to={"/login"}>Sign In</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>Sign Up</NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center font-bold justify-center">
            {user?.uid ? (
              <>
                <NavLink className="mr-2" to={"/"}>
                  Home
                </NavLink>
                {/* <NavLink className="mr-2" to={"/dashboard"}>
                  Dashboard
                </NavLink> */}
                <div className="dropdown mr-2 dropdown-bottom">
                  <Link tabIndex={0} className=" m-1">
                    Dashboard
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  menu p-2 -ml-14 shadow bg-[#1b3764] font-bold text-white rounded w-52"
                  >
                    <li>
                      <NavLink
                        className="text-center w-full mx-auto"
                        to={"/myProfile"}
                      >
                        Profile
                      </NavLink>
                    </li>

                    {/* <li>
                      <button
                        className=" text-start flex "
                        onClick={handleLogOut}
                      >
                        LogOut <FaSignOutAlt className="text-xl font-bold" />
                      </button>
                    </li> */}
                    {logUser?.role === "buyer" && (
                      <>
                        <li>
                          <NavLink
                            id="title"
                            className="rounded-none font-bold"
                            to={"/dashboard/myOrders"}
                          >
                            <BsCartCheckFill />
                            My Orders
                          </NavLink>
                        </li>
                      </>
                    )}
                    {logUser?.role === "seller" && (
                      <>
                        <li>
                          <NavLink
                            id="title"
                            className="rounded-none font-bold"
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
                            to={"/dashboard/myProducts"}
                          >
                            <FaProductHunt />
                            My Products
                          </NavLink>
                        </li>{" "}
                        <li className="mt-2">
                          <NavLink
                            id="title"
                            className="rounded-none font-bold"
                            to={"/dashboard/addProduct"}
                          >
                            <BsDatabaseFillAdd />
                            Add Product
                          </NavLink>
                        </li>
                      </>
                    )}

                    {logUser?.role === "admin" && (
                      <>
                        <li>
                          <NavLink
                            id="title"
                            className="rounded-none font-bold"
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
                            to={"/dashboard/allBuyers"}
                          >
                            <FaBuysellads />
                            All Buyers
                          </NavLink>
                        </li>
                      </>
                    )}
                    <li>
                      <button
                        className=" text-start flex "
                        onClick={handleLogOut}
                      >
                        LogOut <FaSignOutAlt className="text-xl font-bold" />
                      </button>
                    </li>
                  </ul>
                </div>
                <NavLink className="mr-2" to={"/faq"}>
                  Faq
                </NavLink>
                <NavLink className="mr-2" to={"/blog"}>
                  Blogs
                </NavLink>
                <NavLink className="mr-2" to={"/giveFeedback"}>
                  Feedback
                </NavLink>
                <NavLink className="mr-2" to={"/contact"}>
                  Contact
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="mr-2" to={"/"}>
                  Home
                </NavLink>
                <NavLink className="mr-2" to={"/faq"}>
                  Faq
                </NavLink>
                <NavLink className="mr-2" to={"/blog"}>
                  Blogs
                </NavLink>
              </>
            )}
          </nav>
          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default MobileNav;
