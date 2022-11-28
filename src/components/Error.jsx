import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="grid h-screen px-4 bg-white place-content-center"
      >
        <div className="text-center">
          <img
            className="w-50 h-80"
            src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
            alt=""
          />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
        </div>
        <Link to={"/"}>
          <button className="btn btn-secondary mt-3">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
