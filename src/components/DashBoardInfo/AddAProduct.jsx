import React from "react";

const AddAProduct = () => {
  return (
    <div>
      <div className="p-8 rounded border border-gray-200">
        {" "}
        <h1 className=" font-serif text-3xl uppercase font-bold text-teal-900">
          Add a Product
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />{" "}
            </div>{" "}
            <div>
              <input
                type="text"
                name="job"
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="product name"
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Resale Price"
              />{" "}
            </div>{" "}
            <div>
              <input
                type="text"
                name="job"
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Orginal Price"
              />{" "}
            </div>{" "}
            <div>
              <input
                type="text"
                name="job"
                id="job"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Year Of Use"
              />{" "}
            </div>
            <div>
              <fieldset className="w-full  dark:text-gray-100">
                <div className="flex">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    className="px-8 py-12 border rounded-md dark:border-gray-200 dark:text-gray-400"
                  />
                </div>
              </fieldset>
            </div>
            <div>
              <div className="">
                <textarea
                  rows="4"
                  cols="50"
                  name="input1"
                  id="input1"
                  value="testing"
                  class="bg-gray-100 rounded border border-gray-200 py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                  placeholder="Enter your comment"
                ></textarea>{" "}
              </div>
            </div>
            <div class="flex  justify-center">
              <div class="w-full">
                <select
                  name="country"
                  id="country"
                  class="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
                >
                  <option value="" selected disabled>
                    Choose Brand
                  </option>
                  <option value="Apple">Apple</option>
                  <option value="Xiaomi">Xiaomi</option>
                  <option value="Samsung">Samsung</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Save
            </button>{" "}
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default AddAProduct;
