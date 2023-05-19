import React from "react";
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { FaCalendarTimes } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbCurrencyTaka } from "react-icons/tb";

const Product = ({ product, setDevice }) => {
  const navigate = useNavigate();
  const { user } = useContext(authContext);

  const handleBookNow = () => {
    if (!!user) {
      setDevice(product);
    } else {
      navigate("/login");
    }
  };
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
        className=" transition-shadow duration-300  bg-white rounded shadow-sm"
      >
        <img src={img} className="object-cover w-full h-64" alt="" />
        <div className="p-5 border border-t-0">
          <h1 id="title" className="font-bold text-2xl">
            {name}
          </h1>
          {/* <h1 className="inline-block font-serif mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
            {name}
          </h1> */}
          <div className="text-start">
            <p className="mb-2 flex gap-2 font-bold">
              <FaCalendarTimes className="text-lg rounded-full  mt-1" />
              {yearOfUse}
            </p>
            <p className="mb-2 flex gap-2 justify-between font-bold">
              <span className="flex gap-2">
                <TbCurrencyTaka className="text-xl bg-gray-800 rounded-full text-white mt-1 " />{" "}
                {resalePrice}
              </span>
              <span className="line-through">{orginalPrice}</span>
            </p>

            <p className="mb-2 flex gap-2  font-bold">
              <ImUser className="text-xl bg-gray-800 rounded-full text-white mt-1" />
              {sellerName}
            </p>
            <p className="mb-2 flex  gap-2 font-bold">
              <TiLocation className="text-xl bg-gray-800 rounded-full text-white mt-1" />
              {location}
            </p>
          </div>
          <label
            onClick={handleBookNow}
            htmlFor="Booking-modal"
            className="btn  w-full rounded-none bg-[#1b3764]"
          >
            Book now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
