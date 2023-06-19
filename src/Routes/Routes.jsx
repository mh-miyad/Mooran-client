import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../Pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
