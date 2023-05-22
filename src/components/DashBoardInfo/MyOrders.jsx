import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";

const MyOrders = () => {
  const { user } = useContext(authContext);

  const [loading, setLoading] = useState(true);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      setLoading(true);
      const res = await fetch(
        `https://smartzone-server.onrender.com/bookings/${user?.email}`,
        {
          // headers: {
          //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
          // },
        }
      );
      const data = await res.json();
      setLoading(false);
      return data;
    },
  });
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 id="title" className="text-4xl font-bold  text-[#1b3764] m-2">
        My Orders
      </h1>
      {/* <div class=" w-20 mx-auto  border-b-8 border-yellow-300 "></div> */}

      <p id="txt" className="font-bold ">
        Verify your order before making payment
      </p>
      <div className="overflow-x-auto mt-5 w-full">
        <table className=" w-full">
          <thead>
            <tr className="bg-[#1b3764]  ">
              <th className="w-1/2 text-start pl-20  border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
                Orders
              </th>
              <th className="w-1/2 border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                Payment
              </th>
            </tr>
          </thead>
          <tbody id="txt" className="font-bold">
            {bookings &&
              bookings?.map((book, i) => (
                <tr key={book?._id}>
                  <td>
                    <div className="flex m-5 items-center space-x-3 ">
                      <p>{i + 1}</p>
                      <div className="avatar">
                        <div className="rounded w-12 h-12">
                          <img alt="" src={book?.photo} />
                        </div>
                      </div>{" "}
                      <td>
                        <p className="font-bold"> {book?.deviceName}</p>
                        <p className="font-bold text-start ">{book?.price}</p>
                      </td>
                    </div>
                  </td>

                  <th>
                    <button className="btn  btn-outline w-32 rounded-none ">
                      Checkout
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
