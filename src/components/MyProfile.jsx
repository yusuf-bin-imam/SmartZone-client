import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaUser, FaSlackHash } from "react-icons/fa";

const MyProfile = () => {
  const { user, logUser } = useContext(authContext);
  console.log(logUser);

  return (
    <div>
      <body id="txt" className=" text-black bg-cover">
        <div className="max-w-screen-xl flex items-center h-auto lg:h-screen justify-between mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-1/2
             rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48  bg-center">
                <img
                  alt="userProfile"
                  src={user?.photoURL}
                  className="rounded-full shadow lg:block"
                />
              </div>

              <div className="flex justify-between">
                <div className="mt-5">
                  <h1 id="title" className="text-3xl  font-bold pt-8 lg:pt-0">
                    {user?.displayName}
                  </h1>
                  <p className="font-bold hidden lg:block"> {user?.email}</p>
                </div>

                <div className="avatar hidden lg:block">
                  <div className="w-24 rounded-full">
                    <img alt="userImage" src={user?.photoURL} />
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <p className="pt-2 text-xs lg:text-lg flex items-center justify-start lg:ml-0  lg:justify-start">
                <FaUser className="mr-2 font-bold text-xl text-blue-800" />{" "}
                <ul className="text-lg text-start font-semibold  ">
                  <li>
                    <p className="uppercase ">{logUser?.role}</p>
                  </li>
                </ul>
              </p>
              <div className="block lg:hidden">
                <p className="pt-4 text-base font-bold flex items-center  lg:ml-0  justify-start lg:justify-start">
                  <IoMdMail className="mr-2 font-bold text-xl  text-blue-800" />
                  {user?.email}
                </p>
              </div>
              <p className="pt-4 text-base font-bold flex items-center justify-start lg:ml-0 ">
                <IoMdCall className="mr-2 text-start font-bold text-xl text-blue-800" />
                {logUser?.number}
              </p>

              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <FaSlackHash className="mr-2 font-bold -ml-8 lg:ml-0 text-xl text-blue-800" />
                {user?.uid}
              </p>
            </div>
          </div>

          {/* <div className="w-full  lg:w-2/5">
            <img
              alt="userProfile"
              src={user?.photoURL}
              className="rounded-none lg:rounded-full shadow hidden lg:block"
            />
          </div> */}
          <div className="lg:block hidden">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_xyadoh9h.json"
              loop
              autoplay
              speed="1"
            ></lottie-player>
          </div>
        </div>
      </body>
    </div>
  );
};

export default MyProfile;
