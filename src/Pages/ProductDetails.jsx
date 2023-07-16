import React from "react";
import DetailsComp from "../components/ProductDetails/DetailsComp";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <DetailsComp id={id} />
    </div>
  );
};

export default ProductDetails;
