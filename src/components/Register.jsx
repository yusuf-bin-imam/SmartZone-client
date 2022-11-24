import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../context/AuthProvider";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser } = useContext(authContext);
  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600  font-serif text-green leading-6 lg:text-5xl">
                        Sign up
                      </h3>
                    </div>
                    <div className="mt-4 text-base text-gray-500">
                      <p>Sign up and get our awesome phones.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {" "}
                  <form onSubmit={handleSubmit(handleRegister)}>
                    <div>
                      <label for="email" className="sr-only">
                        Email
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-3">
                      <label for="password" className="sr-only">
                        Password
                      </label>
                      <input
                        {...register("password")}
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mt-3">
                      <label for="Photo" className="sr-only">
                        Photo
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        name="photo"
                        id="password"
                        className="block border w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex flex-col mt-4 lg:space-y-2">
                      <button
                        type="submit"
                        className="btn btn-outline btn-primary"
                      >
                        Sign up
                      </button>
                    </div>{" "}
                  </form>
                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>
                </div>

                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an Account ?
                  <Link
                    to={"/login"}
                    className="text-red-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                  >
                    {" "}
                    Sign In
                  </Link>
                </p>
                <Link
                  className="btn btn-outline btn-success ml-24 mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google
                </Link>
              </div>
              <div className="order-first  w-full lg:block">
                <img
                  className="object-cover h-full bg-cover rounded-l-lg"
                  src="https://cdn.dribbble.com/users/3873964/screenshots/14216267/media/fe34f0470ef7899cc9594a8c9f3f2cec.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
