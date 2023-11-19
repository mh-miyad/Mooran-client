import React, { useEffect, useState } from "react";
import DetailsComp from "../components/ProductDetails/DetailsComp";
import { useParams } from "react-router-dom";
import Banner from "../components/Slider/Banner";
import SimilarItem from "../components/SimilarItem/SimilarItem";
import axios from "axios";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://mooran.vercel.app/details/${id}`;
    const loadData = async () => {
      const { data } = await axios.get(url);
      await setData(data);
    };

    loadData();
  }, [id]);

  return (
    <div className="container  mx-auto">
      <div className="mb-20">
        <Banner />
      </div>
      <DetailsComp
        id={data._id}
        key={data?._id}
        image={data?.images}
        name={data?.title}
        price={data?.price}
        rating={data?.rating}
        stock={data?.stock}
        discountPercentage={data?.discountPercentage}
        description={data?.description}
        data={data}
        category={data?.category}
      />
      <div>
        <SimilarItem />
      </div>
    </div>
  );
};

export default ProductDetails;
