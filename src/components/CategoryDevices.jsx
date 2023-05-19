import React from "react";
import { Link } from "react-router-dom";

const CategoryDevices = ({ category }) => {
  console.log(category);
  return (
    <div>
      <div>
        <Link to={`/product/${category?.categoryId}`}>
          <div className="border-2 hover:border-[#1b3764]  m-20 mt-10 w-60   transition-all hover:scale-110 py-6 rounded">
            <p id="title" className="font-bold mx-auto  text-xl text-black  ">
              {category?.category}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryDevices;
