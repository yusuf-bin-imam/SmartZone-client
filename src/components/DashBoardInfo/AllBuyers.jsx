import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";
import { AiFillDelete } from "react-icons/ai";
import { authContext } from "../../context/AuthProvider";

const AllBuyers = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const [dltBuyer, setDltBuyer] = useState(null);

  // delete buyer
  const confirmDeleteProduct = (buyer) => {
    console.log(buyer);
    fetch(`https://smartzone-server.onrender.com/buyer/${buyer._id}`, {
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
      const res = await fetch(`https://smartzone-server.onrender.com/buyer`);
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
            <th className="w-1/2   border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
              Name
            </th>

            <th className="w-1/2 text-center  border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
              Remove User
            </th>
          </tr>
        </thead>
        {users?.map((singleUser, i) => (
          <tbody key={singleUser?._id}>
            <tr>
              {/* <th>{i + 1}</th> */}
              <td className="font-bold px-4 justify-center text-center gap-3 flex items-center  ">
                <p className="font-bold">
                  <p className=" text-start  my-3 uppercase">
                    {singleUser?.name}
                  </p>
                  <p className="text-center  my-3">{singleUser?.email}</p>
                </p>
              </td>

              <td>
                <label
                  onClick={() => setDltBuyer(singleUser)}
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
