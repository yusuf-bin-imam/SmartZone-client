import React from "react";
import { Link } from "react-router-dom";

const CategoryDevices = ({ category }) => {
  return (
    <div>
      <div className=" md:w-1/4 sm:w-1/2 w-full">
        <Link to={`/product/${category.categoryId}`}>
          {" "}
          <div className="border-2 border-gray-200 px-28  py-6 rounded-lg">
            {/* <img src={category.img} alt="" /> */}
            <p className=" font-bold text-blue-600 ">{category.category}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryDevices;
