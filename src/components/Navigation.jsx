import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="">
      <header className="text-gray-400   bg-black py-6 body-font">
        <div className="container mx-auto grid grid-cols-3">
          <Link className="flex order-first lg:order-none  title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              className="w-12 h-12"
              src="https://www.shareicon.net/data/128x128/2015/09/25/107069_apple_512x512.png"
              alt=""
            />
            <span className="ml-3 text-[#1b3764] font-serif text-3xl xl:block lg:hidden">
              <Link to={"/"}>
                <strong>SmartZone</strong>
              </Link>
            </span>
          </Link>
          <nav className="flex justify-between items-center font-bold text-base md:ml-auto">
            {user?.uid ? (
              <>
                {" "}
                <Link to={"/"} className="mr-5 hover:text-teal-500">
                  Home
                </Link>
                <Link to={"/dashboard"} className="mr-5 hover:text-teal-500">
                  Dashboard
                </Link>
                <Link to={"/blog"} className="hover:text-teal-500">
                  Blogs
                </Link>
              </>
            ) : (
              <>
                <Link to={"/"} className="mr-5 hover:text-teal-500">
                  Home
                </Link>

                <Link to={"/blog"} className="hover:text-teal-500">
                  Blogs
                </Link>
              </>
            )}
          </nav>{" "}
          <div className="inline-flex   ml-5 lg:ml-20">
            {user?.photoURL ? (
              <img
                className="mr-3 rounded-full w-12 shadow-lg"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUser className="mt-1 mr-3 bg-black rounded-full w-10 h-10" />
            )}
            {user?.uid ? (
              <Link to={""}>
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline mr-3 btn-error"
                >
                  Signout
                </button>
              </Link>
            ) : (
              <div>
                <Link to={"/login"}>
                  <button className="btn mr-3 btn-outline  btn-primary">
                    Sign in
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button className="btn btn-outline btn-secondary">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
            <label
              htmlFor="dashboard-drawer"
              tabIndex={2}
              className="btn bg-gray-500 border-white btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
