import React, { useContext } from "react";
import useBuyer from "../hooks/useBuyer";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const [isBuyer, buyersLoading] = useBuyer(user?.email);

  const location = useLocation();

  if (loading || buyersLoading) {
    return <Loader />;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
