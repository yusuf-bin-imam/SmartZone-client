import React, { useEffect, useState } from "react";

import CategoryDevices from "./CategoryDevices";

const Category = ({ categories }) => {
  return (
    <div>
      <section
        id="brand"
        className="text-gray-600 max-w-screen-xl  mx-auto body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <h2 id="title" className="text-4xl  font-bold text-teal-900">
            Brand
          </h2>
          <p id="text" className="text-xl mt-2 text-black font-bold">
            Select your preferred brand
          </p>
          <div className=" justify-between  grid lg:grid-cols-3 md:grid-cols-2  text-center">
            {categories.map((category) => (
              <CategoryDevices key={category.categoryId} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
