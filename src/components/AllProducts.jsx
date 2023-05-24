import React, { useEffect, useState } from "react";
import AdminProduct from "./AdminProduct";

const AllProducts = () => {
  const [Products, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://smartzone-server.onrender.com/products`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div className="grid m-20 grid-cols-1 lg:grid-cols-3 gap-3">
      {Products?.map((product, i) => (
        <AdminProduct key={i} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
