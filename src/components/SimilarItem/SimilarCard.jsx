import React from "react";
import img from "../../assets/products/earbuds-prod-1.webp";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const SimilarCard = ({ img, price, id }) => {
  return (
    <div>
      <div className="max-w-xs">
        <Link to={"/"}>
          <Card>
            <div className="max-w-xs w-40 h-40 mx-auto ">
              <img src={img} alt="" className="max-h-40" />
            </div>
            <div className="text-center font-bold text-slate-500">
              <p>Price : {price}</p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default SimilarCard;
