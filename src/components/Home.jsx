import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Category from "./Category";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  return (
    <div className="bg-white">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://i.pinimg.com/originals/70/7c/39/707c39bfff546612b5b4604fe86cda32.gif"
            alt=""
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
        >
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-teal-accent-400">
              Hey Sir
            </p>
            <h2 className="mb-5  text-teal-900 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 font-semibold text-gray-700 md:text-lg">
              SmartZone is a tech house that delivers the preowned device to the
              people.
            </p>
            <div className="flex  items-center">
              <Link
                className="group relative inline-block overflow-hidden border border-teal-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-teal-600 transition-all group-hover:w-full group-active:bg-teal-500"></span>

                <span className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white">
                  Buy Now
                </span>
              </Link>
              <Link
                to={"/about"}
                className=" ml-5 group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                  About Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Category categories={categories} />
      <About />
    </div>
  );
};

export default Home;
