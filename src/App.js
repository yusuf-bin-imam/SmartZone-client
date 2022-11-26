import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider> <Toaster />
    </div>
  );
}

export default App;
