import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../context/AuthProvider";
import useSeller from "../hooks/useSeller";
import Loader from "../components/Loader";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loader />;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
