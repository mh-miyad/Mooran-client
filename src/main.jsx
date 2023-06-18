import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl container mx-auto '>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
