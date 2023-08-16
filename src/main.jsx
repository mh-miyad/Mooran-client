import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import store from "./Redux/Store/store";

AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl container mx-auto '>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>,
);
