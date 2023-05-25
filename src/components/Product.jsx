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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white h-[500px] shadow-md border border-gray-200 rounded-lg max-w-sm">
          <div className="border-b border-red-200">
            <img
              className="rounded-t-lg w-[383px] h-[255px] "
              src={image}
              alt=""
            />
          </div>

          <div className="p-5 pt-2 ">
            <h5 className="text-gray-900 text-start font-bold text-2xl tracking-tight mb-2 ">
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
