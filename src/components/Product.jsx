import React from "react";
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { MdAccessTimeFilled, MdOutlineNumbers } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

const Product = ({ product, setDevice }) => {
  // console.log(product);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

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
      {/* <div
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
      </div> */}

      <div className="max-w-2xl mx-auto">
        <div className="bg-white h-[500px] shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="">
            <img
              className="rounded-t-lg w-[383px] h-[255px] "
              src={image}
              alt=""
            />
          </div>

          <div className="p-5">
            <h5 className="text-gray-900 text-start font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {productName}
            </h5>

            <div className="font-bold space-y-1 text-start mb-3 ">
              <div className="flex gap-5">
                <p className="text-3xl">{resalePrice}</p>
                <p className="line-through mt-1">{orginalPrice}</p>
              </div>
              <p className="flex gap-1 font-bold">
                <MdAccessTimeFilled className="mt-1" />
                {yearOfUse}
              </p>
              <p className="flex gap-1 font-bold">
                <MdOutlineNumbers className="mt-1" />
                {sellerNumber}
              </p>
              <p>{condition}</p>
            </div>
            <label
              onClick={handleBookNow}
              htmlFor="Booking-modal"
              className="btn  w-full btn-outline text-white font-bold rounded bg-[#1b3764]"
            >
              Book now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
