import React from "react";
import Header from "../components/Header/Header";
import HeaderBorder from "../components/Header/HeaderBorder";
import AllProducts from "../components/Cart/ProductsPage/AllProducts";
import NewsLetter from "../components/NewsLatter/NewsLetter";
import WorksDemo from "../components/NewsLatter/WorkDemo/WorksDemo";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <HeaderBorder />
      </div>
      <AllProducts />

      <div>
        <NewsLetter />
      </div>
      <div className='my-5 '>
        <WorksDemo />
      </div>
    </div>
  );
};

export default Home;
