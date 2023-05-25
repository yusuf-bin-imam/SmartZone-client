import React from "react";
import heroImage from "../../src/assets/smartphone 1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1
              id="title"
              className="text-5xl text-extrabold  font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900"
            >
              Smarter, Safer & Smoother
            </h1>
            <p
              id="txt"
              className="mt-6 mb-8 text-lg font-bold sm:mb-12 xl:max-w-3xl dark:text-gray-900"
            >
              SmartZone is a shop that provides pre-owned devices to consumers.
            </p>
            <div className="flex flex-wrap justify-center">
              <a href="#brand">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold  bg-[#1b3764] text-white"
                >
                  Popular Brands
                </button>
              </a>
              <a href="#userFeedbacks">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border-2 border-gray-300 dark:text-gray-900"
                >
                  Feedbacks
                </button>
              </a>
              {/* <Link to={"/contact"}>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border-2 border-gray-300 dark:text-gray-900"
                >
                  Contact Us
                </button>
              </Link> */}

              {/* <a href="#contact">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg border-2 border-gray-300 dark:text-gray-900"
                >
                  Contact Us
                </button>
              </a> */}
            </div>
          </div>
        </div>
        <img
          src={heroImage}
          alt=""
          className="w-5/6 h-[600px] mx-auto mb-12 -mt-20  shadow-md lg:-mt-40 dark:bg-gray-500"
        />
      </section>
    </div>
  );
};

export default Hero;
