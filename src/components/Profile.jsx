import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const Profile = () => {
  const { user } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  console.log(user);
  return (
    <div className="h-screen">
      <div className="flex h-96 mx-auto items-center gap-5 border border-black w-1/2  justify-center">
        <div className="">
          <img
            alt="userImage"
            src={user?.photoURL}
            className="shadow-xl rounded-full w-40 h-40 "
          />
        </div>

        <div className="text-start ">
          <h3 className="text-xl text-start font-semibold mb-2 ">
            Uid : {user?.uid}
          </h3>
          <h3 className="text-xl text-start font-semibold mb-2 ">
            Name : {user?.displayName}
          </h3>
          <ul className="text-xl text-start font-semibold mb-2 ">
            {isAdmin && (
              <>
                <li>Role : Admin</li>
              </>
            )}
            {isSeller && (
              <>
                <li>
                  <p>Role : Seller</p>
                </li>
              </>
            )}
            {!isAdmin && !isSeller && (
              <>
                <li>
                  <p>Role : Buyer</p>
                </li>
              </>
            )}
          </ul>

          <h3 className="text-xl font-semibold mb-2 ">Email : {user?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
