import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Category from "./Category";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-lake.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);

  return (
    <div className="bg-white">
      {/* <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
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
            src="https://img.freepik.com/premium-photo/young-man-using-smartphone-with-shopping-cart-icon_112554-1016.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=sph"
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
                to={"/blog"}
                className=" ml-5 group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                  Blog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col bg-[#cbe5d3] items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2
              id="title"
              className="max-w-lg mb-3 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              SmartZone
            </h2>
            <p id="text" className="font-bold text-xl">
              SmartZone is a tech house that provides and receive preowned
              device to the consumers.
            </p>
            <Link to={"/blog"}>
              <button className="bg[#f4ac44] px-14 py-3 mt-5 mr-3 rounded-md border border-black font-bold ">
                Blog
              </button>
            </Link>
            <Link to={"/blog"}>
              <button className="bg-[#ecc4b4] px-14 py-3 mt-5 rounded-md border border-black font-bold ">
                Blog
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/social-media-audience-crowd-filming-through-smartphones_53876-128944.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.1.1039112445.1666531408&semt=sph"
          className="w-full  max-w-screen-sm mx-auto rounded  md:w-auto lg:max-w-screen-md"
          alt=""
        />
      </div>

      <Category categories={categories} />
      <About />
    </div>
  );
};

export default Home;
