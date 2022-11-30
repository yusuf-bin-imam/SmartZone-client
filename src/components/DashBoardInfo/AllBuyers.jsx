import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";

const AllBuyers = () => {
  const [dltBuyer, setDltBuyer] = useState(null);

  // delete buyer
  const confirmDeleteProduct = (buyer) => {
    console.log(buyer);
    fetch(`http://localhost:5000/buyer/${buyer._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success("Buyer removed successfully");
        }
      });
  };

  // close modal
  const cancelDelete = () => {
    setDltBuyer(null);
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyer");
      const data = res.json();
      return data;
    },
  });
  console.log(users);

  return (
    <div>
      <h6 className="mt-5 text-4xl font-bold font-serif text-teal-900 mb-5">
        All Buyers
      </h6>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        {users.map((user, i) => (
          <tbody key={user._id}>
            <tr>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <label
                  onClick={() => setDltBuyer(user)}
                  htmlFor="confirmation modal"
                  className="btn  btn-success btn-outline"
                >
                  Delete
                </label>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {dltBuyer && (
        <ConfirmationModal
          title={`Are you sure to delete this product ?`}
          message={`If you delete ${dltBuyer.name} , you Can't recover anymore`}
          deleteProduct={confirmDeleteProduct}
          deleteButton="DELETE"
          modalData={dltBuyer}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default AllBuyers;
