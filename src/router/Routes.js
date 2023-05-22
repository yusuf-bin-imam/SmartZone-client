import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import CategoryProducts from "../components/CategoryProducts";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardLayout from "../components/DasgboardLayout";
import Main from "../root/Main";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../components/DashBoardInfo/MyOrders";
import AddAProduct from "../components/DashBoardInfo/AddAProduct";
import AllSellers from "../components/DashBoardInfo/AllSellers";
import AllBuyers from "../components/DashBoardInfo/AllBuyers";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Profile from "../components/Profile";
import MyProducts from "../components/DashBoardInfo/MyProducts";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import MyProfile from "../components/MyProfile";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/register", element: <Register /> },
      // { path: "/myProfile", element: <Profile /> },
      { path: "/myProfile", element: <MyProfile /> },
      { path: "/faq", element: <Faq /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products/:brand",
        element: <CategoryProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`)
            .then((res) => res.json())
            .then((data) => data),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <AdminRoute>
            <AllSellers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allBuyers",
        element: <AllBuyers />,
      },
    ],
  },
]);
export default router;
