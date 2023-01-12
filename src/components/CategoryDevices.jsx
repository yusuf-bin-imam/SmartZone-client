import React from "react";
import { Link } from "react-router-dom";

const CategoryDevices = ({ category }) => {
  return (
    <div>
      <div>
        <Link to={`/product/${category.categoryId}`}>
          <div className="border-2 border-black m-20 mt-10 px-20  py-6 rounded-lg">
            {/* <img src={category.img} alt="" /> */}
            <p id="title" className="font-bold mx-auto text-xl  text-blue-600 ">
              {category.category}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryDevices;
