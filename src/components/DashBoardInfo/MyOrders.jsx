import React, { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyOrders = () => {
  const { user } = useContext(authContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div>
      <h1 className="text-4xl font-bold font-serif text-teal-600 m-5">
        My Orders
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Orders</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((book, i) => (
                <tr key={book._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={book.photo} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {book.deviceName}
                    <br />
                  </td>
                  <td>{book.price}</td>
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
