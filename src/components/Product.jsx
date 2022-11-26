import React from "react";

const Product = ({ product }) => {
  const {
    resalePrice,
    name,
    yearOfUse,
    sellerName,
    location,
    orginalPrice,
    img,
  } = product;
  return (
    <div>
      <div
        data-aos="fade-up"
        className=" transition-shadow duration-300 bg-white rounded shadow-sm"
      >
        <img src={img} className="object-cover w-full h-64" alt="" />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              traveling
            </a>
            <span className="text-gray-600">— 28 Dec 2020</span>
          </p>
          <h1 className="inline-block font-serif mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
            {name}
          </h1>
          <div className="text-start">
            <p className="mb-2 text-teal-700 font-bold font-sans">
              Year Of Use : {yearOfUse}
            </p>
            <p className="mb-2 font-bold  font-sans text-teal-700">
              Orginal Price : {orginalPrice}
            </p>
            <p className="mb-2 font-bold  font-sans text-teal-700">
              Resale Price : {resalePrice}
            </p>
            <p className="mb-2 font-bold  font-sans text-orange-700">
              Seller Name : {sellerName}
            </p>
            <p className="mb-2 font-bold  font-sans text-yellow-500">
              location : {location}
            </p>
          </div>
          {/* <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
