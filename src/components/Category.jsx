import React, { useEffect, useState } from "react";

import CategoryDevices from "./CategoryDevices";
import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  // console.log(categories);

  return (
    <div className="" id="Brand">
      <section
        id="brand"
        className="text-gray-600 max-w-screen-lg  mx-auto body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <h2
            data-aos="fade-down"
            data-aos-duration="1500"
            id="title"
            className="text-4xl   font-bold text-teal-900"
          >
            Popular Brands
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            id="txt"
            className="text-md mt-2 text-black font-bold"
          >
            Select your preferred brand of smartphone
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="   grid lg:grid-cols-3  md:grid-cols-2 place-items-center text-center"
          >
            {categories?.map((category) => (
              <CategoryDevices key={category?.categoryId} category={category} />
            ))}
            {/* <div>
              <Link to={`/allProducts`}>
                <div className="border-2 hover:border-[#1b3764]   mt-10 w-60   transition-all hover:scale-110 py-6 rounded">
                  <p
                    id="title"
                    className="font-bold mx-auto  text-xl text-black  "
                  >
                    All
                  </p>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
