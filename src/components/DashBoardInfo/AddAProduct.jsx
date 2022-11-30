import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../context/AuthProvider";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostingKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostingKey);

  const addProduct = (data) => {
    console.log(data);
    const image = data.image[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          // console.log(data.data.url);
          const product = {
            // productName: data.productName,
            // orginalPrice: data.orginalPrice,
            // resalePrice: data.resalePrice,
            // yearOfUse: data.use,
            // condition: data.condition,
            // brand: data.brand,
            productDetails: data.data.orginalPrice,
            image: data.data.url,
          };
          console.log(product);
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Inserted product successfully");
            });
        }
      });
  };

  const { user } = useContext(authContext);

  const { data: brands, isLoading } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/brandCategory");
      const data = await res.json();
      return data;
    },
  });
  // console.log(brands);
  if (isLoading) {
    return (
      <div>
        <progress
          className="progress progress-primary w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-primary w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }
  return (
    <div className="">
      <div className="p-8 rounded border border-gray-200">
        {" "}
        <h1 className=" font-serif text-3xl uppercase font-bold text-teal-900">
          Add a Product
        </h1>
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 mt-8">
            <div>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Seller Name"
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
              {errors.name && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                value={user.email}
                type="text"
                readOnly
                disabled
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />{" "}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("productName", {
                  required: "productName is required",
                })}
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="product name"
              />
              {errors.productName && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.productName.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("resalePrice", {
                  required: "resalePrice is required",
                })}
                name="resalePrice"
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Resale Price"
              />
              {errors.resalePrice && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.resalePrice.message}
                </p>
              )}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("orginalPrice", {
                  required: "orginalPrice is required",
                })}
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Orginal Price"
              />
              {errors.orginalPrice && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.orginalPrice.message}
                </p>
              )}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("number", {
                  required: "number is required",
                })}
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Mobile Number"
              />
              {errors.number && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.number.message}
                </p>
              )}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("location", {
                  required: "location is required",
                })}
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="location"
              />
              {errors.location && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.location.message}
                </p>
              )}
            </div>{" "}
            <div>
              <input
                type="text"
                {...register("use", {
                  required: "Year of use is required",
                })}
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Year Of Use"
              />
              {errors.use && (
                <p className="text-red-500 font-bold text-xl">
                  {errors.use.message}
                </p>
              )}
            </div>
            <div className="form-control items-center  w-full ">
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                className="input   w-full max-w-xs"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
          </div>
          <div class="w-full ">
            <select
              {...register("brand", {
                required: "brand is required",
              })}
              className="select select-success w-full max-w-xs"
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
            {errors.brand && (
              <p className="text-red-500 font-bold text-xl">
                {errors.brand.message}
              </p>
            )}
          </div>
          <br />
          <div className="">
            <textarea
              {...register("condition", {
                required: "Bio is required",
              })}
              className="textarea bg-gray-200   py-7 px-24 border rounded-md dark:border-gray-200 text-black"
              placeholder="condition"
            ></textarea>
            {errors.condition && (
              <p className="text-red-500 font-bold text-xl">
                {errors.condition.message}
              </p>
            )}
          </div>
          <div className="space-x-4 mt-8">
            {" "}
            <input
              className="btn btn-outline btn-success"
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
