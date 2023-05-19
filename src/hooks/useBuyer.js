import React, { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [buyersLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    fetch(`https://smartzone-server.onrender.com/buyer/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsBuyer(data.isBuyer);
        setBuyerLoading(false);
      });
  }, [email]);
  return [isBuyer, buyersLoading];
};

export default useBuyer;
