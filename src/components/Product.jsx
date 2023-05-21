import React from "react";
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { FaCalendarTimes } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { TiLocation } from "react-icons/ti";
import { TbCurrencyTaka } from "react-icons/tb";

const Product = ({ product, setDevice }) => {
  console.log("product ta hoccccccccccccc", product);
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
    productName,
    yearOfUse,
    sellerNumber,
    condition,
    orginalPrice,
    image,
    brand,
  } = product;
  return (
    <div>
      <div
        data-aos="fade-up"
        className=" transition-shadow duration-300  bg-white rounded shadow-sm"
      >
        <img src={image} className=" w-full h-64" alt="" />
        <div className="p-5 space-y-2 border border-t-0">
          <p className="font-bold">{brand}</p>
          <h1 id="title" className="font-bold text-start text-2xl">
            {productName}
          </h1>
          <h1 className="font-bold text-start">{sellerNumber}</h1>
          <div className="text-start font-bold">
            {yearOfUse}
            <p className="mb-2 flex gap-2 mt-2 justify-between font-bold">
              {resalePrice}
              <span className="line-through">{orginalPrice}</span>
            </p>
            <p className="text-start">{condition.slice(0, 40)}...</p>
          </div>
          <label
            onClick={handleBookNow}
            htmlFor="Booking-modal"
            className="btn  w-2/3 btn-outline text-white font-bold rounded-none bg-[#1b3764]"
          >
            Book now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
