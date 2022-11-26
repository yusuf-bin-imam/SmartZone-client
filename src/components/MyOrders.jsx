import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(authContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  return (
    <div>
      <h1>My Orders</h1>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>

              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Pay{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
