import React, { useEffect, useState } from "react";

import CategoryDevices from "./CategoryDevices";

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
            Brand
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            id="txt"
            className="text-md mt-2 text-black font-bold"
          >
            Select your preferred brand
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="   grid lg:grid-cols-3 gap-y-0 md:grid-cols-2 place-items-center text-center"
          >
            {categories?.map((category) => (
              <CategoryDevices key={category?.categoryId} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
