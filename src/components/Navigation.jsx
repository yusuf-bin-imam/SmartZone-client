import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="">
      <header className="text-gray-400  rounded bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center font-bold text-base md:ml-auto">
            <Link to={"/"} className="mr-5 hover:text-teal-500">
              Home
            </Link>
            <Link className="mr-5 hover:text-teal-500">Second Link</Link>
            <Link className="mr-5 hover:text-teal-500">Third Link</Link>
            <Link to={"/blog"} className="hover:text-teal-500">
              Blogs
            </Link>
          </nav>
          <Link className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              className="w-12 h-12"
              src="https://www.shareicon.net/data/128x128/2015/09/25/107069_apple_512x512.png"
              alt=""
            />
            <span className="ml-3 text-teal-600 font-serif text-3xl xl:block lg:hidden">
              <strong>SmartZone</strong>
            </span>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Link to={"/login"}>
              <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
