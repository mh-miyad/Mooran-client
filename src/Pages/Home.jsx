import React from "react";
import Header from "../components/Header/Header";
import HeaderBorder from "../components/Header/HeaderBorder";
import AllProducts from "../components/Cart/ProductsPage/AllProducts";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <HeaderBorder />
      </div>
      <AllProducts />
    </div>
  );
};

export default Home;
