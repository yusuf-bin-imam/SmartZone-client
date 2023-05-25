import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";
import Loader from "../Loader";
import { AiFillDelete } from "react-icons/ai";
import { authContext } from "../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(authContext);
  const [dltProduct, setDltProduct] = useState(null);

  // delete product
  const confirmDeleteProduct = (product) => {
    console.log(product);
    fetch(`https://smartzone-server.onrender.com/products/${product._id}`, {
      method: "DELETE",
      headers: {
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success("Product deleted");
        }
      });
  };
  // close modal
  const cancelDelete = () => {
    setDltProduct(null);
  };

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://smartzone-server.onrender.com/myProducts/${user?.email}`,
          {
            headers: {
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <h6
          id="title"
          className="mt-5 text-4xl font-bold font-serif text-[#1b3764] mb-2"
        >
          My Products
        </h6>
        <p id="txt" className="font-bold">
          Your Products, Your Success: Unleash the Potentia
        </p>
        <table className="mt-5 w-full">
          <thead>
            <tr className="bg-[#1b3764]  ">
              <th className="w-1/2 text-center   border-l border-transparent py-4  text-lg font-semibold text-white lg:py-7 ">
                Product Info
              </th>

              <th className="w-1/2 border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                Remove Product
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              // console.log(product)
              <tr key={product._id}>
                <td>
                  <div className="m-5 font-bold">
                    <div className="flex gap-2">
                      <div className="flex gap-1">
                        <img
                          alt="ProductImage"
                          src={product?.image}
                          className="w-20"
                        />
                      </div>
                      <div className="font-bold">
                        <p>{product?.productName}</p>
                        <p className="flex gap-5">
                          <p>{product?.resalePrice}</p>
                          <p className="line-through">
                            {product?.orginalPrice}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <label
                    onClick={() => setDltProduct(product)}
                    htmlFor="confirmation modal"
                    className="btn rounded-none px-10 bg-red-800 "
                  >
                    Delete
                    <AiFillDelete className="text-lg -mt-1 ml-1" />
                  </label>
                </td>
              </tr>
            ))}
            {/* {products.length === 0 && (
              <>
                <p className="font-bold text-4xl  m-40">
                  You do not have any products
                </p>
              </>
            )} */}
          </tbody>
        </table>
      </div>
      {dltProduct && (
        <ConfirmationModal
          title={`Are you sure to delete this product ?`}
          message={`If you delete ${dltProduct.name} , you Can't recover anymore`}
          deleteProduct={confirmDeleteProduct}
          deleteButton="DELETE"
          modalData={dltProduct}
          cancelDelete={cancelDelete}
        />
      )}
      {products.length === 0 && (
        <>
          {/* <div className="flex">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_mawpsliw.json"
              loop
              className="w-1/2"
              speed="1"
              autoplay
            ></lottie-player>
          </div> */}
          <p className="font-bold mt-20 text-4xl  ">
            You don't have any products to sell.
          </p>
        </>
      )}
    </div>
  );
};

export default MyProducts;
