import React, { useContext, useEffect } from "react";
import { authContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyOrders = () => {
  const { user } = useContext(authContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-redeye75.vercel.app/bookings?email=${user?.email}`,
        {
          // headers: {
          //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
          // },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 id="title" className="text-4xl font-bold  text-teal-600 m-2">
        My Orders
      </h1>
      <p id="txt" className="font-bold ">
        Verify your order before making payment
      </p>
      <div className="overflow-x-auto mt-5 w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Orders</th>
              <th>Device Info</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="txt" className="font-bold">
            {bookings &&
              bookings?.map((book, i) => (
                <tr key={book?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="rounded w-12 h-12">
                          <img alt="" src={book?.photo} />
                        </div>
                      </div>{" "}
                      <td>
                        <p className="font-bold"> {book?.deviceName}</p>
                        <br />
                      </td>
                    </div>
                  </td>
                  {/* <td>
                    {book?.deviceName}
                    <br />
                  </td> */}
                  <td>{book?.price}</td>
                  <th>
                    <button className="btn  btn-outline btn-secondary ">
                      Pay
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
