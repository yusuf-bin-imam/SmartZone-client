import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [allProducts, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://smartzone-server.onrender.com/products`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <div>
      {allProducts?.map((singleProduct, i) => console.log(singleProduct))}
    </div>
  );
};

export default AllProducts;
