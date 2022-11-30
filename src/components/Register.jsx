import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import useToken from "../hooks/useToken";

const Register = () => {
  const { createUser, updateUserProfile, providerLogin } =
    useContext(authContext);

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = event.target.password.value;
    const name = form.name.value;
    const role = form.role.value;
    const photo = form.photo.files[0];
    console.log(email, role, password, name, photo);

    const formData = new FormData();
    formData.append("image", photo);
    //   fc7ef0c7fef9a4e4d12f50bb06cf4e43
    const url =
      "https://api.imgbb.com/1/upload?key=fc7ef0c7fef9a4e4d12f50bb06cf4e43";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);

            const userInfo = {
              displayName: name,
              photoURL: data.data.display_url,
            };

            updateUserProfile(userInfo)
              .then(() => {
                saveUser(name, email, role);
              })
              .catch((e) => console.error(e));
          })
          .catch((error) => console.log(error));
      })

      .catch((error) => console.error(error));
    console.log(formData);
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
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
    <div>
      <section data-aos="zoom-in-up" data-aos-duration="3000">
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
                  <form onSubmit={handleRegister}>
                    <div>
                      <label for="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mt-3">
                      <label for="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-3">
                      <label for="password" className="sr-only">
                        password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border  rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mt-3">
                      <select name="role" className="select w-full max-w-xs">
                        <option value={"buyer"}>Buyer</option>
                        <option value={"seller"}>Seller</option>
                      </select>
                    </div>
                    <div className="mt-3">
                      <label for="Photo" className="sr-only">
                        Photo
                      </label>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
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
                    </div>
                    <button
                      onClick={handleGoogleSignIn}
                      className="btn btn-outline btn-success ml-24 "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Link className="font-bold">Google</Link>
                      <FcGoogle className="ml-2" />
                    </button>
                  </form>
                </div>
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
