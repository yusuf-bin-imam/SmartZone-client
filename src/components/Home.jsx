import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Category from "./Category";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.error(e));
  }, []);
  console.log(categories);

  return (
    <div className="bg-white">
      <div className="flex flex-col bg-[#cbe5d3] items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-40 md:px-0">
        <div className="flex flex-col items-center max-w-2xl ">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2
              id="text"
              className="max-w-lg mb-3 uppercase font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              <span className="text-extrabold text-purple-800">Smarter</span>,
              Safer, <span className="text-red-800">Smoother</span>
            </h2>
            <p id="txt" className="font-bold text-lg text-black">
              SmartZone is a tech house that provides and receive preowned
              device to the consumers.
            </p>
            <a className="" href="#brand">
              <button
                id="title"
                className="bg-[#f4ac44] transition-all hover:scale-110 text-md px-5 font-bold py-3 mt-5 mr-5 rounded-md border border-black  "
              >
                Popular Brands
              </button>
            </a>
            <Link to={"/blog"}>
              <button
                id="title"
                className="bg-[#ecc4b4] px-14 transition-all hover:scale-110 py-3 mt-5 rounded-md border border-black font-bold "
              >
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
