import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://assets.materialup.com/uploads/eb1baad5-6d53-4970-9ac4-bd0d88c6e0a8/preview.gif"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit(handleLogin)}>
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    {...register("email")}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    required
                    placeholder="Email address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    required
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm  font-semibold mt-2 pt-1 mb-0">
                    No Account ?
                    <Link
                      to={"/register"}
                      className="text-red-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 w-44 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>{" "}
              <Link
                className="btn btn-outline  btn-success mt-3"
                target="_blank"
                rel="noreferrer"
              >
                Google {""} <FaGoogle className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
