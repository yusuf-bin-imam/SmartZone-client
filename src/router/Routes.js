import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
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
    ],
  },
]);
export default router;
