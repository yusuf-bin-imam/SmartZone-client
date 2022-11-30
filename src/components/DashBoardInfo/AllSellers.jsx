import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";

const AllSellers = () => {
  const [dltSeller, setDltSeller] = useState(null);

  // delete seller
  const confirmDeleteProduct = (seller) => {
    console.log(seller);
    fetch(`http://localhost:5000/seller/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success("Seller removed successfully");
        }
      });
  };
  // close modal
  const cancelDelete = () => {
    setDltSeller(null);
  };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/seller");
      const data = res.json();
      return data;
    },
  });
  // console.log(users);

  const makeVerify = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Verified");
          refetch();
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h4 className="mt-5 text-4xl font-bold font-serif text-teal-900 mb-5">
          All Sellers
        </h4>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
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
                  <button
                    onClick={() => makeVerify(user._id)}
                    className="btn btn-primary btn-xs"
                  >
                    {user?.status === "verified" ? "verified" : "Verify"}
                  </button>
                </td>
                <td>
                  <label
                    onClick={() => setDltSeller(user)}
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
        {dltSeller && (
          <ConfirmationModal
            title={`Are you sure to delete this product ?`}
            message={`If you delete ${dltSeller.name} , you Can't recover anymore`}
            deleteProduct={confirmDeleteProduct}
            deleteButton="DELETE"
            modalData={dltSeller}
            cancelDelete={cancelDelete}
          />
        )}
      </div>
    </div>
  );
};

export default AllSellers;
