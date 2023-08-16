import React, { useEffect, useState } from "react";
import DetailsComp from "../components/ProductDetails/DetailsComp";
import { useParams } from "react-router-dom";
import Banner from "../components/Slider/Banner";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://mooran.vercel.app/details/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [id]);

  return (
    <div className='container  mx-auto'>
      <div className='mb-20'>
        <Banner />
      </div>
      <DetailsComp
        id={data}
        image={data.images}
        key={data._id}
        name={data.title}
        price={data.price}
        rating={data.rating}
        stock={data.stock}
        discountPercentage={data.discountPercentage}
        description={data.description}
        data={data}
      />
    </div>
  );
};

export default ProductDetails;
