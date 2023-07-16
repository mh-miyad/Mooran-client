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
  }, [id, data]);

  return (
    <div className='container  mx-auto'>
      <div className='mb-20'>
        <Banner />
      </div>
      <DetailsComp
        id={data._id}
        image={data.images}
        key={data._id}
        name={data.title}
      />
    </div>
  );
};

export default ProductDetails;
