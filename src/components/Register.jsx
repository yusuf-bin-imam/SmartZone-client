import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import useToken from "../hooks/useToken";
import register from "../../src/assets/register.json";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, providerLogin } =
    useContext(authContext);
  const [loading, setLoading] = useState(false);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleRegister = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = event.target.password.value;
    const name = form.Username.value;
    const role = form.role.value;
    const photo = form.photo.files[0];
    const number = form.number.value;
    // console.log(email, role, password, name, photo);
    // console.log(name);

    const formData = new FormData();
    formData.append("image", photo);

    const imageHostingKey = process.env.REACT_APP_imgbb_key;

    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.data?.display_url);
        const photoURL = data?.data.display_url;

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            updateUserDetails(name, photoURL);
            saveUser(name, email, role, number);
          })
          .catch((error) => console.log(error));
      })

      .catch((error) => console.error(error));
    console.log(formData);
  };

  const updateUserDetails = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Sign up successfully");
        setLoading(false);
        navigate("/");
        // alert("successfully update profile");
      })
      .catch((e) => console.log(e));
  };
  const saveUser = (name, email, role, number) => {
    const user = { name, email, role, number };

    fetch(`https://smartzone-server.onrender.com/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  // sign in with google
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="">
      <section className="max-w-screen-lg min-h-screen mb-10 mt-5 mx-auto ">
        <div className="px-6 h-full text-gray-800">
          <h2 id="title" className="text-4xl font-bold">
            Sign Up
          </h2>
          <p id="txt" className="font-bold mt-2">
            Shop, Save, and Sign Up for Exclusive Deals
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Lottie
              className="mt-10"
              animationData={register}
              loop={true}
            ></Lottie>

            <div
              // data-aos="fade-up"
              data-aos-duration="3000"
              className="mt-28"
            >
              <form onSubmit={handleRegister}>
                <div>
                  <input
                    type="text"
                    name="Username"
                    required
                    placeholder="Enter your name"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#1b3764]"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    id="name"
                    placeholder="Enter your Email"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#1b3764]"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    required
                    minlength="6"
                    id="name"
                    placeholder="Enter your password"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#1b3764]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    required
                    id="number"
                    placeholder="Enter your number"
                    className="block w-full px-5  py-3 border mb-5 rounded border-[#1b3764]"
                  />
                </div>
                <div>
                  <select
                    name="role"
                    required
                    className="select w-full border border-[#1b3764] py-3 mb-3 rounded"
                  >
                    <option value={"buyer"}>Buyer</option>
                    <option value={"seller"}>Seller</option>
                  </select>
                </div>
                <div>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    required
                    accept="image/*"
                    className="block w-full px-5  py-2 border mb-5 rounded border-[#1b3764]"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-outline bg-[#1b3764] text-white w-1/2 mx-auto rounded-none"
                  >
                    {loading ? (
                      <>
                        <div
                          aria-label="Loading..."
                          role="status"
                          class="flex items-center space-x-2"
                        >
                          <svg
                            class="h-6 w-6 animate-spin stroke-gray-500"
                            viewBox="0 0 256 256"
                          >
                            <line
                              x1="128"
                              y1="32"
                              x2="128"
                              y2="64"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="195.9"
                              y1="60.1"
                              x2="173.3"
                              y2="82.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="224"
                              y1="128"
                              x2="192"
                              y2="128"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="195.9"
                              y1="195.9"
                              x2="173.3"
                              y2="173.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="128"
                              y1="224"
                              x2="128"
                              y2="192"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="60.1"
                              y1="195.9"
                              x2="82.7"
                              y2="173.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="32"
                              y1="128"
                              x2="64"
                              y2="128"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                            <line
                              x1="60.1"
                              y1="60.1"
                              x2="82.7"
                              y2="82.7"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="24"
                            ></line>
                          </svg>
                          <span class="text-xs font-medium text-gray-500">
                            loading...
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <p>sign Up</p>
                      </>
                    )}
                  </button>{" "}
                  <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                    Already have an Account ?
                    <Link
                      to={"/login"}
                      className="text-red-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out"
                    >
                      {" "}
                      Sign In
                    </Link>
                  </p>
                </div>{" "}
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

export default Register;
