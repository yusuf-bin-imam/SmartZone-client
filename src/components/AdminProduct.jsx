import React from "react";
import { MdAccessTimeFilled, MdEmail, MdOutlineNumbers } from "react-icons/md";

const AdminProduct = ({ product }) => {
  console.log(product);
  const {
    sellerNumber,
    productName,
    image,
    sellerName,
    email,
    yearOfUse,
    resalePrice,
  } = product;
  return (
    <div>
      <div className="bg-white  shadow-xl  overflow-hidden">
        <div>
          <img className="h-60 w-full" src={image} alt="productImage" />
        </div>
        <div className="p-4 pb-0 text-start">
          <p className="uppercase  text-sm font-bold ">{productName}</p>
          <p className="text-3xl ">{resalePrice}</p>
          <p className="flex gap-1 font-bold">
            <MdAccessTimeFilled className="mt-1" />
            {yearOfUse}
          </p>
        </div>
        <div className="p-4 pt-0 text-start">
          <p className="flex gap-1 font-bold ">
            <MdEmail className="mt-1" />
            {email}
          </p>
          <p className="flex gap-1 font-bold">
            <MdOutlineNumbers className="mt-1" />
            {sellerNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
