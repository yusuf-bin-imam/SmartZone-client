import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";
import { AiFillDelete } from "react-icons/ai";

const AllBuyers = () => {
  const [dltBuyer, setDltBuyer] = useState(null);

  // delete buyer
  const confirmDeleteProduct = (buyer) => {
    console.log(buyer);
    fetch(`${process.env.REACT_APP_URL}/buyer/${buyer._id}`, {
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
      const res = await fetch(`${process.env.REACT_APP_URL}/buyer`);
      const data = res.json();
      return data;
    },
  });
  console.log(users);

  return (
    <div>
      <h6
        id="title"
        className="mt-5 text-4xl font-bold font-serif text-teal-900 mb-2"
      >
        All Buyers
      </h6>
      <p id="txt" className="font-bold">
        Reach Out to a Diverse Range of Buyers
      </p>
      <table className="mt-5 w-full">
        <thead>
          <tr className="bg-[#1b3764]  ">
            <th className="w-1/2 text-center  border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
              Name
            </th>

            <th className="w-1/2 text-center  border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
              Remove User
            </th>
          </tr>
        </thead>
        {users?.map((user, i) => (
          <tbody key={user?._id}>
            <tr>
              {/* <th>{i + 1}</th> */}
              <td className="font-bold w-1/2 ">
                {/* <p>
                  <p className="uppercase ">{user?.name}</p>
                  <p>{user?.email}</p>
                </p> */}

                <p className=" font-bold">
                  <p className="text-center  mx-10 my-3 uppercase">
                    {user?.name}
                  </p>
                  <p className="text-center mx-10 my-3">{user?.email}</p>
                </p>
              </td>

              <td>
                <label
                  onClick={() => setDltBuyer(user)}
                  htmlFor="confirmation modal"
                  className="btn rounded-none px-10 bg-red-800 "
                >
                  Delete
                  <AiFillDelete className="text-lg -mt-1 ml-1" />
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
