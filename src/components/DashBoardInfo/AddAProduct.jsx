import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../context/AuthProvider";
import Loader from "../Loader";

const AddAProduct = () => {
  const { user } = useContext(authContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostingKey);

  const addProduct = (data) => {
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
            email: user?.email,
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
              toast.success("Inserted product successfully");
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
        <h1 id="title" className="  text-3xl uppercase font-bold text-teal-900">
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
                disabled
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
              className="textarea w-full h-20   rounded border-[#1b3764] text-black"
              placeholder="Describe about your Products*"
            ></textarea>

            {/* {errors.condition && (
              <p id="title" className="text-red-700 font-bold text-xl">
                {errors.condition.message}
              </p>
            )} */}
          </div>
          <div className="space-x-4 mt-8">
            {" "}
            <input
              className="btn btn-outline w-full max-w-xs rounded-none bg-[#1b3764] text-white"
              value={"ADD PRODUCT"}
              type="submit"
            />
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default AddAProduct;
