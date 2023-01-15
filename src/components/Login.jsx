import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../hooks/useToken";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, providerLogin } = useContext(authContext);

  const [error, setError] = useState();
  const [loginEmail, setLoginEmail] = useState("");

  const [token] = useToken(loginEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);

    setError(" ");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginEmail(data.email);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((r) => {
        const user = r.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="bg-[#f3f3f3]">
      <section className="max-w-screen-lg  mx-auto ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center h-screen  lg:justify-between justify-center items-center flex-wrap  g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                data-aos="fade-right"
                data-aos-duration="3000"
                src="https://assets.materialup.com/uploads/eb1baad5-6d53-4970-9ac4-bd0d88c6e0a8/preview.gif"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
            >
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-6">
                  <input
                    {...register("email")}
                    type="text"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 w-44 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  {error && <p className="text-red-600">{error}</p>}
                </div>{" "}
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
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
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>{" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline  btn-success mt-3"
                >
                  Google {""} <FaGoogle className="ml-3" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
