import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../hooks/useToken";
import login from "../../src/assets/login.json";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, providerLogin } = useContext(authContext);

  const [error, setError] = useState();
  const [loginEmail, setLoginEmail] = useState("");

  const [token] = useToken(loginEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  console.log(from);

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
        navigate("/");
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
        navigate("/");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className=" min-h-screen  items-center">
      <section className="max-w-screen-lg  mt-5 mx-auto ">
        <div className="px-6 h-full text-gray-800">
          <h2 id="title" className="text-4xl font-bold">
            Sign In
          </h2>
          <p id="txt" className="font-bold mt-2">
            Welcome Back! Login to Continue
          </p>

          <div className="flex xl:justify-center  lg:justify-between justify-center items-center flex-wrap">
            <Lottie
              className="mt-10"
              animationData={login}
              loop={true}
            ></Lottie>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 mt-10  md:mb-0"
            >
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-6">
                  <input
                    {...register("email")}
                    type="text"
                    className="block w-full px-5  py-3 border rounded border-[#1b3764]"
                    required
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-6">
                  <input
                    {...register("password")}
                    type="password"
                    className="block w-full px-5  py-3 border rounded border-[#1b3764]"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full btn btn-outline rounded-none py-3 font-bold bg-[#1b3764] text-white"
                  >
                    Login
                  </button>
                  {error && <p className="text-red-600">{error}</p>}
                </div>{" "}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                    You don't have any Account ?
                    <Link
                      to={"/register"}
                      className="text-red-600 ml-5 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>{" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full  font-bold rounded-none "
                >
                  Continue with Google <FcGoogle className="text-xl ml-2" />
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
