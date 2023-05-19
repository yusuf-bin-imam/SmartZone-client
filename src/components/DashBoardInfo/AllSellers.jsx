import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";
import { MdVerified } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
const AllSellers = () => {
  const [dltSeller, setDltSeller] = useState(null);

  // delete seller
  const confirmDeleteProduct = (seller) => {
    console.log(seller);
    fetch(`https://smartzone-server.onrender.com/seller/${seller._id}`, {
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
      const res = await fetch(`https://smartzone-server.onrender.com/seller`);
      const data = res.json();
      return data;
    },
  });
  // console.log(users);

  const makeVerify = (id) => {
    fetch(`https://smartzone-server.onrender.com/users/admin/${id}`, {
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
        <h4 id="title" className="mt-5 text-4xl font-bold  text-teal-900 mb-2">
          All Sellers
        </h4>
        <p id="txt" className="font-bold">
          Browse, Connect, and Engage with All Sellers Available
        </p>
        <table className=" mt-5 w-full">
          <thead>
            <tr className="bg-[#1b3764]  ">
              {/* <th></th> */}
              <th className="w-1/3 text-start pl-20  border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
                Seller Info
              </th>

              <th className="w-1/3 border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 ">
                Admin
              </th>
              <th className="w-1/3 border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                Delete
              </th>
            </tr>
          </thead>
          {users?.map((user, i) => (
            <tbody key={user?._id}>
              <tr>
                <td className="w-1/3">
                  <p className=" font-bold">
                    <p className="text-start flex mx-10 my-3 uppercase">
                      {user?.name}
                      {user?.status === "verified" ? (
                        <MdVerified className="mt-1 text-green-800 ml-1" />
                      ) : (
                        <></>
                      )}
                    </p>
                    <p className="text-start mx-10 my-3">{user?.email}</p>
                  </p>
                </td>

                <td className="w-1/3">
                  <button
                    onClick={() => makeVerify(user._id)}
                    className=" text-white font-bold w-32 bg-green-700 btn-md"
                  >
                    {user?.status === "verified" ? "Verified" : "Make Verify"}
                  </button>
                </td>
                <td className="w-1/3">
                  <label
                    onClick={() => setDltSeller(user)}
                    htmlFor="confirmation modal"
                    className="btn rounded-none px-10 bg-red-800 "
                  >
                    Delete
                    <AiFillDelete className="text-lg -mt-1 ml-1" />
                  </label>
                </td>
              </tr>
              <hr />
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
    // <div className=" dark:bg-[#350573] ">
    //   <section className="bg-white max-w-screen">
    //     <div className="container mx-auto">
    //       <div className=" flex flex-wrap">
    //         <div className="w-full">
    //           <div className="max-w-full overflow-x-auto">
    //             <table className="w-full table-auto">
    //               <thead>
    //                 <tr className="bg-blue-500 text-center">
    //                   <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Teachers Info
    //                   </th>
    //                   <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Background
    //                   </th>
    //                   <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Location
    //                   </th>
    //                   <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Fee
    //                   </th>
    //                   <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Payment
    //                   </th>
    //                   <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
    //                     Delete
    //                   </th>
    //                 </tr>
    //               </thead>

    //               <tbody>
    //                 {teachers?.map((teacher, idx) => (
    //                   <tr key={idx}>
    //                     <td className="text-black flex gap-5 border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
    //                       <div className="avatar">
    //                         <div className="w-12 rounded-full  ">
    //                           <img
    //                             alt="teacherImage"
    //                             src={teacher?.teacherimage}
    //                           />
    //                         </div>
    //                       </div>

    //                       <div className="text-start">
    //                         <p className="font-bold">{teacher?.teachername}</p>
    //                         <p className="">{teacher?.teacheremail}</p>
    //                       </div>
    //                     </td>
    //                     <td className="border-b border-[#E8E8E8] text-black bg-white py-5 px-2 text-center text-base font-medium">
    //                       {teacher?.teacherbackground}
    //                     </td>
    //                     <td className="border-b border-[#E8E8E8] text-black bg-[#F3F6FF] py-5  text-center text-base font-medium">
    //                       {teacher?.teacherlocation}
    //                     </td>
    //                     <td className="border-b border-[#E8E8E8] text-black bg-white py-5 px-2 text-center text-base font-medium">
    //                       {teacher?.teacherfee}
    //                     </td>
    //                     <td className="border-b border-r text-black border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
    //                       <label
    //                         htmlFor="PaymentModal"
    //                         className="border-blue-600 px-10  bg-blue-600 inline-block rounded border py-2  text-white"
    //                         onClick={() => handlePaymentModalData(teacher)}
    //                       >
    //                         Pay
    //                       </label>
    //                     </td>
    //                     <td
    //                       onClick={() => handleDelete(teacher)}
    //                       className="border-b border-r text-black border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
    //                     >
    //                       <p className=" text-white  inline-block rounded border py-2 px-6 bg-red-700">
    //                         Delete
    //                       </p>
    //                     </td>
    //                   </tr>
    //                 ))}
    //               </tbody>

    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default AllSellers;
