import React, { useEffect, useState } from "react";

import CategoryDevices from "./CategoryDevices";

const Category = ({ categories }) => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {" "}
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-teal-accent-400">
            Category
          </p>
          <h2 className="text-4xl font-serif font-bold text-teal-900">
            Choose your Brand
          </h2>
          <div className=" mt-4 justify-between  grid lg:grid-cols-3 md:grid-cols-2  text-center">
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
