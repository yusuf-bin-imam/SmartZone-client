import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState, useEffect, useContext } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { RxCross2 } from "react-icons/rx";

import noUser from "../../src/assets/default avater.png";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import { FaBuysellads, FaProductHunt } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { BsCartCheckFill, BsDatabaseFillAdd } from "react-icons/bs";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user);

  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const [openNav, setOpenNav] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const navStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid yellow" : "none",
    };
  };

  const navList = (
    <nav
      id="text"
      className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  font-bold text-white text-base "
    >
      {user?.uid ? (
        <>
          <NavLink style={navStyle} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className="hidden lg:block"
            style={navStyle}
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
          <NavLink style={navStyle} to={"/faq"}>
            Faq
          </NavLink>
          <NavLink style={navStyle} to={"/blog"}>
            Blogs
          </NavLink>
          <NavLink style={navStyle} to={"/giveFeedback"}>
            Feedback
          </NavLink>
          <NavLink style={navStyle} to={"/contact"}>
            Contact
          </NavLink>
        </>
      ) : (
        <>
          <NavLink style={navStyle} to={"/"}>
            Home
          </NavLink>
          <NavLink style={navStyle} to={"/faq"}>
            Faq
          </NavLink>
          <NavLink style={navStyle} to={"/blog"}>
            Blogs
          </NavLink>
        </>
      )}
      {/* <NavLink style={navStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navStyle} to={"/faq"}>
        Faq
      </NavLink>
      <NavLink style={navStyle} to={"/blog"}>
        Blogs
      </NavLink> */}
    </nav>
  );

  return (
    <Navbar
      id="text"
      className="mx-auto text-white  bg-[#1b3764]    px-4 border-none lg:px-8 rounded-none lg:py-8"
    >
      <div className="container mx-auto flex items-center justify-around text-blue-gray-900">
        <Link
          to={"/"}
          className="mr-4 flex  cursor-pointer py-1.5 font-bold text-4xl"
        >
          <img
            className="w-12 h-12 -mt-1"
            src="https://www.shareicon.net/data/128x128/2015/09/25/107069_apple_512x512.png"
            alt=""
          />
          <span className="text-4xl">SmartZone</span>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex justify-around">
          {user?.uid ? (
            <>
              {/* <div className="avatar">
                <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="userImage" src={user?.photoURL} />
                </div>
              </div>
              <Button
                variant="gradient"
                id="text"
                onClick={handleLogOut}
                className="hidden bg-[#941010] py-3 lg:inline-block"
              >
                <span>Log Out</span>
              </Button> */}
              <div className="dropdown flex justify-between  dropdown-hover">
                <label tabIndex={0}>
                  <img
                    className="w-12 h-12 avatar mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    alt="userImage"
                    src={user?.photoURL}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-10  menu p-2 shadow bg-[#1b3764] rounded-box w-52"
                >
                  <li>
                    <NavLink to={"/myProfile"}>Profile</NavLink>
                  </li>

                  <li>
                    <button
                      className=" text-start lg:inline-block"
                      onClick={handleLogOut}
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              {user?.uid && (
                <div className="dropdown block lg:hidden dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn  bg-yellow-500 rounded m-1"
                  >
                    Dashboard
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  menu p-2 -ml-14 shadow bg-[#1b3764] font-bold text-white rounded-box w-52"
                  >
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
              )}
            </>
          ) : (
            <>
              {/* <div className="avatar">
                <div className="w-12 mr-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt="NoUser" src={noUser} />
                </div>
              </div> */}
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
                  className="dropdown-content menu p-2 shadow bg-[#1b3764] rounded-box w-52"
                >
                  <li>
                    <NavLink to={"/login"}>Sign In</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>Sign Up</NavLink>
                  </li>
                </ul>
              </div>
              {/* <Link to={"/login"}>
                <Button
                  variant="gradient"
                  id="text"
                  className="hidden bg-[#2a2b2c] py-3 lg:inline-block"
                >
                  <span>Sign In</span>
                </Button>
              </Link>
              <Link to={"/register"}>
                <Button
                  variant="gradient"
                  id="text"
                  size="sm"
                  className="hidden ml-3 py-3 bg-blue-500 lg:inline-block"
                >
                  <span>Sign Up</span>
                </Button>
              </Link> */}
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6  -mt-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross2 className="text-3xl text-white" />
          ) : (
            <BiMenuAltRight className="text-3xl text-white" />
          )}
        </IconButton>
      </div>
      <MobileNav className="lg:hidden " open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
  );
};
export default Header;
