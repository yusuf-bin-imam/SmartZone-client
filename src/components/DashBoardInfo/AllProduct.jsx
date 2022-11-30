import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal";

const AllProduct = () => {
  const [dltProduct, setDltProduct] = useState(null);

  // delete product
  const confirmDeleteProduct = (product) => {
    console.log(product);
    fetch(
      `https://assignment-12-server-lake.vercel.app/products/${product._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
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
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://assignment-12-server-lake.vercel.app/products",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <h4>all products : {products?.length}</h4>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>Blue</td>
                <td>{product.resalePrice}</td>
                <td>
                  <button className="btn btn-primary btn-outline">
                    Advertise
                  </button>
                </td>
                <td>
                  <label
                    onClick={() => setDltProduct(product)}
                    htmlFor="confirmation modal"
                    className="btn  btn-success btn-outline"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
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
    </div>
  );
};

export default AllProduct;
