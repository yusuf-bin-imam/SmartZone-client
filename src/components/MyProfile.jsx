import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaUser, FaSlackHash } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io";

const MyProfile = () => {
  const { user, logUser } = useContext(authContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <body id="txt" class=" text-black bg-cover">
        <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

              <h1 id="title" class="text-3xl font-bold pt-8 lg:pt-0">
                {user?.displayName}
              </h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <p class="pt-2 text-xs lg:text-lg flex items-center justify-center lg:justify-start">
                <FaUser className="mr-2 font-bold text-xl text-blue-800" />{" "}
                <ul class="text-lg text-start font-semibold  ">
                  {isAdmin && (
                    <>
                      <li>
                        <p className="mt-2">Admin</p>
                      </li>
                    </>
                  )}
                  {isSeller && (
                    <>
                      <li>
                        <p className="mt-2"> Seller</p>
                      </li>
                    </>
                  )}
                  {!isAdmin && !isSeller && (
                    <>
                      <li>
                        <p className="mt-2"> Buyer</p>
                      </li>
                    </>
                  )}
                </ul>
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <IoMdMail className="mr-2 font-bold text-xl text-blue-800" />
                {user?.email}
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <IoMdCall className="mr-2 font-bold text-xl text-blue-800" />
                {logUser?.number}
              </p>

              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <FaSlackHash className="mr-2 font-bold text-xl text-blue-800" />
                {user?.uid}
              </p>
            </div>
          </div>

          <div class="w-full lg:w-2/5">
            <img
              alt="userProfile"
              src={user?.photoURL}
              class="rounded-none lg:rounded-lg shadow hidden lg:block"
            />
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyProfile;
