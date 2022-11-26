import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { SiXiaomi, SiSamsung } from "react-icons/si";
import CategoryDevices from "./CategoryDevices";

const Category = ({ categories }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {" "}
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-teal-accent-400">
            Category
          </p>
          <div className=" mt-4 justify-between -m-4 text-center">
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
