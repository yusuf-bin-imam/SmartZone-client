import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../root/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/register", element: <Register /> },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
