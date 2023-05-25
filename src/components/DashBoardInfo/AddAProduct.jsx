import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../context/AuthProvider";
import Loader from "../Loader";
import { Spinner } from "@material-tailwind/react";

const AddAProduct = () => {
  const { user, logUser } = useContext(authContext);
  // console.log(user);
  const [inserting, setInsert] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostingKey);

  const addProduct = (data) => {
    setInsert(true);
    // console.log(data);
    const image = data.image[0];
    // console.log(image);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log("hello");
        // console.log(data);
        if (imgData.success) {
          // console.log(data.data.url);
          const product = {
            productName: data.productName,
            orginalPrice: data.orginalPrice,
            resalePrice: data.resalePrice,
            yearOfUse: data.use,
            condition: data.condition,
            brand: data.brand,
            image: imgData.data.url,
            sellerName: user?.displayName,
            email: user?.email,
            sellerNumber: logUser?.number,
          };
          console.log(product);

          fetch(`https://smartzone-server.onrender.com/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              reset();
              toast.success("Product Inserted");
              setInsert(false);
            })
            .catch((e) => {
              console.log(e);
              toast.error("An internal mistake has occurred!😥");
            });
        }
      });
  };

  const { data: brands, isLoading } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch(
        `https://smartzone-server.onrender.com/brandCategory`
      );
      const data = await res.json();
      return data;
    },
  });
  // console.log(brands);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="">
      <div className="p-8 rounded ">
        {" "}
        <h1
          id="title"
          className="  text-3xl uppercase font-bold text-[#1b3764]"
        >
          Add your Product
        </h1>
        <p id="txt" className="font-bold mt-2">
          Maximize Customer Reach, Showcase the Power of Your Product.
        </p>
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 mt-8">
            <div>
              <input
                type="text"
                value={user.displayName}
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Seller Name"
                readOnly
                id="name"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
              {/* {errors.name && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.name.message}
                </p>
              )} */}
            </div>
            <div>
              <input
                value={user.email}
                type="text"
                readOnly
                name="email"
                id="email"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />{" "}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("productName", {
                  required: "productName is required",
                })}
                required
                id="job"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="product name"
              />
              {/* {errors.productName && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.productName.message}
                </p>
              )} */}
            </div>
            <div>
              <input
                type="text"
                {...register("resalePrice", {
                  required: "resalePrice is required",
                })}
                required
                name="resalePrice"
                id="job"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Resale Price"
              />
              {/* {errors.resalePrice && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.resalePrice.message}
                </p>
              )} */}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("orginalPrice", {
                  required: "orginalPrice is required",
                })}
                required
                id="job"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Orginal Price"
              />
              {/* {errors.orginalPrice && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.orginalPrice.message}
                </p>
              )} */}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("number", {
                  required: "number is required",
                })}
                required
                id="job"
                defaultValue={logUser.number}
                readOnly
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Mobile Number"
              />
              {/* {errors.number && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.number.message}
                </p>
              )} */}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("location", {
                  required: "location is required",
                })}
                required
                id="job"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="location"
              />
              {/* {errors.location && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.location.message}
                </p>
              )} */}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("use", {
                  required: "Year of use is required",
                })}
                required
                id="job"
                className=" border border-[#1b3764] rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Year Of Use"
              />
              {/* {errors.use && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.use.message}
                </p>
              )} */}
            </div>
            <div className="form-control  border-[#1b3764]  items-center  w-full ">
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                required
                className="input w-full rounded border-[#1b3764] py-2"
              />
              {/* {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )} */}
            </div>
            <div className="w-full ">
              <select
                {...register("brand", {
                  required: "brand is required",
                })}
                required
                className="select border-[#1b3764] rounded w-full "
              >
                <option disabled selected>
                  Select a Brand
                </option>

                {brands.map((brand) => (
                  <option key={brand._id} value={brand.category}>
                    {brand.category}
                  </option>
                ))}
              </select>
              {/* {errors.brand && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.brand.message}
                </p>
              )} */}
            </div>
          </div>
          <br />
          <div className="">
            <textarea
              {...register("condition", {
                required: "required",
              })}
              required
              maxlength="40"
              className="textarea w-full h-20   rounded border-[#1b3764] text-black"
              placeholder="Describe products in 40 letter"
            ></textarea>

            {/* {errors.condition && (
              <p id="title" className="text-red-700 font-bold text-xl">
                {errors.condition.message}
              </p>
            )} */}
          </div>
          <div className="space-x-4 mt-8">
            {inserting ? (
              <>
                <div
                  aria-label="Loading..."
                  role="status"
                  class="flex w-full mx-auto justify-center border py-3 rounded border-black font-bold max-w-xs items-center space-x-2"
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
                    Inserting...
                  </span>
                </div>
              </>
            ) : (
              <>
                <input
                  className="btn btn-outline w-full max-w-xs rounded-none bg-[#1b3764] text-white"
                  value={"ADD PRODUCT"}
                  type="submit"
                />
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
