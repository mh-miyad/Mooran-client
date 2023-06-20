import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl container mx-auto '>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
