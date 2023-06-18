import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavbarCom from "./components/Navbar/NavbarCom";

const App = () => {
  return (
    <div>
      <NavbarCom />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
