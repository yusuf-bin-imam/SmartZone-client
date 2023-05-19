import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import BookingModal from "../components/BookingModal";

const CategoryProducts = () => {
  const data = useLoaderData();
  console.log(data);

  const [device, setDevice] = useState(null);
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data?.map((product) => (
            <Product
              key={product._id}
              product={product}
              setDevice={setDevice}
            />
          ))}
        </div>
      </div>
      {device && <BookingModal setDevice={setDevice} device={device} />}
    </div>
  );
};

export default CategoryProducts;
