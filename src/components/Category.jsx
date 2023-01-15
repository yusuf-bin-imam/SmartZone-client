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
          <h2 id="text" className="text-4xl   font-bold text-teal-900">
            Brand
          </h2>
          <p id="title-txt" className="text-xl mt-2 text-black font-bold">
            Select your preferred brand
          </p>
          <div className="   grid lg:grid-cols-3 gap-y-0 md:grid-cols-2  text-center">
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
